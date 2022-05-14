import { DataPoint } from './dashboard.types'

export const UNKNOWN_ERROR = 'Something went wrong, please try again'

type DataPointAccessor = keyof DataPoint

export const TABLE_COLUMNS: { Header: string; accessor: DataPointAccessor }[] =
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
      Header: 'Timestamp',
      accessor: 'timestamp',
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
