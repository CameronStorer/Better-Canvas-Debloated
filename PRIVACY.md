# Privacy Policy: Debloated Dashboard for Canvas

_Last updated: October 18, 2026_

Debloated Dashboard for Canvas ("the extension") does not collect, sell, share or send your personal data to the developer or any third party.

## What the extension accesses

To provide its features, the extension reads information from **your own school's Canvas site** while you're logged in, using Canvas's own API. This includes your courses, assignments, to-do items, announcements and grades. It may also save changes back to Canvas when you ask it to, such as marking a to-do item complete or changing a course color.

This information is used only inside your browser to display features such as the to-do list, dashboard grades, GPA calculator and reminders. It is never sent anywhere else.

## What the extension stores

Your settings (dark mode colors, card customizations, saved themes, notes and reminders) are stored with your browser's extension storage (`storage.sync` / `storage.local`). If browser sync is turned on, your browser may sync these settings between your own devices through your browser account. The developer has no access to them.

## Network requests

The extension only makes network requests to:

- **Your school's Canvas domain**, to read and update your Canvas data as described above.
- **Google Fonts** (`fonts.googleapis.com`), **only if you choose a custom font** for Canvas in the settings.
- **Image URLs you enter yourself** for custom dashboard card images.

There are no analytics, tracking, ads, remote code or user accounts.

## Permissions

- `storage`: saves your settings.
- Access to websites: by default, the extension can only run on `*.instructure.com` Canvas sites. If your school uses a custom Canvas domain, you grant access to that one site by clicking **Enable** in the extension menu.
- `activeTab` and `scripting`: when you open the extension menu, these let it check whether the current tab is a Canvas site so it can offer the **Enable** button. They also let it run on the sites you've enabled.
- Optional access to all sites: requested only if you turn on browser-wide assignment reminders (off by default), so reminders can appear on other pages. The extension never reads or sends the content of those pages.

## Contact

Questions or concerns: [open an issue on GitHub](https://github.com/CameronStorer/Debloated-Dashboard-for-Canvas/issues).
