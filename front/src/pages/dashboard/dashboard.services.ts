import { DataPoint } from './dashboard.types'

const mockedData: DataPoint[] = []

for (let i = 0; i < 50; i++) {
  mockedData.push({
    value: (Math.random() - 0.5) * 1000,
    timestamp: new Date(Math.random() * 2000).getTime(),
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
