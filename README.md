# ant

This project now runs on Next.js so it can be deployed directly to Vercel.

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start # serves the static export from ./out
```

Deploying to Vercel only needs these settings:
- Framework: **Next.js**
- Build command: `npm run build` (builds and exports to `out`)
- Output directory: `out` (configured in `vercel.json`)
