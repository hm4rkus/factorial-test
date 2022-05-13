import React, { useEffect, useState } from 'react'
import { Container, Spinner } from '@chakra-ui/react'

// Constants
import { UNKNOWN_ERROR } from './dashboard.constants'

// Styles
import { DataPoint } from './dashboard.types'

// Services
import { fetchData } from './dashboard.services'
import { LoadingSpinnerContainer } from './dashboard.styles'

export const DashboardPage = (): React.ReactElement => {
  const [data, setData] = useState<DataPoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData()
        setData(fetchedData)
        // setIsLoading(false)
      } catch (e) {
        setIsLoading(false)
        setError(UNKNOWN_ERROR)
        console.error(e)
      }
    }

    getData()
  }, [])

  return (
    <>
      {isLoading && (
        <LoadingSpinnerContainer>
          <Spinner />
        </LoadingSpinnerContainer>
      )}
    </>
  )
}
