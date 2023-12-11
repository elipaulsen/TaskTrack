import { createRouter, createWebHistory } from 'vue-router';
import Day from './views/Day.vue';
import Week from './views/Week.vue';

const routes = [
  { path: '/', component: Day },
  { path: '/Day', component: Day },
  { path: '/Week', component: Week },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
