import { DataPoint } from './dashboard.types'

const mockedData: DataPoint[] = []

for (let i = 0; i < 100; i++) {
  mockedData.push({
    value: Math.random() * 1000000,
    timestamp: new Date().getTime() - i * 24 * 60 * 60 * 1000 * 2,
    name: `Data ${i + 1}`,
  })
}

export const fetchData = async (): Promise<DataPoint[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData)
    }, 1000)
  })
}
