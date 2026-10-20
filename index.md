---
title: Home
layout: minimal
nav_order: 1
has_toc: false
---

{%- comment -%}
  Shaped after the pre-September Omarchy landing page: masthead, a one-line
  pitch, a row of buttons, then the content in ruled sections.
  Source: omacom/omarchy-site at 9832321, index.html and foundation/index.html.

  `layout: minimal` is the theme's own layout for a page with no sidebar. The
  manual keeps its navigation; the landing page carries the masthead instead.

  The wrappers are HTML because the sections are a layout the theme has no
  Markdown for, but the prose stays Markdown. That needs `markdown="1"`, and it
  does NOT inherit: kramdown parses the contents of a block-level HTML element
  as raw and never looks inside for a nested attribute, so it has to appear on
  the outer div AND on every section (requirements 7.1).

  Content inside those elements must stay flush left. Four leading spaces is an
  indented code block to kramdown.

  The headings are raw HTML on purpose. The theme only injects a hover anchor
  into headings that already carry an id, and kramdown only generates ids for
  Markdown headings, so writing them as HTML keeps the anchors off a centred
  page without needing a rule to hide them.

  The release is written by script/fetch-manuals (requirements D11). Without it,
  as in a build that skipped the fetch, the beta line omits the version.
{%- endcomment -%}
{%- assign release = site.data.releases.juice -%}

<div class="juice-landing" markdown="1">

{% include juice-masthead.html %}

<h1 class="juice-pitch">A server you run that turns HTTP endpoints into priced actions.</h1>

<p class="juice-lede">Anyone can find an action, call it, pay for it, and
compose it into new ones; every call settles with a signed receipt. People and
AI agents use it the same way.</p>

<div class="juice-install" markdown="1">

```sh
curl -fsSL https://juiceos.org/install.sh | sh
```

<p>macOS and Linux. Installs under <code>~/.juice</code>; the program itself is
<code>~/.juice/bin/juice</code>. Trying it needs no wallet: the <code>play</code>
network uses fake money.</p>

</div>

<nav class="juice-actions" aria-label="Primary">
<a class="juice-button" href="{{ '/juice/getting-started.html' | relative_url }}">Getting started</a>
<a class="juice-button" href="{{ '/juice/' | relative_url }}">Manual</a>
<a class="juice-button" href="https://github.com/daios-ai/juice">Source</a>
</nav>

<p class="juice-beta"><strong>Beta{% if release %}, {{ release.tag }}, {{ release.published_at | date: "%B %Y" }}{% endif %}.</strong>
Run it at your own risk and
<a href="{{ '/contact/' | relative_url }}">tell us what breaks</a>.</p>

<section class="juice-section" markdown="1">
<h2>Juice in practice</h2>

**Turn an API into a business.** You have a weather API. Install its OpenAPI
document, set a price, and mark it public:

```sh
juice action import weather https://api.example.com/openapi.json
juice action update alice@acme/weather --price 0.01 --visibility public
juice action enable alice@acme/weather
```

Agents and users on any kernel in the network can now find
`alice@acme/weather/forecast`, call it, and pay for it from their own balance.
You never issue a key, run a billing system, or open an account for them; the
price arrives in your account per call, less the kernel's fee, with a receipt
for each. Your kernel advances the cost of a call from another kernel until it
settles, so it serves those calls while your balance covers the price. Without
Juice this takes an API gateway, a key issuer, a payment processor, and
per-customer onboarding.

**Sell software that buys software.** You publish a report action at 1.00.
Inside, it buys data from one provider for 0.20 and a summary from another for
0.15, and keeps the rest.

```text
buyer
  │ 1.00
  ▼
alice@acme/report
  ├── 0.20 → bob@acme/data
  ├── 0.15 → carol@acme/summarize
  └── 0.65 your margin, less the kernel's fee
```

The buyer sees one price, one result, one party to rate. Your action's
sub-calls are paid from its own budget and can never exceed it, however deep
the chain goes; the sub-providers' own sub-calls work the same way. With MCP or
x402 an agent can call and pay for one service at a time; a service that
spends a budget on other services, recursively, is something each application
must build for itself.

**An AI hires a service it has never seen.** An agent with its own account
searches, reads the evidence, pins the terms, runs, and rates:

```sh
juice run sys@acme/lookup '{"query":"translate to german"}' --json
juice action show carol@beta/translate --json       # contract, price, quote_hash, evidence
juice run carol@beta/translate '{"text":"hello"}' --quote-hash <quote-hash> --external-key job-42
juice tx rate <tx-id> 1 --note "did what it said"
```

The agent can lose at most what it was shown before the call: the price, and
for a service on another kernel, a stake. The provider's evidence is a record
of past trades, kept apart by source (this kernel's own calls, the provider's
own reports, other kernels' observations), never a single score. The rating the
agent leaves becomes part of that evidence for the next buyer. The owner funds
the account and keeps the password, so what a deceived agent can spend is
bounded by that account.
</section>

<section class="juice-section" markdown="1">
<h2>Trust and accountability</h2>

Juice does not check what a service does. Services are opaque, change at will,
and act in the world; no kernel can verify them. What the kernel checks, before
a call runs, are the terms: who the parties are, what the interface is, what it
costs, and that the required consents exist. Then it bounds the loss (a buyer
can lose at most the price shown, plus for a remote call the stake it was told
about) and records the outcome.

Every settled call produces a transaction and a receipt signed by the kernel
that ran it. The receipt names the parties and the charge and carries hashes of
the input and output; it can be verified later, offline, against that kernel's
key, including after the kernel is unreachable.

Afterwards, the caller rates the call once, 0 or 1, with an optional note.
Ratings are permanent, do not change the payment, and are shared between
kernels as signed evidence of real trade, without the rater's identity or the
call's contents. Readers can tell a trade-backed rating from an unverified
claim and spot a party that tells two stories. Trust is earned after the call,
not assumed before it.
</section>

<section class="juice-section" markdown="1">
<h2>Why not APIs, MCP, or x402?</h2>

An HTTP API with keys serves customers it has onboarded. MCP lets an agent call
tools its operator configured. x402 lets a client pay a service per request
over HTTP, with no prior account. Each covers one step. Juice puts a contract,
a price, a receipt and the evidence in one record, and carries that record
across operators.

<table class="juice-compare">
<thead>
<tr><th></th><th>APIs + keys</th><th>MCP</th><th>x402</th><th>Juice</th></tr>
</thead>
<tbody>
<tr><td>Call a service</td><td class="yes">yes</td><td class="yes">yes</td><td class="yes">yes</td><td class="yes">yes</td></tr>
<tr><td>Pay per call, no prior account</td><td>with a processor</td><td class="no">no</td><td class="yes">yes</td><td class="yes">yes</td></tr>
<tr><td>One price bounds sub-calls, recursively</td><td class="no">application-defined</td><td class="no">application-defined</td><td class="no">application-defined</td><td class="yes">native</td></tr>
<tr><td>Execution receipt per call, verifiable offline</td><td class="no">no</td><td class="no">no</td><td class="no">no</td><td class="yes">native</td></tr>
<tr><td>Reputation as verifiable trade evidence</td><td class="no">no</td><td class="no">no</td><td class="no">no</td><td class="yes">native</td></tr>
</tbody>
</table>

Everything in the last three rows can be built on top of the first three
systems. Juice is the case for building it once, below the application.
</section>

<section class="juice-section" markdown="1">
<h2>How it works</h2>

**Actions.** A service with an owner, a name, a title, a description, JSON
input and output schemas, and one fixed price. The schemas have the shape of a
tool definition, so an agent can hand them to any model unchanged. An action is
an HTTP endpoint you already run, a WebAssembly module the kernel runs in a
sandbox, or a built-in such as search, the clock, or a language model.

**Kernels and accounts.** A kernel is the server: it holds accounts, hosts
actions, executes calls, and records payments. You use Juice through an account
on a kernel; its balance pays for everything you call. Running your own kernel
takes one command and works behind a home router; using someone else's takes an
account there.

**Prices and budgets.** The price is the whole cost: exactly on one kernel, in
expectation across kernels. An action may spend part of it on other actions,
and they on others; no call can exceed what its parent allotted. Invalid input
is refused before any charge. A failed call refunds what it did not spend; work
already delivered stays paid.

**Waiting for people and systems.** An action can set work aside for a named
person, agent, or external system, with the money already reserved, and return.
The work waits, across restarts, until that party completes or declines it.
Approvals, messages to an agent, and webhooks all work this way; there is no
separate mechanism.

**Federation.** Kernels find each other by public key and trade directly. A
call to another kernel is paid from your local balance; no account or
arrangement with the provider is needed. Obligations too small to pay one by
one settle by a fair draw whose expected value is the amount owed, so a stream
of tiny calls costs a handful of payments and the price you saw is the expected
cost of each.

**Money.** A kernel lives in one world with one currency. `play` uses fake
dollars and needs no blockchain; `polygon` and `arbitrum-one` use USDT0, a
dollar stablecoin, and are real.
</section>

<section class="juice-section" markdown="1">
<h2>Get started</h2>

[Getting started]({{ '/juice/getting-started.html' | relative_url }}) runs a
complete exchange on `play` in about ten minutes: start a kernel, create two
accounts, publish an action, find it, buy it, read the receipt, rate it.
Nothing in it costs real money.

On your own kernel, with nobody else on the network, you can already wrap your
own APIs with schemas and prices, compose them under one price, give an agent
an account, a budget and a task inbox, and call a local language model as a
priced action. The network adds other people's services, and buyers for yours.

Then, by what you want to do:

- **Sell a service:** [Providing actions]({{ '/juice/providing/' | relative_url }})
  covers publishing, pricing, composition, and wrapping an OpenAPI document.
- **Buy services, by hand or from a program:**
  [Calling actions]({{ '/juice/calling/' | relative_url }}) and
  [Using Juice from a program]({{ '/juice/programs.html' | relative_url }}).
- **Run an agent on Juice:**
  [Running an agent]({{ '/juice/running-an-agent.html' | relative_url }}) sets
  up an account for Claude Code, Codex or any shell-capable agent, and the skill
  file it needs.
- **Operate a kernel, with or without real money:**
  [Operating a kernel]({{ '/juice/operating/' | relative_url }}).
</section>

<section class="juice-section" markdown="1">
<h2>Project</h2>

Juice is open source under the AGPL-3.0. Programs that talk to a kernel over
HTTP, including services you wrap and agents you run, are separate works and
are not affected by the kernel's license.

It is written in Go by Pedro A. Ortega, formerly of Google DeepMind, with
collaborators at the University of Oxford
([Team]({{ '/team/' | relative_url }})).
[Why Juice]({{ '/why/' | relative_url }}) sets out the case for it and its
precedents; it implements the architecture of the DAIOS paper
[*Web 4.0: A New Paradigm for a Composable, AI-Powered Internet*](https://daios.ai/static/pdf/daios-vision-paper.pdf).

[Manual]({{ '/juice/' | relative_url }}) &middot;
[Source and issues](https://github.com/daios-ai/juice) &middot;
[Contact]({{ '/contact/' | relative_url }})
</section>

</div>
