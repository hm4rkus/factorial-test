import { Column } from 'react-table'

export interface AdditionalColumnProps {
  formatter?: (a: unknown) => string
}

export type CustomColumnProps = AdditionalColumnProps & Column
