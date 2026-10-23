import type {Space} from 'docs-hub'

export default [
  {
    id: 'ocular',
    title: 'Ocular',
    description: 'Configuration files with Jackson: typed classes in JSON, YAML or TOML, with overrides from the environment.',
    group: 'libraries',
    sources: [{repo: 'rainbowdashlabs/ocular'}],
    javadoc: [{artifact: 'dev.chojo:ocular'}],
  },
  {
    id: 'lyna',
    title: 'Lyna',
    description: 'A Discord bot and web app that sells licenses, grants roles and serves downloads from a Nexus.',
    group: 'bots',
    sources: [{repo: 'rainbowdashlabs/lyna', ref: 'feature/docs'}],
  },
] satisfies Space[]
