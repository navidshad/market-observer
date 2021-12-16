import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import bootstrap from './plugins/bootstrap'
import socketio from './plugins/socketio';
import components from './components/components'

import './assets/tailwind.css';
import './assets/style.scss';


const app = createApp(App);

app
	.use(store)
	.use(router)
	.use(socketio)
	.use(bootstrap)
	.use(components)
	.mount('#app')
