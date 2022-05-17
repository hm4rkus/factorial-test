export const dateFormatter = (date: number | Date, isLong?: boolean) =>
  Intl.DateTimeFormat(undefined, {
    dateStyle: isLong ? 'medium' : 'short',
    timeStyle: isLong ? 'short' : undefined,
  }).format(date)
