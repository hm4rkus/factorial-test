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
import AutoSizer from 'react-virtualized-auto-sizer'

// Constants
import { LINECHART_TICK_MARGIN } from './linechart.constants'

// Utils
import { dateFormatter, numberFormatter } from 'utils'

// Styles
import { lineStyles } from './linechart.styles'

interface LineChartProps {
  // Data that needs to be represented.
  data: unknown[]
  // Accessor to the data that needs to be represented in the X Axis.
  xAccessor: string
  // Accessor to the data that needs to be represented in the Y Axis.
  yAccessor: string
  // Accessor to the label of the data.
  labelAccessor: string
}

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
          <Line {...lineStyles} dataKey={yAccessor} type='monotone' />
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
