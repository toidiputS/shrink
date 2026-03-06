import * as fs from 'fs';
import * as path from 'path';
import { MOCK_CATEGORIES, MOCK_DELI_PRODUCTS, MOCK_GROCERY_PRODUCTS, MOCK_ALCOHOL_PRODUCTS } from '../src/constants';

function escapeString(str: string | undefined | null): string {
    if (str === undefined || str === null) return 'NULL';
    if (typeof str === 'number') return `${str}`;
    return `'${str.replace(/'/g, "''")}'`;
}

function normalizeNumber(num: number | undefined | null): string {
    if (num === undefined || num === null || isNaN(num)) return '0';
    return `${num}`;
}

const MOCK_LOTTERY_BOOKS = [
    { game_name: 'Cash Explosion', ticket_price: 2, pack_number: '12345', tickets_total: 100, tickets_sold: 45, tickets_remaining: 55, activated_at: new Date().toISOString(), closed_at: null, status: 'active' },
    { game_name: 'Mega Millions', ticket_price: 5, pack_number: '54321', tickets_total: 50, tickets_sold: 50, tickets_remaining: 0, activated_at: new Date(Date.now() - 86400000).toISOString(), closed_at: new Date().toISOString(), status: 'closed' }
];

const MOCK_LOTTERY_SETTLEMENTS = [
    { date: new Date().toISOString(), total_activated_value: 500, total_redeemed_value: 200, net_settlement: 300 }
];

async function main() {
    const sqlLines: string[] = [];

    // 1. stores
    sqlLines.push(`-- default store`);
    sqlLines.push(`INSERT INTO stores (id, name, address) VALUES ('00000000-0000-0000-0000-000000000001', 'Main Store', '123 Main St') ON CONFLICT (id) DO NOTHING;`);

    // 2. users
    sqlLines.push(`-- default users`);
    sqlLines.push(`INSERT INTO users (id, name, email, role, store_id) VALUES ('00000000-0000-0000-0000-000000000002', 'Store Manager', 'manager@example.com', 'manager', '00000000-0000-0000-0000-000000000001') ON CONFLICT (id) DO NOTHING;`);

    // 6. suppliers
    sqlLines.push(`-- suppliers`);
    sqlLines.push(`INSERT INTO suppliers (id, store_id, name, contact_name, phone, email, category) VALUES ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'Core-Mark', 'John Doe', '555-0101', 'john@coremark.example', 'General') ON CONFLICT (id) DO NOTHING;`);

    // 3. inventory
    sqlLines.push(`-- Inventory`);
    const allProducts = [
        ...MOCK_CATEGORIES.flatMap(c => c.products),
        ...MOCK_DELI_PRODUCTS,
        ...MOCK_GROCERY_PRODUCTS,
        ...MOCK_ALCOHOL_PRODUCTS
    ] || [];

    for (const product of allProducts) {
        sqlLines.push(`INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES (`);
        sqlLines.push(`  '00000000-0000-0000-0000-000000000001',`);
        sqlLines.push(`  ${escapeString(product.sku)},`);
        sqlLines.push(`  ${escapeString(product.name)},`);
        sqlLines.push(`  ${escapeString(product.category)},`);
        sqlLines.push(`  ${escapeString(product.department)},`);
        sqlLines.push(`  ${normalizeNumber(product.unit_cost)},`);
        sqlLines.push(`  ${normalizeNumber(product.retail_price)},`);
        sqlLines.push(`  ${normalizeNumber(product.qty_on_hand)},`);
        sqlLines.push(`  ${normalizeNumber(product.qty_min_stock)},`);
        sqlLines.push(`  '00000000-0000-0000-0000-000000000003'`);
        sqlLines.push(`);`);
    }

    // 4. sales
    sqlLines.push(`-- mock sales`);
    sqlLines.push(`INSERT INTO sales (store_id, sku, item_name, qty_sold, sale_price, total, department) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-TEST', 'Test Item', 2, 5.00, 10.00, 'Grocery');`);

    // 5. shrink_log
    sqlLines.push(`-- shrink log`);
    sqlLines.push(`INSERT INTO shrink_log (store_id, sku, item_name, qty, reason, department, logged_by) VALUES ('00000000-0000-0000-0000-000000000001', 'SKU-001', 'Marlboro Red', 1, 'Damaged', 'Tobacco', '00000000-0000-0000-0000-000000000002');`);

    // 7. purchase_orders
    sqlLines.push(`-- purchase orders`);
    sqlLines.push(`INSERT INTO purchase_orders (store_id, supplier_id, status, total_value, items) VALUES ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000003', 'pending', 500.00, '[]');`);

    // 8. deli_freshness
    sqlLines.push(`-- deli freshness`);
    sqlLines.push(`INSERT INTO deli_freshness (store_id, item_name, slot, batch, cooked_at, expires_at, volume, health_status, action) VALUES ('00000000-0000-0000-0000-000000000001', 'Fried Chicken', 'Hot Case A', 'B-123', NOW(), NOW() + interval '4 hours', 10, 'Healthy', 'Monitor');`);

    // 9. trade_posts & 10. trade_proposals
    sqlLines.push(`-- trade posts and proposals`);
    sqlLines.push(`INSERT INTO trade_posts (id, store_id, user_id, title, department, needs, offers, status) VALUES ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002', 'Need Marlboro Reds', 'Tobacco', '2 Cartons Marlboro Red', '3 Cartons Newport Menthol', 'open');`);
    sqlLines.push(`INSERT INTO trade_proposals (post_id, proposer_store_id, offer_text, status) VALUES ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000001', 'I can do 1 carton of Marlboro Red for 1 Carton of Newport', 'pending');`);

    // 11. lottery_books
    sqlLines.push(`-- Lottery Books`);
    for (const book of MOCK_LOTTERY_BOOKS) {
        sqlLines.push(`INSERT INTO lottery_books (store_id, game_name, ticket_price, pack_number, tickets_total, tickets_sold, tickets_remaining, activated_at, closed_at, status) VALUES (`);
        sqlLines.push(`  '00000000-0000-0000-0000-000000000001',`);
        sqlLines.push(`  ${escapeString(book.game_name)},`);
        sqlLines.push(`  ${normalizeNumber(book.ticket_price)},`);
        sqlLines.push(`  ${escapeString(book.pack_number)},`);
        sqlLines.push(`  ${normalizeNumber(book.tickets_total)},`);
        sqlLines.push(`  ${normalizeNumber(book.tickets_sold)},`);
        sqlLines.push(`  ${normalizeNumber(book.tickets_remaining)},`);
        sqlLines.push(`  ${escapeString(book.activated_at)},`);
        sqlLines.push(`  ${escapeString(book.closed_at)},`);
        sqlLines.push(`  ${escapeString(book.status)}`);
        sqlLines.push(`);`);
    }

    // 12. lottery_settlements
    sqlLines.push(`-- Lottery Settlements`);
    for (const st of MOCK_LOTTERY_SETTLEMENTS) {
        sqlLines.push(`INSERT INTO lottery_settlements (store_id, date, total_activated_value, total_redeemed_value, net_settlement) VALUES (`);
        sqlLines.push(`  '00000000-0000-0000-0000-000000000001',`);
        sqlLines.push(`  ${escapeString(st.date)},`);
        sqlLines.push(`  ${normalizeNumber(st.total_activated_value)},`);
        sqlLines.push(`  ${normalizeNumber(st.total_redeemed_value)},`);
        sqlLines.push(`  ${normalizeNumber(st.net_settlement)}`);
        sqlLines.push(`);`);
    }

    // 13. bot_pairings
    sqlLines.push(`-- bot pairings`);
    sqlLines.push(`INSERT INTO bot_pairings (user_id, platform, platform_user_id, pairing_code) VALUES ('00000000-0000-0000-0000-000000000002', 'discord', 'user123', 'A1B2C3D4');`);


    const outputPath = path.join(process.cwd(), 'supabase', 'migrations', '20260305_seed.sql');
    fs.writeFileSync(outputPath, sqlLines.join('\n'));
    console.log('Successfully generated seed.sql for all 13 tables.');
}

main().catch(console.error);
