import Vue from 'vue'
import App from './App.vue'
import bright from '../lib/bright-ui.umd'

Vue.use(bright, {
  author: 'rain'
})

console.log('bright', bright)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
