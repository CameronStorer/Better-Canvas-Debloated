chrome.runtime.onInstalled.addListener(function () {

    let default_options = {
        "local": {
            "previous_colors": null,
            "previous_theme": null,
            "errors": [],
            "saved_themes": {},
        },
        "sync": {
            "dark_preset": {
                "background-0": "#161616",
                "background-1": "#1e1e1e",
                "background-2": "#262626",
                "borders": "#3c3c3c",
                "text-0": "#f5f5f5",
                "text-1": "#e2e2e2",
                "text-2": "#ababab",
                "links": "#56Caf0",
                "sidebar": "#1e1e1e",
                "sidebar-text": "#f5f5f5"
            },
            "new_install": true,
            "assignments_due": true,
            "gpa_calc": false,
            "dark_mode": true,
            "gradent_cards": false,
            "disable_color_overlay": false,
            "auto_dark": false,
            "auto_dark_start": { "hour": "20", "minute": "00" },
            "auto_dark_end": { "hour": "08", "minute": "00" },
            "num_assignments": 4,
            "custom_domain": [""],
            "assignments_done": [],
            "dashboard_grades": false,
            "assignment_date_format": false,
            "dashboard_notes": false,
            "dashboard_notes_text": "",
            "better_todo": false,
            "todo_hr24": false,
            "condensed_cards": false,
            "custom_cards": {},
            "custom_cards_2": {},
            "custom_cards_3": {},
            "custom_assignments": [],
            "custom_assignments_overflow": ["custom_assignments"],
            "grade_hover": false,
            "hide_completed": false,
            "num_todo_items": 4,
            "custom_font": { "link": "", "family": "" },
            "hover_preview": true,
            "full_width": null,
            "remlogo": null,
            "gpa_calc_bounds": {
                "A+": { "cutoff": 97, "gpa": 4.3 },
                "A": { "cutoff": 93, "gpa": 4 },
                "A-": { "cutoff": 90, "gpa": 3.7 },
                "B+": { "cutoff": 87, "gpa": 3.3 },
                "B": { "cutoff": 83, "gpa": 3 },
                "B-": { "cutoff": 80, "gpa": 2.7 },
                "C+": { "cutoff": 77, "gpa": 2.3 },
                "C": { "cutoff": 73, "gpa": 2 },
                "C-": { "cutoff": 70, "gpa": 1.7 },
                "D+": { "cutoff": 67, "gpa": 1.3 },
                "D": { "cutoff": 63, "gpa": 1 },
                "D-": { "cutoff": 60, "gpa": .7 },
                "F": { "cutoff": 0, "gpa": 0 }
            },
            "todo_overdues": false,
            "card_overdues": false,
            "relative_dues": false,
            "hide_feedback": false,
            "dark_mode_fix": [],
            "assignment_states": {},
            "tab_icons": false,
            "todo_colors": false,
            "device_dark": false,
            "cumulative_gpa": { "name": "Cumulative GPA", "hidden": false, "weight": "dnc", "credits": 999, "gr": 3.21 },
            "show_updates": false,
            "card_method_date": false,
            "card_method_dashboard": false,
            "card_limit": 25,
            "remind": false,
            "reminders": [],
            "reminder_count": 1,
            "multi_remind": false,
            "gpa_calc_cumulative": false,
            "gpa_calc_weighted": true,
            "custom_styles": "",
        }
    };

    const updateMsg = "Debloated Dashboard for Canvas was just updated!";

    chrome.storage.local.get(null, local => {
        chrome.storage.sync.get(null, async sync => {
            // clear data left over from the removed community themes browser
            chrome.storage.sync.remove(["id", "new_browser", "browser_show_likes"]);
            chrome.storage.local.remove(["liked_themes"]);

            let newSyncOptions = {"update_msg": updateMsg};
            let newLocalOptions = {};
            Object.keys(default_options["sync"]).forEach(option => {
                if (sync[option] !== undefined) return;
                newSyncOptions[option] = default_options["sync"][option];
            });
            Object.keys(default_options["local"]).forEach(option => {
                if (local[option] !== undefined) return;
                newLocalOptions[option] = default_options["local"][option];
            })

            if (Object.keys(newLocalOptions).length > 0) {
                chrome.storage.local.set(newLocalOptions);
            }

            if (Object.keys(newSyncOptions).length > 0) {
                chrome.storage.sync.set(newSyncOptions).then(() => {
                    console.log(newSyncOptions);
                    if (newSyncOptions.new_install === true) {
                        chrome.runtime.openOptionsPage();
                        chrome.storage.sync.set({ new_install: false });
                    }
                });
            }
        });
    });
});

/*
Site access
The content script is declared for *.instructure.com only. Schools on a custom
Canvas domain grant access to that one site, and all-sites access is only
requested when browser-wide reminders are turned on.
*/

const SITES_SCRIPT_ID = "canvas-sites";
const ALL_SITES = "https://*/*";

function toOriginPattern(domain) {
    const host = domain.trim().replace(/^https?:\/\//, "").split("/")[0];
    if (!host || host.endsWith(".instructure.com")) return null;
    return `https://${host}/*`;
}

// custom domain patterns the user has granted access to
async function grantedDomainPatterns(domains) {
    const patterns = [];
    for (const domain of domains || []) {
        const pattern = toOriginPattern(domain);
        if (pattern && !patterns.includes(pattern) && await chrome.permissions.contains({ origins: [pattern] })) {
            patterns.push(pattern);
        }
    }
    return patterns;
}

async function applySiteScripts() {
    const sync = await chrome.storage.sync.get(["custom_domain", "remind"]);
    const allSites = await chrome.permissions.contains({ origins: [ALL_SITES] });
    const matches = sync.remind === true && allSites ? [ALL_SITES] : await grantedDomainPatterns(sync.custom_domain);

    try {
        await chrome.scripting.unregisterContentScripts({ ids: [SITES_SCRIPT_ID] });
    } catch (e) {
        // nothing registered yet
    }
    if (matches.length === 0) return;
    await chrome.scripting.registerContentScripts([{
        id: SITES_SCRIPT_ID,
        matches: matches,
        excludeMatches: ["https://*.instructure.com/*"],
        js: ["js/content.js"],
        css: ["css/content.css"],
        runAt: "document_start"
    }]);
}

// run one sync at a time so registrations don't collide
let siteSyncQueue = Promise.resolve();
function syncSiteScripts() {
    siteSyncQueue = siteSyncQueue.then(applySiteScripts).catch(e => console.log(e));
    return siteSyncQueue;
}

async function reloadTabs(patterns) {
    if (patterns.length === 0) return;
    const tabs = await chrome.tabs.query({ url: patterns });
    tabs.forEach(tab => chrome.tabs.reload(tab.id));
}

// newly granted Canvas sites are remembered, which reloads them below
chrome.permissions.onAdded.addListener(async (permissions) => {
    const origins = (permissions.origins || []).filter(origin => origin !== ALL_SITES);
    const sync = await chrome.storage.sync.get("custom_domain");
    const domains = (sync.custom_domain || []).filter(domain => domain !== "");
    const known = [];
    for (const origin of origins) {
        if (domains.some(domain => toOriginPattern(domain) === origin)) {
            known.push(origin);
        } else {
            domains.push(new URL(origin.replace("/*", "/")).hostname);
        }
    }
    if (known.length < origins.length) await chrome.storage.sync.set({ custom_domain: domains });
    await syncSiteScripts();
    await reloadTabs(known);
});

chrome.permissions.onRemoved.addListener(syncSiteScripts);

chrome.storage.onChanged.addListener(async (changes, area) => {
    if (area !== "sync" || !(changes.custom_domain || changes.remind)) return;
    await syncSiteScripts();
    if (changes.custom_domain) {
        // reload pages on domains that were just added so the extension starts there
        const before = await grantedDomainPatterns(changes.custom_domain.oldValue);
        const after = await grantedDomainPatterns(changes.custom_domain.newValue);
        await reloadTabs(after.filter(pattern => !before.includes(pattern)));
    }
});

chrome.runtime.onStartup.addListener(syncSiteScripts);
chrome.runtime.onInstalled.addListener(syncSiteScripts);
