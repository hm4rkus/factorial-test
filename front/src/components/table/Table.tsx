import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Column, useTable } from 'react-table'

interface TableProps<T> {
  data: T[]
  columns: Column[]
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  const tableInstance = useTable({ columns: columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <ChakraTable {...getTableProps()} variant='striped'>
      <Thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...props } = headerGroup.getHeaderGroupProps()

          return (
            <Tr key={key} {...props}>
              {headerGroup.headers.map((column) => {
                const { key, ...props } = column.getHeaderProps()
                return (
                  <Th color={"var(--primary)"} key={key} {...props}>
                    {column.render('Header')}
                  </Th>
                )
              })}
            </Tr>
          )
        })}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          const { key, ...props } = row.getRowProps()

          return (
            <Tr key={key} {...props}>
              {row.cells.map((cell) => {
                const { key, ...props } = cell.getCellProps()

                return (
                  <Td key={key} {...props}>
                    {cell.render('Cell')}
                  </Td>
                )
              })}
            </Tr>
          )
        })}
      </Tbody>
    </ChakraTable>
  )
}
