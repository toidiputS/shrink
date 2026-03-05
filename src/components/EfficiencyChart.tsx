import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { EFFICIENCY_DATA } from '../constants';

const EfficiencyChart: React.FC = () => {
  return (
    <div className="bg-bg-secondary border border-border-subtle rounded-2xl p-6 h-64">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold tracking-tight">Shelf Space Efficiency</h3>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors">Daily View</button>
          <button className="px-3 py-1 bg-accent-green/10 rounded-md text-[10px] font-bold uppercase tracking-wider text-accent-green">7-Day Trend</button>
        </div>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={EFFICIENCY_DATA}>
            <defs>
              <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#059669" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }}
              dy={10}
            />
            <YAxis
              hide
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              itemStyle={{ color: '#059669' }}
            />
            <Area
              type="monotone"
              dataKey="efficiency"
              stroke="#059669"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEff)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EfficiencyChart;
