# Copy Audit — DFD New Energy website (EN source)

Scope: all five English pages (`index`, `products`, `industries`, `company`, `contact`) — 3,370 words of body copy. The AR and ES locales are translations of this source, so every fix here must propagate to `ar/` and `es/`.

Verdict up front: **the argument is right, the execution has a signature.** The strategic spine — *you are buying counterparty risk, not cells* — is correct and well chosen. What undermines it is that the same rhetorical move is used ~15 times, the punctuation is machine-cadenced, and roughly a quarter of the product copy is Alibaba-grade adjective filler that contradicts the rigour of the rest. There are also four factual self-contradictions a technical buyer will catch in the first read.

---

## Part 1 — Where it sounds AI

### 1.1 The antithesis tic (the single biggest tell)

The construction **"X, not Y"** / **"not just A — B"** / **"A can do X, but never Y"** appears at least 15 times:

| # | Line | Page |
|---|---|---|
| 1 | "direct from the maker, not the middleman" | index hero |
| 2 | "A trader sells you a box. We sell you a guarantee." | index |
| 3 | "underwritten by Do-Fluoride (SZ002407), not a trading intermediary" | index |
| 4 | "programmes your team can diligence, not logos on a slide" | index |
| 5 | "with the certificates and warranty terms attached. Not a brochure." | index |
| 6 | "over years, not months" | industries |
| 7 | "what makes a project financeable — not just a data sheet" | industries |
| 8 | "We don't sell cells. We solve the problem the cell is there to solve." | industries |
| 9 | "our approach follows the driver, not a single global pitch" | industries |
| 10 | "Backup that holds when the grid doesn't." | industries |
| 11 | "The reason a reseller can copy our spec sheet — but never our balance sheet." | company |
| 12 | "We find the defect here — so you don't find it in the field." | company |
| 13 | "Made where it makes sense to sell." | company |
| 14 | "Talk to the factory, not a middleman." | contact |
| 15 | "an origin story no reseller can offer" | index |

Two or three of these are devastating. Fifteen is a mannerism, and it is *the* pattern readers now consciously associate with generated text. It also flattens emphasis: when every sentence is a reversal, nothing is a reversal.

**Rule: keep a maximum of four site-wide, at the four highest-value moments.** Recommended keepers — #11 (best line on the site), #12, #2, #6. Rewrite the rest as plain declaratives.

Example rewrites:
- #8 → *"Every buyer on this page carries a different risk. Here is the one we take off your desk."*
- #4 → *"Three OEM programmes your team can call and verify."*
- #14 → *"Your enquiry lands on the export desk in Jiaozuo."*
- #5 → *"…with the certificate pack and warranty terms attached."*

### 1.2 Em-dash density — measured

| Page | Words | Em-dashes | Per 100 words |
|---|---|---|---|
| index | 922 | 17 | 1.84 |
| products | 727 | 12 | 1.65 |
| industries | 582 | 11 | 1.89 |
| company | 909 | 14 | 1.54 |
| contact | 230 | 3 | 1.30 |
| **Total** | **3,370** | **57** | **1.69** |

One em-dash every 59 words. Edited commercial prose sits nearer one per 300–500. The em-dash is being used as a universal joint — to append an afterthought, to substitute for a colon, to fake emphasis. **Target: cut to ~18 site-wide (one per 190 words).** Most become a full stop (stronger) or a colon (more precise). Where the dash is doing genuine apposition, keep it.

### 1.3 The scaffolding is visible on the page

`industries.html` prints the literal label **"The problem:"** three times (lines 89, 109, 127). That is the copy brief leaking into the copy. A strong writer never announces the problem — the sentence *is* the problem.

- Now: *"**The problem:** a cell failure isn't a warranty claim — it's a recall, a headline and a lost model year."*
- Better: *"A cell failure is not a warranty claim. It is a recall, a headline, and a lost model year."*

The sentence already worked. The label was insulting the reader.

### 1.4 Hedges that leak doubt

| Word | Count | Problem |
|---|---|---|
| `underway` | 5 | The word for things that have not happened. Used for EU recycling, cathode localisation, Battery Passport, EU partnerships. Five "underway"s reads as vapour. |
| `roughly` | 4 | Three of these hedge the same one-in-four claim. |
| `almost no` | 1 | "an upstream advantage almost no cell-maker can claim" — the hedge kills the boast. Either name the peer set or drop it. |

Fix: give the "underway" items a **date or a named counterparty**, or cut them. *"EU recycling and cathode localisation partnerships underway"* → *"Two EU recycling partners in contract; cathode localisation targeted for 2027."* If those facts don't exist, delete the claim — an undated "underway" is worth less than silence.

### 1.5 Repetition standing in for depth

The site restates three proof points instead of deepening them:

- `SZ002407` — **11 times**
- "warranty" — 16 · "audit" — 9 · "4,000+" — 8
- "reseller/middleman" — **8 combined**
- "one in four" — 3 · "8.5 GWh" — 5 · "300,000+" — 6
- "reply within four business hours" — **4 times**

Restating a claim does not compound it; it discounts it. By the fourth "listed public company" the reader stops reading it as evidence and starts reading it as *the only card they hold*. **Say each proof point once at full strength, then advance the argument.**

Special case: **the four-hour SLA is stated four times and it is the weakest promise on the site.** Response speed is table stakes — every trader on Alibaba claims it. Replace three of the four instances with something a trader structurally cannot promise: *"You will get a named engineer, not an account manager"* or *"Quotes include the batch-matched certificate pack."*

### 1.6 Spelling locale is not decided

`honour`, `authorised`, `standardisation`, `customised`, `neutralises`, `programme` (British) collide with `localization` ×3 (American). `enquiry` and `inquiries` both appear on `contact.html` — within 40 words of each other.

For a MENA/EU-first strategy, **standardise on British English** and fix the three `localization`s and the `inquiries`.

---

## Part 2 — Where it's generic

### 2.1 The ESS product cards are the worst copy on the site

`products.html#ess` — four cards, and the quality falls off a cliff relative to the cell section above it:

> "high safety, extended service life" · "comprehensive safety" · "reliable BMS, easy expansion and long service life" · "Ultra-large capacity backup with smart LED status display"

Every one of these is an untranslated Alibaba adjective. **"Comprehensive safety" is not a claim, it is a noise.** A storage integrator reading this learns nothing and concludes you are a trading company — the exact impression the site exists to defeat.

Contrast with the cell section directly above, which argues real engineering (unilateral confluence, busbar plane, weld count). That section is genuinely good. The ESS section reads like a different company wrote it.

**Every adjective here must become a number or a mechanism:**
- "reliable BMS" → *"Cell-level voltage and temperature monitoring, 6-year BMS warranty"*
- "easy expansion" → *"Stack to N modules without re-commissioning"*
- "comprehensive safety" → *"Pack-level pressure relief; IEC 62619 tested"*
- "ultra-large capacity" → *the actual kWh*
- "smart LED status display" → **delete.** A status LED is not a reason to buy a 5 kW backup system.

### 2.2 Headlines that are about DFD, not the buyer

| Current | Problem |
|---|---|
| "Built for the people who buy at volume." | "People who buy at volume" is not a person. Name them: fleet operators, integrators, EPCs. |
| "Four storage systems from one line." | A fact about our factory. What does the buyer get? |
| "Two more formats, same platform." | Same. |
| "Motors, telecom backup & recycling." | A list, not a headline. |
| "A manufacturer with an upstream advantage almost no cell-maker can claim." | Jargon ("upstream advantage") plus a hedge. |
| "One factory relationship. Everything from cell to system." | ✅ Works — this one is buyer-side. |
| "Every new pack runs the same five gates before it ships." | ✅ Best headline on the site. Specific, verifiable, implies rigour without claiming it. |

### 2.3 The we:you ratio fails the brief

You asked for copy that isn't "we-us business website crap." Measured:

| Page | we/our/us | you/your | Ratio |
|---|---|---|---|
| index | 7 | 11 | 1.57:1 ✅ |
| contact | 5 | 4 | 0.80:1 |
| products | 3 | 2 | 0.67:1 |
| company | 10 | 6 | 0.60:1 |
| **industries** | **13** | **6** | **0.46:1** ❌ |
| **Total** | 38 | 29 | **0.76:1** |

The homepage passes. **`industries.html` — the page that opens by declaring "We don't sell cells, we solve the problem" — is the most self-referential page on the site.** It talks about DFD more than twice as often as it talks to the reader. That is the exact failure it announces itself as avoiding.

`products.html` is low on both because it is nearly pronoun-free spec prose — that's acceptable for a spec page, but the three section intros should still address the buyer.

Target: **1.5:1 or better on every page except `products`.**

### 2.4 The buyer's actual vocabulary is missing

A procurement engineer or BESS developer evaluating cells types and searches: **$/kWh, landed cost, DDP, MOQ, lead time, warranty throughput (MWh), degradation curve, C-rate, DOD, round-trip efficiency, IEC 62933, calendar life.**

Of these, only MOQ and lead time appear — and only inside form fields, where they earn nothing for SEO or credibility.

The most damaging omission: **"4,000+ cycle life" is stated eight times without a C-rate, depth-of-discharge, or temperature.** An engineer discounts an unqualified cycle figure to zero — it is the single most gamed number in the industry. `4,000 cycles @ 1C/1C, 100% DOD, 25 °C to 70% SOH` is a *more persuasive* claim than `4,000+` precisely because it is falsifiable. Right now the site's most-repeated technical proof point is its least credible one.

### 2.5 CTAs

- "Start a conversation" / "Start the conversation" — the most generic B2B CTA in existence, used twice.
- "Browse products first" — oddly deferential; it pre-concedes they won't buy.
- "Talk to our MEA desk" / "Talk to our SEA desk" — good *if those desks exist*. If not, this is a promise the first reply will break.

Replace with the thing being exchanged: *"Get the batch-matched certificate pack"*, *"Send my specs to an engineer"*, *"See the 46-series discharge curves."*

---

## Part 3 — Factual and logical faults (fix these first)

These are not style. A technical buyer will catch each one, and each one costs more trust than any headline earns.

**3.1 — `index.html:297` is incoherent.**
> "Walk the Jiaozuo & Nanning lines — 8.5 GWh combined — and verify in under two minutes."

You cannot walk a production line in under two minutes. Two unrelated ideas (a physical factory audit, and a fast online verification) have been welded into one sentence. **This is the most obviously machine-generated line on the site.** Fix: *"Walk the Jiaozuo and Nanning lines — 8.5 GWh combined — before you place a first order."*

**3.2 — The 15-year claim contradicts the cycle spec.**
`industries.html:126` promises *"a cell it can stand behind for 15 years"*; line 131 offers *"4,000+ cycle life at 70% SOH."* At one cycle per day — the standard residential assumption — 4,000 cycles is **10.9 years**, not 15. An integrator does this arithmetic reflexively. Either state the cycling assumption that makes 15 work, quote calendar life alongside cycle life, or change the headline to 10 years.

**3.3 — The hero over-claims across the range.**
Hero states *"Cycle life 4,000+"* as a blanket figure. The products table (`products.html:123`) shows the 33 series at **3,000+**. The hero should read *"up to 4,000+"* or name the series.

**3.4 — A headline over-claims against its own body text, 20 lines apart.**
`products.html:177` headline: *"Half the welding operations."* Body: *"One busbar plane instead of two means **fewer** welds per module."* Half and "fewer" are different claims. If it is half, say half in both. If you can't substantiate half, the headline is wrong.

**3.5 — Claim precision: the international logo strip.**
KORE Power, Hyundai and LG Chem sit under the heading **"Trusted internationally"** with the gloss *"Global OEM and materials partners."* Your source material describes them as customers/collaborators. LG Chem is a battery manufacturer — a reader will assume they buy your *materials*, not your cells, and the ambiguity invites a "which is it?" question you don't want in a first meeting. Tighten to exactly what is true and defensible, e.g. *"Supply and materials relationships with KORE Power (Canada), Hyundai (South Korea) and LG Chem."* Precision here is cheap; a challenged claim is not.

**3.6 — "One in four of the world's lithium batteries" needs a footnote.**
Used three times, and it is the parent's LiPF6 position, not DFD's battery position. Stated bare, it invites the reader to think DFD claims a quarter of global battery share. Add the mechanism inline once: *"Do-Fluoride is among the world's largest producers of lithium hexafluorophosphate — the electrolyte salt in roughly one in four lithium batteries built today."* Then never repeat it.

**3.7 — Your best proof point is set as a footnote.**
> "Among the first lithium power-battery suppliers to China's A00-class EV segment."

This is rendered at `.88rem` in muted grey beneath the logo strip. It is a top-three credibility asset — first-mover status in a named, verifiable market segment — and it is styled like a disclaimer. Promote it.

---

## Part 4 — What is genuinely good (do not touch)

Credibility of an audit depends on naming what works:

- **"No warranty they can actually honour in 2039."** Best single line on the site. It makes an abstract risk concrete by putting a date on it.
- **"The reason a reseller can copy our spec sheet — but never our balance sheet."** Earns its em-dash.
- **"…where a truck-roll to replace a battery is the real cost."** Real buyer economics, in the buyer's own language. More of this.
- **"We find the defect here — so you don't find it in the field."**
- **The quality-lab table.** Ten named instruments with model numbers and what each verifies. This is the most persuasive object on the entire site and required no adjectives at all.
- **The five-gate R&D process** with working-day counts and named sign-off authorities. Same reason.
- **The reseller-vs-DFD comparison block.** Right structure, right conflict.
- **The unilateral-confluence explanation.** Actual engineering argument with an actual diagram.

Note the pattern: **everything good on this site is specific and everything weak is adjectival.** The lab table and the stage-gate work because they are pure data. The ESS cards fail because they are pure adjective. That is the whole audit in one sentence.

---

## Part 5 — Priority of work

**Tier 1 — credibility faults (do first, ~1 hour)**
1. Fix the "two minutes" sentence (3.1)
2. Reconcile 15-year vs 4,000 cycles (3.2)
3. Qualify the hero cycle-life figure (3.3)
4. Reconcile "half the welds" with its body copy (3.4)
5. Tighten the KORE/Hyundai/LG Chem framing (3.5)
6. Add C-rate / DOD / temperature to the cycle-life claim everywhere (2.4)

**Tier 2 — de-AI the voice (~half a day)**
7. Cut the antithesis construction from 15 → 4 (1.1)
8. Cut em-dashes from 57 → ~18 (1.2)
9. Delete the three "The problem:" labels (1.3)
10. Date or delete the five "underway"s (1.4)
11. Reduce SZ002407 from 11 → 4; the four-hour SLA from 4 → 1 (1.5)
12. Settle on British spelling (1.6)

**Tier 3 — raise the floor (~half a day)**
13. Rewrite the four ESS cards against numbers, not adjectives (2.1)
14. Rewrite the six us-focused headlines (2.2)
15. Rebalance `industries.html` to ≥1.5:1 you:we (2.3)
16. Replace the generic CTAs (2.5)
17. Promote the A00-class first-mover line out of footnote styling (3.7)

**Tier 4 — propagate**
18. Re-translate every changed string into `ar/` and `es/`. The Arabic still warrants a native-speaker proofread before launch regardless.

---

## Note on the translations

The AR and ES pages were translated from this source, so they inherit every fault above — including the antithesis tic, which lands differently in each language. Arabic rhetorical tradition tolerates parallel antithesis far better than English does, so #1.1 is a *smaller* problem in `ar/`. Latin American Spanish business register is generally warmer and less clipped than this copy, so the punchy fragments ("Buy from the factory. Verify everything.") may read as brusque rather than confident in `es/`. Both deserve a native pass on register, not just a re-translation of corrected strings.
