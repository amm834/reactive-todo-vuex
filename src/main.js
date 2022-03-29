import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
// main scss
import './main.scss'

// bootstrap
import 'bootstrap'

createApp(App)
    .use(store)
    .mount('#app')
