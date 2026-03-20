import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Button } from '~/components/ui/button'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '~/components/ui/chart'

export default function Home() {
  return (
    <div className='flex min-h-svh p-6'>
      <div className='flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose'>
        <div>
          <h1 className='font-medium'>Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className='mt-2'>Button</Button>
        </div>

        <Chart />
      </div>
    </div>
  )
}

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
}

const Chart: React.FC = () => {
  return (
    <div className='mt-8 rounded-xl border p-4'>
      <h2 className='mb-4 text-lg font-semibold'>Example Chart</h2>
      <ChartContainer config={chartConfig} className='min-h-50 w-full'>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
          <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
