module.exports = {
    env : {
        browser : true,
        es6 : true,
    },
    parserOptions : {
        ecmaFeatures : {
            module : true,
            jsx : true,
        },
        ecmaVersion : 2020,
        sourceType : "module",
    },
    plugins : ["react", "unused-imports"],
    rules : {
        "react/jsx-uses-vars" : "error",
        "react/jsx-uses-react" : "error",
        "unused-imports/no-unused-imports-ts" : ["error"],
    },
};
