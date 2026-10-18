// Builds store packages into dist/:
//   *-chromium.zip  for the Chrome Web Store and Edge Add-ons (background.service_worker only)
//   *-firefox.zip   for Firefox Add-ons (background.scripts only)
// The manifest in the repo keeps both keys so the folder loads unpacked in either browser.
// Usage: node build.mjs
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";

const include = ["manifest.json", "LICENSE", "_locales", "css", "fonts", "html", "icon", "js"];
const exclude = ["icon/icon-512.png", "icon/icon-wide.png"];

const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
const slug = manifest.name.toLowerCase().replace(/[^a-z0-9]+/g, "_");

const targets = {
    chromium: m => {
        m.background = { service_worker: m.background.service_worker };
        delete m.browser_specific_settings;
    },
    firefox: m => {
        m.background = { scripts: m.background.scripts };
    }
};

for (const [target, adjust] of Object.entries(targets)) {
    const dir = join("dist", target);
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    for (const path of include) cpSync(path, join(dir, path), { recursive: true });
    for (const path of exclude) rmSync(join(dir, path), { force: true });

    const m = structuredClone(manifest);
    adjust(m);
    writeFileSync(join(dir, "manifest.json"), JSON.stringify(m, null, 2) + "\n");

    const zip = `${slug}-${manifest.version}-${target}.zip`;
    execSync(`npx --yes web-ext build --source-dir "${dir}" --artifacts-dir dist --filename "${zip}" --overwrite-dest`, { stdio: "inherit" });
    rmSync(dir, { recursive: true, force: true });
}
