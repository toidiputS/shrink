import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { X, Printer, Download, FileText, AlertTriangle, CheckCircle, Package } from 'lucide-react';
import { Product, CategoryData } from '../../types';

interface InventoryReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    categories: CategoryData[];
}

const InventoryReportModal: React.FC<InventoryReportModalProps> = ({ isOpen, onClose, categories }) => {
    // Aggregate data
    const { allProducts, totalValue, lowStockCount, outOfStockCount, healthyCount } = useMemo(() => {
        const products: Product[] = [];
        let val = 0;
        let low = 0;
        let out = 0;
        let healthy = 0;

        categories.forEach(cat => {
            cat.products.forEach(p => {
                products.push(p);
                val += p.qty_on_hand * 8.50; // Approximated value per item for the report
                if (p.status === 'Critical') out++;
                else if (p.status === 'Low') low++;
                else healthy++;
            });
        });

        // Sort products by status (Critical first, then Low, then Healthy)
        products.sort((a, b) => {
            const order = { 'Critical': 0, 'Low': 1, 'Healthy': 2 };
            return order[a.status] - order[b.status];
        });

        return { allProducts: products, totalValue: val, lowStockCount: low, outOfStockCount: out, healthyCount: healthy };
    }, [categories]);

    const handleExportCSV = () => {
        const headers = ['ID,Name,Brand,Status,On-Hand,Daily Sales,Facings\n'];
        const rows = allProducts.map(p =>
            `"${p.id}","${p.name}","${p.brand}","${p.status}",${p.qty_on_hand},${p.dailySales},${p.facings || 1}`
        );
        const csvContent = headers.concat(rows).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `Shrink_Inventory_Report_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePrintPDF = () => {
        window.print();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 print:p-0">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm print:hidden"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl max-h-[90vh] bg-bg-primary border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col print:shadow-none print:border-none print:max-h-none print:h-auto print:bg-white print:text-black"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 print:bg-transparent print:border-black/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-green/20 flex items-center justify-center print:hidden">
                            <FileText className="w-5 h-5 text-accent-green" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white print:text-black">Master Inventory Report</h2>
                            <p className="text-sm text-white/50 print:text-black/60">Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors print:hidden"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar print:overflow-visible">

                    {/* Summary KPIs */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 print:border-black/20 print:bg-gray-50">
                            <div className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1 print:text-black/50">Total Items Tracked</div>
                            <div className="text-2xl font-mono text-white print:text-black">{allProducts.length}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-accent-green/5 border border-accent-green/20 print:border-green-300 print:bg-green-50">
                            <div className="flex justify-between items-start mb-1">
                                <div className="text-xs text-accent-green/60 uppercase font-bold tracking-wider print:text-green-700">Healthy Stock</div>
                                <CheckCircle className="w-4 h-4 text-accent-green print:text-green-600" />
                            </div>
                            <div className="text-2xl font-mono text-accent-green print:text-green-700">{healthyCount}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20 print:border-orange-300 print:bg-orange-50">
                            <div className="flex justify-between items-start mb-1">
                                <div className="text-xs text-accent-orange/60 uppercase font-bold tracking-wider print:text-orange-700">Low Stock</div>
                                <AlertTriangle className="w-4 h-4 text-accent-orange print:text-orange-600" />
                            </div>
                            <div className="text-2xl font-mono text-accent-orange print:text-orange-700">{lowStockCount}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-accent-red/5 border border-accent-red/20 print:border-red-300 print:bg-red-50">
                            <div className="flex justify-between items-start mb-1">
                                <div className="text-xs text-accent-red/60 uppercase font-bold tracking-wider print:text-red-700">Critical / OOS</div>
                                <AlertTriangle className="w-4 h-4 text-accent-red print:text-red-600" />
                            </div>
                            <div className="text-2xl font-mono text-accent-red print:text-red-700">{outOfStockCount}</div>
                        </div>
                    </div>

                    {/* Detailed Table */}
                    <div className="rounded-xl border border-white/10 overflow-hidden print:border-black/20">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-white/40 font-bold print:bg-gray-100 print:text-black/60 print:border-black/20">
                                    <th className="p-3">Product Name</th>
                                    <th className="p-3">Brand</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3 text-right">On Hand</th>
                                    <th className="p-3 text-right">Daily Sales</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm print:divide-black/10">
                                {allProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-white/5 transition-colors">
                                        <td className="p-3 text-white font-medium print:text-black flex items-center gap-2">
                                            <Package className="w-4 h-4 text-white/20 print:hidden" />
                                            {product.name}
                                        </td>
                                        <td className="p-3 text-white/60 print:text-black/70">{product.brand}</td>
                                        <td className="p-3">
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                        ${product.status === 'Healthy' ? 'bg-accent-green/10 text-accent-green print:text-green-700 print:bg-transparent' :
                                                    product.status === 'Low' ? 'bg-accent-orange/10 text-accent-orange print:text-orange-700 print:bg-transparent' :
                                                        'bg-accent-red/10 text-accent-red print:text-red-700 print:bg-transparent'}`}
                                            >
                                                {product.status === 'Healthy' ? 'In Stock' : product.status === 'Low' ? 'Low Stock' : 'Critical'}
                                            </span>
                                        </td>
                                        <td className="p-3 text-right font-mono text-white print:text-black">{product.qty_on_hand}</td>
                                        <td className="p-3 text-right font-mono text-white/60 print:text-black/70">{product.dailySales}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-end gap-3 print:hidden">
                    <button
                        onClick={handleExportCSV}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-border-subtle rounded-lg text-sm font-medium transition-colors text-white"
                    >
                        <Download className="w-4 h-4" />
                        <span>Export CSV</span>
                    </button>
                    <button
                        onClick={handlePrintPDF}
                        className="flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 text-black rounded-lg text-sm font-bold transition-colors"
                    >
                        <Printer className="w-4 h-4" />
                        <span>Print / Save PDF</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default InventoryReportModal;
