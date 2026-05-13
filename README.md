# Youth Literature Festival Website (Developer README)

This repository contains the Youth Literature Festival website built with Eleventy (11ty), Liquid templates, Markdown content, and static assets.

## Tech stack

- Node.js + npm
- Eleventy (`@11ty/eleventy`)
- Liquid templates (`_includes/`)
- Markdown pages at repository root
- Static assets (`img/`, `scripts/`, `style/`)

## Prerequisites

- Node.js 18+ recommended
- npm 9+ recommended

## Local setup

1. Install dependencies:

	```bash
	npm install
	```

2. Build the site:

	```bash
	npm run eleventy
	```

3. (Optional) Run a local dev server with watch mode:

	```bash
	npx eleventy --serve
	```

Build output is written to `_site/`.

## Repository structure

```text
.
|- *.md                 # Page content files (index.md, authors.md, etc.)
|- _includes/           # Layouts and partials (Liquid)
|- _data/               # JSON data available to templates
|- img/                 # Image assets
|- scripts/             # Front-end JavaScript
|- style/               # Site styles
|- .eleventy.js         # Eleventy config + custom filters
|- package.json         # Build scripts and dependencies
```

## Common update workflows

### 1) Update page content

Edit page files in the repository root:

- `index.md`
- `authors.md`
- `community.md`
- `schools.md`
- `engage.md`
- `news.md`
- `sponsors.md`
- `contact.md`

Each page uses front matter similar to:

```yaml
---
layout: secondary.liquid
pageTitle: Example Page
headerImage: /img/header/example.jpg
---
```

### 2) Update navigation links

Edit `_data/pagelist.json`.

This file is rendered by `_includes/renders/header.liquid` into the main navigation menu.

### 3) Update layouts/partials

- Main page layout: `_includes/main.liquid`
- Secondary page layout: `_includes/secondary.liquid`
- Shared head: `_includes/renders/head.liquid`
- Header/navigation: `_includes/renders/header.liquid`
- Sidebar: `_includes/renders/sidebar.liquid`
- Footer: `_includes/renders/footer.liquid`

### 4) Update images and media

- Add image files under `img/` (use existing subfolders when possible).
- Reference images with site-root paths, for example: `/img/news/example.jpg`.
- Embedded video blocks are added in Markdown using the custom `addVideo` filter.

### 5) Update dynamic data-driven sections

`scripts/main.js` loads Authors, Sponsors, and Committee content from external API endpoints at runtime.

Author, Sponsor, and Committee content can be edited at https://resource.wigg.illinois.edu/. Authors and committee members are managed under "People" and Sponsors are managed under "Resources".

If these sections are missing or incorrect, verify:

- API endpoint availability
- source/tag parameters in `scripts/main.js`
- matching HTML containers in page content

### 6) Update circles

Circles on the main page are managed through the `_data/circles.json` file. 

## Build and validation checklist

Before opening a PR:

1. Run `npm run eleventy` and ensure the build succeeds.
2. Manually review key pages in local preview (`npx eleventy --serve`).
3. Confirm navigation links and image paths are valid.
4. Verify no unintended file changes are included.

## Notes for maintainers

- `_site/` is generated output and is git-ignored.
- `npm run all` is currently an alias for `npm run eleventy`.
- `gulpfile.js` exists, but current npm workflows use Eleventy directly.

## Troubleshooting

### Build fails with missing modules

Run:

```bash
npm install
```

### Site builds but a page does not look right

- Check that the page front matter has the correct `layout`.
- Check image paths begin with `/img/...`.
- Check template edits in `_includes/` for unclosed Liquid/HTML tags.

### Dynamic cards (authors/sponsors/committee) do not render

- Open browser developer tools and inspect network requests for API errors.
- Confirm the corresponding `<ilw-grid>` container exists in the page Markdown.

