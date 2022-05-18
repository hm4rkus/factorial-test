// Components
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CustomTooltip } from 'components'

// Constants
import { LINECHART_TICK_MARGIN } from './linechart.constants'
import { dateFormatter } from 'utils/dateFormatter'
import { numberFormatter } from 'utils'
import AutoSizer from 'react-virtualized-auto-sizer'

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
    <AutoSizer>
      {({ width, height }) => (
        <RechartsLineChart width={width} data={data} height={height}>
          <CartesianGrid />
          <Line
            stroke={'var(--linechart-stroke-color)'}
            strokeWidth={'var(--linechart-stroke-width)'}
            dataKey={yAccessor}
            type='monotone'
          />
          <XAxis
            tickFormatter={(value) => dateFormatter(value)}
            dataKey={xAccessor}
            tickMargin={LINECHART_TICK_MARGIN}
          />
          <YAxis tickFormatter={numberFormatter} />
          <Tooltip
            content={(props) => (
              <CustomTooltip
                labelAccessor={labelAccessor}
                dateAccessor={xAccessor}
                {...props}
              />
            )}
          />
        </RechartsLineChart>
      )}
    </AutoSizer>
  )
}
