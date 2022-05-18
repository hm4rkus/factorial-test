import React from 'react'

// Components
import { Router } from 'components'

// Providers
import { Providers } from 'components/providers'

// Styles
import { GlobalStyle } from 'GlobalStyle'

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Router />
    </Providers>
  )
}

export default App
