# juice-site

The website for the Juice system: a homepage plus the manuals of the component
repositories, served from one place.

The manuals are **not** kept here. Each one stays in its own repository, which
remains the source of truth, and is pulled in when the site is built. Nothing
under `_juice/` (or any future `_<name>/`) is committed.

## How it works

1. `manuals.yml` lists each manual: its repository, the ref to pull, and the
   directory inside that repository.
2. `script/fetch-manuals` downloads each one and writes it to `_<name>/`, a
   Jekyll collection. It resolves the ref to a commit and logs it, so every
   build records exactly what it published.
3. Jekyll renders the homepage and the collections with the
   [Just the Docs](https://just-the-docs.com) theme, the same theme the Juice
   manual already uses, so its pages render unchanged.
4. `script/check-site` verifies the built output: required pages, sidebar
   order, every internal link and anchor, and the search index.
5. `.github/workflows/pages.yml` runs all of that and deploys to GitHub Pages
   on push to `main`, once a day, and whenever you click **Run workflow**.

Each manual is its own collection because Just the Docs gives a collection its
own navigation namespace. The `nav_order` and `parent` values of one manual
cannot collide with another's.

## Credentials

Fetching from a private repository needs a token.

- **In CI**: the Actions secret `MANUALS_TOKEN`, a fine-grained token with
  Contents: read on the manual repositories.

  ```bash
  gh secret set MANUALS_TOKEN --repo daios-ai/juice-site
  ```

- **Locally**: nothing to set up. The script falls back to `gh auth token`.

## Building locally

Needs Ruby. Without it, push and read the workflow log instead.

```bash
bundle install
python3 script/fetch-manuals
bundle exec jekyll serve            # http://localhost:4000/juice-site/
```

To run the checks against a build:

```bash
bundle exec jekyll build
BASEURL=/juice-site python3 script/check-site _site
```

## Adding a manual

1. Add an entry to `manuals.yml`.
2. In `_config.yml`, add a matching block under `collections`, `defaults` and
   `just_the_docs.collections`. Copy the `juice` blocks and change the name.
3. Add `_<name>/` to `.gitignore`.
4. If the manual has no `layout` in its front matter, the `defaults` block
   supplies one. If its pages have no `nav_order`, they sort alphabetically.

A manual needs Just the Docs front matter (`title`, `nav_order`, and `parent`
for child pages) to produce a useful sidebar. Plain Markdown will render but
will not organize itself.

## Known limitation

Seven links in the Juice manual point at `github.com/daios-ai/juice/blob/...`
for `requirements.md`, `API.md`, `ecosystem-standard.md` and `docs/oauth.md`.
While `juice` is private those 404 for visitors. The build logs a warning with
the count. Fixing it means either making `juice` public or moving those four
documents into `manual/`; both changes belong in the `juice` repository, so
this site deliberately does not rewrite the links.
