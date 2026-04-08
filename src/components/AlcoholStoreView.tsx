import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Beer,
    Wine,
    GlassWater,
    ArrowLeft,
    AlertTriangle,
    TrendingUp,
    Package,
    ChevronRight,
    Shield,
    Eye
} from 'lucide-react';
import { Product } from '../types';
import { MOCK_ALCOHOL_PRODUCTS } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ShelfPlanogramView from './ShelfPlanogramView';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// ─── SECTION DEFINITIONS ───
interface AlcoholSection {
    id: string;
    name: string;
    department: string;
    sectionCode: string;
    icon: React.FC<any>;
    color: string;
    bgColor: string;
    borderColor: string;
    glowColor: string;
    isCoolerDoor: boolean;
    defaultRows: number;
    defaultCols: number;
    defaultUnits: number;
}

const SECTIONS: AlcoholSection[] = [
    {
        id: 'beer',
        name: 'Beer Cooler',
        department: 'Alcohol - Beer',
        sectionCode: 'BER',
        icon: Beer,
        color: 'text-amber-400',
        bgColor: 'bg-amber-400/10',
        borderColor: 'border-amber-400/20',
        glowColor: 'shadow-amber-400/20',
        isCoolerDoor: true,
        defaultRows: 5,
        defaultCols: 6,
        defaultUnits: 10
    },
    {
        id: 'liquor',
        name: 'Liquor',
        department: 'Alcohol - Liquor',
        sectionCode: 'LIQ',
        icon: GlassWater,
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/10',
        borderColor: 'border-purple-400/20',
        glowColor: 'shadow-purple-400/20',
        isCoolerDoor: false,
        defaultRows: 6,
        defaultCols: 8,
        defaultUnits: 8
    },
    {
        id: 'wine',
        name: 'Wine',
        department: 'Alcohol - Wine',
        sectionCode: 'WIN',
        icon: Wine,
        color: 'text-rose-400',
        bgColor: 'bg-rose-400/10',
        borderColor: 'border-rose-400/20',
        glowColor: 'shadow-rose-400/20',
        isCoolerDoor: false,
        defaultRows: 5,
        defaultCols: 6,
        defaultUnits: 6
    }
];

// ─── ANALYTICS HELPERS ───
function getSectionProducts(department: string, products: Product[]): Product[] {
    return products.filter(p => p.department === department);
}

function getSectionHealth(products: Product[]): 'green' | 'orange' | 'red' {
    if (products.length === 0) return 'green';
    const criticalPct = products.filter(p => p.status === 'Critical').length / products.length;
    if (criticalPct > 0.15) return 'red';
    if (criticalPct > 0.05) return 'orange';
    return 'green';
}

function getSectionStats(products: Product[]) {
    const totalSKUs = products.length;
    const avgMarginRaw = totalSKUs > 0 ? Math.round(products.reduce((s, p) => s + (p.margin || 0), 0) / totalSKUs) : null;
    const avgMargin = avgMarginRaw !== null && !isNaN(avgMarginRaw) ? avgMarginRaw : null;
    const totalDailySales = products.reduce((s, p) => s + (p.dailySales || 0), 0);
    const criticalCount = products.filter(p => p.status === 'Critical').length;
    const lowCount = products.filter(p => p.status === 'Low').length;
    const alertCount = criticalCount + lowCount;
    const estShrink = (criticalCount * 12 + lowCount * 5);
    return { totalSKUs, avgMargin, totalDailySales, alertCount, criticalCount, lowCount, estShrink };
}

// ═══════════════════════════════════════════════
// ─── MAIN COMPONENT ───
// ═══════════════════════════════════════════════

interface AlcoholStoreViewProps {
    products: Product[];
    onProductClick?: (product: Product) => void;
    onMoveToTradersGuild?: (product: Product) => void;
}

const AlcoholStoreView: React.FC<AlcoholStoreViewProps> = ({ products, onProductClick, onMoveToTradersGuild }) => {
    const [activeSection, setActiveSection] = useState<AlcoholSection | null>(null);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

    // ── DRILL-DOWN VIEW ──
    if (activeSection) {
        const sectionProducts = getSectionProducts(activeSection.department, products);
        return (
            <div className="flex flex-col h-full gap-4">
                {/* Back Button */}
                <button
                    onClick={() => setActiveSection(null)}
                    className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors self-start group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Back to Alcohol Store</span>
                </button>

                <ShelfPlanogramView
                    title={activeSection.name}
                    subtitle={activeSection.department}
                    sectionCode={activeSection.sectionCode}
                    products={sectionProducts}
                    rows={activeSection.defaultRows}
                    cols={activeSection.defaultCols}
                    units={activeSection.defaultUnits}
                    isCoolerDoor={activeSection.isCoolerDoor}
                    onMoveToTradersGuild={onMoveToTradersGuild}
                />
            </div>
        );
    }

    // ── TOPICAL FLOOR MAP ──
    return (
        <div className="flex flex-col h-full">
            {/* Map Header */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Wine className="w-8 h-8 text-accent-green" />
                    <div>
                        <h1 className="text-xl font-black text-white uppercase tracking-wider">Alcohol Store</h1>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-1">Beer · Liquor · Wine — Topical Floor Map</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                        <Eye className="w-3 h-3 text-white/30" />
                        <span className="text-[9px] font-bold text-white/40 uppercase">Click a section to drill in</span>
                    </div>
                </div>
            </div>

            {/* ═══ THE FLOOR MAP ═══ */}
            <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
                {SECTIONS.map(section => {
                    const sectionProducts = getSectionProducts(section.department, products);
                    const health = getSectionHealth(sectionProducts);
                    const stats = getSectionStats(sectionProducts);
                    const SectionIcon = section.icon;

                    return (
                        <motion.div
                            key={section.id}
                            onClick={() => setActiveSection(section)}
                            onMouseEnter={(e) => {
                                setHoveredSection(section.id);
                                setHoverPos({ x: e.clientX, y: e.clientY });
                            }}
                            onMouseMove={(e) => setHoverPos({ x: e.clientX, y: e.clientY })}
                            onMouseLeave={() => setHoveredSection(null)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className={cn(
                                "relative rounded-2xl border cursor-pointer transition-all overflow-hidden flex flex-col",
                                section.borderColor,
                                section.bgColor,
                                "hover:shadow-lg",
                                `hover:${section.glowColor}`
                            )}
                        >
                            {/* Section Header */}
                            <div className={cn("p-5 border-b", section.borderColor)}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2.5 rounded-xl border", section.bgColor, section.borderColor)}>
                                            <SectionIcon className={cn("w-6 h-6", section.color)} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-black text-white uppercase tracking-wider">{section.name}</h3>
                                            <p className="text-[9px] text-white/30 uppercase tracking-widest mt-0.5">
                                                {section.isCoolerDoor ? 'Cooler Doors' : 'Shelving Units'} · {section.defaultUnits} Units
                                            </p>
                                        </div>
                                    </div>
                                    {/* Health Dot */}
                                    <div className={cn(
                                        "w-3 h-3 rounded-full shadow-[0_0_12px]",
                                        health === 'green' ? "bg-accent-green shadow-accent-green/50" :
                                            health === 'orange' ? "bg-accent-orange shadow-accent-orange/50" :
                                                "bg-accent-red shadow-accent-red/50"
                                    )} />
                                </div>

                                {/* Section Type Badge */}
                                {section.isCoolerDoor && (
                                    <div className="flex items-center gap-1.5 px-2 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-md w-fit">
                                        <Beer className="w-3 h-3 text-accent-blue" />
                                        <span className="text-[8px] font-bold text-accent-blue uppercase tracking-widest">Cooler Door View</span>
                                    </div>
                                )}
                            </div>

                            {/* Stats Grid */}
                            <div className="flex-1 p-5 space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                                        <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Total SKUs</div>
                                        <div className="text-xl font-mono font-bold text-white">{stats.totalSKUs}</div>
                                    </div>
                                    <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                                        <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Daily Sales</div>
                                        <div className="text-xl font-mono font-bold text-white">{stats.totalDailySales}</div>
                                    </div>
                                    <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                                        <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Avg Margin</div>
                                        <div className="text-xl font-mono font-bold text-accent-green">{stats.avgMargin !== null ? `${stats.avgMargin}%` : '—'}</div>
                                    </div>
                                    <div className="bg-black/20 rounded-xl p-3 border border-white/5">
                                        <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Est. Shrink</div>
                                        <div className="text-xl font-mono font-bold text-accent-red">${stats.estShrink}</div>
                                    </div>
                                </div>

                                {/* Alerts Summary */}
                                {stats.alertCount > 0 && (
                                    <div className="flex items-center gap-2 px-3 py-2 bg-accent-red/5 border border-accent-red/10 rounded-lg">
                                        <AlertTriangle className="w-3.5 h-3.5 text-accent-red" />
                                        <span className="text-[9px] font-bold text-accent-red">
                                            {stats.criticalCount} Critical · {stats.lowCount} Low Stock
                                        </span>
                                    </div>
                                )}

                                {/* Product Category Breakdown */}
                                <div className="space-y-1.5">
                                    <div className="text-[8px] text-white/20 uppercase font-black tracking-widest">Categories</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[...new Set(sectionProducts.map(p => p.category))].slice(0, 6).map(cat => (
                                            <span key={cat} className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-bold text-white/40 border border-white/5">
                                                {cat}
                                            </span>
                                        ))}
                                        {[...new Set(sectionProducts.map(p => p.category))].length > 6 && (
                                            <span className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-bold text-white/30 border border-white/5">
                                                +{[...new Set(sectionProducts.map(p => p.category))].length - 6} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Click Prompt Footer */}
                            <div className={cn("px-5 py-3 border-t flex items-center justify-between", section.borderColor)}>
                                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">
                                    {section.defaultRows} shelves · {section.defaultCols} spots · {section.defaultUnits} units
                                </span>
                                <ChevronRight className={cn("w-4 h-4", section.color, "opacity-40")} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* ═══ HOVER DETAIL CARD ═══ */}
            <AnimatePresence>
                {hoveredSection && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        style={{
                            position: 'fixed',
                            left: hoverPos.x + 20,
                            top: hoverPos.y - 60,
                            zIndex: 100,
                            pointerEvents: 'none'
                        }}
                        className="w-56 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-3"
                    >
                        {(() => {
                            const section = SECTIONS.find(s => s.id === hoveredSection)!;
                            const sectionProducts = getSectionProducts(section.department, products);
                            const stats = getSectionStats(sectionProducts);
                            const health = getSectionHealth(sectionProducts);
                            return (
                                <>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={cn(
                                            "w-2 h-2 rounded-full shadow-[0_0_8px]",
                                            health === 'green' ? "bg-accent-green shadow-accent-green/50" :
                                                health === 'orange' ? "bg-accent-orange shadow-accent-orange/50" :
                                                    "bg-accent-red shadow-accent-red/50"
                                        )} />
                                        <span className="text-[10px] font-bold text-white uppercase">{section.name}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-left">
                                        <div>
                                            <div className="text-[8px] text-white/30 uppercase font-bold">SKUs</div>
                                            <div className="text-sm font-mono font-bold text-white">{stats.totalSKUs}</div>
                                        </div>
                                        <div>
                                            <div className="text-[8px] text-white/30 uppercase font-bold">Margin</div>
                                            <div className="text-sm font-mono font-bold text-accent-green">{stats.avgMargin !== null ? `${stats.avgMargin}%` : '—'}</div>
                                        </div>
                                        <div>
                                            <div className="text-[8px] text-white/30 uppercase font-bold">Sales/Day</div>
                                            <div className="text-sm font-mono font-bold text-white">{stats.totalDailySales}</div>
                                        </div>
                                        <div>
                                            <div className="text-[8px] text-white/30 uppercase font-bold">Alerts</div>
                                            <div className="text-sm font-mono font-bold text-accent-red">{stats.alertCount}</div>
                                        </div>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-white/5 text-[8px] text-white/20 uppercase font-bold tracking-widest">
                                        Click to drill in →
                                    </div>
                                </>
                            );
                        })()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AlcoholStoreView;
