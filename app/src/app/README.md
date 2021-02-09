# App Module

This Module contains:
- [Core Module](./core)
- [Navigation Module](./navigation)
- [Feature Modules](./features)
- [Global App Routing](#app-routing)


# App Config
To load json configs at compile time set `"resolveJsonModule": true,` in the [tsconfig.json](../../tsconfig.json). To enable runtime config use a config service.

[See an example](./app.config.ts)

# App Routing
The App Module injects not only the Feature Modules it also global App Routing.

[See an example](./app.routes.ts)