import {lazy} from 'solid-js'
import type {RouteDefinition} from 'solid-app-router'

export const routes: RouteDefinition[] = [
  {
    children: [
      {component: lazy(() => import('pages/Main')), path: ''},
      {component: lazy(() => import('pages/Sign')), path: 'sign'},
    ],
    component: lazy(() => import('layouts/main-layout/Index')),
    path: '/',
  },
]
