# RecompWatch — complete manual-setup tutorial

## 1. Get your GitHub link (first time)
1. Create a free account at github.com.
2. Click **+ → New repository**. Name it e.g. `recompwatch`, set **Public**, click **Create repository**.
3. Unzip `recompwatch.zip` on your computer. Open the unzipped folder.
4. In the new repo click **uploading an existing file** (or **Add file → Upload files**). Select everything INSIDE the folder (index.html, css, js, data, assets…) and drag it in. `index.html` must sit at the top level of the repo, not inside another folder.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, press **Save**.
7. Wait 1–2 minutes, refresh the Pages screen. Your link appears at the top:
   `https://YOUR-USERNAME.github.io/recompwatch/`
   (Tip: name the repo `YOUR-USERNAME.github.io` to get the shorter link `https://YOUR-USERNAME.github.io/`.)
8. Admin page: your hidden admin page (the secret-named `rw-…-panel.html` file; the name was given to you privately — never share or publish it).

## 2. Apply an update (overwrite files with a commit)
1. Unzip `dark-theme-update.zip`.
2. In your repo delete `toolkit.html` (open it → trash-can icon → Commit). It's no longer used.
3. **Add file → Upload files**, drag the unzipped `css`, `js`, `data`, `assets` folders and the loose files (the secret admin file, `README.md`, `TUTORIAL.md`) into the page. Same names overwrite the old ones.
4. **Commit changes**. After ~1 minute press Ctrl+F5 on the site.

## 3. How editing works (the important idea)
Everything on the site lives in **one file: `data/data.js`**. You never edit HTML.
1. Open `YOUR-LINK/<your-secret-admin-file>.html` (or just double-click the file on your computer).
2. Change things (projects, donations, timer…).
3. Click **⬇ Download data.js**.
4. In GitHub open the `data` folder → **Add file → Upload files** → drop the downloaded `data.js` (it overwrites) → **Commit**.
The admin does NOT save by itself — nothing changes on the site until you upload the new data.js.

## 4. Payments — PayGate.to, no login, no links to paste
Every payment on the site (website donation, project donations, paid files) goes through PayGate.to's hosted multi-coin checkout and lands in **the same wallets**. There is no account, no API key and nothing to generate by hand: the site talks to PayGate.to itself, exactly like their official SDK does, and creates a fresh checkout for every click.

### 4a. Switch it on (one time)
1. Open **`js/paygate.js`**.
2. In the `wallets` block paste the address of your own self-custodial wallet for each network you want to accept (`evm` covers ETH / USDT / USDC on Ethereum, BNB Chain, Polygon, Arbitrum, Base… with a single address). Leave a network as `''` to switch it off. Never use an exchange deposit address.
3. Commit & push. That's it — the ♥ Donate and 🔒 Pay buttons start working. Until a wallet is pasted they show a friendly "not switched on yet" message.
Optional in the same file: `presets` (donation amount chips), `currency`, `minAmount`, `addFees` (buyer pays the network fee) and `theme` (checkout colour).

### 4b. Donations
Every ♥ Donate button (Donate page, project pages) opens the amount picker, then PayGate's checkout. All of them pay the same wallets. Nothing to configure per project.

### 4c. Downloads page
- Every project links to **its own GitHub** (`/releases`, or the **Free download URL** if you set one).
- A project with **no GitHub URL** becomes a **paid file** automatically. Open it in the admin and fill **Paid file: price in USD** and **Paid file: private file link** (Mega / Drive / …). Until both are filled the row says "Not available yet".
- The **★ Premium files** button at the top of the Downloads page (only there) opens extra paid files that don't belong to a project. Admin → **Premium (paid) files → ＋ Add paid file** → title, description, price, private link.
- After paying, the buyer's browser checks PayGate for the payment and the file unlocks on their screen (they can also press **I already paid**).

### 4d. Be aware (static-site limits)
- GitHub Pages has no server, so nobody can *truly* hide a file link: private links are stored lightly encoded in `data.js`, shown to the buyer only after PayGate reports the payment as paid. A determined visitor can read `data.js`. For files that must be strictly protected, use a file host with expiring links, or ask for a small server.
- The unlock is remembered per browser/device.
- If PayGate ever blocks requests from the browser, get your free dedicated endpoint (paygate.to → white-label API guide) and put it in `apiHost` inside `js/paygate.js`.
- Test once with a tiny amount before announcing: donate $1 to yourself and check the wallet. Payments below each coin's minimum get stuck at PayGate, so don't set prices lower than the minimums.

## 5. Add videos to a project
Admin → click the project → **Videos / proof links**, one per line:
- YouTube (plays on the project page): `https://www.youtube.com/watch?v=XXXXXXXXXXX` (youtu.be and shorts links work too).
- Direct file: `https://…/clip.mp4` (plays in a player).
- Reddit / Rumble / X / any other site (can't be embedded, becomes a button and a ▶ tag on the project card): `Video on Reddit | https://reddit.com/…`
Tip: upload big videos to YouTube (unlisted is fine) instead of GitHub (web uploads max 25 MB per file).

## 6. Add a new project
Admin → **＋ Add project**, then fill:
- **ID**: short lowercase slug, unique (`my-project`); it becomes the page address `project.html?id=my-project`.
- **Name**, **Owner/credit** (e.g. `user/repo`), **Repository URL**.
- **Stage**: *Race (ranked)* = public code, ranked; *Private build* = no public code, shown unranked with a 🔒; *Watchlist* = early/stalled.
- **Progress %**: 0–100 on the ladder (10 Exe runs, 20 First frame, 30 Main menu, 40 In the world, 50 Playable, then up to 100 via Story/Rendering/Performance/Stability).
- **Tags**: comma separated (`Compatibility layer, GTA VI only, AMD, Self-reported`). `AMD`/`NVIDIA` drive the filter buttons.
- **Summary**, **What works**, **What's blocking** (one item per line).
- **Detail metrics** (one per line `Name | percent | label`), e.g. `Rendering | 80 | Close to the console` — draws the four small bars.
- **Updates**: `2026-11-26 | Reached Playable` per line (timeline on the project page).
- **Extra links**: `Discord | https://discord.gg/…`
- **Free download URL**: leave empty to use the repo's `/releases`. **Paid file** fields: only for projects with no GitHub URL (see 4c).
- **Avatar**: easiest is `https://github.com/USERNAME.png?size=88`. Or upload an image to `assets/img/avatars/` and write `assets/img/avatars/name.png`.
- **Stars / Forks / Issues / Activity / Last push** are plain text you type (e.g. `12`, `3h ago`); `Last push` is used by the "Recently active" sort.
Then Download data.js and upload it (section 3). To remove a project use **Delete project**. To retire one keep it and tick **Archived**.

## 7. Other settings (Admin → Site settings)
- **Timer start**: date/time the clock counts from.
- **Leader score history**: lines `YYYY-MM-DD | score` for the home-page chart (add one line per day).
- **Issues link**: your GitHub issues URL (footer + scoring page). Hidden while it contains `YOUR_`.

## 8. Troubleshooting
- Change not visible: wait 1–2 min, then Ctrl+F5.
- Site shows 404: `index.html` is not at the repo's top level, or Pages isn't set to main / root.
- Blank page after an edit: the uploaded file must be named exactly `data.js` and sit in `data/`. Re-download it from admin and retry.
- Theme: the ☀/☾ button in the header switches light/dark (remembered per visitor, dark by default).
