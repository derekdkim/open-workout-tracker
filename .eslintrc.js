module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended", 
        "plugin:react/recommended", 
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
        indent: ["error", "tab"],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-namespace": "warn",
        "no-console": "warn",
        "prettier/prettier": "error",
    },
};
