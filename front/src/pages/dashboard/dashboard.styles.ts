import styled from '@emotion/styled'

export const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
`

export const NoData = styled.div`
  font-weight: var(--font-weight-medium);
  color: var(--info);
`

export const CardColumn = styled.div`
  & > * {
    &:not(:first-of-type) {
      margin-top: var(--size-medium);
    }

    &:last-of-type {
      margin-bottom: var(--size-medium);
    }
  }
`

export const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--size-medium);
`

export const TableContainer = styled.div`
  max-height: 400px;
  overflow: auto;
`

export const LineChartContainer = styled.div`
  height: 400px;
`

export const AverageRow = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }

  & > * {
    &:not(:last-of-type) {
      margin-right: var(--size-medium);
    }
    width: 100%;

    @media (max-width: 500px) {
      margin-right: 0px !important;

      &:not(:first-of-type) {
        margin-top: var(--size-medium);
      }
    }
  }
`
