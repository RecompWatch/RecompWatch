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
8. Admin page: `…/admin.html`.

## 2. Apply an update (overwrite files with a commit)
1. Unzip `dark-theme-update.zip`.
2. In your repo delete `toolkit.html` (open it → trash-can icon → Commit). It's no longer used.
3. **Add file → Upload files**, drag the unzipped `css`, `js`, `data`, `assets` folders and the loose files (`admin.html`, `README.md`, `TUTORIAL.md`) into the page. Same names overwrite the old ones.
4. **Commit changes**. After ~1 minute press Ctrl+F5 on the site.

## 3. How editing works (the important idea)
Everything on the site lives in **one file: `data/data.js`**. You never edit HTML.
1. Open `YOUR-LINK/admin.html`.
2. Change things (projects, donations, timer…).
3. Click **⬇ Download data.js**.
4. In GitHub open the `data` folder → **Add file → Upload files** → drop the downloaded `data.js` (it overwrites) → **Commit**.
The admin does NOT save by itself — nothing changes on the site until you upload the new data.js.

## 4. Donations
### 4a. Site donation buttons (Ko-fi, PayPal, GitHub Sponsors, a payment-gateway link…)
Admin → **Site settings → Site donation links**. One per line:
`Label | URL | short note`
Example: `Ko-fi | https://ko-fi.com/yourname | One-off or monthly`
Any line whose URL still contains `YOUR_` is hidden automatically, so unfinished placeholders never show.

### 4b. Crypto wallet addresses (shown with a Copy button)
Admin → **Site settings → Site crypto addresses**. One per line:
`COIN | network | address`
Examples:
`BTC | Bitcoin | bc1q…yourbitcoinaddress`
`USDT | TRC20 (Tron) | T…yourtronaddress`
`ETH | Ethereum / ERC20 | 0x…youraddress`
Rules: copy the address from your wallet (never type it); make sure the *network* written matches the address type; send a tiny test first; NEVER paste a seed phrase or private key — only public receive addresses. Lines with `YOUR_` are hidden.

### 4c. Payment gateway (NOWPayments, Coinbase Commerce, etc.)
The site is static, so use the gateway's **hosted payment/donation page link** (not an embedded script):
1. In your gateway dashboard create a "payment link" / "donation button" / "invoice page".
2. Copy its URL.
3. Paste it as a line in **Site donation links** (`Crypto checkout | https://… | Pay with any coin`), or in a project's **Donation URL** field (4d).

### 4d. Donations for a specific project
Admin → click the project → fill **Donation URL** (their Ko-fi/Sponsors/gateway link) and/or **Crypto addresses** (`COIN | network | address`). A **♥ Donate** button and a Crypto section then appear on the project's page and on the Donate page. Only use links/addresses the project's developers gave you, and be transparent if the money goes to you instead of them.

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
- **Download URL**: leave empty to use the repo's `/releases`.
- **Avatar**: easiest is `https://github.com/USERNAME.png?size=88`. Or upload an image to `assets/img/avatars/` and write `assets/img/avatars/name.png`.
- **Stars / Forks / Issues / Activity / Last push** are plain text you type (e.g. `12`, `3h ago`); `Last push` is used by the "Recently active" sort.
Then Download data.js and upload it (section 3). To remove a project use **Delete project**. To retire one keep it and tick **Archived**.

## 7. Other settings (Admin → Site settings)
- **Timer start**: date/time the clock counts from.
- **Leader score history**: lines `YYYY-MM-DD | score` for the home-page chart (add one line per day).
- **Issues / contact link**: your GitHub issues URL (footer + scoring page). Hidden while it contains `YOUR_`.

## 8. Troubleshooting
- Change not visible: wait 1–2 min, then Ctrl+F5.
- Site shows 404: `index.html` is not at the repo's top level, or Pages isn't set to main / root.
- Blank page after an edit: the uploaded file must be named exactly `data.js` and sit in `data/`. Re-download it from admin and retry.
- Theme: the ☀/☾ button in the header switches light/dark (remembered per visitor, dark by default).
