# Custom Translation Module

A [Core Module](../README.md) submodule with a crucial use case. 
It provides an own [Initializer](./custom-translation.initializer.ts), so when this module is injected the app only renders after the translation is loaded.

For cases like this, it recommended to create a submodule.