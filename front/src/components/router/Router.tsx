import { Route, Routes } from 'react-router-dom'

// Constants
import { ROUTES } from 'constants/routes'
import { Page } from 'components/page/Page'

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
