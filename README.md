# ZenMods website

Responsive single-page React website for a small motorcycle shop. Built with React, Vite, and Lucide icons. This project contains static client-side functionality only.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The `dist` directory is ready for static hosting.

## Content and configuration

- Edit `src/content.js` to update services, carousel photos, and verified shop contact details.
- Replace `public/images/zenmods-logo.png` with the supplied ZenMods logo. An accessible text wordmark appears if the image is unavailable.
- Replace all stock photos with actual shop photos before public launch. The current carousel uses locally bundled illustrative Unsplash images and explicitly identifies them as samples. Google Fonts requires an internet connection; system font fallbacks are provided.
- Set `facebookUrl`, `phone`, `address`, `openingHours`, and `mapsUrl` in `shop` after verifying them. Contact buttons become active when configured. With no verified details, the inquiry dialog clearly identifies itself as a preview and lets visitors copy an inquiry; nothing is sent.
- Confirm the sample service categories and About copy with the owner.

## Included interactions

Responsive mobile navigation, anchor links, three-photo carousel with arrows, slide selectors, optional autoplay, hover/focus pause, keyboard arrows, and a focus-trapped inquiry dialog with Escape to close and copy-to-clipboard.

## Scope

See `ZenMods_Quotation.md` for the proposed PHP 5,000 fixed-price package. No backend, checkout, authentication, inventory, or booking system is included.
