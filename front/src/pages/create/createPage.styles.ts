import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Form = styled.form`
  margin-top: var(--size-large);

  & > * {
    margin-bottom: var(--size-medium);
  }
`

export const CustomButton = styled(Button)`
  margin-top: var(--size-large);
`
