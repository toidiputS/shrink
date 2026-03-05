import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Store, 
  Clock, 
  ArrowRight,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TradeProposal, TradePost } from '../../types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProposalsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  post: TradePost | null;
  proposals: TradeProposal[];
  onSelectProposal: (proposal: TradeProposal) => void;
}

export default function ProposalsDrawer({ isOpen, onClose, post, proposals, onSelectProposal }: ProposalsDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[400px] z-[130] bg-[#0F0F0F] border-l border-white/10 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Incoming Proposals</h3>
                <p className="text-xs text-white/40">For {post?.needs}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {proposals.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <MessageSquare className="w-12 h-12 text-white/5 mb-4" />
                  <p className="text-sm text-white/20">No proposals yet for this post.</p>
                </div>
              ) : (
                proposals.map((proposal) => (
                  <button
                    key={proposal.id}
                    onClick={() => onSelectProposal(proposal)}
                    className="w-full text-left bg-white/5 border border-white/5 hover:border-accent-green/30 rounded-xl p-4 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-green/10 transition-colors">
                          <Store className="w-4 h-4 text-white/40 group-hover:text-accent-green" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{proposal.fromStore}</p>
                          <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                            <Clock className="w-3 h-3" />
                            {proposal.timeAgo}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-accent-green transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">They Offer</span>
                        <span className="text-xs text-white/80 font-medium">{proposal.supplyItem} ({proposal.supplyQty})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">In Return</span>
                        <span className="text-xs text-white/40">{proposal.requestItem || 'Nothing specific'}</span>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
