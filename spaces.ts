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
    id: 'sadu',
    title: 'SADU',
    description: 'SQL and damn utilities: data sources, a query builder, row mapping and a schema updater for plain JDBC.',
    group: 'libraries',
    sources: [{repo: 'rainbowdashlabs/sadu'}],
    javadoc: [{artifact: 'de.chojo.sadu:sadu'}],
  },
  {
    id: 'universalis',
    title: 'Universalis Java',
    description: 'A Java client for the Universalis market board API of Final Fantasy XIV, over REST and WebSocket.',
    group: 'libraries',
    sources: [{repo: 'rainbowdashlabs/universalis-java'}],
  },
  {
    id: 'publishdata',
    title: 'PublishData',
    description: 'A Gradle plugin that versions builds from git tags and branches and publishes each to the right repository.',
    group: 'gradle',
    sources: [{repo: 'rainbowdashlabs/publishdata'}],
  },
  {
    id: 'reputation-bot',
    title: 'Reputation Bot',
    description: 'A Discord bot that gives reputation when people thank each other, with rankings, roles and a web dashboard.',
    group: 'bots',
    sources: [{repo: 'rainbowdashlabs/reputation-bot'}],
  },{
    id: 'lyna',
    title: 'Lyna',
    description: 'A Discord bot and web app that sells licenses, grants roles and serves downloads from a Nexus.',
    group: 'bots',
    sources: [{repo: 'rainbowdashlabs/lyna'}],
  },
  {
    id: 'nexus-api-wrapper',
    title: 'Nexus API Wrapper',
    description: 'A Java client for the Nexus Repository 3 REST API: search, download and list artifacts and repositories.',
    group: 'libraries',
    sources: [{repo: 'rainbowdashlabs/nexus-api-wrapper'}],
  },
] satisfies Space[]
