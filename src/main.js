import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './includes';
import './assets/scss/main.scss';
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
