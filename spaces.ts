import type {Space} from 'docs-hub'

export default [
  {
    id: 'ocular',
    title: 'Ocular',
    description: 'Configuration files with Jackson: typed classes in JSON, YAML or TOML, with overrides from the environment.',
    group: 'libraries',
    sources: [{repo: 'rainbowdashlabs/ocular', ref: 'chore/project-setup'}],
    javadoc: [{artifact: 'dev.chojo:ocular'}],
  },
] satisfies Space[]
