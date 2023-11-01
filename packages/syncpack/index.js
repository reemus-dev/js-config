/** @type {import("syncpack").RcFile} */
const config = {
  dev: true,
  filter: ".",
  indent: "  ",
  overrides: true,
  peer: true,
  prod: true,
  resolutions: true,
  semverGroups: [],
  semverRange: "",
  sortAz: [
    "contributors",
    "dependencies",
    "devDependencies",
    "keywords",
    "peerDependencies"
  ],
  sortFirst: [
    // General
    "name",
    "version",
    "description",
    "license",
    // Scoping
    "type",
    "private",
    "sideEffects",
    "engines",
    "workspaces",
    // Exports
    "main",
    "module",
    "types",
    "exports",
    "bin",
    "files",
    // Rest
    "scripts",
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "syncpack",
    "prettier",
    "eslintConfig",
    "xo",
    // Public
    "author",
    "repository",
    "homepage",
    "bugs",
    "publishConfig",
    "keywords",
  ],
  source: ["package.json"]
};

module.exports = config;