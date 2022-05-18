import { UseToastOptions } from '@chakra-ui/react'
import { HeadingSize } from 'types'
import {
  DataPointAccessor,
  ExtraInfoCard,
  TableDataAccessor,
} from './dashboard.types'

// Toasts
export const SUCCESS_TOAST: UseToastOptions = {
  title: 'Data added',
  description: 'Your data has been added!',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const ERROR_FECHING_TOAST: UseToastOptions = {
  title: 'Data fetch error.',
  description: 'Your data could not be fetched, please, try again later.',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const ERROR_POSTING_TOAST: UseToastOptions = {
  title: 'Data adding error.',
  description:
    'There was an error while adding your data, please, try again later.',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

// No data
export const NO_DATA =
  'You still have not added any Data Points, add data using the button above!'

// Headings
export const HEADING_SIZE: HeadingSize = 'lg'
export const LINECHART_CARD_TITLE = 'Data Over Time'
export const TABLE_CARD_TITLE = 'Data Table'

// Table
export const TABLE_COLUMNS: { Header: string; accessor: TableDataAccessor }[] =
  [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Value',
      accessor: 'value',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
  ]

// Line Chart
export const LINECHART_ACCESSORS: Record<
  'x' | 'y' | 'label',
  DataPointAccessor
> = {
  x: 'timestamp',
  y: 'value',
  label: 'name',
}

export const EXTRA_INFO_CARDS: ExtraInfoCard[] = [
  { accessor: 'dayAverage', title: 'Average Per Day', unit: 'per day' },
  { accessor: 'hourAverage', title: 'Average Per Hour', unit: 'per hour' },
  {
    accessor: 'minuteAverage',
    title: 'Average Per Minute',
    unit: 'per minute',
  },
]
