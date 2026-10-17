![Better Canvas](/icon/icon-wide.png)

# Better Canvas Debloated

A personal, trimmed-down copy of [Better Canvas](https://github.com/UseBetterCanvas/bettercanvas) (originally by [ksucpea](https://github.com/ksucpea)), pinned at **version 5.12.6**.

## Purpose

Newer Better Canvas releases added a lot of extra features and clutter. This copy stays on 5.12.6 and changes only these things:

- **Hides Canvas's "Switch to new dashboard view" button**, so you stay on the classic dashboard and don't hit the opt-in by accident.
- **Firefox support for unpacked installs**: the manifest declares a Firefox `background.scripts` entry and a Gecko extension ID next to the Chrome service worker, so the same folder loads in both browsers.
- **No automatic updates**: the extension is installed by hand, so it stays on this version.

All the original features still work: dark mode, a better to-do list, the GPA calculator, dashboard grades, card customization, reminders, themes and more.

## Installation

First, download the code: clone this repo, or use **Code → Download ZIP** and unzip it.

```bash
git clone https://github.com/CameronStorer/Better-Canvas-Debloated.git
```

### Firefox

**Temporary (quickest; removed when Firefox closes):**

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**
3. Select the `manifest.json` file in the repo folder.

**Permanent:** standard Firefox only keeps extensions that Mozilla has signed. You can either:

- **Self-sign (free):** on [addons.mozilla.org](https://addons.mozilla.org/developers/), submit the zipped folder as **"On your own" (unlisted)**. It isn't published anywhere. You get back a signed `.xpi` file; drag it into Firefox to install it.
- **Use Firefox Developer Edition, Nightly or ESR:** set `xpinstall.signatures.required` to `false` in `about:config`. Zip the *contents* of the repo folder, so `manifest.json` sits at the top of the zip. Then go to `about:addons` → ⚙ → **Install Add-on From File…** and pick the zip.

### Chrome / Edge / Brave

1. Go to `chrome://extensions` (or `edge://extensions`).
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select the repo folder.

## Usage

1. Open your school's Canvas site while logged in. The extension detects the domain and reloads the page once.
2. Click the Better Canvas icon in the browser toolbar to change its options.

## Credits & License

All credit for Better Canvas goes to its original authors: [ksucpea](https://github.com/ksucpea) (owner) and contributors [fudgeu](https://github.com/fudgeu), [Tibo Geeraerts](https://github.com/tibogeeraerts), [Jacob Mungle](https://github.com/Jelgnum) and [FireIsGood](https://github.com/FireIsGood).

This is a private copy for personal use only and is not redistributed. The code is under the original [LICENSE](LICENSE) (AGPL-3.0). The upstream project also asks for no public redistribution, no commercial use and no competing services without the author's written permission.
