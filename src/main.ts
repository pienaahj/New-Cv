import './assets/main.css'

// import { createPinia } from 'pinia'
import { registerPlugins } from './plugins'
// Components
import App from '@/App.vue'
// import { App } from "vue";
// import App from './router/routere'
// import router from './router/router'
// import 'mdb-vue-ui-kit/css/mdb.min.css'

import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mdb-vue-ui-kit/css/mdb.min.css'

/* import the fontawesome core */
/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSkating } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faBars, faSkating)
import './scss/custom/custom.scss'
// import BaseGreeting from '@/components/';
// import BaseSpinner from './components/ui/BaseSpinner.vue';
const app = createApp(App)

registerPlugins(app)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
