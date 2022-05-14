export const numberFormatter = Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
  notation: 'compact',
}).format
