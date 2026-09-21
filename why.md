---
title: Why Juice
description: Why Juice connects independently owned capabilities through composition, payment, bounded authority, and human evaluation.
layout: minimal
permalink: /why/
nav_exclude: true
---

<div class="juice-page" markdown="1">

<a class="juice-home" href="{{ '/' | relative_url }}" aria-label="Juice home">{% include title.html %}</a>

# Why Juice

Juice began with an AI safety question: how can increasingly capable AI remain subject to human evaluation and direction without giving one system broad authority?

Our [vision](https://daios.ai/static/pdf/daios-vision-paper.pdf) is intelligence built from independently owned capabilities, each with limited authority. They must **work together**, the network must be **decentralized**, and anyone must be able to contribute and **get paid** when their work is used.

## Many contributors, shared intelligence

A capable AI system need not be a monolith with broad authority. Juice turns capabilities into **actions**: services with descriptions, input and output schemas, and prices. Actions can combine other actions within explicit budgets and permissions to solve larger problems. Contributors earn from their work and pay the services they use. [Probabilistic micropayments](https://people.csail.mit.edu/rivest/pubs/pubs/Riv97b.pdf) make even small contributions economical to pay for.

This approach draws on [Reframing Superintelligence](https://ora.ox.ac.uk/objects/uuid%3A9c05427a-6390-4b42-9c55-ee45f73a26ad) and [Safe AI Should be Bounded and Multi-Agent](https://ora.ox.ac.uk/objects/uuid%3A0ba67062-c27a-4d72-b5ae-bb49efba3d0e).

## Built on the web

The capabilities already exist: APIs, models, software, data, devices, businesses, and people. Juice connects them using existing web standards (HTTP, REST, and OAuth) rather than requiring providers to replace their infrastructure.

It continues the [Semantic Web](https://www.scientificamerican.com/article/the-semantic-web/) and [OWL-S](https://www.w3.org/submissions/OWL-S/) ambition of services that machines can discover and combine, using descriptions, schemas, and language models.

## What trust means here

[Ethereum](https://ethereum.org/whitepaper/) uses consensus to verify computation. This is inadequate for AI work: it is too expensive, and it cannot verify an AI's judgment, work that relies on private data, or whether a real-world service did a good job. Juice therefore relies on:

- **Limits:** each action has an explicit budget and permissions. Calls to other actions spend from that budget, recursively.
- **Receipts:** a signed record of what happened and what was charged. They establish what a provider attested to, without proving the work was good.
- **Ratings:** payer feedback helps people and agents decide whom to use next.

Payments are the exception — anyone can check those, so settlement runs on a blockchain.

<table>
<thead>
<tr><th></th><th>Ethereum</th><th>Juice</th></tr>
</thead>
<tbody>
<tr><td><strong>Execution</strong></td><td>Deterministic and replicated</td><td>Performed by independent providers</td></tr>
<tr><td><strong>State</strong></td><td>Canonical global state</td><td>Local state and signed records</td></tr>
<tr><td><strong>Time</strong></td><td>Atomic transactions</td><td>Persistent, long-running processes</td></tr>
<tr><td><strong>Trust</strong></td><td>Correctness by consensus</td><td>Limits, receipts, ratings</td></tr>
<tr><td><strong>Economics</strong></td><td>Gas pays for replicated computation</td><td>Budgets pay providers and their suppliers</td></tr>
</tbody>
</table>

Budgeted delegation draws on [agoric computing](https://papers.agoric.com/papers/markets-and-computation-agoric-open-systems/full-text/); explicit permissions draw on [object-capability security](https://www.erights.org/talks/thesis/) and the [confused deputy problem](https://www.cs.umd.edu/~jkatz/security/downloads/capabilities.html).

Work can pause for a named person or agent and resume later. Like [Sagas](https://www.cs.princeton.edu/techreports/1987/070.pdf), completed parts remain committed. State and signed records stay local; [petnames](https://skyhunter.com/marcs/petnames/IntroPetNames.html) give identities locally meaningful names without a central naming authority.

</div>
