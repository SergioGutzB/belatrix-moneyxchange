# Moneyxchange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Features

- Project created in Angular 7.
- API uses fixer.io
- Styles only with Sass
- Exchange of pipeCurrency created to form a coin.
- ExchangeDirective directive created to validate and format the text entered in the Input with currency format
- ServiceWorker configured to maintain the response of the fixer.io API in the cache for 10 minutes, only works in production.
- Tests created for the excange component and the excahngePipes pipeline.
- An additional logic was created to consume the service every 10 minutes, it is not any type of interval, it is a validation that saves the timestamp of the - last response from the server and validates if 10 minutes have already again to return the call to the server , otherwise, it use the response already saved. - - This only runs when there is some action  on click button. In this way, it prevent to make automatic requests for time intervals.

## Install dependencies.

Run `npm install` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server with static-serve

Run `npm start:prod` for a production server. Navigate to `http://localhost:9080/`. Now ServiceWorker it working.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build Production

Run `npm build:prod` to build the project mode production. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
