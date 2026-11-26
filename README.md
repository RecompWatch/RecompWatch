# RecompWatch

Live community tracker for PC port efforts. Static site — works on GitHub Pages as-is.

## Pages
`index` (home + live timer) · `projects` · `project?id=…` (per-project page with progress, videos, updates) · `watchlist` · `scoring` · `downloads` · `donate` · `admin`

## Managing content
Everything lives in **`data/data.js`**. Two ways to edit:
1. Open the secret admin file (in the live site or locally) → add/edit projects (progress, links, videos, updates, donation/download URLs) → **Download data.js** → replace `data/data.js` → commit & push.
2. Edit `data/data.js` by hand.

Paste your wallet(s) into **`js/paygate.js`** to switch on payments, and set the timer start date in **Site settings**.

Videos: paste YouTube links (or direct .mp4) one per line. Updates: `YYYY-MM-DD | text`.

## Deploy
Push to GitHub → Settings → Pages → Branch `main`, folder `/ (root)`.

Fan-made tracker. Not affiliated with Rockstar, Take-Two or Microsoft. No game files hosted.

See **TUTORIAL.md** for the full step-by-step guide (GitHub link, donations, crypto addresses, videos, adding projects).

Payments: PayGate.to hosted checkout, no login, one wallet for everything (donations + paid files). See TUTORIAL.md section 4.
