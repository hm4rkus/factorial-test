import axios from 'axios'

// Types
import { DataPoint } from 'types/DataPoint'

const getEndpoint = process.env.REACT_APP_BACKEND + '/data'
const addEndpoint = process.env.REACT_APP_BACKEND + '/add'

const mockedData: DataPoint[] = []

for (let i = 0; i < 100; i++) {
  mockedData.push({
    value: Math.random() * 1000000,
    timestamp: new Date().getTime() - i * 24 * 60 * 60 * 1000 * 2,
    name: `Data ${i + 1}`,
  })
}

export const fetchDataPoints = async (): Promise<DataPoint[]> => {
  return axios.get<DataPoint[]>(getEndpoint).then((response) => response.data)
}

export const postDataPoint = (
  name: string,
  value: number,
  timestamp: number
) => {
  return axios.post(addEndpoint, { name, value, timestamp })
}
