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
  the outer div AND on every section. Without it on the div, the table below
  renders as literal pipes.

  Content inside those elements must stay flush left. Four leading spaces is an
  indented code block to kramdown.

  The headings are raw HTML on purpose. The theme only injects a hover anchor
  into headings that already carry an id, and kramdown only generates ids for
  Markdown headings, so writing them as HTML keeps the anchors off a centred
  page without needing a rule to hide them.
{%- endcomment -%}

<div class="juice-landing" markdown="1">

{% include juice-masthead.html %}

<h1 class="juice-pitch">{{ site.description }}</h1>

<p class="juice-lede">An action's <strong>price is the whole cost</strong>. Whatever it does
internally &mdash; call other paid actions, wait for a human, reach across the network &mdash;
you are never charged more than the price you saw.</p>

<nav class="juice-actions" aria-label="Primary">
<a class="juice-button" href="{{ '/juice/' | relative_url }}">Manual</a>
<a class="juice-button" href="{{ '/juice/getting-started.html' | relative_url }}">Getting started</a>
<a class="juice-button" href="https://github.com/daios-ai">GitHub</a>
<a class="juice-button" href="https://daios.ai/static/pdf/daios-vision-paper.pdf">Vision paper</a>
</nav>

<section class="juice-section" markdown="1">
<h2>Callable actions</h2>

Juice is a kernel for **callable actions**: named, priced, owned units of service. An
action can be an HTTP endpoint, a WebAssembly module, a built-in, or another kernel's
action reached over federation. Anyone can publish one, set a price, and get paid per
use; anyone can find one, run it, and rate the result. Every call settles atomically
and leaves a signed receipt, so both sides can always prove what happened and what it
cost.
</section>

<section class="juice-section juice-section--wide" markdown="1">
<h2>Manuals</h2>

| Component | What it is | Manual |
|---|---|---|
| Juice kernel | Accounts, actions, execution, settlement, federation | [Juice manual]({{ '/juice/' | relative_url }}) |
| Juice UI | Building and running Juice apps | coming soon |
| Juice rail | Money rail and on-chain settlement | coming soon |
| Juice agent | Agent-side integration | coming soon |
| Juice services | Services published on the network | coming soon |
</section>

<section class="juice-section" markdown="1">
<h2>Where to start</h2>

Start with [Getting started]({{ '/juice/getting-started.html' | relative_url }}) to run a
kernel and make a first call. [Concepts]({{ '/juice/concepts.html' | relative_url }})
explains actions, kernels, records and ratings. To publish and sell an action, read
[Providing actions]({{ '/juice/providing/' | relative_url }}).
</section>

<section class="juice-section" markdown="1">
<h2>Background</h2>

Juice implements the architecture described in the DAIOS vision paper,
[*Web 4.0: A New Paradigm for a Composable, AI-Powered Internet*](https://daios.ai/static/pdf/daios-vision-paper.pdf).
</section>

</div>
