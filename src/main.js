import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// vue2
// const app = new Vue(options)
// app.$mount("#app");

// vue2使用插件   Vue.use()
// vue3使用插件   app.use

// vue3
// 不存在构造函数

const app = createApp(App);     // 返回一个vue实例对象，提供经常会用到的方法
app.mount("#app");    // 挂载到某一个元素里
// console.log(app);
