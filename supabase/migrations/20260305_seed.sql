-- default store
INSERT INTO stores (id, name, address) VALUES ('00000000-0000-0000-0000-000000000001', 'Main Store', '123 Main St') ON CONFLICT (id) DO NOTHING;
-- default users
INSERT INTO users (id, name, email, role, store_id) VALUES ('00000000-0000-0000-0000-000000000002', 'Store Manager', 'manager@example.com', 'manager', '00000000-0000-0000-0000-000000000001') ON CONFLICT (id) DO NOTHING;
-- suppliers
INSERT INTO suppliers (id, store_id, name, contact_name, phone, email, category) VALUES ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Core-Mark', 'John Doe', '555-0101', 'john@coremark.example', 'General') ON CONFLICT (id) DO NOTHING;
-- Inventory
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-580761',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  12,
  25,
  26,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-419085',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  11,
  29,
  13,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-185958',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  16,
  40,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-798021',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  9,
  19,
  42,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-974813',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  7,
  21,
  71,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-162315',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  5,
  22,
  59,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-964101',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  26,
  91,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-856157',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  17,
  73,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-258116',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  8,
  29,
  28,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-791016',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  22,
  35,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-415614',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  12,
  17,
  91,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-388323',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  13,
  28,
  70,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-901268',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  13,
  29,
  72,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-975271',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  11,
  15,
  0,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-923703',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  6,
  20,
  54,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-979042',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  18,
  1,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-416948',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  8,
  24,
  28,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-768980',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  13,
  17,
  52,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-140088',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  11,
  22,
  2,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-726061',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  12,
  15,
  22,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-735094',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  9,
  16,
  21,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-694509',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  19,
  17,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-964376',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  13,
  18,
  67,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-132395',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  15,
  44,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-222984',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  23,
  90,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-960374',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  13,
  17,
  39,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-175049',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  23,
  81,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-617392',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  6,
  16,
  27,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-883288',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  8,
  22,
  13,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-888661',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  26,
  72,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-663762',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  17,
  98,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-565001',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  11,
  15,
  21,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-746808',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  7,
  25,
  32,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-256678',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  9,
  29,
  45,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-387441',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  8,
  16,
  38,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-782500',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  6,
  29,
  58,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-562840',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  6,
  27,
  39,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-162990',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  12,
  21,
  90,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-133741',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  8,
  22,
  93,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-756289',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  13,
  18,
  50,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-428774',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  8,
  15,
  78,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-156897',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  9,
  27,
  7,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-993894',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  22,
  8,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-794875',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  5,
  18,
  37,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-888547',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  5,
  21,
  17,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-741617',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  8,
  25,
  61,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-693234',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  24,
  76,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-591194',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  8,
  16,
  34,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-878544',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  5,
  16,
  50,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-233424',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  10,
  21,
  33,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-884870',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  9,
  26,
  26,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-113912',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  7,
  29,
  71,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-734011',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  13,
  28,
  36,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-910435',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  12,
  21,
  92,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-252221',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  9,
  19,
  18,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-960887',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  10,
  25,
  56,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-924766',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  28,
  59,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-732187',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  14,
  29,
  29,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-551017',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  6,
  20,
  54,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-558581',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  29,
  48,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-869273',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  18,
  61,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-799033',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  14,
  29,
  27,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-504116',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  14,
  24,
  78,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-589455',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  8,
  18,
  69,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-458269',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  25,
  50,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-336571',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  20,
  69,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-620290',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  27,
  11,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-695333',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  5,
  17,
  97,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-128570',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  11,
  15,
  88,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-894996',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  13,
  17,
  34,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-754825',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  7,
  19,
  8,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-720643',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  12,
  21,
  45,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-931122',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  9,
  19,
  10,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-917980',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  29,
  82,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-693479',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  7,
  24,
  12,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-255634',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  13,
  21,
  96,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-844786',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  5,
  17,
  29,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-345171',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  5,
  24,
  33,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-112675',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  6,
  17,
  12,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-620167',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  13,
  27,
  42,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-613206',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  20,
  91,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-596882',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  6,
  22,
  85,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-589690',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  11,
  21,
  18,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-204081',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  6,
  27,
  86,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-926803',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  26,
  11,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-599027',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  28,
  1,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-801667',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  27,
  94,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-165122',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  14,
  28,
  69,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-286740',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  20,
  54,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-434008',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  6,
  27,
  68,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-747091',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  13,
  24,
  83,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-754291',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  11,
  15,
  81,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-814503',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  12,
  23,
  96,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-758405',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  13,
  25,
  27,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-977155',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  14,
  16,
  87,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-982812',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  6,
  18,
  57,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-386346',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  9,
  19,
  12,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-653019',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  29,
  83,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-296516',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  14,
  29,
  43,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-355627',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  7,
  27,
  49,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-846727',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  8,
  27,
  64,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-897698',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  11,
  19,
  7,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-828646',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  5,
  26,
  3,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-834269',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  10,
  17,
  54,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-233116',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  16,
  79,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-319808',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  21,
  25,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-818766',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  20,
  47,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-468192',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  5,
  26,
  16,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-748718',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  6,
  17,
  5,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-388871',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  7,
  15,
  74,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-973873',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  12,
  21,
  41,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-132719',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  13,
  26,
  55,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-934990',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  9,
  25,
  18,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-476115',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  19,
  73,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-772035',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  12,
  28,
  14,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-299154',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  7,
  18,
  61,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-561662',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  9,
  18,
  3,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-536448',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  9,
  23,
  64,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-751647',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  5,
  22,
  79,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-474990',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  6,
  21,
  23,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-511028',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  12,
  19,
  89,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-238987',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  11,
  15,
  92,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-934867',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  14,
  29,
  42,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-768302',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  14,
  23,
  6,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-974900',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  7,
  18,
  38,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-906590',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  15,
  97,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-793654',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  5,
  24,
  23,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-714206',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  5,
  21,
  33,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-745334',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  11,
  19,
  39,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-440716',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  7,
  28,
  2,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-336406',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  10,
  29,
  84,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-950845',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  7,
  29,
  37,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-105734',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  7,
  15,
  68,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-494447',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  9,
  16,
  25,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-593473',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  9,
  18,
  18,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-979868',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  27,
  61,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-466974',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  5,
  22,
  94,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-383649',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  14,
  29,
  91,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-180097',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  5,
  22,
  93,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-184301',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  8,
  28,
  51,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-340124',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  14,
  23,
  66,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-776876',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  16,
  99,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-150868',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  10,
  15,
  91,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-172644',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  16,
  45,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-161105',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  8,
  28,
  45,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-547921',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  14,
  22,
  94,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-448213',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  6,
  22,
  59,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-134053',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  19,
  43,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-827813',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  11,
  21,
  86,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-786956',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  11,
  20,
  91,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-368900',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  16,
  82,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-104370',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  8,
  19,
  50,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-519138',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  15,
  39,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-338380',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  14,
  24,
  83,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-944148',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  18,
  60,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-770770',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  7,
  22,
  72,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-760933',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  6,
  18,
  84,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-927288',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  8,
  19,
  73,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-375206',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  5,
  21,
  9,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-381817',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  15,
  75,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-422384',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  13,
  26,
  75,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-759509',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  10,
  21,
  97,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-251980',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  8,
  19,
  66,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-462072',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  12,
  22,
  31,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-850115',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  10,
  20,
  54,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-595121',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  11,
  24,
  75,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-658848',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  13,
  24,
  74,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-524175',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  13,
  20,
  73,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-705356',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  12,
  25,
  31,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-358173',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  8,
  20,
  25,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-370865',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  23,
  39,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-955027',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  8,
  20,
  82,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-301399',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  28,
  68,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-974516',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  29,
  46,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-390584',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  27,
  40,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-807449',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  14,
  24,
  32,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-471580',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  8,
  28,
  91,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-560365',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  17,
  59,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-298448',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  6,
  19,
  96,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-759703',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  11,
  26,
  36,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-758420',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  13,
  19,
  57,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-537602',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  8,
  20,
  93,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-678599',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  9,
  16,
  45,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-211282',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  21,
  44,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-387321',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  12,
  27,
  65,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-102725',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  20,
  79,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-160549',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  6,
  24,
  57,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-461368',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  12,
  23,
  20,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-840073',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  10,
  29,
  77,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-915103',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  14,
  18,
  14,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-162186',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  6,
  17,
  73,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-167445',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  13,
  18,
  18,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-372317',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  13,
  29,
  15,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-249751',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  11,
  21,
  89,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-143701',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  5,
  21,
  9,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-845154',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  12,
  27,
  57,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-725469',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  5,
  29,
  38,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-678111',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  7,
  15,
  17,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-767924',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  21,
  32,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-292982',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  12,
  19,
  15,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-443252',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  13,
  15,
  85,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-735375',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  10,
  26,
  71,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-381291',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  5,
  27,
  51,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-327948',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  11,
  25,
  48,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-646127',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  9,
  15,
  91,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-996236',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  8,
  25,
  48,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-441655',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  6,
  23,
  21,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-787515',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  10,
  22,
  74,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-315443',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  8,
  21,
  24,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-441786',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  24,
  97,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-463529',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  7,
  22,
  46,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-877532',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  7,
  24,
  2,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-781873',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  22,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-443238',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  8,
  26,
  44,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-422087',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  6,
  19,
  46,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-966457',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  12,
  29,
  67,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-711145',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  8,
  21,
  71,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-390726',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  7,
  15,
  15,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-351171',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  7,
  27,
  24,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-760582',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  10,
  19,
  65,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-801565',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  14,
  26,
  58,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-925524',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  7,
  19,
  95,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-639905',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  7,
  17,
  54,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-904937',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  11,
  22,
  57,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-725283',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  19,
  64,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-725369',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  8,
  27,
  75,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-805133',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  11,
  17,
  3,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-454325',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  7,
  21,
  7,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-896133',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  13,
  25,
  6,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-121485',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  5,
  15,
  27,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-400112',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  13,
  17,
  78,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-619869',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  6,
  27,
  73,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-793251',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  10,
  27,
  76,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-327237',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  11,
  16,
  88,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-271113',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  12,
  17,
  19,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-937009',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  29,
  49,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-991822',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  6,
  21,
  92,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-343668',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  26,
  98,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-221772',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  9,
  18,
  49,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-683515',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  5,
  15,
  50,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-300736',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  5,
  23,
  61,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-162414',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  22,
  30,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-950206',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  10,
  21,
  41,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-341535',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  11,
  28,
  93,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-370813',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  6,
  25,
  9,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-699584',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  13,
  19,
  6,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-172237',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  8,
  16,
  0,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-614692',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  7,
  17,
  19,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-559698',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  11,
  24,
  60,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-226724',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  16,
  96,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-261938',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  18,
  16,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-324885',
  'Gold Pack',
  'Cigarettes',
  'Tobacco',
  8,
  28,
  67,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-637510',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  12,
  23,
  36,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-954774',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  13,
  17,
  69,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-847461',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  8,
  26,
  60,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-408399',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  9,
  18,
  62,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-758869',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  8,
  15,
  45,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-977650',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  10,
  16,
  25,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-582571',
  'Silver Pack',
  'Cigarettes',
  'Tobacco',
  12,
  20,
  45,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-410647',
  'Red Pack',
  'Cigarettes',
  'Tobacco',
  12,
  26,
  64,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-386353',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  12,
  27,
  63,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-546617',
  'Blue Pack',
  'Cigarettes',
  'Tobacco',
  14,
  22,
  7,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-606548',
  'Menthol Pack',
  'Cigarettes',
  'Tobacco',
  7,
  22,
  16,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-598129',
  'Classic Pack',
  'Cigarettes',
  'Tobacco',
  14,
  28,
  90,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-405555',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  14,
  19,
  69,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-298851',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  12,
  26,
  30,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-317586',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  13,
  28,
  52,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-646510',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  15,
  45,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-742838',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  7,
  21,
  43,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-389608',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  13,
  24,
  69,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-139013',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  14,
  18,
  93,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-846183',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  23,
  44,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-552698',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  25,
  78,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-652989',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  29,
  60,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-459701',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  5,
  21,
  1,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-991797',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  27,
  0,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-421041',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  15,
  29,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-969211',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  6,
  18,
  85,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-892558',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  8,
  15,
  9,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-462745',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  5,
  28,
  28,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-624575',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  9,
  26,
  18,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-336121',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  5,
  18,
  70,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-651319',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  6,
  21,
  29,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-639335',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  26,
  15,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-999941',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  12,
  19,
  93,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-360030',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  9,
  24,
  7,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-486865',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  0,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-355620',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  9,
  27,
  60,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-580242',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  17,
  64,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-801895',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  5,
  16,
  5,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-456127',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  22,
  48,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-859592',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  11,
  29,
  50,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-725441',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  12,
  23,
  31,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-462994',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  8,
  28,
  88,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-429219',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  11,
  24,
  69,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-701611',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  22,
  54,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-453540',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  12,
  22,
  48,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-433498',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  6,
  15,
  19,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-748707',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  18,
  22,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-978124',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  7,
  28,
  97,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-254170',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  12,
  17,
  13,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-308421',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  13,
  27,
  90,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-196036',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  11,
  28,
  41,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-732097',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  19,
  82,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-525247',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  7,
  29,
  15,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-309639',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  15,
  55,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-437872',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  8,
  22,
  6,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-670240',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  11,
  21,
  81,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-563168',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  5,
  18,
  79,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-484408',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  7,
  16,
  3,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-707412',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  9,
  19,
  93,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-493336',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  8,
  25,
  4,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-766759',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  9,
  28,
  83,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-588285',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  10,
  24,
  4,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-645320',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  14,
  23,
  19,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-844330',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  26,
  50,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-679651',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  7,
  23,
  25,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-960107',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  7,
  17,
  73,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-245866',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  25,
  81,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-725397',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  11,
  18,
  21,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-526154',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  6,
  15,
  5,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-862893',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  9,
  17,
  31,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-915029',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  14,
  25,
  57,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-327374',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  10,
  16,
  45,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-680955',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  12,
  23,
  0,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-853223',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  12,
  18,
  72,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-335860',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  13,
  28,
  96,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-686975',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  25,
  14,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-747982',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  10,
  27,
  67,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-819462',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  14,
  17,
  86,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-452739',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  27,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-458050',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  5,
  21,
  89,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-205861',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  20,
  24,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-657013',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  24,
  2,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-546792',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  14,
  16,
  71,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-248052',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  11,
  29,
  1,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-682695',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  25,
  88,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-837698',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  13,
  15,
  20,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-326131',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  10,
  28,
  18,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-543641',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  21,
  16,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-827115',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  8,
  25,
  25,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-134994',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  7,
  19,
  36,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-843301',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  10,
  21,
  35,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-546344',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  34,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-861032',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  71,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-482490',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  29,
  88,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-591880',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  9,
  17,
  1,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-867658',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  10,
  27,
  40,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-543195',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  20,
  86,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-347226',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  25,
  47,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-298451',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  8,
  28,
  82,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-399716',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  25,
  41,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-196339',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  6,
  26,
  6,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-378246',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  3,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-395364',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  27,
  27,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-585409',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  12,
  23,
  50,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-346703',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  15,
  76,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-970521',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  10,
  18,
  34,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-869681',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  25,
  7,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-201896',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  11,
  15,
  20,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-778065',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  14,
  16,
  46,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-552200',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  8,
  22,
  4,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-930793',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  12,
  24,
  71,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-598213',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  17,
  3,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-594326',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  18,
  77,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-913668',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  13,
  23,
  15,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-724563',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  5,
  17,
  20,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-456329',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  22,
  49,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-763658',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  7,
  29,
  22,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-473467',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  7,
  21,
  81,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-156453',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  18,
  61,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-300746',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  13,
  22,
  78,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-752871',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  13,
  22,
  92,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-670860',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  12,
  22,
  27,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-924486',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  14,
  16,
  88,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-325168',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  6,
  18,
  82,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-671639',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  5,
  23,
  71,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-347362',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  5,
  28,
  73,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-290988',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  29,
  49,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-930658',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  13,
  21,
  94,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-605497',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  12,
  16,
  68,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-681213',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  15,
  0,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-477376',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  9,
  25,
  12,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-730255',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  9,
  29,
  49,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-547632',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  6,
  21,
  20,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-287955',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  20,
  29,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-328689',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  9,
  24,
  12,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-706056',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  13,
  24,
  29,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-517362',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  29,
  83,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-697749',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  10,
  18,
  18,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-881932',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  8,
  20,
  91,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-335871',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  19,
  36,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-573382',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  13,
  26,
  88,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-831765',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  9,
  21,
  48,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-861478',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  7,
  20,
  30,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-579130',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  11,
  19,
  66,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-547650',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  6,
  25,
  5,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-575676',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  8,
  24,
  74,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-890688',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  12,
  25,
  19,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-721249',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  5,
  16,
  63,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-676411',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  5,
  25,
  94,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-974438',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  6,
  21,
  1,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-719314',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  8,
  19,
  5,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-950125',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  8,
  28,
  34,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-277640',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  18,
  0,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-256693',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  5,
  23,
  24,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-554684',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  14,
  24,
  72,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-140004',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  14,
  16,
  58,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-401700',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  6,
  17,
  18,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-495645',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  27,
  9,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-721398',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  12,
  29,
  26,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-376909',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  22,
  66,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-570786',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  29,
  24,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-597274',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  13,
  19,
  20,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-461709',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  10,
  27,
  48,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-251210',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  8,
  21,
  24,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-780520',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  15,
  88,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-223925',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  5,
  27,
  46,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-144218',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  17,
  69,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-856837',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  22,
  26,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-679216',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  18,
  56,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-718223',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  5,
  26,
  33,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-526020',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  9,
  29,
  59,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-733369',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  9,
  16,
  45,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-486659',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  6,
  22,
  23,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-865559',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  7,
  27,
  63,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-286107',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  13,
  23,
  73,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-215766',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  10,
  15,
  34,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-235954',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  11,
  25,
  23,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-808950',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  6,
  29,
  95,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-899784',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  26,
  32,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-667988',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  22,
  29,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-704427',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  25,
  79,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-272106',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  12,
  24,
  38,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-802293',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  28,
  10,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-733012',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  8,
  26,
  30,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-356048',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  7,
  17,
  25,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-195340',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  10,
  21,
  0,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-105324',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  9,
  23,
  90,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-519968',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  22,
  42,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-701505',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  12,
  21,
  68,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-327763',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  19,
  13,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-429730',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  20,
  3,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-664704',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  19,
  99,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-146167',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  13,
  25,
  64,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-746927',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  21,
  18,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-557573',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  8,
  21,
  63,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-924166',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  10,
  25,
  6,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-150772',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  6,
  28,
  31,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-542371',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  28,
  38,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-894299',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  13,
  16,
  76,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-234585',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  18,
  43,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-666145',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  17,
  28,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-324965',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  8,
  26,
  41,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-938698',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  10,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-331472',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  11,
  24,
  14,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-179987',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  9,
  16,
  88,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-362504',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  14,
  22,
  81,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-887292',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  8,
  16,
  65,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-283199',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  6,
  15,
  69,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-509976',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  12,
  28,
  50,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-763374',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  13,
  24,
  37,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-571647',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  11,
  19,
  30,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-276710',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  6,
  23,
  74,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-720255',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  25,
  38,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-678647',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  10,
  18,
  81,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-173126',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  6,
  19,
  23,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-723929',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  19,
  89,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-726691',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  20,
  73,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-429315',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  14,
  27,
  55,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-177749',
  'Juice Pack',
  'Vapes',
  'Tobacco',
  6,
  22,
  73,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-425407',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  16,
  95,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-691109',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  6,
  20,
  26,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-109157',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  14,
  18,
  65,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-545039',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  9,
  21,
  22,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-767928',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  5,
  19,
  98,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-261150',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  9,
  19,
  40,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-901139',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  7,
  21,
  1,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-513721',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  7,
  24,
  67,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-231789',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  14,
  19,
  77,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-246524',
  'Disposable Pack',
  'Vapes',
  'Tobacco',
  5,
  24,
  95,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-452844',
  'Pod Pack',
  'Vapes',
  'Tobacco',
  9,
  23,
  1,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-213814',
  'Mod Pack',
  'Vapes',
  'Tobacco',
  8,
  20,
  16,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-237193',
  'Coil Pack',
  'Vapes',
  'Tobacco',
  12,
  24,
  55,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-953994',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  29,
  47,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-967381',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  27,
  41,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-154661',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  17,
  28,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-541434',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  24,
  89,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-466806',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  22,
  7,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-118261',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  21,
  10,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-488146',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  28,
  91,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-872048',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  16,
  7,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-807634',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  17,
  71,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-102057',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  15,
  7,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-102153',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  26,
  26,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-426198',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  18,
  75,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-123055',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  15,
  88,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-905027',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  15,
  41,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-170508',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  18,
  74,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-464911',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  20,
  91,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-439880',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  23,
  55,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-791458',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  25,
  9,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-291533',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  20,
  86,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-112619',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  18,
  61,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-930144',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  18,
  62,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-180134',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  23,
  7,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-555619',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  19,
  83,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-330020',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  17,
  96,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-647118',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  21,
  54,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-817338',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  28,
  51,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-267422',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  23,
  1,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-968864',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  21,
  81,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-418432',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  17,
  48,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-448371',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  17,
  47,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-299758',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  17,
  91,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-148271',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  24,
  46,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-280222',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  29,
  88,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-175359',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  20,
  21,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-494216',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  24,
  18,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-488083',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  22,
  28,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-240834',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  24,
  54,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-672979',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  16,
  42,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-963043',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  19,
  87,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-285978',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  26,
  31,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-958030',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  28,
  44,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-259365',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  22,
  28,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-808483',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  25,
  34,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-142725',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  18,
  11,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-474384',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  25,
  58,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-643107',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  27,
  77,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-935929',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  19,
  50,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-281465',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  28,
  11,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-267332',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  19,
  48,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-894612',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  21,
  0,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-543566',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  22,
  14,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-786044',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  28,
  18,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-851968',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  23,
  37,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-994195',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  20,
  67,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-982850',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  25,
  55,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-861094',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  16,
  26,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-656770',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  28,
  44,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-359287',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  26,
  14,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-986516',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  15,
  70,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-610921',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  24,
  26,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-831345',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  15,
  37,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-854503',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  22,
  1,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-818435',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  29,
  59,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-880561',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  19,
  50,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-535313',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  25,
  15,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-673119',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  21,
  19,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-794426',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  16,
  72,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-586803',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  15,
  51,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-898413',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  22,
  67,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-185576',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  21,
  31,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-248346',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  18,
  68,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-244837',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  15,
  16,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-220292',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  22,
  56,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-865304',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  18,
  54,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-249958',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  28,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-700325',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  20,
  28,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-168513',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  15,
  48,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-201156',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  19,
  64,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-988879',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  26,
  22,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-218650',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  26,
  18,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-434522',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  17,
  75,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-915530',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  25,
  37,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-155744',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  20,
  83,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-237078',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  20,
  78,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-356347',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  19,
  16,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-865078',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  26,
  25,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-298158',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  16,
  67,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-319194',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  24,
  45,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-574185',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  26,
  26,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-425800',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  28,
  45,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-122829',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  29,
  62,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-904265',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  22,
  73,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-752348',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  28,
  38,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-291047',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  24,
  96,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-772507',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  24,
  90,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-355370',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  20,
  86,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-890950',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  23,
  67,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-969163',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  24,
  98,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-144011',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  21,
  29,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-614327',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  22,
  32,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-520271',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  16,
  0,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-398491',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  23,
  21,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-738926',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  16,
  71,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-310445',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  19,
  64,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-782382',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  24,
  90,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-121733',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  29,
  37,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-913317',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  29,
  72,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-877250',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  28,
  69,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-310350',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  20,
  21,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-884842',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  23,
  4,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-785950',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  17,
  41,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-962300',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  24,
  93,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-780668',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  19,
  57,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-367114',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  16,
  42,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-186793',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  19,
  80,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-572474',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  19,
  17,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-917412',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  29,
  7,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-648920',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  23,
  5,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-740976',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  19,
  73,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-982297',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  29,
  32,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-231367',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  29,
  13,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-652129',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  20,
  50,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-720347',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  28,
  2,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-543202',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  20,
  77,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-198228',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  16,
  34,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-851457',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  17,
  92,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-790014',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  21,
  65,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-798668',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  27,
  42,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-485420',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  21,
  88,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-215122',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  28,
  23,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-633201',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  24,
  65,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-683989',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  22,
  88,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-144558',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  26,
  16,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-459810',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  15,
  5,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-858513',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  28,
  6,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-227009',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  12,
  25,
  19,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-922222',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  22,
  47,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-928117',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  15,
  93,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-919866',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  19,
  21,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-384551',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  20,
  89,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-657753',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  26,
  24,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-385873',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  20,
  24,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-385004',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  16,
  38,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-616129',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  23,
  27,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-149105',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  29,
  3,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-595888',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  23,
  8,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-528085',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  22,
  90,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-974590',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  18,
  72,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-672816',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  18,
  9,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-874158',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  20,
  2,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-219705',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  21,
  74,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-525608',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  17,
  33,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-688214',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  21,
  26,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-352694',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  16,
  52,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-263951',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  17,
  27,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-618886',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  22,
  43,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-264226',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  25,
  83,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-763774',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  13,
  22,
  24,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-142657',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  9,
  19,
  21,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-686290',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  15,
  0,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-652488',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  7,
  29,
  95,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-441242',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  23,
  61,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-248807',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  16,
  16,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-539712',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  17,
  58,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-513591',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  6,
  26,
  0,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-109312',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  24,
  49,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-506943',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  21,
  62,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-513008',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  8,
  27,
  65,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-672022',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  11,
  23,
  77,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-109954',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  16,
  11,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-309022',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  20,
  64,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-996537',
  'Wintergreen Pack',
  'Chewing Tobacco',
  'Tobacco',
  10,
  16,
  66,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-766673',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  16,
  36,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-267784',
  'Straight Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  23,
  16,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-201912',
  'Mint Pack',
  'Chewing Tobacco',
  'Tobacco',
  5,
  18,
  38,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-878531',
  'Natural Pack',
  'Chewing Tobacco',
  'Tobacco',
  14,
  24,
  29,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-770733',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  20,
  4,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-194255',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  8,
  27,
  99,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-999359',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  14,
  19,
  6,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-696545',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  20,
  84,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-213110',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  10,
  24,
  73,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-620269',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  12,
  17,
  19,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-891762',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  13,
  21,
  81,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-912839',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  5,
  26,
  28,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-656603',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  15,
  68,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-513414',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  11,
  15,
  66,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-318308',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  13,
  17,
  37,
  24,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-410760',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  27,
  68,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-590948',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  10,
  26,
  31,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-548429',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  5,
  26,
  80,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-779334',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  14,
  24,
  30,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-170448',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  26,
  35,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-934934',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  13,
  17,
  24,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-249448',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  7,
  22,
  5,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-452647',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  6,
  25,
  12,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-788570',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  13,
  24,
  9,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-396937',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  14,
  22,
  23,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-710195',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  12,
  22,
  21,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-548832',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  9,
  23,
  94,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-426303',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  8,
  27,
  31,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-516795',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  10,
  15,
  36,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-737058',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  21,
  78,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-895813',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  13,
  23,
  96,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-119681',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  9,
  20,
  84,
  43,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-277829',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  14,
  20,
  87,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-346378',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  10,
  23,
  82,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-411653',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  28,
  2,
  38,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-972406',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  8,
  20,
  94,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-908242',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  10,
  29,
  63,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-775983',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  10,
  28,
  35,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-661549',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  11,
  21,
  42,
  49,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-575671',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  7,
  26,
  11,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-277752',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  9,
  23,
  66,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-621772',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  8,
  29,
  86,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-144554',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  8,
  26,
  75,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-766511',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  8,
  20,
  27,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-591343',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  17,
  6,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-866709',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  16,
  19,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-610420',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  11,
  16,
  9,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-229320',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  11,
  28,
  1,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-162841',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  14,
  17,
  2,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-122822',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  14,
  28,
  39,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-901860',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  12,
  22,
  43,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-851340',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  13,
  29,
  90,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-488800',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  14,
  17,
  8,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-167809',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  8,
  27,
  61,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-965448',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  10,
  26,
  33,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-767107',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  9,
  20,
  65,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-439276',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  8,
  28,
  75,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-894719',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  9,
  24,
  45,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-167497',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  9,
  24,
  47,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-745760',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  5,
  22,
  34,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-117405',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  5,
  21,
  12,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-473230',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  10,
  17,
  94,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-196831',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  5,
  26,
  87,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-415959',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  10,
  22,
  96,
  46,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-516008',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  8,
  25,
  45,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-656486',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  16,
  63,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-691145',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  27,
  81,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-189425',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  11,
  26,
  26,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-906783',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  11,
  27,
  38,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-431637',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  12,
  26,
  34,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-918635',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  5,
  18,
  85,
  47,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-299566',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  9,
  18,
  56,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-339784',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  11,
  27,
  11,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-655751',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  14,
  26,
  56,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-542516',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  10,
  29,
  47,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-356892',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  13,
  24,
  1,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-626785',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  8,
  25,
  49,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-897784',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  13,
  16,
  98,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-190878',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  25,
  59,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-672566',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  9,
  18,
  37,
  27,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-995911',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  6,
  15,
  5,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-838845',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  10,
  25,
  43,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-537231',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  11,
  29,
  29,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-934086',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  13,
  24,
  38,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-433462',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  8,
  25,
  82,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-672625',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  5,
  18,
  20,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-103543',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  8,
  21,
  23,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-109594',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  9,
  27,
  31,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-623614',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  7,
  18,
  30,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-350983',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  11,
  29,
  91,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-109347',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  12,
  19,
  7,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-621425',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  8,
  18,
  90,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-709964',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  6,
  29,
  83,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-605381',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  7,
  21,
  3,
  34,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-503236',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  7,
  17,
  13,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-806470',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  10,
  18,
  29,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-839327',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  10,
  19,
  66,
  33,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-392650',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  5,
  18,
  85,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-994861',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  5,
  25,
  30,
  26,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-545450',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  13,
  20,
  98,
  45,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-474243',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  10,
  28,
  69,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-465564',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  22,
  6,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-972222',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  5,
  20,
  61,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-889855',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  14,
  26,
  39,
  48,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-341669',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  6,
  27,
  68,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-143053',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  25,
  12,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-559914',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  9,
  22,
  30,
  29,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-474824',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  14,
  18,
  15,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-969419',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  10,
  19,
  42,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-611180',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  10,
  24,
  10,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-133993',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  10,
  20,
  75,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-733263',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  8,
  17,
  31,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-397719',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  7,
  19,
  12,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-693458',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  10,
  23,
  55,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-616645',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  10,
  26,
  51,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-927335',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  13,
  18,
  65,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-482388',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  13,
  18,
  5,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-821560',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  9,
  17,
  8,
  36,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-634632',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  10,
  17,
  66,
  41,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-368891',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  7,
  25,
  86,
  35,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-759495',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  8,
  27,
  90,
  40,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-429487',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  6,
  15,
  72,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-364437',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  5,
  19,
  66,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-300546',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  12,
  15,
  12,
  21,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-187227',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  17,
  15,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-731115',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  8,
  23,
  91,
  31,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-985097',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  12,
  27,
  40,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-620079',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  13,
  17,
  60,
  23,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-739954',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  12,
  29,
  21,
  32,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-132263',
  'Dominican Box',
  'Cigars',
  'Tobacco',
  13,
  22,
  27,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-797353',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  12,
  15,
  81,
  39,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-989075',
  'Cuban Box',
  'Cigars',
  'Tobacco',
  13,
  22,
  58,
  28,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-299174',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  13,
  19,
  39,
  37,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-388620',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  5,
  29,
  74,
  42,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-892967',
  'Churchill Box',
  'Cigars',
  'Tobacco',
  9,
  17,
  32,
  22,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'SKU-550974',
  'Robusto Box',
  'Cigars',
  'Tobacco',
  7,
  24,
  74,
  44,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1001',
  'Chicken Tenders 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  24.5,
  35,
  12,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1002',
  'Potato Wedges 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  12,
  45,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1003',
  'Mac & Cheese Pan',
  'Prepared',
  'Deli & Hot Foods',
  18.75,
  40,
  24,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1004',
  'Breakfast Burrito 12ct',
  'Frozen Prep',
  'Deli & Hot Foods',
  15.2,
  38,
  5,
  12,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1005',
  'Corn Dogs 24ct',
  'Frozen Prep',
  'Deli & Hot Foods',
  11.5,
  42,
  15,
  8,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1006',
  'Mozzarella Sticks 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  22,
  48,
  20,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1007',
  'Jalapeno Poppers 3lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  14.8,
  50,
  4,
  6,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1008',
  'Buffalo Wings 10lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  45,
  32,
  30,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1009',
  'BBQ Ribs 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  32,
  30,
  2,
  5,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1010',
  'Meatballs 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  19.5,
  40,
  18,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1011',
  'Pizza Slices 12ct',
  'Prepared',
  'Deli & Hot Foods',
  8.4,
  55,
  40,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1012',
  'Hot Dogs 12ct',
  'Prepared',
  'Deli & Hot Foods',
  6.2,
  60,
  25,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1013',
  'Taquitos 24ct',
  'Frozen Prep',
  'Deli & Hot Foods',
  9.8,
  45,
  12,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1014',
  'Egg Rolls 12ct',
  'Frozen Prep',
  'Deli & Hot Foods',
  7.5,
  50,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1015',
  'Spring Rolls 24ct',
  'Frozen Prep',
  'Deli & Hot Foods',
  12.4,
  52,
  20,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1016',
  'Fried Rice 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  11.2,
  40,
  10,
  8,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1017',
  'Chow Mein 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  11.2,
  40,
  3,
  8,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1018',
  'Orange Chicken 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  28.5,
  38,
  15,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1019',
  'Beef & Broccoli 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  32.4,
  35,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1020',
  'Sweet & Sour Pork 5lb Bag',
  'Frozen Prep',
  'Deli & Hot Foods',
  26.8,
  38,
  12,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1021',
  'Deli Sliced Ham 5lb',
  'Meat',
  'Deli & Hot Foods',
  35,
  28,
  25,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1022',
  'Deli Sliced Turkey 5lb',
  'Meat',
  'Deli & Hot Foods',
  38,
  30,
  10,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1023',
  'Deli Sliced Swiss Cheese 5lb',
  'Cheese',
  'Deli & Hot Foods',
  22.5,
  32,
  15,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1024',
  'Ranch Dressing 1gal',
  'Sauces',
  'Deli & Hot Foods',
  18.2,
  40,
  4,
  6,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-1025',
  'BBQ Sauce 1gal',
  'Sauces',
  'Deli & Hot Foods',
  15.5,
  45,
  12,
  6,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-C-101',
  'Boar''s Head OvenGold Turkey',
  'Deli Counter',
  'Deli & Hot Foods',
  8.5,
  35,
  45.5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-C-102',
  'Boar''s Head Black Forest Ham',
  'Deli Counter',
  'Deli & Hot Foods',
  6.8,
  38,
  18.2,
  25,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-C-103',
  'Boar''s Head Roast Beef',
  'Deli Counter',
  'Deli & Hot Foods',
  10.2,
  32,
  12.4,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-C-104',
  'Land O Lakes American Cheese',
  'Deli Counter',
  'Deli & Hot Foods',
  3.8,
  45,
  62,
  30,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-C-105',
  'Provolone Cheese',
  'Deli Counter',
  'Deli & Hot Foods',
  4.5,
  40,
  22.5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'DELI-C-106',
  'Swiss Cheese',
  'Deli Counter',
  'Deli & Hot Foods',
  5.2,
  42,
  8.5,
  15,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1001',
  'Horizon Skim Milk',
  'Skim Milk',
  'Grocery & Dry Goods',
  5.3017615862279435,
  39,
  49,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1002',
  'Horizon Skim Milk',
  'Skim Milk',
  'Grocery & Dry Goods',
  7.53083303901348,
  25,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1003',
  'Lucerne Oat Milk',
  'Oat Milk',
  'Grocery & Dry Goods',
  10.400823052833038,
  22,
  6,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1004',
  'Fairlife Oat Milk',
  'Oat Milk',
  'Grocery & Dry Goods',
  8.98773777193646,
  28,
  70,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1005',
  'Lucerne Skim Milk',
  'Skim Milk',
  'Grocery & Dry Goods',
  9.026055121610936,
  18,
  80,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1006',
  'Lucerne Oat Milk',
  'Oat Milk',
  'Grocery & Dry Goods',
  5.3803660928862005,
  34,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1007',
  'Lucerne Oat Milk',
  'Oat Milk',
  'Grocery & Dry Goods',
  10.15197205846556,
  27,
  8,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1008',
  'Lucerne Whole Milk',
  'Whole Milk',
  'Grocery & Dry Goods',
  2.431010254189029,
  25,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1009',
  'Fairlife Skim Milk',
  'Skim Milk',
  'Grocery & Dry Goods',
  7.371972823783434,
  21,
  80,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1010',
  'Lucerne 2% Milk',
  '2% Milk',
  'Grocery & Dry Goods',
  9.601476932231941,
  18,
  74,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1011',
  'Fairlife Oat Milk',
  'Oat Milk',
  'Grocery & Dry Goods',
  7.7502557298556525,
  32,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1012',
  'Horizon Whole Milk',
  'Whole Milk',
  'Grocery & Dry Goods',
  2.610288858604505,
  21,
  70,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1013',
  'Horizon Oat Milk',
  'Oat Milk',
  'Grocery & Dry Goods',
  4.6679784109853575,
  24,
  45,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1014',
  'Fairlife 2% Milk',
  '2% Milk',
  'Grocery & Dry Goods',
  10.367974934014589,
  24,
  93,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1015',
  'Lucerne 2% Milk',
  '2% Milk',
  'Grocery & Dry Goods',
  4.0010943195769935,
  30,
  87,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-1016',
  'Fairlife 2% Milk',
  '2% Milk',
  'Grocery & Dry Goods',
  3.9686706823638565,
  34,
  65,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2001',
  'Daisy Sour Cream',
  'Sour Cream',
  'Grocery & Dry Goods',
  2.689631648156067,
  36,
  40,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2002',
  'Chobani Butter',
  'Butter',
  'Grocery & Dry Goods',
  4.2481041563473,
  21,
  85,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2003',
  'Chobani Yogurt',
  'Yogurt',
  'Grocery & Dry Goods',
  10.131386273328932,
  39,
  39,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2004',
  'Chobani Butter',
  'Butter',
  'Grocery & Dry Goods',
  1.6737904273363182,
  37,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2005',
  'Chobani Creamer',
  'Creamer',
  'Grocery & Dry Goods',
  10.119071207428256,
  28,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2006',
  'Daisy Butter',
  'Butter',
  'Grocery & Dry Goods',
  5.382075626132533,
  22,
  25,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2007',
  'Chobani Butter',
  'Butter',
  'Grocery & Dry Goods',
  6.925622667349499,
  21,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2008',
  'Daisy Butter',
  'Butter',
  'Grocery & Dry Goods',
  1.902055355555107,
  27,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2009',
  'Chobani Butter',
  'Butter',
  'Grocery & Dry Goods',
  6.08456462863716,
  17,
  30,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2010',
  'Chobani Butter',
  'Butter',
  'Grocery & Dry Goods',
  6.612492913627727,
  32,
  76,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2011',
  'Chobani Sour Cream',
  'Sour Cream',
  'Grocery & Dry Goods',
  10.202875915355225,
  32,
  69,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2012',
  'Daisy Creamer',
  'Creamer',
  'Grocery & Dry Goods',
  9.032517958754461,
  30,
  81,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2013',
  'Lucerne Butter',
  'Butter',
  'Grocery & Dry Goods',
  1.5176938659354535,
  39,
  65,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2014',
  'Lucerne Yogurt',
  'Yogurt',
  'Grocery & Dry Goods',
  6.428964524320589,
  27,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2015',
  'Chobani Creamer',
  'Creamer',
  'Grocery & Dry Goods',
  1.7676004516685597,
  19,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2016',
  'Daisy Creamer',
  'Creamer',
  'Grocery & Dry Goods',
  8.380022495778656,
  34,
  89,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2017',
  'Daisy Butter',
  'Butter',
  'Grocery & Dry Goods',
  7.808229530885848,
  22,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2018',
  'Lucerne Creamer',
  'Creamer',
  'Grocery & Dry Goods',
  8.419890933601804,
  32,
  14,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2019',
  'Daisy Sour Cream',
  'Sour Cream',
  'Grocery & Dry Goods',
  8.02936845104691,
  25,
  9,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-2020',
  'Lucerne Creamer',
  'Creamer',
  'Grocery & Dry Goods',
  6.778783254397841,
  22,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3001',
  'Lucerne Swiss',
  'Swiss',
  'Grocery & Dry Goods',
  6.689680125070735,
  17,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3002',
  'Lucerne Cheddar',
  'Cheddar',
  'Grocery & Dry Goods',
  8.67315838116384,
  17,
  65,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3003',
  'Kraft Mozzarella',
  'Mozzarella',
  'Grocery & Dry Goods',
  8.247588220637038,
  34,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3004',
  'Sargento Swiss',
  'Swiss',
  'Grocery & Dry Goods',
  2.9722482249519557,
  29,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3005',
  'Sargento American',
  'American',
  'Grocery & Dry Goods',
  3.8398022264257783,
  24,
  23,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3006',
  'Lucerne American',
  'American',
  'Grocery & Dry Goods',
  6.849107271958673,
  34,
  56,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3007',
  'Sargento American',
  'American',
  'Grocery & Dry Goods',
  2.0899626986605004,
  22,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3008',
  'Sargento Mozzarella',
  'Mozzarella',
  'Grocery & Dry Goods',
  1.8840164792933702,
  18,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3009',
  'Lucerne Cheddar',
  'Cheddar',
  'Grocery & Dry Goods',
  8.136306421606061,
  23,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3010',
  'Lucerne Swiss',
  'Swiss',
  'Grocery & Dry Goods',
  10.325027014062204,
  27,
  94,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3011',
  'Sargento Cheddar',
  'Cheddar',
  'Grocery & Dry Goods',
  6.084373500017739,
  15,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3012',
  'Kraft Mozzarella',
  'Mozzarella',
  'Grocery & Dry Goods',
  10.687523673313027,
  35,
  20,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3013',
  'Kraft American',
  'American',
  'Grocery & Dry Goods',
  7.9436211185833425,
  25,
  39,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3014',
  'Lucerne Cheddar',
  'Cheddar',
  'Grocery & Dry Goods',
  7.364934685644537,
  29,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3015',
  'Lucerne Swiss',
  'Swiss',
  'Grocery & Dry Goods',
  8.179005065159371,
  22,
  54,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3016',
  'Kraft Swiss',
  'Swiss',
  'Grocery & Dry Goods',
  9.53275612715789,
  34,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3017',
  'Lucerne American',
  'American',
  'Grocery & Dry Goods',
  9.78358207204686,
  37,
  50,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3018',
  'Lucerne Mozzarella',
  'Mozzarella',
  'Grocery & Dry Goods',
  6.491164169653686,
  34,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3019',
  'Kraft Mozzarella',
  'Mozzarella',
  'Grocery & Dry Goods',
  8.434095093804755,
  33,
  87,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-3020',
  'Sargento American',
  'American',
  'Grocery & Dry Goods',
  9.475153837524449,
  20,
  86,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4001',
  'Digiorno Frozen Pizza',
  'Frozen Pizza',
  'Grocery & Dry Goods',
  9.105038587126131,
  37,
  64,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4002',
  'Ben & Jerry Frozen Pizza',
  'Frozen Pizza',
  'Grocery & Dry Goods',
  7.376336170452202,
  38,
  7,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4003',
  'Digiorno Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  8.820328233265656,
  15,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4004',
  'Digiorno Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  2.874231632128356,
  30,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4005',
  'Birdseye Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  9.480775674365407,
  29,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4006',
  'Birdseye Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  9.456287520962146,
  19,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4007',
  'Birdseye Frozen Pizza',
  'Frozen Pizza',
  'Grocery & Dry Goods',
  8.800457745437495,
  30,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4008',
  'Birdseye Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  3.862742403703147,
  29,
  99,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4009',
  'Digiorno Burritos',
  'Burritos',
  'Grocery & Dry Goods',
  8.135860543863881,
  28,
  19,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4010',
  'Digiorno Frozen Pizza',
  'Frozen Pizza',
  'Grocery & Dry Goods',
  2.6342043808437023,
  26,
  53,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4011',
  'Ben & Jerry Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  3.5929115959323212,
  27,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4012',
  'Birdseye Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  7.315922387362189,
  19,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4013',
  'Ben & Jerry Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  1.5659815932253354,
  36,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4014',
  'Birdseye Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  4.260080485979399,
  26,
  9,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4015',
  'Ben & Jerry Frozen Pizza',
  'Frozen Pizza',
  'Grocery & Dry Goods',
  5.40363197177867,
  32,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4016',
  'Birdseye Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  8.938050672258253,
  28,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4017',
  'Birdseye Burritos',
  'Burritos',
  'Grocery & Dry Goods',
  8.400381524345846,
  25,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4018',
  'Ben & Jerry Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  6.162297102050357,
  30,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4019',
  'Digiorno Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  8.966364324016357,
  35,
  83,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4020',
  'Ben & Jerry Frozen Veg',
  'Frozen Veg',
  'Grocery & Dry Goods',
  4.224312225527946,
  25,
  39,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4021',
  'Digiorno Frozen Pizza',
  'Frozen Pizza',
  'Grocery & Dry Goods',
  9.417370511819728,
  16,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4022',
  'Digiorno Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  8.471479228508535,
  18,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4023',
  'Ben & Jerry Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  4.164277062563947,
  29,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-4024',
  'Digiorno Ice Cream',
  'Ice Cream',
  'Grocery & Dry Goods',
  4.794380157836754,
  28,
  40,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5001',
  'Hormel Steak',
  'Steak',
  'Meat & Fresh',
  3.9062113842032478,
  24,
  94,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5002',
  'Tyson Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  2.080528305640709,
  20,
  15,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5003',
  'Tyson Chicken Breast',
  'Chicken Breast',
  'Meat & Fresh',
  4.865496832795325,
  30,
  46,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5004',
  'Hormel Chicken Breast',
  'Chicken Breast',
  'Meat & Fresh',
  2.9063500489929974,
  19,
  21,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5005',
  'Angus Ground Beef',
  'Ground Beef',
  'Meat & Fresh',
  2.422015942771657,
  31,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5006',
  'Tyson Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  2.745253402534883,
  18,
  30,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5007',
  'Angus Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  9.61668885336702,
  28,
  14,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5008',
  'Tyson Chicken Breast',
  'Chicken Breast',
  'Meat & Fresh',
  2.7987716689045374,
  29,
  99,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5009',
  'Angus Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  5.133870422279924,
  29,
  72,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5010',
  'Hormel Steak',
  'Steak',
  'Meat & Fresh',
  3.269630443795354,
  15,
  46,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5011',
  'Tyson Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  7.5125163085700555,
  23,
  78,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5012',
  'Angus Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  8.329167846602363,
  39,
  19,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5013',
  'Hormel Ground Beef',
  'Ground Beef',
  'Meat & Fresh',
  4.482149410692699,
  30,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5014',
  'Tyson Steak',
  'Steak',
  'Meat & Fresh',
  1.7978275805060164,
  16,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5015',
  'Tyson Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  9.007600185662781,
  15,
  27,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5016',
  'Hormel Ground Beef',
  'Ground Beef',
  'Meat & Fresh',
  4.913695003199338,
  20,
  42,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5017',
  'Tyson Chicken Breast',
  'Chicken Breast',
  'Meat & Fresh',
  5.547099126243599,
  24,
  10,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5018',
  'Angus Ground Beef',
  'Ground Beef',
  'Meat & Fresh',
  9.77088899191932,
  21,
  32,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5019',
  'Hormel Chicken Breast',
  'Chicken Breast',
  'Meat & Fresh',
  8.811557570488484,
  28,
  38,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5020',
  'Tyson Steak',
  'Steak',
  'Meat & Fresh',
  1.7620538259044518,
  28,
  18,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5021',
  'Angus Ground Beef',
  'Ground Beef',
  'Meat & Fresh',
  8.818929531032861,
  19,
  96,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5022',
  'Tyson Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  10.4455511315571,
  24,
  15,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5023',
  'Angus Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  5.172377472772104,
  25,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-5024',
  'Angus Pork Chops',
  'Pork Chops',
  'Meat & Fresh',
  6.175314447733175,
  23,
  96,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6001',
  'Good & Gather Guacamole',
  'Guacamole',
  'Meat & Fresh',
  2.761748472878635,
  18,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6002',
  'Good & Gather Hummus',
  'Hummus',
  'Meat & Fresh',
  7.94850271546644,
  17,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6003',
  'Good & Gather Guacamole',
  'Guacamole',
  'Meat & Fresh',
  2.7918349872987593,
  17,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6004',
  'Fresh Express Cut Fruit',
  'Cut Fruit',
  'Meat & Fresh',
  2.69239725171898,
  21,
  75,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6005',
  'Fresh Express Guacamole',
  'Guacamole',
  'Meat & Fresh',
  4.006840776810511,
  23,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6006',
  'Sabra Hummus',
  'Hummus',
  'Meat & Fresh',
  6.7627638428615935,
  23,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6007',
  'Fresh Express Bagged Salad',
  'Bagged Salad',
  'Meat & Fresh',
  10.516570413467772,
  34,
  67,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6008',
  'Sabra Hummus',
  'Hummus',
  'Meat & Fresh',
  7.0306436377665324,
  18,
  80,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6009',
  'Sabra Hummus',
  'Hummus',
  'Meat & Fresh',
  3.2657708669256738,
  20,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6010',
  'Fresh Express Bagged Salad',
  'Bagged Salad',
  'Meat & Fresh',
  3.676279960724921,
  39,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6011',
  'Fresh Express Cut Fruit',
  'Cut Fruit',
  'Meat & Fresh',
  3.117639276884997,
  25,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6012',
  'Sabra Cut Fruit',
  'Cut Fruit',
  'Meat & Fresh',
  6.104404885072578,
  35,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6013',
  'Good & Gather Bagged Salad',
  'Bagged Salad',
  'Meat & Fresh',
  1.6868400007386155,
  31,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6014',
  'Fresh Express Cut Fruit',
  'Cut Fruit',
  'Meat & Fresh',
  2.1168720665423693,
  16,
  61,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6015',
  'Fresh Express Bagged Salad',
  'Bagged Salad',
  'Meat & Fresh',
  10.899503556045058,
  31,
  33,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-6016',
  'Good & Gather Cut Fruit',
  'Cut Fruit',
  'Meat & Fresh',
  7.246065017501035,
  34,
  65,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7001',
  'Coke Lemon Lime',
  'Lemon Lime',
  'Grocery & Dry Goods',
  10.013004795237542,
  27,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7002',
  'Coke Cola',
  'Cola',
  'Grocery & Dry Goods',
  10.298158767177787,
  24,
  6,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7003',
  'Red Bull Cola',
  'Cola',
  'Grocery & Dry Goods',
  6.29369479765712,
  28,
  6,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7004',
  'Pepsi Energy Drink',
  'Energy Drink',
  'Grocery & Dry Goods',
  8.531565214663345,
  26,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7005',
  'Coke Cola',
  'Cola',
  'Grocery & Dry Goods',
  3.2464721365945284,
  27,
  94,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7006',
  'Red Bull Cola',
  'Cola',
  'Grocery & Dry Goods',
  8.635154344912195,
  34,
  62,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7007',
  'Red Bull Lemon Lime',
  'Lemon Lime',
  'Grocery & Dry Goods',
  1.2897980706933545,
  15,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7008',
  'Pepsi Energy Drink',
  'Energy Drink',
  'Grocery & Dry Goods',
  9.613043487769502,
  21,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7009',
  'Red Bull Seltzer',
  'Seltzer',
  'Grocery & Dry Goods',
  6.0836299114772725,
  35,
  30,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7010',
  'Coke Cola',
  'Cola',
  'Grocery & Dry Goods',
  5.546484609525921,
  35,
  7,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7011',
  'Red Bull Energy Drink',
  'Energy Drink',
  'Grocery & Dry Goods',
  10.965645890651995,
  38,
  10,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7012',
  'Coke Cola',
  'Cola',
  'Grocery & Dry Goods',
  10.535142139425012,
  16,
  10,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7013',
  'Coke Cola',
  'Cola',
  'Grocery & Dry Goods',
  7.657928824632863,
  21,
  83,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7014',
  'Pepsi Lemon Lime',
  'Lemon Lime',
  'Grocery & Dry Goods',
  1.6406558719973843,
  27,
  6,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7015',
  'Coke Energy Drink',
  'Energy Drink',
  'Grocery & Dry Goods',
  9.046349063039626,
  32,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7016',
  'Pepsi Cola',
  'Cola',
  'Grocery & Dry Goods',
  2.273392994089222,
  22,
  69,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7017',
  'Red Bull Cola',
  'Cola',
  'Grocery & Dry Goods',
  1.8443393230530094,
  37,
  40,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7018',
  'Pepsi Cola',
  'Cola',
  'Grocery & Dry Goods',
  2.5410110142831313,
  38,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7019',
  'Red Bull Cola',
  'Cola',
  'Grocery & Dry Goods',
  8.330691561573197,
  15,
  24,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7020',
  'Red Bull Cola',
  'Cola',
  'Grocery & Dry Goods',
  5.717472802423548,
  16,
  62,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7021',
  'Coke Energy Drink',
  'Energy Drink',
  'Grocery & Dry Goods',
  2.286468537085139,
  15,
  37,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7022',
  'Coke Lemon Lime',
  'Lemon Lime',
  'Grocery & Dry Goods',
  4.21346621703711,
  38,
  43,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7023',
  'Coke Cola',
  'Cola',
  'Grocery & Dry Goods',
  6.739679137786757,
  38,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-7024',
  'Pepsi Energy Drink',
  'Energy Drink',
  'Grocery & Dry Goods',
  3.609903723660272,
  22,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8001',
  'Tropicana Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  10.588474221388076,
  28,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8002',
  'Gatorade Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  7.35505888030689,
  38,
  59,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8003',
  'Gatorade Snapple',
  'Snapple',
  'Grocery & Dry Goods',
  8.459835549078186,
  26,
  53,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8004',
  'Snapple Orange Juice',
  'Orange Juice',
  'Grocery & Dry Goods',
  2.785315013102977,
  24,
  69,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8005',
  'Gatorade Snapple',
  'Snapple',
  'Grocery & Dry Goods',
  6.583642151910775,
  25,
  21,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8006',
  'Gatorade Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  2.808103458448649,
  38,
  47,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8007',
  'Gatorade Gatorade',
  'Gatorade',
  'Grocery & Dry Goods',
  8.039923581089173,
  23,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8008',
  'Gatorade Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  8.931486689756113,
  30,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8009',
  'Snapple Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  1.7513097492260745,
  18,
  84,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8010',
  'Tropicana Orange Juice',
  'Orange Juice',
  'Grocery & Dry Goods',
  10.979914319006602,
  27,
  33,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8011',
  'Snapple Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  8.552824120565905,
  20,
  15,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8012',
  'Gatorade Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  7.989496255908774,
  38,
  10,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8013',
  'Snapple Orange Juice',
  'Orange Juice',
  'Grocery & Dry Goods',
  4.844239418038377,
  31,
  64,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8014',
  'Gatorade Orange Juice',
  'Orange Juice',
  'Grocery & Dry Goods',
  9.351928995623483,
  36,
  61,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8015',
  'Tropicana Gatorade',
  'Gatorade',
  'Grocery & Dry Goods',
  7.791438452030942,
  27,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8016',
  'Tropicana Gatorade',
  'Gatorade',
  'Grocery & Dry Goods',
  10.834054057816509,
  35,
  50,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8017',
  'Gatorade Apple Juice',
  'Apple Juice',
  'Grocery & Dry Goods',
  8.096675603674274,
  27,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8018',
  'Gatorade Gatorade',
  'Gatorade',
  'Grocery & Dry Goods',
  10.618167684424881,
  28,
  32,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8019',
  'Tropicana Orange Juice',
  'Orange Juice',
  'Grocery & Dry Goods',
  10.208243065245878,
  27,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-8020',
  'Tropicana Gatorade',
  'Gatorade',
  'Grocery & Dry Goods',
  6.655432907613493,
  17,
  19,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9001',
  'Barilla Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  3.84270645220577,
  15,
  99,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9002',
  'Barilla Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  10.252984377646271,
  32,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9003',
  'Prego Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  6.2182325704484045,
  29,
  49,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9004',
  'Barilla Oil',
  'Oil',
  'Grocery & Dry Goods',
  3.8496546230994624,
  25,
  16,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9005',
  'Prego Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  3.5951259139871063,
  24,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9006',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  3.7003333366717497,
  17,
  69,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9007',
  'Prego Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  8.587116130702363,
  17,
  23,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9008',
  'Barilla Cereal',
  'Cereal',
  'Grocery & Dry Goods',
  8.177875002077975,
  19,
  7,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9009',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  7.685442582667163,
  34,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9010',
  'Prego Oil',
  'Oil',
  'Grocery & Dry Goods',
  9.866734617392499,
  15,
  66,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9011',
  'Prego Rice',
  'Rice',
  'Grocery & Dry Goods',
  7.566271030374036,
  29,
  67,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9012',
  'Kellogg Cereal',
  'Cereal',
  'Grocery & Dry Goods',
  1.1343946608777657,
  26,
  7,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9013',
  'Prego Cereal',
  'Cereal',
  'Grocery & Dry Goods',
  8.546243995727455,
  39,
  9,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9014',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  7.622426176497809,
  35,
  94,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9015',
  'Prego Rice',
  'Rice',
  'Grocery & Dry Goods',
  9.141265034885283,
  28,
  9,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9016',
  'Prego Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  1.791460983624448,
  19,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9017',
  'Barilla Pasta',
  'Pasta',
  'Grocery & Dry Goods',
  3.215928705442922,
  26,
  91,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9018',
  'Prego Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  5.638725934138563,
  23,
  76,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9019',
  'Prego Cereal',
  'Cereal',
  'Grocery & Dry Goods',
  6.572568606355903,
  21,
  25,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9020',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  8.478763159842083,
  39,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9021',
  'Kellogg Pasta',
  'Pasta',
  'Grocery & Dry Goods',
  5.3292030606959635,
  25,
  55,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9022',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  4.875856377106384,
  37,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9023',
  'Kellogg Oil',
  'Oil',
  'Grocery & Dry Goods',
  4.938133926170055,
  28,
  76,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9024',
  'Barilla Oil',
  'Oil',
  'Grocery & Dry Goods',
  6.669898028071518,
  27,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9025',
  'Barilla Pasta',
  'Pasta',
  'Grocery & Dry Goods',
  2.7757185878054504,
  31,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9026',
  'Kellogg Oil',
  'Oil',
  'Grocery & Dry Goods',
  6.53776258600452,
  19,
  33,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9027',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  6.388721073985434,
  37,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9028',
  'Kellogg Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  1.9605610803039522,
  34,
  37,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9029',
  'Prego Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  9.192687379814018,
  17,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9030',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  8.269080515096917,
  33,
  77,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9031',
  'Prego Rice',
  'Rice',
  'Grocery & Dry Goods',
  4.946253445911545,
  20,
  99,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9032',
  'Kellogg Pasta Sauce',
  'Pasta Sauce',
  'Grocery & Dry Goods',
  7.590075501261438,
  31,
  34,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9033',
  'Prego Oil',
  'Oil',
  'Grocery & Dry Goods',
  2.503484687108265,
  20,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9034',
  'Kellogg Cereal',
  'Cereal',
  'Grocery & Dry Goods',
  10.637374632608552,
  19,
  38,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9035',
  'Prego Rice',
  'Rice',
  'Grocery & Dry Goods',
  9.593488556186799,
  37,
  29,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9036',
  'Barilla Rice',
  'Rice',
  'Grocery & Dry Goods',
  7.994015993090541,
  24,
  82,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9037',
  'Prego Rice',
  'Rice',
  'Grocery & Dry Goods',
  9.78940727875422,
  22,
  28,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9038',
  'Prego Rice',
  'Rice',
  'Grocery & Dry Goods',
  4.01989840326073,
  28,
  32,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9039',
  'Barilla Pasta',
  'Pasta',
  'Grocery & Dry Goods',
  6.702439167187259,
  39,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-9040',
  'Prego Oil',
  'Oil',
  'Grocery & Dry Goods',
  3.3278959644476127,
  28,
  14,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10001',
  'Goya Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  3.2119898510155744,
  20,
  24,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10002',
  'Jif Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  9.301043324277416,
  23,
  13,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10003',
  'Goya Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  10.209854867159903,
  26,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10004',
  'Jif Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  3.999576301634246,
  38,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10005',
  'Goya Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  9.72287285199073,
  20,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10006',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  7.026284636763018,
  33,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10007',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  4.802028209782174,
  31,
  4,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10008',
  'Campbell Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  2.2540329924285176,
  17,
  91,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10009',
  'Campbell Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  9.029242301415394,
  38,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10010',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  8.306093858597908,
  28,
  49,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10011',
  'Campbell Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  7.061021376195123,
  35,
  52,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10012',
  'Goya Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  4.7130366993546,
  36,
  18,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10013',
  'Goya Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  7.02942607142297,
  25,
  66,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10014',
  'Goya Canned Beans',
  'Canned Beans',
  'Grocery & Dry Goods',
  5.870986119527442,
  37,
  40,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10015',
  'Campbell Canned Beans',
  'Canned Beans',
  'Grocery & Dry Goods',
  4.9527390358594605,
  25,
  96,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10016',
  'Jif Canned Beans',
  'Canned Beans',
  'Grocery & Dry Goods',
  1.1907387682967765,
  33,
  9,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10017',
  'Jif Canned Beans',
  'Canned Beans',
  'Grocery & Dry Goods',
  6.99705910633598,
  23,
  6,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10018',
  'Jif Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  5.405922606480363,
  27,
  12,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10019',
  'Goya Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  9.066008119856189,
  20,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10020',
  'Jif Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  4.013771097490958,
  17,
  11,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10021',
  'Campbell Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  3.4800520138500293,
  24,
  7,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10022',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  2.4979061420522655,
  33,
  25,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10023',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  8.912186474284601,
  32,
  38,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10024',
  'Campbell Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  3.4192839877591554,
  18,
  50,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10025',
  'Goya Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  4.385007293089089,
  21,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10026',
  'Jif Canned Beans',
  'Canned Beans',
  'Grocery & Dry Goods',
  8.359765239552543,
  33,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10027',
  'Goya Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  2.372428582905152,
  29,
  7,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10028',
  'Jif Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  8.935946482578284,
  24,
  3,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10029',
  'Goya Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  5.061080669633954,
  29,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10030',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  2.574082926275304,
  37,
  62,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10031',
  'Jif Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  2.489584241125703,
  37,
  83,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10032',
  'Goya Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  6.024751892440282,
  20,
  1,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10033',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  6.1330461775650775,
  16,
  87,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10034',
  'Campbell Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  5.9751554293945315,
  20,
  55,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10035',
  'Campbell Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  2.1156737578499976,
  15,
  2,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10036',
  'Campbell Canned Beans',
  'Canned Beans',
  'Grocery & Dry Goods',
  10.863258136472004,
  36,
  49,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10037',
  'Jif Condiments',
  'Condiments',
  'Grocery & Dry Goods',
  8.902519260612875,
  30,
  0,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10038',
  'Goya Canned Soup',
  'Canned Soup',
  'Grocery & Dry Goods',
  1.4430436468998233,
  15,
  77,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10039',
  'Campbell Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  4.009857796079527,
  21,
  8,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'GROC-10040',
  'Goya Peanut Butter',
  'Peanut Butter',
  'Grocery & Dry Goods',
  3.1133509641984216,
  38,
  5,
  20,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20001',
  'Heineken Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  7.187839957162728,
  35,
  3,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20002',
  'Blue Moon IPA',
  'IPA',
  'Alcohol - Beer',
  8.724398649181195,
  39,
  49,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20003',
  'Lagunitas Pilsner',
  'Pilsner',
  'Alcohol - Beer',
  10.89006969888581,
  47,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20004',
  'Lagunitas Lager',
  'Lager',
  'Alcohol - Beer',
  9.305947459522805,
  35,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20005',
  'White Claw IPA',
  'IPA',
  'Alcohol - Beer',
  7.062070303057332,
  22,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20006',
  'Bud Light Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  10.855471863142421,
  29,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20007',
  'Corona Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  5.442432532294793,
  36,
  30,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20008',
  'Sierra Nevada Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  5.718771479181635,
  49,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20009',
  'Blue Moon Lager',
  'Lager',
  'Alcohol - Beer',
  5.051772352911937,
  24,
  25,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20010',
  'Modelo Pilsner',
  'Pilsner',
  'Alcohol - Beer',
  9.595637508378946,
  24,
  57,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20011',
  'Lagunitas IPA',
  'IPA',
  'Alcohol - Beer',
  7.2957638128217965,
  45,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20012',
  'Bud Light Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  5.580709782093799,
  29,
  5,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20013',
  'Corona Lager',
  'Lager',
  'Alcohol - Beer',
  5.505104228623193,
  20,
  41,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20014',
  'Heineken Lager',
  'Lager',
  'Alcohol - Beer',
  11.89349375877557,
  34,
  51,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20015',
  'Stella Artois IPA',
  'IPA',
  'Alcohol - Beer',
  10.89540809862351,
  32,
  23,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20016',
  'Modelo Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  8.320453750898489,
  40,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20017',
  'Corona Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  8.1018486162811,
  36,
  22,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20018',
  'Corona Pilsner',
  'Pilsner',
  'Alcohol - Beer',
  9.628877938935432,
  45,
  56,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20019',
  'Stella Artois Stout',
  'Stout',
  'Alcohol - Beer',
  5.295470258550098,
  28,
  37,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20020',
  'Corona Stout',
  'Stout',
  'Alcohol - Beer',
  5.846179089534268,
  31,
  19,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20021',
  'Modelo Wheat',
  'Wheat',
  'Alcohol - Beer',
  10.088695131198131,
  45,
  41,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20022',
  'Corona Stout',
  'Stout',
  'Alcohol - Beer',
  7.400823243137141,
  49,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20023',
  'Lagunitas Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  11.095807080649239,
  25,
  9,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20024',
  'Bud Light Stout',
  'Stout',
  'Alcohol - Beer',
  10.469538911253034,
  46,
  25,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20025',
  'Blue Moon Stout',
  'Stout',
  'Alcohol - Beer',
  5.6974166940798705,
  48,
  3,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20026',
  'White Claw Wheat',
  'Wheat',
  'Alcohol - Beer',
  7.316086615035797,
  25,
  59,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20027',
  'Stella Artois Stout',
  'Stout',
  'Alcohol - Beer',
  10.672648555450015,
  46,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20028',
  'Stella Artois Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  8.495465796251324,
  40,
  45,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20029',
  'Lagunitas IPA',
  'IPA',
  'Alcohol - Beer',
  7.565188909960509,
  34,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20030',
  'Bud Light Pilsner',
  'Pilsner',
  'Alcohol - Beer',
  10.943694286180218,
  49,
  40,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20031',
  'Heineken Stout',
  'Stout',
  'Alcohol - Beer',
  10.305107407070421,
  26,
  36,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20032',
  'Bud Light Pilsner',
  'Pilsner',
  'Alcohol - Beer',
  8.637784445796244,
  37,
  53,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20033',
  'Modelo Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  11.12976895617166,
  40,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20034',
  'Stella Artois Stout',
  'Stout',
  'Alcohol - Beer',
  8.385701320358,
  33,
  15,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20035',
  'Coors IPA',
  'IPA',
  'Alcohol - Beer',
  5.591243201582359,
  24,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20036',
  'Modelo IPA',
  'IPA',
  'Alcohol - Beer',
  8.499336942783382,
  24,
  44,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20037',
  'Heineken Lager',
  'Lager',
  'Alcohol - Beer',
  8.731371867311447,
  42,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20038',
  'Corona Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  6.235035148794797,
  45,
  59,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20039',
  'Bud Light Wheat',
  'Wheat',
  'Alcohol - Beer',
  5.330137982964416,
  45,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20040',
  'Bud Light Wheat',
  'Wheat',
  'Alcohol - Beer',
  9.407944936401657,
  35,
  42,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20041',
  'Lagunitas Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  10.721177535705023,
  49,
  5,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20042',
  'Blue Moon Wheat',
  'Wheat',
  'Alcohol - Beer',
  10.737761148740043,
  38,
  12,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20043',
  'Blue Moon Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  11.429609090793834,
  34,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20044',
  'Corona Wheat',
  'Wheat',
  'Alcohol - Beer',
  5.337959451634633,
  45,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20045',
  'Sierra Nevada Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  10.21786689113087,
  34,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20046',
  'Coors Pilsner',
  'Pilsner',
  'Alcohol - Beer',
  11.656158288789394,
  30,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20047',
  'Modelo Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  6.732529429896867,
  31,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20048',
  'Coors Pale Ale',
  'Pale Ale',
  'Alcohol - Beer',
  8.17671373105601,
  34,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20049',
  'White Claw Stout',
  'Stout',
  'Alcohol - Beer',
  10.02546457005021,
  35,
  43,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20050',
  'White Claw Wheat',
  'Wheat',
  'Alcohol - Beer',
  6.151497783589585,
  24,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20051',
  'Stella Artois Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  11.9894212664367,
  41,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20052',
  'Stella Artois Lager',
  'Lager',
  'Alcohol - Beer',
  10.215911679624009,
  29,
  30,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20053',
  'Coors Lager',
  'Lager',
  'Alcohol - Beer',
  6.6916494713720605,
  42,
  41,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20054',
  'Corona Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  8.419687542624159,
  29,
  47,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20055',
  'White Claw Seltzer',
  'Seltzer',
  'Alcohol - Beer',
  5.031645389973758,
  46,
  33,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20056',
  'Coors Stout',
  'Stout',
  'Alcohol - Beer',
  7.167419949640854,
  45,
  42,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20057',
  'White Claw IPA',
  'IPA',
  'Alcohol - Beer',
  6.018722571266833,
  31,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20058',
  'Modelo Wheat',
  'Wheat',
  'Alcohol - Beer',
  6.074798545378952,
  41,
  13,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20059',
  'Stella Artois IPA',
  'IPA',
  'Alcohol - Beer',
  9.197136640057032,
  25,
  41,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-20060',
  'Bud Light Stout',
  'Stout',
  'Alcohol - Beer',
  10.527900460603787,
  42,
  35,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30001',
  'Patron Gin',
  'Gin',
  'Alcohol - Liquor',
  12.808958378757447,
  42,
  3,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30002',
  'Hendricks Vodka',
  'Vodka',
  'Alcohol - Liquor',
  25.23437997643804,
  38,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30003',
  'Johnnie Walker Gin',
  'Gin',
  'Alcohol - Liquor',
  11.875161041517545,
  24,
  37,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30004',
  'Crown Royal Scotch',
  'Scotch',
  'Alcohol - Liquor',
  22.500191800231693,
  35,
  21,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30005',
  'Jose Cuervo Rum',
  'Rum',
  'Alcohol - Liquor',
  38.139016178409506,
  38,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30006',
  'Hendricks Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  18.002257289829934,
  36,
  11,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30007',
  'Jack Daniels Tequila',
  'Tequila',
  'Alcohol - Liquor',
  34.90949301093815,
  21,
  46,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30008',
  'Absolut Brandy',
  'Brandy',
  'Alcohol - Liquor',
  21.2165618546357,
  48,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30009',
  'Patron Vodka',
  'Vodka',
  'Alcohol - Liquor',
  30.182898438414703,
  35,
  9,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30010',
  'Crown Royal Brandy',
  'Brandy',
  'Alcohol - Liquor',
  28.31201612089919,
  43,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30011',
  'Jose Cuervo Cognac',
  'Cognac',
  'Alcohol - Liquor',
  27.80954356127926,
  28,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30012',
  'Jameson Brandy',
  'Brandy',
  'Alcohol - Liquor',
  9.45567771749703,
  48,
  21,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30013',
  'Hendricks Tequila',
  'Tequila',
  'Alcohol - Liquor',
  16.006066359735474,
  26,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30014',
  'Johnnie Walker Vodka',
  'Vodka',
  'Alcohol - Liquor',
  9.041208457741263,
  48,
  38,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30015',
  'Johnnie Walker Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  14.494062055275032,
  24,
  13,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30016',
  'Bacardi Tequila',
  'Tequila',
  'Alcohol - Liquor',
  30.06208184230829,
  34,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30017',
  'Grey Goose Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  29.808339947102287,
  21,
  39,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30018',
  'Crown Royal Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  23.31912585787068,
  30,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30019',
  'Jack Daniels Scotch',
  'Scotch',
  'Alcohol - Liquor',
  16.756674784498596,
  49,
  54,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30020',
  'Crown Royal Gin',
  'Gin',
  'Alcohol - Liquor',
  27.724077271575506,
  31,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30021',
  'Jack Daniels Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  12.907972025597626,
  44,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30022',
  'Jack Daniels Brandy',
  'Brandy',
  'Alcohol - Liquor',
  36.01871480395243,
  26,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30023',
  'Johnnie Walker Scotch',
  'Scotch',
  'Alcohol - Liquor',
  36.442374729404264,
  36,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30024',
  'Johnnie Walker Cognac',
  'Cognac',
  'Alcohol - Liquor',
  29.534450966023943,
  20,
  28,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30025',
  'Maker''s Mark Vodka',
  'Vodka',
  'Alcohol - Liquor',
  31.775066006337475,
  23,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30026',
  'Crown Royal Vodka',
  'Vodka',
  'Alcohol - Liquor',
  38.65306825361908,
  37,
  34,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30027',
  'Absolut Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  28.35728298735002,
  34,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30028',
  'Hennessy Gin',
  'Gin',
  'Alcohol - Liquor',
  30.139264389530737,
  37,
  13,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30029',
  'Jose Cuervo Gin',
  'Gin',
  'Alcohol - Liquor',
  10.554517053192182,
  32,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30030',
  'Jack Daniels Scotch',
  'Scotch',
  'Alcohol - Liquor',
  12.171512747038445,
  30,
  22,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30031',
  'Jack Daniels Gin',
  'Gin',
  'Alcohol - Liquor',
  14.02804259805578,
  48,
  11,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30032',
  'Jack Daniels Cognac',
  'Cognac',
  'Alcohol - Liquor',
  35.21870448213713,
  45,
  32,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30033',
  'Jose Cuervo Vodka',
  'Vodka',
  'Alcohol - Liquor',
  22.911115867837296,
  26,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30034',
  'Hennessy Cognac',
  'Cognac',
  'Alcohol - Liquor',
  37.35922022194867,
  44,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30035',
  'Jack Daniels Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  14.048752841532119,
  46,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30036',
  'Captain Morgan Brandy',
  'Brandy',
  'Alcohol - Liquor',
  13.50270663978798,
  33,
  9,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30037',
  'Crown Royal Vodka',
  'Vodka',
  'Alcohol - Liquor',
  33.7364077371308,
  44,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30038',
  'Don Julio Rum',
  'Rum',
  'Alcohol - Liquor',
  26.719639346070434,
  20,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30039',
  'Don Julio Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  35.37806418891691,
  32,
  45,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30040',
  'Grey Goose Gin',
  'Gin',
  'Alcohol - Liquor',
  15.965184227415062,
  22,
  11,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30041',
  'Maker''s Mark Cognac',
  'Cognac',
  'Alcohol - Liquor',
  18.140346921548375,
  33,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30042',
  'Jose Cuervo Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  22.951108125479283,
  39,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30043',
  'Maker''s Mark Vodka',
  'Vodka',
  'Alcohol - Liquor',
  27.495774328371603,
  22,
  11,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30044',
  'Jack Daniels Cognac',
  'Cognac',
  'Alcohol - Liquor',
  9.071978256534416,
  46,
  9,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30045',
  'Hendricks Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  28.303099920735672,
  23,
  9,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30046',
  'Bacardi Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  37.03785601291758,
  28,
  21,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30047',
  'Hendricks Vodka',
  'Vodka',
  'Alcohol - Liquor',
  21.763503742736564,
  42,
  15,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30048',
  'Jose Cuervo Cognac',
  'Cognac',
  'Alcohol - Liquor',
  30.384299473411268,
  41,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30049',
  'Crown Royal Cognac',
  'Cognac',
  'Alcohol - Liquor',
  16.031856799665192,
  29,
  46,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30050',
  'Johnnie Walker Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  13.319218614595416,
  37,
  50,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30051',
  'Hennessy Cognac',
  'Cognac',
  'Alcohol - Liquor',
  23.22093658566388,
  21,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30052',
  'Absolut Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  19.887189878189847,
  34,
  9,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30053',
  'Captain Morgan Tequila',
  'Tequila',
  'Alcohol - Liquor',
  20.071475678486692,
  36,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30054',
  'Bacardi Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  36.8242006768196,
  36,
  32,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30055',
  'Jose Cuervo Cognac',
  'Cognac',
  'Alcohol - Liquor',
  15.952471781989436,
  48,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30056',
  'Jameson Brandy',
  'Brandy',
  'Alcohol - Liquor',
  31.928878699244407,
  37,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30057',
  'Grey Goose Scotch',
  'Scotch',
  'Alcohol - Liquor',
  21.976911096765264,
  49,
  13,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30058',
  'Don Julio Scotch',
  'Scotch',
  'Alcohol - Liquor',
  22.52080083724499,
  38,
  53,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30059',
  'Absolut Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  24.922211993457477,
  38,
  29,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30060',
  'Don Julio Cognac',
  'Cognac',
  'Alcohol - Liquor',
  11.262429913746285,
  43,
  3,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30061',
  'Crown Royal Scotch',
  'Scotch',
  'Alcohol - Liquor',
  18.70735101574884,
  21,
  11,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30062',
  'Bacardi Tequila',
  'Tequila',
  'Alcohol - Liquor',
  28.807463000655186,
  24,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30063',
  'Jose Cuervo Scotch',
  'Scotch',
  'Alcohol - Liquor',
  36.89873324464101,
  26,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30064',
  'Jameson Cognac',
  'Cognac',
  'Alcohol - Liquor',
  31.32886224354678,
  26,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30065',
  'Jameson Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  14.908416815958036,
  24,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30066',
  'Maker''s Mark Rum',
  'Rum',
  'Alcohol - Liquor',
  17.44099957936255,
  46,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30067',
  'Bacardi Bourbon',
  'Bourbon',
  'Alcohol - Liquor',
  35.35780927994226,
  48,
  57,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30068',
  'Hendricks Brandy',
  'Brandy',
  'Alcohol - Liquor',
  9.430933120882262,
  41,
  26,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30069',
  'Jose Cuervo Scotch',
  'Scotch',
  'Alcohol - Liquor',
  27.32080133938792,
  44,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30070',
  'Don Julio Cognac',
  'Cognac',
  'Alcohol - Liquor',
  18.379431423433513,
  30,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30071',
  'Don Julio Brandy',
  'Brandy',
  'Alcohol - Liquor',
  32.570980122983165,
  22,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30072',
  'Captain Morgan Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  23.42050848312733,
  25,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30073',
  'Grey Goose Cognac',
  'Cognac',
  'Alcohol - Liquor',
  16.930178174748146,
  25,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30074',
  'Absolut Tequila',
  'Tequila',
  'Alcohol - Liquor',
  24.910292690740405,
  45,
  46,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30075',
  'Patron Vodka',
  'Vodka',
  'Alcohol - Liquor',
  35.504759467137866,
  41,
  27,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30076',
  'Absolut Whiskey',
  'Whiskey',
  'Alcohol - Liquor',
  37.7078742963768,
  29,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30077',
  'Bacardi Vodka',
  'Vodka',
  'Alcohol - Liquor',
  38.39217060630204,
  36,
  25,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30078',
  'Johnnie Walker Vodka',
  'Vodka',
  'Alcohol - Liquor',
  30.15558748956623,
  43,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30079',
  'Bacardi Brandy',
  'Brandy',
  'Alcohol - Liquor',
  24.021773841818373,
  28,
  43,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-30080',
  'Hennessy Scotch',
  'Scotch',
  'Alcohol - Liquor',
  29.702530326042115,
  22,
  48,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40001',
  'La Crema Rosé',
  'Rosé',
  'Alcohol - Wine',
  17.18185816377748,
  26,
  40,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40002',
  'Robert Mondavi Riesling',
  'Riesling',
  'Alcohol - Wine',
  20.022498276584983,
  35,
  33,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40003',
  'Kendall-Jackson Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  9.033421777149917,
  39,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40004',
  'Apothic Pinot Grigio',
  'Pinot Grigio',
  'Alcohol - Wine',
  6.944552538418038,
  42,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40005',
  'Kendall-Jackson Chardonnay',
  'Chardonnay',
  'Alcohol - Wine',
  20.843074932936336,
  43,
  20,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40006',
  'Apothic Sauvignon Blanc',
  'Sauvignon Blanc',
  'Alcohol - Wine',
  11.540819545190116,
  25,
  56,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40007',
  'Barefoot Moscato',
  'Moscato',
  'Alcohol - Wine',
  21.098455716249546,
  39,
  22,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40008',
  'Kendall-Jackson Pinot Grigio',
  'Pinot Grigio',
  'Alcohol - Wine',
  20.826053518169747,
  46,
  43,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40009',
  'Josh Cellars Chardonnay',
  'Chardonnay',
  'Alcohol - Wine',
  21.061388441438275,
  29,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40010',
  'Kendall-Jackson Moscato',
  'Moscato',
  'Alcohol - Wine',
  4.886849499846389,
  47,
  29,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40011',
  'Meiomi Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  5.292887972958634,
  23,
  37,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40012',
  'Meiomi Rosé',
  'Rosé',
  'Alcohol - Wine',
  19.975367089106175,
  29,
  43,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40013',
  'La Crema Moscato',
  'Moscato',
  'Alcohol - Wine',
  20.4499728689356,
  24,
  58,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40014',
  'Robert Mondavi Sauvignon Blanc',
  'Sauvignon Blanc',
  'Alcohol - Wine',
  21.247537375787452,
  31,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40015',
  'La Crema Chardonnay',
  'Chardonnay',
  'Alcohol - Wine',
  6.85124153560015,
  27,
  54,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40016',
  'Kim Crawford Malbec',
  'Malbec',
  'Alcohol - Wine',
  4.463943768957552,
  41,
  17,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40017',
  'Yellow Tail Malbec',
  'Malbec',
  'Alcohol - Wine',
  12.510843028335584,
  48,
  3,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40018',
  'Barefoot Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  11.60710515078503,
  45,
  28,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40019',
  'Josh Cellars Riesling',
  'Riesling',
  'Alcohol - Wine',
  10.43084358956904,
  39,
  20,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40020',
  'La Crema Moscato',
  'Moscato',
  'Alcohol - Wine',
  21.864426112652318,
  21,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40021',
  'Josh Cellars Cabernet',
  'Cabernet',
  'Alcohol - Wine',
  12.78972141089164,
  39,
  21,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40022',
  'Apothic Cabernet',
  'Cabernet',
  'Alcohol - Wine',
  18.71621390805369,
  20,
  45,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40023',
  'La Crema Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  14.980995030770865,
  42,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40024',
  'Yellow Tail Merlot',
  'Merlot',
  'Alcohol - Wine',
  12.616060140379448,
  44,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40025',
  'Josh Cellars Moscato',
  'Moscato',
  'Alcohol - Wine',
  14.448341061273249,
  43,
  48,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40026',
  'Yellow Tail Riesling',
  'Riesling',
  'Alcohol - Wine',
  13.67727697542422,
  28,
  29,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40027',
  'Meiomi Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  6.332651934700398,
  49,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40028',
  'La Crema Merlot',
  'Merlot',
  'Alcohol - Wine',
  19.19589331715533,
  32,
  37,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40029',
  'Kim Crawford Merlot',
  'Merlot',
  'Alcohol - Wine',
  17.831150677452317,
  35,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40030',
  'Robert Mondavi Riesling',
  'Riesling',
  'Alcohol - Wine',
  5.816731153199576,
  41,
  37,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40031',
  'Mark West Pinot Grigio',
  'Pinot Grigio',
  'Alcohol - Wine',
  15.913199489977668,
  23,
  21,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40032',
  'Barefoot Moscato',
  'Moscato',
  'Alcohol - Wine',
  8.716095199393813,
  38,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40033',
  'Yellow Tail Moscato',
  'Moscato',
  'Alcohol - Wine',
  21.951220539589308,
  40,
  11,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40034',
  'Josh Cellars Moscato',
  'Moscato',
  'Alcohol - Wine',
  17.433674216448427,
  42,
  4,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40035',
  'Josh Cellars Moscato',
  'Moscato',
  'Alcohol - Wine',
  8.042781013788117,
  33,
  37,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40036',
  'Yellow Tail Moscato',
  'Moscato',
  'Alcohol - Wine',
  6.836323382352239,
  42,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40037',
  'Josh Cellars Moscato',
  'Moscato',
  'Alcohol - Wine',
  20.900229629821613,
  45,
  14,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40038',
  'Yellow Tail Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  5.727825919127445,
  21,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40039',
  'Mark West Pinot Grigio',
  'Pinot Grigio',
  'Alcohol - Wine',
  9.571570723447005,
  31,
  54,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40040',
  'Barefoot Riesling',
  'Riesling',
  'Alcohol - Wine',
  6.700817943613719,
  24,
  7,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40041',
  'Josh Cellars Pinot Grigio',
  'Pinot Grigio',
  'Alcohol - Wine',
  19.438440540253477,
  20,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40042',
  'Barefoot Chardonnay',
  'Chardonnay',
  'Alcohol - Wine',
  15.947099156909953,
  36,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40043',
  'Yellow Tail Pinot Noir',
  'Pinot Noir',
  'Alcohol - Wine',
  9.841806612517276,
  23,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40044',
  'Meiomi Malbec',
  'Malbec',
  'Alcohol - Wine',
  8.30187703659986,
  21,
  46,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40045',
  'Kendall-Jackson Sauvignon Blanc',
  'Sauvignon Blanc',
  'Alcohol - Wine',
  5.747630210079113,
  48,
  53,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40046',
  'Barefoot Rosé',
  'Rosé',
  'Alcohol - Wine',
  18.164263330342987,
  48,
  10,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40047',
  'Apothic Riesling',
  'Riesling',
  'Alcohol - Wine',
  14.629631930580013,
  37,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40048',
  'Mark West Rosé',
  'Rosé',
  'Alcohol - Wine',
  15.068673405173778,
  34,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40049',
  'Yellow Tail Riesling',
  'Riesling',
  'Alcohol - Wine',
  9.783442702027072,
  35,
  5,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40050',
  'Apothic Moscato',
  'Moscato',
  'Alcohol - Wine',
  10.349760264549044,
  35,
  18,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40051',
  'Yellow Tail Cabernet',
  'Cabernet',
  'Alcohol - Wine',
  5.219804201569047,
  41,
  2,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40052',
  'Kim Crawford Merlot',
  'Merlot',
  'Alcohol - Wine',
  8.618152750956446,
  39,
  18,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40053',
  'Kendall-Jackson Riesling',
  'Riesling',
  'Alcohol - Wine',
  16.86960848615028,
  44,
  12,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40054',
  'Mark West Rosé',
  'Rosé',
  'Alcohol - Wine',
  17.50635045472459,
  42,
  0,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40055',
  'Josh Cellars Pinot Grigio',
  'Pinot Grigio',
  'Alcohol - Wine',
  6.895419827609454,
  22,
  1,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40056',
  'Barefoot Sauvignon Blanc',
  'Sauvignon Blanc',
  'Alcohol - Wine',
  20.88658769749621,
  22,
  5,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40057',
  'Barefoot Moscato',
  'Moscato',
  'Alcohol - Wine',
  16.938496184004208,
  24,
  47,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40058',
  'Kim Crawford Moscato',
  'Moscato',
  'Alcohol - Wine',
  13.409729646073414,
  49,
  27,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40059',
  'Robert Mondavi Moscato',
  'Moscato',
  'Alcohol - Wine',
  18.56855659425363,
  41,
  6,
  10,
  '00000000-0000-0000-0000-000000000003'
);
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'ALC-40060',
  'Kendall-Jackson Sauvignon Blanc',
  'Sauvignon Blanc',
  'Alcohol - Wine',
  8.147161537903001,
  26,
  8,
  10,
  '00000000-0000-0000-0000-000000000003'
);
-- mock sales
INSERT INTO sales (store_id, sku, item_name, qty_sold, sale_price, total, department) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-TEST', 'Test Item', 2, 5.00, 10.00, 'Grocery');
-- shrink log
INSERT INTO shrink_log (store_id, sku, item_name, qty, reason, department, logged_by) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-001', 'Marlboro Red', 1, 'Damaged', 'Tobacco', '00000000-0000-0000-0000-000000000002');
-- purchase orders
INSERT INTO purchase_orders (store_id, supplier_id, status, total_value, items) VALUES ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000003', 'pending', 500.00, '[]');
-- deli freshness
INSERT INTO deli_freshness (store_id, item_name, slot, batch, cooked_at, expires_at, volume, health_status, action) VALUES ('00000000-0000-0000-0000-000000000001', 'Fried Chicken', 'Hot Case A', 'B-123', NOW(), NOW() + interval '4 hours', 10, 'Healthy', 'Monitor');
-- trade posts and proposals
INSERT INTO trade_posts (id, store_id, user_id, title, department, needs, offers, status) VALUES ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002', 'Need Marlboro Reds', 'Tobacco', '2 Cartons Marlboro Red', '3 Cartons Newport Menthol', 'open');
INSERT INTO trade_proposals (post_id, proposer_store_id, offer_text, status) VALUES ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'I can do 1 carton of Marlboro Red for 1 Carton of Newport', 'pending');
-- Lottery Books
INSERT INTO lottery_books (store_id, game_name, ticket_price, pack_number, tickets_total, tickets_sold, tickets_remaining, activated_at, closed_at, status) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Cash Explosion',
  2,
  '12345',
  100,
  45,
  55,
  '2026-03-05T23:41:46.039Z',
  NULL,
  'active'
);
INSERT INTO lottery_books (store_id, game_name, ticket_price, pack_number, tickets_total, tickets_sold, tickets_remaining, activated_at, closed_at, status) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Mega Millions',
  5,
  '54321',
  50,
  50,
  0,
  '2026-03-04T23:41:46.039Z',
  '2026-03-05T23:41:46.039Z',
  'closed'
);
-- Lottery Settlements
INSERT INTO lottery_settlements (store_id, date, total_activated_value, total_redeemed_value, net_settlement) VALUES (
  '00000000-0000-0000-0000-000000000001',
  '2026-03-05T23:41:46.039Z',
  500,
  200,
  300
);
-- bot pairings
INSERT INTO bot_pairings (user_id, platform, platform_user_id, pairing_code) VALUES ('00000000-0000-0000-0000-000000000002', 'discord', 'user123', 'A1B2C3D4');INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-836838', 'Fried Chicken 8pc', 'Hot Foods', 'Deli & Hot Foods', 2, 3, 20, 18, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-676547', 'Hot Dog', 'Hot Foods', 'Deli & Hot Foods', 3, 5, 58, 23, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-429499', 'Pizza Slice', 'Hot Foods', 'Deli & Hot Foods', 4, 9, 47, 6, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-436564', 'Potato Wedges', 'Hot Foods', 'Deli & Hot Foods', 8, 16, 17, 14, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-207468', 'Breakfast Sandwich', 'Hot Foods', 'Deli & Hot Foods', 4, 9, 36, 20, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-142179', 'Rotisserie Chicken', 'Hot Foods', 'Deli & Hot Foods', 7, 13, 56, 14, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-485865', 'Mac & Cheese', 'Hot Foods', 'Deli & Hot Foods', 5, 11, 24, 16, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-109546', 'Jalapeno Poppers', 'Hot Foods', 'Deli & Hot Foods', 8, 15, 32, 20, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-919941', 'Turkey Sub', 'Cold Deli', 'Deli & Hot Foods', 3, 5, 19, 8, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-536407', 'Italian Sub', 'Cold Deli', 'Deli & Hot Foods', 3, 6, 53, 11, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-195444', 'Pasta Salad', 'Cold Deli', 'Deli & Hot Foods', 2, 4, 37, 12, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-304793', 'Macaroni Salad', 'Cold Deli', 'Deli & Hot Foods', 9, 20, 33, 14, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-885224', 'Roast Beef Sandwich', 'Cold Deli', 'Deli & Hot Foods', 8, 19, 30, 22, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-958792', 'Ham & Cheese Sandwich', 'Cold Deli', 'Deli & Hot Foods', 2, 4, 43, 8, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-911487', 'Chicken Salad', 'Cold Deli', 'Deli & Hot Foods', 2, 4, 48, 23, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-365427', 'Bud Light 12pk', 'Beer', 'Alcohol - Beer', 5, 9, 42, 24, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-383703', 'Coors Light 12pk', 'Beer', 'Alcohol - Beer', 5, 12, 53, 18, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-320264', 'Corona Extra 6pk', 'Beer', 'Alcohol - Beer', 9, 18, 13, 7, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-405917', 'Modelo Especial 12pk', 'Beer', 'Alcohol - Beer', 4, 6, 21, 8, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-546036', 'Heineken 6pk', 'Beer', 'Alcohol - Beer', 2, 3, 38, 18, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-529436', 'Stella Artois 6pk', 'Beer', 'Alcohol - Beer', 3, 7, 49, 24, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-156889', 'Blue Moon 6pk', 'Beer', 'Alcohol - Beer', 8, 16, 49, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-898143', 'Michelob Ultra 12pk', 'Beer', 'Alcohol - Beer', 5, 10, 12, 11, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-556843', 'Cabernet Sauvignon', 'Wine', 'Alcohol - Wine', 2, 4, 49, 14, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-825670', 'Chardonnay', 'Wine', 'Alcohol - Wine', 2, 3, 15, 16, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-252514', 'Pinot Grigio', 'Wine', 'Alcohol - Wine', 2, 3, 55, 10, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-668131', 'Merlot', 'Wine', 'Alcohol - Wine', 9, 18, 21, 16, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-149228', 'Sauvignon Blanc', 'Wine', 'Alcohol - Wine', 6, 12, 49, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-858113', 'Rose', 'Wine', 'Alcohol - Wine', 9, 20, 47, 17, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-573717', 'Prosecco', 'Wine', 'Alcohol - Wine', 5, 8, 45, 13, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-293353', 'Lays Classic 8oz', 'Snacks', 'Grocery & Dry Goods', 2, 4, 35, 17, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-964772', 'Doritos Nacho Cheese', 'Snacks', 'Grocery & Dry Goods', 7, 13, 57, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-361667', 'Cheetos', 'Snacks', 'Grocery & Dry Goods', 3, 5, 37, 5, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-107073', 'Oreos', 'Snacks', 'Grocery & Dry Goods', 4, 7, 46, 6, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-225169', 'Snickers Bar', 'Snacks', 'Grocery & Dry Goods', 3, 5, 30, 24, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-258364', 'M&Ms Peanut', 'Snacks', 'Grocery & Dry Goods', 6, 12, 29, 13, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-823612', 'Reeses Cups', 'Snacks', 'Grocery & Dry Goods', 3, 5, 17, 21, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-710578', 'Pringles Original', 'Snacks', 'Grocery & Dry Goods', 5, 10, 47, 11, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-947156', 'Coca Cola 20oz', 'Beverages', 'Grocery & Dry Goods', 2, 4, 29, 24, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-637242', 'Pepsi 20oz', 'Beverages', 'Grocery & Dry Goods', 2, 3, 33, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-813712', 'Mountain Dew 20oz', 'Beverages', 'Grocery & Dry Goods', 7, 11, 43, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-284889', 'Gatorade Fruit Punch', 'Beverages', 'Grocery & Dry Goods', 5, 9, 35, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-269662', 'Red Bull 8oz', 'Beverages', 'Grocery & Dry Goods', 6, 9, 18, 6, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-605871', 'Monster Energy 16oz', 'Beverages', 'Grocery & Dry Goods', 2, 4, 23, 15, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-858047', 'Aquafina Water 20oz', 'Beverages', 'Grocery & Dry Goods', 4, 9, 29, 8, '00000000-0000-0000-0000-000000000003');
INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-817744', 'Sprite 20oz', 'Beverages', 'Grocery & Dry Goods', 4, 6, 28, 15, '00000000-0000-0000-0000-000000000003');

-- Enable pgcrypto extension if it doesn't exist
CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  app_metadata,
  user_metadata,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  '00000000-0000-0000-0000-000000000004',
  'authenticated',
  'authenticated',
  'demo@shrink.app',
  crypt('demo_password', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  '',
  '',
  '',
  ''
) ON CONFLICT (id) DO NOTHING;

-- Demo app user
INSERT INTO public.users (id, name, email, role, store_id) 
VALUES ('00000000-0000-0000-0000-000000000004', 'Demo User', 'demo@shrink.app', 'manager', '00000000-0000-0000-0000-000000000001') 
ON CONFLICT (id) DO NOTHING;
