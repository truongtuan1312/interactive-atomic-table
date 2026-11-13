# Periodic Table

An interactive periodic table featuring all 118 elements, built with plain HTML, CSS, and JavaScript. No package installation or build step is required.

## Features

- Standard layout with 18 groups and 7 periods; the lanthanides and actinides are shown in separate rows.
- Search by element name, symbol, or atomic number, and filter by chemical category.
- Select an element to view its electron configuration, chemical and physical properties, applications, history, and safety notes.
- Group headings use the traditional A/B notation; average atomic mass is shown in amu, and appearance descriptions are in Vietnamese.
- Electron configurations use superscript exponents; temperatures can be switched between °C and K.
- Includes English pronunciation, an illustrative atomic model, and a real sample photo when available.
- Responsive layout for smaller screens, with touch-friendly horizontal scrolling for the full periodic table.

## Run locally

Open `index.html` directly in a browser. To serve the site locally, open PowerShell in the project directory and run:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deployment

This is a static website. Upload all runtime files to the root directory of your static hosting service:

- `index.html`
- `styles.css`
- `app.js`
- `elements-data.js`

Keep `elements-data.js` alongside `index.html` unless you also update the script path. Sample photos are hosted on Wikimedia Commons and require an internet connection; each detail card includes the photo credit and a link to the original. Pronunciation uses the browser's Web Speech API.

## Data and attribution

The element-property data in `elements-data.js` is adapted from [Periodic-Table-JSON](https://github.com/Bowserinator/Periodic-Table-JSON) under the [CC BY-SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/). Sample photos may have different licenses; credits are shown in the detail cards. See [DATA_ATTRIBUTION.md](./DATA_ATTRIBUTION.md) for more information.
