export type ProductStatus = 'Healthy' | 'Low' | 'Critical';

export interface Product {
  id: string;
  store_id?: string;
  sku: string;
  name: string;
  category: string;
  department: string;
  unit_cost: number;
  retail_price: number;
  qty_on_hand: number;
  qty_min_stock: number;
  supplier_id?: string;
  last_synced?: string;

  // UI Specific fallback properties that are derived or mock
  brand?: string;
  dailySales?: number;
  sales30d?: number;
  sellThrough?: number;
  margin?: number;
  status?: ProductStatus;
  row?: number;
  slot?: number;
  slotId?: string; // e.g. "A-1", "K-5"
  lastPODate?: string;
  supplier?: {
    name: string;
    contact: string;
    email: string;
  };
  historicalSales?: { date: string; sales: number }[];
  basePricePerLb?: number;
  currentPromo?: string;
  sellByRange?: string; // e.g. "Mar 3–5"
  shrinkRisk?: 'Low' | 'Watch' | 'High';
  facings?: number;
  price?: number;
  par?: number;
  capacity?: number;
}

export type TobaccoCategory = 'Cigarettes' | 'Vapes' | 'Chewing Tobacco' | 'Cigars';
export type ViewMode = 'TobaccoWall' | 'FullInventory' | 'DataIntegration' | 'StoreOverview' | 'TradersGuild' | 'DeliHotFoods' | 'GroceryDryGoods' | 'AlcoholStore' | 'Security' | 'Settings' | 'Lottery';

export interface LotteryBook {
  id: string;
  store_id?: string;
  game_name: string;
  ticket_price: number;
  pack_number: string;
  tickets_total: number;
  tickets_sold: number;
  tickets_remaining: number;
  activated_by?: string;
  activated_at: string;
  closed_at: string | null;
  status: 'active' | 'closed' | string;
}

export interface LotterySettlement {
  id: string;
  store_id?: string;
  date: string;
  total_activated_value: number;
  total_redeemed_value: number;
  net_settlement: number;
  created_at?: string;
}

export type TradePostStatus = 'Open' | 'Under Review' | 'Negotiating' | 'Completed' | 'Expired';

export interface TradePost {
  id: string;
  storeName: string;
  department: string;
  needs: string;
  offers: string;
  distance: string;
  timeAgo: string;
  status: TradePostStatus;
  contact?: string;
  proposalsCount?: number;
}

export interface TradeProposal {
  id: string;
  fromStore: string;
  toStore: string;
  originalPostId: string;
  department?: string;
  supplyItem: string;
  supplyQty: string;
  requestItem: string;
  notes?: string;
  status: 'Pending' | 'Accepted' | 'Declined' | 'Expired';
  timeAgo: string;
}

export type TradeDealStatus = 'Draft' | 'Pending Confirm' | 'Finalized' | 'Expired';

export interface TradeDeal {
  itemsFromUs: string;
  itemsFromThem: string;
  deliveryMethod: 'In-person pickup' | 'Meet in middle' | 'Courier' | 'Mail / Ship';
  location: string;
  dateTime: string;
  notes: string;
  myAgreed: boolean;
  theirAgreed: boolean;
  expiresAt: string; // ISO string
  status: TradeDealStatus;
}

export interface TradeMessage {
  id: string;
  sender: 'Me' | string;
  text: string;
  timestamp: string;
  isSystem?: boolean;
}

export interface CategoryData {
  id: TobaccoCategory;
  title: string;
  restockPriority: 'High' | 'Medium' | 'Low';
  products: Product[];
  shelfRows?: number;
  shelfCols?: number;
  isCoolerDoor?: boolean;
  stats: {
    totalInventory: number;
    dailyRestock: number;
    netMargin: number;
    compliance: number;
  };
}
