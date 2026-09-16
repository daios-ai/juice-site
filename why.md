---
title: Why Juice
description: The case for a network of callable, priced capabilities.
layout: minimal
permalink: /why/
nav_exclude: true
---

<div class="juice-landing juice-page juice-doc" markdown="1">

<a class="juice-home" href="{{ '/' | relative_url }}" aria-label="Juice home">{% include title.html %}</a>

<h1 class="juice-pitch">Why Juice</h1>

Juice starts from a question in AI safety: how can increasingly capable AI remain subject to human evaluation and direction? A [decentralized approach](https://daios.ai/static/pdf/daios-vision-paper.pdf) allows intelligence to develop through the coordination of independently operated services, guided by human feedback on their use. Juice provides the infrastructure for this approach.

Humans and agents can discover capabilities on the web, combine them for a task, and pay the providers that contribute to the result. Providers retain control of their services and can participate without operating a complete application.

## Shared intelligence

An AI system does not need to contain every capability it may use. Models, APIs, databases, software, and devices can remain separate services and be selected when needed. People can contribute expertise and judgment through the same network. Juice therefore treats the **action** as the basic unit: a described, typed, and priced capability that humans and agents can discover and invoke.

This follows the service-oriented view of intelligence developed in Eric Drexler's [*Reframing Superintelligence*](https://ora.ox.ac.uk/objects/uuid%3A9c05427a-6390-4b42-9c55-ee45f73a26ad).

## Web-native composition

Juice builds on the existing web. Providers can expose HTTP services as actions and import supported operations from OpenAPI documents, allowing the network to grow from services already available. Actions use schemas and natural-language descriptions to support discovery and composition, with language models assisting selection. 

This shares the aim of machine-usable services associated with the [Semantic Web](https://www.scientificamerican.com/article/the-semantic-web/) and [OWL-S](https://www.w3.org/submissions/OWL-S/), without requiring providers to adopt a shared formal ontology.

## Bounded delegation

Humans and agents need to delegate work without knowing every service that may be used downstream. This is analogous to running a **process**, with execution distributed across the network. In Juice, an action's price is also its execution budget. A provider may spend part of that budget on other actions, which can do the same recursively. Each provider chooses its own suppliers within the authority and budget available to it. A computation can also pause for a named person's approval or an agent's result and resume when that party responds.

This combines ideas from [object-capability security](https://www.erights.org/talks/thesis/), [the confused deputy problem](https://www.cs.umd.edu/~jkatz/security/downloads/capabilities.html), and [agoric computing](https://papers.agoric.com/papers/markets-and-computation-agoric-open-systems/full-text/).

## Decentralized economics and trust

Composition requires a means of paying each contributor, including for work whose price is smaller than the cost of an individual blockchain transaction. Juice uses blockchain micropayments between nodes, with probabilistic settlement based on [Rivest's *Electronic Lottery Tickets as Micropayments* (1997)](https://people.csail.mit.edu/rivest/pubs/pubs/Riv97b.pdf). Small obligations are settled by draws whose winning payments are made on chain. The expected payment equals the obligation, allowing small contributions to be remunerated without a separate blockchain transaction for each one.

Selection also requires evidence about the services available. Juice records execution and payment, issues signed receipts, and associates payer feedback with completed transactions. This evidence allows humans and agents to assess services through observed outcomes and the experience of other participants. It does not establish that a service is trustworthy, but provides a basis for comparison and subsequent selection. Payment supports continued provision; feedback informs which capabilities are used.

Further influences include:

* [Garcia-Molina & Salem, *Sagas* (1987)](https://www.cs.princeton.edu/techreports/1987/070.pdf) — long-running transactions in which completed work remains committed.
* [Stiegler, *An Introduction to Petname Systems* (2005)](https://skyhunter.com/marcs/petnames/IntroPetNames.html), following [Zooko Wilcox-O'Hearn (2001)](https://www.cs.princeton.edu/courses/archive/spr17/cos518/papers/zooko-triangle.pdf) — decentralized identity with locally meaningful names.

Juice brings these ideas together as infrastructure through which humans and agents can compose services, compensate their providers, and evaluate their results across the web.

</div>
