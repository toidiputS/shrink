import React, { useState } from 'react';
import {
  ArrowRightLeft,
  Plus,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  Store,
  Tag,
  Phone,
  User,
  MessageSquare,
  Check,
  ChevronRight,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ProposeTradeModal from './trade/ProposeTradeModal';
import ProposalsDrawer from './trade/ProposalsDrawer';
import ReviewProposalModal from './trade/ReviewProposalModal';
import TradeChatPanel from './trade/TradeChatPanel';
import ManageTradePostModal from './trade/ManageTradePostModal';
import ProposalDetailsModal from './trade/ProposalDetailsModal';
import { TradePost, TradeProposal, TradePostStatus } from '../types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MOCK_PROPOSALS: Record<string, TradeProposal[]> = {
  'my-1': [
    {
      id: 'prop-1',
      fromStore: 'Downtown QuickStop #42',
      toStore: 'My Store',
      originalPostId: 'my-1',
      supplyItem: 'Newport Menthol',
      supplyQty: '5 cartons',
      requestItem: 'Marlboro Red (5 cartons)',
      notes: 'We can deliver these today if you have the Marlboros ready.',
      status: 'Pending',
      timeAgo: '10m ago'
    },
    {
      id: 'prop-2',
      fromStore: 'North Side Tobacco',
      toStore: 'My Store',
      originalPostId: 'my-1',
      supplyItem: 'Newport Menthol',
      supplyQty: '5 cartons',
      requestItem: 'Marlboro Red (5 cartons)',
      notes: 'Available for trade immediately.',
      status: 'Pending',
      timeAgo: '1h ago'
    }
  ],
  'my-2': [
    {
      id: 'prop-3',
      fromStore: 'Harbor View Deli',
      toStore: 'My Store',
      originalPostId: 'my-2',
      supplyItem: 'Fresh Lettuce',
      supplyQty: '10 heads',
      requestItem: 'Fresh Tomatoes (15 lbs)',
      notes: 'Ours are organic, just arrived this morning.',
      status: 'Pending',
      timeAgo: '2h ago'
    }
  ]
};

const MARKET_FEED: TradePost[] = [
  {
    id: '1',
    storeName: 'Downtown QuickStop #42',
    department: 'Tobacco',
    needs: 'Marlboro Gold Soft Pack (10 cartons)',
    offers: 'Camel Blue (12 cartons)',
    distance: '4.2 miles',
    timeAgo: '2h ago',
    status: 'Open'
  },
  {
    id: '2',
    storeName: 'Harbor View Deli',
    department: 'Deli',
    needs: 'Boar\'s Head Turkey (15 lbs)',
    offers: 'Boar\'s Head Ham (20 lbs)',
    distance: '12.5 miles',
    timeAgo: '5h ago',
    status: 'Open'
  },
  {
    id: '3',
    storeName: 'Westside Grocery',
    department: 'Grocery',
    needs: 'Coca-Cola 12oz Cans (20 cases)',
    offers: 'Pepsi 12oz Cans (25 cases)',
    distance: '8.1 miles',
    timeAgo: '1d ago',
    status: 'Open'
  },
  {
    id: '4',
    storeName: 'North Side Tobacco',
    department: 'Tobacco',
    needs: 'Juul Pods Mint 5% (50 packs)',
    offers: 'Vuse Alto Pods (60 packs)',
    distance: '15.2 miles',
    timeAgo: '2d ago',
    status: 'Open'
  }
];

const MY_POSTS: TradePost[] = [
  {
    id: 'my-1',
    storeName: 'My Store',
    department: 'Tobacco',
    needs: 'Newport Menthol (5 cartons)',
    offers: 'Marlboro Red (5 cartons)',
    distance: '0 miles',
    timeAgo: '3h ago',
    status: 'Open',
    proposalsCount: 2
  },
  {
    id: 'my-2',
    storeName: 'My Store',
    department: 'Deli',
    needs: 'Fresh Lettuce (10 heads)',
    offers: 'Fresh Tomatoes (15 lbs)',
    distance: '0 miles',
    timeAgo: '1d ago',
    status: 'Under Review',
    proposalsCount: 1
  },
  {
    id: 'my-3',
    storeName: 'My Store',
    department: 'Grocery',
    needs: 'Lays Classic 8oz (30 bags)',
    offers: 'Doritos Nacho Cheese (30 bags)',
    distance: '0 miles',
    timeAgo: '4d ago',
    status: 'Completed'
  }
];

export default function TradersGuildView() {
  const [activeTab, setActiveTab] = useState<'MarketFeed' | 'MyPosts' | 'ProposalsSent'>('MarketFeed');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProposeModalOpen, setIsProposeModalOpen] = useState(false);
  const [isProposalsDrawerOpen, setIsProposalsDrawerOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isProposalDetailsModalOpen, setIsProposalDetailsModalOpen] = useState(false);

  const [myPosts, setMyPosts] = useState<TradePost[]>(MY_POSTS as TradePost[]);
  const [sentProposals, setSentProposals] = useState<TradeProposal[]>([
    {
      id: 'sent-1',
      fromStore: 'My Store',
      toStore: 'Westside Grocery',
      originalPostId: '3',
      department: 'Grocery',
      supplyItem: 'Coca-Cola 12oz Cans',
      supplyQty: '20 cases',
      requestItem: 'Pepsi 12oz Cans (25 cases)',
      status: 'Pending',
      timeAgo: '2h ago'
    },
    {
      id: 'sent-2',
      fromStore: 'My Store',
      toStore: 'North Side Tobacco',
      originalPostId: '4',
      department: 'Tobacco',
      supplyItem: 'Juul Pods Mint 5%',
      supplyQty: '50 packs',
      requestItem: 'Vuse Alto Pods (60 packs)',
      status: 'Expired',
      timeAgo: '8d ago'
    }
  ]);
  const [selectedPost, setSelectedPost] = useState<TradePost | null>(null);
  const [selectedProposal, setSelectedProposal] = useState<TradeProposal | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleProposeTrade = (post: TradePost) => {
    setSelectedPost(post);
    setIsProposeModalOpen(true);
  };

  const handleOpenProposals = (post: TradePost) => {
    setSelectedPost(post);
    setIsProposalsDrawerOpen(true);
  };

  const handleManagePost = (post: TradePost) => {
    setSelectedPost(post);
    setIsManageModalOpen(true);
  };

  const handleViewProposalDetails = (proposal: TradeProposal) => {
    setSelectedProposal(proposal);
    setIsProposalDetailsModalOpen(true);
  };

  const handleSelectProposal = (proposal: TradeProposal) => {
    setSelectedProposal(proposal);
    setIsReviewModalOpen(true);
  };

  const handleAcceptProposal = (proposal: TradeProposal) => {
    setSelectedProposal(proposal);
    setIsReviewModalOpen(false);
    setIsProposalsDrawerOpen(false);
    setIsManageModalOpen(false);
    setIsChatPanelOpen(true);

    // Update post status to Negotiating
    if (selectedPost) {
      setMyPosts(prev => prev.map(p =>
        p.id === selectedPost.id ? { ...p, status: 'Negotiating' } : p
      ));
    }

    // Update matching record in sentProposals to Accepted if it exists
    setSentProposals(prev => prev.map(p =>
      p.originalPostId === proposal.originalPostId && p.toStore === proposal.fromStore ? { ...p, status: 'Accepted' } : p
    ));

    setToast(`Trade accepted! Chat opened with ${proposal.fromStore}`);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleDeclineProposal = (proposal: TradeProposal) => {
    setIsReviewModalOpen(false);
    setToast(`Proposal from ${proposal.fromStore} declined.`);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSendProposal = (proposal: any) => {
    console.log('Trade Proposal Sent:', proposal);
    setSentProposals(prev => [proposal, ...prev]);
    setIsProposeModalOpen(false);
    setToast(`Trade proposal sent to ${proposal.toStore}`);

    // Auto-hide toast
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-6 min-w-0 pb-10">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveTab('MarketFeed')}
            className={cn(
              "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all",
              activeTab === 'MarketFeed' ? "bg-accent-green text-black shadow-lg" : "text-white/40 hover:text-white/60"
            )}
          >
            Market Feed
          </button>
          <button
            onClick={() => setActiveTab('MyPosts')}
            className={cn(
              "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all",
              activeTab === 'MyPosts' ? "bg-accent-green text-black shadow-lg" : "text-white/40 hover:text-white/60"
            )}
          >
            My Posts
          </button>
          <button
            onClick={() => setActiveTab('ProposalsSent')}
            className={cn(
              "px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all",
              activeTab === 'ProposalsSent' ? "bg-accent-green text-black shadow-lg" : "text-white/40 hover:text-white/60"
            )}
          >
            Proposals Sent
          </button>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-accent-green hover:bg-accent-green/90 text-black rounded-xl font-bold text-sm transition-all shadow-lg shadow-accent-green/10"
        >
          <Plus className="w-4 h-4" />
          New Guild Post
        </button>
      </div>

      {/* Main Content */}
      <div className="min-w-0">
        {activeTab === 'MarketFeed' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MARKET_FEED.map((post) => {
              const hasSentProposal = sentProposals.some(p => p.originalPostId === post.id);
              return (
                <div key={post.id} className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-white/10 transition-all group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent-green/10 transition-colors">
                        <Store className="w-6 h-6 text-white/40 group-hover:text-accent-green transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white leading-tight">{post.storeName}</h3>
                          {hasSentProposal && (
                            <span className="px-1.5 py-0.5 bg-accent-green/10 text-accent-green border border-accent-green/20 rounded text-[8px] font-bold uppercase tracking-wider">
                              Proposal Sent
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Tag className="w-3 h-3 text-white/20" />
                          <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{post.department}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                        <MapPin className="w-3 h-3" />
                        {post.distance}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                        <Clock className="w-3 h-3" />
                        {post.timeAgo}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-accent-red/5 border border-accent-red/10 rounded-xl p-3">
                      <p className="text-[10px] font-bold text-accent-red uppercase tracking-widest mb-1">Needs</p>
                      <p className="text-xs text-white/80 font-medium leading-relaxed">{post.needs}</p>
                    </div>
                    <div className="bg-accent-green/5 border border-accent-green/10 rounded-xl p-3">
                      <p className="text-[10px] font-bold text-accent-green uppercase tracking-widest mb-1">Offers</p>
                      <p className="text-xs text-white/80 font-medium leading-relaxed">{post.offers}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleProposeTrade(post)}
                      className="flex-1 py-3 bg-white/5 hover:bg-accent-green hover:text-black border border-white/10 hover:border-accent-green rounded-xl text-xs font-bold uppercase tracking-widest text-white/60 transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowRightLeft className="w-4 h-4" />
                      Propose Trade
                    </button>

                    <a
                      href={`https://t.me/share/url?url=${encodeURIComponent(window.location.origin)}&text=${encodeURIComponent(`Trade Offer from ${post.storeName}:\nNeeds: ${post.needs}\nOffers: ${post.offers}\n\nJoin the Traders Guild to respond!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 flex items-center justify-center bg-white/5 hover:bg-[#0088cc] text-white/40 hover:text-white border border-white/10 rounded-xl transition-all"
                      title="Share via Telegram"
                    >
                      <Send className="w-4 h-4" />
                    </a>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`Trade Offer from ${post.storeName}:\nNeeds: ${post.needs}\nOffers: ${post.offers}\n\nJoin the Traders Guild to respond!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 flex items-center justify-center bg-white/5 hover:bg-[#25D366] text-white/40 hover:text-white border border-white/10 rounded-xl transition-all"
                      title="Share via WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : activeTab === 'MyPosts' ? (
          <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Department</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">We Need</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">We Offer</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Posted</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Status</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {myPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-white/2 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-white/80">{post.department}</span>
                        {post.proposalsCount && post.proposalsCount > 0 && (
                          <button
                            onClick={() => handleOpenProposals(post)}
                            className="flex items-center gap-1 px-1.5 py-0.5 bg-accent-green/10 border border-accent-green/20 rounded-md hover:bg-accent-green/20 transition-colors"
                          >
                            <MessageSquare className="w-2.5 h-2.5 text-accent-green" />
                            <span className="text-[9px] font-bold text-accent-green">{post.proposalsCount} proposals</span>
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-accent-red font-medium">{post.needs}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-accent-green font-medium">{post.offers}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-white/40">{post.timeAgo}</span>
                    </td>
                    <td className="p-4">
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full",
                        post.status === 'Open' ? "bg-accent-green/10 text-accent-green" :
                          post.status === 'Under Review' ? "bg-accent-orange/10 text-accent-orange" :
                            post.status === 'Negotiating' ? "bg-accent-orange/20 text-accent-orange border border-accent-orange/30" :
                              "bg-white/10 text-white/40"
                      )}>
                        {post.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        <span className="text-[10px] font-bold uppercase tracking-wider">{post.status}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleManagePost(post)}
                        className="text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Store</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Department</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">We Supply</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">We Request</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Sent Time</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Status</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sentProposals.map((proposal) => (
                  <tr key={proposal.id} className="hover:bg-white/2 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          <Store className="w-4 h-4 text-white/40" />
                        </div>
                        <span className="text-xs font-bold text-white/80">{proposal.toStore}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{proposal.department || 'N/A'}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-accent-green font-medium">{proposal.supplyItem} ({proposal.supplyQty})</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-white/40">{proposal.requestItem || 'Nothing specific'}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-white/40">{proposal.timeAgo}</span>
                    </td>
                    <td className="p-4">
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full",
                        proposal.status === 'Pending' ? "bg-accent-orange/10 text-accent-orange" :
                          proposal.status === 'Accepted' ? "bg-accent-green/10 text-accent-green" :
                            proposal.status === 'Declined' ? "bg-accent-red/10 text-accent-red" :
                              "bg-white/10 text-white/40"
                      )}>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          proposal.status === 'Pending' ? "bg-accent-orange" :
                            proposal.status === 'Accepted' ? "bg-accent-green" :
                              proposal.status === 'Declined' ? "bg-accent-red" : "bg-white/40"
                        )} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{proposal.status}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      {proposal.status === 'Accepted' ? (
                        <button
                          onClick={() => {
                            setSelectedProposal(proposal);
                            setIsChatPanelOpen(true);
                          }}
                          className="flex items-center gap-1.5 ml-auto px-3 py-1.5 bg-accent-green/10 hover:bg-accent-green/20 border border-accent-green/20 rounded-lg text-[10px] font-bold uppercase tracking-wider text-accent-green transition-all"
                        >
                          <MessageSquare className="w-3 h-3" />
                          Open Chat
                        </button>
                      ) : (
                        <div className="group relative inline-block">
                          <button
                            disabled
                            className="text-[10px] font-bold uppercase tracking-wider text-white/20 cursor-not-allowed"
                          >
                            Open Chat
                          </button>
                          {proposal.status === 'Pending' && (
                            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-48 p-2 bg-black border border-white/10 rounded-lg shadow-2xl z-50">
                              <p className="text-[10px] text-white/60 text-center">Waiting for other store to respond</p>
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* New Trade Post Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                    <ArrowRightLeft className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">New Guild Post</h3>
                    <p className="text-xs text-white/40">Post inventory needs and surplus to the network</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-red">
                      <ArrowRightLeft className="w-3 h-3 rotate-180" />
                      We Need
                    </label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Item name (e.g. Marlboro Gold)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-red/50 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Quantity (e.g. 10 cartons)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-red/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent-green">
                      <ArrowRightLeft className="w-3 h-3" />
                      We Can Offer
                    </label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Item name (e.g. Camel Blue)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-green/50 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Quantity (e.g. 12 cartons)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-green/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <Tag className="w-3 h-3" />
                      Department
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors appearance-none">
                      <option value="Tobacco">Tobacco</option>
                      <option value="Deli">Deli</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Meat">Meat</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <Phone className="w-3 h-3" />
                      Contact
                    </label>
                    <input
                      type="text"
                      placeholder="Phone or Email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 border-t border-white/10 flex items-center justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3 bg-accent-green text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-green/90 transition-all shadow-lg shadow-accent-green/10"
                >
                  Publish Post
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ProposeTradeModal
        isOpen={isProposeModalOpen}
        onClose={() => setIsProposeModalOpen(false)}
        post={selectedPost}
        onSend={handleSendProposal}
      />

      <ProposalsDrawer
        isOpen={isProposalsDrawerOpen}
        onClose={() => setIsProposalsDrawerOpen(false)}
        post={selectedPost}
        proposals={selectedPost ? (MOCK_PROPOSALS[selectedPost.id] || []) : []}
        onSelectProposal={handleSelectProposal}
      />

      <ReviewProposalModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        post={selectedPost}
        proposal={selectedProposal}
        onAccept={handleAcceptProposal}
        onDecline={handleDeclineProposal}
      />

      <TradeChatPanel
        isOpen={isChatPanelOpen}
        onClose={() => setIsChatPanelOpen(false)}
        proposal={selectedProposal}
      />

      <ManageTradePostModal
        isOpen={isManageModalOpen}
        onClose={() => setIsManageModalOpen(false)}
        post={selectedPost}
        proposals={selectedPost ? (MOCK_PROPOSALS[selectedPost.id] || []) : []}
        onAcceptProposal={handleAcceptProposal}
        onViewProposalDetails={handleViewProposalDetails}
      />

      <ProposalDetailsModal
        isOpen={isProposalDetailsModalOpen}
        onClose={() => setIsProposalDetailsModalOpen(false)}
        proposal={selectedProposal}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-200 bg-accent-green text-black px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 font-bold text-sm"
          >
            <Check className="w-4 h-4" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
