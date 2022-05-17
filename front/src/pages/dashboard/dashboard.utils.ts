// Types
import { DataPoint } from 'types/DataPoint'

// Utils
import { sum } from 'utils'

export const getDayAverage = (data: DataPoint[]) => {
  const classifiedPoints: Record<number, number[]> = {}
  let [minDay, maxDay] = [Infinity, 0]

  // Classify in group according to the chosen period.
  data.forEach((dataPoint) => {
    // Find period group.
    const group = Math.floor(dataPoint.timestamp / (24 * 60 * 60 * 1000))

    // Initialize array.
    if (!classifiedPoints[group]) {
      classifiedPoints[group] = []
    }
    // Add to group.
    classifiedPoints[group].push(dataPoint.value)

    if (group < minDay) {
      minDay = group
    }
    if (group > maxDay) {
      maxDay = group
    }
  })

  // Caluclate average.
  const values = Object.values(classifiedPoints).map((perPeriodValues) => {
    return sum(perPeriodValues)
  })

  return sum(values) / (maxDay - minDay)
}
