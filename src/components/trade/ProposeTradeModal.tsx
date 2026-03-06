import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowRightLeft,
  Store,
  Tag,
  Send,
  Info
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TradePost } from '../../types';
import DemoProtectedAction from '../DemoProtectedAction';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProposeTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: TradePost | null;
  onSend: (proposal: any) => void;
}

export default function ProposeTradeModal({ isOpen, onClose, post, onSend }: ProposeTradeModalProps) {
  const [supplyItem, setSupplyItem] = useState(post?.needs.split('(')[0].trim() || '');
  const [supplyQty, setSupplyQty] = useState(post?.needs.match(/\(([^)]+)\)/)?.[1] || '');
  const [requestItem, setRequestItem] = useState(post?.offers.split('(')[0].trim() || '');
  const [notes, setNotes] = useState('');

  // Update defaults when post changes
  React.useEffect(() => {
    if (post) {
      setSupplyItem(post.needs.split('(')[0].trim());
      setSupplyQty(post.needs.match(/\(([^)]+)\)/)?.[1] || '');
      setRequestItem(post.offers.split('(')[0].trim());
    }
  }, [post]);

  if (!post) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supplyItem || !supplyQty) return;

    const proposal = {
      id: Math.random().toString(36).substr(2, 9),
      fromStore: 'My Store',
      toStore: post.storeName,
      originalPostId: post.id,
      department: post.department,
      supplyItem,
      supplyQty,
      requestItem,
      notes,
      status: 'Pending',
      timestamp: new Date().toISOString(),
      timeAgo: 'Just now'
    };

    onSend(proposal);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-6">
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
            className="relative w-full max-w-3xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <ArrowRightLeft className="w-5 h-5 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Propose Trade</h3>
                  <p className="text-xs text-white/40">Respond to this store's post</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-8 grid grid-cols-2 gap-8">
                {/* Their Post (Read-only) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
                    <Info className="w-3 h-3" />
                    Their Post
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Store className="w-4 h-4 text-white/40" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{post.storeName}</p>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest">{post.department}</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-white/5">
                      <div>
                        <p className="text-[10px] font-bold text-accent-red uppercase tracking-widest mb-1">They Need</p>
                        <p className="text-sm text-white/80 font-medium">{post.needs}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-accent-green uppercase tracking-widest mb-1">They Offer</p>
                        <p className="text-sm text-white/80 font-medium">{post.offers}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Offer (Editable) */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-green mb-4">
                    <ArrowRightLeft className="w-3 h-3" />
                    Your Offer
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">We Can Supply</label>
                      <input
                        type="text"
                        value={supplyItem}
                        onChange={(e) => setSupplyItem(e.target.value)}
                        placeholder="Item name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-green/50 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Quantity</label>
                      <input
                        type="text"
                        value={supplyQty}
                        onChange={(e) => setSupplyQty(e.target.value)}
                        placeholder="e.g. 10 cartons"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-green/50 transition-colors"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">In Return, We Need (Optional)</label>
                      <input
                        type="text"
                        value={requestItem}
                        onChange={(e) => setRequestItem(e.target.value)}
                        placeholder="Item name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Notes for Store</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Delivery timing, conditions, etc."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors min-h-[80px] resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <DemoProtectedAction>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-accent-green text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-green/90 transition-all shadow-lg shadow-accent-green/10 flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    Send Proposal
                  </button>
                </DemoProtectedAction>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
