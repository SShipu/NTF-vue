import { createRouter, createWebHistory } from 'vue-router';

const home = () => import('../pages/Index.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // Additional routes can be added here
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
