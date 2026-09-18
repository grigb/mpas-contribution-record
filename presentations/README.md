---
title: MPAS presentations — dated public editions
status: public-candidate
prepared: 2026-09-17
---

# MPAS presentations

MPAS means **Multi-Party Action Security**: an open protocol for describing an exact digital action, collecting approvals, checking permission to execute it and recording the reported outcome.

These are revised public candidates of three existing presentations and one Markdown-only presentation. Their original dates remain visible. Preparing these copies does not refresh the research, rerun the technical tests or establish final technical completion. Nothing in this folder has been published.

| Presentation | Edition | Read the content | Composition | Evidence |
|---|---|---|---|---|
| Research findings | August 31, 2026 | [Slide text](research/CONTENT.md) | [Open slideshow](research/present.html) | [Sources and limits](research/EVIDENCE.md) |
| Product and commercial research | August 31, 2026 | [Slide text](product-and-commercial/CONTENT.md) | [Open slideshow](product-and-commercial/present.html) | [Sources and limits](product-and-commercial/EVIDENCE.md) |
| Delivery and readiness | September 1, 2026 | [Slide text](delivery-and-readiness/CONTENT.md) | [Open slideshow](delivery-and-readiness/present.html) | [Sources and limits](delivery-and-readiness/EVIDENCE.md) |
| Contribution highlights | September 10, 2026 | [Markdown presentation](contribution-highlights/TOP-HITS.md) | Markdown only | [Sources and limits](contribution-highlights/EVIDENCE.md) |

The first three are the existing HyperFrames compositions, preserving slide order, layouts and animation timing. They use **HyperFrames 0.8.21** and **GSAP 3.14.2** from their existing pinned CDN references and need a network connection. No runtime libraries, fonts, images or other third-party assets are redistributed here.

Serve this directory with a local HTTP server, then open a slideshow link above. Each `present.html` uses the standard HyperFrames 0.8.21 player and slideshow controls. The matching player is loaded from its pinned CDN URL; no command-line installation is needed for these entry points.

An existing HyperFrames 0.8.21 installation can also present a composition directly, for example:

```sh
HYPERFRAMES_SKIP_SKILLS=1 hyperframes present ./research
```

Use the built-in slide navigation. Click Present or press P for the audience view. The raw `index.html` files remain the compositions; the `present.html` files supply the standard presenter interface. The Markdown slide text is the reading alternative.

Evidence companions distinguish public primary references from summaries of private evidence whose underlying records are withheld. Private component acceptance, public merges, real-agent acceptance and final integrated acceptance are different claims. Historical test totals overlap and must not be added.

The intended final technical report and presentation are separate unfinished work. This candidate contains three rendered presentation compositions and one Markdown-only highlights presentation; it does not supply a fourth technical deck.

Next: review the dated presentation content and its evidence limits, then verify the exact rendered copies before publication.
