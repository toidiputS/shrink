import { CategoryData, Product, ProductStatus } from './types';

const generateProducts = (category: string, rows: number, slotsPerRow: number): Product[] => {
  const products: Product[] = [];
  const brands = {
    'Cigarettes': ['Gold', 'Silver', 'Classic', 'Menthol', 'Red', 'Blue'],
    'Vapes': ['Pod', 'Juice', 'Disposable', 'Mod', 'Coil'],
    'Chewing Tobacco': ['Mint', 'Wintergreen', 'Straight', 'Natural'],
    'Cigars': ['Cuban', 'Dominican', 'Robusto', 'Churchill']
  }[category] || ['Generic'];

  for (let r = 0; r < rows; r++) {
    for (let s = 0; s < slotsPerRow; s++) {
      const rand = Math.random();
      const status: ProductStatus = rand > 0.8 ? 'Critical' : rand > 0.5 ? 'Low' : 'Healthy';
      const brand = brands[Math.floor(Math.random() * brands.length)];

      const unit_cost = 5 + Math.floor(Math.random() * 10);
      const historicalSales = Array.from({ length: 7 }, (_, i) => ({
        date: `Day ${i + 1}`,
        sales: Math.floor(Math.random() * 25)
      }));

      const sku = `SKU-${Math.floor(100000 + Math.random() * 900000)}`;
      const qty_on_hand = Math.floor(Math.random() * 100);
      const qty_min_stock = 20 + Math.floor(Math.random() * 30);
      const sales30d = Math.floor(Math.random() * 500);
      const lastPODate = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      // A-1 Coordinate System (Bottom-Up)
      const slotId = `${String.fromCharCode(65 + r)}-${s + 1}`;

      products.push({
        id: `${category}-${r}-${s}`,
        sku,
        name: `${brand} ${category === 'Cigars' ? 'Box' : 'Pack'}`,
        brand: brand,
        category: category,
        department: 'Tobacco',
        qty_on_hand,
        qty_min_stock,
        dailySales: Math.floor(Math.random() * 20),
        sales30d,
        sellThrough: Math.floor(Math.random() * 100),
        retail_price: 15 + Math.floor(Math.random() * 15),
        status,
        row: r,
        slot: s,
        slotId,
        unit_cost,
        lastPODate,
        supplier: {
          name: 'Global Tobacco Logistics',
          contact: '+1 (555) 012-3456',
          email: 'orders@gtlogistics.com'
        },
        historicalSales
      });
    }
  }
  return products;
};

export const MOCK_CATEGORIES: CategoryData[] = [
  {
    id: 'Cigarettes',
    title: 'Tobacco Wall – Cigarettes',
    restockPriority: 'High',
    shelfRows: 11,
    shelfCols: 24,
    products: generateProducts('Cigarettes', 11, 24),
    stats: {
      totalInventory: 1240,
      dailyRestock: 320,
      netMargin: 18,
      compliance: 98
    }
  },
  {
    id: 'Vapes',
    title: 'Tobacco Wall – Vapes',
    restockPriority: 'Medium',
    shelfRows: 11,
    shelfCols: 20,
    products: generateProducts('Vapes', 11, 20),
    stats: {
      totalInventory: 850,
      dailyRestock: 150,
      netMargin: 24,
      compliance: 95
    }
  },
  {
    id: 'Chewing Tobacco',
    title: 'Tobacco Wall – Chewing Tobacco',
    restockPriority: 'Low',
    shelfRows: 11,
    shelfCols: 16,
    products: generateProducts('Chewing Tobacco', 11, 16),
    stats: {
      totalInventory: 620,
      dailyRestock: 80,
      netMargin: 21,
      compliance: 99
    }
  },
  {
    id: 'Cigars',
    title: 'Tobacco Wall – Cigars',
    restockPriority: 'Medium',
    shelfRows: 11,
    shelfCols: 12,
    products: generateProducts('Cigars', 11, 12),
    stats: {
      totalInventory: 410,
      dailyRestock: 45,
      netMargin: 32,
      compliance: 92
    }
  }
];

export const MOCK_DELI_PRODUCTS: Product[] = [
  {
    id: 'deli-1', sku: 'DELI-1001', name: 'Chicken Tenders 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 12, qty_min_stock: 15, dailySales: 4, sales30d: 120, retail_price: 35, status: 'Low', unit_cost: 24.50, lastPODate: '2026-02-20',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 85, row: 0, slot: 0
  },
  {
    id: 'deli-2', sku: 'DELI-1002', name: 'Potato Wedges 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 8, qty_min_stock: 10, dailySales: 3, sales30d: 90, retail_price: 45, status: 'Low', unit_cost: 12.00, lastPODate: '2026-02-22',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 90, row: 0, slot: 0
  },
  {
    id: 'deli-3', sku: 'DELI-1003', name: 'Mac & Cheese Pan', brand: 'Kraft Professional', category: 'Prepared', department: 'Deli & Hot Foods',
    qty_on_hand: 24, qty_min_stock: 10, dailySales: 5, sales30d: 150, retail_price: 40, status: 'Healthy', unit_cost: 18.75, lastPODate: '2026-02-25',
    supplier: { name: 'US Foods', contact: '555-0202', email: 'orders@usfoods.com' }, historicalSales: [],
    sellThrough: 75, row: 0, slot: 0
  },
  {
    id: 'deli-4', sku: 'DELI-1004', name: 'Breakfast Burrito 12ct', brand: 'Don Miguel', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 5, qty_min_stock: 12, dailySales: 6, sales30d: 180, retail_price: 38, status: 'Critical', unit_cost: 15.20, lastPODate: '2026-02-15',
    supplier: { name: 'US Foods', contact: '555-0202', email: 'orders@usfoods.com' }, historicalSales: [],
    sellThrough: 95, row: 0, slot: 0
  },
  {
    id: 'deli-5', sku: 'DELI-1005', name: 'Corn Dogs 24ct', brand: 'State Fair', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 15, qty_min_stock: 8, dailySales: 2, sales30d: 60, retail_price: 42, status: 'Healthy', unit_cost: 11.50, lastPODate: '2026-02-24',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 80, row: 0, slot: 0
  },
  {
    id: 'deli-6', sku: 'DELI-1006', name: 'Mozzarella Sticks 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 20, qty_min_stock: 10, dailySales: 3, sales30d: 90, retail_price: 48, status: 'Healthy', unit_cost: 22.00, lastPODate: '2026-02-21',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 70, row: 0, slot: 0
  },
  {
    id: 'deli-7', sku: 'DELI-1007', name: 'Jalapeno Poppers 3lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 4, qty_min_stock: 6, dailySales: 1, sales30d: 30, retail_price: 50, status: 'Low', unit_cost: 14.80, lastPODate: '2026-02-18',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 60, row: 0, slot: 0
  },
  {
    id: 'deli-8', sku: 'DELI-1008', name: 'Buffalo Wings 10lb Bag', brand: 'Tyson', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 30, qty_min_stock: 15, dailySales: 8, sales30d: 240, retail_price: 32, status: 'Healthy', unit_cost: 45.00, lastPODate: '2026-02-26',
    supplier: { name: 'US Foods', contact: '555-0202', email: 'orders@usfoods.com' }, historicalSales: [],
    sellThrough: 88, row: 0, slot: 0
  },
  {
    id: 'deli-9', sku: 'DELI-1009', name: 'BBQ Ribs 5lb Bag', brand: 'Tyson', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 2, qty_min_stock: 5, dailySales: 1, sales30d: 30, retail_price: 30, status: 'Critical', unit_cost: 32.00, lastPODate: '2026-02-10',
    supplier: { name: 'US Foods', contact: '555-0202', email: 'orders@usfoods.com' }, historicalSales: [],
    sellThrough: 40, row: 0, slot: 0
  },
  {
    id: 'deli-10', sku: 'DELI-1010', name: 'Meatballs 5lb Bag', brand: 'Rosina', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 18, qty_min_stock: 10, dailySales: 2, sales30d: 60, retail_price: 40, status: 'Healthy', unit_cost: 19.50, lastPODate: '2026-02-23',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 65, row: 0, slot: 0
  },
  {
    id: 'deli-11', sku: 'DELI-1011', name: 'Pizza Slices 12ct', brand: 'Hunt Brothers', category: 'Prepared', department: 'Deli & Hot Foods',
    qty_on_hand: 40, qty_min_stock: 20, dailySales: 15, sales30d: 450, retail_price: 55, status: 'Healthy', unit_cost: 8.40, lastPODate: '2026-02-27',
    supplier: { name: 'Hunt Brothers Pizza', contact: '555-0303', email: 'support@huntbros.com' }, historicalSales: [],
    sellThrough: 98, row: 0, slot: 0
  },
  {
    id: 'deli-12', sku: 'DELI-1012', name: 'Hot Dogs 12ct', brand: 'Nathan\'s', category: 'Prepared', department: 'Deli & Hot Foods',
    qty_on_hand: 25, qty_min_stock: 15, dailySales: 10, sales30d: 300, retail_price: 60, status: 'Healthy', unit_cost: 6.20, lastPODate: '2026-02-27',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 92, row: 0, slot: 0
  },
  {
    id: 'deli-13', sku: 'DELI-1013', name: 'Taquitos 24ct', brand: 'El Monterey', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 12, qty_min_stock: 10, dailySales: 4, sales30d: 120, retail_price: 45, status: 'Healthy', unit_cost: 9.80, lastPODate: '2026-02-24',
    supplier: { name: 'US Foods', contact: '555-0202', email: 'orders@usfoods.com' }, historicalSales: [],
    sellThrough: 82, row: 0, slot: 0
  },
  {
    id: 'deli-14', sku: 'DELI-1014', name: 'Egg Rolls 12ct', brand: 'Minh', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 6, qty_min_stock: 10, dailySales: 3, sales30d: 90, retail_price: 50, status: 'Low', unit_cost: 7.50, lastPODate: '2026-02-22',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 78, row: 0, slot: 0
  },
  {
    id: 'deli-15', sku: 'DELI-1015', name: 'Spring Rolls 24ct', brand: 'Minh', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 20, qty_min_stock: 10, dailySales: 2, sales30d: 60, retail_price: 52, status: 'Healthy', unit_cost: 12.40, lastPODate: '2026-02-21',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 68, row: 0, slot: 0
  },
  {
    id: 'deli-16', sku: 'DELI-1016', name: 'Fried Rice 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 10, qty_min_stock: 8, dailySales: 2, sales30d: 60, retail_price: 40, status: 'Healthy', unit_cost: 11.20, lastPODate: '2026-02-25',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 72, row: 0, slot: 0
  },
  {
    id: 'deli-17', sku: 'DELI-1017', name: 'Chow Mein 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 3, qty_min_stock: 8, dailySales: 2, sales30d: 60, retail_price: 40, status: 'Critical', unit_cost: 11.20, lastPODate: '2026-02-15',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 55, row: 0, slot: 0
  },
  {
    id: 'deli-18', sku: 'DELI-1018', name: 'Orange Chicken 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 15, qty_min_stock: 10, dailySales: 4, sales30d: 120, retail_price: 38, status: 'Healthy', unit_cost: 28.50, lastPODate: '2026-02-26',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 84, row: 0, slot: 0
  },
  {
    id: 'deli-19', sku: 'DELI-1019', name: 'Beef & Broccoli 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 7, qty_min_stock: 10, dailySales: 3, sales30d: 90, retail_price: 35, status: 'Low', unit_cost: 32.40, lastPODate: '2026-02-20',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 76, row: 0, slot: 0
  },
  {
    id: 'deli-20', sku: 'DELI-1020', name: 'Sweet & Sour Pork 5lb Bag', brand: 'Sysco', category: 'Frozen Prep', department: 'Deli & Hot Foods',
    qty_on_hand: 12, qty_min_stock: 10, dailySales: 2, sales30d: 60, retail_price: 38, status: 'Healthy', unit_cost: 26.80, lastPODate: '2026-02-22',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 62, row: 0, slot: 0
  },
  {
    id: 'deli-21', sku: 'DELI-1021', name: 'Deli Sliced Ham 5lb', brand: 'Boar\'s Head', category: 'Meat', department: 'Deli & Hot Foods',
    qty_on_hand: 25, qty_min_stock: 15, dailySales: 8, sales30d: 240, retail_price: 28, status: 'Healthy', unit_cost: 35.00, lastPODate: '2026-02-27',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 94, row: 0, slot: 0
  },
  {
    id: 'deli-22', sku: 'DELI-1022', name: 'Deli Sliced Turkey 5lb', brand: 'Boar\'s Head', category: 'Meat', department: 'Deli & Hot Foods',
    qty_on_hand: 10, qty_min_stock: 15, dailySales: 10, sales30d: 300, retail_price: 30, status: 'Low', unit_cost: 38.00, lastPODate: '2026-02-25',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 96, row: 0, slot: 0
  },
  {
    id: 'deli-23', sku: 'DELI-1023', name: 'Deli Sliced Swiss Cheese 5lb', brand: 'Boar\'s Head', category: 'Cheese', department: 'Deli & Hot Foods',
    qty_on_hand: 15, qty_min_stock: 10, dailySales: 4, sales30d: 120, retail_price: 32, status: 'Healthy', unit_cost: 22.50, lastPODate: '2026-02-26',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 86, row: 0, slot: 0
  },
  {
    id: 'deli-24', sku: 'DELI-1024', name: 'Ranch Dressing 1gal', brand: 'Hidden Valley', category: 'Sauces', department: 'Deli & Hot Foods',
    qty_on_hand: 4, qty_min_stock: 6, dailySales: 1, sales30d: 30, retail_price: 40, status: 'Low', unit_cost: 18.20, lastPODate: '2026-02-18',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 50, row: 0, slot: 0
  },
  {
    id: 'deli-25', sku: 'DELI-1025', name: 'BBQ Sauce 1gal', brand: 'Sweet Baby Ray\'s', category: 'Sauces', department: 'Deli & Hot Foods',
    qty_on_hand: 12, qty_min_stock: 6, dailySales: 1, sales30d: 30, retail_price: 45, status: 'Healthy', unit_cost: 15.50, lastPODate: '2026-02-24',
    supplier: { name: 'US Foods', contact: '555-0202', email: 'orders@usfoods.com' }, historicalSales: [],
    sellThrough: 58, row: 0, slot: 0
  },
  // Deli Counter Items
  {
    id: 'deli-c-1', sku: 'DELI-C-101', name: 'Boar\'s Head OvenGold Turkey', brand: 'Boar\'s Head', category: 'Deli Counter', department: 'Deli & Hot Foods',
    qty_on_hand: 45.5, qty_min_stock: 20, dailySales: 12, sales30d: 360, retail_price: 35, status: 'Healthy', unit_cost: 8.50, basePricePerLb: 12.99, currentPromo: '$11.99/lb', lastPODate: '2026-02-28',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 92, row: 0, slot: 0
  },
  {
    id: 'deli-c-2', sku: 'DELI-C-102', name: 'Boar\'s Head Black Forest Ham', brand: 'Boar\'s Head', category: 'Deli Counter', department: 'Deli & Hot Foods',
    qty_on_hand: 18.2, qty_min_stock: 25, dailySales: 10, sales30d: 300, retail_price: 38, status: 'Low', unit_cost: 6.80, basePricePerLb: 10.99, currentPromo: 'Buy 2+ lbs: $9.99/lb', lastPODate: '2026-02-28',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 88, row: 0, slot: 0
  },
  {
    id: 'deli-c-3', sku: 'DELI-C-103', name: 'Boar\'s Head Roast Beef', brand: 'Boar\'s Head', category: 'Deli Counter', department: 'Deli & Hot Foods',
    qty_on_hand: 12.4, qty_min_stock: 15, dailySales: 8, sales30d: 240, retail_price: 32, status: 'Low', unit_cost: 10.20, basePricePerLb: 14.99, lastPODate: '2026-02-28',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 85, row: 0, slot: 0
  },
  {
    id: 'deli-c-4', sku: 'DELI-C-104', name: 'Land O Lakes American Cheese', brand: 'Land O Lakes', category: 'Deli Counter', department: 'Deli & Hot Foods',
    qty_on_hand: 62.0, qty_min_stock: 30, dailySales: 15, sales30d: 450, retail_price: 45, status: 'Healthy', unit_cost: 3.80, basePricePerLb: 6.99, currentPromo: '$5.99/lb', lastPODate: '2026-02-28',
    supplier: { name: 'Sysco Foods', contact: '555-0101', email: 'orders@sysco.com' }, historicalSales: [],
    sellThrough: 95, row: 0, slot: 0
  },
  {
    id: 'deli-c-5', sku: 'DELI-C-105', name: 'Provolone Cheese', brand: 'Boar\'s Head', category: 'Deli Counter', department: 'Deli & Hot Foods',
    qty_on_hand: 22.5, qty_min_stock: 20, dailySales: 6, sales30d: 180, retail_price: 40, status: 'Healthy', unit_cost: 4.50, basePricePerLb: 7.99, lastPODate: '2026-02-28',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 80, row: 0, slot: 0
  },
  {
    id: 'deli-c-6', sku: 'DELI-C-106', name: 'Swiss Cheese', brand: 'Boar\'s Head', category: 'Deli Counter', department: 'Deli & Hot Foods',
    qty_on_hand: 8.5, qty_min_stock: 15, dailySales: 5, sales30d: 150, retail_price: 42, status: 'Critical', unit_cost: 5.20, basePricePerLb: 8.99, lastPODate: '2026-02-28',
    supplier: { name: 'Boar\'s Head Provisions', contact: '555-0404', email: 'orders@boarshead.com' }, historicalSales: [],
    sellThrough: 78, row: 0, slot: 0
  }
];

export const EFFICIENCY_DATA = [
  { time: '08:00', efficiency: 82 },
  { time: '10:00', efficiency: 88 },
  { time: '12:00', efficiency: 94 },
  { time: '14:00', efficiency: 91 },
  { time: '16:00', efficiency: 85 },
  { time: '18:00', efficiency: 89 },
  { time: '20:00', efficiency: 92 },
];

const generateGroceryProducts = (section: string, categories: string[], brands: string[], count: number, startId: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const rand = Math.random();
    const status: ProductStatus = rand > 0.85 ? 'Critical' : rand > 0.6 ? 'Low' : 'Healthy';
    const category = categories[Math.floor(Math.random() * categories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const name = `${brand} ${category}`;
    const sku = `GROC-${startId + i}`;

    const isPerishable = ['Milk', 'Dairy', 'Cheese', 'Meats', 'Fresh'].includes(section);
    const sellByRange = isPerishable ? `Mar ${Math.floor(Math.random() * 10 + 3)}-${Math.floor(Math.random() * 10 + 13)}` : undefined;
    const shrinkRisk = isPerishable ? (rand > 0.8 ? 'High' : rand > 0.5 ? 'Watch' : 'Low') : 'Low';

    const row = Math.floor(i / 8);
    const col = i % 8;
    const slotId = `${String.fromCharCode(65 + row)}-${col + 1}`;

    products.push({
      id: `g-${startId + i}`,
      sku,
      name,
      brand,
      category,
      department: section === 'Meats' || section === 'Fresh' ? 'Meat & Fresh' : 'Grocery & Dry Goods',
      qty_on_hand: Math.floor(Math.random() * (status === 'Critical' ? 5 : status === 'Low' ? 15 : 100)),
      qty_min_stock: 20,
      dailySales: Math.floor(Math.random() * 15),
      sales30d: Math.floor(Math.random() * 400),
      retail_price: 15 + Math.floor(Math.random() * 25),
      status,
      row,
      slot: col,
      slotId,
      unit_cost: 1 + Math.random() * 10,
      lastPODate: '2026-02-28',
      supplier: { name: 'Direct Grocery Wholsale', contact: '555-0900', email: 'orders@dgwholesale.com' },
      historicalSales: [],
      sellThrough: 60 + Math.floor(Math.random() * 35),
      facings: 2 + Math.floor(Math.random() * 4),
      sellByRange,
      shrinkRisk: shrinkRisk as 'Low' | 'Watch' | 'High'
    });
  }
  return products;
};

export const MOCK_GROCERY_PRODUCTS: Product[] = [
  ...generateGroceryProducts('Milk', ['Whole Milk', '2% Milk', 'Skim Milk', 'Oat Milk'], ['Lucerne', 'Horizon', 'Fairlife'], 16, 1001),
  ...generateGroceryProducts('Dairy', ['Butter', 'Yogurt', 'Sour Cream', 'Creamer'], ['Lucerne', 'Chobani', 'Daisy'], 20, 2001),
  ...generateGroceryProducts('Cheese', ['Cheddar', 'Mozzarella', 'Swiss', 'American'], ['Lucerne', 'Sargento', 'Kraft'], 20, 3001),
  ...generateGroceryProducts('Frozen Foods', ['Frozen Pizza', 'Ice Cream', 'Frozen Veg', 'Burritos'], ['Digiorno', 'Ben & Jerry', 'Birdseye'], 24, 4001),
  ...generateGroceryProducts('Meats', ['Ground Beef', 'Chicken Breast', 'Pork Chops', 'Steak'], ['Angus', 'Tyson', 'Hormel'], 24, 5001),
  ...generateGroceryProducts('Fresh', ['Bagged Salad', 'Cut Fruit', 'Hummus', 'Guacamole'], ['Fresh Express', 'Sabra', 'Good & Gather'], 16, 6001),
  ...generateGroceryProducts('Soda Coolers', ['Cola', 'Lemon Lime', 'Energy Drink', 'Seltzer'], ['Coke', 'Pepsi', 'Red Bull'], 24, 7001),
  ...generateGroceryProducts('Drinks', ['Gatorade', 'Snapple', 'Orange Juice', 'Apple Juice'], ['Gatorade', 'Snapple', 'Tropicana'], 20, 8001),
  ...generateGroceryProducts('Dry Goods', ['Pasta', 'Pasta Sauce', 'Rice', 'Cereal', 'Oil'], ['Barilla', 'Prego', 'Kellogg'], 40, 9001),
  ...generateGroceryProducts('Nonperishables', ['Canned Soup', 'Canned Beans', 'Peanut Butter', 'Condiments'], ['Campbell', 'Goya', 'Jif'], 40, 10001),
];

const generateAlcoholProducts = (section: string, categories: string[], brands: string[], count: number, startId: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const rand = Math.random();
    const status: ProductStatus = rand > 0.85 ? 'Critical' : rand > 0.55 ? 'Low' : 'Healthy';
    const category = categories[Math.floor(Math.random() * categories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const name = `${brand} ${category}`;
    const sku = `ALC-${startId + i}`;
    const shrinkRisk = rand > 0.8 ? 'High' : rand > 0.5 ? 'Watch' : 'Low';
    const row = Math.floor(i / 8);
    const col = i % 8;
    const slotId = `${String.fromCharCode(65 + row)}-${col + 1}`;
    const price = section === 'Beer' ? 8 + Math.random() * 12 : section === 'Wine' ? 7 + Math.random() * 30 : 15 + Math.random() * 50;

    products.push({
      id: `alc-${startId + i}`,
      sku,
      name,
      brand,
      category,
      department: `Alcohol - ${section}`,
      qty_on_hand: Math.floor(Math.random() * (status === 'Critical' ? 3 : status === 'Low' ? 12 : 60)),
      qty_min_stock: 10,
      dailySales: Math.floor(Math.random() * 12),
      sales30d: Math.floor(Math.random() * 300),
      retail_price: 20 + Math.floor(Math.random() * 30),
      status,
      row,
      slot: col,
      slotId,
      unit_cost: price * 0.6,
      price,
      lastPODate: '2026-02-28',
      supplier: { name: 'Regional Beverage Dist.', contact: '555-0700', email: 'orders@regionalbev.com' },
      historicalSales: [],
      sellThrough: 55 + Math.floor(Math.random() * 40),
      facings: 1 + Math.floor(Math.random() * 3),
      shrinkRisk: shrinkRisk as 'Low' | 'Watch' | 'High'
    });
  }
  return products;
};

export const MOCK_ALCOHOL_PRODUCTS: Product[] = [
  // Beer Cooler — various craft, domestic, imports
  ...generateAlcoholProducts('Beer', ['IPA', 'Lager', 'Stout', 'Pilsner', 'Wheat', 'Pale Ale', 'Seltzer'], ['Bud Light', 'Coors', 'Blue Moon', 'Sierra Nevada', 'Modelo', 'Heineken', 'White Claw', 'Corona', 'Lagunitas', 'Stella Artois'], 60, 20001),
  // Liquor — spirits by category
  ...generateAlcoholProducts('Liquor', ['Bourbon', 'Scotch', 'Vodka', 'Rum', 'Tequila', 'Gin', 'Whiskey', 'Brandy', 'Cognac'], ['Jack Daniels', 'Jameson', 'Grey Goose', 'Bacardi', 'Patron', 'Hendricks', 'Crown Royal', 'Maker\'s Mark', 'Hennessy', 'Don Julio', 'Absolut', 'Captain Morgan', 'Jose Cuervo', 'Johnnie Walker'], 80, 30001),
  // Wine — reds, whites, rosé
  ...generateAlcoholProducts('Wine', ['Cabernet', 'Merlot', 'Pinot Noir', 'Chardonnay', 'Sauvignon Blanc', 'Riesling', 'Rosé', 'Moscato', 'Pinot Grigio', 'Malbec'], ['Barefoot', 'Yellow Tail', 'Josh Cellars', 'Kim Crawford', 'La Crema', 'Meiomi', 'Kendall-Jackson', 'Robert Mondavi', 'Apothic', 'Mark West'], 60, 40001),
];

