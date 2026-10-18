# Store listing text

Copy and paste these into the Firefox Add-ons / Chrome Web Store / Edge Add-ons forms.

## Name

Debloated Dashboard for Canvas

## Summary (short description, max 132 characters)

A lightweight, private set of tweaks for Canvas: dark mode, better to-do list, GPA calculator and more. No tracking.

## Description

Debloated Dashboard for Canvas makes Canvas nicer to use, without bloat or tracking.

**Features**
- Fully customizable dark mode, with presets, a color editor and automatic scheduling
- A better to-do list on the dashboard
- Assignments due shown on each course card
- Grades shown on dashboard cards
- GPA calculator (college and high school, weighted and cumulative)
- Dashboard notes
- Custom dashboard card images, colors and gradients
- Custom fonts
- Condensed cards and full-width layout
- Optional assignment reminders
- Save, export and import your own themes
- Hides the "Switch to new dashboard view" prompt

**Private by design**
- No analytics, tracking, ads or accounts
- Your Canvas data never leaves your browser
- Only talks to your own school's Canvas site

Open source under the MIT License: https://github.com/CameronStorer/Debloated-Dashboard-for-Canvas

_Based on Better Canvas 5.12.6 (MIT License) by ksucpea and contributors. Not affiliated with, or endorsed by, the Better Canvas developers or Instructure. Canvas is a trademark of Instructure, Inc._

## Category

- Firefox: Other / Productivity
- Chrome: Productivity (Education is also fine)

## Privacy

- Privacy policy URL: https://github.com/CameronStorer/Debloated-Dashboard-for-Canvas/blob/main/PRIVACY.md
- Firefox data collection: **none**. This is already declared in `manifest.json`.
- Chrome "Privacy practices" tab:
  - **Single purpose:** "Customizes the Canvas LMS interface and adds study tools such as a to-do list, dark mode and a GPA calculator."
  - **`storage` justification:** "Saves the user's settings and customizations."
  - **Host permission justification:** "The extension only runs on *.instructure.com by default. Some schools host Canvas on their own domain, so the user can grant access to that single site from the popup (optional host permission). Broad access (https://*/*) is optional and requested only if the user turns on browser-wide assignment reminders. It is never granted at install."
  - **activeTab justification:** "When the user opens the popup, activeTab is used to check whether the current tab is a Canvas site on a custom domain, so the extension can offer to enable itself there."
  - **scripting justification:** "Used to run the extension's content script on custom Canvas domains the user has enabled, and to detect whether the active tab is Canvas."
  - **Remote code:** No.
  - **Data usage:** tick only **"Website content"** (assignments, announcements and grades are read from Canvas but stay on the device). Leave every other category unticked, and check all three certifications.

## Images

- Icon: `icon/icon-128.png` (Chrome needs 128×128; `icon/icon-512.png` is available for larger needs)
- Banner / promo: `icon/icon-wide.png`
- Screenshots: take 1–5 of the popup menu and your dashboard (Chrome: 1280×800 or 640×400)
