---
prev: false
next: false
---

# JSDoc

To configure `oxlint` for with our pre-configured JSDoc rules, simply add the following code to your [oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html#create-a-config-file) (`.oxlintrc.json`):

::: tip Hint
[`oxlint`'s JSDoc plugin is not enabled by default](https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins). It needs to be enabled by adding it to [`plugins`](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#plugins) inside your configuration file (see our example below) to function properly.
:::

```json [.oxlintrc]
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": [ // [!code ++]
    "jsdoc" // [!code ++]
  ] // [!code ++]
  "extends": [
    "./node_modules/@ogs-gmbh/oxlint-presets/jsdoc-recommended.json" // [!code ++]
  ]
}
```
