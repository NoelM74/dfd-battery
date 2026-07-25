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

## 3. Iconography & diagrams
- Keep line-icon set consistent (the prototype uses Lucide). Weight 1.5–2px, colour `#0380D6` on `#E7F2FA` chips.
- The hero cell SVG in the prototype is a good lightweight placeholder; replace with prompt 2.1 render + prompt 2.5 cutaway for production.

## 4. Export & SEO hygiene
- File names: descriptive-kebab-case, e.g. `dfd-46-series-cylindrical-lfp-cell.avif`.
- Formats: AVIF/WebP with JPG fallback; compress cert scans.
- Every image ships with the alt text above (also feeds GEO/AIO).
