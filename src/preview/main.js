import './app.scss';
import App from '@/preview/App.vue';
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
