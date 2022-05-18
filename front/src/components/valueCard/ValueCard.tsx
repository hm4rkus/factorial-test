import { useMemo } from 'react'

// Components
import { TitledCard } from 'components'

// Constants
import { DEFAULT_TITLE_SIZE } from './valueCard.constants'

// Styles
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
    <TitledCard title={title} size={DEFAULT_TITLE_SIZE}>
      <Value>{`${formattedValue} ${unit}`}</Value>
    </TitledCard>
  )
}
