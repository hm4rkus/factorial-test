import axios from 'axios'

const endpoint = process.env.REACT_APP_BACKEND + '/add'

export const postDataPoint = (
  name: string,
  value: number,
  timestamp: number
) => {
  return axios.post(endpoint, { name, value, timestamp })
}
