import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/layouts/BasicLayout', routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/olist', component: '@/pages/olist/index' },
        { path: '/user', component: '@/pages/user/index' },
        { path: '/cart', component: '@/pages/cart/index' },
        { path: '/login', component: '@/pages/login/index' },
      ],
    },
  ],
  fastRefresh: {},
});
