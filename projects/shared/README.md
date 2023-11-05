# Shared

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name --project shared` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project shared`.
> Note: Don't forget to add `--project shared` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build shared` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build shared`, go to the dist folder `cd dist/shared` and run `npm publish`.

## Running unit tests

Run `ng test shared` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Working with the library

In the current setup it is part of the monorepo, but just as easily it can be a separated repo, with the lib being published to npm.
### Local development for shared lib
-   Run **yarn build:shared-watch** go to `dist/shared` and run **yarn link**
-   Go to Your target project and run **yarn link shared-lib** see in `node_modules` `shared`
    linked (changes made inside `libs/shared` will automatically rebuild projects)
-   Run **yarn build:shared:prod** to ensure everything works correctly

