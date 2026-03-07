import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ShieldAlert,
    ShieldCheck,
    Video,
    Clock,
    AlertTriangle,
    Download,
    CheckCircle2,
    Maximize2,
    ZoomIn,
    Play,
    Pause,
    Rewind,
    FastForward,
    Camera,
    Flag,
    X,
    Lock,
    Unlock,
    Eye
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Camera {
    id: string;
    name: string;
    location: string;
    status: 'Online' | 'Offline' | 'Recording';
}

const MOCK_CAMERAS: Camera[] = [
    { id: 'CAM-01', name: 'Front Entrance', location: 'Main Doors', status: 'Recording' },
    { id: 'CAM-02', name: 'Tobacco Wall', location: 'Register 1', status: 'Online' },
    { id: 'CAM-03', name: 'Beer Cooler', location: 'Aisle 8', status: 'Recording' },
    { id: 'CAM-04', name: 'Deli Counter', location: 'Fresh Section', status: 'Online' },
    { id: 'CAM-05', name: 'Checkout 1', location: 'Registers', status: 'Recording' },
    { id: 'CAM-06', name: 'Checkout 2', location: 'Registers', status: 'Online' },
    { id: 'CAM-07', name: 'Back Storage', location: 'Stockroom', status: 'Recording' },
    { id: 'CAM-08', name: 'Parking Lot', location: 'Exterior', status: 'Offline' },
    { id: 'CAM-09', name: 'Side Entrance', location: 'Exterior', status: 'Recording' },
    { id: 'CAM-10', name: 'Receiving Dock', location: 'Backroom', status: 'Online' },
    { id: 'CAM-11', name: 'Office Corridor', location: 'Hallway', status: 'Online' },
    { id: 'CAM-12', name: 'Dairy Aisle', location: 'Aisle 12', status: 'Recording' },
    { id: 'CAM-13', name: 'Produce', location: 'Fresh Section', status: 'Online' },
    { id: 'CAM-14', name: 'Bakery', location: 'Fresh Section', status: 'Online' },
    { id: 'CAM-15', name: 'Pharmacy', location: 'Secure Area', status: 'Recording' },
    { id: 'CAM-16', name: 'Customer Service', location: 'Front End', status: 'Online' },
];

export interface Incident {
    id: string;
    timestamp: string;
    cameraId: string;
    location: string;
    type: string;
    notes: string;
    flaggedBy: string;
    status: 'Open' | 'Reviewed' | 'Escalated';
}

const INITIAL_INCIDENTS: Incident[] = [
    { id: 'INC-001', timestamp: 'Mar 05, 14:32', cameraId: 'CAM-02', location: 'Tobacco Wall', type: 'Suspicious Activity', notes: 'Subject lingering near high-value cabinet', flaggedBy: 'Auto-Detect', status: 'Reviewed' },
    { id: 'INC-002', timestamp: 'Mar 04, 09:15', cameraId: 'CAM-08', location: 'Parking Lot', type: 'Vandalism', notes: 'Graffiti on side wall', flaggedBy: 'J. Smith', status: 'Escalated' },
    { id: 'INC-003', timestamp: 'Mar 03, 22:45', cameraId: 'CAM-03', location: 'Beer Cooler', type: 'Theft', notes: 'Concealment of merchandise', flaggedBy: 'Auto-Detect', status: 'Open' },
];

interface MotionAlert {
    id: string;
    timestamp: string;
    cameraId: string;
    cameraName: string;
    location: string;
}

const ZONES = [
    'Front Entrance', 'Checkout Area', 'Tobacco Wall',
    'Beer & Liquor', 'Back Storage', 'Parking Lot'
];

export default function SecurityView() {
    const [gridSize, setGridSize] = useState<2 | 3 | 4>(3);
    const [activeCamera, setActiveCamera] = useState<Camera | null>(null);
    const [activeSection, setActiveSection] = useState<'cameras' | 'alerts' | 'alarm' | 'incidents'>('cameras');

    const [isArmed, setIsArmed] = useState(true);
    const [armingModalOpen, setArmingModalOpen] = useState(false);
    const [disarmModalOpen, setDisarmModalOpen] = useState(false);
    const [disarmPin, setDisarmPin] = useState('');

    const [alertActive, setAlertActive] = useState(false);
    const [panicModalOpen, setPanicModalOpen] = useState(false);

    const [incidents, setIncidents] = useState<Incident[]>(INITIAL_INCIDENTS);
    const [motionAlerts, setMotionAlerts] = useState<MotionAlert[]>([
      { id: '1', timestamp: 'Mar 05, 14:31', cameraId: 'CAM-02', cameraName: 'CAM-02', location: 'Tobacco Wall' },
      { id: '2', timestamp: 'Mar 04, 09:14', cameraId: 'CAM-08', cameraName: 'CAM-08', location: 'Parking Lot' },
      { id: '3', timestamp: 'Mar 03, 22:47', cameraId: 'CAM-05', cameraName: 'CAM-05', location: 'Checkout 1' },
    ]);
    const [motionCameras, setMotionCameras] = useState<string[]>([]);

    const [now, setNow] = useState(new Date());

    // Real-time clock
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Simulate random motion alerts
    useEffect(() => {
        const interval = setInterval(() => {
            const randomCam = MOCK_CAMERAS[Math.floor(Math.random() * MOCK_CAMERAS.length)];
            if (randomCam.status === 'Offline') return;

            const newAlert: MotionAlert = {
                id: `mot-${Date.now()}`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                cameraId: randomCam.id,
                cameraName: randomCam.name,
                location: randomCam.location
            };

            setMotionAlerts(prev => [newAlert, ...prev].slice(0, 10)); // Keep max 10

            // Flash motion badge on camera for 3 seconds
            setMotionCameras(prev => [...prev, randomCam.id]);
            setTimeout(() => {
                setMotionCameras(prev => prev.filter(id => id !== randomCam.id));
            }, 3000);

        }, 25000); // Create an alert every 25 seconds

        return () => clearInterval(interval);
    }, []);

    const displayedCameras = MOCK_CAMERAS.slice(0, gridSize * gridSize);

    return (
        <div className={cn(
            "flex flex-col h-full bg-bg-primary p-3 sm:p-6 text-white overflow-hidden transition-colors duration-500",
            alertActive ? "border-4 border-accent-red bg-accent-red/5" : ""
        )}>
            {/* Header */}
            <div className="mb-3 sm:mb-6 flex items-center justify-between gap-2">
                <div className="min-w-0">
                    <h1 className="text-lg sm:text-2xl font-black uppercase tracking-wider text-white">Security Command</h1>
                    <p className="text-[9px] sm:text-xs text-white/40 uppercase tracking-[0.2em] mt-1">Live Surveillance & Alarm Control</p>
                </div>
                <div className="shrink-0">
                    {alertActive ? (
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-accent-red/10 border border-accent-red/40 rounded-full animate-pulse">
                            <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-red" />
                            <span className="text-[9px] sm:text-xs font-black text-accent-red uppercase tracking-widest leading-none">Alert</span>
                        </div>
                    ) : isArmed ? (
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-accent-orange/10 border border-accent-orange/40 rounded-full">
                            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-orange" />
                            <span className="text-[9px] sm:text-xs font-black text-accent-orange uppercase tracking-widest leading-none">Armed</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-accent-green/10 border border-accent-green/20 rounded-full">
                            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-green" />
                            <span className="text-[9px] sm:text-xs font-black text-accent-green uppercase tracking-widest leading-none">Nominal</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Section Tabs */}
            <div className="flex lg:hidden gap-1 mb-3 overflow-x-auto pb-1">
                {[
                    { id: 'cameras' as const, label: 'Cameras', icon: Video },
                    { id: 'alarm' as const, label: 'Alarm', icon: ShieldCheck },
                    { id: 'alerts' as const, label: 'Alerts', icon: Eye },
                    { id: 'incidents' as const, label: 'Log', icon: Flag },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveSection(tab.id)}
                        className={cn(
                            "flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all border whitespace-nowrap",
                            activeSection === tab.id
                                ? "bg-accent-green/10 text-accent-green border-accent-green/30"
                                : "bg-white/3 text-white/40 border-white/5 hover:bg-white/5"
                        )}
                    >
                        <tab.icon className="w-3.5 h-3.5" />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-3 sm:gap-6 min-h-0 overflow-auto lg:overflow-hidden">

                {/* Left Sidebar: Motion Alerts — visible on desktop always, on mobile only when tab active */}
                <div className={cn("lg:w-64 shrink-0 flex flex-col gap-3 sm:gap-6", activeSection !== 'alerts' && "hidden lg:flex")}>
                    <div className="flex-1 bg-black/20 border border-white/5 rounded-2xl flex flex-col overflow-hidden min-h-[200px] lg:min-h-0">
                        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/2">
                            <h2 className="text-[10px] uppercase tracking-widest font-black text-white/40">Motion Alerts</h2>
                            <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
                            <AnimatePresence>
                                {motionAlerts.map(alert => (
                                    <motion.div
                                        key={alert.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="p-3 bg-white/5 border border-white/5 rounded-xl flex flex-col gap-2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-accent-orange uppercase">{alert.cameraId}</span>
                                            <span className="text-[9px] font-mono text-white/40">{alert.timestamp}</span>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white leading-tight">{alert.cameraName}</div>
                                            <div className="text-[9px] text-white/40 font-medium uppercase mt-0.5">{alert.location}</div>
                                        </div>
                                        <button
                                            onClick={() => { setActiveCamera(MOCK_CAMERAS.find(c => c.id === alert.cameraId) || null); }}
                                            className="mt-1 w-full py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest text-white/60 transition-colors"
                                        >
                                            View Camera
                                        </button>
                                    </motion.div>
                                ))}
                                {motionAlerts.length === 0 && (
                                    <div className="p-4 text-center text-white/20 text-xs font-medium">No recent motion</div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Center: Camera Grid & Incident Log */}
                <div className="flex-1 flex flex-col gap-3 sm:gap-6 min-w-0">
                    {/* Camera Grid */}
                    <div className={cn("flex-1 bg-black/20 border border-white/5 rounded-2xl flex flex-col min-h-0", activeSection !== 'cameras' && "hidden lg:flex")}>
                        <div className="px-3 sm:px-5 py-3 border-b border-white/5 flex items-center justify-between bg-white/2 shrink-0">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Video className="w-4 h-4 text-white/40" />
                                <h2 className="text-[10px] uppercase tracking-widest font-black text-white">Live Camera Grid</h2>
                            </div>
                            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                                {[2, 3, 4].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setGridSize(size as 2 | 3 | 4)}
                                        className={cn(
                                            "px-2 py-1 rounded text-[9px] font-bold transition-all",
                                            gridSize === size ? "bg-white/10 text-white" : "text-white/40 hover:text-white/80"
                                        )}
                                    >
                                        {size}×{size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Feed Grid — 2 cols on mobile always */}
                        <div className={cn(
                            "flex-1 p-2 sm:p-3 grid gap-2 sm:gap-3 min-h-0 overflow-y-auto custom-scrollbar",
                            "grid-cols-2",
                            gridSize === 3 ? "sm:grid-cols-3" : gridSize === 4 ? "sm:grid-cols-4" : ""
                        )}>
                            {displayedCameras.map(cam => (
                                <div
                                    key={cam.id}
                                    onClick={() => setActiveCamera(cam)}
                                    className="relative bg-bg-primary border border-white/10 rounded-xl overflow-hidden cursor-pointer group hover:border-white/30 transition-colors flex flex-col"
                                    style={{ minHeight: '100px' }}
                                >
                                    {/* Fake scanline effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] opacity-20 pointer-events-none" />

                                    <div className="absolute top-2 left-2 right-2 flex items-start justify-between z-10">
                                        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                                            {cam.status === 'Recording' ? (
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                                            ) : cam.status === 'Online' ? (
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                                            ) : (
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                                            )}
                                            <span className="text-[8px] font-bold text-white tracking-wider uppercase">{cam.id}</span>
                                        </div>

                                        {motionCameras.includes(cam.id) && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="bg-accent-orange text-black text-[8px] font-black uppercase px-2 py-1 rounded-md tracking-widest shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                            >
                                                Motion
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Centered Camera Icon if offline, else empty for mock feed */}
                                    <div className="flex-1 flex items-center justify-center opacity-10">
                                        <Video className="w-8 h-8" />
                                    </div>

                                    <div className="absolute bottom-0 inset-x-0 p-2 bg-linear-to-t from-black/80 to-transparent flex items-end justify-between z-10">
                                        <div>
                                            <div className="text-[10px] font-bold text-white shadow-black">{cam.name}</div>
                                            <div className="text-[8px] text-white/50 uppercase tracking-wider">{cam.location}</div>
                                        </div>
                                        <div className="text-[9px] font-mono text-white/60">
                                            {now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Incident Log */}
                    <div className={cn("h-64 shrink-0 bg-black/20 border border-white/5 rounded-2xl flex flex-col min-h-0 overflow-hidden", activeSection !== 'incidents' && "hidden lg:flex")}>
                        <div className="px-3 sm:px-5 py-3 border-b border-white/5 flex items-center justify-between bg-white/2 shrink-0">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <Flag className="w-4 h-4 text-white/40" />
                                <h2 className="text-[10px] uppercase tracking-widest font-black text-white">Incident Log</h2>
                            </div>
                            <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-[9px] font-bold text-white/60 transition-colors uppercase tracking-widest">
                                <Download className="w-3 h-3" />
                                <span className="hidden sm:inline">Export CSV</span>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto custom-scrollbar">
                            {/* Desktop table */}
                            <table className="w-full text-left border-collapse hidden sm:table">
                                <thead className="sticky top-0 bg-[#161616] z-10 border-b border-white/5">
                                    <tr>
                                        <th className="p-3 text-[9px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">ID</th>
                                        <th className="p-3 text-[9px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">Time</th>
                                        <th className="p-3 text-[9px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">Camera</th>
                                        <th className="p-3 text-[9px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">Type / Notes</th>
                                        <th className="p-3 text-[9px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {incidents.map((incident) => (
                                        <tr key={incident.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                                            <td className="p-3 align-top pt-4">
                                                <div className="text-[10px] font-bold text-white tracking-wider">{incident.id}</div>
                                            </td>
                                            <td className="p-3 align-top pt-4">
                                                <div className="text-[10px] text-white/60 font-mono">{incident.timestamp}</div>
                                            </td>
                                            <td className="p-3 align-top pt-4">
                                                <div className="flex flex-col items-start gap-1">
                                                    <div className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded tracking-wider">{incident.cameraId}</div>
                                                    <div className="text-[9px] text-white/40 uppercase">{incident.location}</div>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <div className="text-xs font-bold text-white">{incident.type}</div>
                                                <div className="text-[10px] text-white/40 mt-1">{incident.notes}</div>
                                                <div className="text-[9px] font-mono text-white/30 mt-2 uppercase">Flagged By: {incident.flaggedBy}</div>
                                            </td>
                                            <td className="p-3 align-top pt-4">
                                                <div className={cn(
                                                    "px-2 py-1 items-center gap-1.5 rounded-md inline-flex",
                                                    incident.status === 'Open' ? "bg-accent-red/10 text-accent-red border border-accent-red/20" :
                                                        incident.status === 'Escalated' ? "bg-accent-orange/10 text-accent-orange border border-accent-orange/20" :
                                                            "bg-accent-green/10 text-accent-green border border-accent-green/20"
                                                )}>
                                                    <span className="text-[9px] font-black uppercase tracking-widest">{incident.status}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Mobile card layout */}
                            <div className="sm:hidden p-2 space-y-2">
                                {incidents.map((incident) => (
                                    <div key={incident.id} className="p-3 bg-white/3 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-white">{incident.id}</span>
                                                <span className="text-[10px] font-bold text-white bg-white/10 px-1.5 py-0.5 rounded">{incident.cameraId}</span>
                                            </div>
                                            <div className={cn(
                                                "px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest",
                                                incident.status === 'Open' ? "bg-accent-red/10 text-accent-red" :
                                                    incident.status === 'Escalated' ? "bg-accent-orange/10 text-accent-orange" :
                                                        "bg-accent-green/10 text-accent-green"
                                            )}>{incident.status}</div>
                                        </div>
                                        <div className="text-xs font-bold text-white">{incident.type}</div>
                                        <div className="text-[10px] text-white/40">{incident.notes}</div>
                                        <div className="flex items-center justify-between text-[9px] text-white/30">
                                            <span>{incident.location}</span>
                                            <span className="font-mono">{incident.timestamp}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Alarm Control — visible on desktop always, mobile when tab active */}
                <div className={cn("lg:w-80 shrink-0 flex flex-col gap-3 sm:gap-6", activeSection !== 'alarm' && "hidden lg:flex")}>
                    <div className="h-auto bg-black/20 border border-white/5 rounded-2xl flex flex-col overflow-hidden">
                        <div className="px-3 sm:px-5 py-3 border-b border-white/5 flex items-center justify-between bg-white/2">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <ShieldCheck className="w-4 h-4 text-white/40" />
                                <h2 className="text-[10px] uppercase tracking-widest font-black text-white">Alarm Control</h2>
                            </div>
                        </div>

                        <div className="p-3 sm:p-5 flex flex-col gap-4 sm:gap-6">
                            {/* Master Status Card */}
                            <div className={cn(
                                "flex flex-col items-center justify-center py-4 sm:py-6 rounded-xl border relative overflow-hidden transition-colors",
                                isArmed ? "bg-accent-orange/10 border-accent-orange/40" : "bg-accent-green/10 border-accent-green/40"
                            )}>
                                {isArmed ? <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-accent-orange mb-2" /> : <Unlock className="w-6 h-6 sm:w-8 sm:h-8 text-accent-green mb-2" />}
                                <div className={cn(
                                    "text-base sm:text-lg font-black uppercase tracking-widest",
                                    isArmed ? "text-accent-orange" : "text-accent-green"
                                )}>
                                    {isArmed ? 'System Armed' : 'Disarmed'}
                                </div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                                    All Zones {isArmed ? 'Secured' : 'Offline'}
                                </div>
                                <div className={cn(
                                    "absolute inset-0 bg-linear-to-t from-transparent blur-xl opacity-20",
                                    isArmed ? "to-accent-orange" : "to-accent-green"
                                )} />
                            </div>

                            {/* Zone Toggles */}
                            <div className="bg-white/5 rounded-xl border border-white/5 p-3 sm:p-4 flex flex-col gap-3">
                                <div className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Active Zones</div>
                                {ZONES.map(zone => (
                                    <div key={zone} className="flex items-center justify-between">
                                        <span className="text-xs text-white/80 font-medium">{zone}</span>
                                        <div className={cn(
                                            "w-8 h-4 rounded-full relative cursor-pointer transition-colors",
                                            isArmed ? "bg-accent-orange/20" : "bg-white/5"
                                        )}>
                                            <div className={cn(
                                                "absolute top-0.5 w-3 h-3 rounded-full transition-all",
                                                isArmed
                                                    ? "right-0.5 bg-accent-orange shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                                                    : "left-0.5 bg-white/20"
                                            )} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => isArmed ? setDisarmModalOpen(true) : setIsArmed(true)}
                                    className={cn(
                                        "py-2.5 sm:py-3 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-colors border outline-none",
                                        isArmed
                                            ? "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                                            : "bg-accent-orange/20 border-accent-orange/40 text-accent-orange hover:bg-accent-orange/30"
                                    )}
                                >
                                    {isArmed ? 'Disarm' : 'Arm System'}
                                </button>
                                <button
                                    onClick={() => setAlertActive(!alertActive)}
                                    className={cn(
                                        "py-2.5 sm:py-3 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] border outline-none",
                                        alertActive
                                            ? "bg-accent-red text-black border-accent-red animate-[pulse_1s_ease-in-out_infinite]"
                                            : "bg-accent-red/20 border-accent-red/40 text-accent-red hover:bg-accent-red/30"
                                    )}
                                >
                                    Panic
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Camera Modal */}
            <AnimatePresence>
                {activeCamera && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-50 bg-black/95 backdrop-blur-2xl p-3 sm:p-6 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4 shrink-0">
                            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-accent-red/20 border border-accent-red/40 rounded-lg shrink-0">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-red animate-pulse" />
                                    <span className="text-[9px] sm:text-xs font-black text-accent-red tracking-widest uppercase">Live</span>
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-wider truncate">{activeCamera.name}</h2>
                                    <p className="text-[9px] sm:text-xs text-white/50 uppercase tracking-widest truncate">{activeCamera.id} · {activeCamera.location}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveCamera(null)}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Video Container */}
                        <div className="flex-1 bg-[#050505] rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center group pointer-events-auto">
                            {/* Fake scanlines */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] opacity-30 pointer-events-none z-10" />

                            <Video className="w-24 h-24 text-white/5" />

                            {/* HUD Overlays */}
                            <div className="absolute top-6 left-6 z-20 pointer-events-none">
                                <div className="text-2xl font-mono font-bold text-white/80 shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    {now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </div>
                                <div className="text-sm font-mono text-white/50 mt-1 shadow-[0_1px_2px_rgba(0,0,0,0.8)]">REC • 1080p • 60FPS</div>
                            </div>

                            <div className="absolute top-6 right-6 z-20 pointer-events-none flex flex-col items-end gap-2">
                                <div className="px-3 py-1 border border-white/20 bg-black/40 text-xs font-mono text-white/60">
                                    ZOOM: 1.0x
                                </div>
                                {motionCameras.includes(activeCamera.id) && (
                                    <div className="px-3 py-1 border border-accent-orange/40 bg-accent-orange/20 text-xs font-mono font-black text-accent-orange uppercase animate-pulse">
                                        Motion Detected
                                    </div>
                                )}
                            </div>

                            {/* Playback Controls (overlay on hover) */}
                            <div className="absolute bottom-6 inset-x-12 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
                                    {/* Timeline */}
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden relative cursor-pointer">
                                        <div className="absolute left-0 top-0 bottom-0 w-full bg-accent-blue/40" />
                                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white" />
                                    </div>
                                    {/* Buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <button className="text-white/60 hover:text-white transition-colors cursor-pointer"><Rewind className="w-5 h-5" /></button>
                                            <button className="text-white hover:text-accent-blue transition-colors cursor-pointer"><Pause className="w-6 h-6" /></button>
                                            <button className="text-white/60 hover:text-white transition-colors cursor-pointer"><FastForward className="w-5 h-5" /></button>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-white/80 transition-colors uppercase cursor-pointer border border-white/10">
                                                <Camera className="w-4 h-4" /> Snapshot
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-accent-orange/20 hover:bg-accent-orange/30 border border-accent-orange/40 rounded-lg text-xs font-bold text-accent-orange transition-colors uppercase cursor-pointer">
                                                <Flag className="w-4 h-4" /> Flag Incident
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
