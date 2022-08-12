import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import VueMixin from './mixins/VueMixin';
import i18n from './locales'
import stream from './http';
import urls from './http/urls';
import './style/common.less'

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mixin(VueMixin);
app.config.globalProperties.$http = stream;
app.config.globalProperties.$urls = urls;
app.mount('#app');
