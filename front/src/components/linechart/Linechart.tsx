// Components
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CustomTooltip } from 'components'

// Constants
import { LINECHART_HEIGHT } from './linechart.constants'
import { dateFormatter } from 'utils/dateFormatter'
import { numberFormatter } from 'utils'

interface LineChartProps {
  data: unknown[]
  xAccessor: string
  yAccessor: string
  labelAccessor: string
}

// TODO: Fix resizes not working for some reason.
export const LineChart = ({
  data,
  xAccessor,
  yAccessor,
  labelAccessor,
}: LineChartProps) => {
  return (
    <ResponsiveContainer width={'100%'} height={LINECHART_HEIGHT}>
      <RechartsLineChart data={data}>
        <CartesianGrid />
        <Line stroke={'var(--primary)'} dataKey={yAccessor} type='monotone' />
        <XAxis
          tickFormatter={dateFormatter}
          dataKey={xAccessor}
          tickMargin={12}
        />
        <YAxis tickFormatter={numberFormatter} />
        <Tooltip
          content={(props) => (
            <CustomTooltip labelAccessor={labelAccessor} {...props} />
          )}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}
