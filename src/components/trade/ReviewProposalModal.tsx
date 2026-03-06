import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowRightLeft,
  Store,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Info
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TradePost, TradeProposal } from '../../types';
import DemoProtectedAction from '../DemoProtectedAction';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ReviewProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: TradePost | null;
  proposal: TradeProposal | null;
  onAccept: (proposal: TradeProposal) => void;
  onDecline: (proposal: TradeProposal) => void;
}

export default function ReviewProposalModal({ isOpen, onClose, post, proposal, onAccept, onDecline }: ReviewProposalModalProps) {
  if (!proposal || !post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-140 flex items-center justify-center p-4">
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
            className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <ArrowRightLeft className="w-5 h-5 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Review Proposal</h3>
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

            <div className="p-8 grid grid-cols-2 gap-8">
              {/* Your Post */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
                  <Info className="w-3 h-3" />
                  Your Post
                </div>

                <div className="bg-white/5 border border-white/5 rounded-xl p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Store className="w-5 h-5 text-white/40" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">My Store</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">{post.department}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[10px] font-bold text-accent-red uppercase tracking-widest mb-1">We Need</p>
                      <p className="text-base text-white/80 font-medium">{post.needs}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-accent-green uppercase tracking-widest mb-1">We Offer</p>
                      <p className="text-base text-white/80 font-medium">{post.offers}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Their Proposal */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-green mb-4">
                  <ArrowRightLeft className="w-3 h-3" />
                  Their Proposal
                </div>

                <div className="bg-accent-green/5 border border-accent-green/10 rounded-xl p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                      <Store className="w-5 h-5 text-accent-green" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{proposal.fromStore}</p>
                      <p className="text-[10px] text-accent-green uppercase tracking-widest font-bold">Proposal Received</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-accent-green/10">
                    <div>
                      <p className="text-[10px] font-bold text-accent-green uppercase tracking-widest mb-1">They Can Supply</p>
                      <p className="text-base text-white/80 font-medium">{proposal.supplyItem} ({proposal.supplyQty})</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">In Return, They Need</p>
                      <p className="text-base text-white/80 font-medium">{proposal.requestItem || 'Nothing specific'}</p>
                    </div>
                    {proposal.notes && (
                      <div className="bg-black/20 rounded-lg p-3">
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Notes</p>
                        <p className="text-xs text-white/60 italic">{proposal.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-end gap-4">
              <DemoProtectedAction>
                <button
                  onClick={() => onDecline(proposal)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-accent-red/10 border border-white/10 hover:border-accent-red/30 rounded-xl font-bold text-xs uppercase tracking-widest text-white/40 hover:text-accent-red transition-all cursor-pointer"
                >
                  <XCircle className="w-4 h-4" />
                  Decline
                </button>
              </DemoProtectedAction>
              <DemoProtectedAction>
                <button
                  onClick={() => onAccept(proposal)}
                  className="flex items-center gap-2 px-8 py-3 bg-accent-green text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-green/90 transition-all shadow-lg shadow-accent-green/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Accept & Open Chat
                </button>
              </DemoProtectedAction>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
