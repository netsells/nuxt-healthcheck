# @netsells/nuxt-healthcheck

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Nuxt module to provide a healthcheck path

## Features

Inspired by the nuxt 2 module by [fukuiretu](https://github.com/fukuiretu/nuxt-healthcheck), this module provides a `/healthcheck` url to respond to health check requests. 

## Quick Setup

1. Add `@netsells/nuxt-healthcheck` dependency to your project

```bash
# Using pnpm
pnpm add -D @netsells/nuxt-healthcheck

# Using yarn
yarn add --dev @netsells/nuxt-healthcheck

# Using npm
npm install --save-dev @netsells/nuxt-healthcheck
```

2. Add `@netsells/nuxt-healthcheck` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@netsells/nuxt-healthcheck'
  ]
})
```

That's it! You can now use @netsells/nuxt-healthcheck in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@netsells/nuxt-healthcheck/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@netsells/nuxt-healthcheck

[npm-downloads-src]: https://img.shields.io/npm/dm/@netsells/nuxt-healthcheck.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@netsells/nuxt-healthcheck

[license-src]: https://img.shields.io/npm/l/@netsells/nuxt-healthcheck.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@netsells/nuxt-healthcheck
