---
title: MPAS contribution highlights
status: public-candidate
source_date: 2026-09-10
prepared: 2026-09-17
---
# MPAS: approvals tied to the action

*Historical contribution snapshot · September 10, 2026*

MPAS means **Multi-Party Action Security**: an open protocol for describing important digital actions, collecting approvals, checking them, and recording the outcome.

**At September 10: two public fixes merged, sixteen private packages accepted, and final program verification incomplete.**

This is a public-candidate copy of the earlier Markdown presentation. Private repair statements are bounded summaries; their underlying evidence is withheld. Later component work does not turn this snapshot into current technical acceptance.

<details>
<summary>Speaker notes and sources</summary>

The aim is an approval that applies to the exact action that will run. Read every private-package statement as a September 10 snapshot.

[Slide 1 evidence and limits](EVIDENCE.md#slide-1).

</details>

---

## Two fixes already merged

- **Count each signer once.** Repeated approvals from one signer cannot satisfy a requirement for several signers.
- **Reject ambiguous signed data.** Duplicate field names in signed approval messages are rejected before use.
- Both fixes include regression tests. Their linked issues are closed as completed.

<details>
<summary>Speaker notes and sources</summary>

These public merges and the private contribution packages are distinct bodies of work.

[Slide 2 evidence and limits](EVIDENCE.md#slide-2).

</details>

---

## Check the exact action before approval counts

- Reject duplicate data fields at more entry points.
- Require the configured application and execution rules.
- Match signed approvals to the action, payload, authorized key, and valid time window.
- Reject conflicting decisions from one signer.

<details>
<summary>Speaker notes and sources</summary>

The action, payload, trusted target and approval time must agree. This is accepted private component scope in the dated catalog.

[Slide 3 evidence and limits](EVIDENCE.md#slide-3).

</details>

---

## Express approval rules without losing their meaning

- Combine rules that require **all** conditions or **any** valid alternative.
- Show only the approvals still needed.
- Exclude the proposer before deciding whether a requirement can be met.
- Reject malformed policies before their fields can grant permission.

<details>
<summary>Speaker notes and sources</summary>

A nested policy must mean the same thing to the engine and each client handling the response.

[Slide 4 evidence and limits](EVIDENCE.md#slide-4).

</details>

---

## Give signers the right material to review

- Define discovery, pending review, approval, and rejection behavior.
- Bind the review to the actual payload, action, approval requirements, and expiry.
- Reject invalid review data before submitting an approval.
- Keep displayed authority expectations separate from credential permissions.

<details>
<summary>Speaker notes and sources</summary>

A label shown for review does not grant permission to a provider account.

[Slide 5 evidence and limits](EVIDENCE.md#slide-5).

</details>

---

## Return results only where the reviewed policy permits

- Require an explicit result policy for generated tools.
- Keep denied results local during requests, polling, and recovery.
- Preserve receipts with allowed results.
- Prevent later changes to a caller’s policy object from changing permission.

<details>
<summary>Speaker notes and sources</summary>

The result policy must remain stable across a request and recovery. Historical stored data is preserved.

[Slide 6 evidence and limits](EVIDENCE.md#slide-6).

</details>

---

## Verify the receipt against the action that ran

- Check the receipt’s signature and authorized issuer.
- Match it to trusted action and payload data.
- Validate the outcome and issue time.
- Return verified receipt data only after the checks pass.

<details>
<summary>Speaker notes and sources</summary>

Receipt verification needs trusted action context; a receipt cannot supply its own authority.

[Slide 7 evidence and limits](EVIDENCE.md#slide-7).

</details>

---

## Recover without quietly repeating the action

- Preserve retry state when policy is temporarily unavailable.
- Keep approval progress distinct from actual execution.
- Store one durable dispatch decision and an immutable result.
- After a restart, keep uncertain outcomes uncertain without sending the action again.

<details>
<summary>Speaker notes and sources</summary>

A lost response must not become permission to repeat an action that may already have happened.

[Slide 8 evidence and limits](EVIDENCE.md#slide-8).

</details>

---

## Keep credential use and transmission under control

- Bind login sessions, refresh, and logout to the intended account and request.
- Check permission before reading credentials or contacting a target.
- Prevent hidden retries after authentication or scope failures.
- Prevent redirects from causing an extra target action.

<details>
<summary>Speaker notes and sources</summary>

These checks used controlled local providers and synthetic credentials. Live-provider behavior remains a separate claim.

[Slide 9 evidence and limits](EVIDENCE.md#slide-9).

</details>

---

## Generate bridges from checked inputs

- Validate registry entries, plugin identity, and plugin input before use.
- Bound the work needed to process a schema.
- Preserve clear errors for unsupported capabilities.
- Sign direct bridge requests by default, with a narrowly configured exception.

<details>
<summary>Speaker notes and sources</summary>

Generated bridges need checked inputs and clear authority boundaries. The private patch is not published by this summary.

[Slide 10 evidence and limits](EVIDENCE.md#slide-10).

</details>

---

## September 10 snapshot: application migration was partial

- **22 applications accepted:** 26 authority fields migrated, with updated content identities and references.
- **At that date, Slack and Outlook remained:** implement the proposed trusted credential configuration after design approval.
- The remaining target was to migrate their three fields and verify the complete **24-application, 29-field** set.

<details>
<summary>Speaker notes and sources</summary>

Read this as September 10 history. The partial migration was superseded in later private acceptance; this presentation does not claim a current live account connection.

[Slide 11 evidence and limits](EVIDENCE.md#slide-11).

</details>

---

## Make setup and release preparation checkable

- Keep prereleases off the stable release tag in dry runs.
- Check public exports, documentation examples, and one shared version source.
- Exercise adapter startup, shutdown, and clean local setup.
- Correct temporary database fixtures and generator rejection-test inputs without dropping assertions.

<details>
<summary>Speaker notes and sources</summary>

The fixture correction used a deliberate temporary-path alias. Do not infer an unrecorded environment test or a release.

[Slide 12 evidence and limits](EVIDENCE.md#slide-12).

</details>

---

## Prove the complete workflow with real agents

**Prepared at September 10:** combined source and matching agent instructions.

**Still to run in that snapshot:** 17 scenarios with real proposing and signing roles, covering approval, rejection, tampering, expiry, restart, receipts, and credential isolation.

**Required evidence:** sanitized traces, exact action and receipt matches, target-action counts, and independent verification.

<details>
<summary>Speaker notes and sources</summary>

The scenario number is a requirement, not a pass count. This historical snapshot is not a current model-service availability check.

[Slide 13 evidence and limits](EVIDENCE.md#slide-13).

</details>

---

## Turn the research into material people can use

- **External research:** a detailed briefing, executive findings, eleven supporting topic chapters, and a research presentation.
- **Product and commercial direction:** a report and presentation covering use cases, differentiation, adoption paths, and business assumptions.
- **Delivery and readiness:** a report and presentation explaining completed work, proof, dependencies, and the route to completion.

<details>
<summary>Speaker notes and sources</summary>

The reports make research usable while preserving unknown product and market evidence. The linked presentation copies remain dated editions.

[Slide 14 evidence and limits](EVIDENCE.md#slide-14).

</details>

---

## The September 10 completion target required integrated proof

- The plan required final conformance tests that check public interfaces and fail when no required tests execute.
- It required verification of the combined implementation and complete application set.
- It required exact copies of the remaining private contribution packages and evidence.
- It required an account of all 55 tracked findings, followed by the final technical report, presentation, and verified contribution handoff.

<details>
<summary>Speaker notes and sources</summary>

This is the historical completion requirement, not a current task list. Later component progress does not establish complete integrated proof.

[Slide 15 evidence and limits](EVIDENCE.md#slide-15).

</details>

[Presentation collection](../README.md) · [Evidence and limits](EVIDENCE.md)
