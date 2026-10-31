# Ken Caryl Glass — Homepage design studies

A simple logo-and-buttons hub linking to three responsive HTML homepage studies. All pages share one assets folder. No build tools, dependencies, or package installation are needed.

## Repository layout

```text
index.html          Hub / default landing page
hub.css             Hub styling
assets/             Shared photos, logos, maps, and SVG icons
homepage-v1/        V1: index.html, styles.css, script.js
homepage-v2/        V2: index.html, styles.css, script.js, README.md
homepage-v3/        V3: index.html, styles.css, script.js, README.md
ANALYSIS.md         Original Figma design notes
.gitignore          Excludes local OS files, secrets, and tooling state
```

## Preview locally

Open the root `index.html` in a browser. Alternatively, run this from the project folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Upload to GitHub

Use the **contents of this `kcglassinc.com` folder** as the repository root. The root `index.html` must sit alongside `assets/` and the three `homepage-v*` folders. Keep the folder names and relative paths intact. There is no need to upload the surrounding Codex `work/` or `outputs/` folders.

## Vercel deployment later

Import the GitHub repository as a static HTML site. Select the repository root containing `index.html` as the project root. This project has no build command or dependency installation. The hub is the default landing page; its buttons link directly to each version's HTML page.

No GitHub repository or Vercel deployment has been created by preparing these files.

## Design-study behavior

The three homepages retain their original Figma imagery and branding. Depositphotos preview bars are cropped outside the visible image slots; source watermarks are retained. V3 includes the repeating horizontal review slider. Quote forms demonstrate validation and local feedback only; they do not transmit information. Some wording intentionally remains as placeholder text from the mockups.
