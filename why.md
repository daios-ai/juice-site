---
title: Why Juice
description: The case for decentralized AI guided by human evaluation and open to economic participation.
layout: minimal
permalink: /why/
nav_exclude: true
---

<div class="juice-landing juice-page juice-doc" markdown="1">

<a class="juice-home" href="{{ '/' | relative_url }}" aria-label="Juice home">{% include title.html %}</a>

<h1 class="juice-pitch">Why Juice</h1>

Juice starts from a question in AI safety: how can increasingly capable AI remain subject to human evaluation and direction without concentrating economic power? A [decentralized approach](https://daios.ai/static/pdf/daios-vision-paper.pdf) allows intelligence to develop through the coordination of independently operated services, guided by human feedback on their use. The aim is economic inclusion: anyone can contribute capabilities and receive payment for their use, creating an incentive to contribute without requiring ownership of the whole system. Juice provides the infrastructure for this approach.

Humans and agents can discover capabilities on the web, combine them for a task, and pay the providers that contribute to the result. Providers retain control of their services and can participate without operating a complete application.

## Shared intelligence

The experience of a single powerful AI can arise from the composition of specialist agents and AI services. Each service can itself coordinate other specialists, and the resulting composition can participate in a larger AI system. Intelligence develops through their interaction, while individual participants retain bounded capabilities, authority, and resources. This approach is developed in [*Safe AI Should be Bounded and Multi-Agent*](https://ora.ox.ac.uk/objects/uuid:0ba67062-c27a-4d72-b5ae-bb49efba3d0e/files/sqr46r3765).

This follows the service-oriented view of intelligence developed in Eric Drexler's [*Reframing Superintelligence*](https://ora.ox.ac.uk/objects/uuid%3A9c05427a-6390-4b42-9c55-ee45f73a26ad).

## Web-native composition

The web already contains services, knowledge, and expertise supplied by independent providers. AI services can join this web, use its capabilities, and contribute capabilities of their own. Juice allows these services to form larger systems without requiring their providers to join a single application ecosystem or surrender control of their work.

The **action** gives individual capabilities and compositions the same callable form, so either can become part of another service. This extends the ambition of the [Semantic Web](https://www.scientificamerican.com/article/the-semantic-web/) and [OWL-S](https://www.w3.org/submissions/OWL-S/): services on the web should be usable by software in pursuit of a task. Existing web standards and language models support this aim without requiring a shared formal ontology.

## Bounded delegation

Each participant needs discretion over how to carry out its task, including which specialists to involve. That discretion must remain within the authority and resources delegated to it. Juice applies these limits throughout a composition, allowing services to delegate further work within their budgets. Work can also wait for a named person's judgment before proceeding.

This combines ideas from [object-capability security](https://www.erights.org/talks/thesis/), [the confused deputy problem](https://www.cs.umd.edu/~jkatz/security/downloads/capabilities.html), and [agoric computing](https://papers.agoric.com/papers/markets-and-computation-agoric-open-systems/full-text/).

## Economic participation

A provider can both earn from its service and pay other providers whose capabilities it uses. Payment therefore follows contributions through a composition. A specialist can serve many independently operated systems, giving its provider an incentive to develop and maintain that capability without owning the larger systems it contributes to.

This requires payments small enough to compensate individual uses. Juice uses blockchain micropayments, drawing on [Rivest's *Electronic Lottery Tickets as Micropayments* (1997)](https://people.csail.mit.edu/rivest/pubs/pubs/Riv97b.pdf), so that the cost of settlement need not exclude work worth less than an individual blockchain transaction.

## Human evaluation and direction

AI safety requires continuing evaluation of both individual services and the systems they form together. Their consequences cannot always be assessed from returned outputs alone. Human judgment is therefore necessary to evaluate outcomes and guide subsequent choices of capabilities and collaborators.

Juice connects feedback to evidence of actual use. Execution records, signed receipts, and payer assessments provide a basis for attributing outcomes and comparing services. Reputation carries this experience across the network, allowing humans and agents to make choices informed by other participants. The aim is for human evaluation to influence which capabilities are selected and rewarded, giving providers an incentive to respond to that evaluation.

Further influences include:

* [Garcia-Molina & Salem, *Sagas* (1987)](https://www.cs.princeton.edu/techreports/1987/070.pdf) — long-running transactions in which completed work remains committed.
* [Stiegler, *An Introduction to Petname Systems* (2005)](https://skyhunter.com/marcs/petnames/IntroPetNames.html), following [Zooko Wilcox-O'Hearn (2001)](https://www.cs.princeton.edu/courses/archive/spr17/cos518/papers/zooko-triangle.pdf) — decentralized identity with locally meaningful names.

Juice brings composition, compensation, and feedback together to make this approach practicable: increasingly capable AI built from independent contributions, with economic incentives for participation and continuing human evaluation of its use.

</div>
