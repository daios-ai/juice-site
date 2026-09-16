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

<p class="juice-beta"><strong>Beta.</strong> Run it at your own risk, and
<a href="{{ '/contact/' | relative_url }}">tell us what breaks</a>.</p>

{% include juice-masthead.html %}

<h1 class="juice-pitch">An economic network of capabilities for humans and agents.</h1>

<p class="juice-lede">Juice terraforms the web we already have: any existing
HTTP endpoint becomes an <strong>action</strong> that anyone can call, pay for,
and compose into new ones.</p>

<nav class="juice-actions" aria-label="Primary">
<div class="juice-actions__group">
<a class="juice-button" href="{{ '/download/' | relative_url }}">Download</a>
<a class="juice-button" href="{{ '/juice/' | relative_url }}">Manual</a>
<a class="juice-button" href="{{ '/juice/getting-started.html' | relative_url }}">Getting started</a>
<a class="juice-button" href="https://github.com/daios-ai/juice">GitHub</a>
</div>
<div class="juice-actions__group">
<a class="juice-button" href="{{ '/why/' | relative_url }}">Why Juice</a>
<a class="juice-button" href="https://daios.ai/static/pdf/daios-vision-paper.pdf">Vision paper</a>
</div>
</nav>

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
<dd>Actions are economic building blocks: typed, priced capabilities that can themselves buy other actions from their budget. Providers can combine specialist services and sell the resulting capability at one advertised price.</dd>
</div>

<div>
<dt>Delegated execution</dt>
<dd>Run a process on a network. Work can move between services without the caller coordinating every step. A funded process preserves progress and budget, can pause for input, and continue when participants respond.</dd>
</div>

<div>
<dt>The web as it is</dt>
<dd>Existing services can join without being rebuilt for a new agent platform. <a href="https://www.openapis.org/">OpenAPI</a> operations become actions, actions remain ordinary HTTP endpoints, and existing mechanisms such as <a href="https://oauth.net/2/">OAuth</a> continue to handle consent.</dd>
</div>

<div>
<dt>A market of capabilities</dt>
<dd>Agents can discover capabilities at runtime rather than relying on integrations chosen in advance. Public actions are searchable across the network and expose a typed interface, description, and advertised price.</dd>
</div>

<div>
<dt>Blockchain micropayments</dt>
<dd>Even small contributions can be paid for economically. Calls between nodes settle on <a href="https://arbitrum.io/">Arbitrum One</a>, with small obligations handled through probabilistic payments whose expected value matches the amount owed.</dd>
</div>

<div>
<dt>Traceable trade</dt>
<dd>Past behavior can inform future selection. Every call produces a signed receipt recording the transaction, and payer feedback travels with that evidence across nodes rather than being reduced to a central score.</dd>
</div>

<div>
<dt>Runs anywhere</dt>
<dd>Independent operators can participate without relying on a central host. A node can run on a laptop behind a home router, with no public address, port forwarding, or hosted infrastructure required.</dd>
</div>

<div>
<dt>Bring your own LLM</dt>
<dd>The network does not depend on one model provider. A node can use a local or remote language model, fall back to keyword search without one, and handle payments independently of either.</dd>
</div>
</dl>
</section>

<section class="juice-section juice-section--wide" markdown="1">

<h2>Why not MCP + APIs + x402?</h2>

MCP lets agents call tools, and x402 lets them pay for services. That works when the agent manages the workflow itself.

Juice adds bounded delegation: an action can spend its budget on other actions, which can do the same recursively. 
This allows agents to delegate work to services discovered at runtime without centralizing coordination and spending authority.

```text
agent
  │ $1.00
  ▼
action A
  ├── $0.20 → action B
  │              └── $0.05 → action D
  ├── $0.15 → action C
  └── remaining amount
        ├── operator fee
        └── provider margin
```

<table class="juice-compare">
<thead>
<tr><th></th><th>MCP + APIs + x402</th><th>Juice</th></tr>
</thead>
<tbody>
<tr><td>Call external capabilities</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
<tr><td>Pay for a service</td><td class="yes">Yes</td><td class="yes">Yes</td></tr>
<tr><td>Delegate a budget with a task</td><td class="no">Application-defined</td><td class="yes">Native</td></tr>
<tr><td>Preserve it through recursive delegation</td><td class="no">Application-defined</td><td class="yes">Native</td></tr>
<tr><td>Produce evidence across the execution</td><td class="no">Application-defined</td><td class="yes">Native</td></tr>
</tbody>
</table>
</section>

{%- comment -%}
  The image is not a link: the treatment the reference gives a linked image, a
  scale on hover, is feedback that it is clickable, and there is nowhere to send
  a reader while the juice-ui manual is unwritten. It gains both together.
{%- endcomment -%}
<section class="juice-section juice-section--wide">
<h2>Juice UI (coming soon)</h2>

<figure class="juice-shot">
<img src="{{ '/assets/juice-ui.webp' | relative_url }}" width="1785" height="860"
     loading="lazy"
     alt="A grid of action cards, each with a name, a price, a description, a
          success rate and a latency, beside a sidebar and a search field.">
<figcaption>A web interface to a kernel: everything you can do there, in a
browser. Coming soon.</figcaption>
</figure>
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
