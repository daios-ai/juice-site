---
title: Download
description: Install Juice with one command on macOS or Linux.
layout: minimal
permalink: /download/
nav_exclude: true
---

{%- comment -%}
  The release is written by script/fetch-manuals (requirements D11). Without it
  the release line is omitted rather than shown stale.
{%- endcomment -%}
{%- assign release = site.data.releases.juice -%}

<div class="juice-page" markdown="1">

<a class="juice-home" href="{{ '/' | relative_url }}" aria-label="Juice home">{% include title.html %}</a>

# Download

```sh
curl -fsSL https://juiceos.org/install.sh | sh
```

{% if release %}Current release: {{ release.tag }}, {{ release.published_at | date: "%-d %B %Y" }}.
[Read the script]({{ '/install.sh' | relative_url }}) &middot; [Release notes]({{ release.url }}){% else %}[Read the script]({{ '/install.sh' | relative_url }}) &middot; [Release notes](https://github.com/daios-ai/juice/releases){% endif %}

**What it does.** Downloads the `juice` binary for your platform into
`~/.juice/bin`, after checking it against the release's published checksum, and
adds that directory to your PATH by editing your shell profile. Options go after
`sh -s --`: a release tag pins a version, and `--no-modify-path` leaves your
profile alone. `JUICE_HOME` moves the whole installation elsewhere.

**Platforms.** macOS and Linux, Intel and ARM. Windows is not supported.

**Requirements.** None, to run a kernel on `play`. A local language model is
optional. With [Ollama](https://ollama.com) running and the default models
pulled (`gemma4:26b` and `nomic-embed-text`), search ranks by meaning and the
`sys/llm/*` actions work. Without them, the kernel logs a warning at startup,
search is keyword-only, and the language-model actions fail until a model is
reachable. Any OpenAI-compatible or Anthropic endpoint can be configured instead
([Configuration]({{ '/juice/reference/config.html' | relative_url }})). Real
money on `polygon` or `arbitrum-one` needs a wallet; see
[Deposits and withdrawals]({{ '/juice/money/deposits-and-withdrawals.html' | relative_url }}).

**Removing it.** Delete `~/.juice/bin` to remove the program. A kernel you
created stays in `~/.juice/kernels/<world>/`, with its ledger and keys, until
you remove it yourself; on a world with real money, read
[Operating a kernel]({{ '/juice/operating/' | relative_url }}) before you do.

**License.** AGPL-3.0. Services and agents that talk to a kernel over HTTP are
separate works.

Or build from source with Go 1.25 or later:
[instructions](https://github.com/daios-ai/juice#install-and-boot).

</div>
