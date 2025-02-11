import './assets/main.css'

// import { createPinia } from 'pinia'
import { registerPlugins } from './plugins'
// Components
import App from '@/App.vue'
// import { App } from "vue";
// import App from './router/routere'
// import router from './router/router'
import 'mdb-vue-ui-kit/css/mdb.min.css'

import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './scss/custom/custom.scss'
// import BaseGreeting from '@/components/';
// import BaseSpinner from './components/ui/BaseSpinner.vue';
const app = createApp(App)

registerPlugins(app)

app.mount('#app')
