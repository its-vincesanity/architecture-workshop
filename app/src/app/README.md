# App Module

This Module contains:
- [Core Module](./core/README.md)
- [Navigation Module](./navigation/README.md)
- [Feature Modules](#app-routing)
- [Global App Routing](#app-routing)

# App Config
To load json configs at compile time set `"resolveJsonModule": true,` in the [tsconfig.json](../../tsconfig.json). To enable runtime config use a config service.

[See an example](./app.config.ts)

# Feature Modules
These modules contains use case or feature specific code.
See: 
    - ...

# App Routing
The App Module injects not only the Feature Modules it also global App Routing.

[See an example](./app.app.routes.ts)