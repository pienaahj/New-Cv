/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// import App from './App.vue'
// Plugins
// import vuetify from './vuetify'
import  router  from '../router/router';
import { pinia } from '../pinia';
// import { createConnectTransport } from "@connectrpc/connect-web";
// import { transportWavKey, transportCDRKey } from "../keys";
// Types
import type { App } from 'vue'

// const transport = createConnectTransport({
//   baseUrl: 'http://192.168.101.254:50051/api',
//   // httpVersion: "2",
// });
// const transport = createConnectTransport({
//   baseUrl: 'http://localhost:50051/api',
//   // httpVersion: "2",
// });
export function registerPlugins (app: App) {
  app
    .use(router)
    .use(pinia)
}