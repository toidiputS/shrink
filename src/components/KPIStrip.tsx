import React from 'react';
import { Package, Truck, TrendingUp, ShieldCheck } from 'lucide-react';
import { CategoryData } from '../types';
import DashboardCard from './DashboardCard';

interface KPIStripProps {
  stats: CategoryData['stats'];
}

const KPIStrip: React.FC<KPIStripProps> = ({ stats }) => {
  const items = [
    {
      label: 'Total Inventory',
      value: stats.totalInventory.toLocaleString(),
      trend: '+2.1% vs last week',
      icon: Package,
      color: 'text-accent-green-bright'
    },
    {
      label: 'Daily Restock',
      value: stats.dailyRestock.toLocaleString(),
      trend: '+5% volume',
      icon: Truck,
      color: 'text-accent-green-bright'
    },
    {
      label: 'Net Margin',
      value: `${stats.netMargin}%`,
      trend: '+0.4% growth',
      icon: TrendingUp,
      color: 'text-accent-green-bright'
    },
    {
      label: 'Compliance',
      value: `${stats.compliance}%`,
      trend: 'Healthy status',
      icon: ShieldCheck,
      color: 'text-accent-green'
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {items.map((item, i) => (
        <DashboardCard
          key={i}
          title={item.label}
          value={item.value}
          trend={item.trend.split(' ')[0]} // Extract just the percentage
          isPositive={true}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default KPIStrip;
