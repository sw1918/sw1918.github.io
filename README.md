# Personal site

Academic-first personal site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run it locally

Requires Node 22+.

```bash
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # outputs static site to dist/
npm run preview    # serve the built site
```

## First-time setup

1. **`src/site.config.ts`**: your name, title, email, profile links, nav.
2. **`astro.config.mjs`**: set `site` to your final URL.
3. **Photo**: drop a square headshot in `public/` and update `photo` in `site.config.ts`.
4. **CV PDF**: put it at `public/cv.pdf`. Paper PDFs can go in `public/papers/`.
5. Replace the placeholder text in `src/pages/index.astro`, `research.astro`, and `cv.astro`.
6. Delete or replace the example content in `src/content/`.

## Adding content

Everything is one file per item. Lists, the home page, tag pages, and RSS update automatically.

| To add…            | Create                                         |
| ------------------ | ---------------------------------------------- |
| A blog post        | `src/content/posts/my-post.md`                 |
| A paper            | `src/content/publications/2027-short-name.yaml`|
| A game or release  | `src/content/projects/name.md` (`kind: game` or `music`) |
| A news item        | a new entry at the top of `src/content/news.yaml` |
| A course           | an entry in `src/content/teaching.yaml`        |

Copy an existing file as a template. Frontmatter fields are defined (and validated at build time) in `src/content.config.ts`, so a typo in a field name fails the build with a clear message instead of silently breaking a page.

- `selected: true` on a paper shows it on the home page.
- `draft: true` on a post keeps it out of the published site.
- `steamAppId` on a project renders the Steam store widget; `embed` takes any iframe URL (YouTube, Bandcamp, SoundCloud, itch.io).
- Project images go next to the `.md` file and are referenced as `cover: ./image.png`. Astro resizes and optimizes them.

## Deploying to GitHub Pages

1. Push this repo to GitHub (as `<username>.github.io`, or any repo name with a custom domain).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes.

**Custom domain:** add a file `public/CNAME` containing just your domain (e.g. `yourname.com`), set the same domain in Settings → Pages, and point your DNS at GitHub Pages per GitHub's docs. Set `site` in `astro.config.mjs` to match.

**No custom domain and repo not named `<username>.github.io`?** Set `base: '/<repo-name>'` in `astro.config.mjs`. (Internal links in this starter are root-relative, so a custom domain or `<username>.github.io` repo is the smoother path.)

## Structure

```
src/
  site.config.ts        identity, links, nav
  content.config.ts     content schemas
  content/              all your content (Markdown + YAML)
  layouts/Base.astro    page shell: head/meta, header, footer
  components/           PubList, ProjectGrid
  pages/                one file per route
  styles/global.css     design tokens (colors, fonts) at the top
public/                 files served as-is (favicon, photo, PDFs, CNAME)
```

To restyle, start with the variables at the top of `src/styles/global.css`. Dark mode follows the visitor's system setting.
