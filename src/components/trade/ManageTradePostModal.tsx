import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRightLeft, Clock, Tag, Store, MessageSquare, ChevronRight } from 'lucide-react';
import { TradePost, TradeProposal } from '../../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ManageTradePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: TradePost | null;
  proposals: TradeProposal[];
  onAcceptProposal: (proposal: TradeProposal) => void;
  onViewProposalDetails: (proposal: TradeProposal) => void;
}

const ManageTradePostModal: React.FC<ManageTradePostModalProps> = ({
  isOpen,
  onClose,
  post,
  proposals,
  onAcceptProposal,
  onViewProposalDetails
}) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
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
            className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <ArrowRightLeft className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">Manage Post – {post.needs}</h3>
                    <span className="px-2 py-0.5 bg-accent-orange/10 text-accent-orange border border-accent-orange/20 rounded text-[10px] font-bold uppercase tracking-wider">
                      {post.status}
                    </span>
                  </div>
                  <p className="text-xs text-white/40">Review and manage incoming trade offers</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column: Original Post */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-white/40" />
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Original Post Details</h4>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Department</p>
                        <p className="text-sm font-medium text-white">{post.department}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Posted Time</p>
                        <p className="text-sm font-medium text-white">{post.timeAgo}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-accent-red/5 border border-accent-red/10 rounded-xl p-4">
                        <p className="text-[10px] font-bold text-accent-red uppercase tracking-widest mb-1">We Need</p>
                        <p className="text-sm text-white/80 font-medium">{post.needs}</p>
                      </div>
                      <div className="bg-accent-green/5 border border-accent-green/10 rounded-xl p-4">
                        <p className="text-[10px] font-bold text-accent-green uppercase tracking-widest mb-1">We Offer</p>
                        <p className="text-sm text-white/80 font-medium">{post.offers}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Incoming Proposals */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-accent-green" />
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Incoming Proposals ({proposals.length})</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {proposals.length > 0 ? (
                      proposals.map((proposal) => (
                        <div key={proposal.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-green/10 transition-colors">
                                <Store className="w-5 h-5 text-white/40 group-hover:text-accent-green transition-colors" />
                              </div>
                              <div>
                                <h5 className="text-sm font-bold text-white">{proposal.fromStore}</h5>
                                <p className="text-[10px] text-white/40">{proposal.timeAgo}</p>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-white/5 rounded-lg p-2.5">
                              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-0.5">They Supply</p>
                              <p className="text-xs text-white/80 font-medium">{proposal.supplyItem}</p>
                              <p className="text-[10px] text-white/40">{proposal.supplyQty}</p>
                            </div>
                            <div className="bg-white/5 rounded-lg p-2.5">
                              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-0.5">In Return</p>
                              <p className="text-xs text-white/80 font-medium">{proposal.requestItem}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => onViewProposalDetails(proposal)}
                              className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/60 transition-colors"
                            >
                              View Details
                            </button>
                            <button 
                              onClick={() => onAcceptProposal(proposal)}
                              className="flex-1 py-2 bg-accent-green hover:bg-accent-green/90 text-black rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                            >
                              Accept & Chat
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-12 text-center bg-white/5 border border-dashed border-white/10 rounded-2xl">
                        <p className="text-sm text-white/20">No proposals yet for this post.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ManageTradePostModal;
