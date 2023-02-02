import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { usePermissionStore } from '~/store/permission'
import Home from '~/views/Home.vue'

// 1. Define route components.
// const Home = () => import('../views/Home.vue')
const Dashboard = () => import('../views/Dashboard.vue')
const About = () => import('../views/About.vue')
const AxiosSample = () => import('../views/AxiosSample.vue')
const VueUseSample = () => import('../views/VueUseSample.vue')
const I18nSample = () => import('../views/I18nSample.vue')
const TailwindSample = () => import('../views/TailwindSample.vue')
const UnoCssSample = () => import('../views/UnoCssSample.vue')
const IconSample = () => import('../views/IconSample.vue')
const SvgSample = () => import('../views/SvgSample.vue')
const Login = () => import('../views/Login.vue')
const NoPermission = () => import('../views/403.vue')
const Donate = () => import('../views/Donate.vue')

// 2. Define some routes
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/', name: "home", component: Home, children: [
      {
        path: '/dashboard', name: "dashboard",
        meta: { title: '首页', permission: 'dashboard' },
        component: Dashboard
      },
      {
        path: '/about', name: "about",
        meta: { title: '关于', permission: 'about' },
        component: About
      },
      {
        path: '/axios', name: "axiosSample",
        meta: { title: 'axios', permission: 'axios' },
        component: AxiosSample
      },
      {
        path: '/vueuse', name: "vueuseSample",
        meta: { title: 'vueuse', permission: 'vueuse' },
        component: VueUseSample
      },
      {
        path: '/i18n', name: "i18nSample",
        meta: { title: 'i18n', permission: 'i18n' },
        component: I18nSample
      },
      {
        path: '/tailwind', name: "tailwindSample",
        meta: { title: 'tailwind', permission: 'tailwind' },
        component: TailwindSample
      },
      {
        path: '/uno', name: "unoCssSample",
        meta: { title: 'uno', permission: 'uno' },
        component: UnoCssSample
      },
      {
        path: '/icon', name: "iconSample",
        meta: { title: 'icon', permission: 'icon' },
        component: IconSample
      },
      {
        path: '/svg', name: "svgSample",
        meta: { title: 'svg', permission: 'svg' },
        component: SvgSample
      },
      {
        path: '/donate', name: "donate",
        meta: { title: '捐助', permission: 'donate' },
        component: Donate
      },
    ]
  },
  {
    path: '/login', name: "login",
    meta: { title: '登录' },
    component: Login
  },
  {
    path: '/403', name: "403",
    meta: { title: '没有权限' },
    component: NoPermission
  }

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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Thor-System`
  const role = localStorage.getItem('ms_username')
  const permission = usePermissionStore();
  // if (!role && to.path !== '/login') {
  //   next('/login')
  // } else if (to.meta.permission && !permission.key.includes(to.meta.permission)) {
  //   // no permission, redirect to 403 page.
  //   next('/403')
  // } else {
  //   next()
  // }
  next()
})
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
