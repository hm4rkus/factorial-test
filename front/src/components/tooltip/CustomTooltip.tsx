// Styles
import { Name, TooltipContainer, Value } from './customTooltip.styles'

// Utils
import { numberFormatter } from 'utils/numberFormatter'
interface CustomTooltipProps {
  labelAccessor?: string
  active?: boolean
  payload?: any
}

export const CustomTooltip = ({
  active,
  payload,
  labelAccessor,
}: CustomTooltipProps) => {
  console.log(payload)
  return active && payload && payload.length ? (
    <TooltipContainer>
      {labelAccessor && <Name>{payload[0].payload[labelAccessor]}</Name>}
      <Value>{numberFormatter(payload[0].payload[payload[0].dataKey])}</Value>
    </TooltipContainer>
  ) : null
}
