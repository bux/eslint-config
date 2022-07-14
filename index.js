module.exports = {
    extends: ["@antfu"],
    rules: {
        quotes: ["error", "double", { avoidEscape: true }],
        indent: ["error", 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    },
}
