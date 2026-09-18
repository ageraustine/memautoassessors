# Mema Auto Valuers — Website

A static, multi-page website for **Mema Auto Valuers** (Mema Auto Assessors Ltd), built with plain HTML/CSS/JS so it can be hosted for free on GitHub Pages.

## Pages
- `index.html` — Home
- `about.html` — About (founders, vision, mission, values, statutory info)
- `services.html` — Scope of services (loss assessment, valuation, technical inspection, consultation, turnaround time)
- `branches.html` — Head office + regional branches (Embu, Nakuru, Kisumu, Mombasa) with map
- `clients.html` — Client / panel profile
- `contact.html` — Contact details, enquiry form, map
- `404.html` — Custom not-found page

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `mema-auto-valuers`).
2. Push all files in this folder to the repository's default branch (e.g. `main`):
   ```bash
   git init
   git add .
   git commit -m "Launch Mema Auto Valuers website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**, pick **main** and folder **/ (root)**, then **Save**.
5. Your site will first be live at `https://<your-username>.github.io/<repo-name>/`.

## Connecting your custom domain (memaautovaluers.co.ke)

A `CNAME` file containing `memaautovaluers.co.ke` is already included in this project — GitHub Pages uses it automatically once DNS is set up.

At your domain registrar (wherever `.co.ke` is registered), add these DNS records:

**For the root domain `memaautovaluers.co.ke`** — add 4 `A` records pointing to GitHub Pages' IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For `www.memaautovaluers.co.ke`** (optional but recommended) — add a `CNAME` record:
```
www   CNAME   <your-username>.github.io.
```

Then in **Settings → Pages → Custom domain**, enter `memaautovaluers.co.ke`, save, and once DNS propagates (can take a few hours), tick **Enforce HTTPS**.

## Setting up your emails (sales@memaautovaluers.co.ke, etc.)

GitHub Pages only hosts the website — it does not provide email. To get `sales@memaautovaluers.co.ke`, `info@memaautovaluers.co.ke`, etc. working, you need an email hosting service pointed at the same domain, for example:
- **Google Workspace** or **Zoho Mail** (paid, full inbox + calendar)
- **Cloudflare Email Routing** (free — forwards `you@memaautovaluers.co.ke` to an existing Gmail inbox)

Whichever you choose, they will give you MX (and sometimes TXT/SPF) records to add at your domain registrar, alongside the A/CNAME records above.

## Editing content later

- All text content lives directly in the HTML files — open any page in a text editor and edit the wording between the tags.
- Shared styling is in `css/style.css`; shared behaviour (mobile menu, animations, the contact form) is in `js/script.js`.
- The logo and favicon are in `images/logo.png` and `images/favicon.png` — replace them with a higher-resolution version any time for sharper display.
- The contact form currently opens the visitor's email app addressed to `sales@memaautovaluers.co.ke` (no backend required). If you'd like real form submissions with a database/notifications, connect a service like Formspree, Web3Forms, or a small serverless function.
