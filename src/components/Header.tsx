import React from 'react';
import { LayoutGrid, FileText, AlertCircle } from 'lucide-react';
import { CategoryData, ViewMode } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HeaderProps {
  category: CategoryData;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const Header: React.FC<HeaderProps> = ({ category, viewMode, onViewModeChange }) => {
  return (
    <header className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-1">
          {viewMode === 'FullInventory' ? 'Full Inventory View' :
            viewMode === 'DataIntegration' ? 'Data Integration & Backend Architecture' :
              viewMode === 'StoreOverview' ? 'Store Overview' :
                viewMode === 'TradersGuild' ? 'Traders Guild – Inventory Exchange' :
                  viewMode === 'DeliHotFoods' ? 'Deli & Hot Foods' :
                    viewMode === 'GroceryDryGoods' ? 'Grocery & Dry Goods' :
                      category.title}
        </h2>
        <p className="text-xs text-white/40">
          {viewMode === 'TradersGuild' ? 'Post needs and surplus; match with other stores in the network' :
            viewMode === 'DeliHotFoods' ? 'Freshness monitoring, hot case management, and waste tracking' :
              viewMode === 'GroceryDryGoods' ? 'Center Store, Dairy, Beverages, and Fresh segment management' :
                'Last synced: Today, 08:42 AM'}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-border-subtle rounded-full">
          <div className={cn(
            "w-2 h-2 rounded-full",
            category.restockPriority === 'High' ? "bg-accent-red" :
              category.restockPriority === 'Medium' ? "bg-accent-orange" : "bg-accent-green"
          )} />
          <span className="text-[10px] uppercase font-bold tracking-wider text-white/60">
            Restock Priority: <span className="text-accent-green-bright">{category.restockPriority}</span>
          </span>
        </div>

        <button
          onClick={() => onViewModeChange(viewMode === 'FullInventory' ? 'TobaccoWall' : 'FullInventory')}
          className={cn(
            "flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors",
            viewMode === 'FullInventory'
              ? "bg-accent-green/10 border-accent-green/30 text-accent-green-bright"
              : "bg-white/5 hover:bg-white/10 border-border-subtle"
          )}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Full Inventory View</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 text-black rounded-lg text-sm font-bold transition-colors">
          <FileText className="w-4 h-4" />
          <span>Generate Inventory Report</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
