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

Juice is based on the idea that advanced AI does not need to be built as a single system controlled by a single organization. It can instead emerge from independently operated services that agents discover and combine over the web.

This model allows new capabilities to participate without being built into one platform, limits how much authority any one component needs, and allows economic value to flow to the services that perform the work.

## AI as a network of services

Most current AI systems concentrate many functions inside one model or platform. The provider controls the model, the available tools, the surrounding services, and often the user's data.

An alternative is to treat intelligence as the composition of narrower services. An agent can interpret a request, discover suitable capabilities, and combine them as needed. A weather service, translator, database, planning system, human expert, model, or ordinary web API can each provide one part of a larger task.

The important unit in this model is the **capability**: a bounded service with a description, an interface, and a price. Agents select capabilities according to the task and delegate work to them.

This also allows the available intelligence to change as the web changes. A new service can become useful without retraining a model or adding it to a fixed list of integrations.

## A web-native system

The web already contains a large and changing collection of services, data, software, and people. Juice treats this environment as the substrate on which agents operate rather than creating a separate application ecosystem for AI.

Existing HTTP and OpenAPI services can be exposed as actions and used through a common execution model.

Earlier work on the Semantic Web pursued a related goal: making online resources sufficiently structured for software to discover and combine them automatically. That approach depended heavily on shared ontologies and formal reasoning. Juice instead uses conventional schemas and natural-language descriptions, with language models performing much of the interpretation and selection.

This reduces the amount of global agreement required before a service can participate.

## Distribution of control

A system composed from independent services does not require one organization to control the entire execution path. Different parts of a task can be performed by different providers, and users can decide which services they are willing to use.

The same principle applies to data and authority. A service only needs the information and permissions required for its part of the task. Juice uses explicit capabilities rather than ambient permissions, so authority is granted for particular operations instead of being inherited broadly.

This does not remove trust. It makes trust more local: participants can decide which counterparties, capabilities, and evidence they accept without relying on one central authority for the whole system.

## Economic participation

If intelligence is assembled from independent capabilities, those capabilities also need a way to participate economically.

Actions therefore have prices, and providers can spend part of the price they receive on other actions. This allows a specialized service to contribute to a larger workflow without having a direct commercial relationship with the end user.

Economic value can therefore follow the work being performed rather than accruing only to the operator of the top-level agent.

Micropayments are useful in this model because many capabilities may be too small to justify subscriptions, invoices, or conventional payment overhead.

## Delegation and bounded autonomy

A general-purpose agent cannot assume that every workflow and supplier relationship was defined in advance. It must be able to delegate work to services discovered at runtime.

Juice makes the advertised price of an action the budget for its execution. A provider can spend from that budget on child actions, which can do the same recursively. Each provider chooses its own immediate suppliers, while the original budget constraint follows the execution tree.

The caller therefore does not need to know the complete downstream supply chain or grant unrestricted spending authority. This is why budgeting, payment, and execution are part of the same runtime model.

## Safety properties

The same architecture has consequences for AI safety.

Narrower services can operate with limited authority, and failures can remain local to parts of an execution. Data and permissions do not need to be concentrated in one general system.

These properties do not make independent services automatically trustworthy. Juice therefore also records evidence of execution and supports feedback and reputation based on observed behavior.

The design combines structural constraints, such as bounded authority and funded execution, with evaluation after the fact.

## Design influences

Juice combines ideas from several earlier lines of work. These sources influenced different parts of the design rather than providing a single complete model.

<table class="juice-influences">
<thead>
<tr><th>Work</th><th>Contribution to Juice</th></tr>
</thead>
<tbody>
<tr><td><strong>DAIOS vision paper (2024)</strong></td><td>Defines the overall model: agents compose online services dynamically, services are paid per use, user data remains distributed, and quality is evaluated through public feedback.</td></tr>
<tr><td><strong>Eric Drexler, <em>Reframing Superintelligence</em> (2019)</strong></td><td>Treats general intelligence as a system of bounded, task-specific services rather than one monolithic agent. This motivates the separation between service selection and service execution.</td></tr>
<tr><td><strong>Mark Miller and Eric Drexler, “Markets and Computation: Agoric Open Systems” (1988)</strong></td><td>Describes computation organized through markets, prices, capabilities, and economic incentives. This influenced Juice's treatment of actions as priced services and the recursive economics of composition.</td></tr>
<tr><td><strong>Ronald Rivest, “Electronic Lottery Tickets as Micropayments” (1997)</strong></td><td>Provides the probabilistic micropayment model used to settle small obligations efficiently between kernels.</td></tr>
<tr><td><strong>Mark Miller, <em>Robust Composition</em> (2006), and Norm Hardy, “The Confused Deputy” (1988)</strong></td><td>Provide the object-capability model used to limit authority and avoid ambient permissions.</td></tr>
<tr><td><strong>Hector Garcia-Molina and Kenneth Salem, “Sagas” (1987)</strong></td><td>Provides the model for long-running work in which completed sub-transactions remain committed and failures are handled through compensation rather than global rollback.</td></tr>
<tr><td><strong>Marc Stiegler, “An Introduction to Petname Systems” (2005), following Zooko Wilcox-O'Hearn (2001)</strong></td><td>Provides the naming model used to separate cryptographic identity from locally meaningful names.</td></tr>
</tbody>
</table>

The Semantic Web and related work such as OWL-S are also important as a contrasting approach. They pursued machine-discoverable and composable online services through formal ontologies and reasoning systems. Juice keeps the general objective but uses schemas, descriptions, and language models instead.

## The broader objective

The long-term objective is a shared AI environment built from capabilities operated by many independent parties.

Users can access those capabilities through a common network. Developers can contribute specialized services. Agents can discover and combine them as requirements change. Providers can be compensated when their work is used.

Juice provides the technical substrate for that model: typed capabilities, bounded delegation, economic composition, distributed execution, transaction evidence, and settlement between independent operators.


</div>
