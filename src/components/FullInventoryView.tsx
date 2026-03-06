import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ChevronDown,
  ArrowUpDown,
  Download,
  PieChart as PieIcon,
  BarChart as BarIcon,
  LayoutGrid,
  ArrowRightLeft
} from 'lucide-react';
import MoveToTradersGuildModal from './modals/MoveToTradersGuildModal';
import { Product, ProductStatus, ViewMode, CategoryData } from '../types';
import { MOCK_CATEGORIES, MOCK_DELI_PRODUCTS, MOCK_GROCERY_PRODUCTS, MOCK_ALCOHOL_PRODUCTS } from '../constants';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEPARTMENTS = [
  'Tobacco',
  'Deli & Hot Foods',
  'Meat & Fresh',
  'Grocery & Dry Goods',
  'Freezer Foods',
  'Soda & Drink Coolers',
  'Alcohol - Beer',
  'Alcohol - Liquor',
  'Alcohol - Wine'
];

const CATEGORIES = [
  // Tobacco
  'Cigarettes', 'Vapes', 'Chewing Tobacco', 'Cigars',
  // Deli
  'Prepared', 'Frozen Prep', 'Sauces', 'Meat', 'Cheese', 'Sides', 'Deli Counter',
  // Grocery
  'Whole Milk', '2% Milk', 'Skim Milk', 'Oat Milk',
  'Butter', 'Yogurt', 'Sour Cream', 'Creamer',
  'Cheddar', 'Mozzarella', 'Swiss', 'American',
  'Frozen Pizza', 'Ice Cream', 'Frozen Veg', 'Burritos',
  'Ground Beef', 'Chicken Breast', 'Pork Chops', 'Steak',
  'Bagged Salad', 'Cut Fruit', 'Hummus', 'Guacamole',
  'Cola', 'Lemon Lime', 'Energy Drink', 'Seltzer',
  'Gatorade', 'Snapple', 'Orange Juice', 'Apple Juice',
  'Pasta', 'Pasta Sauce', 'Rice', 'Cereal', 'Oil',
  'Canned Soup', 'Canned Beans', 'Peanut Butter', 'Condiments',
  // Beer
  'IPA', 'Lager', 'Stout', 'Pilsner', 'Wheat', 'Pale Ale', 'Seltzer',
  // Liquor
  'Bourbon', 'Scotch', 'Vodka', 'Rum', 'Tequila', 'Gin', 'Whiskey', 'Brandy', 'Cognac',
  // Wine
  'Cabernet', 'Merlot', 'Pinot Noir', 'Chardonnay', 'Sauvignon Blanc', 'Riesling', 'Rosé', 'Moscato', 'Pinot Grigio', 'Malbec'
];

const STATUSES: (ProductStatus | 'All')[] = ['All', 'Healthy', 'Low', 'Critical'];

const CustomDropdown = ({
  value,
  onChange,
  options,
  placeholder
}: {
  value: string,
  onChange: (val: string) => void,
  options: string[],
  placeholder: string
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-w-[160px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-sm text-white hover:bg-white/10 transition-colors focus:outline-none focus:border-accent-green/50"
      >
        <span className="truncate">{value === 'All' ? placeholder : value}</span>
        <ChevronDown className={cn("w-4 h-4 text-white/40 transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 py-1"
            >
              <button
                onClick={() => {
                  onChange('All');
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5",
                  value === 'All' ? "text-accent-green font-bold" : "text-white/60"
                )}
              >
                {placeholder}
              </button>
              {options.map(opt => (
                <button
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5",
                    value === opt ? "text-accent-green font-bold" : "text-white/60"
                  )}
                >
                  {opt}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FullInventoryViewProps {
  onViewModeChange?: (mode: ViewMode) => void;
  tobaccoCategories: CategoryData[];
  deliProducts: Product[];
  groceryProducts: Product[];
  alcoholProducts: Product[];
}

export default function FullInventoryView({
  onViewModeChange,
  tobaccoCategories,
  deliProducts,
  groceryProducts,
  alcoholProducts
}: FullInventoryViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus | 'All'>('All');
  const [moveToTradersGuildItem, setMoveToTradersGuildItem] = useState<Product | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Product; direction: 'asc' | 'desc' } | null>(null);

  // Flatten all products from all departments
  const allProducts = useMemo(() => {
    const tobaccoProducts = tobaccoCategories.flatMap(cat => cat.products);
    return [...tobaccoProducts, ...deliProducts, ...groceryProducts, ...alcoholProducts];
  }, [tobaccoCategories, deliProducts, groceryProducts, alcoholProducts]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDepartment = selectedDepartment === 'All' || product.department === selectedDepartment;
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;

      return matchesSearch && matchesDepartment && matchesCategory && matchesStatus;
    }).sort((a, b) => {
      if (!sortConfig) return 0;
      const { key, direction } = sortConfig;
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [allProducts, searchQuery, selectedDepartment, selectedCategory, selectedStatus, sortConfig]);

  const handleSort = (key: keyof Product) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  // Analytics Data
  const inventoryValueByDept = useMemo(() => {
    const data: Record<string, number> = {};
    allProducts.forEach(p => {
      data[p.department] = (data[p.department] || 0) + (p.qty_on_hand * p.unit_cost);
    });
    return Object.entries(data).map(([name, value]) => ({ name, value }));
  }, [allProducts]);

  const salesByDept = useMemo(() => {
    const data: Record<string, number> = {};
    allProducts.forEach(p => {
      data[p.department] = (data[p.department] || 0) + p.sales30d;
    });
    return Object.entries(data).map(([name, sales]) => ({ name, sales }));
  }, [allProducts]);

  const handleDeptClick = (deptName: string) => {
    if (!onViewModeChange) return;

    // Map department string to ViewMode
    if (deptName === 'Tobacco') onViewModeChange('TobaccoWall');
    else if (deptName === 'Deli & Hot Foods') onViewModeChange('DeliHotFoods');
    else if (deptName === 'Alcohol - Beer' || deptName === 'Alcohol - Liquor' || deptName === 'Alcohol - Wine') onViewModeChange('AlcoholStore');
    else onViewModeChange('GroceryDryGoods'); // Default mapping for Meat/Fresh, Grocery, Freezer, Soda
  };

  const COLORS = ['#059669', '#d97706', '#dc2626', '#0d9488', '#7c3aed', '#db2777', '#4f46e5', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

  return (
    <div className="flex flex-col gap-6 min-w-0">
      {/* Filters & Search */}
      <div className="bg-[#0F0F0F] border border-white/5 rounded-xl p-4 flex flex-wrap items-center gap-4 shadow-xl">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search by SKU or Product Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-green/50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-3">
          <CustomDropdown
            value={selectedDepartment}
            onChange={setSelectedDepartment}
            options={DEPARTMENTS}
            placeholder="All Departments"
          />

          <CustomDropdown
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={CATEGORIES}
            placeholder="All Categories"
          />

          <CustomDropdown
            value={selectedStatus}
            onChange={(val) => setSelectedStatus(val as any)}
            options={STATUSES.filter(s => s !== 'All')}
            placeholder="All Status"
          />

          <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors shrink-0">
            <Download className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 min-w-0">
        {/* Table Section */}
        <div className="flex-1 bg-[#0F0F0F] border border-white/5 rounded-xl overflow-hidden shadow-2xl flex flex-col min-w-0 order-last lg:order-first">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th onClick={() => handleSort('sku')} className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 cursor-pointer hover:text-white transition-colors">
                    <div className="flex items-center gap-2">SKU <ArrowUpDown className="w-3 h-3" /></div>
                  </th>
                  <th onClick={() => handleSort('name')} className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 cursor-pointer hover:text-white transition-colors">
                    <div className="flex items-center gap-2">Product Name <ArrowUpDown className="w-3 h-3" /></div>
                  </th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Category</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Department</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">On-Hand</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">Reorder</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">7D Sales</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">30D Sales</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right">Margin</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Status</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Last PO</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40 text-right pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProducts.map((product, idx) => (
                  <tr key={product.id} className={cn(
                    "hover:bg-white/2 transition-colors",
                    idx % 2 === 0 ? "bg-transparent" : "bg-white/1"
                  )}>
                    <td className="p-4 text-xs font-mono text-white/60">{product.sku}</td>
                    <td className="p-4">
                      <div className="text-sm font-medium">{product.name}</div>
                      <div className="text-[10px] text-white/40">{product.brand}</div>
                    </td>
                    <td className="p-4 text-xs text-white/60">{product.category}</td>
                    <td className="p-4 text-xs text-white/60">{product.department}</td>
                    <td className="p-4 text-xs font-mono text-right font-bold">{product.qty_on_hand}</td>
                    <td className="p-4 text-xs font-mono text-right text-white/40">{product.qty_min_stock}</td>
                    <td className="p-4 text-xs font-mono text-right">{product.dailySales * 7}</td>
                    <td className="p-4 text-xs font-mono text-right">{product.sales30d}</td>
                    <td className="p-4 text-xs font-mono text-right text-accent-green">{product.retail_price}%</td>
                    <td className="p-4">
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                        product.status === 'Healthy' ? "bg-accent-green/10 text-accent-green" :
                          product.status === 'Low' ? "bg-accent-orange/10 text-accent-orange" :
                            "bg-accent-red/10 text-accent-red"
                      )}>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          product.status === 'Healthy' ? "bg-accent-green" :
                            product.status === 'Low' ? "bg-accent-orange" : "bg-accent-red"
                        )} />
                        {product.status}
                      </div>
                    </td>
                    <td className="p-4 text-xs text-white/40">{product.lastPODate}</td>
                    <td className="p-4 text-right pr-6">
                      <button
                        onClick={() => setMoveToTradersGuildItem(product)}
                        className="p-2 text-white/20 hover:text-accent-green hover:bg-white/5 rounded-lg transition-all"
                        title="Move to Traders Guild"
                      >
                        <ArrowRightLeft className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-white/40">No products found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Analytics Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 order-first lg:order-last">
          <div className="bg-[#0F0F0F] border border-white/5 rounded-xl p-5 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <PieIcon className="w-4 h-4 text-accent-green" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/60">Value by Dept</h3>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                  <Pie
                    data={inventoryValueByDept}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {inventoryValueByDept.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        onClick={() => handleDeptClick(entry.name)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ fontSize: '13px', color: '#ffffff', fontWeight: 'bold' }}
                    labelStyle={{ color: '#ffffff80', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}
                    formatter={(value: number, name: string) => [`$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {inventoryValueByDept.map((dept, i) => (
                <div key={dept.name} className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                    <span className="text-white/60">{dept.name}</span>
                  </div>
                  <span className="font-mono font-bold">${dept.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-white/5 rounded-xl p-5 shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <BarIcon className="w-4 h-4 text-accent-green" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/60">30D Sales by Dept</h3>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <BarChart data={salesByDept} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={80}
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ fontSize: '13px', color: '#ffffff', fontWeight: 'bold' }}
                    labelStyle={{ color: '#ffffff80', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}
                    formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'sales' ? 'Sales' : name]}
                  />
                  <Bar
                    dataKey="sales"
                    fill="#059669"
                    radius={[0, 4, 4, 0]}
                    onClick={(data) => handleDeptClick(data.name)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {moveToTradersGuildItem && (
          <MoveToTradersGuildModal
            isOpen={!!moveToTradersGuildItem}
            onClose={() => setMoveToTradersGuildItem(null)}
            product={moveToTradersGuildItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
