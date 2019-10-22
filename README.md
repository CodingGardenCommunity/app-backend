[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub package.json version](https://img.shields.io/github/package-json/v/CodingGardenCommunity/app-backend.svg) ![Travis (.org) branch](https://img.shields.io/travis/CodingGardenCommunity/app-backend/develop.svg) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/CodingGardenCommunity/app-backend.svg) ![GitHub contributors](https://img.shields.io/github/contributors/CodingGardenCommunity/app-backend.svg) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/CodingGardenCommunity/app-backend.svg)

# Coding Garden Community App API

This repository contains the source files and documentation for the API of the
Coding Garden Community App. For more information about the Community App
please visit the [App Wiki](https://github.com/CodingGardenCommunity/app-wiki/wiki).

## Running the API locally

> **NOTE:** If you find yourself in some trouble going through this, reach out to us directly on our [Discord server](https://discord.gg/bPBuk3N).

### Prerequisites

1. **NodeJS:** <br>
   Please install [NodeJS >= 10.15.0](https://nodejs.org/en/download/). If you already have it, you're good to go.

1. **Yarn:** <br>
   Visit [Yarn download page](https://yarnpkg.com/en/docs/install). Select your Operating system and follow the instructions. It's as easy as eating a 🍰.

1. **EditorConfig:** <br>
   Please visit [EditorConfig](https://editorconfig.org/) -> `Download a Plugin` section and scroll through to see if you need to install an additional Plugin/Extension for your code editor or IDE. If your IDE needs one, you should be able to find a link to that plugin/extension on that page.

   This prerequisite is directly related to: [`.editorconfig`](https://github.com/CodingGardenCommunity/app-backend/blob/develop/.editorconfig) in the root directory of this project.

   **_More About EditorConfig:_** <br>
   EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

---

Once you have the [Prerequisites](#prerequisites) covered:

1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository from GitHub onto your local computer.

   ```sh
   $ git clone https://github.com/CodingGardenCommunity/app-backend.git
   ```

1. Navigate into the project folder and install all of its necessary dependencies with Yarn.

   ```sh
   $ cd app-backend
   $ yarn install
   ```

1. Install MongoDB and make sure it's running

   - For Mac OSX with [homebrew](http://brew.sh/): `brew install mongodb` then `brew services start mongodb`
   - For Windows and Linux: [MongoDB Installation](https://docs.mongodb.com/manual/installation/)

1. Make a copy of `.env.sample` and rename it to `.env`. You can do so with this simple command:

   > **NOTE:** If you are using Windows Command Prompt, you need to use `copy` instead of `cp`. <br>

   ```sh
   $ cp .env.sample .env
   ```

   You don't need to change any values in `.env` file. The default values work well for development purposes.

1. Once you have MongoDB and `.env` file ready, seed the local database by running:

   ```sh
   $ yarn run seed
   ```

1. To make sure everything is setup properly, run tests.

   ```sh
   $ yarn run test
   ```

   If all tests pass, we can safely conclude that setup is complete and its working as expected. 🙌 Wooh!! <br>
   If not, don't worry. We are together on this mission!! Reach out to us on our [Discord server](https://discord.gg/bPBuk3N).

1. Once that's done, tap your back. You are ready to start contributing 😃 <br>
   You can run -

   ```sh
   $ yarn run dev
   ```

   to start the server.

You can now visit <http://localhost:3000/> to view the APIs.

Further, checkout [package.json](https://github.com/CodingGardenCommunity/app-backend/blob/develop/package.json) file to learn about (more) available scripts/commands.

Happy coding! 🥂

## Dependencies used

- **express**: Web application framework designed for building web applications and APIs. [Official website](https://expressjs.com/).
- **mongoose**: Schema based object modeling for mongoDB. [Official website](https://mongoosejs.com/).
- **joi**: Object schema validation library. [Github repository](https://github.com/hapijs/joi).
- **cors**: Express middleware to enable CORS functionalities. [Github repository](https://github.com/expressjs/cors). 
- **dotenv**: For setting environment variables. [Github repository](https://github.com/motdotla/dotenv). 
- **swagger-ui-express**: Auto-generated API docs, based on a swagger.json file. [Github repository](https://github.com/scottie1984/swagger-ui-express). 
- **eslint**: Code linter. Analyses the code for potential errors. [Official website](https://eslint.org/). 
  - This project uses eslint in conjunction with another dependency called "eslint-config-airbnb" for implementing the [airbnb set of rules](https://github.com/airbnb/javascript) for clean javascript.  
- **jest**: For testing. [Official website](https://jestjs.io/). 
