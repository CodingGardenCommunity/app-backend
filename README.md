[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub package.json version](https://img.shields.io/github/package-json/v/CodingGardenCommunity/app-backend.svg) ![Travis (.org) branch](https://img.shields.io/travis/CodingGardenCommunity/app-backend/develop.svg) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/CodingGardenCommunity/app-backend.svg) ![GitHub contributors](https://img.shields.io/github/contributors/CodingGardenCommunity/app-backend.svg) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/CodingGardenCommunity/app-backend.svg)

# Coding Garden Community App API

This repository contains the source files and documentation for the API of the
Coding Garden Community App. For general information about the Community App
please visit the [App Wiki](https://github.com/CodingGardenCommunity/app-wiki/wiki).

## Running the API locally

There are multiple ways to run the API locally:

- [Via Yarn](#via-yarn)
- [Via Docker](#via-docker)

### Prerequisites

Got to [EditorConfig](https://editorconfig.org/#download) and see if you need to install a Plugin/Extension for your editor.

In the future the API will need access to a MongoDB database.

### Via Yarn

We use the yarn package manager to run this project. If you haven't already please set up [NodeJS >= 10.15.0](https://nodejs.org/en/download/) and [yarn >=
1.13.0](https://yarnpkg.com/en/docs/install).

After setting up both tools you can install all dependencies by cloning this
project and running `yarn install` in the local project's root directory.
Starting the API can then be done by issuing this command: `yarn run dev`. You
can now visit <http://localhost:3000/> to view the API.

### Via Docker

TBD

### Setup

Copy the `.env.sample` file and update accordingly:

```sh
cp .env.sample .env
```
