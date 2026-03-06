import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
    Package,
    Plus,
    Minus,
    Eye,
    Maximize2,
    HelpCircle,
    LayoutGrid,
    Columns,
    Layers,
    Search,
    ZoomIn,
    ZoomOut,
    Wind,
    Shield,
    ChevronLeft,
    ChevronRight,
    X,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    BarChart3
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ShelfPlanogramViewProps {
    title: string;
    subtitle?: string;
    sectionCode?: string; // e.g. 'FRZ', 'BER', 'LIQ', 'WIN', 'CIG'
    products: Product[];
    rows?: number;
    cols?: number;
    units?: number;
    initialUnit?: number;
    isCoolerDoor?: boolean;
    onProductClick?: (product: Product) => void;
    onGridChange?: (rows: number, cols: number) => void;
    onMoveToTradersGuild?: (product: Product) => void;
}

const ShelfPlanogramView: React.FC<ShelfPlanogramViewProps> = ({
    title,
    subtitle,
    sectionCode = 'SEC',
    products,
    rows: initialRows = 5,
    cols: initialCols = 6,
    units: initialUnits = 10,
    initialUnit = 1,
    isCoolerDoor = false,
    onProductClick,
    onGridChange,
    onMoveToTradersGuild
}) => {
    const [rows, setRows] = useState(initialRows);
    const [cols, setCols] = useState(initialCols);
    const [units, setUnits] = useState(initialUnits);
    const [activeUnit, setActiveUnit] = useState(initialUnit);
    const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);
    const [hoveredCoordinate, setHoveredCoordinate] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedCoordinate, setSelectedCoordinate] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const gridRef = useRef<HTMLDivElement>(null);

    // Touch pinch-to-zoom
    const lastDistance = useRef<number | null>(null);
    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            lastDistance.current = Math.sqrt(dx * dx + dy * dy);
        }
    }, []);
    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (e.touches.length === 2 && lastDistance.current !== null) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const delta = dist - lastDistance.current;
            setScale(prev => Math.min(Math.max(0.3, prev + delta * 0.005), 3));
            lastDistance.current = dist;
        }
    }, []);
    const handleTouchEnd = useCallback(() => {
        lastDistance.current = null;
    }, []);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;
        el.addEventListener('touchstart', handleTouchStart, { passive: false });
        el.addEventListener('touchmove', handleTouchMove, { passive: false });
        el.addEventListener('touchend', handleTouchEnd);
        return () => {
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('touchmove', handleTouchMove);
            el.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

    // Drag & Drop state
    const [dragSource, setDragSource] = useState<string | null>(null); // slotId of source
    const [dragOverTarget, setDragOverTarget] = useState<string | null>(null); // slotId being hovered over
    const [slotOverrides, setSlotOverrides] = useState<Record<string, Product | null>>({});

    const handleWheel = (e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY;
            const newScale = Math.min(Math.max(0.4, scale - delta * 0.001), 2);
            setScale(newScale);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (hoveredProduct) {
            setMousePos({ x: e.clientX, y: e.clientY });
        }
    };

    const getSlotId = (row: number, col: number) => {
        // row is 1-indexed from bottom
        const letter = String.fromCharCode(64 + row);
        return `${letter}-${col}`;
    };

    const getFullCoordinate = (row: number, col: number) => {
        const letter = String.fromCharCode(64 + row);
        return `${sectionCode}-${activeUnit}-${letter}-${col}`;
    };

    // Products sliced per unit — each unit gets rows×cols products
    const slotsPerUnit = rows * cols;
    const unitProducts = products.slice((activeUnit - 1) * slotsPerUnit, activeUnit * slotsPerUnit);

    // Helper to find product at a specific slot — uses overrides first, then unit-local products
    const getProductAt = (row: number, col: number) => {
        const slotId = getSlotId(row, col);
        // Check for overrides first (drag & drop reassignments)
        if (slotId in slotOverrides) return slotOverrides[slotId] || undefined;
        // Then try matching by slotId or position
        const found = unitProducts.find(p => p.slotId === slotId || (p.row === row && p.slot === col));
        if (found) return found;
        // Fall back to sequential fill
        const seqIdx = (row - 1) * cols + (col - 1);
        return seqIdx < unitProducts.length ? unitProducts[seqIdx] : undefined;
    };

    // Drag handlers
    const handleDragStart = (slotId: string, product: Product | undefined) => {
        if (!product) return;
        setDragSource(slotId);
    };

    const handleDragOver = (e: React.DragEvent, slotId: string) => {
        e.preventDefault();
        setDragOverTarget(slotId);
    };

    const handleDragLeave = () => {
        setDragOverTarget(null);
    };

    const handleDrop = (targetSlotId: string, targetRow: number, targetCol: number) => {
        if (!dragSource || dragSource === targetSlotId) {
            setDragSource(null);
            setDragOverTarget(null);
            return;
        }

        // Parse source slot
        const sourceRow = dragSource.charCodeAt(0) - 64;
        const sourceCol = parseInt(dragSource.split('-')[1]);

        const sourceProduct = getProductAt(sourceRow, sourceCol);
        const targetProduct = getProductAt(targetRow, targetCol);

        // Swap: put source product in target slot, target product in source slot
        setSlotOverrides(prev => ({
            ...prev,
            [targetSlotId]: sourceProduct || null,
            [dragSource!]: targetProduct || null
        }));

        setDragSource(null);
        setDragOverTarget(null);
    };

    const handleDragEnd = () => {
        setDragSource(null);
        setDragOverTarget(null);
    };

    const handleAddRow = () => {
        const newRows = rows + 1;
        setRows(newRows);
        onGridChange?.(newRows, cols);
    };

    const handleRemoveRow = () => {
        if (rows > 1) {
            const newRows = rows - 1;
            setRows(newRows);
            onGridChange?.(newRows, cols);
        }
    };

    const handleAddCol = () => {
        const newCols = cols + 1;
        setCols(newCols);
        onGridChange?.(rows, newCols);
    };

    const handleRemoveCol = () => {
        if (cols > 1) {
            const newCols = cols - 1;
            setCols(newCols);
            onGridChange?.(rows, newCols);
        }
    };

    return (
        <div className="flex flex-col h-full bg-bg-primary rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            {/* Header */}
            <div className="px-3 sm:px-6 py-3 sm:py-4 border-b border-white/5 bg-white/2 shrink-0">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                        <div className="p-1.5 sm:p-2 bg-accent-green/10 rounded-lg shrink-0">
                            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest truncate">{title}</h2>
                            <div className="text-[9px] sm:text-[10px] text-white/40 font-medium truncate">{subtitle} • Unit {activeUnit} of {units} • {rows}×{cols}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        {/* Zoom Controls — always visible */}
                        <div className="flex items-center gap-1 bg-white/5 p-0.5 sm:p-1 rounded-lg border border-white/5">
                            <button
                                onClick={() => setScale(prev => Math.max(0.2, prev - 0.15))}
                                className="p-1 sm:p-1.5 hover:bg-white/10 rounded transition-colors text-white/40 hover:text-white"
                            >
                                <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                            <div className="text-[9px] sm:text-[10px] font-mono font-bold text-white/60 min-w-8 sm:min-w-12 text-center">
                                {Math.round(scale * 100)}%
                            </div>
                            <button
                                onClick={() => setScale(prev => Math.min(3, prev + 0.15))}
                                className="p-1 sm:p-1.5 hover:bg-white/10 rounded transition-colors text-white/40 hover:text-white"
                            >
                                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                        </div>

                        {isCoolerDoor && (
                            <div className="hidden sm:flex px-3 py-2 bg-accent-blue/10 rounded border border-accent-blue/20 items-center gap-2">
                                <Wind className="w-3.5 h-3.5 text-accent-blue" />
                                <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest leading-none">Cooler</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Management Controls — always visible */}
                <div className="mt-3 flex items-center justify-between sm:justify-start gap-2 sm:gap-6 bg-black/40 px-3 py-2 rounded-xl border border-white/5 shadow-inner">
                    <div className="flex flex-col items-center flex-1 sm:flex-none sm:pr-6 sm:border-r border-white/5">
                        <span className="text-[9px] font-black text-white/20 uppercase mb-1 tracking-widest">Units</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => { setUnits(prev => Math.max(1, prev - 1)); setActiveUnit(prev => Math.min(prev, Math.max(1, units - 1))); }} className="p-1 sm:p-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/5 text-white/40 hover:text-white transition-colors"><Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
                            <span className="text-xs sm:text-sm font-mono font-bold text-white w-5 sm:w-6 text-center">{units}</span>
                            <button onClick={() => setUnits(prev => prev + 1)} className="p-1 sm:p-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/5 text-white/40 hover:text-white transition-colors"><Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
                        </div>
                    </div>

                    {/* Divider for mobile */}
                    <div className="w-[1px] h-8 bg-white/5 sm:hidden" />

                    <div className="flex flex-col items-center flex-1 sm:flex-none sm:pr-6 sm:border-r border-white/5">
                        <span className="text-[9px] font-black text-white/20 uppercase mb-1 tracking-widest">Shelves</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setRows(prev => Math.max(1, prev - 1))} className="p-1 sm:p-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/5 text-white/40 hover:text-white transition-colors"><Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
                            <span className="text-xs sm:text-sm font-mono font-bold text-white w-4 sm:w-6 text-center">{rows}</span>
                            <button onClick={() => setRows(prev => prev + 1)} className="p-1 sm:p-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/5 text-white/40 hover:text-white transition-colors"><Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
                        </div>
                    </div>

                    {/* Divider for mobile */}
                    <div className="w-[1px] h-8 bg-white/5 sm:hidden" />

                    <div className="flex flex-col items-center flex-1 sm:flex-none">
                        <span className="text-[9px] font-black text-white/20 uppercase mb-1 tracking-widest">Spots</span>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setCols(prev => Math.max(1, prev - 1))} className="p-1 sm:p-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/5 text-white/40 hover:text-white transition-colors"><Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
                            <span className="text-xs sm:text-sm font-mono font-bold text-white w-4 sm:w-6 text-center">{cols}</span>
                            <button onClick={() => setCols(prev => Math.min(24, prev + 1))} className="p-1 sm:p-1.5 bg-white/5 hover:bg-white/10 rounded-md border border-white/5 text-white/40 hover:text-white transition-colors"><Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ UNIT NAVIGATION BAR ═══ */}
            <div className="px-6 py-2.5 border-b border-white/5 bg-black/30 flex items-center gap-3 shrink-0">
                <button
                    onClick={() => setActiveUnit(prev => Math.max(1, prev - 1))}
                    disabled={activeUnit <= 1}
                    className="p-1.5 hover:bg-white/5 rounded-lg border border-white/5 text-white/40 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 flex items-center gap-1 overflow-x-auto custom-scrollbar">
                    {Array.from({ length: units }).map((_, i) => {
                        const unitNum = i + 1;
                        return (
                            <button
                                key={unitNum}
                                onClick={() => setActiveUnit(unitNum)}
                                className={cn(
                                    "min-w-8 h-8 rounded-lg text-[10px] font-mono font-bold transition-all border",
                                    activeUnit === unitNum
                                        ? "bg-accent-green/20 text-accent-green border-accent-green/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                                        : "bg-white/2 text-white/30 border-white/5 hover:bg-white/5 hover:text-white/60"
                                )}
                            >
                                {unitNum}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={() => setActiveUnit(prev => Math.min(units, prev + 1))}
                    disabled={activeUnit >= units}
                    className="p-1.5 hover:bg-white/5 rounded-lg border border-white/5 text-white/40 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>

                <div className="text-[9px] font-mono text-white/20 pl-2 border-l border-white/5">
                    Unit {activeUnit}/{units}
                </div>
            </div>

            {/* Planogram Grid */}
            <div
                ref={gridRef}
                className="flex-1 p-2 sm:p-6 relative overflow-auto custom-scrollbar bg-black/20"
                onWheel={handleWheel}
                onMouseMove={handleMouseMove}
            >
                <div className="min-w-max min-h-full flex items-start sm:items-center justify-center sm:justify-center">
                    {/* Door Frame Wrapper (if cooler) */}
                    <div
                        style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
                        className={cn(
                            "relative p-8 transition-all duration-300 origin-top-left sm:origin-top",
                            isCoolerDoor && "border-16 border-[#1A1A1A] shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_0_100px_rgba(255,255,255,0.02)] bg-black/80 ring-2 ring-white/5",
                            !isCoolerDoor && "bg-bg-secondary border border-white/5 flex flex-col-reverse gap-4 shadow-2xl rounded-xl"
                        )}
                    >
                        {/* Cooler Glass Effects */}
                        {isCoolerDoor && (
                            <>
                                {/* Reflection layers - very subtle glass look */}
                                <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/10 pointer-events-none z-30" />
                                <div className="absolute inset-0 bg-linear-to-bl from-accent-blue/5 via-transparent to-transparent pointer-events-none z-30 opacity-40" />

                                {/* Diagonal reflection stripes */}
                                <div className="absolute top-0 left-[15%] w-px h-full bg-white/10 rotate-25 pointer-events-none z-30" />
                                <div className="absolute top-0 left-[18%] w-[2px] h-full bg-white/5 rotate-25 pointer-events-none z-30" />
                                <div className="absolute top-0 left-[60%] w-px h-full bg-white/5 rotate-25 pointer-events-none z-30" />

                                {/* Condensation/Frost effect at bottom corners */}
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl pointer-events-none z-30" />
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 blur-3xl pointer-events-none z-30" />

                                {/* Door Handle - Modern black/silver look */}
                                <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-4 h-48 bg-linear-to-b from-[#333] via-[#111] to-[#333] rounded-sm border border-white/10 shadow-[5px_0_15px_rgba(0,0,0,0.5)] z-40 flex flex-col items-center py-4">
                                    <div className="w-px h-full bg-white/5 rounded-full" />
                                </div>
                            </>
                        )}

                        {/* The Grid - Displayed from top to bottom (Row A is bottom) */}
                        <div className="flex flex-col-reverse gap-1.5 sm:gap-4">
                            {Array.from({ length: rows }).map((_, rIdx) => {
                                const rowNum = rIdx + 1; // 1-indexed from bottom
                                return (
                                    <div key={rowNum} className="flex gap-1 sm:gap-4">
                                        {/* Row Label */}
                                        <div className="w-4 sm:w-6 flex items-center justify-center text-[8px] sm:text-[10px] font-mono font-bold text-white/10 select-none shrink-0">
                                            {String.fromCharCode(64 + rowNum)}
                                        </div>

                                        <div className="flex gap-1 sm:gap-4">
                                            {Array.from({ length: cols }).map((_, cIdx) => {
                                                const colNum = cIdx + 1;
                                                const slotId = getSlotId(rowNum, colNum);
                                                const product = getProductAt(rowNum, colNum);

                                                return (
                                                    <div
                                                        key={slotId}
                                                        draggable={!!product}
                                                        onDragStart={() => handleDragStart(slotId, product)}
                                                        onDragOver={(e) => handleDragOver(e, slotId)}
                                                        onDragLeave={handleDragLeave}
                                                        onDrop={() => handleDrop(slotId, rowNum, colNum)}
                                                        onDragEnd={handleDragEnd}
                                                        onMouseEnter={(e) => {
                                                            if (product && !dragSource) {
                                                                setHoveredProduct(product);
                                                                setHoveredCoordinate(getFullCoordinate(rowNum, colNum));
                                                                setMousePos({ x: e.clientX, y: e.clientY });
                                                            }
                                                        }}
                                                        onMouseLeave={() => {
                                                            setHoveredProduct(null);
                                                            setHoveredCoordinate(null);
                                                        }}
                                                        onClick={() => {
                                                            if (product && !dragSource) {
                                                                setSelectedProduct(product);
                                                                setSelectedCoordinate(getFullCoordinate(rowNum, colNum));
                                                            }
                                                        }}
                                                        className={cn(
                                                            "w-14 h-20 sm:w-24 sm:h-32 rounded-md sm:rounded-lg border transition-all relative group flex flex-col",
                                                            product
                                                                ? cn(
                                                                    "bg-bg-secondary cursor-grab active:cursor-grabbing",
                                                                    product.status === 'Healthy' ? "border-accent-green/20 shadow-[inset_0_0_15px_rgba(16,185,129,0.05),0_0_15px_rgba(16,185,129,0.1)] hover:border-accent-green/50 hover:shadow-[inset_0_0_20px_rgba(16,185,129,0.1),0_0_20px_rgba(16,185,129,0.2)]" :
                                                                        product.status === 'Low' ? "border-accent-orange/30 shadow-[inset_0_0_15px_rgba(245,158,11,0.05),0_0_15px_rgba(245,158,11,0.1)] hover:border-accent-orange/50 hover:shadow-[inset_0_0_20px_rgba(245,158,11,0.1),0_0_20px_rgba(245,158,11,0.2)]" :
                                                                            "border-accent-red/40 shadow-[inset_0_0_15px_rgba(239,68,68,0.1),0_0_15px_rgba(239,68,68,0.2)] hover:border-accent-red/60 hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.15),0_0_20px_rgba(239,68,68,0.3)]"
                                                                )
                                                                : "bg-white/2 border-dashed border-white/5 flex items-center justify-center",
                                                            hoveredProduct?.slotId === slotId && "ring-2 ring-accent-green/50 z-10",
                                                            // Drag source styling
                                                            dragSource === slotId && "opacity-40 scale-95 ring-2 ring-accent-blue/50",
                                                            // Drop target styling
                                                            dragOverTarget === slotId && dragSource !== slotId && "ring-2 ring-accent-green border-accent-green/50 bg-accent-green/5 scale-[1.02]"
                                                        )}
                                                    >
                                                        {product ? (
                                                            <>
                                                                {/* Brand Header */}
                                                                <div className="px-1 sm:px-2 py-0.5 sm:py-1.5 border-b border-white/5 bg-white/2">
                                                                    <div className="text-[5px] sm:text-[7px] font-bold text-white/40 uppercase tracking-tighter truncate">
                                                                        {product.brand}
                                                                    </div>
                                                                </div>

                                                                {/* Product Image Placeholder */}
                                                                <div className="flex-1 flex items-center justify-center p-0.5 sm:p-2 relative">
                                                                    <Package className={cn(
                                                                        "w-4 h-4 sm:w-8 sm:h-8 transition-colors",
                                                                        product.status === 'Healthy' ? "text-accent-green/10 group-hover:text-accent-green/20" :
                                                                            product.status === 'Low' ? "text-accent-orange/10 group-hover:text-accent-orange/20" :
                                                                                "text-accent-red/10 group-hover:text-accent-red/20"
                                                                    )} />

                                                                    {/* QTY Badge */}
                                                                    <div className={cn(
                                                                        "absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 px-1 sm:px-1.5 rounded text-[5px] sm:text-[7px] font-bold border",
                                                                        product.status === 'Healthy' ? "bg-accent-green/20 text-accent-green border-accent-green/30" :
                                                                            product.status === 'Low' ? "bg-accent-orange/20 text-accent-orange border-accent-orange/30" :
                                                                                "bg-accent-red/20 text-accent-red border-accent-red/30"
                                                                    )}>
                                                                        {product.qty_on_hand} QTY
                                                                    </div>
                                                                </div>

                                                                {/* Details Footer */}
                                                                <div className="p-0.5 sm:p-2 space-y-0.5">
                                                                    <div className="text-[6px] sm:text-[9px] font-bold text-white leading-tight truncate">
                                                                        {product.name}
                                                                    </div>
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="text-[5px] sm:text-[7px] font-mono text-white/20 hidden sm:block">
                                                                            {getFullCoordinate(rowNum, colNum)}
                                                                        </div>
                                                                        <div className={cn(
                                                                            "w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shadow-[0_0_8px]",
                                                                            product.status === 'Healthy' ? "bg-accent-green shadow-accent-green/50" :
                                                                                product.status === 'Low' ? "bg-accent-orange shadow-accent-orange/50" :
                                                                                    "bg-accent-red shadow-accent-red/50"
                                                                        )} />
                                                                    </div>
                                                                </div>

                                                                {/* Selection Glow */}
                                                                {hoveredProduct?.id === product.id && (
                                                                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-green" />
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Plus className="w-4 h-4 text-white/10 group-hover:text-white/30" />
                                                        )}

                                                        {/* Slot ID Label - Full coordinate — hidden on tiny screens */}
                                                        <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 px-0.5 sm:px-1 bg-black/60 rounded text-[4px] sm:text-[7px] font-mono font-black text-white/30 uppercase tracking-tighter select-none border border-white/5 hidden sm:block">
                                                            {getFullCoordinate(rowNum, colNum)}
                                                        </div>

                                                        {/* Selection Glow */}
                                                        {hoveredProduct?.id === product?.id && product && (
                                                            <div className="absolute inset-0 bg-accent-green/5 ring-1 ring-accent-green/30 pointer-events-none" />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Legend */}
            <div className="px-6 py-3 border-t border-white/5 bg-white/1 flex items-center justify-between">
                <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">In Stock</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Low Stock</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Out of Stock</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-white/20">
                    <div className="flex items-center gap-1">
                        <LayoutGrid className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase">{rows}x{cols} Grid · Unit {activeUnit}</span>
                    </div>
                    {isCoolerDoor && (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-accent-blue/5 border border-accent-blue/20 rounded-md">
                            <Eye className="w-3 h-3 text-accent-blue" />
                            <span className="text-[9px] font-bold text-accent-blue uppercase">H-V View</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Hover Popout Card */}
            <AnimatePresence>
                {hoveredProduct && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        style={{
                            position: 'fixed',
                            left: mousePos.x + 20 + 256 > window.innerWidth ? mousePos.x - 256 - 20 : mousePos.x + 20,
                            top: Math.max(20, mousePos.y - 100),
                            zIndex: 100,
                            pointerEvents: 'none'
                        }}
                        className="w-64 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
                    >
                        <div className="flex items-start justify-between mb-3 text-left">
                            <div>
                                <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Product</p>
                                <h4 className="text-sm font-bold text-white">{hoveredProduct.name}</h4>
                            </div>
                            <div className={cn(
                                "px-2 py-0.5 rounded text-[9px] font-bold uppercase",
                                hoveredProduct.status === 'Healthy' ? "bg-accent-green/20 text-accent-green" :
                                    hoveredProduct.status === 'Low' ? "bg-accent-orange/20 text-accent-orange" :
                                        "bg-accent-red/20 text-accent-red"
                            )}>
                                {hoveredProduct.status === 'Healthy' ? 'In Stock' : hoveredProduct.status === 'Low' ? 'Low Stock' : 'Critical'}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-left">
                            <div>
                                <p className="text-[9px] text-white/40 uppercase font-bold mb-1">On-Hand</p>
                                <p className="text-lg font-mono font-medium text-white">{hoveredProduct.qty_on_hand}</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-white/40 uppercase font-bold mb-1">Daily Sales</p>
                                <p className="text-lg font-mono font-medium text-white">{hoveredProduct.dailySales}</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-white/40 uppercase font-bold mb-1">Sell-through</p>
                                <p className={cn(
                                    "text-lg font-mono font-medium",
                                    hoveredProduct.sellThrough > 80 ? "text-accent-green" : "text-white"
                                )}>{hoveredProduct.sellThrough}%</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-white/40 uppercase font-bold mb-1">Margin</p>
                                <p className="text-lg font-mono font-medium text-white">{hoveredProduct.retail_price}%</p>
                            </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-left">
                            <span className="text-[9px] text-white/30 uppercase font-bold">Full Coordinate</span>
                            <span className="text-[10px] font-mono font-bold text-accent-green-bright">{hoveredCoordinate || '?'}</span>
                        </div>

                        <div className="mt-2 text-center text-[8px] text-white/25 uppercase tracking-widest font-bold">
                            Click product for actions
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* ═══ RIGHT SLIDE-OUT PRODUCT PANEL ═══ */}

        </div >
    );
}
export default ShelfPlanogramView;
