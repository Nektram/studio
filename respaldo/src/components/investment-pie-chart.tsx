"use client";

import * as React from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { name: 'Marketing', value: 50, fill: 'hsl(var(--chart-1))' },
  { name: 'Equipo de Operaciones', value: 30, fill: 'hsl(var(--chart-2))' },
  { name: 'Formalización Legal', value: 20, fill: 'hsl(var(--chart-3))' },
];

const chartConfig = {
  value: {
    label: 'Percentage',
  },
  marketing: {
    label: 'Marketing',
    color: 'hsl(var(--chart-1))',
  },
  equipo: {
    label: 'Equipo de Operaciones',
    color: 'hsl(var(--chart-2))',
  },
  legal: {
    label: 'Formalización Legal',
    color: 'hsl(var(--chart-3))',
  },
};

export function InvestmentPieChart() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-full"
      >
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-4 flex justify-center gap-4 text-sm">
        {chartData.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: entry.fill }}
            />
            <span>{entry.name} ({entry.value}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
