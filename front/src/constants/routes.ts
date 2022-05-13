import React from 'react'

// Pages
import { CreatePage, DashboardPage } from 'pages'

export enum Paths {
  DASHBOARD = '/',
  ADD = '/add',
}

interface Route {
  path: Paths
  element: () => React.ReactElement
  heading?: string
}

export const ROUTES: Route[] = [
  { path: Paths.DASHBOARD, element: DashboardPage, heading: 'Dashboard' },
  { path: Paths.ADD, element: CreatePage, heading: 'Add Data' },
]
