# Chojo Docs

The documentation hub behind [docs.chojo.dev](https://docs.chojo.dev) for my libraries, Gradle plugins and
Discord bots. Every project keeps its docs in a `docs/` folder of its own repository; this hub gathers them at
build time into one site with a space per project. It is built on the
[docs-hub](https://github.com/rainbowdashlabs/docs-hub) package, whose README documents every option.

- `site.ts` — name, address, links and the trans flag stripe
- `spaces.ts` — the projects and where their pages come from
- `css/pastel.css` — the pastel look: blue and pink surfaces, gray text, underlined links

## Develop

```sh
nix-shell        # or any Node 24
npm ci
npm start        # fetch every space and run the dev server
npm run build    # static site in build/
HUB_SOURCE_SADU=../sadu/docs npm start   # a project's local docs folder instead of the published one
```

## Add a space

```ts
{
  id: 'sadu',
  title: 'SADU',
  description: 'One sentence for the landing page.',
  group: 'libraries',   // libraries, gradle or bots
  sources: [{repo: 'rainbowdashlabs/sadu'}],
  javadoc: [{artifact: 'de.chojo.sadu:sadu-core'}],
},
```

Spaces here set no `accent`: an accent becomes the text colour of the space's pages, and the pastels are too
light to read as text. The landing page cards alternate between blue and pink on their own.

Add a space only after its `docs/` folder is on the project's default branch, or the build fails.

## Set up a project repository

`.github/workflows/docs.yml` in the project:

```yaml
name: Docs

on:
  push:
    paths: ['docs/**']
  pull_request:
    paths: ['docs/**']

jobs:
  docs:
    uses: rainbowdashlabs/docs-hub/.github/workflows/space.yml@v1
    with:
      hub-repository: rainbowdashlabs/docs
      rebuild: false
```

Pull requests that touch `docs/` are built against this hub, so broken links fail them. The hub itself
rebuilds nightly, on every push here and by hand (Actions → Docker Build → Run workflow), so merged doc
changes are live by the next morning.

## Deploy

Every push to `main`, the nightly run and a manual run build the Docker image (Node build, nginx serve) and push
it to `ghcr.io/rainbowdashlabs/docs`.
