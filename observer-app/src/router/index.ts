import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/UpdateAllCoins.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coin-groups',
    name: 'coin groups',
    component: () => import('../views/CoinGroup.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
