import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { transition: 'slide-top' },
  },
  {
    path: '/case-studies/:id',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudies.vue'),
    meta: { transition: 'slide-top' },

  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue'),
    meta: { transition: 'slide-top' },
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
  },
  {
    path: '/projects',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { transition: 'slide-bottom' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app) {
  app.use(router);
}

export default router;