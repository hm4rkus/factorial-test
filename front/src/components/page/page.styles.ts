import styled from '@emotion/styled'

// Component
import { Heading } from 'components'

export const PageHeading = styled(Heading)``

export const PageFrame = styled.div`
  height: calc(100vh - var(--navbar-height));
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: var(--background);
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--size-large);
`
