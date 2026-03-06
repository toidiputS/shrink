import React, { useState, useMemo } from 'react';
import { useLottery } from '../hooks/useLottery';
import { useAuth } from '../context/AuthContext';
import {
    Ticket,
    DollarSign,
    TrendingUp,
    History,
    AlertCircle,
    Plus,
    X,
    CheckCircle,
    Calculator,
    Calendar,
    Search
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DemoProtectedAction from './DemoProtectedAction';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Tab = 'active' | 'settlement' | 'history';

export default function LotteryView() {
    const { profile } = useAuth();
    const isManager = profile?.role === 'manager';
    const { books, settlements, isLoading, activateBook, closeBook, updateTicketCount, recordSettlement } = useLottery(profile?.store_id);

    const [activeTab, setActiveTab] = useState<Tab>('active');

    // Modals state
    const [showActivateModal, setShowActivateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState<string | null>(null); // book.id
    const [activateForm, setActivateForm] = useState({ game_name: '', ticket_price: 1, pack_number: '', tickets_total: 100 });
    const [updateForm, setUpdateForm] = useState({ tickets_remaining: 0 });
    const [redeemedValue, setRedeemedValue] = useState(0);

    const activeBooks = useMemo(() => books.filter(b => b.status === 'active' || b.status === 'Active'), [books]);
    const closedBooks = useMemo(() => books.filter(b => b.status === 'closed' || b.status === 'Closed'), [books]);

    const totalSoldValue = useMemo(() => activeBooks.reduce((sum, b) => sum + (b.tickets_sold * b.ticket_price), 0), [activeBooks]);
    const netSettlement = totalSoldValue - redeemedValue;

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center pt-20">
                <div className="w-12 h-12 border-4 border-accent-green/30 border-t-accent-green rounded-full animate-spin" />
            </div>
        );
    }

    const handleActivate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await activateBook(activateForm.game_name, activateForm.ticket_price, activateForm.pack_number, activateForm.tickets_total, profile?.id);
            setShowActivateModal(false);
            setActivateForm({ game_name: '', ticket_price: 1, pack_number: '', tickets_total: 100 });
        } catch (error) {
            console.error('Failed to activate book', error);
        }
    };

    const handleUpdateCount = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!showUpdateModal) return;
        const book = activeBooks.find(b => b.id === showUpdateModal);
        if (!book) return;

        try {
            await updateTicketCount(book.id, updateForm.tickets_remaining, book.tickets_total);
            setShowUpdateModal(null);
            setUpdateForm({ tickets_remaining: 0 });
        } catch (error) {
            console.error('Failed to update ticket count', error);
        }
    };

    const handleRecordSettlement = async () => {
        try {
            await recordSettlement(totalSoldValue, redeemedValue);
            setRedeemedValue(0);
        } catch (error) {
            console.error('Failed to record settlement', error);
        }
    };

    return (
        <div className="flex flex-col gap-6 min-w-0 pb-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 mb-2">
                    <Ticket className="w-8 h-8 text-accent-green" />
                    <div>
                        <h1 className="text-xl font-black text-white uppercase tracking-wider">Lottery Control</h1>
                        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-1">Book Activation & Settlements</p>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-[#0F0F0F] p-1 rounded-xl w-fit border border-white/5">
                <button
                    onClick={() => setActiveTab('active')}
                    className={cn("px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors", activeTab === 'active' ? "bg-accent-green text-black" : "text-white/40 hover:text-white")}
                >
                    Active Books
                </button>
                {isManager && (
                    <button
                        onClick={() => setActiveTab('settlement')}
                        className={cn("px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors", activeTab === 'settlement' ? "bg-accent-green text-black" : "text-white/40 hover:text-white")}
                    >
                        Settlement
                    </button>
                )}
                <button
                    onClick={() => setActiveTab('history')}
                    className={cn("px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors", activeTab === 'history' ? "bg-accent-green text-black" : "text-white/40 hover:text-white")}
                >
                    History
                </button>
            </div>

            {/* ACTIVE BOOKS TAB */}
            {activeTab === 'active' && (
                <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-sm font-bold tracking-widest uppercase text-white/60">Active Books Queue</h2>
                        {isManager && (
                            <button onClick={() => setShowActivateModal(true)} className="flex items-center gap-2 bg-accent-green hover:bg-accent-green/80 text-black px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors">
                                <Plus className="w-4 h-4" /> Activate New Book
                            </button>
                        )}
                    </div>

                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-white/2 border-b border-white/5">
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Game Name</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Pack #</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Price</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20 min-w-[150px]">Sold / Total</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Remaining</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Days Active</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {activeBooks.map((book) => {
                                    const percentSold = (book.tickets_sold / Math.max(1, book.tickets_total)) * 100;
                                    const percentRemaining = 100 - percentSold;
                                    const daysActive = Math.floor((new Date().getTime() - new Date(book.activated_at).getTime()) / (1000 * 3600 * 24));
                                    const isLow = percentRemaining < 10;

                                    return (
                                        <tr key={book.id} className="hover:bg-white/3 transition-colors">
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-bold text-white max-w-[200px] truncate block" title={book.game_name}>{book.game_name}</span>
                                                    {isLow && <span className="bg-red-500/20 text-red-400 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">Low</span>}
                                                </div>
                                            </td>
                                            <td className="p-4 text-xs font-mono text-white/60">{book.pack_number}</td>
                                            <td className="p-4 text-sm font-bold text-accent-green">${book.ticket_price}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-mono font-bold text-white">{book.tickets_sold}</span>
                                                    <span className="text-xs text-white/20">/ {book.tickets_total}</span>
                                                </div>
                                                <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                                                    <div className="h-full bg-accent-green" style={{ width: `${percentSold}%` }} />
                                                </div>
                                            </td>
                                            <td className="p-4 text-xs font-mono font-bold text-white">{book.tickets_remaining}</td>
                                            <td className="p-4 text-xs font-mono text-white/40">{daysActive}d</td>
                                            <td className="p-4">
                                                {isManager ? (
                                                    <DemoProtectedAction>
                                                        <button onClick={() => closeBook(book.id)} className="text-[10px] border border-white/10 hover:border-red-500/50 hover:text-red-400 px-3 py-1.5 rounded text-white/40 uppercase tracking-widest transition-colors cursor-pointer">
                                                            Close Book
                                                        </button>
                                                    </DemoProtectedAction>
                                                ) : (
                                                    <DemoProtectedAction>
                                                        <button
                                                            onClick={() => {
                                                                setUpdateForm({ tickets_remaining: book.tickets_remaining });
                                                                setShowUpdateModal(book.id);
                                                            }}
                                                            className="text-[10px] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded text-white/80 uppercase tracking-widest transition-colors cursor-pointer"
                                                        >
                                                            Update Count
                                                        </button>
                                                    </DemoProtectedAction>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                                {activeBooks.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="p-8 text-center text-white/40 text-sm">No active books. Activate a new book to begin tracking.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* SETTLEMENT TAB (Manager Only) */}
            {activeTab === 'settlement' && isManager && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                            <Calculator className="w-5 h-5 text-accent-green" />
                            <h2 className="text-sm font-bold tracking-widest uppercase text-white/60">Daily Settlement Calculator</h2>
                        </div>

                        <div className="mb-6 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                            <AlertCircle className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                            <div className="text-xs text-white/60 leading-relaxed">
                                <p className="font-bold text-white/90 mb-1">How Settlement Works:</p>
                                <p>1. Employees use the <span className="font-bold text-accent-green">Active Books</span> tab to input the remaining ticket count for each dispenser at the end of their shift.</p>
                                <p>2. The system automatically calculates the <span className="font-bold text-white">Total Sold Value</span> based on these updated counts.</p>
                                <p>3. Enter the <span className="font-bold text-white">Total Redeemed Winning Tickets</span> value from your terminal receipt here.</p>
                                <p>4. <span className="font-bold text-accent-green">Record Settlement</span> to log the net cash expected in the drawer. Do this once daily.</p>
                            </div>
                        </div>

                        <div className="space-y-6 flex-1">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Total Sold Value (From Active Books)</p>
                                <p className="text-3xl font-mono text-white">${totalSoldValue.toFixed(2)}</p>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Total Redeemed Winning Tickets ($)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                    <input
                                        type="number"
                                        value={redeemedValue || ''}
                                        onChange={(e) => setRedeemedValue(parseFloat(e.target.value) || 0)}
                                        className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-green/50 font-mono transition-colors"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div className="bg-accent-green/10 p-4 rounded-xl border border-accent-green/20">
                                <p className="text-[10px] text-accent-green/60 uppercase tracking-widest mb-1">Net Settlement Amount</p>
                                <p className={cn("text-3xl font-mono font-black", netSettlement >= 0 ? "text-accent-green" : "text-red-400")}>
                                    {netSettlement >= 0 ? '+' : ''}${netSettlement.toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <DemoProtectedAction>
                            <button
                                onClick={handleRecordSettlement}
                                className="mt-6 w-full bg-accent-green hover:bg-accent-green/90 text-black py-4 rounded-xl font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CheckCircle className="w-5 h-5" /> Record Settlement
                            </button>
                        </DemoProtectedAction>
                    </div>

                    <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="w-5 h-5 text-accent-green" />
                            <h2 className="text-sm font-bold tracking-widest uppercase text-white/60">7-Day Settlement Trend</h2>
                        </div>
                        <div className="flex-1 min-h-[300px]">
                            {settlements.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={[...settlements].reverse().slice(-7)}>
                                        <XAxis dataKey="date" stroke="#ffffff40" fontSize={10} tickFormatter={(val) => val.split('-').slice(1).join('/')} />
                                        <YAxis stroke="#ffffff40" fontSize={10} tickFormatter={(val) => `$${val}`} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#000000', borderColor: '#ffffff20', borderRadius: '8px' }}
                                            itemStyle={{ color: '#00FF9D', fontFamily: 'monospace' }}
                                            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Net']}
                                            labelStyle={{ color: '#ffffff80', marginBottom: '4px' }}
                                        />
                                        <Line type="monotone" dataKey="net_settlement" stroke="#00FF9D" strokeWidth={3} dot={{ fill: '#00FF9D', stroke: 'none', r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="h-full flex items-center justify-center text-white/30 text-sm">No settlement data available</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* HISTORY TAB */}
            {activeTab === 'history' && (
                <div className="space-y-6">
                    <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl">
                        <h2 className="text-sm font-bold tracking-widest uppercase text-white/60 mb-6 flex items-center gap-2">
                            <History className="w-4 h-4" /> Past Settlements
                        </h2>
                        <div className="overflow-x-auto custom-scrollbar">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/2 border-b border-white/5">
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Date</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Total Sold</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Redeemed</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Net Settlement</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {settlements.map((s) => (
                                        <tr key={s.id} className="hover:bg-white/3 transition-colors">
                                            <td className="p-4 text-sm font-bold text-white">{new Date(s.date).toLocaleDateString()}</td>
                                            <td className="p-4 text-sm font-mono text-white/60">${s.total_activated_value.toFixed(2)}</td>
                                            <td className="p-4 text-sm font-mono text-white/60">${s.total_redeemed_value.toFixed(2)}</td>
                                            <td className={cn("p-4 text-sm font-black font-mono", s.net_settlement >= 0 ? "text-accent-green" : "text-red-400")}>
                                                {s.net_settlement >= 0 ? '+' : ''}${s.net_settlement.toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                    {settlements.length === 0 && (
                                        <tr><td colSpan={4} className="p-6 text-center text-white/30 text-sm">No settlement history.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-white/60 flex items-center gap-2">
                                <Ticket className="w-4 h-4" /> Closed Books
                            </h2>
                        </div>
                        <div className="overflow-x-auto custom-scrollbar">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-white/2 border-b border-white/5">
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Game Name</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Pack #</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Sold / Total</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-white/20">Closed At</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {closedBooks.map((book) => (
                                        <tr key={book.id} className="hover:bg-white/3 transition-colors">
                                            <td className="p-4 text-sm font-bold text-white max-w-[200px] truncate">{book.game_name}</td>
                                            <td className="p-4 text-sm font-mono text-white/60">{book.pack_number}</td>
                                            <td className="p-4 text-sm font-mono text-white/60">{book.tickets_sold} / {book.tickets_total}</td>
                                            <td className="p-4 text-xs text-white/40">{new Date(book.closed_at!).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                    {closedBooks.length === 0 && (
                                        <tr><td colSpan={4} className="p-6 text-center text-white/30 text-sm">No closed books found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* MODALS */}

            {/* Activate Book Modal (Manager) */}
            {showActivateModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
                        <button onClick={() => setShowActivateModal(false)} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-lg font-black uppercase tracking-widest text-white mb-6">Activate New Book</h2>
                        <form onSubmit={handleActivate} className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Game Name</label>
                                <input required type="text" value={activateForm.game_name} onChange={e => setActivateForm({ ...activateForm, game_name: e.target.value })} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-green/50 transition-colors" placeholder="e.g. Mega Cash" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Ticket Price ($)</label>
                                    <input required type="number" min="1" value={activateForm.ticket_price} onChange={e => setActivateForm({ ...activateForm, ticket_price: Number(e.target.value) })} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-accent-green/50 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Total Tickets</label>
                                    <input required type="number" min="1" value={activateForm.tickets_total} onChange={e => setActivateForm({ ...activateForm, tickets_total: Number(e.target.value) })} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-accent-green/50 transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Pack Number</label>
                                <input required type="text" value={activateForm.pack_number} onChange={e => setActivateForm({ ...activateForm, pack_number: e.target.value })} className="w-full bg-black border border-white/10 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-accent-green/50 transition-colors" placeholder="e.g. 123456-123" />
                            </div>
                            <DemoProtectedAction>
                                <button type="submit" className="w-full mt-2 bg-accent-green hover:bg-accent-green/90 text-black py-3 rounded-xl font-bold uppercase tracking-widest transition-colors cursor-pointer">
                                    Activate Book
                                </button>
                            </DemoProtectedAction>
                        </form>
                    </div>
                </div>
            )}

            {/* Update Count Modal (Employee) */}
            {showUpdateModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
                        <button onClick={() => setShowUpdateModal(null)} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-lg font-black uppercase tracking-widest text-white mb-2">Update Ticket Count</h2>
                        <p className="text-xs text-white/40 mb-6">Enter the current number of tickets remaining in the dispenser.</p>
                        <form onSubmit={handleUpdateCount} className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Tickets Remaining</label>
                                <input
                                    required
                                    type="number"
                                    min="0"
                                    value={updateForm.tickets_remaining}
                                    onChange={e => setUpdateForm({ tickets_remaining: Number(e.target.value) })}
                                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-xl text-center focus:outline-none focus:border-accent-green/50 transition-colors"
                                />
                            </div>
                            <DemoProtectedAction>
                                <button type="submit" className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold uppercase tracking-widest transition-colors cursor-pointer">
                                    Save Update
                                </button>
                            </DemoProtectedAction>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
