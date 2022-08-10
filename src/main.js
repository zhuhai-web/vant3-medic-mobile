import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import VueMixin from './mixins/VueMixin';
import i18n from './locales'

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mixin(VueMixin);
app.mount('#app');
