import {
  DataPointAccessor,
  ExtraInfoCard,
  TableDataAccessor,
} from './dashboard.types'

export const UNKNOWN_ERROR = 'Something went wrong, please try again'

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
