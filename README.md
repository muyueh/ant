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
npm start
```

Deploying to Vercel only needs the default settings:
- Framework: **Next.js**
- Build command: `npm run build`
- Output directory: `.next` (also set in `vercel.json` for CI/CD consistency)
