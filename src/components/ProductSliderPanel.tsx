import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, AlertCircle, TrendingUp, DollarSign, Building2, Phone, Mail, ArrowRightLeft } from 'lucide-react';
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

interface ProductSliderPanelProps {
    product: Product;
    coordinate?: string;
    onClose: () => void;
    onMoveToTradersGuild?: (product: Product) => void;
}

const ProductSliderPanel: React.FC<ProductSliderPanelProps> = ({
    product,
    coordinate,
    onClose,
    onMoveToTradersGuild
}) => {
    return (
        <AnimatePresence>
            {product && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[#111111] border-l border-white/10 z-50 flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.8)] overflow-hidden"
                    >
                        {/* Panel Header */}
                        <div className="px-6 py-4 border-b border-white/5 bg-white/2 flex items-center justify-between shrink-0">
                            <div>
                                <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.2em] mb-1">Product Detail</p>
                                <h3 className="text-base font-bold text-white leading-tight">{product.name}</h3>
                                <p className="text-[10px] text-white/40 mt-0.5">{product.brand} · SKU-{product.sku}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {coordinate && (
                                    <div className="text-right">
                                        <p className="text-[8px] text-white/30 uppercase font-bold tracking-widest mb-0.5">Coordinate</p>
                                        <p className="text-xs font-mono font-bold text-accent-green-bright">{coordinate}</p>
                                    </div>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-lg border border-white/5 text-white/40 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Panel Body */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 custom-scrollbar">

                            {/* Inventory Status */}
                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertCircle className="w-3.5 h-3.5 text-white/40" />
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Inventory</h3>
                                </div>
                                <div className={cn(
                                    "p-4 rounded-xl border flex items-center justify-between",
                                    product.status === 'Critical' ? 'bg-accent-red/10 border-accent-red/20' :
                                        product.status === 'Low' ? 'bg-accent-orange/10 border-accent-orange/20' :
                                            'bg-accent-green/10 border-accent-green/20'
                                )}>
                                    <div className="flex items-center gap-3">
                                        <div className={cn("w-3 h-3 rounded-full shadow-[0_0_12px]",
                                            product.status === 'Critical' ? 'bg-accent-red shadow-accent-red/50' :
                                                product.status === 'Low' ? 'bg-accent-orange shadow-accent-orange/50' :
                                                    'bg-accent-green shadow-accent-green/50'
                                        )} />
                                        <div>
                                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Current Status</div>
                                            <div className={cn("text-sm font-black uppercase tracking-wider",
                                                product.status === 'Critical' ? 'text-accent-red' :
                                                    product.status === 'Low' ? 'text-accent-orange' :
                                                        'text-accent-green'
                                            )}>
                                                {product.status === 'Healthy' ? 'In Stock' : product.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-0.5">On-Hand</div>
                                        <div className="text-2xl font-mono font-bold text-white leading-none">{product.qty_on_hand}</div>
                                    </div>
                                </div>
                            </section>

                            {/* Financials & Peformance */}
                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <DollarSign className="w-3.5 h-3.5 text-white/40" />
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Performance</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                        <div className="text-[9px] text-white/40 uppercase font-black tracking-widest mb-1">Cost Price</div>
                                        <div className="text-lg font-mono font-bold text-white">${product.unit_cost.toFixed(2)}</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                        <div className="text-[9px] text-white/40 uppercase font-black tracking-widest mb-1">Profit Margin</div>
                                        <div className="text-lg font-mono font-bold text-accent-green">{product.retail_price}%</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                        <div className="text-[9px] text-white/40 uppercase font-black tracking-widest mb-1">Sales / Day</div>
                                        <div className="text-lg font-mono font-bold text-white">{product.dailySales}</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                        <div className="text-[9px] text-white/40 uppercase font-black tracking-widest mb-1">Trend</div>
                                        <div className="text-lg font-mono font-bold text-white flex items-center gap-1">
                                            {(() => {
                                                const firstDaySales = product.historicalSales[0]?.sales || 0;
                                                const lastDaySales = product.historicalSales[6]?.sales || 0;
                                                const diff = lastDaySales - firstDaySales;

                                                return diff >= 0
                                                    ? <><TrendingUp className="w-4 h-4 text-accent-green" />{Math.abs(diff)}</>
                                                    : <><TrendingUp className="w-4 h-4 text-accent-red rotate-180" />{Math.abs(diff)}</>;
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Sales Trend Chart */}
                            <section>
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-3.5 h-3.5 text-white/40" />
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">7-Day Sales Track</h3>
                                </div>
                                <div className="h-40 w-full bg-white/5 rounded-xl border border-border-subtle p-3 min-w-0">
                                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                                        <BarChart data={product.historicalSales}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                            <XAxis
                                                dataKey="date"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 9 }}
                                            />
                                            <YAxis hide />
                                            <Tooltip
                                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                                contentStyle={{
                                                    backgroundColor: '#1A1A1A',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderRadius: '8px',
                                                    fontSize: '11px'
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
                                <div className="flex items-center gap-2 mb-3">
                                    <Building2 className="w-3.5 h-3.5 text-white/40" />
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Supplier Details</h3>
                                </div>
                                <div className="bg-white/5 rounded-xl border border-border-subtle overflow-hidden">
                                    <div className="p-3 border-b border-border-subtle bg-white/2">
                                        <p className="text-sm font-bold text-white">{product.supplier.name}</p>
                                    </div>
                                    <div className="p-3 space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-3.5 h-3.5 text-accent-green" />
                                            <span className="text-xs text-white/70">{product.supplier.contact}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-3.5 h-3.5 text-accent-green" />
                                            <span className="text-xs text-white/70">{product.supplier.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Panel Footer — Actions */}
                        <div className="px-6 py-4 border-t border-white/5 bg-[#161616] space-y-2 shrink-0">
                            {onMoveToTradersGuild && (
                                <button
                                    onClick={() => {
                                        onMoveToTradersGuild(product);
                                        onClose();
                                    }}
                                    className="w-full py-3 bg-[#111] hover:bg-white/5 text-white/60 hover:text-white border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group"
                                >
                                    <ArrowRightLeft className="w-4 h-4 text-white/40 group-hover:text-accent-green transition-colors" />
                                    Send to Traders Guild
                                </button>
                            )}
                            <button
                                onClick={() => onClose()}
                                className="w-full py-3 bg-accent-green hover:bg-accent-green-bright text-[#111] rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
                            >
                                <TrendingUp className="w-4 h-4" />
                                Place Restock Order
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductSliderPanel;
