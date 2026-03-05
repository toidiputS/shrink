import React from 'react';
import { AlertTriangle, TrendingDown, Ban, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const HighImpactOps: React.FC = () => {
  const ops = [
    {
      title: 'Gold Soft Pack',
      desc: 'Stockout Risk: Critical',
      status: 'Out of stock: 3 hrs/day',
      icon: AlertTriangle,
      iconColor: 'text-accent-orange',
      action: 'FIX NOW'
    },
    {
      title: 'Silver Menthol',
      desc: 'Low Velocity',
      status: 'Sales/Day: 1.2 packs',
      icon: TrendingDown,
      iconColor: 'text-accent-green',
      action: 'REVIEW PRICING'
    },
    {
      title: 'Classic 100s',
      desc: 'Planogram Mismatch',
      status: 'Location: Shelf 3, Row 2',
      icon: Ban,
      iconColor: 'text-accent-red',
      action: 'RE-SLOT SKU'
    },
    {
      title: 'New Vape Pods',
      desc: 'Launch Ready',
      status: 'Status: Pending Shelf Space',
      icon: CheckCircle2,
      iconColor: 'text-accent-green',
      action: 'ASSIGN SPACE'
    }
  ];

  return (
    <div className="w-80 shrink-0 flex flex-col gap-4 h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-sm font-bold tracking-tight">High-Impact Ops</h3>
        <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Action items</span>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
        {ops.map((op, i) => (
          <div key={i} className="bg-bg-secondary border border-border-subtle rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <op.icon className={cn("w-5 h-5", op.iconColor)} />
              </div>
              <div>
                <h4 className="text-sm font-bold">{op.title}</h4>
                <p className="text-[11px] text-white/40">{op.desc}</p>
              </div>
            </div>
            <p className="text-[10px] text-white/60 mb-4">{op.status}</p>
            <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors">
              {op.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighImpactOps;
