export default {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    bracketSpacing: false,
    bracketSameLine: true,
    jsxBracketSameLine: true,
    plugins: ["prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
    // https://github.com/trivago/prettier-plugin-sort-imports
    importOrder: [
        "^dotenv",
        "^init",
        "\\./(.*)init",
        "(.*).css$",
        "^react",
        "^react/(.*)$",
        "^next",
        "^next/(.*)$",
        "^next/(.*)$",
        "^[a-zA-Z0-9]",
        "^@(.*)$",
        "^(?!\\.)(?!src\\?)(?!@)(.*)$",
        "^(?!@).*$",
        "^[./]",
        "<THIRD_PARTY_MODULES>",
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    // importOrderGroupNamespaceSpecifiers: true,
};
