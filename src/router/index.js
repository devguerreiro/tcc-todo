import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/tasks',
    name: 'Tasks',
    // route level code-splitting
    // this generates a separate chunk (tasks.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tasks" */ '@/views/Tasks.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.afterEach((to) => {
  document.title = to.meta.title || 'ToDo List';
});

export default router;
