/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  trailingComma: "es5",
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
