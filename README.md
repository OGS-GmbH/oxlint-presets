> *We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)*

# oxlint-presets

*A curated collection of oxlint preset configurations.*

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img src="https://img.shields.io/github/license/OGS-GmbH/oxlint-presets?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/oxlint-presets/actions/workflows/main-deploy.yml" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/oxlint-presets/main-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/oxlint-presets" target="_blank"><img src="https://img.shields.io/npm/v/%40ogs-gmbh%2Foxlint-presets?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Predefined Oxlint Presets**\
  Ready-to-use configurations for consistent static analysis across projects.

- **Easy to Set Up**\
  Simple configuration lets you start your projects quickly without complex setup.

- **TypeScript & JavaScript Support**\
  Optimized rulesets for both languages to ensure type safety and code quality.

- **Modular & Extendable**\
  Easily extend or override presets to fit specific project requirements.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/oxlint-presets](https://ogs-gmbh.github.io/oxlint-presets).

## Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...

## Installation

Using npm:
```sh
$ npm install -D @ogs-gmbh/oxlint-presets
```

<details>
  <summary>Using a different package managers?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add -D @ogs-gmbh/oxlint-presets
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add -D @ogs-gmbh/oxlint-presets
  ```
  
  Using bun:
  ```sh
  $ bun add -D @ogs-gmbh/oxlint-presets
  ```

</details>

### Supported Plugins

Now, you're ready to configure `oxlint` with our presets. Simply follow each plugins guide, because we support many [plugins from `oxlint`](https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins):

| Plugin | Preset | Guide |
| --- | --- | --- |
| ✅ ESLint | [`eslint-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/eslint-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/eslint) |
| ✅ TypeScript | [`typescript-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/typescript-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/typescript) |
| ✅ Unicorn | [`unicorn-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/unicorn-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/unicorn) |
| ✅ React | [`react-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/react-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/react) |
| ✅ Next.js | [`nextjs-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/nextjs-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/nextjs) |
| ✅ OXC | [`oxc-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/oxc-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/oxc) |
| ✅ import | [`import-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/import-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/import) |
| ✅ JSDoc | [`jsdoc-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/jsdoc-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/jsdoc) |
| ✅ Node.js | [`node-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/node-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/node) |
| ✅ Promise | [`promise-recommended.json`](https://github.com/OGS-GmbH/oxlint-presets/blob/main/public/promise-recommended.json) | [here](https://ogs-gmbh.github.io/oxlint-presets/guide/promise) |

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing
Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests
Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests
GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct
We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
