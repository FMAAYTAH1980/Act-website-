# ACT Holding — Website

A 5-page static website. No build step. No backend. Drop on any host.

## Structure

```
act-website/
├── index.html          Home (with MENA opportunity section)
├── about.html          About + MENA bridge + Governance
├── portfolio.html      LUUCI · One Hundred · ACT AI Lab
├── thesis.html         Long-form founder essay (with MENA section)
├── contact.html        4 channels + contact form
└── assets/
    ├── styles.css      All design (black & white editorial)
    ├── scripts.js      Nav, reveal animations, form
    └── logos/          ACT Holding logos (black + white)
```

## Deploy in 3 minutes

The entire site is static HTML/CSS/JS. Pick any of these:

### Option 1 — Netlify (recommended, free)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `act-website/` folder onto the page
3. You get a live URL in ~30 seconds (e.g., `act-holding-xyz.netlify.app`)
4. Connect your real domain in the Netlify dashboard

### Option 2 — Vercel (also free)
1. Drag the folder into [vercel.com/new](https://vercel.com/new)
2. Connect your domain

### Option 3 — GitHub Pages
1. Push to a GitHub repo, enable Pages from `main` branch.

### Option 4 — Any web host
Upload the contents of `act-website/` to your host's `public_html` folder via FTP/SFTP.

---

## ⚠️ IMPORTANT: Activate the contact form

The contact form is built but needs ~2 minutes of setup to actually deliver messages to your inbox.

**Without setup:** clicking "Send message" opens the visitor's email client (Gmail, Outlook, etc.) pre-filled with their message addressed to `hello@act-fm.com`. They have to press Send themselves. This works but isn't ideal.

**With Formspree setup (recommended):** the visitor's message is submitted silently and arrives in your inbox automatically — no email client required, no friction. This is what serious websites do.

### To activate Formspree (free, 2 minutes):

1. Go to [formspree.io](https://formspree.io) and sign up (free tier handles 50 submissions/month).
2. Create a new form, pointing to `hello@act-fm.com` (or whichever inbox you want messages delivered to).
3. Formspree gives you a unique form ID that looks like `xqkrabcd` (the URL ends in something like `https://formspree.io/f/xqkrabcd`).
4. Open `contact.html` in any text editor.
5. Find the line: `action="https://formspree.io/f/YOUR_FORM_ID"`
6. Replace `YOUR_FORM_ID` with your real ID.
7. Save and re-upload.

Test it once after going live — submit a message yourself and confirm it lands in your inbox.

### Alternative: Netlify Forms
If you deployed on Netlify, you can use their built-in form handling instead — just add `data-netlify="true"` to the `<form>` tag in `contact.html` and Netlify will catch submissions automatically. Documented at [docs.netlify.com/forms](https://docs.netlify.com/forms/setup/).

---

## Email addresses used on the site

All five inboxes need to exist on the `act-fm.com` domain (set them up through your domain registrar or Google Workspace):

| Inbox | Purpose |
|---|---|
| `hello@act-fm.com` | Central inbox (used by contact form and footer) |
| `invest@act-fm.com` | Investment enquiries |
| `partners@act-fm.com` | Partnership enquiries |
| `press@act-fm.com` | Press and media |
| `talents@act-fm.com` | Careers, talent, service providers |

If you only have one inbox today, point all five aliases to it — most domain providers let you set up email forwarding for free.

---

## Before you go live — checklist

1. ✅ **Email addresses** — already set to `act-fm.com` throughout.
2. ⬜ **LinkedIn URL** — search all `.html` files for `https://www.linkedin.com` and replace with your real ACT Holding page.
3. ⬜ **Activate Formspree** (see above).
4. ⬜ **Test on phone** — open the live URL on your phone, swipe through every page. Mobile is where most people will view it first.

---

## Fonts

Loaded from Google Fonts (no install needed):
- **Fraunces** — serif display & body
- **Inter** — sans-serif for UI / labels

Both are open-source.

---

## Updating the site later

Plain HTML. Open any `.html` file in a text editor (TextEdit, Notepad, or [VS Code](https://code.visualstudio.com)), change the words, save, re-upload. No technical skill needed — just don't delete the tags around the text (`<p>`, `<h2>`, etc.).

For bigger changes (add a new portfolio company, new page, new section), describe what you want and someone can generate the HTML block for you to paste in.

---

## Browser support

All modern browsers (Chrome, Safari, Firefox, Edge — last two versions). Graceful degradation on older ones.
