import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  Store,
  Check,
  Clock,
  MapPin,
  Calendar,
  Truck,
  FileText,
  ChevronRight,
  AlertCircle,
  RefreshCw,
  User,
  MessageSquare,
  ArrowRightLeft
} from 'lucide-react';
import { TradeProposal, TradeMessage, TradeDeal, TradeDealStatus } from '../../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import DemoProtectedAction from '../DemoProtectedAction';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TradeChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  proposal: TradeProposal | null;
}

const TradeChatPanel: React.FC<TradeChatPanelProps> = ({ isOpen, onClose, proposal }) => {
  const [messages, setMessages] = useState<TradeMessage[]>([
    { id: '1', sender: proposal?.fromStore || 'Downtown QuickStop #42', text: "Hi, we have the Newport Menthol ready for trade. Are the Marlboro Reds in good condition?", timestamp: '10:30 AM' },
    { id: '2', sender: 'Me', text: "Yes, they are fresh stock from this morning's delivery. 5 cartons as requested.", timestamp: '10:32 AM' },
    { id: '3', sender: proposal?.fromStore || 'Downtown QuickStop #42', text: "Perfect. Let's finalize the details in the deal card.", timestamp: '10:33 AM' },
  ]);
  const [inputText, setInputText] = useState('');
  const [deal, setDeal] = useState<TradeDeal>({
    itemsFromUs: 'Marlboro Red (5 cartons)',
    itemsFromThem: 'Newport Menthol (5 cartons)',
    deliveryMethod: 'Meet in middle',
    location: 'Shell Station on 5th Ave',
    dateTime: '2026-03-02T14:00',
    notes: 'Please bring the original invoice for the Newports.',
    myAgreed: false,
    theirAgreed: false,
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
    status: 'Draft'
  });
  const [timeLeft, setTimeLeft] = useState('02:00:00');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const expiry = new Date(deal.expiresAt).getTime();
      const diff = expiry - now;

      if (diff <= 0) {
        if (deal.status !== 'Finalized' && deal.status !== 'Expired') {
          setDeal(prev => ({ ...prev, status: 'Expired' }));
          addSystemMessage('Deal expired (timer elapsed).');
        }
        setTimeLeft('00:00:00');
        clearInterval(timer);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deal.expiresAt, deal.status]);

  const addSystemMessage = (text: string) => {
    const newMessage: TradeMessage = {
      id: Date.now().toString(),
      sender: 'System',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSystem: true
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: TradeMessage = {
      id: Date.now().toString(),
      sender: 'Me',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const updateDeal = (updates: Partial<TradeDeal>) => {
    if (deal.status === 'Finalized' || deal.status === 'Expired') return;

    setDeal(prev => {
      const next = { ...prev, ...updates, status: 'Draft' as TradeDealStatus, myAgreed: false, theirAgreed: false };
      return next;
    });
    addSystemMessage('You updated the deal terms.');
  };

  const handleMyAgree = () => {
    if (deal.status === 'Finalized' || deal.status === 'Expired') return;

    const newMyAgreed = !deal.myAgreed;
    const newStatus = (newMyAgreed && deal.theirAgreed) ? 'Finalized' : (newMyAgreed || deal.theirAgreed) ? 'Pending Confirm' : 'Draft';

    setDeal(prev => ({ ...prev, myAgreed: newMyAgreed, status: newStatus as TradeDealStatus }));

    if (newMyAgreed) {
      addSystemMessage('You agreed to the current terms.');
      if (deal.theirAgreed) {
        addSystemMessage('Deal finalized by both parties.');
      }
    }
  };

  const handleTheirAgree = () => {
    if (deal.status === 'Finalized' || deal.status === 'Expired') return;

    const newTheirAgreed = !deal.theirAgreed;
    const newStatus = (deal.myAgreed && newTheirAgreed) ? 'Finalized' : (deal.myAgreed || newTheirAgreed) ? 'Pending Confirm' : 'Draft';

    setDeal(prev => ({ ...prev, theirAgreed: newTheirAgreed, status: newStatus as TradeDealStatus }));

    if (newTheirAgreed) {
      addSystemMessage(`${proposal?.fromStore || 'The other store'} agreed to the current terms.`);
      if (deal.myAgreed) {
        addSystemMessage('Deal finalized by both parties.');
      }
    }
  };

  const handleReviveDeal = () => {
    setDeal({
      ...deal,
      status: 'Draft',
      myAgreed: false,
      theirAgreed: false,
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
    });
    addSystemMessage('Deal revived and cloned into a new draft.');
  };

  if (!proposal) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 w-[900px] h-screen bg-bg-secondary border-l border-border-subtle z-100 shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-border-subtle flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center">
                <Store className="w-6 h-6 text-accent-green" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold tracking-tight">Trade Chat – {proposal.fromStore}</h2>
                  <span className="px-2 py-0.5 bg-accent-orange/10 text-accent-orange border border-accent-orange/20 rounded text-[10px] font-bold uppercase tracking-wider">
                    Negotiating
                  </span>
                </div>
                <p className="text-xs text-white/40">Trade for {proposal.supplyItem}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white/40" />
            </button>
          </div>

          <div className="flex-1 flex min-h-0">
            {/* Left: Chat Thread */}
            <div className="flex-1 flex flex-col border-r border-border-subtle">
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex flex-col max-w-[80%]",
                      msg.isSystem ? "mx-auto w-full max-w-none items-center" :
                        msg.sender === 'Me' ? "ml-auto items-end" : "items-start"
                    )}
                  >
                    {msg.isSystem ? (
                      <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
                        <AlertCircle className="w-3 h-3 text-white/40" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{msg.text}</span>
                      </div>
                    ) : (
                      <>
                        <div className={cn(
                          "px-4 py-3 rounded-2xl text-sm",
                          msg.sender === 'Me'
                            ? "bg-accent-green text-black font-medium rounded-tr-none"
                            : "bg-white/5 border border-white/10 text-white/90 rounded-tl-none"
                        )}>
                          {msg.text}
                        </div>
                        <span className="text-[10px] text-white/20 mt-1 font-mono">{msg.timestamp}</span>
                      </>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-6 border-t border-border-subtle bg-white/5">
                <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-green/50 transition-colors"
                  />
                  <DemoProtectedAction>
                    <button
                      type="submit"
                      className="w-12 h-12 bg-accent-green hover:bg-accent-green/90 text-black rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-accent-green/10 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </DemoProtectedAction>
                </form>
              </div>
            </div>

            {/* Right: Deal Card */}
            <div className="w-[400px] flex flex-col bg-black/20">
              <div className="p-6 border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent-green" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/60">Active Deal</h3>
                </div>
                <div className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border",
                  deal.status === 'Draft' ? "bg-white/5 text-white/40 border-white/10" :
                    deal.status === 'Pending Confirm' ? "bg-accent-orange/10 text-accent-orange border-accent-orange/20" :
                      deal.status === 'Finalized' ? "bg-accent-green/10 text-accent-green border-accent-green/20" :
                        "bg-accent-red/10 text-accent-red border-accent-red/20"
                )}>
                  {deal.status}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                {/* Items Section */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <ArrowRightLeft className="w-3 h-3 text-accent-green" />
                      Items We Supply
                    </label>
                    <textarea
                      value={deal.itemsFromUs}
                      onChange={(e) => updateDeal({ itemsFromUs: e.target.value })}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors h-20 resize-none disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <ArrowRightLeft className="w-3 h-3 text-accent-red rotate-180" />
                      Items You Supply
                    </label>
                    <textarea
                      value={deal.itemsFromThem}
                      onChange={(e) => updateDeal({ itemsFromThem: e.target.value })}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors h-20 resize-none disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Logistics Section */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Truck className="w-3 h-3" />
                      Delivery Method
                    </label>
                    <select
                      value={deal.deliveryMethod}
                      onChange={(e) => updateDeal({ deliveryMethod: e.target.value as any })}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors appearance-none disabled:opacity-50"
                    >
                      <option value="In-person pickup">In-person pickup</option>
                      <option value="Meet in middle">Meet in middle</option>
                      <option value="Courier">Courier</option>
                      <option value="Mail / Ship">Mail / Ship</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      Location / Address
                    </label>
                    <input
                      type="text"
                      value={deal.location}
                      onChange={(e) => updateDeal({ location: e.target.value })}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      Target Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      value={deal.dateTime}
                      onChange={(e) => updateDeal({ dateTime: e.target.value })}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Notes Section */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <FileText className="w-3 h-3" />
                    Optional Notes
                  </label>
                  <textarea
                    value={deal.notes}
                    onChange={(e) => updateDeal({ notes: e.target.value })}
                    disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-green/50 transition-colors h-20 resize-none disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-white/5 border-t border-border-subtle space-y-4">
                {/* Timer */}
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-white/40">Offer expires in</span>
                  <span className={cn(
                    "font-mono",
                    deal.status === 'Expired' ? "text-accent-red" : "text-accent-orange"
                  )}>{timeLeft}</span>
                </div>

                {/* Agreement Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <DemoProtectedAction>
                    <button
                      onClick={handleMyAgree}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className={cn(
                        "w-full flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all disabled:opacity-50 cursor-pointer",
                        deal.myAgreed
                          ? "bg-accent-green/20 border-accent-green text-accent-green"
                          : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center border",
                        deal.myAgreed ? "bg-accent-green border-accent-green text-black" : "border-white/20"
                      )}>
                        {deal.myAgreed && <Check className="w-4 h-4" />}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest">I Agree</span>
                    </button>
                  </DemoProtectedAction>
                  <DemoProtectedAction>
                    <button
                      onClick={handleTheirAgree}
                      disabled={deal.status === 'Finalized' || deal.status === 'Expired'}
                      className={cn(
                        "w-full flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all disabled:opacity-50 cursor-pointer",
                        deal.theirAgreed
                          ? "bg-accent-green/20 border-accent-green text-accent-green"
                          : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center border",
                        deal.theirAgreed ? "bg-accent-green border-accent-green text-black" : "border-white/20"
                      )}>
                        {deal.theirAgreed && <Check className="w-4 h-4" />}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest">They Agreed</span>
                    </button>
                  </DemoProtectedAction>
                </div>

                {deal.status === 'Expired' && (
                  <DemoProtectedAction>
                    <button
                      onClick={handleReviveDeal}
                      className="w-full py-3 bg-accent-green text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-green/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Revive Deal
                    </button>
                  </DemoProtectedAction>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TradeChatPanel;
