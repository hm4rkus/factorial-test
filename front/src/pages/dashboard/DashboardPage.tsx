import React, { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'

// Constants
import {
  LINECHART_ACCESSORS,
  TABLE_COLUMNS,
  UNKNOWN_ERROR,
} from './dashboard.constants'

// Styles
import { DataPoint } from './dashboard.types'

// Services
import { fetchData } from './dashboard.services'
import {
  CardColumn,
  LineChartContainer,
  LoadingSpinnerContainer,
  TableContainer,
} from './dashboard.styles'
import { Table } from 'components/table/Table'
import { Card, Heading } from 'components'
import { LineChart } from 'components/linechart/Linechart'

export const DashboardPage = (): React.ReactElement => {
  const [data, setData] = useState<DataPoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData()
        setData(fetchedData)
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setError(UNKNOWN_ERROR)
        console.error(e)
      }
    }

    getData()
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerContainer>
          <Spinner />
        </LoadingSpinnerContainer>
      ) : (
        <CardColumn>
          <Card>
            <Heading size={'lg'}>Data Over Time</Heading>
            <LineChartContainer>
              <LineChart
                data={data}
                xAccessor={LINECHART_ACCESSORS.x}
                yAccessor={LINECHART_ACCESSORS.y}
                labelAccessor={LINECHART_ACCESSORS.label}
              />
            </LineChartContainer>
          </Card>
          <Card>
            <Heading size={'lg'}>Table</Heading>
            <TableContainer>
              {/*TODO: Data Formatters */}
              <Table columns={TABLE_COLUMNS} data={data} />
            </TableContainer>
          </Card>
        </CardColumn>
      )}
    </>
  )
}
