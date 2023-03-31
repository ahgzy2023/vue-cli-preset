// 跟鉴权无关的特殊路由
import { RouteRecordRaw } from 'vue-router'
import { routeEnum } from '@/enums/sysEnums'

const exceptionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: routeEnum.ERROR_PAGE_NAME_401,
    meta: {
      title: '需要登录',
    },
    component: () => import('@/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: routeEnum.ERROR_PAGE_NAME_404,
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    component: () => import('@/views/exception/404.vue'),
  },
  // {
  //   path: '/:path(.*)*',
  //   name: 'ErrorPage',
  //   meta: {},
  //   redirect: '/404',
  // },
]

export default exceptionRoutes
