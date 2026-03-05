import React from 'react';
import { motion } from 'motion/react';
import { X, Phone, Mail, Building2, TrendingUp, AlertCircle, DollarSign, ArrowRightLeft } from 'lucide-react';
import { Product } from '../types';
import {
  BarChart,
  Bar,
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

interface ProductDetailPanelProps {
  product: Product | null;
  onClose: () => void;
  onMoveToTradersGuild?: (product: Product) => void;
}

const ProductDetailPanel: React.FC<ProductDetailPanelProps> = ({ product, onClose, onMoveToTradersGuild }) => {
  if (!product) return null;

  return (
    <>
      {/* Backdrop overlay — click outside to close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-99"
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 w-[450px] h-screen bg-bg-secondary border-l border-border-subtle z-100 shadow-2xl flex flex-col"
      >
        <div className="p-6 border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              product.status === 'Healthy' ? "bg-accent-green/20 text-accent-green" :
                product.status === 'Low' ? "bg-accent-orange/20 text-accent-orange" :
                  "bg-accent-red/20 text-accent-red"
            )}>
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">{product.name}</h2>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{product.brand}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white/40" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
          {/* Stock Alert Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-4 h-4 text-white/40" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Inventory Status</h3>
            </div>
            <div className={cn(
              "p-4 rounded-xl border",
              product.status === 'Healthy' ? "bg-accent-green/5 border-accent-green/20" :
                product.status === 'Low' ? "bg-accent-orange/5 border-accent-orange/20" :
                  "bg-accent-red/5 border-accent-red/20"
            )}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Stock Level</span>
                <span className={cn(
                  "text-xs font-bold uppercase px-2 py-0.5 rounded",
                  product.status === 'Healthy' ? "bg-accent-green/20 text-accent-green" :
                    product.status === 'Low' ? "bg-accent-orange/20 text-accent-orange" :
                      "bg-accent-red/20 text-accent-red"
                )}>{product.status}</span>
              </div>
              <div className="text-3xl font-bold mb-1">{product.onHand} <span className="text-sm font-normal text-white/40">units</span></div>
              <p className="text-xs text-white/40">
                {product.status === 'Critical' ? 'Immediate restock required. Stock below safety threshold.' :
                  product.status === 'Low' ? 'Restock recommended within 24 hours.' :
                    'Stock levels are within optimal range.'}
              </p>
            </div>
          </section>

          {/* Financials */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-4 h-4 text-white/40" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Financial Overview</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-border-subtle">
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Cost Price</p>
                <p className="text-xl font-mono font-bold">${product.costPrice.toFixed(2)}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-border-subtle">
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Profit Margin</p>
                <p className="text-xl font-mono font-bold text-accent-green">{product.margin}%</p>
              </div>
            </div>
          </section>

          {/* Sales Trend */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-white/40" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">7-Day Sales Trend</h3>
            </div>
            <div className="h-48 w-full bg-white/5 rounded-xl border border-border-subtle p-4 min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <BarChart data={product.historicalSales}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }}
                  />
                  <YAxis hide />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{
                      backgroundColor: '#1A1A1A',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`${value} units`, 'Sales']}
                  />
                  <Bar dataKey="sales" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Supplier Info */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-white/40" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Supplier Information</h3>
            </div>
            <div className="bg-white/5 rounded-xl border border-border-subtle overflow-hidden">
              <div className="p-4 border-b border-border-subtle">
                <p className="text-sm font-bold">{product.supplier.name}</p>
                <p className="text-xs text-white/40">Primary Logistics Partner</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent-green" />
                  <span className="text-sm text-white/80">{product.supplier.contact}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent-green" />
                  <span className="text-sm text-white/80">{product.supplier.email}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="p-6 border-t border-border-subtle bg-white/5 space-y-3">
          <button
            onClick={() => product && onMoveToTradersGuild?.(product)}
            className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
          >
            <ArrowRightLeft className="w-4 h-4 text-white/40 group-hover:text-accent-green transition-colors" />
            Move to Traders Guild
          </button>
          <button className="w-full py-3 bg-accent-green hover:bg-accent-green/90 text-black rounded-xl font-bold transition-colors">
            Place Restock Order
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductDetailPanel;
