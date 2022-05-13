import styled from '@emotion/styled'

// Component
import { Container, Heading } from '@chakra-ui/react'

export const PageHeading = styled(Heading)`
  margin-top: var(--size-large);
`

export const PageFrame = styled.div`
  height: calc(100vh - var(--navbar-height));
  overflow: auto;
  display: flex;
  flex-direction: column;
`

export const PageContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
`
