# Ant landing page

This project is a static landing page built with React and Ant Design. It uses Vite for local development and production builds so it can be published to GitHub Pages.

## Getting started

Install dependencies:

```bash
npm install
```

Start a local dev server:

```bash
npm run dev
```

## Build and deploy to GitHub Pages

1. Build the static assets:
   ```bash
   npm run build
   ```
   The production-ready files are emitted to the `dist/` directory.
2. Publish the `dist/` directory to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
3. In your GitHub repository settings, enable GitHub Pages and select the `gh-pages` branch as the source. The site will be available at `https://<your-username>.github.io/<your-repo>/`.

You can also preview the production build locally with:

```bash
npm run preview
```

