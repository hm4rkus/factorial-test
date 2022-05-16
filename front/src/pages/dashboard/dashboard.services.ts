import axios from 'axios'

// Types
import { DataPoint } from 'types/DataPoint'

const endpoint = process.env.REACT_APP_BACKEND + '/data'

const mockedData: DataPoint[] = []

for (let i = 0; i < 100; i++) {
  mockedData.push({
    value: Math.random() * 1000000,
    timestamp: new Date().getTime() - i * 24 * 60 * 60 * 1000 * 2,
    name: `Data ${i + 1}`,
  })
}

export const fetchData = async (): Promise<DataPoint[]> => {
  return axios.get<DataPoint[]>(endpoint).then((response) => response.data)
}
