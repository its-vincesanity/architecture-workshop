# Architecture Workshop Blueprint
This Blueprint should provide an easy overview how to create an enterprise angular architecture. It's highly orientated on [Angular coding style guide](https://angular.io/guide/styleguide) and principles like [LIFT](https://johnpapa.net/angular-app-structuring-guidelines/) that have proven since AngularJS.

# Content
- [Changelog](./CHANGELOG.md)
- [App Module](./app/src/app)
- [Navigation Module](./app/src/app/navigatio)
- [Core Module](./app/src/app/core)
- [Shared Module](./app/src/app/shared)
- [Features](./app/src/app/features)
  - [User Profile (Simple module example)](./app/src/app/features/user-profile)
  - [Cats (Module with submodules example)](./app/src/app/features/cats)

# Run Demo

## Init
```bash
$ npm run init
```

## Run App
```bash
$ npm run app
```

## Run Mock Backend
```bash
$ npm run backend
```

## Set Version
```bash
$ VERSION=1.0.0 npm run set-version
```

