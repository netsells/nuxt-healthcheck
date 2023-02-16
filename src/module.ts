import { fileURLToPath } from 'url';
import { defineNuxtModule, createResolver, addServerHandler } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@netsells/nuxt-healthcheck',
    configKey: 'healthcheck'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    addServerHandler({
      route: '/healthcheck',
      handler: resolve(runtimeDir, 'server/routes/healthcheck')
    });
  }
})
