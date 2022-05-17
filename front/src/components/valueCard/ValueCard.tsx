import { TitledCard } from 'components/titledCard/TitledCard'
import { useMemo } from 'react'
import { Value } from './valueCard.styles'

interface ValueCardProps<T> {
  title: string
  unit: string
  value: T
  formatter?: (value: T) => string
}
export const ValueCard = <T,>({
  title,
  unit,
  value,
  formatter,
}: ValueCardProps<T>) => {
  const formattedValue = useMemo(
    () => (formatter ? formatter(value) : value),
    [formatter, value]
  )

  return (
    <TitledCard title={title} size='sm'>
      <Value>{`${formattedValue} ${unit}`}</Value>
    </TitledCard>
  )
}
