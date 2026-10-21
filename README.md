# CYGNUS · Living Botanicals

A buildless Turkish/English beauty concept built around a living aloe, with a store, beauty studio and private plant journal. The site is published at https://cygnus.health. See `BRAND.md` for the owner’s hair and skin beauty focus.

## Preview and check

With Node.js available:

```powershell
node scripts/serve.cjs
node scripts/check.cjs
```

Preview: http://127.0.0.1:4173. The server binds to loopback and serves only public site files. No dependency installation or build is required. For hosting, serve `index.html`, `css/`, `js/`, `assets/`, and `output/pdf/` together.

## Working features

- Responsive beauty-led homepage, product page and grower story, with dedicated hair and skin-care concept paths.
- Turkish/English interface and booklet selection; the existing ₺400 price remains configurable.
- Cart quantities, saved choices and message-based ordering. A prepared message is not a confirmed order.
- Searchable, filterable studio with six clearly labelled hair/skin beauty concepts and six activities that do not require harvesting aloe. Cosmetic concepts do not publish application recipes or efficacy claims.
- First-week care checklist, city/season notes, growth observations, and calendar-file downloads for soil checks.
- Private passport: plant name, adoption date, location note, dated entries, observed leaf counts, photo compression/preview, and milestone badges tied to recorded actions.
- JSON export and validated, explicitly confirmed restore. Up to 120 entries and 12 photos per passport. Photos are resized locally; they are not uploaded.
- A 22-page A5 Turkish/English PDF journal, printable adoption card, and local QR artwork pointing to `https://cygnus.health/#/passport`.
- Greenhouse concept page with the visitor’s private plant and badges. It does **not** provide community accounts, public posts, moderation or cloud sync.

## Before commercial launch

1. Replace the labelled AI concept imagery with photographs of actual sale plants in their 7 cm plastic nursery pots. The photos referred to in the pasted conversation were not included in this workspace. See `assets/README.md` for asset provenance and the generation prompt.
2. Set `whatsappE164` in `js/config.js` to the real seller number (international digits only), or add another real seller contact. With the field empty, visitors can prepare and copy a message but cannot send it through the site.
3. Confirm inventory, kit contents, dispatch areas, shipping charges, payment process, returns/damage terms, seller identity and applicable commercial requirements. The site does not invent these policies or collect payments.
4. Obtain reliable species identification and a professional review before publishing harvesting or topical recipes. Those instructions remain unpublished. No certified-organic claim is made.
5. Deploy the branch to the existing host, and verify PDF downloads and the printed QR on the actual domain before printing packaging. The QR leads to a general passport entry page, not a registered plant record.

## Storage and privacy

Legacy `aslana-*` browser storage keys are deliberately retained so existing carts, language choices, care checks and favourites survive. The new passport uses `cygnus-passport-v1`. No journal server is involved. Data is specific to the browser and origin; a localhost journal does not automatically transfer to cygnus.health. Export/import moves it manually. Clearing browser data or private browsing can remove records. Failed saves show an error instead of claiming success. The order form keeps draft contact details in the visitor’s own browser; messages leave the device only when the visitor copies/shares them or opens the configured WhatsApp link. Google Fonts is the existing external font service.

## Files

- `js/content.js`: bilingual interface, chapters and referenced care/safety sources.
- `js/experience.js`: editorial pages, passport, photo preparation and backup validation.
- `js/pages.js`: shop, journal, ritual studio, care and cart pages.
- `js/store.js` / `js/ui.js`: existing cart persistence, navigation and shared events.
- `css/botanical.css`: redesign and print layouts, layered over existing base styles.
- `scripts/check.cjs`: isolated behavior checks; never clears a real browser’s data.
- `scripts/build-booklet.py`: reproducible PDF/QR generation using ReportLab and Windows Georgia/Arial fonts. Requires Python, ReportLab and Node. Set `CYGNUS_NODE` if Node is not at the bundled runtime path.

## Verification

Twelve behavior checks cover bilingual routes, cart math, order validation, ritual and beauty filters, concept safety locks, passport persistence, HTML escaping, malformed backups and unavailable storage. Browser checks cover language switching, growth stages, profile and entry persistence, photo preparation/saving, menu navigation, mobile layout and order preparation. PDF pages were rendered with Poppler and visually inspected. Public community sharing, automated notifications and payment processing are intentionally not represented as implemented.
