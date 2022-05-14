import styled from '@emotion/styled'
import { Card } from 'components/card'

// TODO: Colors.
export const TooltipContainer = styled(Card)`
  background: white;
  padding: var(--size-small);
`

export const Name = styled.div`
  font-weight: var(--font-weight-bold);
`

export const Value = styled.div`
  color: var(--primary);
`
