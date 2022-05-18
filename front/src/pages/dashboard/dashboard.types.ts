import { DataPoint } from 'types/DataPoint'

export interface TableData {
  name: string
  value: string
  date: string
}

export interface AddResponse {
  success: boolean
}

export type TableDataAccessor = keyof TableData

export type DataPointAccessor = keyof DataPoint

export type ExtraInfoAccessor = 'dayAverage' | 'hourAverage' | 'minuteAverage'

export interface ExtraInfoCard {
  accessor: ExtraInfoAccessor
  title: string
  unit: string
}
