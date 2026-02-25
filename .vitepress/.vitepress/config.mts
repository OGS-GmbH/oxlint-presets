import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"
import { sidebarPlugin } from  "@ogs-gmbh/vitepress-plugin-sidebar";
import packageJson from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oxlint-presets",
  description: "A curated collection of oxlint preset configurations.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    search: {
      provider: "local"
    },
    logo: {
      light: "https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg",
      dark: "https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg",
      alt: "OGS GmbH Logo"
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: 'Copyright © 2026 — present <a target="_blank" href="https://www.ogs.de/en/">OGS GmbH</a>'
    },
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Reference", link: "/reference" },
      { text: packageJson.version, items: [
        { text: "Repository", link: "https://github.com/OGS-GmbH/oxlint-presets" },
        { text: "Changelog", link: "https://github.com/OGS-GmbH/oxlint-presets/blob/main/CHANGELOG.md" },
        { text: "Contributing", link: "/other/contributing" },
      ] }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/OGS-GmbH" },
      { icon: "facebook", link: "https://www.facebook.com/OGS.GmbH" },
      { icon: { svg: '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 382 382"><path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 0 1-9.246 9.246H286.73a9.247 9.247 0 0 1-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 0 1-9.246 9.246h-44.426a9.247 9.247 0 0 1-9.246-9.246V149.593a9.247 9.247 0 0 1 9.246-9.246h44.426a9.247 9.247 0 0 1 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"/></svg>' }, link: "https://www.linkedin.com/company/41198063/" },
      { icon: "xing", link: "https://www.xing.com/pages/ogsgmbh" },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>' }, link: "https://www.ogs.de/en/" },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>' }, link: "mailto:info@ogs.de" }
    ],
    sidebar: [
      sidebarPlugin({
        path: "./dist/vitepress-src/guide",
        normalizeDirNames: true
      }),
      {
        text: "Other",
        items: [
          { text: "Contributing", link: "/other/contributing" },
          { text: "Code of Conduct", link: "/other/code-of-conduct" }
        ]
      },
      {
        text: "Legal",
        items: [
          { text: "Disclaimer", link: "/legal/disclaimer" },
          { text: "MIT License", link: "/legal/license" },
          { text: "Copyright © 2026 — present OGS GmbH", link: "https://www.ogs.de/en/" }
        ]
      }
    ]
  },
  head: [
    [ "link", { rel: "shortcut icon", href: "https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.1.0/docs/assets/favicon/favicon.ico" } ],
    [ "link", { rel: "apple-touch-icon", href: "https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.1.0/docs/assets/favicon/apple-touch-icon.png" } ],
    [ "link", { rel: "manifest", href: "site.webmanifest" } ],
    [ "link", { rel: "icon", type: "image/svg+xml", href: "https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.1.0/docs/assets/favicon/favicon.svg" } ],
    [ "link", { rel: "icon", type: "image/png", href: "https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.1.0/docs/assets/favicon/favicon-96x96.png", sizes: "96x96" } ]
  ],
  base: "/oxlint-presets/",
  srcDir: "../dist/vitepress-src",
  outDir: "../dist/docs",
  titleTemplate: ":title - OGS oxlint-presets",
  cleanUrls: true,
  appearance: true,
  markdown: {
    /* eslint-disable-next-line @tseslint/typedef */
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ]
  }
})
