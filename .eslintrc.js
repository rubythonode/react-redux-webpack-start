module.exports = {
    "extends": "airbnb",
    "env" : {
        "browser" : true,
        "node" : true
    },
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules" : {
        "comma-dangle": 0,
        "no-console": 0,
        "semi": [2, "never"],
        "func-names": 0,
        "space-before-function-paren": 0,
        "no-multi-spaces": 0,
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
