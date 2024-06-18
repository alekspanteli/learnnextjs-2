const styleguide = require("@vercel/style-guide/prettier");

module.exports = {
  ...styleguide,
  singleQuote: true,
  semi: true,
  plugins: [
    ...styleguide.plugins,
    "prettier-plugin-tailwindcss",
  ],
};
