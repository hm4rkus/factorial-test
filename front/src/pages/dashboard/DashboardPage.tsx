import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Spinner, Heading, useDisclosure } from '@chakra-ui/react'

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
import { fetchDataPoints, postDataPoint } from './dashboard.services'
import {
  AverageRow,
  CardColumn,
  HeadingRow,
  LoadingSpinnerContainer,
  TableContainer,
} from './dashboard.styles'
import { Table } from 'components/table/Table'
import { ValueCard, Button } from 'components'
import { LineChart } from 'components/linechart/Linechart'
import { getDayAverage } from './dashboard.utils'
import { TitledCard } from 'components/titledCard/TitledCard'
import { dateFormatter, numberFormatter } from 'utils'
import { AddDataModal } from './components/addDataModal/AddDataModal'

export const DashboardPage = (): React.ReactElement => {
  const [data, setData] = useState<DataPoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddingPoint, setIsAddingPoint] = useState(false)
  const [error, setError] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await fetchDataPoints()

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
  }, [setData, setIsLoading, setError])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const onAddDataPoint = useCallback(
    async (name: string, value: number, timestamp: number) => {
      try {
        setIsAddingPoint(true)
        await postDataPoint(name, value, timestamp)
        setIsAddingPoint(false)
        fetchData()
        onClose()
        return
      } catch (e) {
        console.error(e)
        setError(UNKNOWN_ERROR)
        setIsAddingPoint(false)
      }
    },
    [onClose, setIsAddingPoint, setError]
  )

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

  if (isLoading) {
    return (
      <LoadingSpinnerContainer>
        <Spinner />
      </LoadingSpinnerContainer>
    )
  }

  return (
    <>
      <AddDataModal
        isAdding={isAddingPoint}
        onAdd={onAddDataPoint}
        onClose={onClose}
        error={error}
        isOpen={isOpen}
      />
      <HeadingRow>
        <Heading size={'lg'}>Dashboard</Heading>
        <Button onClick={onOpen}>Add Data</Button>
      </HeadingRow>
      <CardColumn>
        <TitledCard title={'Data Over Time'}>
          <LineChart
            data={data}
            xAccessor={LINECHART_ACCESSORS.x}
            yAccessor={LINECHART_ACCESSORS.y}
            labelAccessor={LINECHART_ACCESSORS.label}
          />
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
    </>
  )
}
