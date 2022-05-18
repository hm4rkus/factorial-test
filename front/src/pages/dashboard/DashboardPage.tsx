import React, { useCallback, useEffect, useMemo, useState } from 'react'

// Components
import { Spinner, Heading, useDisclosure, useToast } from '@chakra-ui/react'
import { ValueCard, Button, Table, LineChart, TitledCard } from 'components'
import { AddDataModal } from './components'

// Constants
import {
  ERROR_FECHING_TOAST,
  ERROR_POSTING_TOAST,
  EXTRA_INFO_CARDS,
  HEADING_SIZE,
  LINECHART_ACCESSORS,
  LINECHART_CARD_TITLE,
  NO_DATA,
  SUCCESS_TOAST,
  TABLE_CARD_TITLE,
  TABLE_COLUMNS,
} from './dashboard.constants'

// Services
import { fetchDataPoints, postDataPoint } from './dashboard.services'

// Styles
import {
  AverageRow,
  CardColumn,
  HeadingRow,
  LineChartContainer,
  LoadingSpinnerContainer,
  NoData,
  TableContainer,
} from './dashboard.styles'

// Utils
import { dateFormatter, numberFormatter } from 'utils'
import { getDayAverage } from './dashboard.utils'

// Types
import { DataPoint } from 'types'
import { AddResponse, TableData } from './dashboard.types'

export const DashboardPage = (): React.ReactElement => {
  const [data, setData] = useState<DataPoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddingPoint, setIsAddingPoint] = useState(false)

  // Chakra Modal hook.
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Chakra Toast system.
  const addToast = useToast()

  // Fetch data function.
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
      addToast(ERROR_FECHING_TOAST)
      console.error(e)
    }
  }, [setData, setIsLoading])

  // First data fetch.
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // On add data point.
  const onAddDataPoint = useCallback(
    async (
      name: string,
      value: number,
      timestamp: number
    ): Promise<AddResponse> => {
      try {
        setIsAddingPoint(true)
        await postDataPoint(name, value, timestamp)
        addToast(SUCCESS_TOAST)
        setIsAddingPoint(false)
        fetchData()
        onClose()
        return { success: true }
      } catch (e) {
        console.error(e)
        addToast(ERROR_POSTING_TOAST)
        setIsAddingPoint(false)
        return { success: false }
      }
    },
    [onClose, setIsAddingPoint]
  )

  // Calculate averages every time the data changes.
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

  // Format data for the table.
  const formattedData: TableData[] = useMemo(() => {
    return data.map((dataElement) => ({
      ...dataElement,
      date: dateFormatter(dataElement.timestamp, true),
      value: numberFormatter(dataElement.value),
    }))
  }, [data])

  // Render Spinner when loading.
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
        isOpen={isOpen}
      />
      <HeadingRow>
        <Heading size={HEADING_SIZE}>Dashboard</Heading>
        <Button onClick={onOpen}>Add Data</Button>
      </HeadingRow>
      {/** Render no data message when we have no data but are not loading.
       * Else, Render the dashboard.
       **/}
      {data.length === 0 ? (
        <NoData>{NO_DATA}</NoData>
      ) : (
        <CardColumn>
          <TitledCard title={LINECHART_CARD_TITLE}>
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
          <TitledCard title={TABLE_CARD_TITLE}>
            <TableContainer>
              <Table columns={TABLE_COLUMNS} data={formattedData} />
            </TableContainer>
          </TitledCard>
        </CardColumn>
      )}
    </>
  )
}
