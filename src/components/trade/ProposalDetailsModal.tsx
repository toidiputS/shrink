import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Store, ArrowRightLeft, Info } from 'lucide-react';
import { TradeProposal } from '../../types';

interface ProposalDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: TradeProposal | null;
}

const ProposalDetailsModal: React.FC<ProposalDetailsModalProps> = ({ isOpen, onClose, proposal }) => {
  if (!proposal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
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
            className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Proposal Details</h3>
                  <p className="text-xs text-white/40">Review offer from {proposal.fromStore}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Store className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Store Name</p>
                  <p className="text-sm font-bold text-white">{proposal.fromStore}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-accent-green/5 rounded-xl border border-accent-green/10">
                  <p className="text-[10px] font-bold text-accent-green uppercase tracking-widest mb-1">We Supply</p>
                  <p className="text-sm font-bold text-white">{proposal.supplyItem}</p>
                  <p className="text-xs text-white/40 mt-1">{proposal.supplyQty}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">In Return</p>
                  <p className="text-sm font-bold text-white">{proposal.requestItem || 'Nothing specific'}</p>
                </div>
              </div>

              {proposal.notes && (
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Notes</p>
                  <p className="text-sm text-white/60 italic leading-relaxed">{proposal.notes}</p>
                </div>
              )}
            </div>

            <div className="p-6 bg-white/5 border-t border-white/10 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProposalDetailsModal;
