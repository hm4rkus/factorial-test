import React from 'react'

// Constants
import { DEFAULT_NAVBAR_SIZE, LINKS, NAVBAR_LOGO } from './navbar.constants'

// Styles
import {
  Logo,
  NavbarContainer,
  Navigation,
  NavigationLink,
} from './navbar.styles'

export const Navbar = (): React.ReactElement => {
  return (
    <NavbarContainer>
      <Logo size={DEFAULT_NAVBAR_SIZE}>{NAVBAR_LOGO}</Logo>
      <Navigation>
        {LINKS.map(({ name, path }) => (
          <NavigationLink key={path} to={path}>
            {name}
          </NavigationLink>
        ))}
      </Navigation>
    </NavbarContainer>
  )
}
