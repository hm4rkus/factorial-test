import React from 'react'

// Pages
import { DashboardPage } from 'pages'

export enum Paths {
  DASHBOARD = '/',
  ADD = '/add',
}

interface Route {
  path: Paths
  element: () => React.ReactElement
}

export const ROUTES: Route[] = [
  { path: Paths.DASHBOARD, element: DashboardPage },
]
