import styled from '@emotion/styled'
import { Card } from 'components'

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
`
export const CardColumn = styled.div`
  & > * {
    &:not(:first-of-type) {
      margin-top: var(--size-large);
    }
  }
`

export const LineChartContainer = styled.div``

export const TableContainer = styled(Card)`
  max-height: 400px;
  overflow: auto;
  padding: var(--size-small);
`
