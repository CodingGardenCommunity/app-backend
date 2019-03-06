[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/CodingGardenCommunity/app-backend.svg?branch=develop)](https://travis-ci.org/CodingGardenCommunity/app-backend)
# Coding Garden Community App API

This repository contains the source files and documentation for the API of the
Coding Garden Community App. For general information about the Community App
please visit <https://google.com>.

## Running the API locally

There are multiple ways to run the API locally:

- [Via Yarn](#via-yarn)
- [Via Docker](#via-docker)

### Prerequisites

N/A. However in the future the API will need access to a MongoDB database.

### Via Yarn

please set up [NodeJS >= 10.15.0](https://nodejs.org/en/download/) and [yarn >=
1.13.0](https://yarnpkg.com/en/docs/install).

After setting up both tools you can install all dependencies by cloning this
project and running `yarn install` in the local project's root directory.
Starting the API can then be done by issuing this command: `yarn run start`. You
can now visit <http://localhost:3000/> to view the API.

### Via Docker

TBD
