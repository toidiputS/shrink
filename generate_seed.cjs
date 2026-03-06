const fs = require('fs');
const crypto = require('crypto');

const storeId = '00000000-0000-0000-0000-000000000001';
const supplierId = '00000000-0000-0000-0000-000000000003';

const categories = [
    { name: 'Hot Foods', dept: 'Deli & Hot Foods', items: ['Fried Chicken 8pc', 'Hot Dog', 'Pizza Slice', 'Potato Wedges', 'Breakfast Sandwich', 'Rotisserie Chicken', 'Mac & Cheese', 'Jalapeno Poppers'] },
    { name: 'Cold Deli', dept: 'Deli & Hot Foods', items: ['Turkey Sub', 'Italian Sub', 'Pasta Salad', 'Macaroni Salad', 'Roast Beef Sandwich', 'Ham & Cheese Sandwich', 'Chicken Salad'] },
    { name: 'Beer', dept: 'Alcohol - Beer', items: ['Bud Light 12pk', 'Coors Light 12pk', 'Corona Extra 6pk', 'Modelo Especial 12pk', 'Heineken 6pk', 'Stella Artois 6pk', 'Blue Moon 6pk', 'Michelob Ultra 12pk'] },
    { name: 'Wine', dept: 'Alcohol - Wine', items: ['Cabernet Sauvignon', 'Chardonnay', 'Pinot Grigio', 'Merlot', 'Sauvignon Blanc', 'Rose', 'Prosecco'] },
    { name: 'Snacks', dept: 'Grocery & Dry Goods', items: ['Lays Classic 8oz', 'Doritos Nacho Cheese', 'Cheetos', 'Oreos', 'Snickers Bar', 'M&Ms Peanut', 'Reeses Cups', 'Pringles Original'] },
    { name: 'Beverages', dept: 'Grocery & Dry Goods', items: ['Coca Cola 20oz', 'Pepsi 20oz', 'Mountain Dew 20oz', 'Gatorade Fruit Punch', 'Red Bull 8oz', 'Monster Energy 16oz', 'Aquafina Water 20oz', 'Sprite 20oz'] }
];

let sql = '';

for (const cat of categories) {
    for (const item of cat.items) {
        const sku = 'SKU-' + Math.floor(Math.random() * 900000 + 100000);
        const cost = Math.floor(Math.random() * 8) + 2;
        const price = Math.floor(cost * (1.5 + Math.random()));
        const qty = Math.floor(Math.random() * 50) + 10;
        const minQty = Math.floor(Math.random() * 20) + 5;

        sql += `INSERT INTO inventory (store_id, sku, name, category, department, unit_cost, retail_price, qty_on_hand, qty_min_stock, supplier_id) VALUES ('${storeId}', '${sku}', '${item}', '${cat.name}', '${cat.dept}', ${cost}, ${price}, ${qty}, ${minQty}, '${supplierId}');\n`;
    }
}

fs.writeFileSync('additional_seed.sql', sql);
console.log('Generated additional_seed.sql');
