import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Upload from '../views/Upload.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Upload,
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload,
    },
  ],
})

export default router
