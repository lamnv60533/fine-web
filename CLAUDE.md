# CLAUDE.md — FINE Auditing website

Marketing website for **FINE Auditing Limited Liability Company** (audit / tax / accounting / advisory, Vietnam). Bilingual EN/VN.

## Architecture

This is a **build-less static site** — there is no `package.json`, no bundler, no npm install, no build step.

- React 18, ReactDOM, and Babel Standalone are loaded from CDN (unpkg) in each HTML page.
- Local `.jsx` files are transpiled **in the browser** via `<script type="text/babel" src="...">`.
- Each page is a thin HTML shell that loads the same four scripts and renders one page component.

### Key files

| File | Role |
|------|------|
| `pages.jsx` | Page-level components — exposes `window.FINE_PAGES = { Home, About, Team, Services, Partners }` |
| `shell.jsx` | Layout shell / header / footer / language toggle — exposes `window.FINE_SHELL` (`PageShell`, `PageBanner`) |
| `data.jsx` | Content data — exposes `window.FINE_DATA` (`VALUES`, `SERVICES`, `TEAM`, `CLIENTS`, `STATS`, `CONTACTS`) |
| `tweaks-panel.jsx` | Dev-only visual tweak panel |
| `styles.css` | All styling (single stylesheet) |
| `*.html` | Per-page entry shells (`index.html`=Home, `our-services.html`, `our-team.html`, `our-partners.html`, `about.html`, `contact.html`) |

Scripts load in order: `data.jsx` → `tweaks-panel.jsx` → `shell.jsx` → `pages.jsx`, then an inline script picks the page component (e.g. `window.FINE_PAGES.Home`) and renders it inside `<PageShell>`.

Files with `-v1` / `backup` in the name are old versions — not used by the live pages.

## Running the project

The `.jsx` files are fetched by `src`, so opening the HTML via `file://` will **not** work (browsers block those fetches). Serve over HTTP from the project root:

```bash
# any static server works — pick one:
python3 -m http.server 8000
# or
npx serve .
```

Then open <http://localhost:8000/index.html> (or `our-services.html`, `our-team.html`, etc.).

There is nothing to compile — edit a `.jsx` or `styles.css` file and refresh the browser.

## Editing notes

- Text content lives in `data.jsx` (structured content) and inline JSX in `pages.jsx` (headings, hero copy).
- Bilingual strings use the `lang === "en" ? "..." : "..."` pattern throughout.
- All styling changes go in `styles.css`.
