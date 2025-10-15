import config from "@antfu/eslint-config"

export default config({
  stylistic: false,
  typescript: {
    overrides: {
      "eslint-comments/no-unlimited-disable": "off",
    },
  },
  react: {
    overrides: {
      "react/no-array-index-key": "off",
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react-refresh/only-export-components": "off",
    },
  },
})
