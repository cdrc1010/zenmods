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
- Replace all stock photos with actual shop photos before public launch. The current carousel uses locally bundled AI-generated accessory build concepts and explicitly identifies them as samples. Google Fonts requires an internet connection; system font fallbacks are provided.
- Set `facebookUrl`, `phone`, `address`, `openingHours`, and `mapsUrl` in `shop` after verifying them. Contact buttons become active when configured. With no verified details, the inquiry dialog clearly identifies itself as a preview and lets visitors copy an inquiry; nothing is sent.
- Confirm the sample service categories and About copy with the owner.

## Included interactions

Responsive mobile navigation, anchor links, three-photo carousel with arrows, slide selectors, optional autoplay, hover/focus pause, keyboard arrows, and a focus-trapped inquiry dialog with Escape to close and copy-to-clipboard.

## Scope

See `ZenMods_Quotation.md` for the proposed PHP 5,000 fixed-price package. No backend, checkout, authentication, inventory, or booking system is included.

## Accessory concept imagery

The hero, carousel, and About section use AI-generated, fully accessorized scooter concepts inspired by NMAX, Aerox, and Fazzio styling. These images are explicitly labeled as concepts. They do not document completed ZenMods work, prove component compatibility, or claim a relationship with any accessory brand. Replace with actual client-approved build photos when available.

## Project context

ZenMods is a motorcycle parts and garage business in San Carlos, Pangasinan. The proposal is PHP 5,000 for one static page with five sections; domain and hosting are separate. The visual direction is red, white, and dark backgrounds using the supplied logo. Focus on scooters including NMAX, Aerox, Click, Fazzio, and Giorno without excluding other motorcycles. Accessory inspiration includes BOM X, JVT, and RCB; actual stock and fitment must be confirmed with the shop. The hosted project is identified by `.openai/hosting.json`; continue that Site rather than creating another.
