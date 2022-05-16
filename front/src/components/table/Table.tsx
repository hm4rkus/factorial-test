import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { Column, useTable } from 'react-table'

interface TableProps<T extends {}> {
  data: T[]
  columns: Column[]
}

export const Table = <T extends {}>({ data, columns }: TableProps<T>) => {
  const tableInstance = useTable({ columns: columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <ChakraTable {...getTableProps()}>
      <Thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <Th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </Th>
                ))
              }
            </Tr>
          ))
        }
      </Thead>
      {/* Apply the table body props */}
      <Tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <Tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <Td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </Td>
                    )
                  })
                }
              </Tr>
            )
          })
        }
      </Tbody>
    </ChakraTable>
  )
}
