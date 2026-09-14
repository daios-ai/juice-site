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

<h1 class="juice-pitch">An economic network of capabilities for humans and agents.</h1>

<p class="juice-lede">Juice terraforms the web we already have: any existing
HTTP endpoint becomes an <strong>action</strong> that anyone can call, pay for,
and compose into new ones.</p>

<nav class="juice-actions" aria-label="Primary">
<a class="juice-button" href="{{ '/juice/' | relative_url }}">Manual</a>
<a class="juice-button" href="{{ '/juice/getting-started.html' | relative_url }}">Getting started</a>
<a class="juice-button" href="https://github.com/daios-ai">GitHub</a>
<a class="juice-button" href="https://daios.ai/static/pdf/daios-vision-paper.pdf">Vision paper</a>
</nav>

<section class="juice-section" markdown="1">
<h2>The network</h2>

The network is independently operated nodes, each holding the actions it publishes.
Anything public on one node can be called from any other &mdash; no account there,
nothing arranged in advance.
</section>

{%- comment -%}
  A definition list rather than a bulleted list: the theme draws list markers as an
  absolutely positioned `::before` at a negative margin, which under centred text hangs
  at an arbitrary distance from the ragged edge. A `dl` carries no marker. Each pair is
  wrapped in a div, which HTML permits inside a dl, so the pairs can be laid out as a
  two-column grid on a wide screen: six parallel items in one centred column made the
  page a ribbon.
{%- endcomment -%}
<section class="juice-section juice-section--wide">
<h2>Features</h2>

<dl class="juice-features">
<div>
<dt>Composable actions</dt>
<dd>An action is typed and priced, and may call other actions within its budget. Its owner
sells the result as one thing at one advertised price; the parties beneath are paid from
it.</dd>
</div>

<div>
<dt>Delegated execution</dt>
<dd>Like running a process, but on the network: a funded computation is handed off, may call
other actions, may pause for a named person or agent, and settles when they answer.</dd>
</div>

<div>
<dt>Blockchain micropayments</dt>
<dd>Between nodes, every call settles on chain. An obligation too small to be worth its own
transaction settles by a draw neither side can rig: a larger amount paid rarely, averaging
out exact.</dd>
</div>

<div>
<dt>A market of capabilities</dt>
<dd>Public actions are found by natural-language search across every node. Each result
carries its typed interface and one advertised price, which funds the whole composed work
behind it.</dd>
</div>

<div>
<dt>Traceable trade</dt>
<dd>Every call records who paid, who asked and who was paid, and leaves a signed receipt
verifiable offline. A rating rides with that receipt and crosses nodes as evidence, never
an opaque score.</dd>
</div>

<div>
<dt>Runs anywhere</dt>
<dd>One binary and one file. A node on a laptop behind a home router is a full member of the
network: no public address, no port forwarding, nothing hosted.</dd>
</div>

<div>
<dt>Bring your own LLM</dt>
<dd>The node's language model is whichever you point it at, a local one by default. Search
falls back to keywords without one, and nothing about money depends on which model you
run.</dd>
</div>

<div>
<dt>The web as it is</dt>
<dd>An existing API joins by its OpenAPI document, one action per operation; an action is an
HTTP endpoint; consent is OAuth. There is no new protocol to adopt.</dd>
</div>
</dl>
</section>

{%- comment -%}
  Written as HTML, unlike the prose sections. A kramdown table inside an element
  carrying `markdown="1"` is not recognised: the rows come through as one
  paragraph and the `|---|` separator is typographed into em dashes. The rows
  are static, so the markup costs little and cannot fail that way.
  `_layouts/table_wrappers.html` still wraps it, since that layout rewrites every
  `<table` in the rendered page.
{%- endcomment -%}
<section class="juice-section juice-section--wide">
<h2>Manuals</h2>

<table>
<thead>
<tr><th>Component</th><th>What it is</th><th>Manual</th></tr>
</thead>
<tbody>
<tr><td>Juice kernel</td><td>Accounts, actions, execution, settlement, federation</td><td><a href="{{ '/juice/' | relative_url }}">Juice manual</a></td></tr>
<tr><td>Juice UI</td><td>Building and running Juice apps</td><td>coming soon</td></tr>
<tr><td>Juice rail</td><td>Money rail and on-chain settlement</td><td>coming soon</td></tr>
<tr><td>Juice agent</td><td>Agent-side integration</td><td>coming soon</td></tr>
<tr><td>Juice services</td><td>Services published on the network</td><td>coming soon</td></tr>
</tbody>
</table>
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
