![Debloated Dashboard for Canvas](/icon/icon-wide.png)

# Debloated Dashboard for Canvas

A lightweight, private set of tweaks for Canvas: dark mode, a better to-do list, a GPA calculator and more. No tracking, no accounts, no bloat.

## Features

- Fully customizable dark mode, with presets, a color editor and automatic scheduling
- A better to-do list on the dashboard
- Assignments due shown on each course card
- Grades shown on dashboard cards
- GPA calculator (college and high school, weighted and cumulative)
- Dashboard notes
- Custom dashboard card images, colors and gradients
- Custom fonts
- Condensed cards and full-width layout
- Optional browser-wide assignment reminders
- Save, export and import your own themes
- Hides Canvas's "Switch to new dashboard view" prompt

## Privacy

The extension only talks to **your own school's Canvas site**. There are no analytics, tracking, ads, remote code or accounts, and your Canvas data never leaves your browser. The only exception is Google Fonts, which is contacted only if you choose a custom Canvas font. See the full [privacy policy](PRIVACY.md).

## Installation

Download the code with **Code → Download ZIP** above and unzip it, or clone it:

```bash
git clone https://github.com/CameronStorer/Debloated-Dashboard-for-Canvas.git
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

- **Self-sign (free, works in normal Firefox):** create a free account at the [Firefox Add-on Developer Hub](https://addons.mozilla.org/developers/) and submit the zipped folder as **"On your own"** (unlisted). Install the signed `.xpi` you get back by dragging it into Firefox.
- **Firefox Developer Edition, Nightly or ESR:** set `xpinstall.signatures.required` to `false` in `about:config`. Zip the *contents* of the folder, so `manifest.json` is at the top level of the zip. Then go to `about:addons` → ⚙ → **Install Add-on From File…** and pick the zip.

## Usage

1. Open your school's Canvas site while logged in. The extension detects the domain and reloads the page once. If it doesn't, enter your Canvas URL in the extension menu.
2. Click the extension icon in the toolbar to change its options.

**Reminders:** the optional browser-wide assignment reminders (off by default) show pop-ups on other websites. That's why the extension asks for access to all sites. With reminders off, it does nothing on sites that aren't Canvas.

## Issues

Found a bug? [Open an issue](https://github.com/CameronStorer/Debloated-Dashboard-for-Canvas/issues).

## Credits & License

Debloated Dashboard for Canvas is based on [Better Canvas](https://github.com/UseBetterCanvas/bettercanvas) 5.12.6 by [ksucpea](https://github.com/ksucpea), with contributions from [fudgeu](https://github.com/fudgeu), [Tibo Geeraerts](https://github.com/tibogeeraerts), [Jacob Mungle](https://github.com/Jelgnum), [FireIsGood](https://github.com/FireIsGood) and others. Version 5.12.6 was released under the [MIT License](LICENSE). Later upstream releases use a different license, and none of that code is included here.

Compared to Better Canvas 5.12.6, this project removes the community themes (online browser, likes, submissions, server ID and the built-in themes that hotlinked third-party images). It also removes uninstall tracking and the Canvas-domain probing of every site you visited, and it bundles the menu font locally instead of loading it from Google Fonts.

This project is not affiliated with, or endorsed by, the Better Canvas developers or Instructure. Canvas is a trademark of Instructure, Inc. The bundled Wix Madefor Text font is under the [SIL Open Font License](fonts/OFL.txt).
