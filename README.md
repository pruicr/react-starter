# ReactJS Starter

This is a ReactJS skeleton for getting up and running with ReactJS, using Webpack and Webpack Dev Server.

Babel is used to compile es6 JavaScript and SCSS is compiled into CSS.


## Use locally

To use this skeleton locally, clone this repo and use npm to install the default packages.

```sh
$ git clone https://github.com/pruicr/react-starter.git
$ npm install
```

Running `npm start` starts the Webpack Dev Server on `http://localhost:8080` by default.

The Webpack Dev Server is using the `--hot` flag, which allows for live reloading.

Using `npm run build:prod` will create a `/dist` directory at the root level.

This directory will contain the the index, js, and style files.

The `/dist` directory is deleted and recreated each time this command is ran.
