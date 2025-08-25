# Saketh Uppuluri Sai — Static Portfolio

A lightweight, fast, and responsive static portfolio website built with HTML, CSS, and vanilla JavaScript.

## Features
- Mobile-first responsive layout
- Dark/Light theme toggle (persisted)
- Accessible navigation (skip link, focus styles)
- SEO meta, Open Graph, and JSON-LD (Person)
- Projects, Experience, Skills, Education, Certifications
- Resume download (PDF inside `assets/`)

## File Structure
```
portfolio-site/
├── assets/
│   ├── avatar.svg
│   ├── favicon.svg
│   └── Saketh_Uppuluri_Sai_Resume.pdf
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run Locally
```bash
# From this folder:
python3 -m http.server 8080
# Visit http://localhost:8080
```

## Deploy to GitHub Pages
1. Create a new repo on GitHub (e.g., `saketh-portfolio`).
2. Upload the contents of `portfolio-site/` to the repo root (not inside a subfolder).
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Select **main** branch and **/ (root)**. Save.
6. GitHub will publish to `https://<your-username>.github.io/<repo-name>/` after it builds.

### Push via Git
```bash
git init
git add .
git commit -m "Initial commit: static portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/saketh-portfolio.git
git push -u origin main
```

## Customize
- Replace `assets/avatar.svg` with your profile photo (keep the same filename or update `index.html`).
- Update links, project URLs, and any copy you want to tweak.
- To add more projects, duplicate a `.p-card` block in the Projects section.

## License
MIT — use and adapt freely.
