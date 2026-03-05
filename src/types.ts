export type ProductStatus = 'Healthy' | 'Low' | 'Critical';

export interface Product {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  department: string;
  onHand: number;
  reorderPoint: number;
  dailySales: number;
  sales30d: number;
  sellThrough: number;
  margin: number;
  status: ProductStatus;
  row: number;
  slot: number;
  slotId?: string; // e.g. "A-1", "K-5"
  costPrice: number;
  lastPODate: string;
  supplier: {
    name: string;
    contact: string;
    email: string;
  };
  historicalSales: { date: string; sales: number }[];
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
export type ViewMode = 'TobaccoWall' | 'FullInventory' | 'DataIntegration' | 'StoreOverview' | 'TradersGuild' | 'DeliHotFoods' | 'GroceryDryGoods' | 'AlcoholStore' | 'Security' | 'Settings';

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
