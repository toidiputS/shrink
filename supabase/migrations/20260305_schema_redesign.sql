-- Drop old tables if they exist to start fresh, in correct order regarding FKs
DROP TABLE IF EXISTS trade_proposals CASCADE;
DROP TABLE IF EXISTS trade_posts CASCADE;
DROP TABLE IF EXISTS bot_pairings CASCADE;
DROP TABLE IF EXISTS shrink_log CASCADE;
DROP TABLE IF EXISTS purchase_orders CASCADE;
DROP TABLE IF EXISTS deli_freshness CASCADE;
DROP TABLE IF EXISTS lottery_books CASCADE;
DROP TABLE IF EXISTS lottery_settlements CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS sales CASCADE;
DROP TABLE IF EXISTS suppliers CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stores CASCADE;

-- 1. stores
CREATE TABLE stores (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    address text,
    created_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 2. users
CREATE TABLE users (
    id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
    name text NOT NULL,
    email text NOT NULL,
    role text CHECK (role IN ('manager','employee')),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    created_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 3. inventory
CREATE TABLE inventory (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    sku text NOT NULL,
    name text NOT NULL,
    category text,
    department text,
    unit_cost numeric,
    retail_price numeric,
    qty_on_hand int DEFAULT 0,
    qty_min_stock int DEFAULT 0,
    supplier_id uuid, -- We'll add FK after suppliers table is created, or just wait
    last_synced timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 4. sales
CREATE TABLE sales (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    sku text NOT NULL,
    item_name text NOT NULL,
    qty_sold int NOT NULL,
    sale_price numeric NOT NULL,
    total numeric NOT NULL,
    department text,
    sold_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 5. shrink_log
CREATE TABLE shrink_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    sku text NOT NULL,
    item_name text NOT NULL,
    qty int NOT NULL,
    reason text,
    department text,
    logged_by uuid REFERENCES users(id) ON DELETE SET NULL,
    logged_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 6. suppliers
CREATE TABLE suppliers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    name text NOT NULL,
    contact_name text,
    phone text,
    email text,
    category text,
    notes text
);

-- Add supplier_id FK to inventory
ALTER TABLE inventory ADD CONSTRAINT fk_inventory_supplier FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE SET NULL;

-- 7. purchase_orders
CREATE TABLE purchase_orders (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    supplier_id uuid REFERENCES suppliers(id) ON DELETE SET NULL,
    status text,
    total_value numeric,
    items jsonb,
    ordered_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now()),
    received_at timestamp WITH TIME ZONE
);

-- 8. deli_freshness
CREATE TABLE deli_freshness (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    item_name text NOT NULL,
    slot text,
    batch text,
    cooked_at timestamp WITH TIME ZONE,
    expires_at timestamp WITH TIME ZONE,
    volume int,
    health_status text,
    action text
);

-- 9. trade_posts
CREATE TABLE trade_posts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    user_id uuid REFERENCES users(id) ON DELETE SET NULL,
    title text NOT NULL,
    department text,
    needs text,
    offers text,
    status text DEFAULT 'open',
    created_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 10. trade_proposals
CREATE TABLE trade_proposals (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id uuid REFERENCES trade_posts(id) ON DELETE CASCADE,
    proposer_store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    offer_text text NOT NULL,
    status text DEFAULT 'pending',
    created_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 11. lottery_books
CREATE TABLE lottery_books (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    game_name text NOT NULL,
    ticket_price numeric NOT NULL,
    pack_number text NOT NULL,
    tickets_total int NOT NULL,
    tickets_sold int DEFAULT 0,
    tickets_remaining int DEFAULT 0,
    activated_by uuid REFERENCES users(id) ON DELETE SET NULL,
    activated_at timestamp WITH TIME ZONE,
    closed_at timestamp WITH TIME ZONE,
    status text DEFAULT 'active'
);

-- 12. lottery_settlements
CREATE TABLE lottery_settlements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    store_id uuid REFERENCES stores(id) ON DELETE CASCADE,
    date date NOT NULL,
    total_activated_value numeric DEFAULT 0,
    total_redeemed_value numeric DEFAULT 0,
    net_settlement numeric DEFAULT 0,
    created_at timestamp WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- 13. bot_pairings
CREATE TABLE bot_pairings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id) ON DELETE CASCADE,
    platform text NOT NULL,
    platform_user_id text,
    pairing_code text UNIQUE,
    paired_at timestamp WITH TIME ZONE,
    expires_at timestamp WITH TIME ZONE
);
