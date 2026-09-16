---
title: Download
description: Install Juice with one command on macOS or Linux.
layout: minimal
permalink: /download/
nav_exclude: true
---

<div class="juice-page" markdown="1">

<a class="juice-home" href="{{ '/' | relative_url }}" aria-label="Juice home">{% include title.html %}</a>

# Download

```sh
curl -fsSL https://juiceos.org/install.sh | sh
```

macOS or Linux, Intel or ARM. One binary in `~/.juice/bin`: nothing system-wide, no
password, no kernel started.

The script downloads the release for your platform and refuses it unless it matches the
published checksum. [Read it first]({{ '/install.sh' | relative_url }}) if you would
rather not pipe a script into a shell.

A particular version:

```sh
curl -fsSL https://juiceos.org/install.sh | sh -s -- v0.14.16
```

Then [Getting started]({{ '/juice/getting-started.html' | relative_url }}).

No Windows build yet. [Build from source](https://github.com/daios-ai/juice).

</div>
