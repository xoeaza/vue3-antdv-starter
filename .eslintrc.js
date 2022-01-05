module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {
    defineProps: true,
    defineEmits: true,
  },
  extends: ["alloy", "alloy/vue"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/component-tags-order": [
      "error",
      {
        order: [["script", "template"], "style"],
      },
    ],
    "vue/no-multiple-template-root": "off",
    "vue/valid-v-model": "warn",
    "vue/no-v-model-argument": "off",
    "max-params": ["error", 4],
  },
};
