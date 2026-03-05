import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Store,
    Bot,
    Bell,
    Palette,
    Database,
    Shield,
    Save,
    CheckCircle2,
    Wifi,
    WifiOff,
    RotateCcw,
    Download,
    Trash2,
    Clock,
    User,
    MapPin,
    Phone,
    Mail,
    Hash,
    Zap,
    Volume2,
    VolumeX,
    Monitor,
    Sparkles,
    ChevronRight,
    Lock,
    Eye,
    EyeOff,
    LogIn,
    Key,
    Plus,
    X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type SettingsTab = 'store' | 'ai' | 'notifications' | 'appearance' | 'data' | 'security';

const TABS: { id: SettingsTab; label: string; icon: any; description: string }[] = [
    { id: 'store', label: 'Store Profile', icon: Store, description: 'Store details & manager info' },
    { id: 'ai', label: 'AI Advisor', icon: Bot, description: 'Model endpoint & configuration' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Alert preferences & thresholds' },
    { id: 'appearance', label: 'Appearance', icon: Palette, description: 'Theme, colors & layout' },
    { id: 'data', label: 'Data & Integrations', icon: Database, description: 'Connections, exports & cache' },
    { id: 'security', label: 'Security & Access', icon: Shield, description: 'PIN, sessions & access logs' },
];

interface SettingsState {
    // Store Profile
    storeName: string;
    storeAddress: string;
    storePhone: string;
    storeEmail: string;
    storeId: string;
    managerName: string;
    managerRole: string;
    operatingHours: string;
    // AI Advisor
    aiEndpoint: string;
    aiApiKey: string;
    aiModelName: string;
    // Notifications
    notifShrinkRisk: boolean;
    notifLowStock: boolean;
    notifExpiry: boolean;
    notifMotion: boolean;
    notifTradeGuild: boolean;
    notifSound: boolean;
    lowStockThreshold: number;
    expiryDaysThreshold: number;
    productOverrides: { name: string; lowStock: number; expiryDays: number }[];
    // Appearance
    theme: 'dark' | 'oled';
    accentColor: 'emerald' | 'cyan' | 'amber' | 'ruby';
    compactMode: boolean;
    animations: boolean;
    // Data
    dataRefreshInterval: number;
    // Security
    alarmPin: string;
    sessionTimeout: number;
}

const DEFAULT_SETTINGS: SettingsState = {
    storeName: 'Shrink Demo Store',
    storeAddress: '1234 Main St, Springfield, IL 62701',
    storePhone: '(217) 555-0142',
    storeEmail: 'manager@shrinkstore.com',
    storeId: 'STR-00421',
    managerName: 'John Doe',
    managerRole: 'Store Manager',
    operatingHours: '6:00 AM – 11:00 PM',
    aiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/openai',
    aiApiKey: '',
    aiModelName: 'gemini-2.5-flash',
    notifShrinkRisk: true,
    notifLowStock: true,
    notifExpiry: true,
    notifMotion: false,
    notifTradeGuild: true,
    notifSound: true,
    lowStockThreshold: 5,
    expiryDaysThreshold: 3,
    productOverrides: [],
    theme: 'dark',
    accentColor: 'emerald',
    compactMode: false,
    animations: true,
    dataRefreshInterval: 30,
    alarmPin: '1234',
    sessionTimeout: 30,
};

function loadSettings(): SettingsState {
    try {
        const stored = localStorage.getItem('shrink_settings');
        if (stored) return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    } catch { }
    return DEFAULT_SETTINGS;
}

function saveSettings(settings: SettingsState) {
    localStorage.setItem('shrink_settings', JSON.stringify(settings));
}

// --- Reusable sub-components ---

function SettingsCard({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("bg-black/20 border border-white/5 rounded-2xl p-6", className)}>
            {children}
        </div>
    );
}

function SettingsRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
            <div>
                <div className="text-sm font-semibold text-white">{label}</div>
                {description && <div className="text-[11px] text-white/40 mt-0.5">{description}</div>}
            </div>
            <div className="shrink-0 ml-4">{children}</div>
        </div>
    );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={cn(
                "w-10 h-5 rounded-full relative transition-colors cursor-pointer",
                checked ? "bg-accent-green" : "bg-white/10"
            )}
        >
            <div className={cn(
                "absolute top-0.5 w-4 h-4 rounded-full transition-all shadow-md",
                checked
                    ? "right-0.5 bg-white shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                    : "left-0.5 bg-white/50"
            )} />
        </button>
    );
}

function TextInput({ value, onChange, placeholder, icon: Icon, type = 'text' }: {
    value: string; onChange: (v: string) => void; placeholder?: string; icon?: any; type?: string;
}) {
    return (
        <div className="relative">
            {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={cn(
                    "w-full bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 py-2.5 focus:outline-none focus:border-accent-green/50 transition-colors",
                    Icon ? "pl-10 pr-4" : "px-4"
                )}
            />
        </div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">{children}</h3>;
}

// === MAIN COMPONENT ===

export default function SettingsView() {
    const [activeTab, setActiveTab] = useState<SettingsTab>('store');
    const [settings, setSettings] = useState<SettingsState>(loadSettings);
    const [saved, setSaved] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
    const [showPin, setShowPin] = useState(false);
    const [showApiKey, setShowApiKey] = useState(false);

    // Auto-save on change
    useEffect(() => {
        saveSettings(settings);
    }, [settings]);

    const update = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        saveSettings(settings);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const testConnection = async () => {
        setConnectionStatus('testing');
        try {
            const headers: Record<string, string> = {};
            if (settings.aiApiKey) {
                headers['Authorization'] = `Bearer ${settings.aiApiKey}`;
            }
            const res = await fetch(`${settings.aiEndpoint}/models`, {
                headers,
                signal: AbortSignal.timeout(5000)
            });
            if (res.ok) {
                setConnectionStatus('success');
            } else {
                setConnectionStatus('error');
            }
        } catch {
            setConnectionStatus('error');
        }
        setTimeout(() => setConnectionStatus('idle'), 4000);
    };

    const accentColors = [
        { id: 'emerald' as const, label: 'Emerald', tw: 'bg-emerald-500', ring: 'ring-emerald-400' },
        { id: 'cyan' as const, label: 'Cyan', tw: 'bg-cyan-500', ring: 'ring-cyan-400' },
        { id: 'amber' as const, label: 'Amber', tw: 'bg-amber-500', ring: 'ring-amber-400' },
        { id: 'ruby' as const, label: 'Ruby', tw: 'bg-red-500', ring: 'ring-red-400' },
    ];

    const mockLoginHistory = [
        { time: 'Today, 11:42 PM', device: 'Chrome · Windows 11', ip: '192.168.1.105', status: 'Active' },
        { time: 'Today, 6:30 AM', device: 'Edge · Windows 11', ip: '192.168.1.105', status: 'Expired' },
        { time: 'Yesterday, 9:15 PM', device: 'Chrome · Windows 11', ip: '192.168.1.105', status: 'Expired' },
        { time: 'Mar 1, 8:00 AM', device: 'Mobile Safari · iOS', ip: '172.16.0.42', status: 'Expired' },
    ];

    // --- Tab Content Renderers ---

    const renderStoreProfile = () => (
        <div className="space-y-6">
            <SectionTitle>Store Information</SectionTitle>
            <SettingsCard>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Store Name</label>
                        <TextInput value={settings.storeName} onChange={(v) => update('storeName', v)} icon={Store} />
                    </div>
                    <div className="col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Address</label>
                        <TextInput value={settings.storeAddress} onChange={(v) => update('storeAddress', v)} icon={MapPin} />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Phone</label>
                        <TextInput value={settings.storePhone} onChange={(v) => update('storePhone', v)} icon={Phone} />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Email</label>
                        <TextInput value={settings.storeEmail} onChange={(v) => update('storeEmail', v)} icon={Mail} />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Store ID</label>
                        <TextInput value={settings.storeId} onChange={(v) => update('storeId', v)} icon={Hash} />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Operating Hours</label>
                        <TextInput value={settings.operatingHours} onChange={(v) => update('operatingHours', v)} icon={Clock} />
                    </div>
                </div>
            </SettingsCard>

            <SectionTitle>Manager</SectionTitle>
            <SettingsCard>
                <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-accent-green/20 border border-accent-green/30 flex items-center justify-center text-lg font-black text-accent-green">
                        {settings.managerName.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                        <div className="text-base font-bold text-white">{settings.managerName}</div>
                        <div className="text-xs text-white/40">{settings.managerRole}</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Name</label>
                        <TextInput value={settings.managerName} onChange={(v) => update('managerName', v)} icon={User} />
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Role</label>
                        <TextInput value={settings.managerRole} onChange={(v) => update('managerRole', v)} icon={Shield} />
                    </div>
                </div>
            </SettingsCard>
        </div>
    );

    const renderAiAdvisor = () => (
        <div className="space-y-6">
            <SectionTitle>Model Connection</SectionTitle>
            <SettingsCard>
                <div className="space-y-4">
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">API Endpoint</label>
                        <TextInput value={settings.aiEndpoint} onChange={(v) => update('aiEndpoint', v)} icon={Wifi} />
                        <p className="text-[10px] text-white/30 mt-1.5 ml-1">Gemini: <span className="font-mono text-white/50">https://generativelanguage.googleapis.com/v1beta/openai</span></p>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">API Key</label>
                        <div className="relative">
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                type={showApiKey ? 'text' : 'password'}
                                value={settings.aiApiKey}
                                onChange={(e) => update('aiApiKey', e.target.value)}
                                placeholder="Paste your API key here"
                                className="w-full bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 py-2.5 pl-10 pr-12 font-mono tracking-wider focus:outline-none focus:border-accent-green/50 transition-colors"
                            />
                            <button
                                onClick={() => setShowApiKey(!showApiKey)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 cursor-pointer"
                            >
                                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        <p className="text-[10px] text-white/30 mt-1.5 ml-1">Get your key at <span className="font-mono text-accent-green/60">aistudio.google.com</span></p>
                    </div>
                    <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Model Name</label>
                        <TextInput value={settings.aiModelName} onChange={(v) => update('aiModelName', v)} icon={Bot} />
                        <p className="text-[10px] text-white/30 mt-1.5 ml-1">e.g. <span className="font-mono text-white/50">gemini-2.5-flash</span>, <span className="font-mono text-white/50">gemini-2.5-pro</span></p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                        <button
                            onClick={testConnection}
                            disabled={connectionStatus === 'testing'}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border",
                                connectionStatus === 'testing' ? "bg-white/5 border-white/10 text-white/40 cursor-wait" :
                                    connectionStatus === 'success' ? "bg-accent-green/20 border-accent-green/40 text-accent-green" :
                                        connectionStatus === 'error' ? "bg-accent-red/20 border-accent-red/40 text-accent-red" :
                                            "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white cursor-pointer"
                            )}
                        >
                            {connectionStatus === 'testing' ? (
                                <><RotateCcw className="w-3.5 h-3.5 animate-spin" /> Testing...</>
                            ) : connectionStatus === 'success' ? (
                                <><CheckCircle2 className="w-3.5 h-3.5" /> Connected</>
                            ) : connectionStatus === 'error' ? (
                                <><WifiOff className="w-3.5 h-3.5" /> Connection Failed</>
                            ) : (
                                <><Wifi className="w-3.5 h-3.5" /> Test Connection</>
                            )}
                        </button>
                    </div>
                </div>
            </SettingsCard>

            <SectionTitle>System Prompt Preview</SectionTitle>
            <SettingsCard className="max-h-52 overflow-y-auto custom-scrollbar">
                <pre className="text-[11px] text-white/50 font-mono whitespace-pre-wrap leading-relaxed">
                    {`You are the core AI Advisor for 'Shrink'.
The goal is to reduce retail shrinkage by 20-40%.

Your job:
1. Identify items nearing expiration or not selling well
2. Suggest moving stagnant items to the Traders Guild
3. Analyze business health: trends, losses, strengths

Be direct, analytical, and action-oriented.
Format responses with Markdown.`}
                </pre>
            </SettingsCard>
        </div>
    );

    const renderNotifications = () => (
        <div className="space-y-6">
            <SectionTitle>Alert Types</SectionTitle>
            <SettingsCard>
                <SettingsRow label="Shrink Risk Alerts" description="Notify when items reach high shrink risk">
                    <Toggle checked={settings.notifShrinkRisk} onChange={(v) => update('notifShrinkRisk', v)} />
                </SettingsRow>
                <SettingsRow label="Low Stock Warnings" description="Alert when inventory drops below threshold">
                    <Toggle checked={settings.notifLowStock} onChange={(v) => update('notifLowStock', v)} />
                </SettingsRow>
                <SettingsRow label="Expiry Warnings" description="Notify before items reach sell-by date">
                    <Toggle checked={settings.notifExpiry} onChange={(v) => update('notifExpiry', v)} />
                </SettingsRow>
                <SettingsRow label="Motion Alerts" description="Security camera motion detection notifications">
                    <Toggle checked={settings.notifMotion} onChange={(v) => update('notifMotion', v)} />
                </SettingsRow>
                <SettingsRow label="Trade Guild Activity" description="New trade posts and proposals">
                    <Toggle checked={settings.notifTradeGuild} onChange={(v) => update('notifTradeGuild', v)} />
                </SettingsRow>
            </SettingsCard>

            <SectionTitle>Global Thresholds</SectionTitle>
            <SettingsCard>
                <SettingsRow label="Low Stock Threshold" description={`Alert when stock drops below ${settings.lowStockThreshold} units`}>
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            min={1}
                            max={25}
                            value={settings.lowStockThreshold}
                            onChange={(e) => update('lowStockThreshold', parseInt(e.target.value))}
                            className="w-32 accent-emerald-500"
                        />
                        <span className="text-sm font-bold text-white w-8 text-right">{settings.lowStockThreshold}</span>
                    </div>
                </SettingsRow>
                <SettingsRow label="Expiry Warning Days" description={`Alert ${settings.expiryDaysThreshold} days before expiry`}>
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            min={1}
                            max={14}
                            value={settings.expiryDaysThreshold}
                            onChange={(e) => update('expiryDaysThreshold', parseInt(e.target.value))}
                            className="w-32 accent-emerald-500"
                        />
                        <span className="text-sm font-bold text-white w-8 text-right">{settings.expiryDaysThreshold}d</span>
                    </div>
                </SettingsRow>
            </SettingsCard>

            <SectionTitle>Product-Specific Overrides</SectionTitle>
            <SettingsCard>
                <p className="text-xs text-white/30 mb-4">Set custom thresholds for specific products. These override the global defaults above.</p>

                {/* Add override form */}
                <div className="flex items-end gap-2 mb-4">
                    <div className="flex-1">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 block">Product Name</label>
                        <input
                            id="override-product-name"
                            type="text"
                            placeholder="e.g. Whole Milk 1gal"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/40 transition-colors"
                        />
                    </div>
                    <div className="w-24">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 block">Low Stock</label>
                        <input
                            id="override-low-stock"
                            type="number"
                            min={1}
                            max={100}
                            defaultValue={settings.lowStockThreshold}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white text-center focus:outline-none focus:border-emerald-500/40 transition-colors"
                        />
                    </div>
                    <div className="w-24">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1 block">Expiry Days</label>
                        <input
                            id="override-expiry-days"
                            type="number"
                            min={1}
                            max={30}
                            defaultValue={settings.expiryDaysThreshold}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white text-center focus:outline-none focus:border-emerald-500/40 transition-colors"
                        />
                    </div>
                    <button
                        onClick={() => {
                            const nameEl = document.getElementById('override-product-name') as HTMLInputElement;
                            const lowEl = document.getElementById('override-low-stock') as HTMLInputElement;
                            const expEl = document.getElementById('override-expiry-days') as HTMLInputElement;
                            const name = nameEl?.value?.trim();
                            if (!name) return;
                            const lowStock = parseInt(lowEl?.value) || settings.lowStockThreshold;
                            const expiryDays = parseInt(expEl?.value) || settings.expiryDaysThreshold;
                            const existing = settings.productOverrides.filter(o => o.name.toLowerCase() !== name.toLowerCase());
                            update('productOverrides', [...existing, { name, lowStock, expiryDays }]);
                            if (nameEl) nameEl.value = '';
                        }}
                        className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg transition-all shrink-0"
                        title="Add override"
                    >
                        <Plus className="w-4 h-4 text-emerald-400" />
                    </button>
                </div>

                {/* Override list */}
                {settings.productOverrides.length === 0 ? (
                    <div className="text-center py-6 border border-dashed border-white/10 rounded-lg">
                        <p className="text-xs text-white/20">No product overrides yet</p>
                        <p className="text-[10px] text-white/10 mt-1">Add products above that need custom thresholds</p>
                    </div>
                ) : (
                    <div className="space-y-1.5">
                        {settings.productOverrides.map((override, i) => (
                            <div key={i} className="flex items-center justify-between gap-3 px-3 py-2.5 bg-white/5 border border-white/5 rounded-lg group hover:border-white/10 transition-colors">
                                <span className="text-sm text-white/80 font-medium flex-1 truncate">{override.name}</span>
                                <div className="flex items-center gap-4 shrink-0">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] text-white/30 uppercase">Stock</span>
                                        <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">{override.lowStock}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] text-white/30 uppercase">Expiry</span>
                                        <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">{override.expiryDays}d</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            update('productOverrides', settings.productOverrides.filter((_, idx) => idx !== i));
                                        }}
                                        className="p-1 hover:bg-red-500/20 rounded transition-colors opacity-0 group-hover:opacity-100"
                                        title="Remove override"
                                    >
                                        <X className="w-3.5 h-3.5 text-red-400" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </SettingsCard>

            <SectionTitle>Sound</SectionTitle>
            <SettingsCard>
                <SettingsRow label="Notification Sound" description="Play sound for critical alerts">
                    <div className="flex items-center gap-2">
                        {settings.notifSound ? <Volume2 className="w-4 h-4 text-accent-green" /> : <VolumeX className="w-4 h-4 text-white/30" />}
                        <Toggle checked={settings.notifSound} onChange={(v) => update('notifSound', v)} />
                    </div>
                </SettingsRow>
            </SettingsCard>
        </div>
    );

    const renderAppearance = () => (
        <div className="space-y-6">
            <SectionTitle>Theme</SectionTitle>
            <SettingsCard>
                <div className="grid grid-cols-2 gap-3">
                    {(['dark', 'oled'] as const).map(theme => (
                        <button
                            key={theme}
                            onClick={() => update('theme', theme)}
                            className={cn(
                                "p-4 rounded-xl border-2 transition-all text-left cursor-pointer",
                                settings.theme === theme
                                    ? "border-accent-green bg-accent-green/10"
                                    : "border-white/10 bg-white/5 hover:border-white/20"
                            )}
                        >
                            <div className={cn(
                                "w-full h-12 rounded-lg mb-3 border border-white/10",
                                theme === 'dark' ? "bg-bg-secondary" : "bg-[#000000]"
                            )} />
                            <div className="text-sm font-bold text-white capitalize">{theme === 'oled' ? 'OLED Black' : 'Dark'}</div>
                            <div className="text-[10px] text-white/40 mt-0.5">
                                {theme === 'dark' ? 'Standard dark theme' : 'True black for OLED displays'}
                            </div>
                        </button>
                    ))}
                </div>
            </SettingsCard>

            <SectionTitle>Accent Color</SectionTitle>
            <SettingsCard>
                <div className="flex items-center gap-4">
                    {accentColors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => update('accentColor', color.id)}
                            className="flex flex-col items-center gap-2 group cursor-pointer"
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-xl transition-all",
                                color.tw,
                                settings.accentColor === color.id ? `ring-2 ${color.ring} ring-offset-2 ring-offset-black scale-110` : "opacity-60 group-hover:opacity-100"
                            )} />
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest",
                                settings.accentColor === color.id ? "text-white" : "text-white/40"
                            )}>{color.label}</span>
                        </button>
                    ))}
                </div>
            </SettingsCard>

            <SectionTitle>Layout & Motion</SectionTitle>
            <SettingsCard>
                <SettingsRow label="Compact Mode" description="Denser data tables and smaller spacing">
                    <Toggle checked={settings.compactMode} onChange={(v) => update('compactMode', v)} />
                </SettingsRow>
                <SettingsRow label="Animations" description="Enable smooth transitions and micro-animations">
                    <div className="flex items-center gap-2">
                        <Sparkles className={cn("w-4 h-4", settings.animations ? "text-accent-green" : "text-white/30")} />
                        <Toggle checked={settings.animations} onChange={(v) => update('animations', v)} />
                    </div>
                </SettingsRow>
            </SettingsCard>
        </div>
    );

    const renderDataIntegrations = () => (
        <div className="space-y-6">
            <SectionTitle>POS System</SectionTitle>
            <SettingsCard>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-green/20 border border-accent-green/30 flex items-center justify-center">
                            <Monitor className="w-5 h-5 text-accent-green" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">POS Integration</div>
                            <div className="text-[10px] text-white/40 uppercase tracking-widest">Mock · Connected</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-green/10 border border-accent-green/20 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                        <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">Online</span>
                    </div>
                </div>
            </SettingsCard>

            <SectionTitle>Data Refresh</SectionTitle>
            <SettingsCard>
                <SettingsRow label="Auto-Refresh Interval" description={`Refresh data every ${settings.dataRefreshInterval} seconds`}>
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            min={5}
                            max={120}
                            step={5}
                            value={settings.dataRefreshInterval}
                            onChange={(e) => update('dataRefreshInterval', parseInt(e.target.value))}
                            className="w-32 accent-emerald-500"
                        />
                        <span className="text-sm font-bold text-white w-10 text-right">{settings.dataRefreshInterval}s</span>
                    </div>
                </SettingsRow>
            </SettingsCard>

            <SectionTitle>Export & Cache</SectionTitle>
            <SettingsCard>
                <div className="grid grid-cols-3 gap-3">
                    <button className="flex flex-col items-center gap-2 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer group">
                        <Download className="w-5 h-5 text-white/40 group-hover:text-accent-green transition-colors" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white">Export CSV</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors cursor-pointer group">
                        <Download className="w-5 h-5 text-white/40 group-hover:text-accent-blue transition-colors" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white">Export JSON</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 bg-white/5 hover:bg-accent-red/10 border border-white/10 hover:border-accent-red/30 rounded-xl transition-colors cursor-pointer group">
                        <Trash2 className="w-5 h-5 text-white/40 group-hover:text-accent-red transition-colors" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-accent-red">Clear Cache</span>
                    </button>
                </div>
            </SettingsCard>
        </div>
    );

    const renderSecurityAccess = () => (
        <div className="space-y-6">
            <SectionTitle>Alarm PIN</SectionTitle>
            <SettingsCard>
                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Current PIN</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                                type={showPin ? 'text' : 'password'}
                                value={settings.alarmPin}
                                onChange={(e) => update('alarmPin', e.target.value)}
                                maxLength={6}
                                className="w-full bg-white/5 border border-white/10 rounded-lg text-sm text-white py-2.5 pl-10 pr-12 font-mono tracking-[0.3em] focus:outline-none focus:border-accent-green/50 transition-colors"
                            />
                            <button
                                onClick={() => setShowPin(!showPin)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 cursor-pointer"
                            >
                                {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </SettingsCard>

            <SectionTitle>Session</SectionTitle>
            <SettingsCard>
                <SettingsRow label="Session Timeout" description={`Auto-lock after ${settings.sessionTimeout} minutes of inactivity`}>
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            min={5}
                            max={120}
                            step={5}
                            value={settings.sessionTimeout}
                            onChange={(e) => update('sessionTimeout', parseInt(e.target.value))}
                            className="w-32 accent-emerald-500"
                        />
                        <span className="text-sm font-bold text-white w-12 text-right">{settings.sessionTimeout}m</span>
                    </div>
                </SettingsRow>
            </SettingsCard>

            <SectionTitle>Login History</SectionTitle>
            <SettingsCard className="p-0 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/3 border-b border-white/5">
                        <tr>
                            <th className="px-5 py-3 text-[9px] font-black text-white/40 uppercase tracking-widest">Time</th>
                            <th className="px-5 py-3 text-[9px] font-black text-white/40 uppercase tracking-widest">Device</th>
                            <th className="px-5 py-3 text-[9px] font-black text-white/40 uppercase tracking-widest">IP</th>
                            <th className="px-5 py-3 text-[9px] font-black text-white/40 uppercase tracking-widest">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockLoginHistory.map((entry, i) => (
                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors">
                                <td className="px-5 py-3 text-xs text-white/70 font-medium">{entry.time}</td>
                                <td className="px-5 py-3 text-xs text-white/50">{entry.device}</td>
                                <td className="px-5 py-3 text-xs text-white/40 font-mono">{entry.ip}</td>
                                <td className="px-5 py-3">
                                    <span className={cn(
                                        "px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest",
                                        entry.status === 'Active'
                                            ? "bg-accent-green/10 text-accent-green border border-accent-green/20"
                                            : "bg-white/5 text-white/30 border border-white/5"
                                    )}>{entry.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </SettingsCard>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'store': return renderStoreProfile();
            case 'ai': return renderAiAdvisor();
            case 'notifications': return renderNotifications();
            case 'appearance': return renderAppearance();
            case 'data': return renderDataIntegrations();
            case 'security': return renderSecurityAccess();
        }
    };

    return (
        <div className="flex flex-col h-full bg-bg-primary text-white overflow-hidden">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black uppercase tracking-wider text-white">Settings</h1>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] mt-1">Configuration & Preferences</p>
                </div>
                <button
                    onClick={handleSave}
                    className={cn(
                        "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all border cursor-pointer",
                        saved
                            ? "bg-accent-green/20 border-accent-green/40 text-accent-green"
                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    )}
                >
                    {saved ? <><CheckCircle2 className="w-4 h-4" /> Saved</> : <><Save className="w-4 h-4" /> Save Changes</>}
                </button>
            </div>

            {/* Body: Tab Nav + Content */}
            <div className="flex-1 flex gap-6 min-h-0">
                {/* Tab Navigation */}
                <div className="w-64 shrink-0 flex flex-col gap-1">
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all cursor-pointer group",
                                activeTab === tab.id
                                    ? "bg-accent-green/10 border border-accent-green/20"
                                    : "hover:bg-white/5 border border-transparent"
                            )}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                                activeTab === tab.id ? "bg-accent-green/20" : "bg-white/5 group-hover:bg-white/10"
                            )}>
                                <tab.icon className={cn(
                                    "w-4 h-4",
                                    activeTab === tab.id ? "text-accent-green" : "text-white/40 group-hover:text-white/60"
                                )} />
                            </div>
                            <div>
                                <div className={cn(
                                    "text-sm font-bold",
                                    activeTab === tab.id ? "text-white" : "text-white/60 group-hover:text-white"
                                )}>{tab.label}</div>
                                <div className="text-[10px] text-white/30">{tab.description}</div>
                            </div>
                            {activeTab === tab.id && (
                                <ChevronRight className="w-4 h-4 text-accent-green ml-auto" />
                            )}
                        </button>
                    ))}

                    {/* Version info */}
                    <div className="mt-auto pt-6 px-4">
                        <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                            Shrink v2.4.0
                        </div>
                        <div className="text-[9px] font-mono text-white/15 mt-0.5">
                            Build 2026.03.03
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.15 }}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
