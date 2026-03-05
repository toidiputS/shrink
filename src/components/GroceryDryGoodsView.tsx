import React, { useState, useMemo } from 'react';
import {
    ChevronLeft,
    AlertCircle,
    Package,
    TrendingDown,
    Shield,
    ChevronRight,
    Thermometer,
    Snowflake,
    ShoppingBag,
    Beef,
    Leaf,
    GlassWater,
    Droplets,
    Warehouse,
    X,
    Send,
    Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MOCK_GROCERY_PRODUCTS } from '../constants';
import { Product } from '../types';
import ShelfPlanogramView from './ShelfPlanogramView';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// ─── Segment Definitions ───────────────────────────────────────
interface Segment {
    id: string;
    name: string;
    category: string; // maps to Product.category substrings
    wall: 'top' | 'left' | 'right' | 'center';
    isCooler?: boolean;
    rows: number;
    cols: number;
}

const SEGMENTS: Segment[] = [
    // Perimeter walls
    { id: 'Milk', name: 'Milk', category: 'Milk', wall: 'top', isCooler: true, rows: 5, cols: 8 },
    { id: 'Dairy', name: 'Dairy', category: 'Dairy', wall: 'top', isCooler: true, rows: 5, cols: 8 },
    { id: 'Cheese', name: 'Cheese', category: 'Cheese', wall: 'top', isCooler: true, rows: 5, cols: 8 },
    { id: 'Frozen Foods', name: 'Frozen Foods', category: 'Frozen', wall: 'left', isCooler: true, rows: 6, cols: 8 },
    { id: 'Meats', name: 'Meats', category: 'Meats', wall: 'right', rows: 4, cols: 6 },
    { id: 'Fresh', name: 'Fresh', category: 'Fresh', wall: 'right', rows: 4, cols: 6 },
    { id: 'Soda Coolers', name: 'Soda Coolers', category: 'Soda Coolers', wall: 'right', isCooler: true, rows: 5, cols: 8 },
    // Center aisles — 3 gondolas, each double-sided (left | right)
    // Aisle 1: Drinks (L) | Dry Goods (R)
    { id: 'Drinks', name: 'Drinks', category: 'Drinks', wall: 'center', rows: 5, cols: 8 },
    { id: 'Dry Goods 1', name: 'Dry Goods', category: 'Dry Goods', wall: 'center', rows: 6, cols: 8 },
    // Aisle 2: Dry Goods (L) | Nonperishables (R)
    { id: 'Dry Goods 2', name: 'Dry Goods', category: 'Dry Goods', wall: 'center', rows: 6, cols: 8 },
    { id: 'Nonperishables 1', name: 'Nonperishables', category: 'Nonperishables', wall: 'center', rows: 6, cols: 8 },
    // Aisle 3: Nonperishables (L) | Nonperishables (R)
    { id: 'Nonperishables 2', name: 'Nonperishables', category: 'Nonperishables', wall: 'center', rows: 6, cols: 8 },
    { id: 'Nonperishables 3', name: 'Nonperishables', category: 'Nonperishables', wall: 'center', rows: 6, cols: 8 },
];

// ─── Helpers ───────────────────────────────────────────────────
function getSegmentProducts(segment: Segment): Product[] {
    return MOCK_GROCERY_PRODUCTS.filter(p =>
        p.category.toLowerCase().includes(segment.category.toLowerCase()) ||
        p.department.toLowerCase().includes(segment.category.toLowerCase())
    );
}

function getSegmentHealth(products: Product[]): { status: 'Healthy' | 'Low' | 'Critical'; color: string; bg: string; glow: string } {
    if (products.length === 0) return { status: 'Healthy', color: 'text-accent-green', bg: 'bg-accent-green', glow: 'shadow-accent-green/50' };
    const critCount = products.filter(p => p.status === 'Critical').length;
    const lowCount = products.filter(p => p.status === 'Low').length;
    const critRatio = critCount / products.length;
    const alertRatio = (critCount + lowCount) / products.length;

    if (critRatio > 0.15) return { status: 'Critical', color: 'text-accent-red', bg: 'bg-accent-red', glow: 'shadow-accent-red/50' };
    if (alertRatio > 0.3) return { status: 'Low', color: 'text-accent-orange', bg: 'bg-accent-orange', glow: 'shadow-accent-orange/50' };
    return { status: 'Healthy', color: 'text-accent-green', bg: 'bg-accent-green', glow: 'shadow-accent-green/50' };
}

function getSegmentStats(products: Product[]) {
    const totalSKUs = products.length;
    const oosCount = products.filter(p => p.onHand === 0).length;
    const lowCount = products.filter(p => p.status === 'Low').length;
    const critCount = products.filter(p => p.status === 'Critical').length;
    const shrinkRiskCount = products.filter(p => p.shrinkRisk === 'High').length;
    const avgMargin = products.length > 0 ? Math.round(products.reduce((a, p) => a + p.margin, 0) / products.length) : 0;
    const totalDailySales = products.reduce((a, p) => a + p.dailySales, 0);
    const estShrink = Math.round(critCount * 12.5 + shrinkRiskCount * 8.3);

    return { totalSKUs, oosCount, lowCount, critCount, shrinkRiskCount, avgMargin, totalDailySales, estShrink };
}

// ─── Component Props ───────────────────────────────────────────
interface GroceryDryGoodsViewProps {
    onProductClick?: (product: Product) => void;
    onMoveToTradersGuild?: (product: Product) => void;
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function GroceryDryGoodsView({ onProductClick, onMoveToTradersGuild }: GroceryDryGoodsViewProps) {
    const [activeSegment, setActiveSegment] = useState<Segment | null>(null);
    const [hoveredSegment, setHoveredSegment] = useState<Segment | null>(null);
    const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

    // Pre-compute all segment data
    const segmentDataMap = useMemo(() => {
        const map = new Map<string, { products: Product[]; health: ReturnType<typeof getSegmentHealth>; stats: ReturnType<typeof getSegmentStats> }>();
        SEGMENTS.forEach(seg => {
            const products = getSegmentProducts(seg);
            map.set(seg.id, {
                products,
                health: getSegmentHealth(products),
                stats: getSegmentStats(products),
            });
        });
        return map;
    }, []);

    const handleSegmentHover = (seg: Segment, e: React.MouseEvent) => {
        setHoveredSegment(seg);
        setHoverPos({ x: e.clientX, y: e.clientY });
    };

    const handleSegmentLeave = () => {
        setHoveredSegment(null);
    };

    const handleSegmentClick = (seg: Segment) => {
        setActiveSegment(seg);
    };

    // ─── SHELF DRILL-DOWN VIEW ─────────────────────────────────
    if (activeSegment) {
        const segData = segmentDataMap.get(activeSegment.id)!;
        return (
            <div className="flex flex-col h-full bg-bg-primary text-white overflow-hidden">
                {/* Back bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-bg-secondary/50 border-b border-white/5">
                    <button
                        onClick={() => setActiveSegment(null)}
                        className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white transition-colors group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Floor Map
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full shadow-[0_0_8px]", segData.health.bg, segData.health.glow)} />
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{activeSegment.name}</span>
                        </div>
                        <div className="text-[10px] text-white/30 font-mono">
                            {segData.stats.totalSKUs} SKUs · {segData.stats.oosCount} OOS · ${segData.stats.estShrink} est. shrink
                        </div>
                    </div>
                </div>

                {/* Shelf + Sidebar */}
                <div className="flex flex-col lg:flex-row flex-1 overflow-auto lg:overflow-hidden">
                    <div className="flex-1 overflow-hidden">
                        <ShelfPlanogramView
                            title={`${activeSegment.name} — Shelf View`}
                            subtitle={activeSegment.wall === 'center' ? 'Center Aisle Gondola' : `${activeSegment.wall === 'top' ? 'Back' : activeSegment.wall === 'left' ? 'Left' : 'Right'} Perimeter Wall`}
                            sectionCode="GRC"
                            products={segData.products}
                            rows={activeSegment.rows}
                            cols={activeSegment.cols}
                            onMoveToTradersGuild={onMoveToTradersGuild}
                            isCoolerDoor={activeSegment.isCooler || false}
                            onProductClick={(p) => onProductClick?.(p)}
                        />
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-full lg:w-72 border-t lg:border-t-0 lg:border-l border-white/5 bg-bg-secondary/30 overflow-y-auto custom-scrollbar p-4 space-y-4">
                        {/* Section Stats */}
                        <div className="bg-bg-secondary rounded-xl border border-white/5 overflow-hidden">
                            <div className="px-4 py-3 border-b border-white/5 bg-white/2">
                                <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Section Analytics</h3>
                            </div>
                            <div className="p-4 grid grid-cols-2 gap-3">
                                <StatCell label="Total SKUs" value={String(segData.stats.totalSKUs)} color="white" />
                                <StatCell label="Out of Stock" value={String(segData.stats.oosCount)} color={segData.stats.oosCount > 0 ? 'red' : 'green'} />
                                <StatCell label="Low Stock" value={String(segData.stats.lowCount)} color={segData.stats.lowCount > 3 ? 'orange' : 'green'} />
                                <StatCell label="High Shrink" value={String(segData.stats.shrinkRiskCount)} color={segData.stats.shrinkRiskCount > 2 ? 'red' : 'green'} />
                                <StatCell label="Avg Margin" value={`${segData.stats.avgMargin}%`} color="green" />
                                <StatCell label="Daily Sales" value={String(segData.stats.totalDailySales)} color="white" />
                            </div>
                        </div>

                        {/* Alerts */}
                        <div className="bg-bg-secondary rounded-xl border border-white/5 overflow-hidden">
                            <div className="px-4 py-3 border-b border-white/5 bg-white/2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="w-3.5 h-3.5 text-accent-red" />
                                    <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Alerts</h3>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-accent-red/20 flex items-center justify-center text-[9px] font-bold text-accent-red">
                                    {segData.stats.critCount + segData.stats.shrinkRiskCount}
                                </div>
                            </div>
                            <div className="divide-y divide-white/5">
                                {segData.stats.critCount > 0 && (
                                    <MiniAlert type="Critical Stock" desc={`${segData.stats.critCount} items need immediate restock`} severity="critical" />
                                )}
                                {segData.stats.shrinkRiskCount > 0 && (
                                    <MiniAlert type="Shrink Risk" desc={`${segData.stats.shrinkRiskCount} items flagged high risk`} severity="warning" />
                                )}
                                {segData.stats.oosCount > 0 && (
                                    <MiniAlert type="Out of Stock" desc={`${segData.stats.oosCount} empty facings`} severity="critical" />
                                )}
                                {segData.stats.critCount === 0 && segData.stats.shrinkRiskCount === 0 && segData.stats.oosCount === 0 && (
                                    <div className="p-4 text-center">
                                        <p className="text-[10px] text-white/30 uppercase tracking-widest">All clear — no active alerts</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Traders Guild Quick Action */}
                        <div className="bg-linear-to-br from-accent-gold/5 to-transparent rounded-xl border border-accent-gold/10 p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-accent-gold/10 rounded-lg border border-accent-gold/20">
                                    <Shield className="w-4 h-4 text-accent-gold" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-accent-gold">Traders Guild</h4>
                                    <p className="text-[10px] text-white/30">Trade overstock, reduce shrink</p>
                                </div>
                            </div>
                            <p className="text-[10px] text-white/40 leading-relaxed mb-3">
                                Click any product in the shelf view, then use "Send to Guild" to post it for local trade.
                            </p>
                            <div className="text-[9px] text-accent-gold/60 font-bold uppercase tracking-widest">
                                {segData.stats.lowCount + segData.stats.critCount} candidates in this section
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ─── FLOOR MAP VIEW (DEFAULT) ──────────────────────────────
    return (
        <div className="flex flex-col h-full bg-bg-primary text-white overflow-hidden">
            {/* Floor Map — Full Viewport */}
            <div className="flex-1 flex items-center justify-center p-2 sm:p-6 relative">
                {/* Store Layout Container */}
                <div className="relative w-full max-w-6xl aspect-square sm:aspect-16/10 select-none">
                    {/* Outer Store Border */}
                    <div className="absolute inset-0 border-2 border-white/10 rounded-lg bg-[#0D0D0D] overflow-hidden">

                        {/* ═══ TOP WALL — Milk | Dairy | Cheese ═══ */}
                        <div className="absolute top-0 left-0 right-[80px] sm:right-[120px] h-[15%] flex border-b-2 border-white/10">
                            {(['Milk', 'Dairy', 'Cheese'] as const).map((id) => {
                                const seg = SEGMENTS.find(s => s.id === id)!;
                                const data = segmentDataMap.get(id)!;
                                return (
                                    <FloorSection
                                        key={id}
                                        segment={seg}
                                        data={data}
                                        className="flex-1 border-r border-white/10 last:border-r-0"
                                        onHover={handleSegmentHover}
                                        onLeave={handleSegmentLeave}
                                        onClick={handleSegmentClick}
                                    />
                                );
                            })}
                        </div>

                        {/* ═══ LEFT WALL — Frozen Foods ═══ */}
                        <div className="absolute top-[15%] left-0 bottom-0 w-[10%] border-r-2 border-white/10">
                            {(() => {
                                const seg = SEGMENTS.find(s => s.id === 'Frozen Foods')!;
                                const data = segmentDataMap.get('Frozen Foods')!;
                                return (
                                    <FloorSection
                                        segment={seg}
                                        data={data}
                                        className="h-full"
                                        vertical
                                        onHover={handleSegmentHover}
                                        onLeave={handleSegmentLeave}
                                        onClick={handleSegmentClick}
                                    />
                                );
                            })()}
                        </div>

                        {/* ═══ RIGHT WALL — Meats | Fresh | Soda Coolers ═══ */}
                        <div className="absolute top-0 right-0 bottom-0 w-[80px] sm:w-[120px] border-l-2 border-white/10 flex flex-col">
                            {(['Meats', 'Fresh', 'Soda Coolers'] as const).map((id) => {
                                const seg = SEGMENTS.find(s => s.id === id)!;
                                const data = segmentDataMap.get(id)!;
                                return (
                                    <FloorSection
                                        key={id}
                                        segment={seg}
                                        data={data}
                                        className="flex-1 border-b border-white/10 last:border-b-0"
                                        vertical
                                        onHover={handleSegmentHover}
                                        onLeave={handleSegmentLeave}
                                        onClick={handleSegmentClick}
                                    />
                                );
                            })}
                        </div>

                        {/* ═══ CENTER AISLES ═══ */}
                        <div className="absolute top-[15%] left-[10%] right-[80px] sm:right-[120px] bottom-0 flex flex-col justify-center">
                            {/* Walkway label */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                                <span className="text-6xl font-black uppercase tracking-[0.5em]">FLOOR</span>
                            </div>

                            {/* Aisle Gondolas — 3 aisles, each with left|right side */}
                            <div className="flex items-stretch justify-center gap-[4%] px-[4%] py-[3%] h-full">

                                {/* ═══ AISLE 1: Drinks | Dry Goods ═══ */}
                                <div className="flex-1 flex gap-0.5 min-w-0">
                                    {(() => {
                                        const seg = SEGMENTS.find(s => s.id === 'Drinks')!;
                                        const data = segmentDataMap.get('Drinks')!;
                                        return (
                                            <FloorSection
                                                segment={seg}
                                                data={data}
                                                className="flex-1"
                                                vertical
                                                gondola
                                                onHover={handleSegmentHover}
                                                onLeave={handleSegmentLeave}
                                                onClick={handleSegmentClick}
                                            />
                                        );
                                    })()}
                                    {(() => {
                                        const seg = SEGMENTS.find(s => s.id === 'Dry Goods 1')!;
                                        const data = segmentDataMap.get('Dry Goods 1')!;
                                        return (
                                            <FloorSection
                                                segment={seg}
                                                data={data}
                                                className="flex-1"
                                                vertical
                                                gondola
                                                onHover={handleSegmentHover}
                                                onLeave={handleSegmentLeave}
                                                onClick={handleSegmentClick}
                                            />
                                        );
                                    })()}
                                </div>

                                {/* ═══ AISLE 2: Dry Goods | Nonperishables ═══ */}
                                <div className="flex-1 flex gap-0.5 min-w-0">
                                    {(() => {
                                        const seg = SEGMENTS.find(s => s.id === 'Dry Goods 2')!;
                                        const data = segmentDataMap.get('Dry Goods 2')!;
                                        return (
                                            <FloorSection
                                                segment={seg}
                                                data={data}
                                                className="flex-1"
                                                vertical
                                                gondola
                                                onHover={handleSegmentHover}
                                                onLeave={handleSegmentLeave}
                                                onClick={handleSegmentClick}
                                            />
                                        );
                                    })()}
                                    {(() => {
                                        const seg = SEGMENTS.find(s => s.id === 'Nonperishables 1')!;
                                        const data = segmentDataMap.get('Nonperishables 1')!;
                                        return (
                                            <FloorSection
                                                segment={seg}
                                                data={data}
                                                className="flex-1"
                                                vertical
                                                gondola
                                                onHover={handleSegmentHover}
                                                onLeave={handleSegmentLeave}
                                                onClick={handleSegmentClick}
                                            />
                                        );
                                    })()}
                                </div>

                                {/* ═══ AISLE 3: Nonperishables | Nonperishables ═══ */}
                                <div className="flex-1 flex gap-0.5 min-w-0">
                                    {(() => {
                                        const seg = SEGMENTS.find(s => s.id === 'Nonperishables 2')!;
                                        const data = segmentDataMap.get('Nonperishables 2')!;
                                        return (
                                            <FloorSection
                                                segment={seg}
                                                data={data}
                                                className="flex-1"
                                                vertical
                                                gondola
                                                onHover={handleSegmentHover}
                                                onLeave={handleSegmentLeave}
                                                onClick={handleSegmentClick}
                                            />
                                        );
                                    })()}
                                    {(() => {
                                        const seg = SEGMENTS.find(s => s.id === 'Nonperishables 3')!;
                                        const data = segmentDataMap.get('Nonperishables 3')!;
                                        return (
                                            <FloorSection
                                                segment={seg}
                                                data={data}
                                                className="flex-1"
                                                vertical
                                                gondola
                                                onHover={handleSegmentHover}
                                                onLeave={handleSegmentLeave}
                                                onClick={handleSegmentClick}
                                            />
                                        );
                                    })()}
                                </div>

                            </div>
                        </div>

                        {/* Corner Label */}
                        <div className="absolute bottom-3 left-3 text-[9px] font-mono text-white/10 uppercase tracking-widest">
                            Store Floor · Topical View
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Detail Card */}
            <AnimatePresence>
                {hoveredSegment && (
                    <HoverDetailCard
                        segment={hoveredSegment}
                        data={segmentDataMap.get(hoveredSegment.id)!}
                        position={hoverPos}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════
// FLOOR SECTION BLOCK
// ═══════════════════════════════════════════════════════════════
interface FloorSectionProps {
    segment: Segment;
    data: { products: Product[]; health: ReturnType<typeof getSegmentHealth>; stats: ReturnType<typeof getSegmentStats> };
    className?: string;
    vertical?: boolean;
    gondola?: boolean;
    onHover: (seg: Segment, e: React.MouseEvent) => void;
    onLeave: () => void;
    onClick: (seg: Segment) => void;
}

const FloorSection: React.FC<FloorSectionProps> = ({ segment, data, className, vertical, gondola, onHover, onLeave, onClick }) => {
    const { health, stats } = data;

    return (
        <motion.div
            onMouseEnter={(e) => onHover(segment, e)}
            onMouseMove={(e) => onHover(segment, e)}
            onMouseLeave={onLeave}
            onClick={() => onClick(segment)}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative cursor-pointer transition-all duration-200 group overflow-hidden",
                gondola
                    ? "bg-white/4 border border-white/8 rounded-md hover:border-accent-green/30 hover:bg-white/7"
                    : "bg-white/2 hover:bg-white/6",
                className
            )}
        >
            {/* Health glow - bottom bar */}
            <div className={cn(
                "absolute bottom-0 left-0 right-0 h-[3px] opacity-60 transition-opacity group-hover:opacity-100",
                health.bg
            )} />

            {/* Content */}
            <div className={cn(
                "absolute inset-0 flex flex-col items-center justify-center p-2 gap-1",
                vertical && "writing-mode-vertical"
            )}>
                {/* Section Name */}
                <span className={cn(
                    "font-black uppercase tracking-[0.15em] text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight",
                    gondola ? "text-[10px]" : "text-[11px]",
                    vertical && !gondola && "[writing-mode:vertical-lr] rotate-180"
                )}>
                    {segment.name}
                </span>

                {/* Quick Stats Row */}
                <div className={cn(
                    "flex items-center gap-2 mt-1",
                    vertical && !gondola && "flex-col [writing-mode:horizontal-tb]"
                )}>
                    {/* Health dot */}
                    <div className={cn(
                        "w-2 h-2 rounded-full shadow-[0_0_6px] transition-all group-hover:shadow-[0_0_12px]",
                        health.bg, health.glow
                    )} />

                    {/* SKU count */}
                    <span className="text-[9px] font-mono font-bold text-white/25 group-hover:text-white/50 transition-colors">
                        {stats.totalSKUs}
                    </span>

                    {/* Alert indicator */}
                    {(stats.critCount > 0 || stats.oosCount > 0) && (
                        <span className="text-[8px] font-bold text-accent-red/70 animate-pulse">
                            !{stats.critCount + stats.oosCount}
                        </span>
                    )}
                </div>

                {/* Shrink risk badge */}
                {stats.shrinkRiskCount > 0 && (
                    <div className="mt-0.5 px-1.5 py-0.5 bg-accent-orange/10 rounded text-[7px] font-bold text-accent-orange uppercase tracking-wider border border-accent-orange/20">
                        {stats.shrinkRiskCount} shrink
                    </div>
                )}
            </div>

            {/* Hover highlight border */}
            <div className="absolute inset-0 border-2 border-accent-green/0 group-hover:border-accent-green/20 transition-all rounded-sm pointer-events-none" />
        </motion.div>
    );
};

// ═══════════════════════════════════════════════════════════════
// HOVER DETAIL CARD
// ═══════════════════════════════════════════════════════════════
interface HoverDetailCardProps {
    segment: Segment;
    data: { products: Product[]; health: ReturnType<typeof getSegmentHealth>; stats: ReturnType<typeof getSegmentStats> };
    position: { x: number; y: number };
}

const HoverDetailCard: React.FC<HoverDetailCardProps> = ({ segment, data, position }) => {
    const { health, stats } = data;

    // Keep card within viewport
    const left = Math.min(position.x + 20, window.innerWidth - 320);
    const top = Math.min(position.y - 40, window.innerHeight - 280);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15 }}
            style={{ position: 'fixed', left, top, zIndex: 100, pointerEvents: 'none' }}
            className="w-72 bg-[#181818] border border-white/10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/2">
                <div className="flex items-center gap-2">
                    <div className={cn("w-2.5 h-2.5 rounded-full shadow-[0_0_10px]", health.bg, health.glow)} />
                    <h4 className="text-sm font-bold text-white tracking-tight">{segment.name}</h4>
                </div>
                <span className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
                    health.status === 'Healthy' ? "bg-accent-green/15 text-accent-green" :
                        health.status === 'Low' ? "bg-accent-orange/15 text-accent-orange" :
                            "bg-accent-red/15 text-accent-red"
                )}>
                    {health.status}
                </span>
            </div>

            {/* Stats Grid */}
            <div className="p-4 grid grid-cols-2 gap-3">
                <div>
                    <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Total SKUs</div>
                    <div className="text-lg font-mono font-bold text-white">{stats.totalSKUs}</div>
                </div>
                <div>
                    <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Daily Sales</div>
                    <div className="text-lg font-mono font-bold text-white">{stats.totalDailySales}</div>
                </div>
                <div>
                    <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Avg Margin</div>
                    <div className="text-lg font-mono font-bold text-accent-green">{stats.avgMargin}%</div>
                </div>
                <div>
                    <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">Est. Shrink</div>
                    <div className={cn(
                        "text-lg font-mono font-bold",
                        stats.estShrink > 50 ? "text-accent-red" : stats.estShrink > 20 ? "text-accent-orange" : "text-accent-green"
                    )}>${stats.estShrink}</div>
                </div>
            </div>

            {/* Alert Summary */}
            {(stats.critCount > 0 || stats.oosCount > 0 || stats.shrinkRiskCount > 0) && (
                <div className="px-4 pb-3 flex flex-wrap gap-2">
                    {stats.oosCount > 0 && (
                        <span className="px-2 py-0.5 bg-accent-red/10 text-accent-red text-[8px] font-bold rounded border border-accent-red/20 uppercase">
                            {stats.oosCount} OOS
                        </span>
                    )}
                    {stats.critCount > 0 && (
                        <span className="px-2 py-0.5 bg-accent-orange/10 text-accent-orange text-[8px] font-bold rounded border border-accent-orange/20 uppercase">
                            {stats.critCount} Critical
                        </span>
                    )}
                    {stats.shrinkRiskCount > 0 && (
                        <span className="px-2 py-0.5 bg-accent-red/10 text-accent-red text-[8px] font-bold rounded border border-accent-red/20 uppercase">
                            {stats.shrinkRiskCount} Shrink Risk
                        </span>
                    )}
                </div>
            )}

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/1">
                <span className="text-[9px] text-accent-green/60 font-bold uppercase tracking-widest">Click to view shelf →</span>
            </div>
        </motion.div>
    );
};

// ═══════════════════════════════════════════════════════════════
// SMALL HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════
const StatCell: React.FC<{ label: string; value: string; color: 'white' | 'green' | 'orange' | 'red' }> = ({ label, value, color }) => {
    const colorMap = { white: 'text-white', green: 'text-accent-green', orange: 'text-accent-orange', red: 'text-accent-red' };
    return (
        <div className="bg-white/3 rounded-lg p-2.5 border border-white/5">
            <div className="text-[8px] text-white/30 uppercase font-black tracking-widest mb-1">{label}</div>
            <div className={cn("text-sm font-mono font-bold", colorMap[color])}>{value}</div>
        </div>
    );
};

const MiniAlert: React.FC<{ type: string; desc: string; severity: 'critical' | 'warning' }> = ({ type, desc, severity }) => (
    <div className="p-3 hover:bg-white/2 transition-colors cursor-pointer">
        <div className="flex items-start gap-2">
            <div className={cn(
                "w-1.5 h-1.5 rounded-full mt-1 shrink-0 shadow-[0_0_6px]",
                severity === 'critical' ? "bg-accent-red shadow-accent-red/50 animate-pulse" : "bg-accent-orange shadow-accent-orange/50"
            )} />
            <div>
                <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.15em] mb-0.5">{type}</div>
                <p className="text-[10px] text-white/60 leading-snug">{desc}</p>
            </div>
        </div>
    </div>
);
