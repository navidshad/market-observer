import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import bootstrap from './plugins/bootstrap'
import components from './components/components'

import './assets/tailwind.css';
import './plugins/socketio';


const app = createApp(App);

app
	.use(store)
	.use(router)
	.use(bootstrap)
	.use(components)
	.mount('#app')
