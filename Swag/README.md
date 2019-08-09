**How to consume API Docs?** <br>
Run Server: <br>
`npm run dev`

Then visit `<baseURL>/apiDocs/<version>` <br>
Example: `http://localhost:3000/apiDocs/v1.0.0`

If you don't know the version availability, simply visit - ex: `http://localhost:3000/apiDocs/` for versions list.

> **Note:** If you are on local server, make sure the domain-name is actually `localhost` and not `127.0.0.1` to(avoid `cross-origin` blocks) use `Try it out` feature.

---

**How to build or update API Docs?** <br>
Following details/documentation/procedure is for building API Documentation for anyone updating API docs in the future.

**Dependencies:** <br>

1. `swagger-ui-watcher` <br>
   Install this globally: <br>
   `npm i -g swagger-ui-watcher`

   `swagger-ui-watcher ./Swag/MainSwag.json` to watch and reload Doc changes while building.

1. `swagger-ui-express` <br>
   This package is available as main project dependency. No need to install it separately.

**Details:** <br>
`./Swag` is the root directory of modular Swagger JSON files. <br>
`./Swag/MainSwag.json` is the file where all other doc files combine with the help of `$ref`s.

**Finally, to build Doc:** <br>
`npm run buildAPIDoc // > swagger-ui-watcher ./Swag/MainSwag.json --bundle=./docs/APIs.json` <br>
This generates `APIs.json` file at `./docs/` directory. <br>

**Once that's done, update the version if needed:** <br>
`src/api/docs/doc.routes.js // Version route - Rename the JSON files to reflect their versions etc.` <br>
`src/api/docs/versions.html // Version list`

`./src/app.js` `require`s `./docs/APIs.json` as the main Swagger file to serve API Docs in browser.

---
