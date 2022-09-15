import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    children: [
      {
        component: () => import('pages/Main'),
        path: '',
      },
      {
        component: () => import('pages/Sign'),
        path: 'sign',
      },
    ],
    component: () => import('layouts/main-layout/Index'),
    path: '/',
  },
]

export const createRouter = () => {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
}
