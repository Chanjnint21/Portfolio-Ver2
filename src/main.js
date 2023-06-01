import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import ImageSolo from './components/ImageSolo.vue'
import MainTitle from './components/MainTitle.vue'
import './assets/main.css'

Vue.component('ImageSolo', ImageSolo)
Vue.component('MainTitle', MainTitle)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


