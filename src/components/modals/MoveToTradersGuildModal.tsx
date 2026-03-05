import React, { useState } from 'react';
import {
    ArrowRightLeft,
    X,
    Package,
    Info,
    Check,
    AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface MoveToTradersGuildModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        id: string;
        name: string;
        category: string;
        onHand?: number | string;
        onHandValue?: number;
        price?: number;
    };
}

export default function MoveToTradersGuildModal({ isOpen, onClose, product }: MoveToTradersGuildModalProps) {
    const [step, setStep] = useState<'details' | 'confirm'>('details');
    const [needs, setNeeds] = useState('');
    const [quantity, setQuantity] = useState('');
    const [offerNote, setOfferNote] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setStep('details');
                onClose();
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-200 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center text-accent-green">
                                <ArrowRightLeft className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Move to Traders Guild</h3>
                                <p className="text-xs text-white/40">List this item for exchange in the network</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5 text-white/40" />
                        </button>
                    </div>

                    <div className="p-8">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green mb-6 scale-125">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Post Successful!</h4>
                                <p className="text-sm text-white/40 max-w-xs mx-auto">
                                    {product.name} has been listed in the Traders Guild. Other stores can now see your offer.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {/* Item Summary Card */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <h4 className="font-bold text-white truncate">{product.name}</h4>
                                            <span className="text-[10px] font-medium text-white/40 uppercase tracking-wider">{product.category}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                            <span>On Hand: <span className="text-white">{product.onHand || '0'}</span></span>
                                            <span>Total Value: <span className="text-accent-green">${product.onHandValue?.toLocaleString() || '0.00'}</span></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Quantity to Offer</label>
                                            <input
                                                type="text"
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                                placeholder="e.g. 5 cases"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">What do you want in return?</label>
                                            <input
                                                type="text"
                                                value={needs}
                                                onChange={(e) => setNeeds(e.target.value)}
                                                placeholder="e.g. Marlboro Red"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-red/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Additional Notes (Optional)</label>
                                        <textarea
                                            value={offerNote}
                                            onChange={(e) => setOfferNote(e.target.value)}
                                            placeholder="Special handling requirements, expiration dates, etc."
                                            className="w-full h-24 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="p-4 bg-accent-blue/5 border border-accent-blue/20 rounded-xl flex gap-3">
                                        <Info className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                        <p className="text-[10px] text-accent-blue/80 leading-relaxed font-medium">
                                            Moving an item to the Traders Guild creates a public offer. Other managers in your district will be notified.
                                            You can manage your posts at any time from the Guild dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {!isSuccess && (
                        <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-end gap-4">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!quantity || !needs || isSubmitting}
                                className={cn(
                                    "px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg",
                                    (!quantity || !needs || isSubmitting)
                                        ? "bg-white/10 text-white/20 cursor-not-allowed"
                                        : "bg-accent-green text-black hover:bg-accent-green/90 shadow-accent-green/10"
                                )}
                            >
                                {isSubmitting ? 'Posting...' : 'Create Offer'}
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
