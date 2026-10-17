![Better Canvas](/icon/icon-wide.png)

# Better Canvas Debloated

A debloated, privacy-friendly fork of [Better Canvas](https://github.com/UseBetterCanvas/bettercanvas) (originally by [ksucpea](https://github.com/ksucpea)), based on **version 5.12.6**, the last release under the MIT License.

## Purpose

Newer Better Canvas releases added a lot of bloat. This fork keeps the features people actually use and removes the rest, along with everything that talks to a third-party server.

**Kept:** dark mode (with presets, scheduling and a full editor), the better to-do list, the GPA calculator, dashboard grades, dashboard notes, card customization and colors, custom fonts, assignment reminders, and saving, exporting and importing your own themes.

**Removed / changed:**

- **Community themes are gone**: the online theme browser, likes, theme submissions and all the built-in user-made themes. Those themes hotlinked images from Tumblr, Pinterest, Blogspot and other sites.
- **No anonymous server ID.** The extension no longer registers an ID with the Better Canvas theme server, and it deletes any old ID left over from the original extension.
- **No uninstall tracking.** Uninstalling no longer opens a page on the developer's website.
- **No probing every website.** The original extension sent a request to `/api/v1/courses` on *every* site you visited until it found your Canvas domain. This fork only checks pages that actually look like Canvas.
- **No Google Fonts in the menu.** The menu font is bundled locally. Google Fonts is only contacted if you choose a custom Canvas font yourself.
- **Hides Canvas's "Switch to new dashboard view" button**, so you stay on the classic dashboard.
- **Works in Firefox and Chrome** from the same folder.

After these changes, the only network requests the extension makes go to your own school's Canvas site. The one exception is the Google Fonts request if you pick a custom font.

## Installation

Download the code with **Code → Download ZIP** above and unzip it, or clone it:

```bash
git clone https://github.com/CameronStorer/Better-Canvas-Debloated.git
```

### Chrome / Edge / Brave / Opera

1. Go to `chrome://extensions` (or `edge://extensions`).
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select the unzipped folder (the one containing `manifest.json`).

### Firefox

**Quick (temporary; removed when Firefox closes):**

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** and select `manifest.json` in the folder.

**Permanent:** standard Firefox only keeps extensions that Mozilla has signed. Choose one of these:

- **Self-sign (free, works in normal Firefox):** create a free account at the [Firefox Add-on Developer Hub](https://addons.mozilla.org/developers/) and submit the zipped folder as **"On your own"** (unlisted). It isn't published publicly. Install the signed `.xpi` you get back by dragging it into Firefox.
- **Firefox Developer Edition, Nightly or ESR:** set `xpinstall.signatures.required` to `false` in `about:config`. Zip the *contents* of the folder, so `manifest.json` is at the top level of the zip. Then go to `about:addons` → ⚙ → **Install Add-on From File…** and pick the zip.

## Usage

1. Open your school's Canvas site while logged in. The extension detects the domain and reloads the page once. If it doesn't, enter your Canvas URL in the extension menu.
2. Click the extension icon in the toolbar to change its options.

**Reminders:** the optional browser-wide assignment reminders (off by default) show pop-ups on other websites. That's why the extension asks for access to all sites. With reminders off, it does nothing on sites that aren't Canvas.

## Issues

Found a bug? [Open an issue](https://github.com/CameronStorer/Better-Canvas-Debloated/issues). Please don't contact the original Better Canvas developers about this fork.

## Credits & License

Better Canvas was created by [ksucpea](https://github.com/ksucpea), with contributions from [fudgeu](https://github.com/fudgeu), [Tibo Geeraerts](https://github.com/tibogeeraerts), [Jacob Mungle](https://github.com/Jelgnum), [FireIsGood](https://github.com/FireIsGood) and others. This fork isn't affiliated with or endorsed by them, or by Instructure (the makers of Canvas).

This fork is based on Better Canvas 5.12.6, which was released under the [MIT License](LICENSE). Upstream changed its license for later releases; none of that later code is included here. The bundled Wix Madefor Text font is under the [SIL Open Font License](fonts/OFL.txt).
