import { DataPoint } from './dashboard.types'

const mockedData: DataPoint[] = []

for (let i = 0; i < 1000; i++) {
  mockedData.push({
    value: (Math.random() - 0.5) * 1000,
    timestamp: new Date(Math.random() * 1000).getTime(),
    name: `Data ${i}`,
  })
}

export const fetchData = async (): Promise<DataPoint[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData)
    }, 1000)
  })
}
