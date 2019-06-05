import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/ts',
      name: 'ts',
      component: () => import('@/views/tsvue/index.vue')
    }
  ]
})

const chensy = {
  name: 'chensy',
  age: 60
}

promiseFunc_1(chensy)
  .then(res => promiseFunc_2(res))
  .then(() => console.log(''))
