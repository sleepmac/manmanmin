# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page static site for the MAN MAN barbershop in Kirov, served at https://man-man.online/ (custom domain via `CNAME`). Plain HTML/CSS/JS — no build step, package manager, linter or tests. Site content and the project docs (`SEO.md`, `GOATCOUNTER.md`) are in Russian.

To preview locally, serve the repo root with any static server, e.g. `python3 -m http.server`, and open http://localhost:8000.

## Structure

- `index.html` — the whole page: SEO meta, `HairSalon` JSON-LD, prices, address, hours, contact links.
- `styles/global.css` — CSS custom properties (colors, fonts); `styles/page.css` — layout and components.
- `scripts/analytics.js` — GA4 bootstrap plus the shared click-event handler.
- `robots.txt`, `sitemap.xml` — single-URL sitemap; keep in sync if pages are added.

## Business data is duplicated

Prices, hours, address, phone, email and social links appear both in the visible markup and in the JSON-LD block in `<head>` of `index.html` (and the meta description mentions prices/address). When changing any of these, update every copy.

## Analytics

Three counters run side by side: GoatCounter (`count.js` in `<head>`), Tinylytics (embed script in `<head>`), and GA4 (loaded by `scripts/analytics.js`). Per `GOATCOUNTER.md`, none should be removed without first confirming GoatCounter is receiving data.

Click tracking:
- Tracked links carry `data-event` (event name, e.g. `click_booking`) and `data-event-title` (label shown in GoatCounter).
- One delegated click listener in `scripts/analytics.js` sends each event to both GA4 and GoatCounter; GoatCounter events fired before `count.js` loads are queued and flushed on its `load` event.
- Do not use `data-goatcounter-click` attributes — GoatCounter would count the click twice.
- To track a new link, add the two `data-event*` attributes and document the event in the «События» list in `GOATCOUNTER.md`.

UTM conventions for external placements (lowercase, `_`-separated, `utm_campaign` = `<platform>_<placement>`, existing campaign names must not be renamed) are defined in `GOATCOUNTER.md`.
