# Wrexx.ai Website Clone

A fully functional multi-page static website inspired by wrexx.ai, ready for Vercel deployment.

## 📁 Project Structure

```
wrexx-ai-website/
├── index.html          ← Homepage
├── vercel.json         ← Vercel config
├── css/
│   └── styles.css      ← All styles
├── js/
│   └── main.js         ← Interactivity (tabs, nav, animations)
└── pages/
    ├── platform.html
    ├── ai-for-work.html
    ├── ai-for-service.html
    ├── ai-for-process.html
    ├── ai-for-banking.html
    ├── ai-for-healthcare.html
    ├── ai-for-retail.html
    ├── ai-for-it.html
    ├── ai-for-hr.html
    ├── pricing.html
    ├── blog.html
    ├── about.html
    ├── contact.html
    ├── demo.html
    ├── sign-in.html
    └── careers.html
```

## 🚀 Deploy to Vercel (3 steps)

### Option A: Vercel CLI
```bash
npm install -g vercel
cd wrexx-ai-website
vercel
```
Follow the prompts — select "No framework", root as project root. Done!

### Option B: Vercel Dashboard (drag & drop)
1. Go to https://vercel.com/new
2. Click **"Import"** → choose **"Upload"**
3. Drag the entire `wrexx-ai-website` folder
4. Click **Deploy** — your site is live in ~30 seconds!

### Option C: GitHub → Vercel
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the GitHub repo
4. Deploy — auto-deploys on every push

## 💻 Local Development (VS Code)
Open the folder in VS Code and use **Live Server** extension:
1. Install "Live Server" extension by Ritwick Dey
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://127.0.0.1:5500`

## 📄 Pages Included
- **Homepage** — Hero, solutions tabs, feature splits, stats
- **Platform** — Agent platform overview with modules
- **AI for Work / Service / Process** — Module pages
- **Industry pages** — Banking, Healthcare, Retail, IT, HR
- **Pricing** — 3-tier pricing with FAQ
- **Blog** — 6 blog post cards
- **About** — Company story, stats, team
- **Contact** — Contact form with office locations
- **Demo** — Demo request form
- **Sign In** — Login page with SSO buttons
- **Careers** — Benefits + open job listings

## ✨ Features
- Fully responsive (mobile + desktop)
- Dark theme with gradient accents
- Animated hero, scroll animations
- Working tab switcher on homepage
- Sticky navigation with dropdowns
- Back-to-top button
- All pages interlinked
