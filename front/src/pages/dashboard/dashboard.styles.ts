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

export const TableContainer = styled.div`
  max-height: 400px;
  overflow: auto;
`

export const AverageRow = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }

  & > * {
    &:not(:last-of-type) {
      margin-right: var(--size-large);
    }
    width: 100%;

    @media (max-width: 500px) {
      margin-right: 0px !important;

      &:not(:first-of-type) {
        margin-top: var(--size-large);
      }
    }
  }
`
