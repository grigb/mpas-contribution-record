---
title: MPAS research presentation
status: public-candidate
source_date: 2026-08-31
prepared: 2026-09-17T23:03:34Z
---

# MPAS research

Historical edition: **2026-08-31**. This revised public candidate preserves the source edition’s evidence cutoff. It does not refresh research or technical acceptance. [Evidence and limits](EVIDENCE.md).

### Slide 1: MPAS carries an exact action from proposal to receipt

**Layout**

hero

**On-slide copy**

- Research briefing · 2026-08-31
- Multi-Party Action Security: what the research supports, disproves, and leaves open
- Historical research edition
- Action path | Proposal → approval → verification → execution → receipt

**Source trace**

- SRC: [Slide 1 evidence summary](EVIDENCE.md#slide-1) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

MPAS means Multi-Party Action Security. It describes an exact action, its approvals, deterministic verification, execution and receipt. This is the August 31 research edition, revised for public reading. It makes no production-readiness claim. If presentation playback is unavailable, use CONTENT.md.

### Slide 2: The Action Package keeps review tied to what will execute

**Layout**

flow

**On-slide copy**

- Payload | The exact command, request, transaction, or instruction
- Envelope | The target and payload hash
- Approvals | Signed decisions bound to the envelope
- Verifier | Deterministic policy check
- Execution | The committed payload runs
- Receipt | The resolution is recorded

**Source trace**

- SRC: [Slide 2 evidence summary](EVIDENCE.md#slide-2) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

The Action Package contains the execution payload, envelope and approvals. The reviewed data must remain bound to the data used at verification and execution. The deterministic verifier checks trusted inputs and policy. A receipt records the reported resolution; it does not prove external reality.

### Slide 3: MPAS governs consequential actions across more than AI agents

**Layout**

participants

**On-slide copy**

- Human
- Agent
- Device
- Contract
- Organization
- Software component
- Preferred integration | Native MPAS verification
- Optional bridge | Credential Adapter

**Source trace**

- SRC: [Slide 3 evidence summary](EVIDENCE.md#slide-3) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

The protocol is broader than AI-agent use. Its signer roles can include people, agents, devices, contracts, organizations and software components. A credential adapter bridges systems that do not verify MPAS themselves. It is one integration route; native verification is preferred where available.

### Slide 4: Action authorization does not supply the whole data system

**Layout**

boundary

**On-slide copy**

- MPAS protocol | Exact action representation
- MPAS protocol | Approvals and deterministic verification
- MPAS protocol | Committed-payload execution and receipts
- Outside the protocol | Document retrieval and row filtering
- Outside the protocol | Data classification and disclosure control
- Outside the protocol | Secret storage and key management
- Beyond the protocol | A data-access request can be governed; another system must enforce the data boundary

**Source trace**

- SRC: [Slide 4 evidence summary](EVIDENCE.md#slide-4) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

MPAS can govern a proposed data-access action. Retrieval, filtering, classification, disclosure enforcement and secret storage remain separate responsibilities. The diagram describes a technical boundary, not a company product plan.

### Slide 5: The opportunity is the combination, not a missing primitive

**Layout**

conjunction

**On-slide copy**

- Digest-bound general actions
- Distinct approvals when policy requires them
- Proposer exclusion when policy requires it
- Credential isolation
- Committed-payload execution
- Third-party-verifiable evidence
- Boundary | August research inference: a useful combination of known controls; the specification does not require every part

**Source trace**

- SRC: [Slide 5 evidence summary](EVIDENCE.md#slide-5) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

The opportunity identified in August was combining known controls around one exact action. It was not a claim to have invented any individual control. Policy must require distinct approvals and proposer exclusion. Different identities alone do not establish independent judgment.

### Slide 6: The August review found close comparisons and adverse evidence

**Layout**

field

**On-slide copy**

- Established components | Approval systems
- Established components | Payload binding
- Established components | Credential isolation
- Established components | Receipts and multi-party authorization
- Bounded finding | Microsoft and Teleport were close comparisons in August
- Bounded finding | Automation can reduce manual approval steps
- Bounded finding | Bounded searches are evidence floors, not a market census

**Source trace**

- SRC: [Slide 6 evidence summary](EVIDENCE.md#slide-6) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

The August review identified close comparisons and reasons more manual approval may not be valuable. It described five systems reducing or automating different parts of approval, not five identical replacements. A bounded comparison does not prove an empty category or exclude an unlocated complete implementation.

### Slide 7: August code evidence showed buildability, not readiness

**Layout**

metrics

**On-slide copy**

- 194 | SDK tests passed in the historical run; type and build checks passed
- 403 | tests passed in the separate local implementation run
- 55 | findings in the August accepted inventory
- 11 | findings independently re-derived in that review
- 13 | repair groupings for the other 44 findings
- Boundary | Private August evidence summarized here; no new test run, unique-test sum or production-readiness claim

**Source trace**

- SRC: [Slide 7 evidence summary](EVIDENCE.md#slide-7) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

These are separate historical measures from the August 31 report. Do not add the test counts. Eleven findings were independently re-derived; organizing the other forty-four into thirteen repair groups did not re-audit each finding. The underlying run records remain private. No test was rerun for this edition.

### Slide 8: MPAS creates stronger evidence, not certainty

**Layout**

limits

**On-slide copy**

- Receipts | Signed reports, not external truth
- External effects | Duplicate prevention has limits; outcomes can remain uncertain
- Credentials | Exposure reduced, not erased
- Independence | Signature count does not prove diverse control
- Privacy | Approver identity remains visible
- Covert outcomes | Per-action authorization does not eliminate them

**Source trace**

- SRC: [Slide 8 evidence summary](EVIDENCE.md#slide-8) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

A signature authenticates a report; it cannot make the report external truth. A lost response can leave an indeterminate outcome. Counting signatures does not prove diverse control. Reusable credentials can be hidden while the agent still has bounded power to request their use. Private synthetic exercises also retained failed controls and residual information leakage.

### Slide 9: License terms and historical demand evidence answer different questions

**Layout**

commercial

**On-slide copy**

- Verified | The recorded repository license is Apache-2.0
- Verified | August OMA3 index reading: approved open-source project
- Unknown | Buyer interviews in the August corpus
- Unknown | Budget-holder commitments in that corpus
- Unknown | Pricing conversations and pilots in that corpus
- Unknown | Category-specific market size
- Boundary | The August corpus did not establish formal-standard status or demand; this is not a current legal or market conclusion

**Source trace**

- SRC: [Slide 9 evidence summary](EVIDENCE.md#slide-9) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

The historical sources identify a repository license and an open-source project classification. Those are separate from formal-standard status, certification or demand. The August research corpus lacked verified buyer evidence. This does not decide whether evidence arose later, and it does not interpret a private arrangement.

### Slide 10: Three technical questions still need deployment evidence

**Layout**

questions

**On-slide copy**

- Control independence | Do distinct approval identities represent separate control?
- Review quality | Do approvers understand the exact action and its consequences?
- Deployment proof | Can a deployment pass independent security and operational review?
- Other unresolved edges | Further defects, threshold-signing fit and external-system behavior remain open in this dated research

**Source trace**

- SRC: [Slide 10 evidence summary](EVIDENCE.md#slide-10) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

The protocol’s credibility does not answer these deployment questions. Separate identities can still share control. A valid approval can still be uninformed. Buildable code can still fail independent security or operational review.

### Slide 11: The research conclusion is useful with its limits intact

**Layout**

position

**On-slide copy**

- Safe to say | Open protocol for exact actions through approval, verification, execution and receipt
- Safe to say | August research identified a potentially useful combination of controls
- Safe to say | Historical private runs showed buildability, with readiness unresolved
- Safe to say | Data retrieval, disclosure enforcement and secret storage remain separate
- Do not say | Every action has independent multi-party approval or uses an adapter
- Do not say | Invented payload binding, formal-standard status or production readiness
- Do not say | Buyer demand or market size is proven
- Research question | What evidence would resolve independence, review-quality and deployment limits?

**Source trace**

- SRC: [Slide 11 evidence summary](EVIDENCE.md#slide-11) — dated 2026-08-31; private evidence summarized where stated.

**Speaker notes**

Keep the protocol definition, the historical research inference and private test reports distinct. None establishes production use, formal-standard status or demand. The closing question concerns missing evidence; it is not a company roadmap or an outreach commitment.
