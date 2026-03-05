import React from 'react';
import {
  LayoutDashboard,
  Flame,
  Wind,
  Zap,
  Cigarette,
  Box,
  ShieldCheck,
  Network,
  Settings,
  ChevronRight,
  LayoutGrid,
  FileText,
  Database,
  ArrowRightLeft,
  Target,
  Wine,
  X
} from 'lucide-react';
import { TobaccoCategory, ViewMode } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeCategory: TobaccoCategory;
  viewMode: ViewMode;
  isOpen: boolean;
  onClose: () => void;
  onCategoryChange: (category: TobaccoCategory) => void;
  onViewModeChange: (mode: ViewMode) => void;
  onStartPitch: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeCategory,
  viewMode,
  isOpen,
  onClose,
  onCategoryChange,
  onViewModeChange,
  onStartPitch
}) => {
  const mainNav = [
    { id: 'pitch', label: 'Pitch Demo', icon: Target, action: onStartPitch, highlight: true },
    { id: 'trade', label: 'Traders Guild', icon: ArrowRightLeft, viewMode: 'TradersGuild' as ViewMode },
    { id: 'overview', label: 'Store Overview', icon: LayoutDashboard, viewMode: 'StoreOverview' as ViewMode },
    { id: 'tobacco', label: 'Tobacco Wall', icon: Cigarette, active: true, viewMode: 'TobaccoWall' as ViewMode },
    { id: 'deli', label: 'Deli & Hot Foods', icon: Flame, viewMode: 'DeliHotFoods' as ViewMode },
    { id: 'grocery', label: 'Grocery & Dry Goods', icon: Box, viewMode: 'GroceryDryGoods' as ViewMode },
    { id: 'alcohol', label: 'Alcohol Store', icon: Wine, viewMode: 'AlcoholStore' as ViewMode },
  ];

  const tobaccoSubNav: { id: TobaccoCategory; label: string; icon: any }[] = [
    { id: 'Cigarettes', label: 'Cigarettes', icon: Cigarette },
    { id: 'Vapes', label: 'Vapes', icon: Zap },
    { id: 'Chewing Tobacco', label: 'Chewing Tobacco', icon: Wind },
    { id: 'Cigars', label: 'Cigars', icon: Box },
  ];

  const bottomNav = [
    { id: 'security', label: 'Security', icon: ShieldCheck, viewMode: 'Security' as ViewMode },
    { id: 'network', label: 'Network', icon: Network },
    { id: 'data-integration', label: 'Data Integration', icon: Database, viewMode: 'DataIntegration' as ViewMode },
    { id: 'settings', label: 'Settings', icon: Settings, viewMode: 'Settings' as ViewMode },
  ];

  const handleNavClick = (callback: () => void) => {
    callback();
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar drawer */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-72 bg-bg-secondary border-r border-border-subtle flex flex-col p-4 z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded flex items-center justify-center">
              <video
                src="/shrink_logo.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-[150%] h-[150%] object-contain hue-rotate-140deg saturate-150 contrast-125"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tighter">Shrink</h1>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">STOP THE BLEED</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
          {mainNav.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleNavClick(() => {
                  if (item.action) {
                    item.action();
                  } else if (item.viewMode) {
                    onViewModeChange(item.viewMode);
                  }
                })}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  item.highlight
                    ? "bg-accent-green text-black font-bold hover:bg-accent-green/90 mb-2"
                    : item.viewMode === viewMode
                      ? "bg-accent-green/10 text-accent-green-bright"
                      : (item.active && viewMode === 'TobaccoWall')
                        ? "bg-accent-green/10 text-accent-green-bright"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-4 h-4", item.highlight && "text-black")} />
                <span>{item.label}</span>
              </button>

              {(item.active && viewMode === 'TobaccoWall') && (
                <div className="ml-6 mt-1 space-y-1">
                  {tobaccoSubNav.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(() => onCategoryChange(sub.id))}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-1.5 rounded-md text-xs transition-colors",
                        activeCategory === sub.id ? "text-white font-medium" : "text-white/40 hover:text-white/70"
                      )}
                    >
                      <span>{sub.label}</span>
                      {activeCategory === sub.id && <div className="w-1 h-1 bg-accent-green rounded-full" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 mt-4 border-t border-border-subtle space-y-1">
            {bottomNav.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(() => item.viewMode && onViewModeChange(item.viewMode))}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  item.viewMode === viewMode
                    ? "bg-accent-green/10 text-accent-green-bright"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-auto pt-4 border-t border-border-subtle">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">JD</div>
            <div>
              <p className="text-xs font-medium">John Doe</p>
              <p className="text-[10px] text-white/40">Store Manager</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
