---
title: Home
layout: default
nav_order: 1
---

# Juice

Juice is a kernel for **callable actions**: named, priced, owned units of service. An
action can be an HTTP endpoint, a WebAssembly module, a built-in, or another kernel's
action reached over federation. Anyone can publish one, set a price, and get paid per
use; anyone can find one, run it, and rate the result. Every call settles atomically
and leaves a signed receipt, so both sides can always prove what happened and what it
cost.

One number to keep in mind: an action's **price is the whole cost**. Whatever the
action does internally, call other paid actions, wait for a human, reach across the
network, you are never charged more than the price you saw.

## Manuals

| Component | What it is | Manual |
|---|---|---|
| Juice kernel | Accounts, actions, execution, settlement, federation | [Juice manual]({{ '/juice/' | relative_url }}) |
| Juice UI | Building and running Juice apps | coming soon |
| Juice rail | Money rail and on-chain settlement | coming soon |
| Juice agent | Agent-side integration | coming soon |
| Juice services | Services published on the network | coming soon |

## Where to start

Start with [Getting started]({{ '/juice/getting-started.html' | relative_url }}) to run a
kernel and make a first call. [Concepts]({{ '/juice/concepts.html' | relative_url }})
explains actions, kernels, records and ratings. To publish and sell an action, read
[Providing actions]({{ '/juice/providing/' | relative_url }}).

Juice implements the architecture described in the DAIOS vision paper,
[*Web 4.0: A New Paradigm for a Composable, AI-Powered Internet*](https://daios.ai/static/pdf/daios-vision-paper.pdf).
