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

## 4. Payments — PayGate.to is the ONLY payment method
Everything else (Ko-fi, PayPal, Sponsors, raw crypto addresses…) has been removed. The admin refuses to save any payment link whose domain is not `paygate.to`, and the site never shows one.

### 4a. Get a PayGate.to link
PayGate.to needs no account and no KYC. You give it a wallet you control and it creates checkout links; the money is paid out to your wallet.
1. Prepare a **self-custodial wallet** (e.g. MetaMask, Trust Wallet, Ledger). Never use an exchange deposit address. For card payments PayGate pays out in **USDC on the Polygon network**, so copy your wallet's Polygon address.
2. Open the PayGate.to documentation (search "PayGate.to instant payment gateway" → the API docs / Postman collection) and follow the 2 steps there:
   - Step 1: call `wallet.php` on `api.paygate.to` with **your payout wallet address** and a **callback URL** (any URL you own; use your site link if you have no server). It returns a temporary receiving address.
   - Step 2: build the hosted checkout link on `checkout.paygate.to` (`pay.php`) with that address, the **amount**, currency and (optional) email. The result is a normal link you can open in a browser.
   Parameter names are in their docs; their support can also walk you through it.
3. Test: open the link, pay a tiny amount, confirm it reaches your wallet. Also check with PayGate (or by paying twice) whether one link can be reused by many buyers. If each link is single-use, make a fresh link for each sale.

### 4b. Website donation button
Admin → **Site settings → Website donation link** → paste the paygate.to link. A "Donate with PayGate" card then appears on the Donate page.

### 4c. Donation button for one project
Admin → click the project → **Donation URL** → paste a paygate.to link whose payout wallet is the developer's (or yours, if you collect on their behalf — be transparent about that). A ♥ Donate button shows on the project page and on the Donate page.

### 4d. Paid ("premium") files — how it works
GitHub Pages is a static host: it cannot check a payment or hide files by itself. So this site uses a code system:
1. You upload your file somewhere private-ish (Mega, Google Drive, Dropbox… anything with a share link).
2. Admin → **Premium (paid) files → ＋ Add paid file**. Fill title, description, price label, **PayGate payment link**, the **secret file link** and an **unlock code** you choose.
3. Click **Download data.js** and upload it (section 3). The file link is saved **encrypted**; nobody can read it without the code.
4. A buyer opens the Downloads page, clicks **Pay with PayGate**, pays, then sends you proof of payment through your **contact link** (Admin → Site settings → *Contact link*, e.g. `https://t.me/yourname` or `mailto:you@mail.com`).
5. You verify the payment in your wallet and send them the unlock code. They type it in and the file link appears.
Limits: it is manual (you reply to each buyer), and anyone you give the code to can pass it on. Fully automatic delivery needs a small server that receives PayGate's callback — not possible on GitHub Pages alone; ask me if you want that built later.
To change the code or file link later: open the paid file in the admin, fill both "secret file link" and "unlock code" again, download and upload data.js.

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
- **Donation URL**: paygate.to link only (see 4c).
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
