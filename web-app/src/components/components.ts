import { def } from '@vue/shared';
import Button from './material/Button.vue';

const components = {
	Button,
}

export default {
	install(app: any) {

		Object.keys(components).forEach(name => {
			app.component('Base' + name, (components as any)[name]);
		})

	}
}