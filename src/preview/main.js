import Vue from 'vue'

import App from '@/preview/App.vue'
import vuetify from '@/plugins/vuetify'
import './app.scss';

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount("#app")
