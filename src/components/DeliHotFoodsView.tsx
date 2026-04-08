import React, { useState, useEffect } from 'react';
import {
  Flame,
  Clock,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Utensils,
  Trash2,
  Plus,
  Check,
  X,
  ChevronRight,
  Info,
  Calendar,
  User,
  Database,
  Tag,
  DollarSign,
  Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Product } from '../types';
import { MOCK_DELI_PRODUCTS } from '../constants';
import { ArrowRightLeft } from 'lucide-react';
import DashboardCard from './DashboardCard';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HotCaseItem {
  id: string;
  name: string;
  batchTime: string;
  holdTimeLimit: number; // in minutes
  timeLeft: number; // in minutes
  panLevel: 'Full' | 'Medium' | 'Low';
  status: 'Safe' | 'Near Limit' | 'Expire Now';
}

interface PrepEntry {
  id: string;
  timestamp: string;
  item: string;
  quantity: string;
  employee: string;
  batchId: string;
}

interface WasteEntry {
  id: string;
  timestamp: string;
  item: string;
  quantity: string;
  reason: 'Expired' | 'Quality' | 'Spilled';
  cost: number;
}

interface DeliSpecial {
  id: string;
  name: string;
  includedItems: string;
  totalWeight: string;
  price: number;
}

const MOCK_SPECIALS: DeliSpecial[] = [
  { id: 's1', name: 'Family Sub Pack', includedItems: 'Any 2 meats + 1 cheese', totalWeight: '3 lbs', price: 21.99 },
  { id: 's2', name: 'Party Tray', includedItems: '5 lbs mixed cold cuts', totalWeight: '5 lbs', price: 39.99 },
  { id: 's3', name: 'Cheese Sampler', includedItems: '4 varieties of cheese', totalWeight: '2 lbs', price: 14.99 },
];

const MOCK_HOT_CASE: HotCaseItem[] = [
  { id: '1', name: 'Chicken Tenders', batchTime: '12:15 PM', holdTimeLimit: 240, timeLeft: 12, panLevel: 'Medium', status: 'Near Limit' },
  { id: '2', name: 'Potato Wedges', batchTime: '01:30 PM', holdTimeLimit: 180, timeLeft: 85, panLevel: 'Full', status: 'Safe' },
  { id: '3', name: 'Corn Dogs', batchTime: '11:45 AM', holdTimeLimit: 180, timeLeft: 0, panLevel: 'Low', status: 'Expire Now' },
  { id: '4', name: 'Mac & Cheese', batchTime: '10:00 AM', holdTimeLimit: 240, timeLeft: -15, panLevel: 'Low', status: 'Expire Now' },
  { id: '5', name: 'Breakfast Burritos', batchTime: '02:00 PM', holdTimeLimit: 120, timeLeft: 115, panLevel: 'Full', status: 'Safe' },
];

const MOCK_PREP_LOG: PrepEntry[] = [
  { id: 'p1', timestamp: '2026-03-01 12:15 PM', item: 'Chicken Tenders', quantity: '48 pcs', employee: 'Sarah J.', batchId: 'CT-992' },
  { id: 'p2', timestamp: '2026-03-01 01:30 PM', item: 'Potato Wedges', quantity: '10 lbs', employee: 'Mike R.', batchId: 'PW-441' },
  { id: 'p3', timestamp: '2026-03-01 02:00 PM', item: 'Breakfast Burritos', quantity: '24 units', employee: 'Sarah J.', batchId: 'BB-102' },
];

const MOCK_WASTE_LOG: WasteEntry[] = [
  { id: 'w1', timestamp: '2026-03-01 11:30 AM', item: 'Egg Rolls', quantity: '6 units', reason: 'Expired', cost: 12.50 },
  { id: 'w2', timestamp: '2026-03-01 09:15 AM', item: 'Coffee', quantity: '2 pots', reason: 'Quality', cost: 4.20 },
];

interface DeliHotFoodsViewProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
  onMoveToTradersGuild?: (product: Product) => void;
}

export default function DeliHotFoodsView({ products, onProductClick, onMoveToTradersGuild }: DeliHotFoodsViewProps) {
  const [hotCase, setHotCase] = useState<HotCaseItem[]>(MOCK_HOT_CASE);
  const [prepLog, setPrepLog] = useState<PrepEntry[]>(MOCK_PREP_LOG);
  const [wasteLog, setWasteLog] = useState<WasteEntry[]>(MOCK_WASTE_LOG);
  const deliCounter = products.filter(p => p.category === 'Deli Counter');
  const [specials, setSpecials] = useState<DeliSpecial[]>(MOCK_SPECIALS);
  const [activeTab, setActiveTab] = useState<'PrepLog' | 'WasteLog'>('PrepLog');
  const [hoveredHotItem, setHoveredHotItem] = useState<any>(null);
  const [hoveredCounterItem, setHoveredCounterItem] = useState<any>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPrepModalOpen, setIsPrepModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isNewSpecialModalOpen, setIsNewSpecialModalOpen] = useState(false);
  const [selectedDeliItem, setSelectedDeliItem] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const handleMarkPulled = (id: string) => {
    setHotCase(prev => prev.filter(item => item.id !== id));
  };

  const handleLogShrink = (item: HotCaseItem) => {
    const newWaste: WasteEntry = {
      id: `w-${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      item: item.name,
      quantity: item.panLevel === 'Full' ? 'Full Pan' : item.panLevel === 'Medium' ? 'Half Pan' : 'Few items',
      reason: 'Expired',
      cost: 15.00 // Mock cost
    };
    setWasteLog([newWaste, ...wasteLog]);
    handleMarkPulled(item.id);
  };

  const downloadCSV = () => {
    const headers = ['Product', 'SKU', 'Category', 'Status', 'Daily Sales', 'Stock Level'];
    const rows = [
      ...hotCase.map(item => [item.name, '', 'Hot Case', item.panLevel, '', '']),
      ...deliCounter.map(item => [item.name, item.sku, item.category, item.status, item.dailySales, item.qty_on_hand])
    ];

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Deli_Freshness.csv';
    link.click();
  };

  return (
    <div className="flex flex-col gap-6 min-w-0 pb-10">
      {/* KPI Band */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Today's Deli Sales"
          value="$1,245.50"
          trend="+12.5%"
          trendDirection="up"
          icon={DollarSign}
        />
        <DashboardCard
          title="Items On Line"
          value="12"
          trend="-2"
          trendDirection="down"
          icon={Package}
        />
        <DashboardCard
          title="Items Near Expiry"
          value="3"
          trend="+1"
          trendDirection="up"
          icon={Clock}
          highlight
          statusColor="orange"
        />
        <DashboardCard
          title="Deli Shrink This Week"
          value="$184.20"
          trend="-5.2%"
          trendDirection="down"
          icon={TrendingDown}
          statusColor="red"
        />
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hot Case Lineup */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl overflow-hidden shadow-xl relative group/shelf">
              <div className="absolute inset-0 bg-linear-to-br from-accent-green/2 to-transparent pointer-events-none" />

              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/3 relative z-10">
                <div className="flex items-center gap-3">
                  <Flame className="w-8 h-8 text-accent-green" />
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Hot Case – Live Lineup</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-white/40 font-medium">Real-time freshness monitoring</p>
                      <div className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
                    </div>
                  </div>
                </div>
              <button
                onClick={downloadCSV}
                className="flex items-center gap-2 px-3 py-1 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 rounded-full cursor-pointer transition-colors"
              >
                <Database className="w-3 h-3 text-white/40 group-hover:text-white/60 transition-colors" />
                <span className="text-[10px] font-black text-white/40 group-hover:text-white/60 uppercase tracking-widest transition-colors">Deli_Freshness.csv</span>
              </button>
            </div>

            <div className="overflow-x-auto custom-scrollbar relative z-10">
              <div
                className="relative"
                onMouseMove={(e) => {
                  if (hoveredHotItem) {
                    setMousePos({ x: e.clientX, y: e.clientY });
                  }
                }}
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/2 border-b border-white/5">
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Item / Slot</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Batch</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Time Remaining</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Volume</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Health</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20 text-right pr-8">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {hotCase.map((item, idx) => (
                      <tr
                        key={item.id}
                        className="hover:bg-white/3 transition-all group relative cursor-help"
                        onMouseEnter={(e) => {
                          setHoveredHotItem(item);
                          setMousePos({ x: e.clientX, y: e.clientY });
                        }}
                        onMouseLeave={() => setHoveredHotItem(null)}
                      >
                        <td className="p-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-white group-hover:text-accent-green transition-colors">{item.name}</span>
                            <span className="text-[10px] font-mono text-white/20">Slot: H-{String(idx + 1).padStart(2, '0')}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-xs font-mono text-white/40">{item.batchTime}</span>
                        </td>
                        <td className="p-4 min-w-[160px]">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className={cn(
                                "font-mono font-black tracking-tighter",
                                item.timeLeft <= 0 ? "text-accent-red" :
                                  item.timeLeft <= 30 ? "text-accent-orange" : "text-accent-green"
                              )}>
                                {item.timeLeft <= 0 ? (
                                  <span className="flex items-center gap-1"><AlertCircle className="w-3 h-3" /> EXPIRED</span>
                                ) : `${item.timeLeft}m left`}
                              </span>
                              <span className="text-white/20 uppercase font-black text-[8px]">{item.holdTimeLimit}m max</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${Math.max(0, Math.min(100, (item.timeLeft / item.holdTimeLimit) * 100))}%` }}
                                className={cn(
                                  "h-full rounded-full shadow-[0_0_8px]",
                                  item.timeLeft <= 0 ? "bg-accent-red shadow-accent-red/50" :
                                    item.timeLeft <= 30 ? "bg-accent-orange shadow-accent-orange/50" : "bg-accent-green shadow-accent-green/50"
                                )}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border shadow-sm",
                            item.panLevel === 'Full' ? "bg-accent-green/10 text-accent-green border-accent-green/20" :
                              item.panLevel === 'Medium' ? "bg-accent-orange/10 text-accent-orange border-accent-orange/20" :
                                "bg-accent-red/10 text-accent-red border-accent-red/20"
                          )}>
                            {item.panLevel}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "w-2 h-2 rounded-full shadow-[0_0_8px]",
                              item.status === 'Safe' ? "bg-accent-green shadow-accent-green/50" :
                                item.status === 'Near Limit' ? "bg-accent-orange shadow-accent-orange/50" : "bg-accent-red shadow-accent-red/50 animate-pulse"
                            )} />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{item.status}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right pr-8">
                          <button
                            onClick={() => handleMarkPulled(item.id)}
                            className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all hover:translate-x-1"
                          >
                            Mark Pulled →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Hover Popout Card for Hot Case */}
                <AnimatePresence>
                  {hoveredHotItem && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      style={{
                        position: 'fixed',
                        left: mousePos.x + 20,
                        top: mousePos.y - 120,
                        zIndex: 100,
                        pointerEvents: 'none'
                      }}
                      className="w-64 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Hot Record</p>
                          <h4 className="text-sm font-bold text-white">{hoveredHotItem.name}</h4>
                        </div>
                        <div className={cn(
                          "px-2 py-0.5 rounded text-[9px] font-bold uppercase",
                          hoveredHotItem.status === 'Safe' ? "bg-accent-green/20 text-accent-green" :
                            hoveredHotItem.status === 'Near Limit' ? "bg-accent-orange/20 text-accent-orange" :
                              "bg-accent-red/20 text-accent-red"
                        )}>
                          {hoveredHotItem.status}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/5 p-2 rounded-lg">
                            <p className="text-[8px] text-white/40 uppercase font-bold mb-1">Batch Time</p>
                            <p className="text-xs font-mono font-bold text-white">{hoveredHotItem.batchTime}</p>
                          </div>
                          <div className="bg-white/5 p-2 rounded-lg">
                            <p className="text-[8px] text-white/40 uppercase font-bold mb-1">Time Left</p>
                            <p className={cn(
                              "text-xs font-mono font-bold",
                              hoveredHotItem.timeLeft <= 0 ? "text-accent-red" : "text-white"
                            )}>{hoveredHotItem.timeLeft}m</p>
                          </div>
                        </div>

                        <div className="bg-white/5 p-2 rounded-lg text-center">
                          <p className="text-[8px] text-white/40 uppercase font-bold mb-1">Freshness Status</p>
                          <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden mt-1">
                            <div
                              className={cn(
                                "h-full transition-all duration-500",
                                hoveredHotItem.timeLeft <= 0 ? "bg-accent-red" :
                                  hoveredHotItem.timeLeft <= 30 ? "bg-accent-orange" : "bg-accent-green"
                              )}
                              style={{ width: `${Math.max(0, Math.min(100, (hoveredHotItem.timeLeft / hoveredHotItem.holdTimeLimit) * 100))}%` }}
                            />
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[9px] text-white/30 uppercase font-bold">Standard Limit</span>
                          <span className="text-[10px] font-mono font-bold text-white/60">{hoveredHotItem.holdTimeLimit}m</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Deli Counter - Meats & Cheeses */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl overflow-hidden shadow-xl group/counter">
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                  <Package className="w-5 h-5 text-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Deli Counter – Meats & Cheeses</h3>
                  <p className="text-xs text-white/40 font-medium">Inventory control & precision pricing</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/2 border-b border-white/5">
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Product</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Category</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Base / lb</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Promotion</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">On Hand</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Status</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20 text-right pr-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {deliCounter.map((item) => (
                    <tr
                      key={item.id}
                      onMouseEnter={(e) => {
                        setHoveredCounterItem(item);
                        setMousePos({ x: e.clientX, y: e.clientY });
                      }}
                      onMouseLeave={() => setHoveredCounterItem(null)}
                      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
                      onClick={() => {
                        onProductClick?.(item);
                      }}
                      className="hover:bg-white/3 transition-all cursor-pointer group"
                    >
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors">{item.name}</span>
                          <span className="text-[10px] font-mono text-white/20">{item.sku}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-xs text-white/40 font-medium uppercase tracking-tight">
                          {item.brand?.includes('Cheese') || item.name.includes('Cheese') ? '🧀 Cheese' : '🥩 Meat'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-mono font-bold text-white">${item.basePricePerLb?.toFixed(2)}</span>
                      </td>
                      <td className="p-4">
                        {item.currentPromo ? (
                          <div className="flex items-center gap-2">
                            <Tag className="w-3 h-3 text-accent-green" />
                            <span className="text-xs text-accent-green font-black uppercase tracking-tighter">{item.currentPromo}</span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-white/10 font-black uppercase">Standard</span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-white">{item.qty_on_hand} lbs</span>
                          <span className="text-[8px] text-white/20 uppercase font-black tracking-widest leading-none mt-0.5">Min: {item.qty_min_stock}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full shadow-[0_0_8px]",
                            item.status === 'Healthy' ? "bg-accent-green shadow-accent-green/50" :
                              item.status === 'Low' ? "bg-accent-orange shadow-accent-orange/50" : "bg-accent-red shadow-accent-red/50"
                          )} />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{item.status}</span>
                        </div>
                      </td>
                      <td className="p-4" />
                    </tr>
                  ))}
                </tbody>

                {/* Hover Popout Card for Deli Counter */}
                <AnimatePresence>
                  {hoveredCounterItem && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      style={{
                        position: 'fixed',
                        left: mousePos.x + 20,
                        top: mousePos.y - 120,
                        zIndex: 100,
                        pointerEvents: 'none'
                      }}
                      className="w-64 bg-bg-secondary border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5">{hoveredCounterItem.category}</p>
                          <h4 className="text-sm font-bold text-white">{hoveredCounterItem.name}</h4>
                        </div>
                        <div className={cn(
                          "px-2 py-0.5 rounded text-[9px] font-bold uppercase",
                          hoveredCounterItem.status === 'Healthy' ? "bg-accent-green/20 text-accent-green" :
                            hoveredCounterItem.status === 'Low' ? "bg-accent-orange/20 text-accent-orange" :
                              "bg-accent-red/20 text-accent-red"
                        )}>
                          {hoveredCounterItem.status}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/5 p-2 rounded-lg">
                            <p className="text-[8px] text-white/40 uppercase font-bold mb-1">On Hand</p>
                            <p className="text-xs font-mono font-bold text-white">{hoveredCounterItem.qty_on_hand} lbs</p>
                          </div>
                          <div className="bg-white/5 p-2 rounded-lg">
                            <p className="text-[8px] text-white/40 uppercase font-bold mb-1">Price/lb</p>
                            <p className="text-xs font-mono font-bold text-accent-green">${hoveredCounterItem.basePricePerLb?.toFixed(2)}</p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[9px] text-white/30 uppercase font-bold">SKU</span>
                          <span className="text-[10px] font-mono font-bold text-white/60">{hoveredCounterItem.sku}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </table>
            </div>
          </div>

          {/* Prep & Waste Log */}
          <div className="bg-bg-secondary border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-linear-to-br from-white/1 to-transparent pointer-events-none" />

            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/3 relative z-10">
              <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 shadow-inner">
                <button
                  onClick={() => setActiveTab('PrepLog')}
                  className={cn(
                    "px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                    activeTab === 'PrepLog' ? "bg-white/10 text-white shadow-lg" : "text-white/20 hover:text-white/40"
                  )}
                >
                  Prep Log
                </button>
                <button
                  onClick={() => setActiveTab('WasteLog')}
                  className={cn(
                    "px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                    activeTab === 'WasteLog' ? "bg-white/10 text-white shadow-lg" : "text-white/20 hover:text-white/40"
                  )}
                >
                  Shrink Log
                </button>
              </div>
              <button
                onClick={() => setIsPrepModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-accent-green hover:bg-accent-green-bright text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-accent-green/20 active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                New Entry
              </button>
            </div>

            <div className="overflow-x-auto custom-scrollbar relative z-10">
              {activeTab === 'PrepLog' ? (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/2 border-b border-white/5">
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Timestamp</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Item</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Qty</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Specialist</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Batch ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {prepLog.map((entry) => (
                      <tr key={entry.id} className="hover:bg-white/2 transition-colors">
                        <td className="p-4 text-[10px] font-mono text-white/30">{entry.timestamp}</td>
                        <td className="p-4 text-xs font-bold text-white/90">{entry.item}</td>
                        <td className="p-4 text-xs font-mono text-white/60">{entry.quantity}</td>
                        <td className="p-4 text-xs font-medium text-white/40">{entry.employee}</td>
                        <td className="p-4">
                          <span className="text-[10px] font-mono font-black text-accent-green bg-accent-green/5 border border-accent-green/20 px-2 py-0.5 rounded-md">
                            {entry.batchId}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/2 border-b border-white/5">
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Timestamp</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Item</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Qty</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Reason</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20 text-right pr-8">Loss</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {wasteLog.map((entry) => (
                      <tr key={entry.id} className="hover:bg-white/2 transition-colors">
                        <td className="p-4 text-[10px] font-mono text-white/30">{entry.timestamp}</td>
                        <td className="p-4 text-xs font-bold text-white/90">{entry.item}</td>
                        <td className="p-4 text-xs font-mono text-white/60">{entry.quantity}</td>
                        <td className="p-4">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border",
                            entry.reason === 'Expired' ? "bg-accent-red/10 text-accent-red border-accent-red/20" : "bg-accent-orange/10 text-accent-orange border-accent-orange/20"
                          )}>
                            {entry.reason}
                          </span>
                        </td>
                        <td className="p-4 text-right pr-8 text-xs font-black text-accent-red">-${entry.cost.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Alerts & Specials */}
        <div className="space-y-6">
          <div className="bg-bg-secondary border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center border border-accent-orange/20">
                <AlertCircle className="w-4 h-4 text-accent-orange shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white/60">Flash Alerts</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {hotCase.filter(item => item.status !== 'Safe').map((item) => (
                <div key={`alert-${item.id}`} className="bg-white/3 border border-white/10 rounded-2xl p-5 space-y-4 group hover:border-accent-orange/30 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={cn(
                        "w-2 h-2 rounded-full shadow-[0_0_10px]",
                        item.status === 'Expire Now' ? "bg-accent-red shadow-accent-red/50 animate-pulse" : "bg-accent-orange shadow-accent-orange/50"
                      )} />
                      <p className="text-sm font-black text-white tracking-tight">{item.name}</p>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/30">{item.timeLeft <= 0 ? '!!!' : `${item.timeLeft}m`}</span>
                  </div>

                  <p className="text-[10px] text-white/40 leading-relaxed font-medium">
                    {item.status === 'Expire Now'
                      ? `CRITICAL: Hold time limit of ${item.holdTimeLimit}m exceeded. Discard immediately to maintain standards.`
                      : `WARNING: Nearing freshness limit. Priority restock or pull suggested.`}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    {item.status === 'Expire Now' ? (
                      <button
                        onClick={() => handleLogShrink(item)}
                        className="flex-1 py-2.5 bg-accent-red/10 hover:bg-accent-red text-accent-red hover:text-black border border-accent-red/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                      >
                        Execute Loss Log
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMarkPulled(item.id)}
                        className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all underline underline-offset-4 decoration-white/10"
                      >
                        Mark Pulled
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {hotCase.filter(item => item.status !== 'Safe').length === 0 && (
                <div className="py-16 text-center bg-white/2 border border-dashed border-white/10 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-4 border border-accent-green/20">
                    <Check className="w-6 h-6 text-accent-green opacity-40" />
                  </div>
                  <p className="text-xs font-black text-white/20 uppercase tracking-widest">Freshness Optimized</p>
                </div>
              )}
            </div>
          </div>

          {/* Deli Specials & Bulk Packs */}
          <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group/specials">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-green/5 blur-3xl -ml-16 -mt-16 pointer-events-none group-hover/specials:bg-accent-green/10 transition-all duration-1000" />

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center border border-accent-green/20">
                  <DollarSign className="w-4 h-4 text-accent-green shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white/60">Deli Specials</h3>
              </div>
              <button
                onClick={() => setIsNewSpecialModalOpen(true)}
                className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group active:scale-95"
              >
                <Plus className="w-4 h-4 text-white/40 group-hover:text-accent-green transition-colors" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {specials.map((special) => (
                <div key={special.id} className="bg-white/3 border border-white/5 rounded-xl p-5 group/item hover:border-accent-green/40 transition-all cursor-pointer shadow-lg hover:shadow-accent-green/5">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-black text-white group-hover/item:text-accent-green transition-colors tracking-tight">{special.name}</p>
                    <span className="text-lg font-black text-accent-green tracking-tighter shadow-sm">${special.price.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed font-medium mb-4 italic">
                    {special.includedItems}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center border border-white/5">
                        <Package className="w-3 h-3 text-white/20" />
                      </div>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{special.totalWeight}</span>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all opacity-0 group-hover/item:opacity-100 translate-x-2 group-hover/item:translate-x-0">Edit Action</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Editor Modal */}
      <AnimatePresence>
        {isPricingModalOpen && selectedDeliItem && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPricingModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Edit Deli Pricing</h3>
                    <p className="text-xs text-white/40">{selectedDeliItem.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPricingModalOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Base Price / lb</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
                      <input
                        type="number"
                        step="0.01"
                        defaultValue={selectedDeliItem.basePricePerLb}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 opacity-50">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Suggested Promo</label>
                    <div className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/60 select-none">
                      ${(selectedDeliItem.basePricePerLb! * 0.9).toFixed(2)}/lb
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Current Promo Text</label>
                  <input
                    type="text"
                    defaultValue={selectedDeliItem.currentPromo || ''}
                    placeholder="e.g. $11.99/lb or Buy 2+ lbs: $9.99/lb"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                  />
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setIsPricingModalOpen(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      showToast(`Pricing updated for ${selectedDeliItem.name}`);
                      setIsPricingModalOpen(false);
                    }}
                    className="flex-1 py-3 bg-accent-green hover:bg-accent-green/90 text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-accent-green/10"
                  >
                    Save Pricing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* New Special Modal */}
      <AnimatePresence>
        {isNewSpecialModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNewSpecialModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">New Deli Special</h3>
                    <p className="text-xs text-white/40">Define a new bulk package</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsNewSpecialModalOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newSpecial: DeliSpecial = {
                  id: `special-${Date.now()}`,
                  name: formData.get('specialName') as string,
                  includedItems: formData.get('includedItems') as string,
                  totalWeight: formData.get('totalWeight') as string,
                  price: parseFloat(formData.get('specialPrice') as string) || 0,
                };
                setSpecials(prev => [...prev, newSpecial]);
                showToast(`"${newSpecial.name}" special created`);
                setIsNewSpecialModalOpen(false);
              }} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Special Name</label>
                  <input
                    name="specialName"
                    type="text"
                    placeholder="e.g. Weekend Party Pack"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Included Items</label>
                  <textarea
                    name="includedItems"
                    placeholder="e.g. 2 lbs Turkey, 1 lb Swiss, 1 lb Ham"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors min-h-[80px] resize-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Total Weight</label>
                    <input
                      name="totalWeight"
                      type="text"
                      placeholder="e.g. 4 lbs"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Special Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
                      <input
                        name="specialPrice"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsNewSpecialModalOpen(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-accent-green hover:bg-accent-green/90 text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-accent-green/10"
                  >
                    Create Special
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notifications */}
      <div className="fixed bottom-6 right-6 z-200 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="bg-accent-green text-black px-6 py-3 rounded-xl shadow-2xl font-bold text-sm flex items-center gap-3"
            >
              <Check className="w-4 h-4" />
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* New Prep Entry Modal */}
      <AnimatePresence>
        {isPrepModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrepModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">New Prep Entry</h3>
                    <p className="text-xs text-white/40">Log newly prepared batch</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPrepModalOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const timeVal = formData.get('startTime') as string;
                const now = new Date();
                const dateStr = now.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
                const newEntry: PrepEntry = {
                  id: `p-${Date.now()}`,
                  timestamp: `${dateStr} ${timeVal || now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`,
                  item: formData.get('itemName') as string,
                  quantity: formData.get('quantity') as string,
                  employee: formData.get('employee') as string,
                  batchId: `BT-${Math.floor(Math.random() * 900 + 100)}`,
                };
                setPrepLog(prev => [newEntry, ...prev]);
                showToast(`Prep entry logged: ${newEntry.item}`);
                setIsPrepModalOpen(false);
              }} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Item Name</label>
                  <input
                    name="itemName"
                    type="text"
                    placeholder="e.g. Chicken Tenders"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Quantity</label>
                    <input
                      name="quantity"
                      type="text"
                      placeholder="e.g. 48 pcs"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Start Time</label>
                    <input
                      name="startTime"
                      type="time"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Employee</label>
                  <input
                    name="employee"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                    required
                  />
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPrepModalOpen(false)}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-accent-green hover:bg-accent-green/90 text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-accent-green/10"
                  >
                    Log Entry
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

