---
prev: false
next: false
---

# ESLint

To configure `oxlint` for with our pre-configured ESLint rules, simply add the following code to your [oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html#create-a-config-file) (`.oxlintrc.json`):

::: tip Hint
[`oxlint`'s ESLint plugin is enabled by default](https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins). It doesn't need to be enabled by adding it to [`plugins`](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#plugins) inside your configuration file (see our example below).
:::

```json [.oxlintrc]
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": [
    "./node_modules/@ogs-gmbh/oxlint-presets/eslint-recommended.json" // [!code ++]
  ]
}
```
