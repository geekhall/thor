import { createApp } from 'vue'
import Vue from 'vue'

/** 重置样式 这里引入自定义的重置样式也可 */
// import '@unocss/reset/tailwind.css' // 这里放开会导致式样错乱，暂时不知道为什么

// 引入normalize.css
import 'normalize.css/normalize.css'

/**
 *  项目内的样式，
 *  注意：最好放在重置样式后，uno.css前
 */
import './style.css'
import './tailwind.css'

// 引入uno.css
import 'uno.css'

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// import section
// 引入的各种第三方模块，如Element Plus、Vue Router、Pinia等
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

// 引入路由
import router, { setupRouter } from './router'

// 全局引入Element Plus（本工程使用按需引入，这里注释掉）
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 引入Pinia
import store from './store'
import { createPinia } from 'pinia'


// import App from './App.vue'

// 引入vue-i18n，用于国际化
import { createI18n } from 'vue-i18n'
import messages from "@intlify/unplugin-vue-i18n/messages";

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// createApp
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

import App from './App.vue'

const app = createApp(App)

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// setting
// 各种第三方模块的设置，如Element Plus、Vue Router、Vuex等
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/


// 设置Vue-router路由
setupRouter(app)

// 设置Element Plus（本工程使用按需引入，这里注释掉）
// app.use(ElementPlus)

// 设置Pinia
const pinia = createPinia()
app.use(pinia)

// 设置vue-i18n
const i18n = createI18n({
  legacy: false,  // you must specify `false`, to use Composition API, enables the Composition API.
  globalInjection: true,  // allows you to use `this.$i18n` and `this.$t` in each component
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  availableLocales: ["en", "cn"], // set locale messages
  messages: messages, // set locale messages
});
app.use(i18n)

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
// mount
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
router.isReady().then(() => {
  app.mount('#app')
})
