# Moneyxchange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Features

- Proyecto creado en Angular 7.
- API usada fixer.io.
- Estilos unicamente con Sass.
- Pipe exchangeCurreny creado para dar formato tipo moneda USD.
- Directiva exchangeDirective creada para validar y formatar el texto ingresado en los Input con formato moneda USD.
- ServiceWorker configurado para mantener en cache el response del API fixer.io durante 10 minutos, sólo funciona en producción.
- Tests creados para el componente excange y el pipe excahngePipes.
- Se creó una logia adicional para consumir el servicio cada 10 minutos, no es ningún tipo de intervalo, es una validación que guarda el timestamp de la ultima respuesta del servidor y valida si ya han pasado 10 minutos para volver hacer el llamdo al servidor, de lo contrario utiliza el response ya guardado. Esto solo se ejecuta cuando hay alguna acción clik en el boton convertir. De ésta forma priminiendo hacer request automaticos por intervalos de tiempo.
- Para los inputs se creo un componente implementando ControlValueAccessor.

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
