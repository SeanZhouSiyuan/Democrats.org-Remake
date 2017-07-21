import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index.vue'
import ourParty from '@/pages/our-party/index.vue'
import press from '@/pages/press/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about/our-party',
      name: 'ourParty',
      component: ourParty
    },
    {
      path: '/more/press',
      name: 'press',
      component: press
    }
  ]
})
