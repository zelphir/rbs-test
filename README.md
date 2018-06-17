# Getting started

Run `yarn` or `npm install` in the root of project. This will run a `postinstall` script to setup the `ui` and the `library` installing npm modules and build the library. Thanks to `$npm_execpath` the `ui` and the `library` will be installed using the package manager of your choice (`npm` or `yarn`)

## Tools

### Library
`rollup` is used to package the module for both `commonjs` and `es`. This way in the dist folder there will be an `index.js` in `cjs` (the one used by the `main` in the `package.json`) and an `index.es.js`, set in the `module` of the `package.json`. The latter can be used by ES6-aware tools (like webpack or parceljs) to import the ES6 module directly.

### UI
`parceljs` is used to develop and build the app using `babel` to transpile modern js code.

About the app: if it was possible to use external libraries I would used probably `react-virtualized` or similar to play nice and smooth with big data grids and for the search a fuzzy library to have a better search experience.

## Changes
The only change I made to the `package.json` was to update the node version to the latest `lts`.

## Nice stuff
The project is using `eslint` to lint the code and `prettier` to format it. It's an automated task that runs in a `git commit` hook. Everytime there is a new commit the project will be linted, tested and if the previous steps are ok will be formatted using `prettier`.
