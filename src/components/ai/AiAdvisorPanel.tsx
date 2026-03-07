import React, { useState, useRef, useEffect } from 'react';
import {
    X,
    Send,
    Trash2,
    Bot,
    User,
    Loader2,
    AlertTriangle,
    Activity,
    Target,
    DollarSign,
    Calculator,
    PackageSearch,
    Repeat,
    Shield,
    Scan,
    LayoutGrid,
    Gauge,
    FileText,
    MousePointerClick,
    ShoppingCart,
    Wallet,
    ClipboardCheck,
    Clock,
    CheckSquare,
    Siren,
    TrendingUp,
    Eye,
    ChevronDown,
    ChevronUp,
    Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChatMessage } from '../../services/aiAdvisor';
import { OracleNodeType } from '../../hooks/useAiAdvisor';

interface AiAdvisorPanelProps {
    isOpen: boolean;
    onClose: () => void;
    messages: ChatMessage[];
    isLoading: boolean;
    error: string | null;
    onSendMessage: (message: string) => void;
    onClearChat: () => void;
    onGenerateReport: (type: OracleNodeType) => void;
}

interface NodeAction {
    id: OracleNodeType;
    label: string;
    description: string;
    icon: React.ElementType;
    color: string;
    bg: string;
    border: string;
    hoverBg: string;
}

const NEXUS_NODES: NodeAction[] = [
    {
        id: 'xenon',
        label: 'XENON',
        description: 'Full system diagnostics',
        icon: Activity,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        hoverBg: 'hover:bg-cyan-500/20'
    },
    {
        id: 'xray',
        label: 'X-RAY',
        description: 'Loss leak detection',
        icon: Scan,
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        hoverBg: 'hover:bg-red-500/20'
    },
    {
        id: 'quota',
        label: 'QUOTA',
        description: 'KPI metrics & targets',
        icon: Target,
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        hoverBg: 'hover:bg-violet-500/20'
    },
    {
        id: 'centurion',
        label: 'CENTURION',
        description: 'Pricing architecture',
        icon: DollarSign,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        hoverBg: 'hover:bg-amber-500/20'
    },
    {
        id: 'core',
        label: 'CORE',
        description: 'Unit economics audit',
        icon: Calculator,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        hoverBg: 'hover:bg-emerald-500/20'
    },
    {
        id: 'yield_plus',
        label: 'YIELD+',
        description: 'Dead stock recovery',
        icon: PackageSearch,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        hoverBg: 'hover:bg-orange-500/20'
    },
    {
        id: 'flux',
        label: 'FLUX',
        description: 'Seasonal pivots',
        icon: Repeat,
        color: 'text-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20',
        hoverBg: 'hover:bg-pink-500/20'
    },
    {
        id: 'bulwark',
        label: 'BULWARK',
        description: 'Customer retention',
        icon: Shield,
        color: 'text-teal-400',
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/20',
        hoverBg: 'hover:bg-teal-500/20'
    },
    {
        id: 'shelf',
        label: 'SHELF',
        description: 'Product optimization',
        icon: LayoutGrid,
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20',
        hoverBg: 'hover:bg-indigo-500/20'
    },
    {
        id: 'util',
        label: 'UTIL',
        description: 'Efficiency audit',
        icon: Gauge,
        color: 'text-lime-400',
        bg: 'bg-lime-500/10',
        border: 'border-lime-500/20',
        hoverBg: 'hover:bg-lime-500/20'
    },
    {
        id: 'net',
        label: 'NET',
        description: 'Generate SOPs',
        icon: FileText,
        color: 'text-sky-400',
        bg: 'bg-sky-500/10',
        border: 'border-sky-500/20',
        hoverBg: 'hover:bg-sky-500/20'
    },
    {
        id: 'locus',
        label: 'LOCUS',
        description: 'Behavior tracking',
        icon: MousePointerClick,
        color: 'text-fuchsia-400',
        bg: 'bg-fuchsia-500/10',
        border: 'border-fuchsia-500/20',
        hoverBg: 'hover:bg-fuchsia-500/20'
    },
];

const OPS_TOOLS: NodeAction[] = [
    {
        id: 'restock',
        label: 'RESTOCK',
        description: 'Reorder point models',
        icon: ShoppingCart,
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        hoverBg: 'hover:bg-green-500/20'
    },
    {
        id: 'cashflow',
        label: 'CASHFLOW',
        description: 'Cash flow forecast',
        icon: Wallet,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
        hoverBg: 'hover:bg-yellow-500/20'
    },
    {
        id: 'comply',
        label: 'COMPLY',
        description: 'Compliance checklists',
        icon: ClipboardCheck,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        hoverBg: 'hover:bg-blue-500/20'
    },
    {
        id: 'shift',
        label: 'SHIFT',
        description: 'Schedule optimization',
        icon: Clock,
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
        border: 'border-rose-500/20',
        hoverBg: 'hover:bg-rose-500/20'
    },
    {
        id: 'qc_check',
        label: 'QC-CHECK',
        description: 'Quality checklists',
        icon: CheckSquare,
        color: 'text-stone-400',
        bg: 'bg-stone-500/10',
        border: 'border-stone-500/20',
        hoverBg: 'hover:bg-stone-500/20'
    },
    {
        id: 'crisis',
        label: 'CRISIS',
        description: 'Crisis playbooks',
        icon: Siren,
        color: 'text-red-500',
        bg: 'bg-red-600/10',
        border: 'border-red-600/20',
        hoverBg: 'hover:bg-red-600/20'
    },
    {
        id: 'pricing_sense',
        label: 'PRICING-SENSE',
        description: 'Price sensitivity',
        icon: TrendingUp,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        hoverBg: 'hover:bg-purple-500/20'
    },
    {
        id: 'view',
        label: 'VIEW',
        description: '30-90 day forecast',
        icon: Eye,
        color: 'text-amber-300',
        bg: 'bg-amber-400/10',
        border: 'border-amber-400/20',
        hoverBg: 'hover:bg-amber-400/20'
    },
];

function NodeGrid({ nodes, isLoading, onActivate }: { nodes: NodeAction[], isLoading: boolean, onActivate: (id: OracleNodeType) => void }) {
    return (
        <div className="grid grid-cols-3 gap-1.5">
            {nodes.map(node => (
                <button
                    key={node.id}
                    onClick={() => onActivate(node.id)}
                    disabled={isLoading}
                    className={`flex flex-col items-center gap-1 px-2 py-2.5 ${node.bg} ${node.border} border rounded-lg ${node.hoverBg} transition-all text-center group disabled:opacity-40`}
                >
                    <node.icon className={`w-4 h-4 ${node.color}`} />
                    <p className={`text-[10px] font-bold ${node.color} leading-none`}>{node.label}</p>
                    <p className="text-[8px] text-white/30 leading-tight">{node.description}</p>
                </button>
            ))}
        </div>
    );
}

export default function AiAdvisorPanel({
    isOpen,
    onClose,
    messages,
    isLoading,
    error,
    onSendMessage,
    onClearChat,
    onGenerateReport
}: AiAdvisorPanelProps) {
    const [input, setInput] = useState('');
    const [showTools, setShowTools] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        onSendMessage(input.trim());
        setInput('');
    };

    const handleExport = (content: string) => {
        const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Oracle_Analysis_${new Date().toISOString().split('T')[0]}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-199"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-[480px] bg-bg-primary border-l border-white/10 z-200 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-2 py-2 border-b border-white/10 shrink-0">
                            <div className="flex items-center gap-1">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                                    <video src="/shrink_logo.webm" autoPlay loop muted playsInline className="w-[150%] h-[150%] object-contain hue-rotate-140deg saturate-150 contrast-125" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-white text-sm">Shrink AI Advisor</h2>
                                    <p className="text-[10px] text-white/40 font-medium">ITS AI Domain Canon</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {messages.length > 0 && (
                                    <button
                                        onClick={onClearChat}
                                        className="p-2 hover:bg-white/5 rounded-lg transition-colors group"
                                        title="Clear chat"
                                    >
                                        <Trash2 className="w-4 h-4 text-white/30 group-hover:text-white/60" />
                                    </button>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    <X className="w-4 h-4 text-white/40" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-4 space-y-4">
                            {messages.length === 0 && !isLoading && (
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-28 h-28 rounded-2xl flex items-center justify-center">
                                        <video src="/shrink_logo.webm" autoPlay loop muted playsInline className="w-[150%] h-[150%] object-contain hue-rotate-140deg saturate-150 contrast-125" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-white/80 font-bold text-sm mb-1">Shrink AI Advisor</h3>
                                        <p className="text-white/30 text-xs max-w-[300px]">
                                            I diagnose your intent and activate the right specialized node tool. Ask me anything, or deploy a tool below.
                                        </p>
                                    </div>

                                    {/* Nexus Nodes */}
                                    <div className="w-full">
                                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2 px-1">⚡ Nexus Nodes</p>
                                        <NodeGrid nodes={NEXUS_NODES} isLoading={isLoading} onActivate={onGenerateReport} />
                                    </div>

                                    {/* Ops Tools */}
                                    <div className="w-full">
                                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-2 px-1">🔧 Operational Tools</p>
                                        <NodeGrid nodes={OPS_TOOLS} isLoading={isLoading} onActivate={onGenerateReport} />
                                    </div>
                                </div>
                            )}

                            {messages.map((msg, i) => (
                                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'assistant' && (
                                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <Bot className="w-3.5 h-3.5 text-emerald-400" />
                                        </div>
                                    )}
                                    <div className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-emerald-500/15 border border-emerald-500/20 text-white/90'
                                        : 'bg-white/5 border border-white/5 text-white/80'
                                        }`}>
                                        {msg.role === 'assistant' ? (
                                            <div className="relative group/msg">
                                                <div className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1 [&_li]:my-0.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-xs [&_strong]:text-emerald-300 [&_code]:bg-white/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs">
                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>
                                                <button
                                                    onClick={() => handleExport(msg.content)}
                                                    className="absolute -right-2 top-0 opacity-0 group-hover/msg:opacity-100 p-1.5 bg-bg-primary/80 backdrop-blur-sm border border-white/10 rounded-md hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all text-white/50 hover:text-emerald-400"
                                                    title="Export Analysis"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        ) : (
                                            <p>{msg.content}</p>
                                        )}
                                    </div>
                                    {msg.role === 'user' && (
                                        <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                                            <User className="w-3.5 h-3.5 text-white/50" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3 justify-start">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                                        <Bot className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl px-4 py-3 flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
                                        <span className="text-xs text-white/40">Oracle processing... activating node...</span>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                    <p className="text-xs text-red-300">{error}</p>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Collapsible Node Tools (when messages exist) */}
                        {messages.length > 0 && (
                            <div className="border-t border-white/5">
                                <button
                                    onClick={() => setShowTools(!showTools)}
                                    className="w-full flex items-center justify-between px-4 py-2 text-[10px] font-bold text-white/30 uppercase tracking-widest hover:bg-white/5 transition-colors"
                                >
                                    <span>⚡ Deploy Node Tool</span>
                                    {showTools ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
                                </button>
                                <AnimatePresence>
                                    {showTools && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden px-4 pb-2"
                                        >
                                            <div className="grid grid-cols-5 gap-1">
                                                {[...NEXUS_NODES, ...OPS_TOOLS].map(node => (
                                                    <button
                                                        key={node.id}
                                                        onClick={() => { onGenerateReport(node.id); setShowTools(false); }}
                                                        disabled={isLoading}
                                                        className={`flex flex-col items-center gap-0.5 px-1 py-1.5 ${node.bg} ${node.border} border rounded-md ${node.hoverBg} transition-all text-center disabled:opacity-40`}
                                                        title={node.description}
                                                    >
                                                        <node.icon className={`w-3 h-3 ${node.color}`} />
                                                        <p className={`text-[7px] font-bold ${node.color} leading-none`}>{node.label}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="shrink-0 px-4 py-3 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder="Ask the Oracle anything..."
                                    disabled={isLoading}
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/40 transition-colors disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="p-3 bg-emerald-500\/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4 text-emerald-400" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
