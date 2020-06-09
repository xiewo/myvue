import Vue from 'vue'
import VueRouter from 'vue-router'
import Pos from '../components/page/Pos'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'pos',
    component: Pos
  },
  
]

const router = new VueRouter({
  routes
})

export default router
