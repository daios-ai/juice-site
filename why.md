---
title: Why Juice
description: The case for decentralized AI guided by human evaluation and open to economic participation.
layout: minimal
permalink: /why/
nav_exclude: true
---

<div class="juice-page" markdown="1">

<a class="juice-home" href="{{ '/' | relative_url }}" aria-label="Juice home">{% include title.html %}</a>

# Why Juice

Juice starts from a question in AI safety: how can increasingly capable AI remain subject to human evaluation and direction without concentrating capability, authority, data, and economic power in one system?

One approach is to build intelligence from independently operated, bounded services that can be combined as needed. People, agents, developers, and organizations can contribute capabilities and be paid when they are used.

This is the starting point of the [vision paper](https://daios.ai/static/pdf/daios-vision-paper.pdf).

## From Ethereum to the AI web

[Ethereum](https://ethereum.org/whitepaper/) demonstrated decentralized economic coordination through shared rules, identity, payments, and verifiable execution. Juice began by exploring this model for AI and online services, where the execution requirements are different.

<table>
<thead>
<tr><th></th><th>Ethereum</th><th>Juice</th></tr>
</thead>
<tbody>
<tr><td><strong>Execution</strong></td><td>Deterministic and replicated</td><td>Performed by independent providers</td></tr>
<tr><td><strong>State</strong></td><td>Canonical global state</td><td>Local state and signed records</td></tr>
<tr><td><strong>Time</strong></td><td>Atomic transactions</td><td>Persistent, long-running processes</td></tr>
<tr><td><strong>Trust</strong></td><td>Correctness established by consensus</td><td>Authority is bounded; outcomes leave evidence</td></tr>
<tr><td><strong>Economics</strong></td><td>Gas pays for replicated computation</td><td>Budgets pay providers and their suppliers</td></tr>
</tbody>
</table>

AI models, web APIs, private data, human judgment, and real-world actions cannot generally be reproduced and verified by every node. Juice therefore moves execution out of consensus while retaining decentralized coordination and blockchain settlement.

```text
Ethereum
shared rules + consensus execution
    │
    │ keep decentralization,
    │ identity and settlement
    ▼
AI and the web
private · changing · heterogeneous · long-running
    │
    │ replace global verification
    ▼
Juice
independent execution
+ bounded delegation
+ signed evidence
+ human feedback
```

## Shared intelligence

A capable AI system need not be one agent with broad authority. Juice represents specialist capabilities as **actions**: described, typed, and priced services that can compose other actions while remaining bounded. This view is developed in [Safe AI Should be Bounded and Multi-Agent](https://ora.ox.ac.uk/objects/uuid%3A0ba67062-c27a-4d72-b5ae-bb49efba3d0e) and Eric Drexler's [Reframing Superintelligence](https://ora.ox.ac.uk/objects/uuid%3A9c05427a-6390-4b42-9c55-ee45f73a26ad).

## Web-native composition

The required capabilities already exist across the web: APIs, software, models, data sources, devices, organizations, and people. Juice makes them discoverable and composable without moving them into a single platform. This continues the aim of the [Semantic Web](https://www.scientificamerican.com/article/the-semantic-web/) and [OWL-S](https://www.w3.org/submissions/OWL-S/), but uses schemas, descriptions, and language models rather than a shared formal ontology.

## Bounded delegation

Providers need discretion over how to perform a task without receiving unlimited authority. In Juice, an action's advertised price bounds its execution budget; child actions spend from that budget recursively, while authority is explicit rather than ambient. Processes may also wait for a named person or agent and continue later. These choices draw on [object-capability security](https://www.erights.org/talks/thesis/), [the confused deputy problem](https://www.cs.umd.edu/~jkatz/security/downloads/capabilities.html), and Miller and Drexler's [agoric computing](https://papers.agoric.com/papers/markets-and-computation-agoric-open-systems/full-text/).

## Economic participation

Payment follows composition: a provider can earn from its capability while paying the providers it uses. Probabilistic blockchain settlement makes even small contributions economical, following Rivest's [Electronic Lottery Tickets as Micropayments](https://people.csail.mit.edu/rivest/pubs/pubs/Riv97b.pdf).

## Human evaluation

Outside consensus, many outcomes cannot be verified mechanically. Juice therefore records signed evidence of execution and payer feedback, which people and agents can use when selecting providers later.

The design also draws on [Sagas](https://www.cs.princeton.edu/techreports/1987/070.pdf) for long-running work whose completed parts remain committed, and [petname systems](https://skyhunter.com/marcs/petnames/IntroPetNames.html) for decentralized identity with locally meaningful names.

Juice combines these ideas into a decentralized network for composing capabilities across the web under explicit economic and authority limits.

</div>
