exports.configs = {
    recommended: {
        extends: [
            "eslint:recommended",
            "plugin:flowtype/recommended"
        ],
        parser: "babel-eslint",
        env: {
            "es6": true,
            "node": true
        },
        plugins: [
            "import",
            "node",
            "flowtype"
        ],
        parserOptions: {
            ecmaVersion: 7
        },
        rules: {
            indent: ["error", 4, {"SwitchCase": 1}],
            quotes: ["error", "double", {
                avoidEscape: true,
                allowTemplateLiterals: true
            }],
            "require-yield": "off",
            "no-console": "off",
            "flowtype/space-after-type-colon": [2, "never"]
        }
    }
};

exports.rules = {
};

