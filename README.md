# Kritika Mishra | Biotechnology Portfolio

Digital professional portfolio (version 1) for Kritika Mishra, B.Tech Biotechnology student at Lovely Professional University.

## Project Structure

```
Portfolio/
├── index.html              ← Main page (entry point)
├── README.md               ← Project documentation
└── assets/
    ├── css/
    │   └── style.css       ← Stylesheet (navy theme matched to the resume)
    ├── js/
    │   └── script.js       ← Portfolio entries & tab logic
    └── docs/
        └── Kritika_Mishra_CV.docx  ← Resume (downloaded via "Download resume" button)
```

## Editing Your Portfolio

Open `assets/js/script.js` and add entries to the `portfolio` object at the top. Example:

```js
{ title: "Bacterial staining practical", meta: "Microbiology lab, 2026",
  description: "What I did and what I learned.", link: "https://..." }
```

`meta` and `link` are optional. Leave a list empty (`[]`) to show the placeholder message.

## Before You Publish

1. In `index.html`, replace `YOUR-LINKEDIN-ID` and `YOUR-GITHUB-USERNAME` with your real profile names.
2. Make sure your resume is at `assets/docs/Kritika_Mishra_CV.docx` (exact filename).
3. Add real projects, certifications and other entries in `assets/js/script.js`.

## Publish with GitHub Pages

1. Create a public repository, for example `kritika-portfolio`, and upload all files.
2. Go to **Settings → Pages**. Under Source choose **"Deploy from a branch"**, pick `main` and `/ (root)`, then **Save**.
3. Your site will appear at `https://YOUR-GITHUB-USERNAME.github.io/kritika-portfolio/`

## Tech Stack

- **HTML5** — semantic structure
- **Vanilla CSS** — no frameworks, fully customised
- **Vanilla JS** — lightweight tab & portfolio logic
- **Google Fonts** — Source Serif 4 + Carlito
