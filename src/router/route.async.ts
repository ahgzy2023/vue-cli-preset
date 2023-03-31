// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    meta: {
      title: '',
      icon: '',
    },
    redirect: 'home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/allData',
        name: 'allData',
        meta: {
          title: 'allData',
          icon: '',
        },
        component: () => import('@/views/allDatas/index.vue'),
      },
      {
        path: '/MyData',
        name: 'MyData',
        meta: {
          title: 'MyData',
          icon: '',
        },
        component: () => import('@/views/myDatas/index.vue'),
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test')
      }
    ],
  },
];

export default asyncRoutes;
