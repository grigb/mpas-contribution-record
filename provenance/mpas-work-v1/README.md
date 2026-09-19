# MPAS contribution record

**Author: Grig Bilham · Version 1 · Prepared 17 September 2026**

This record describes Grig Bilham's contribution work on Multi-Party Action Security (MPAS): research, engineering and specification proposals, tests, review packages, reports, and presentations. It separates public contributions from work retained privately.

## Public contributions

Two contributions from the [grigb account](https://github.com/grigb) were merged into the upstream MPAS repository on 28 August 2026:

- [Distinct-signer counting](https://github.com/oma3dao/mpas/pull/65): count separate eligible signer identities toward an approval threshold, with regression tests for repeated approvals and valid controls.
- [Unambiguous signed approvals](https://github.com/oma3dao/mpas/pull/68): reject duplicate JSON field names when decoding signed approval data, with regression tests preserving valid inputs.

The upstream pull requests are the public references for those changes and their recorded review. A merge establishes inclusion in that repository; it does not establish deployment or acceptance of other work.

## Work represented by the private evidence record

- **Research:** protocol and product analysis; comparisons with existing approaches; buyer and adoption hypotheses; security and evidence limits; and bounded prototype exercises, including negative results.
- **Engineering:** implementation repairs and specification proposals concerning action verification, approval policy, signer interfaces, credential use, recovery, receipts, generated tools, application integration, and developer setup.
- **Tests and review:** regression cases, valid controls, conformance fixtures, source comparisons, and review packages connecting particular source versions to recorded results.
- **Reports and presentations:** research findings, product and commercial analysis, delivery and readiness material, and a contribution-highlights presentation.

These are categories of retained work, not a claim that every candidate was submitted or merged. The private record retains original source identities, dates, attribution, and evidence limits. The companion [fingerprint record](fingerprint.json) reports its manifest digest and timestamp status.

## Status and attribution

MPAS builds on the work of the upstream [OMA3 MPAS project](https://github.com/oma3dao/mpas) and its contributors. This is a record of contributions to that work, not a claim to sole authorship of MPAS or its underlying ideas.

Private component acceptance, synthetic-provider checks, live-agent evidence, final integrated conformance, upstream acceptance, release, and deployment are separate states. The retained record includes unfinished acceptance requirements. Historical test totals overlap and are not added together here. This record makes no claim of production readiness, validated customer demand, exclusive rights, or a completed final technical report.

Full research documents, the wiki, presentation files, private source code, patches, and private correspondence are not included in this initial release. Their later publication requires review of the exact material and preservation of its evidence limits. Any later upstream contribution is selective and subject to review of its exact patch. This record does not announce a mass pull-request campaign.

## How to cite and verify

Cite: **Grig Bilham, “MPAS contribution record,” version 1, 17 September 2026**, followed by the actual published release URL. Until a release exists, describe this document as a prepared record, not a public release. Cite the individual upstream pull request when referring to either merged fix.

The private manifest was timestamped in Bitcoin block 967477 (2026-09-17T23:22:28Z) via OpenTimestamps. The retained private record includes `payload/tooling/portable_record.py verify` to recheck the manifest hash and timestamp proof against the frozen payload.

Use `SHA256SUMS` to check the exact README and fingerprint bytes. The fingerprint can later be matched against the retained private manifest. A digest identifies bytes; it does not disclose the private record, prove its claims, establish sole authorship, or grant rights. A timestamp supports only the existence claim and date actually established by its verified proof. The preparation date above is not an independent timestamp for the underlying work.
