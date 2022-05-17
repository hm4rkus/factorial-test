import React, { useEffect, useMemo, useState } from 'react'
import { Spinner } from '@chakra-ui/react'

// Constants
import {
  EXTRA_INFO_CARDS,
  LINECHART_ACCESSORS,
  TABLE_COLUMNS,
  UNKNOWN_ERROR,
} from './dashboard.constants'

// Types
import { DataPoint } from 'types/DataPoint'
import { TableData } from './dashboard.types'

// Services
import { fetchData } from './dashboard.services'
import {
  AverageRow,
  CardColumn,
  LineChartContainer,
  LoadingSpinnerContainer,
  TableContainer,
} from './dashboard.styles'
import { Table } from 'components/table/Table'
import { ValueCard } from 'components'
import { LineChart } from 'components/linechart/Linechart'
import { getDayAverage } from './dashboard.utils'
import { TitledCard } from 'components/titledCard/TitledCard'
import { dateFormatter, numberFormatter } from 'utils'

export const DashboardPage = (): React.ReactElement => {
  const [data, setData] = useState<DataPoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData()

        // Create Date Instances and add data to the state.
        setData(
          fetchedData.map((dataPoint) => ({
            ...dataPoint,
            timestamp: new Date(dataPoint.timestamp).getTime(),
          }))
        )
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setError(UNKNOWN_ERROR)
        console.error(e)
      }
    }

    getData()
  }, [])

  const averages = useMemo(() => {
    if (data.length) {
      const dayAverage = getDayAverage(data)

      return {
        dayAverage,
        hourAverage: dayAverage / 24,
        minuteAverage: dayAverage / 24 / 60,
      }
    }
    return { dayAverage: 0, hourAverage: 0, minuteAverage: 0 }
  }, [data])

  const formattedData: TableData[] = useMemo(() => {
    return data.map((dataElement) => ({
      ...dataElement,
      date: dateFormatter(dataElement.timestamp, true),
      value: numberFormatter(dataElement.value),
    }))
  }, [data])

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerContainer>
          <Spinner />
        </LoadingSpinnerContainer>
      ) : (
        <CardColumn>
          <TitledCard title={'Data Over Time'}>
            <LineChartContainer>
              <LineChart
                data={data}
                xAccessor={LINECHART_ACCESSORS.x}
                yAccessor={LINECHART_ACCESSORS.y}
                labelAccessor={LINECHART_ACCESSORS.label}
              />
            </LineChartContainer>
          </TitledCard>
          <AverageRow>
            {EXTRA_INFO_CARDS.map(({ title, accessor, unit }) => (
              <ValueCard
                key={title}
                title={title}
                unit={unit}
                value={averages[accessor]}
                formatter={numberFormatter}
              />
            ))}
          </AverageRow>
          <TitledCard title={'Data Table'}>
            <TableContainer>
              <Table columns={TABLE_COLUMNS} data={formattedData} />
            </TableContainer>
          </TitledCard>
        </CardColumn>
      )}
    </>
  )
}
