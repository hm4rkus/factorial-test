// Styles
import { Date, Name, TooltipContainer, Value } from './customTooltip.styles'

// Utils
import { numberFormatter, dateFormatter } from 'utils'

interface CustomTooltipProps {
  labelAccessor?: string
  dateAccessor?: string
  active?: boolean
  payload?: any
}
// I try to never use "any" but the types of the charts library are not very good.

export const CustomTooltip = ({
  active,
  payload,
  labelAccessor,
  dateAccessor,
}: CustomTooltipProps) => {
  const dataPoint = payload.length && payload[0]?.payload

  return active && dataPoint ? (
    <TooltipContainer>
      {labelAccessor && <Name>{dataPoint[labelAccessor]}</Name>}
      {dateAccessor && (
        <Date>{dateFormatter(dataPoint[dateAccessor], true)}</Date>
      )}
      <Value>{numberFormatter(dataPoint[payload[0].dataKey])}</Value>
    </TooltipContainer>
  ) : null
}
