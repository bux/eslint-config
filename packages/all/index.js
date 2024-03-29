module.exports = {
    extends: ["@antfu"],
    rules: {
        "quotes": ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/quotes": ["error", "double"],

        "indent": ["error", 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        "@typescript-eslint/indent": ["error", 4],
        "vue/html-indent": ["warn", 4],

        "curly": ["error", "all"],
    },
}
