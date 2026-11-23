# Outfit Styler

A browser-based outfit picker with seasonal/style filters, outfit randomization, and location-based weather advice.

## Run locally

Python 3 is required. From the repository root, run:

```powershell
python -m http.server 8000
```

Open http://localhost:8000/AHHHH/ and stop the server with Ctrl+C when finished. The browser will ask for location permission when you select **Recommend**.

## Weather and images

Weather data comes from the Open-Meteo forecast API and does not require an API key. Location access is required; browsers allow geolocation on `localhost` and secure HTTPS sites. Product images are hosted by their respective retailers, so an image may become unavailable if its source changes.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the `AHHHH/` folder. In the repository settings, open **Pages** and set the build source to **GitHub Actions**. Then push to `main` or run **Deploy Outfit Styler to GitHub Pages** from the Actions tab. After the workflow succeeds, the site will be available at `https://<owner>.github.io/<repository>/`.

## Deploy on Vercel

If you cannot change the GitHub repository settings, deploy from your own Vercel account with the Vercel CLI. Node.js is required. From the repository root, run:

```powershell
npx vercel login
npx vercel
npx vercel --prod
```

The root `vercel.json` publishes the `AHHHH/` folder. The first command signs in to your Vercel account, the second creates a preview deployment, and the last publishes it to production. This CLI deployment does not require permission to change GitHub settings.
