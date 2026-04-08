import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Camera,
    X,
    Barcode,
    QrCode,
    ScanLine,
    AlertCircle,
    CheckCircle,
    TrendingUp,
    AlertTriangle,
    RefreshCw,
    Flashlight,
    Image
} from 'lucide-react';
import { Product } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { askAdvisor, type ChatMessage } from '../services/aiAdvisor';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CodeScannerProps {
    isOpen: boolean;
    onClose: () => void;
    products: Product[];
    onProductFound?: (product: Product) => void;
    scanMode?: 'product' | 'build';
}

interface ScanResult {
    code: string;
    product: Product | null;
    timestamp: Date;
    aiAnalysis?: string;
}

type ScanState = 'idle' | 'scanning' | 'found' | 'error' | 'analyzing';

const CodeScanner: React.FC<CodeScannerProps> = ({
    isOpen,
    onClose,
    products,
    onProductFound,
    scanMode = 'product'
}) => {
    const [scanState, setScanState] = useState<ScanState>('idle');
    const [scanResult, setScanResult] = useState<ScanResult | null>(null);
    const [manualCode, setManualCode] = useState('');
    const [cameraError, setCameraError] = useState<string | null>(null);
    const [flashOn, setFlashOn] = useState(false);
    const [scanHistory, setScanHistory] = useState<ScanResult[]>([]);
    const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const scanIntervalRef = useRef<number | null>(null);

    // Simulated barcode detection (in production, use a library like @ericblade/quagga2 or barcode-detector)
    const simulateScan = useCallback(() => {
        if (scanState !== 'scanning') return;

        // Simulate finding a random product after a delay
        const delay = 2000 + Math.random() * 3000;

        const timeout = setTimeout(() => {
            if (scanState !== 'scanning') return;

            // Pick a random product to "scan"
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            if (randomProduct) {
                handleCodeDetected(randomProduct.sku);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [scanState, products]);

    const startCamera = async () => {
        try {
            setCameraError(null);
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setScanState('scanning');

            // Start simulated scanning
            simulateScan();
        } catch (err) {
            console.error('Camera access error:', err);
            setCameraError('Camera access denied. Please use manual entry.');
            setScanState('error');
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        if (scanIntervalRef.current) {
            window.clearInterval(scanIntervalRef.current);
            scanIntervalRef.current = null;
        }
    };

    const handleOpen = () => {
        if (isOpen) {
            startCamera();
        }
    };

    const handleClose = () => {
        stopCamera();
        setScanState('idle');
        setScanResult(null);
        setManualCode('');
        setAiAnalysis(null);
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            handleOpen();
        } else {
            handleClose();
        }
        return () => stopCamera();
    }, [isOpen]);

    const handleCodeDetected = async (code: string) => {
        setScanState('found');
        stopCamera();

        // Find product by SKU
        const product = products.find(p =>
            p.sku.toLowerCase() === code.toLowerCase() ||
            p.sku.includes(code) ||
            code.includes(p.sku)
        );

        const result: ScanResult = {
            code,
            product: product || null,
            timestamp: new Date()
        };

        setScanResult(result);
        setScanHistory(prev => [result, ...prev].slice(0, 10));

        if (product && onProductFound) {
            onProductFound(product);
        }

        // Run AI analysis if product found
        if (product) {
            runAIAnalysis(product);
        }
    };

    const runAIAnalysis = async (product: Product) => {
        setIsAnalyzing(true);
        try {
            const messages: ChatMessage[] = [
                {
                    role: 'user',
                    content: `Analyze this product for shrink risk and optimization opportunities:

Product: ${product.name}
SKU: ${product.sku}
Category: ${product.category}
Current Stock: ${product.qty_on_hand}
Min Stock: ${product.qty_min_stock}
Cost: $${product.unit_cost.toFixed(2)}
Price: $${product.retail_price.toFixed(2)}
Status: ${product.status}
Shrink Risk: ${product.shrinkRisk || 'N/A'}

Provide a concise analysis with:
1. Shrink risk assessment
2. Restock recommendations
3. Pricing/margin insights
4. Action items`
                }
            ];

            // Get inventory data for context
            const inventoryData = [{
                id: product.category as any,
                title: product.category,
                restockPriority: 'Medium' as const,
                products: [product],
                stats: {
                    totalInventory: product.qty_on_hand,
                    dailyRestock: 0,
                    netMargin: product.margin || 0,
                    compliance: 85
                }
            }];

            const analysis = await askAdvisor(messages, inventoryData);
            setAiAnalysis(analysis);
        } catch (error) {
            console.error('AI Analysis error:', error);
            setAiAnalysis('AI analysis unavailable. Please check your API configuration.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleManualEntry = () => {
        if (manualCode.trim()) {
            handleCodeDetected(manualCode.trim());
        }
    };

    const handleRescan = () => {
        setScanState('scanning');
        setScanResult(null);
        setAiAnalysis(null);
        startCamera();
    };

    const toggleFlash = async () => {
        if (streamRef.current) {
            const track = streamRef.current.getVideoTracks()[0];
            try {
                const constraints: MediaTrackConstraints = {
                    advanced: [{ ...(track.getConstraints() as any).advanced?.[0] || {}, torch: !flashOn } as any]
                };
                await track.applyConstraints(constraints);
                setFlashOn(!flashOn);
            } catch (e) {
                console.error('Flash toggle error:', e);
            }
        }
    };

    const runBuildScan = async () => {
        setScanState('analyzing');
        setIsAnalyzing(true);

        try {
            const messages: ChatMessage[] = [
                {
                    role: 'user',
                    content: `Run a complete BUILD SCAN analysis on the entire inventory. Analyze all ${products.length} products for:

1. Overall shrink risk across all categories
2. Top 10 products by shrink risk
3. Dead stock identification
4. Margin erosion patterns
5. Compliance gaps
6. Immediate action items

Provide a comprehensive report with scores and prioritized recommendations.`
                }
            ];

            // Group products by category for analysis
            const categoryMap = new Map<string, Product[]>();
            products.forEach(p => {
                const cat = p.category || 'Other';
                if (!categoryMap.has(cat)) categoryMap.set(cat, []);
                categoryMap.get(cat)!.push(p);
            });

            const inventoryData = Array.from(categoryMap.entries()).map(([category, prods]) => ({
                id: category as any,
                title: category,
                restockPriority: 'Medium' as const,
                products: prods,
                stats: {
                    totalInventory: prods.reduce((sum, p) => sum + p.qty_on_hand, 0),
                    dailyRestock: 0,
                    netMargin: prods.reduce((sum, p) => sum + (p.margin || 0), 0) / prods.length,
                    compliance: 85
                }
            }));

            const analysis = await askAdvisor(messages, inventoryData);
            setAiAnalysis(analysis);
            setScanState('found');
        } catch (error) {
            console.error('Build Scan error:', error);
            setAiAnalysis('Build scan failed. Please check your API configuration.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/90 z-50"
                    />

                    {/* Scanner Modal */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed inset-0 z-50 flex flex-col bg-[#111]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                {scanMode === 'product' ? (
                                    <>
                                        <ScanLine className="w-5 h-5 text-accent-green" />
                                        <div>
                                            <h2 className="text-sm font-bold text-white">Code Scanner</h2>
                                            <p className="text-[10px] text-white/40">Scan barcodes & QR codes</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className={cn("w-5 h-5", isAnalyzing && "animate-spin", "text-accent-green")} />
                                        <div>
                                            <h2 className="text-sm font-bold text-white">Build Scanner</h2>
                                            <p className="text-[10px] text-white/40">Full inventory analysis</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                {scanState === 'scanning' && (
                                    <button
                                        onClick={toggleFlash}
                                        className={cn(
                                            "p-2 rounded-lg transition-colors",
                                            flashOn ? "bg-accent-green/20 text-accent-green" : "bg-white/5 text-white/60 hover:text-white"
                                        )}
                                    >
                                        <Flashlight className="w-4 h-4" />
                                    </button>
                                )}
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-white/60" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {scanMode === 'build' ? (
                                // Build Scan Mode
                                <div className="flex-1 flex flex-col items-center justify-center p-6">
                                    {scanState === 'idle' || scanState === 'analyzing' ? (
                                        <div className="text-center max-w-md">
                                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-green/10 flex items-center justify-center">
                                                <RefreshCw className={cn("w-10 h-10 text-accent-green", isAnalyzing && "animate-spin")} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">Full Inventory Scan</h3>
                                            <p className="text-white/60 mb-6">
                                                AI-powered analysis of all {products.length} products across all categories.
                                                Identifies shrink risks, dead stock, and optimization opportunities.
                                            </p>
                                            {scanState === 'idle' ? (
                                                <button
                                                    onClick={runBuildScan}
                                                    disabled={isAnalyzing}
                                                    className="px-6 py-3 bg-accent-green hover:bg-accent-green-bright text-[#111] rounded-xl font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-50"
                                                >
                                                    Start Build Scan
                                                </button>
                                            ) : (
                                                <div className="text-accent-green text-sm">
                                                    Analyzing inventory... This may take a moment.
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        // Build Scan Results
                                        <div className="w-full max-w-2xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <CheckCircle className="w-5 h-5 text-accent-green" />
                                                <h3 className="text-lg font-bold text-white">Build Scan Complete</h3>
                                            </div>
                                            {aiAnalysis ? (
                                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                                    <div className="prose prose-invert prose-sm max-w-none">
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: aiAnalysis
                                                                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                                                .replace(/\n/g, '<br/>')
                                                        }} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-accent-green/10 rounded-xl p-4 border border-accent-green/20">
                                                    <p className="text-accent-green text-sm">
                                                        Scan complete. AI analysis generated.
                                                    </p>
                                                </div>
                                            )}
                                            <div className="mt-4 flex gap-3">
                                                <button
                                                    onClick={handleRescan}
                                                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                                                >
                                                    <RefreshCw className="w-4 h-4" />
                                                    Re-scan
                                                </button>
                                                <button
                                                    onClick={handleClose}
                                                    className="flex-1 py-3 bg-accent-green hover:bg-accent-green-bright text-[#111] rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
                                                >
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Product Scan Mode
                                <>
                                    {/* Camera View */}
                                    {scanState === 'scanning' && !cameraError && (
                                        <div className="flex-1 relative flex items-center justify-center bg-black">
                                            <video
                                                ref={videoRef}
                                                autoPlay
                                                playsInline
                                                muted
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <canvas ref={canvasRef} className="hidden" />

                                            {/* Scan Overlay */}
                                            <div className="relative z-10 w-64 h-64 border-2 border-accent-green/50 rounded-2xl">
                                                {/* Corner markers */}
                                                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-accent-green rounded-tl-lg" />
                                                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-accent-green rounded-tr-lg" />
                                                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-accent-green rounded-bl-lg" />
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-accent-green rounded-br-lg" />

                                                {/* Scan line animation */}
                                                <motion.div
                                                    className="absolute left-0 right-0 h-0.5 bg-accent-green shadow-[0_0_20px_rgba(34,197,94,0.8)]"
                                                    animate={{ top: ['10%', '90%', '10%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                                />

                                                {/* Center text */}
                                                <div className="absolute -bottom-8 left-0 right-0 text-center">
                                                    <p className="text-xs text-white/60">Align barcode within frame</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Camera Error */}
                                    {cameraError && (
                                        <div className="flex-1 flex flex-col items-center justify-center p-6">
                                            <AlertCircle className="w-12 h-12 text-accent-orange mb-4" />
                                            <h3 className="text-lg font-bold text-white mb-2">Camera Unavailable</h3>
                                            <p className="text-white/60 text-center mb-6">{cameraError}</p>
                                        </div>
                                    )}

                                    {/* Found State */}
                                    {scanState === 'found' && scanResult && (
                                        <div className="flex-1 overflow-y-auto p-4">
                                            {scanResult.product ? (
                                                <div className="space-y-4">
                                                    {/* Product Found Card */}
                                                    <div className="bg-accent-green/10 border border-accent-green/20 rounded-xl p-4">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <CheckCircle className="w-4 h-4 text-accent-green" />
                                                                    <span className="text-xs text-accent-green font-bold uppercase tracking-widest">Product Found</span>
                                                                </div>
                                                                <h3 className="text-lg font-bold text-white">{scanResult.product.name}</h3>
                                                                <p className="text-sm text-white/60 mt-1">SKU: {scanResult.product.sku}</p>
                                                            </div>
                                                            <div className={cn(
                                                                "px-3 py-1 rounded-full text-xs font-bold",
                                                                scanResult.product.status === 'Critical' ? 'bg-accent-red/20 text-accent-red' :
                                                                    scanResult.product.status === 'Low' ? 'bg-accent-orange/20 text-accent-orange' :
                                                                        'bg-accent-green/20 text-accent-green'
                                                            )}>
                                                                {scanResult.product.status}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Quick Stats */}
                                                    <div className="grid grid-cols-3 gap-3">
                                                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                                            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Stock</p>
                                                            <p className="text-lg font-mono font-bold text-white">{scanResult.product.qty_on_hand}</p>
                                                        </div>
                                                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                                            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Price</p>
                                                            <p className="text-lg font-mono font-bold text-white">${scanResult.product.retail_price.toFixed(2)}</p>
                                                        </div>
                                                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                                            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Margin</p>
                                                            <p className="text-lg font-mono font-bold text-accent-green">{scanResult.product.margin?.toFixed(1) || 'N/A'}%</p>
                                                        </div>
                                                    </div>

                                                    {/* Shrink Risk */}
                                                    {scanResult.product.shrinkRisk && (
                                                        <div className={cn(
                                                            "rounded-xl p-4 border",
                                                            scanResult.product.shrinkRisk === 'High' ? 'bg-accent-red/10 border-accent-red/20' :
                                                                scanResult.product.shrinkRisk === 'Watch' ? 'bg-accent-orange/10 border-accent-orange/20' :
                                                                    'bg-accent-green/10 border-accent-green/20'
                                                        )}>
                                                            <div className="flex items-center gap-2 mb-2">
                                                                {scanResult.product.shrinkRisk === 'High' ? (
                                                                    <AlertTriangle className="w-4 h-4 text-accent-red" />
                                                                ) : (
                                                                    <CheckCircle className="w-4 h-4 text-accent-green" />
                                                                )}
                                                                <span className={cn(
                                                                    "text-xs font-bold uppercase tracking-widest",
                                                                    scanResult.product.shrinkRisk === 'High' ? 'text-accent-red' :
                                                                        scanResult.product.shrinkRisk === 'Watch' ? 'text-accent-orange' :
                                                                            'text-accent-green'
                                                                )}>
                                                                    Shrink Risk: {scanResult.product.shrinkRisk}
                                                                </span>
                                                            </div>
                                                            <p className="text-sm text-white/70">
                                                                {scanResult.product.shrinkRisk === 'High' && 'This product has high shrink risk. Monitor closely and consider additional security measures.'}
                                                                {scanResult.product.shrinkRisk === 'Watch' && 'This product requires monitoring. Review stock levels and sales patterns.'}
                                                                {scanResult.product.shrinkRisk === 'Low' && 'This product has low shrink risk. Continue standard monitoring.'}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* AI Analysis */}
                                                    {aiAnalysis && (
                                                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                                            <div className="flex items-center gap-2 mb-3">
                                                                <TrendingUp className="w-4 h-4 text-accent-green" />
                                                                <span className="text-xs font-bold uppercase tracking-widest text-accent-green">AI Analysis</span>
                                                            </div>
                                                            <div className="prose prose-invert prose-sm max-w-none">
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: aiAnalysis
                                                                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                                                        .replace(/\n/g, '<br/>')
                                                                }} />
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Actions */}
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={handleRescan}
                                                            className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <RefreshCw className="w-4 h-4" />
                                                            Scan Again
                                                        </button>
                                                        <button
                                                            onClick={handleClose}
                                                            className="flex-1 py-3 bg-accent-green hover:bg-accent-green-bright text-[#111] rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
                                                        >
                                                            Done
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Product Not Found
                                                <div className="space-y-4">
                                                    <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-xl p-4">
                                                        <div className="flex items-start gap-3">
                                                            <AlertTriangle className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                                                            <div>
                                                                <h3 className="text-lg font-bold text-white">Product Not Found</h3>
                                                                <p className="text-sm text-white/60 mt-1">
                                                                    No product found for code: <span className="font-mono text-white">{scanResult.code}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={handleRescan}
                                                            className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
                                                        >
                                                            Try Again
                                                        </button>
                                                        <button
                                                            onClick={handleClose}
                                                            className="flex-1 py-3 bg-accent-green hover:bg-accent-green-bright text-[#111] rounded-xl font-bold text-sm uppercase tracking-widest transition-all"
                                                        >
                                                            Done
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Manual Entry (shown when not scanning) */}
                                    {scanState === 'idle' && (
                                        <div className="flex-1 flex flex-col items-center justify-center p-6">
                                            <div className="w-full max-w-md space-y-4">
                                                <div className="text-center">
                                                    <Camera className="w-12 h-12 text-white/30 mx-auto mb-4" />
                                                    <h3 className="text-lg font-bold text-white mb-1">Manual Entry</h3>
                                                    <p className="text-sm text-white/60">Enter a product code manually</p>
                                                </div>

                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={manualCode}
                                                        onChange={(e) => setManualCode(e.target.value)}
                                                        onKeyDown={(e) => e.key === 'Enter' && handleManualEntry()}
                                                        placeholder="Enter SKU or barcode..."
                                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-green transition-colors"
                                                    />
                                                    <button
                                                        onClick={handleManualEntry}
                                                        disabled={!manualCode.trim()}
                                                        className="px-4 bg-accent-green hover:bg-accent-green-bright text-[#111] rounded-xl font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        <ScanLine className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                <div className="text-center">
                                                    <button
                                                        onClick={startCamera}
                                                        className="text-sm text-accent-green hover:text-accent-green-bright transition-colors"
                                                    >
                                                        Start Camera Scanner
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Scan History (Product Mode Only) */}
                        {scanMode === 'product' && scanHistory.length > 0 && scanState !== 'scanning' && scanState !== 'found' && (
                            <div className="border-t border-white/10 p-4">
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Recent Scans</p>
                                <div className="space-y-1 max-h-32 overflow-y-auto">
                                    {scanHistory.map((result, idx) => (
                                        <div key={idx} className="flex items-center justify-between py-2 px-3 bg-white/5 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <Barcode className="w-4 h-4 text-white/40" />
                                                <span className="text-sm text-white/70 font-mono">{result.code}</span>
                                            </div>
                                            <span className="text-[10px] text-white/40">
                                                {result.timestamp.toLocaleTimeString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CodeScanner;