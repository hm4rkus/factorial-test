export const sum = (values: number[]): number => {
  return values.reduce((previous: number, current: number) => {
    return previous + current
  })
}
