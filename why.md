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

Juice starts from a simple premise: advanced AI can be built as a network of independently operated services rather than as one system controlled by one organization.

An agent can discover capabilities on the web, combine them for a task, and pay the providers that contribute to the result. This allows intelligence, authority, data, and economic participation to remain distributed.

The broader argument is developed in the [DAIOS vision paper](https://daios.ai/static/pdf/daios-vision-paper.pdf).

## Shared intelligence

An AI system does not need to contain every capability it may use. Models, APIs, databases, software, devices, and people can remain separate services and be selected when needed.

Juice therefore treats the **action** as the basic unit: a described, typed, and priced capability that agents can discover and invoke.

This follows the service-oriented view of intelligence developed in Eric Drexler's [*Reframing Superintelligence*](https://ora.ox.ac.uk/objects/uuid%3A9c05427a-6390-4b42-9c55-ee45f73a26ad).

## Web-native composition

Juice uses the existing web rather than requiring a separate AI application ecosystem. Ordinary HTTP and OpenAPI services can participate directly.

The goal is related to the [Semantic Web](https://www.scientificamerican.com/article/the-semantic-web/) and [OWL-S](https://www.w3.org/submissions/OWL-S/): software should be able to discover and compose services. Juice uses schemas, descriptions, and language models instead of a shared formal ontology.

## Bounded delegation

Agents need to delegate work without knowing every service that may be used downstream.

In Juice, an action's price is also its execution budget. A provider may spend part of that budget on other actions, which can do the same recursively. Each provider chooses its own suppliers, while authority and spending remain bounded.

This combines ideas from [object-capability security](https://www.erights.org/talks/thesis/), [the confused deputy problem](https://www.cs.umd.edu/~jkatz/security/downloads/capabilities.html), and [agoric computing](https://papers.agoric.com/papers/markets-and-computation-agoric-open-systems/full-text/).

## Distributed economics and trust

Providers can contribute one useful capability without controlling the whole application or having a direct relationship with the end user. They are paid when their work is used.

Juice also records execution evidence and supports reputation based on observed behavior. Trust is therefore attached to particular services and transactions rather than to a single central platform.

Several older systems influenced the details:

* [Rivest, *Electronic Lottery Tickets as Micropayments* (1997)](https://people.csail.mit.edu/rivest/pubs/pubs/Riv97b.pdf) — probabilistic settlement of small obligations.
* [Garcia-Molina & Salem, *Sagas* (1987)](https://www.cs.princeton.edu/techreports/1987/070.pdf) — long-running transactions in which completed work remains committed.
* [Stiegler, *An Introduction to Petname Systems* (2005)](https://skyhunter.com/marcs/petnames/IntroPetNames.html), following [Zooko Wilcox-O'Hearn (2001)](https://www.cs.princeton.edu/courses/archive/spr17/cos518/papers/zooko-triangle.pdf) — decentralized identity with locally meaningful names.

Juice brings these ideas together as infrastructure for AI that is composed across the web rather than concentrated inside one provider.

</div>
