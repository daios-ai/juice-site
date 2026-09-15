# juice-site: requirements and structure

Version: 0.3
Codename: `juice-site`

INSTRUCTIONS FOR CHANGING THIS FILE:
- State each fact once, in the section that owns it. Elsewhere, refer to it by number.
- Section numbering is fixed. Do not reorder or split sections.
- A requirement (§2) changes only by a deliberate revision that increments the version.
  A design decision (§6) may change whenever §2 still holds.
- Write in the present tense. Do not record history, dates, or the reasoning of a
  particular session.
- Prefer deleting or shortening to adding.

## 1. Purpose

The site publishes a landing page and the manual of each Juice component repository
under one origin.

The manuals are not authored in this repository. Each is maintained in the repository
of the component it documents and is copied in at build time. This repository holds
the landing page, the theme, the build, and the manifest listing the manuals.

No manual content is committed here. The directories `_<name>/` are build output and
are listed in `.gitignore`.

## 2. Requirements

2.1 The landing page and every listed manual are served under one origin with one
navigation and one search index.

2.2 A manual is pulled from its own repository at build time and rendered without
modification of its content. The site supplies layout and navigation only.

2.3 Adding a manual requires an entry in `manuals.yml`, corresponding blocks in
`_config.yml`, and a line in `.gitignore`. It requires no change to a script, a
layout, or a stylesheet.

2.4 Each build resolves every manifest `ref` to a commit and logs it.

2.5 The workflow runs `script/check-site` against the built output before uploading
the Pages artifact. A failing check stops the deploy.

2.6 A manual is extracted to a temporary directory and validated before the existing
`_<name>/` is replaced. A failed fetch leaves the previous content in place.

2.7 Page content is readable with JavaScript disabled. Search requires JavaScript;
navigation does not.

2.8 No resource loaded from another origin may block rendering. Fonts, icons,
scripts and stylesheets are served from `assets/`; a third-party resource is
deferred or asynchronous.

2.9 The token used to read a private source repository appears in no built page,
log line, or committed file.

## 3. Build

The build has four steps. The workflow in `.github/workflows/pages.yml` runs them
on push to `main`, once daily, and on manual dispatch. The daily run exists because a
manual can change without a commit to this repository.

1. `script/fetch-manuals` reads `manuals.yml`. For each entry it resolves `ref` to a
   commit through the GitHub API, downloads the directory `path` as a tarball, and
   writes it to `_<name>/`. Archive members that traverse paths or are links are
   dropped. A `_config.yml` inside the manual is dropped. The script logs the
   repository, commit and page count per manual, and warns about links to
   `github.com/<owner>/<repo>/blob/` (§8).

2. Jekyll renders `index.md` and each collection with the theme (§6, D1).

3. `script/check-site` parses `_site` and verifies: the pages in its `REQUIRED` list
   exist; the homepage links to `<baseurl>/juice/`; the manual's sidebar lists the
   entries in `EXPECTED_NAV` in that order; every internal `href` and `src` resolves
   to a file under `_site`; every URL fragment names an element id on its target page;
   `assets/js/search-data.json` is valid JSON whose entries resolve. It exits non-zero
   on any error.

4. On success the Pages artifact is uploaded and deployed. On failure `_site` is
   uploaded as an artifact named `site-debug`.

## 4. Layout

```
CNAME                     the domain the site is served at
index.md                  landing page
why.md sponsor.md         site pages (D9)
contact.md privacy.md
manuals.yml               manuals to pull
_config.yml               site configuration; one block per manual under
                          collections, defaults and just_the_docs.collections
_includes/                theme include overrides
_sass/custom/setup.scss   palette variables, logotype variables, @font-face
_sass/custom/custom.scss  theme overrides and landing page styles
assets/                   logo, icons, fonts, masthead script
script/fetch-manuals      build step 1
script/check-site         build step 3
.github/workflows/        build steps 1–4
_<name>/                  fetched manuals; not committed
```

## 5. Manual front matter

A manual is Markdown with Just the Docs front matter. The site's `defaults` supply
`layout` where a page has none.

- `title` is required on every page. It is the sidebar entry.
- `nav_order` orders pages. Pages without it sort alphabetically after those with it.
- `parent` names the `title` of a child page's parent.
- Links between pages of one manual are relative and carry the `.html` extension
  (D3).

## 6. Design decisions

Each entry names the mechanism and the requirement or reason it serves.

D1. The site generator is Jekyll with `remote_theme: just-the-docs/just-the-docs`
pinned to `v0.12.0`. The Juice manual was written for this theme. The pin prevents
the rendering of a manual from changing without a commit here.

D2. Each manual is one Jekyll collection. Just the Docs scopes `nav_order` and
`parent` to a collection, so values in one manual cannot collide with values in
another (2.3).

D3. Collection permalinks are `/:collection/:path:output_ext`. A page's URL then
carries `.html`, which is the file Jekyll writes and the form relative links inside
the manuals use. Extensionless URLs would depend on the host redirecting.

D4. The landing page uses the theme's `minimal` layout, which omits the sidebar.
Three theme rules are scoped under `.side-bar + .main` and do not apply to it: the
column width, the header's visibility below the `md` breakpoint, and the content
wrap's top padding. `custom.scss` restates all three under
`.main:not(.side-bar + .main)`.

D5. JetBrains Mono is served from `assets/fonts/` as two Latin-subset WOFF2 files,
one variable upright (weights 300–700) and one italic, declared in `setup.scss`
(2.8).

D6. The palette and the landing page's structure follow `omacom/omarchy-site` at
commit `9832321`. Stylesheet rules taken from that source cite the file they came
from. The landing page adds one departure from that source: three soft radial
gradients behind the hero, in the mark's pink and magenta and the palette's blue. No
requirement in §2 depends on the appearance.

D7. `check-site` and `fetch-manuals` are Python 3. `check-site` uses the standard
library only; `fetch-manuals` additionally requires PyYAML. Both parse rendered or
downloaded output rather than source.

D8. The landing page's hero is an inline SVG animated by
`assets/js/juice-masthead.js`. The markup ships the final state, so the masthead is
visible with JavaScript disabled (2.7); the script clears it on its first frame and
restores it under `prefers-reduced-motion`.

D10. Traffic is measured by Cloudflare Web Analytics, emitted by
`_includes/head_custom.html` only when `cloudflare_analytics_token` is set in
`_config.yml`. It is the site's only third-party resource and is deferred (2.8).
It sets no cookie and stores nothing on the device, so no consent dialogue is
required; what it collects is stated at `/privacy/`.

D9. A site page other than the landing page is a Markdown file at the repository
root carrying `layout: minimal`, an explicit directory `permalink`, and
`nav_exclude: true`. It reuses the landing page's styles through
`class="juice-landing juice-page"`. The directory permalink is served as
`index.html` and needs no host redirect; D3 does not apply, because site pages
carry no relative links written with an extension. `nav_exclude` keeps them out of
a manual's sidebar, which is that manual's namespace (D2). They are reached from
the footer, which is shared with the manual, and each carries the linked logotype
that the omitted sidebar would otherwise provide.

## 7. Notes for editors

Constraints of the theme and of kramdown that affect edits to `index.md` and the
stylesheets.

7.1 kramdown parses the content of a block-level HTML element as raw unless the
element carries `markdown="1"`. The attribute does not inherit: it must appear on
every element between the file and the Markdown. Content inside such an element
must start at column 0; four leading spaces begin a code block.

7.2 A Markdown table inside an element with `markdown="1"` is not parsed as a table.
Tables on the landing page are written as HTML. The theme's `table_wrappers` layout
wraps them regardless of source.

7.3 Every page passes through the theme's `vendor/compress` layout, which collapses
whitespace outside `<pre>`. An inline `<script>` is reduced to one line. Scripts are
kept in `assets/js/`.

7.4 The theme's type-scale mixins (`fs-1` … `fs-10`) emit `font-size` with
`!important`. An override of a heading size must also be `!important`.

7.5 The theme's heading-anchor include acts only on headings that already have an
`id`. kramdown assigns ids to Markdown headings, not to headings written as HTML.

7.6 The theme styles `dl` as a two-column grid, right-aligns `dt`, and appends a
colon via `dt::after`. `.juice-features` overrides all three.

7.7 A Ruby toolchain is not assumed. Without one, changes are verified by pushing
and reading the workflow log, then fetching the deployed page.

## 8. Known limitation

The Juice manual contains links of the form `github.com/daios-ai/juice/blob/...` to
`requirements.md`, `API.md`, `ecosystem-standard.md` and `docs/oauth.md`. While that
repository is private, these return 404 to visitors. `fetch-manuals` and `check-site`
both report them.

The site does not rewrite them (2.2). The remedy is in the `juice` repository: make
it public, or move those documents under `manual/`.

## 9. Credentials

A private source repository requires a token with read access to its contents.

- In CI: the Actions secret `MANUALS_TOKEN`.
- Locally: the script falls back to `gh auth token`.
