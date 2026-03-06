-- Enable RLS on all tables
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE shrink_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE deli_freshness ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE lottery_books ENABLE ROW LEVEL SECURITY;
ALTER TABLE lottery_settlements ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_pairings ENABLE ROW LEVEL SECURITY;

-- Anonymous policies (for local dev / demo environment without full auth)
-- 1. stores
CREATE POLICY "Enable read access for all users" ON stores FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON stores FOR ALL TO anon, authenticated USING (true);

-- 2. users
CREATE POLICY "Enable read access for all users" ON users FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON users FOR ALL TO anon, authenticated USING (true);

-- 3. inventory
CREATE POLICY "Enable read access for all users" ON inventory FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON inventory FOR ALL TO anon, authenticated USING (true);

-- 4. sales
CREATE POLICY "Enable read access for all users" ON sales FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON sales FOR ALL TO anon, authenticated USING (true);

-- 5. shrink_log
CREATE POLICY "Enable read access for all users" ON shrink_log FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON shrink_log FOR ALL TO anon, authenticated USING (true);

-- 6. suppliers
CREATE POLICY "Enable read access for all users" ON suppliers FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON suppliers FOR ALL TO anon, authenticated USING (true);

-- 7. purchase_orders
CREATE POLICY "Enable read access for all users" ON purchase_orders FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON purchase_orders FOR ALL TO anon, authenticated USING (true);

-- 8. deli_freshness
CREATE POLICY "Enable read access for all users" ON deli_freshness FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON deli_freshness FOR ALL TO anon, authenticated USING (true);

-- 9. trade_posts
CREATE POLICY "Enable read access for all users" ON trade_posts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON trade_posts FOR ALL TO anon, authenticated USING (true);

-- 10. trade_proposals
CREATE POLICY "Enable read access for all users" ON trade_proposals FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON trade_proposals FOR ALL TO anon, authenticated USING (true);

-- 11. lottery_books
CREATE POLICY "Enable read access for all users" ON lottery_books FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON lottery_books FOR ALL TO anon, authenticated USING (true);

-- 12. lottery_settlements
CREATE POLICY "Enable read access for all users" ON lottery_settlements FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON lottery_settlements FOR ALL TO anon, authenticated USING (true);

-- 13. bot_pairings
CREATE POLICY "Enable read access for all users" ON bot_pairings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Enable all access for all users" ON bot_pairings FOR ALL TO anon, authenticated USING (true);
