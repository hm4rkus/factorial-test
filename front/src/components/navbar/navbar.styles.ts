import styled from '@emotion/styled'
import { Heading } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

export const NavbarContainer = styled.div`
  height: var(--navbar-height);
  border-bottom: var(--navbar-border);
  display: flex;
  align-items: center;
`

export const Logo = styled(Heading)`
  margin-left: var(--size-medium);
  color: var(--primary);
`

export const NavigationLink = styled(NavLink)`
  margin-left: var(--size-medium);
  font-size: var(--font-medium);

  &.active {
    color: var(--primary);
  }
`

export const Navigation = styled.nav`
  margin-left: var(--size-large);
`
