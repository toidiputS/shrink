import React, { useMemo } from 'react';
import { ViewMode } from '../types';
import {
  DollarSign,
  Package,
  TrendingDown,
  ShieldCheck,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight
} from 'lucide-react';
import DashboardCard from './DashboardCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const KPI_DATA = [
  { title: "Today's Revenue", value: "$12,482.50", trend: "+8.2%", isPositive: true, icon: DollarSign },
  { title: "Inventory Value", value: "$142,500.00", trend: "+2.1%", isPositive: true, icon: Package },
  { title: "Shrink This Month", value: "$420.15", trend: "-12.5%", isPositive: false, icon: TrendingDown },
  { title: "Compliance Score", value: "98.5%", trend: "+0.5%", isPositive: true, icon: ShieldCheck },
];

const DEPT_HEALTH = [
  { name: 'Tobacco', status: 'Healthy', value: '$42.5k', sales: '$12.2k', progress: 85, color: 'bg-accent-green' },
  { name: 'Deli & Hot Foods', status: 'Low', value: '$8.2k', sales: '$4.1k', progress: 45, color: 'bg-accent-orange' },
  { name: 'Meat & Fresh', status: 'Healthy', value: '$15.4k', sales: '$6.8k', progress: 75, color: 'bg-accent-green' },
  { name: 'Grocery & Dry Goods', status: 'Healthy', value: '$38.2k', sales: '$9.4k', progress: 90, color: 'bg-accent-green' },
  { name: 'Freezer Foods', status: 'Critical', value: '$12.1k', sales: '$3.2k', progress: 25, color: 'bg-accent-red' },
  { name: 'Beer Cooler', status: 'Healthy', value: '$18.5k', sales: '$7.5k', progress: 80, color: 'bg-accent-green' },
  { name: 'Soda & Drink Coolers', status: 'Healthy', value: '$7.6k', sales: '$2.8k', progress: 88, color: 'bg-accent-green' },
];

const ALERTS: { title: string; desc: string; action: string; targetView: ViewMode }[] = [
  { title: 'Tobacco: Critical stockout risk', desc: 'Gold Soft Pack (SKU: 10245) below safety threshold.', action: 'View Wall', targetView: 'TobaccoWall' },
  { title: 'Deli: Freshness window expiring', desc: '3 SKUs (Chicken Salad, Turkey Club) expiring in < 2h.', action: 'Open Deli View', targetView: 'DeliHotFoods' },
  { title: 'Freezer: Door 2 temp high', desc: 'Current: 18°F (Threshold: 10°F). Check door seal.', action: 'Check Seal', targetView: 'GroceryDryGoods' },
];

const TREND_DATA = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  revenue: 8000 + Math.random() * 4000,
  shrink: 10 + Math.random() * 50,
}));

interface StoreOverviewProps {
  onViewModeChange?: (mode: ViewMode) => void;
}

export default function StoreOverview({ onViewModeChange }: StoreOverviewProps) {
  return (
    <div className="flex flex-col gap-6 min-w-0 pb-10">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_DATA.map((kpi) => (
          <DashboardCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            trend={kpi.trend}
            isPositive={kpi.isPositive}
            icon={kpi.icon}
          />
        ))}
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row gap-6 min-w-0 order-last lg:order-0">
        {/* Store Health */}
        <div className="flex-1 bg-[#0F0F0F] border border-white/5 rounded-xl p-6 shadow-xl min-w-0">
          <h2 className="text-xl font-bold tracking-tight mb-6">Store Health by Department</h2>
          <div className="space-y-6">
            {DEPT_HEALTH.map((dept) => (
              <div key={dept.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-white/90">{dept.name}</span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full",
                      dept.status === 'Healthy' ? "bg-accent-green/10 text-accent-green" :
                        dept.status === 'Low' ? "bg-accent-orange/10 text-accent-orange" : "bg-accent-red/10 text-accent-red"
                    )}>
                      {dept.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">Inv Value</p>
                      <p className="text-xs font-bold text-white">{dept.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">30d Sales</p>
                      <p className="text-xs font-bold text-white">{dept.sales}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all duration-500", dept.color)}
                    style={{ width: `${dept.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-4">
          <div className="bg-[#0F0F0F] border border-white/5 rounded-xl p-6 shadow-xl h-full">
            <h2 className="text-xl font-bold tracking-tight mb-6">Store Alerts & Action Items</h2>
            <div className="space-y-4">
              {ALERTS.map((alert, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 group hover:border-white/20 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-4 h-4 text-accent-red" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/90 leading-tight">{alert.title}</h4>
                      <p className="text-[10px] text-white/40 mt-1 leading-relaxed">{alert.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onViewModeChange?.(alert.targetView)}
                    className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/60 transition-colors flex items-center justify-center gap-2"
                  >
                    {alert.action}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trends Section */}
      <div className="bg-[#0F0F0F] border border-white/5 rounded-xl p-6 shadow-xl">
        <h2 className="text-xl font-bold tracking-tight mb-6">30-Day Trends</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="h-[240px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Daily Revenue (All Depts)</h3>
              <span className="text-xs font-bold text-accent-green">$374,450 Total</span>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={TREND_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#ffffff40', fontSize: 10 }}
                    interval={4}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#ffffff40', fontSize: 10 }}
                    tickFormatter={(val) => `$${Number(val).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#059669' }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Revenue']}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#059669"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Shrink Chart */}
          <div className="h-[240px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Daily Shrink Cost</h3>
              <span className="text-xs font-bold text-accent-red">$1,240 Total</span>
            </div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={TREND_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#ffffff40', fontSize: 10 }}
                    interval={4}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#ffffff40', fontSize: 10 }}
                    tickFormatter={(val) => `$${Number(val).toFixed(0)}`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#dc2626' }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Shrink']}
                  />
                  <Line
                    type="monotone"
                    dataKey="shrink"
                    stroke="#dc2626"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
