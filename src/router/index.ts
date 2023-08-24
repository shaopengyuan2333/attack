import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GGBoom from "../views/GGBoom.vue"
import TestlistView from "../views/attack/TestlistView.vue"
import AttaView from "../views/attack/AttaView.vue"
import AddattackView from "../views/attack/AddattackView.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/GGBoom",
    name: 'GGBoom',
    component: GGBoom
  },
  {
    path: "/atta",
    name: 'atta',
    component: AttaView
  },
  {
    path: "/attalist",
    name: 'attalist',
    component: TestlistView
  },
  {
    path: "/add",
    name: 'add',
    component: AddattackView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
