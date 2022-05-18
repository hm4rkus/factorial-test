// Components
import { Route, Routes } from 'react-router-dom'
import { Page } from 'components'

// Constants
import { ROUTES } from 'constants/routes'

export const Router = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element: Element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Page>
              <Element />
            </Page>
          }
        />
      ))}
    </Routes>
  )
}
