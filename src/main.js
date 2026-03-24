import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router/index.js'

createApp(App)
    .use(router)
    .mount('#app')