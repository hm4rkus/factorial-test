import axios from 'axios'

// Types
import { DataPoint } from 'types/DataPoint'

const getEndpoint = process.env.REACT_APP_BACKEND + '/data'
const addEndpoint = process.env.REACT_APP_BACKEND + '/add'

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
