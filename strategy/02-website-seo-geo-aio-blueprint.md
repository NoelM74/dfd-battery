# Website Blueprint — SEO · GEO · AIO · Mobile
### Information architecture, keyword strategy, AI-answer-engine optimisation, technical spec, and B2B copywriting principles

The site's strategic job (per the council verdict): **be a due-diligence data room that converts high-intent buyers, and be the verifiable source AI answer engines cite** — not a brochure that ranks above resellers only to hand them warm traffic.

---

## 1. Information architecture

```
Home ......................... entity-establishing: who DFD is, parent backing, capacity,
                               certs, non-China origin, the problem solved (not chemistry)
Products
  ├─ By format ............... Cylindrical 33 / 40·42 / 46 / 60·65 · Prismatic · Sodium-ion
  └─ By application .......... EV packs · e-motorcycle packs · ESS modules/racks ·
                               telecom backup · microgrid
Solutions by Industry ........ EV OEM · E-two-wheeler · Residential & C&I ESS ·
                               Utility-scale BESS · Telecom & Microgrid
Solutions by Region .......... Middle East & Africa · Europe (Battery Passport page) ·
                               Southeast Asia · Non-China Origin (Indonesia/Bolivia)
Trust & Compliance ........... THE data room: UN38.3 · IEC62619 · UL1973 · UL1642 ·
                               GB standards · Battery Passport readiness · factory-audit
                               video · warranty terms · parent-financial proof · references
Resources .................... downloadable spec sheets, integration guides, compliance briefs
Case Studies ................. SAIC-GM / Chery / NETA volume story + regional projects
About · RFQ / Contact ........ named humans, in-region contacts, response SLA
```

**Non-negotiable IA principle:** the **Trust & Compliance** section is a first-class navigation item, not a footer link. It is the conversion engine and the GEO citation source.

## 2. Keyword strategy (clusters — validate volumes before locking a calendar)

> No fabricated search volumes are given. Run these through Ahrefs / SEMrush / Google Keyword Planner first. Clusters are prioritised by **buyer intent**, which matters more than raw volume for B2B.

**Head / category (awareness):**
- LiFePO4 cylindrical battery manufacturer
- OEM ESS battery cell supplier
- custom lithium battery pack manufacturer China
- large format cylindrical LFP cell supplier

**Mid-tail / technical (consideration — where DFD can actually win rankings):**
- 46 series cylindrical LFP cell / 46xx cell manufacturer
- tabless cylindrical battery for BESS
- e-motorcycle battery pack OEM/ODM
- telecom backup lithium battery supplier
- sodium-ion cylindrical cell manufacturer
- unilateral confluence cylindrical cell

**Regional buyer-intent (the highest-value cluster):**
- lithium battery supplier Saudi Arabia / BESS cell supplier Egypt
- battery passport compliant LFP cell EU / EU battery regulation compliant cell supplier
- non-China origin LFP cell / Indonesia made lithium battery cell
- e-scooter battery pack supplier Vietnam / Philippines

**Bottom-funnel / RFQ (closest to revenue):**
- request quote cylindrical LFP cell
- MOQ lithium cell wholesale
- battery manufacturer factory audit China
- UN38.3 certified cell supplier

**Content-map rule:** every regional + bottom-funnel term gets a **dedicated page** with a spec table, a certification statement, and an RFQ CTA. Thin combined pages will not rank or convert.

## 3. GEO / AIO — being the cited answer

When a procurement engineer asks Perplexity or ChatGPT *"who makes UN38.3-certified 46-series cylindrical LFP cells for BESS,"* the citation currently goes to a **reseller's marketplace listing**, not DFD. To flip that:

1. **Structure content as directly citable fact blocks** — spec tables, one-sentence certification statements, capacity figures, standards lists. AI engines lift discrete, verifiable facts, not paragraphs of "we-us" prose.
2. **Publish machine-readable proof:** certs mapped to batches, standards with numbers (GB/T 31484-2015, not "Chinese standards"), named references with figures (300,000+ vehicles; SAIC-GM/Chery/NETA).
3. **Schema markup** (see §4) so engines can parse Organization, Product, and FAQ entities unambiguously.
4. **Entity consistency** — identical company name, registration, and parent linkage (SZ002407) across the site, Alibaba, LinkedIn, and directories, so engines resolve DFD as one authoritative entity rather than fragmented reseller listings.
5. **FAQ blocks answering the exact procurement questions** ("What certifications do DFD cells hold?", "Can DFD ship non-China-origin cells?", "What is the warranty and who backs it?") — these are what LLMs quote verbatim.

## 4. Technical spec

- **Stack:** SSR-first (Astro or Next.js). Core Web Vitals-tuned; LCP < 2.5s, CLS < 0.1, INP < 200ms.
- **Mobile-first:** B2B procurement research increasingly starts on mobile even when the RFQ closes on desktop. Every page passes mobile usability; tap targets ≥ 44px; forms usable one-handed.
- **i18n:** `hreflang` for **EN / AR (RTL) / DE / VI**. Arabic requires genuine RTL layout, not a translated LTR page.
- **Structured data (JSON-LD):** `Organization` (with `parentOrganization` → Do-Fluoride, `foundingDate`, `numberOfEmployees`), `Product` per cell series (with `additionalProperty` for voltage/capacity/cycle-life), `FAQPage`, `BreadcrumbList`. Add `Certification`/`hasCredential` where supported.
- **Crawlable proof:** cert PDFs and the factory video must be indexable (not locked behind a JS modal with no crawlable URL) so they can be cited.
- **Performance of proof assets:** compress cert scans, lazy-load below-the-fold imagery, serve AVIF/WebP with fallbacks.

## 5. B2B copywriting principles (the "not we-us crap" mandate)

Even in B2B you are writing to **one person** who has a problem and a career risk. Copy must give that person a **benefit** and **proof**, not company self-description.

1. **Lead with the buyer's problem, not the chemistry.** "Will this run my fleet for 3 years without a fire and pass inspection?" beats "large-format cylindrical LiFePO4 cell."
2. **Every claim gets a proof element** — a cert number, a named customer, a volume figure, a downloadable document. No adjective without evidence.
3. **De-risk the direct purchase explicitly** — warranty terms, who backs them, factory-audit access, named human contact, response SLA. This is what beats the reseller's escrow.
4. **Specificity sells.** "300,000+ vehicles on the road with SAIC-GM, Chery and NETA" > "trusted by leading automakers."
5. **One clear next action per page** — Request cell specifications / Get a regional quote / Download the compliance brief.
6. **Sound human.** Short sentences. Active voice. No "leverage synergies." Write the way a good engineer explains something to a peer.

## 6. Conversion instrumentation

- RFQ form: minimal fields (company, contact, email, region, product, volume, detail) → routed to a monitored inbox with a **stated response SLA** (e.g. 4 business hours).
- Every regional/compliance page ends in an RFQ CTA.
- Track: RFQ starts, RFQ completions, cert-PDF downloads, factory-video plays, WhatsApp click-throughs — these are the real intent signals.
