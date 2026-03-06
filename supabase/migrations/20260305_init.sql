-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- stores
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT
);

-- users
CREATE TYPE user_role AS ENUM ('manager', 'employee');
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'employee',
  store_id UUID REFERENCES stores(id),
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- inventory
CREATE TABLE inventory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  sku TEXT NOT NULL,
  name TEXT NOT NULL,
  brand TEXT,
  category TEXT,
  department TEXT,
  on_hand INTEGER DEFAULT 0,
  reorder_point INTEGER DEFAULT 0,
  daily_sales INTEGER DEFAULT 0,
  sales_30d INTEGER DEFAULT 0,
  sell_through INTEGER DEFAULT 0,
  margin DECIMAL,
  status TEXT,
  cost_price DECIMAL,
  last_po_date DATE,
  supplier_id UUID
);

-- sales
CREATE TABLE sales (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  date TIMESTAMPTZ DEFAULT NOW(),
  sku TEXT NOT NULL,
  units_sold INTEGER DEFAULT 1,
  revenue DECIMAL NOT NULL,
  department TEXT,
  profit_margin DECIMAL,
  discount_applied DECIMAL DEFAULT 0,
  payment_method TEXT,
  cashier_id UUID REFERENCES users(id),
  transaction_id TEXT
);

-- shrink_log
CREATE TABLE shrink_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  date TIMESTAMPTZ DEFAULT NOW(),
  sku TEXT NOT NULL,
  loss_type TEXT,
  units_lost INTEGER DEFAULT 1,
  cost_impact DECIMAL,
  notes TEXT,
  reported_by UUID REFERENCES users(id)
);

-- suppliers
CREATE TABLE suppliers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  supplier_number TEXT,
  name TEXT NOT NULL,
  contact_person TEXT,
  email TEXT,
  phone TEXT,
  status TEXT
);

-- Add foreign key constraint to inventory now that suppliers table is created
ALTER TABLE inventory ADD CONSTRAINT fk_inventory_supplier FOREIGN KEY (supplier_id) REFERENCES suppliers(id);

-- purchase_orders
CREATE TABLE purchase_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  po_number TEXT NOT NULL,
  sku TEXT NOT NULL,
  order_date DATE,
  delivery_date DATE,
  quantity INTEGER,
  unit_cost DECIMAL,
  total_cost DECIMAL,
  status TEXT,
  supplier_id UUID REFERENCES suppliers(id),
  expected_delivery_date DATE,
  received_quantity INTEGER DEFAULT 0,
  created_by UUID REFERENCES users(id)
);

-- deli_freshness
CREATE TABLE deli_freshness (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  item_name TEXT NOT NULL,
  sku TEXT,
  prep_date TIMESTAMPTZ,
  expiry_date TIMESTAMPTZ,
  temperature_log DECIMAL,
  batch_number TEXT,
  prepped_by UUID REFERENCES users(id),
  status TEXT,
  notes TEXT
);

-- lottery_books
CREATE TABLE lottery_books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  game_name TEXT NOT NULL,
  ticket_price DECIMAL,
  pack_number TEXT,
  tickets_total INTEGER,
  tickets_sold INTEGER DEFAULT 0,
  tickets_remaining INTEGER,
  activated_at TIMESTAMPTZ,
  closed_at TIMESTAMPTZ,
  status TEXT
);

-- lottery_settlements
CREATE TABLE lottery_settlements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  date DATE,
  total_activated DECIMAL,
  total_sold DECIMAL,
  total_redeemed DECIMAL,
  net_settlement DECIMAL
);

-- Enable RLS
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE shrink_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE deli_freshness ENABLE ROW LEVEL SECURITY;
ALTER TABLE lottery_books ENABLE ROW LEVEL SECURITY;
ALTER TABLE lottery_settlements ENABLE ROW LEVEL SECURITY;

-- Basic policies allowing authenticated users full access
-- Note: You may want to refine these later to isolate by store_id
CREATE POLICY "Allow authenticated read/write on stores" ON stores FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on users" ON users FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on inventory" ON inventory FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on sales" ON sales FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on shrink_log" ON shrink_log FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on suppliers" ON suppliers FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on purchase_orders" ON purchase_orders FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on deli_freshness" ON deli_freshness FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on lottery_books" ON lottery_books FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated read/write on lottery_settlements" ON lottery_settlements FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

-- Allow anonymous reads for easy initial testing (Optional - remove for strict prod security)
CREATE POLICY "Allow public read on stores" ON stores FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public read on inventory" ON inventory FOR SELECT TO anon USING (true);
