import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import ChartCard from './ChartCard';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#111827',
          color: '#fff',
          padding: '8px 12px',
          borderRadius: 8,
          fontSize: 12,
        }}
      >
        {payload[0].value} Consultations
      </div>
    );
  }
  return null;
};

const ConsultationChart = ({ data }) => (
  <ChartCard title="Consultation Over Time">
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="consultationGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} stroke="#E5E7EB" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#3B82F6"
          strokeWidth={2}
          fill="url(#consultationGradient)"
          dot={{ r: 4, fill: '#FFFFFF', stroke: '#3B82F6', strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default ConsultationChart;
