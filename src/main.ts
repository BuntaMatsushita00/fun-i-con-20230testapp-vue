import { createApp } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus)

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { name: 'Home' }, meta: { isPublic: true } },

  {
    path: '/Home',
    component: () => import('../src/views/HomeView.vue'),
    name: 'Home',
    meta: { isPublic: true },
  },
  {
    path: '/Question',
    component: () => import('../src/views/QuestionView.vue'),
    name: 'Question',
    meta: { isPublic: true },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


app.use(router);
app.mount('#app');
