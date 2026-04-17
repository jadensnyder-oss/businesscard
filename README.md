# Rokt RLC — Business card demo

Interactive demo with a full-bleed confirmation frame, multi-step offer overlay, and a **lead capture** step.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown (default `http://localhost:5173`).  
`POST /api/leads` is only available after **deploying to Vercel** (or another host that runs `/api`). During `npm run dev`, submitting the form succeeds in **dev mode** if the API route returns 404 (payload is logged to the console).

## Build

```bash
npm run build
npm run preview
```

Static output is in `dist/`. Asset paths use `/assets/...` (served from `public/assets`).

## Deploy (Vercel)

1. Connect this repo to Vercel (framework: Vite, or leave auto-detect).
2. Set environment variables:
   - **`LEADS_WEBHOOK_URL`** — optional. POST JSON payload to Zapier/Make/etc. to append rows to **Google Sheets** or another store.
   - **`LEADS_SECRET`** — optional. If set, the client must send header `x-lead-secret` (extend `submitLeadForm` if you use this).

3. The serverless handler is `api/leads.js`. If `LEADS_WEBHOOK_URL` is unset, leads are **logged** in production (configure a webhook for real storage).

## Images

Use **high-resolution, lossless PNG** (or WebP lossless) under `public/assets/`. Confirmation screenshots use **CSS `object-fit: cover`** and **`min-height: 100dvh`** so the image fills the phone viewport behind the overlay.

## Legacy

`Rokt-RLC.html` is the previous single-file version; the app source of truth is **`index.html` + `src/`**.
