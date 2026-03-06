import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Product, CategoryData, TobaccoCategory } from '../types';
import { MOCK_CATEGORIES } from '../constants'; // Fallback

export function useInventory() {
    const [categories, setCategories] = useState<CategoryData[]>(MOCK_CATEGORIES);
    const [deliProducts, setDeliProducts] = useState<Product[]>([]);
    const [groceryProducts, setGroceryProducts] = useState<Product[]>([]);
    const [alcoholProducts, setAlcoholProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchInventory() {
            try {
                setIsLoading(true);
                // Fetch products from Supabase
                const { data, error } = await supabase
                    .from('inventory')
                    .select('*')
                    .order('name');

                if (error) throw error;

                if (data && data.length > 0) {
                    // Transform flat data back into CategoryData structure for Tobacco categories
                    const tobaccoCategories: TobaccoCategory[] = ['Cigarettes', 'Vapes', 'Chewing Tobacco', 'Cigars'];

                    const transformedCategories: CategoryData[] = tobaccoCategories.map(catType => {
                        const catProducts = data
                            .filter(p => p.category === catType)
                            .map(mapProduct);

                        // Default stats if none exist
                        const stats = {
                            totalInventory: catProducts.reduce((sum, p) => sum + (p.qty_on_hand || 0), 0),
                            dailyRestock: Math.round(catProducts.reduce((sum, p) => sum + (p.dailySales || 0), 0) * 0.8),
                            netMargin: Math.round(catProducts.reduce((sum, p) => sum + (p.retail_price || 0), 0) / (catProducts.length || 1)),
                            compliance: 95
                        };

                        return {
                            id: catType,
                            title: `Tobacco Wall – ${catType}`,
                            restockPriority: 'Medium',
                            products: catProducts,
                            stats
                        } as CategoryData;
                    });

                    setCategories(transformedCategories);

                    // Extract other departments
                    const deli = data.filter(p => p.department === 'Deli & Hot Foods').map(mapProduct);
                    const grocery = data.filter(p => p.department === 'Grocery & Dry Goods' || p.department === 'Meat & Fresh').map(mapProduct);
                    const alcohol = data.filter(p => p.department?.startsWith('Alcohol -')).map(mapProduct);

                    setDeliProducts(deli);
                    setGroceryProducts(grocery);
                    setAlcoholProducts(alcohol);
                }
            } catch (err) {
                console.error('Error fetching inventory from Supabase:', err);
                setError(err instanceof Error ? err : new Error('Unknown error fetching inventory'));
            } finally {
                setIsLoading(false);
            }
        }

        fetchInventory();
    }, []);

    return { categories, deliProducts, groceryProducts, alcoholProducts, isLoading, error };
}

function mapProduct(p: any): Product {
    return {
        id: p.id,
        sku: p.sku,
        name: p.name,
        brand: p.brand,
        category: p.category,
        department: p.department,
        qty_on_hand: p.on_hand,
        qty_min_stock: p.reorder_point,
        dailySales: p.daily_sales,
        sales30d: p.sales_30d,
        sellThrough: p.sell_through,
        margin: p.retail_price,
        status: p.status,
        unit_cost: p.cost_price,
        lastPODate: p.last_po_date,
        supplier: {
            name: 'Unknown Supplier', // Would need a join to get this properly
            contact: '',
            email: ''
        },
        historicalSales: [],
        row: 0, // Fallback, the app seems to expect this or slotId
        slot: 0,
    } as Product;
}
