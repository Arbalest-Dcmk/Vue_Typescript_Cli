import Vue from 'vue'
import router from '@/router/index.js'
import App from '@/App.vue'

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use(vm)
