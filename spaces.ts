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
    id: 'reputation-bot',
    title: 'Reputation Bot',
    description: 'A Discord bot that gives reputation when people thank each other, with rankings, roles and a web dashboard.',
    group: 'bots',
    sources: [{repo: 'rainbowdashlabs/reputation-bot', ref: 'docs/hub'}],
  },
] satisfies Space[]
