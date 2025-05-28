import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      "astro/no-set-html-directive": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "error",
      "no-console": "error",
    },
    ignores: ["dist/**", "node_modules/**", "*.d.ts"],
  },
];
