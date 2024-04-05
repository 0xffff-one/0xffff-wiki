// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '0xFFFF Wiki',
  tagline: '整理 CS 领域的学习资源及攻略',
  url: 'https://wiki.0xffff.one',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xffff-one', // Usually your GitHub org/user name.
  projectName: '0xffff-wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/0xffff-one/0xffff-wiki/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-0XC0HTJ2RP',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '0xFFFF Wiki',
        items: [
          {
            href: 'https://0xffff.one',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://github.com/0xffff-one/0xffff-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      footer: {
        copyright: `
          <a href="https://0xffff.one" target="_blank">0xFFFF</a> &copy; ${new Date().getFullYear()}.
          Built with <a href="https://docusaurus.io" target="_blank">Docusaurus</a>.
        `,
      }
    }),
};

module.exports = config;
