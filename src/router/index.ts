import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

// 1. Define route components.
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const AxiosSample = () => import('../views/AxiosSample.vue')
const VueUseSample = () => import('../views/VueUseSample.vue')
const I18nSample = () => import('../views/I18nSample.vue')
const TailwindSample = () => import('../views/TailwindSample.vue')
const UnoCssSample = () => import('../views/UnoCssSample.vue')
const IconSample = () => import('../views/IconSample.vue')


// 2. Define some routes
const routes = [
  { path: '/', name: "home", component: Home },
  { path: '/about', name: "about", component: About },
  { path: '/axios', name: "axiosSample", component: AxiosSample },
  { path: '/vueuse', name: "vueuseSample", component: VueUseSample },
  { path: '/i18n', name: "i18nSample", component: I18nSample },
  { path: '/tailwind', name: "tailwindSample", component: TailwindSample },
  { path: '/uno', name: "unoCssSample", component: UnoCssSample },
  { path: '/icon', name: "iconSample", component: IconSample },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // createWebHashHistory // (hash路由)
  // createWebHistory // (history路由)
  // createMemoryHistory // (内存路由)
  // 添加baseUrl， createWebHistory({ base: '/base/' })
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
