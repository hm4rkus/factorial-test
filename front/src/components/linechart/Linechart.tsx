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

interface LineChartProps {
  data: any[]
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
          tickFormatter={(value) => dateFormatter(value)}
          dataKey={xAccessor}
        />
        <YAxis />
        <Tooltip
          content={(props) => (
            <CustomTooltip labelAccessor={labelAccessor} {...props} />
          )}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}
