import type {Site} from 'docs-hub'

const blue = '#5bcefa'
const pink = '#f5a9b8'

export default {
  title: 'Chojo Docs',
  tagline: 'Documentation for my libraries, Gradle plugins and Discord bots.',
  url: 'https://docs.chojo.dev',
  favicon: 'img/favicon.png',
  logo: {src: 'img/logo.png', alt: 'Chojo'},
  primary: {light: '#2f2f33', dark: '#ececef'},
  stripe: [blue, pink, '#ffffff', pink, blue],
  customCss: ['./css/pastel.css'],
  groups: [
    {id: 'libraries', label: 'Libraries'},
    {id: 'gradle', label: 'Gradle plugins'},
    {id: 'bots', label: 'Discord bots'},
  ],
  navbarLinks: [
    {label: 'chojo.dev', href: 'https://chojo.dev'},
    {label: 'GitHub', href: 'https://github.com/rainbowdashlabs'},
  ],
  footer: [
    {
      title: 'Community',
      items: [
        {label: 'Discord', href: 'https://discord.chojo.dev'},
        {label: 'Mastodon', href: 'https://chaos.social/@chojo'},
      ],
    },
    {
      title: 'More',
      items: [
        {label: 'chojo.dev', href: 'https://chojo.dev'},
        {label: 'Blog', href: 'https://chojo.dev/blog/'},
        {label: 'GitHub', href: 'https://github.com/rainbowdashlabs'},
      ],
    },
    {
      title: 'Support me',
      items: [{label: 'Patreon', href: 'https://www.patreon.com/eldoriaplugins'}],
    },
  ],
  copyright: `Chojo ${new Date().getFullYear()}`,
  mavenRepositories: ['https://repo1.maven.org/maven2', 'https://eldonexus.de/repository/maven-public'],
} satisfies Site
