# Visual Brief — Real Images + AI Image Prompts
### What to reuse from DFD's existing assets, and detailed generation prompts for the imagery the site is missing

**Art direction:** clean industrial B2B. Brand palette — deep volt blue `#024D80`, copper/electric blue `#0380D6`, sky `#9ACCEF`, on white `#FFFFFF` with ink `#333333`. Photography is real, well-lit, and specific (real cells, real lines, real racks) — **never** generic stock "businesspeople shaking hands." Every image should function as a *proof element*, not decoration.

---

## 1. Real assets available (reuse these)

From dfdxny.com (verify/re-host at production quality before launch):

| Asset | Likely use | Notes |
|---|---|---|
| `images/logo1.png`, `images/logo.png` | Nav + footer logo | Already wired into the prototype with a fallback mark. |
| `js/kindeditor/.../2024xxxx_*.jpg` (product uploads) | Cylindrical cell + pack product shots | The 60/65 & 46-series cylindrical cell renders shown in the screenshots — use for the Products grid. |
| Factory / facility photos (headquarters, Guangxi & Jiaozuo buildings) | About / Trust & Compliance | Real building photography = credibility. Re-shoot at higher resolution if possible. |
| ESS product photos (C&I station, wall-mounted home unit, portable/backup) | ESS product cards | Pulled from the "Energy Storage Product Series" page. |
| "Intelligent manufacturing" line photography + video still | Trust & Compliance factory-audit block | The production-line imagery is a genuine trust asset — feature it. |

**Priority real asset to CREATE (not generate):** a **2-minute factory-audit video** and high-res production-line stills. Per the council, this is the single highest-value visual proof element and it must be real, not AI.

## 2. AI image prompts for what the site lacks

> Generation-model agnostic (Midjourney / Nano Banana / FLUX / DALL·E). Append your model's aspect-ratio and quality flags. Keep a consistent camera and lighting language across all hero/section images so the site reads as one system. Add SEO alt text and descriptive file names on export.

### 2.1 Hero image — "the cell, engineered"
```
A single large-format cylindrical LiFePO4 battery cell, 46-series proportions, standing
upright and razor-sharp in focus, brushed-metal casing with a subtle deep-blue anodized
sheen, top terminal catching a crisp specular highlight. Studio product photography on a
clean white-to-pale-blue gradient background (#FFFFFF to #9ACCEF), soft large-softbox key
light from upper left, gentle rim light defining the edge, faint reflection on a matte
surface below. Ultra-clean, technical, premium industrial aesthetic. Shallow depth of field.
Colour grade toward #024D80 shadows and #0380D6 accents. No text, no logos, no clutter.
--ar 4:5 --style raw
```
Alt text: "DFD large-format 46-series cylindrical LiFePO4 cell, studio product shot."

### 2.2 Non-China origin — "made in Indonesia" wedge visual
```
A row of large-format cylindrical LFP cells on a precision automated assembly line inside a
bright, modern battery factory, shot in clean documentary style. Robotic pick-and-place arm
in soft focus background, spotless epoxy floor, cool daylight-balanced lighting, subtle
teal-blue equipment. Composition leaves negative space upper right for an overlay badge.
Realistic, high-resolution, trustworthy industrial photography — conveys scale, cleanliness
and quality control. Colour palette anchored in #024D80 and #0380D6. No visible national
flags, no text.
--ar 16:9 --style raw
```
Alt text: "Automated cylindrical LFP cell production line — non-China-origin manufacturing capability."

### 2.3 ESS in situ — utility / C&I proof
```
An outdoor containerised commercial battery energy storage system (BESS) enclosure, matte
white and blue steel cabinet with ventilation louvres, installed on a concrete pad under a
clear desert-blue sky, solar panels blurred in the background. Golden-hour side lighting,
sharp architectural product photography, clean and modern. Conveys utility-scale reliability
and Middle-East / MENA deployment context. Subtle #0380D6 accent panels on the cabinet.
Photorealistic, no text, no logos.
--ar 16:9 --style raw
```
Alt text: "Containerised C&I BESS installation in a MENA solar-plus-storage project."

### 2.4 E-two-wheeler pack — SEA volume visual
```
A modern electric motorcycle battery pack, sleek black-and-blue casing with visible cooling
fins and a robust connector, photographed at a three-quarter angle on a light neutral studio
background. Crisp commercial product lighting, subtle blue rim light, premium finish.
Alongside, softly out of focus, the silhouette of an electric scooter. Clean, aspirational,
Southeast-Asia e-mobility context. Palette #024D80 / #0380D6. Photorealistic, no text.
--ar 4:3 --style raw
```
Alt text: "DFD e-motorcycle battery pack for Southeast Asian e-mobility OEMs."

### 2.5 Cutaway / technical diagram — "unilateral confluence"
```
A clean technical cutaway illustration of a large-format cylindrical LiFePO4 cell showing the
single-side (unilateral confluence) busbar at the top, jelly-roll winding inside, full-lug
tab construction, and a bidirectional pressure-relief vent. Isometric, blueprint-meets-modern
infographic style, thin precise line work in #024D80 on white with #0380D6 highlight callout
lines and small numbered markers (no text labels — leave room for HTML callouts). Minimal,
engineering-grade, elegant.
--ar 1:1
```
Alt text: "Cutaway of DFD unilateral-confluence cylindrical LFP cell architecture."

### 2.6 Certification / data-room hero
```
An overhead flat-lay of neatly arranged battery test and certification documents and a
tablet displaying a certification badge, beside a single cylindrical cell and a caliper, on a
clean white surface with soft even lighting. Organized, precise, trustworthy — evokes
laboratory testing and compliance rigor. Cool neutral tones with #0380D6 accents on the
tablet screen. Photorealistic, generic document shapes only (no readable fine print, no real
logos).
--ar 16:9 --style raw
```
Alt text: "Battery certification and test documentation — UN38.3, IEC62619, UL1973."

### 2.7 Compliance / EU Battery Passport concept
```
A minimalist conceptual illustration of a digital battery passport: a stylized cylindrical
cell connected by thin glowing lines to floating data nodes (carbon footprint, provenance,
recyclability icons) and a QR-like glyph, over a soft white-to-pale-blue gradient. Modern,
clean, techy-but-corporate infographic style in #024D80 and #0380D6. No readable text.
--ar 16:9
```
Alt text: "EU Battery Passport digital traceability concept for DFD cells."

## 2b. GPT Image-1 (ChatGPT) prompts — calibrated to the live site palette

These are written for **ChatGPT's image generator (gpt-image-1)** and tuned to drop straight into the built site's containers and colours. The live palette is: background near-black **#07121D / #0A1826**, deep navy **#0B2136**, electric blue **#1E7FE0 / #3B9EFF**, glow blue **#5AB0FF**, energy amber **#F6A93B**, on a dark theme. Where a slot sits in a dark section, ask for a **dark navy background that matches #0B2136** so the image blends edge-to-edge; where a `float-stat` chip overlays the bottom-left corner, ask for **negative space / darker area in the lower-left**.

### PRIORITY 1 — E-motorcycle battery pack (industries.html · "E-two-wheeler" slot, 4:3)
> Currently a branded placeholder with a bike icon — replace with this.
```
A premium product photograph of a modern electric-motorcycle lithium battery pack:
a sleek matte-black rectangular pack with subtle electric-blue (#3B9EFF) accent lines,
visible cooling fins and a heavy-duty industrial connector on top. The pack sits at a
three-quarter angle, sharply lit with cool studio lighting and a soft blue rim light.
Background is a smooth dark navy gradient (#0B2136 to #07121D) that fills the frame edge
to edge — no white, no seams. Keep the lower-left third darker and emptier for a text
overlay. Faint out-of-focus silhouette of an electric scooter in the deep background.
Photorealistic, clean, high-end industrial, 4:3, no text or logos.
```
Alt: "DFD e-motorcycle lithium battery pack, 361X–723X platform."

### PRIORITY 2 — Containerised C&I energy-storage system (industries.html · "Storage" slot & products ESS, 4:3)
> Currently a placeholder with a container icon — replace with this.
```
A photorealistic outdoor commercial battery energy-storage system: a matte white-and-navy
steel container/cabinet with ventilation louvres and a subtle electric-blue (#1E7FE0) light
strip along one edge, installed on a concrete pad. A row of solar panels sits softly out of
focus behind it under a deep blue twilight sky. Cool cinematic lighting with a faint blue
glow. The overall colour grade is dark and premium, dominated by navy (#0B2136) and blue so
it blends into a dark website section. Lower-left kept darker for a stat overlay.
Photorealistic, no text, no logos, 4:3.
```
Alt: "DFD containerised C&I BESS in a solar-plus-storage project."

### OPTIONAL — Alternative hero cell render (if replacing the real photo, full-bleed 16:9)
```
A dramatic hero product render of a single large-format cylindrical LiFePO4 battery cell
standing upright, deep-blue anodized metal casing with a bright specular highlight down one
edge and a glowing electric-blue (#3B9EFF) ring of light around the base. The cell is
positioned on the RIGHT third of a wide frame; the left two-thirds is a dark navy tech
environment (#07121D to #0B2136) with faint horizontal light streaks and a subtle grid,
leaving clean dark space for headline text. Cinematic, premium, energy-tech aesthetic.
16:9, no text, no logos.
```
Alt: "DFD large-format cylindrical LFP power cell, hero render."

### OPTIONAL — Factory / production-line (data-room & origin sections, 16:9)
```
A clean documentary photograph looking down a modern battery-cell production line: precise
automated machinery and a robotic arm in soft focus, spotless epoxy floor, cool
daylight-balanced lighting with subtle teal-blue equipment accents. Conveys scale,
cleanliness and quality control. Colour graded toward navy (#0B2136) and electric blue so it
sits naturally in a dark section. Negative space upper-right for an overlay badge. No visible
national flags, no text. Photorealistic, 16:9.
```
Alt: "DFD automated cell production line — quality-controlled manufacturing."

### OPTIONAL — EU Battery Passport concept (Europe / compliance, 16:9)
```
A minimalist conceptual illustration of a digital battery passport: a stylised cylindrical
cell connected by thin glowing electric-blue (#3B9EFF) lines to floating data nodes
(carbon-footprint, provenance and recyclability icons) and a QR-style glyph. Set on a dark
navy gradient background (#0B2136 to #07121D) with a faint technical grid. Modern, clean,
corporate-tech infographic style using only navy, electric blue and white. No readable text.
16:9.
```
Alt: "EU Battery Passport digital-traceability concept for DFD cells."

**Workflow:** generate at the largest size ChatGPT offers, export, compress to AVIF/WebP, and drop into `website/assets/img/` using the descriptive file name in each alt line. In `industries.html`, swap the `<div class="split-media media-ph ...">` placeholder back to `<div class="split-media ..."><img src="assets/img/FILENAME" alt="ALT"></div>`.

## 2c. High-res replacements for the low-quality original photos (gpt-image-1 / Nano Banana)

The originals scraped from dfdxny.com are low-resolution. These replace them with one cohesive cinematic set. **Shared art direction (put this line in every prompt):** *cinematic studio product photography, deep navy background #07121D to #0B2136, a single electric-blue #3B9EFF rim/edge light, matte surfaces, shallow depth of field, subtle volumetric haze, photorealistic, no text, no logos.* The HTML is already pre-wired to these filenames with a fallback to the current image, so uploading each `.webp` upgrades the slot with no code change.

### R1 — Hero cell (index.html full-bleed hero, 16:9) → `dfd-large-format-cylindrical-lfp-cell-hero.webp`
> IMPORTANT: compose the cell on the **LEFT third** of the frame with the right two-thirds empty dark space — the site mirrors the hero, so it will appear on the right beside the headline.
```
A single large-format cylindrical LiFePO4 battery cell standing upright, positioned in the
LEFT third of a wide frame. Deep gunmetal-blue anodized metal casing with a crisp specular
highlight running down one edge and a glowing electric-blue (#3B9EFF) ring of light around
the base. The right two-thirds of the frame is empty dark navy tech environment (#07121D to
#0B2136) with faint horizontal light streaks and a subtle grid. Cinematic studio product
photography, single electric-blue rim light, matte surface, shallow depth of field, subtle
volumetric haze, photorealistic, 16:9, no text, no logos.
```
Title: `DFD Large-Format Cylindrical LiFePO4 Power Cell` · Alt: `DFD large-format cylindrical LiFePO4 automotive power cell on a dark tech background`

### R2 — Cell series lineup (index bento + products.html cells, 4:3) → `dfd-cylindrical-lfp-cell-series-lineup.webp`
```
Three large-format cylindrical LiFePO4 battery cells of increasing size (40/42, 46 and 60/65
formats) standing in a row, gunmetal-blue anodized casings with electric-blue (#3B9EFF) edge
highlights and glowing base rings, arranged in a shallow arc. Reflective dark floor. Deep
navy background (#07121D to #0B2136) with soft volumetric haze. Cinematic studio product
photography, single electric-blue rim light, matte surfaces, shallow depth of field,
photorealistic, 4:3, no text, no logos.
```
Title: `DFD Cylindrical LFP Cell Series — 40/42, 46, 60/65` · Alt: `DFD cylindrical LiFePO4 cell series lineup — 40/42, 46 and 60/65 formats`

### R3 — EV battery module (industries.html EV OEM, 4:3) → `dfd-ev-lithium-battery-module.webp`
```
A modern EV lithium battery module built from large-format cylindrical cells: a precise
rectangular module showing rows of cylindrical cell tops with busbar interconnects and a
matte-black housing, electric-blue (#3B9EFF) accent light along one edge, three-quarter
angle. Faint out-of-focus silhouette of a passenger EV chassis in the deep background. Deep
navy environment (#07121D to #0B2136). Cinematic studio product photography, single
electric-blue rim light, shallow depth of field, subtle haze, photorealistic, 4:3, no text,
no logos.
```
Title: `DFD EV Lithium Battery Module for Automotive OEMs` · Alt: `DFD EV lithium battery module built on cylindrical LFP cells for automotive OEMs`

### R4 — Production line (index.html non-China-origin, 4:3) → `dfd-battery-cell-production-line.webp`
```
A clean modern battery-cell production line viewed down its length: precise automated
machinery and a robotic pick-and-place arm handling cylindrical cells, spotless dark epoxy
floor, cool daylight machinery accented with electric-blue (#3B9EFF) indicator lighting.
Conveys scale, cleanliness and quality control. Colour graded toward deep navy (#0B2136) so
it blends into a dark website section. Cinematic industrial photography, shallow depth of
field, subtle haze, photorealistic, 4:3, NO play button, no text, no logos.
```
Title: `DFD Automated Battery Cell Production Line` · Alt: `DFD automated cylindrical cell production line — quality-controlled manufacturing`

## 3. Iconography & diagrams
- Keep line-icon set consistent (the prototype uses Lucide). Weight 1.5–2px, colour `#0380D6` on `#E7F2FA` chips.
- The hero cell SVG in the prototype is a good lightweight placeholder; replace with prompt 2.1 render + prompt 2.5 cutaway for production.

## 4. Export & SEO hygiene
- File names: descriptive-kebab-case, e.g. `dfd-46-series-cylindrical-lfp-cell.avif`.
- Formats: AVIF/WebP with JPG fallback; compress cert scans.
- Every image ships with the alt text above (also feeds GEO/AIO).
