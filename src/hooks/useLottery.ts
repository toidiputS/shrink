import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { LotteryBook, LotterySettlement } from '../types';

export function useLottery(storeId?: string) {
    const [books, setBooks] = useState<LotteryBook[]>([]);
    const [settlements, setSettlements] = useState<LotterySettlement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchLottery = async () => {
        if (!storeId) {
            setBooks([])
            setSettlements([])
            setIsLoading(false)
            return;
        }

        try {
            setIsLoading(true);
            const [booksRes, settlementsRes] = await Promise.all([
                supabase.from('lottery_books').select('*').eq('store_id', storeId).order('activated_at', { ascending: false }),
                supabase.from('lottery_settlements').select('*').eq('store_id', storeId).order('date', { ascending: false })
            ]);

            if (booksRes.error) throw booksRes.error;
            if (settlementsRes.error) throw settlementsRes.error;

            setBooks(booksRes.data || []);
            setSettlements(settlementsRes.data || []);
        } catch (err) {
            console.error('Error fetching lottery data:', err);
            setError(err instanceof Error ? err : new Error('Unknown error fetching lottery data'));
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchLottery();
    }, [storeId]);

    const activateBook = async (game_name: string, ticket_price: number, pack_number: string, tickets_total: number, activated_by?: string) => {
        if (!storeId) return;
        const newBook = {
            store_id: storeId,
            game_name,
            ticket_price,
            pack_number,
            tickets_total,
            tickets_remaining: tickets_total,
            tickets_sold: 0,
            status: 'active',
            activated_by,
            activated_at: new Date().toISOString()
        };

        const { error } = await supabase.from('lottery_books').insert(newBook);
        if (error) throw error;
        await fetchLottery();
    };

    const closeBook = async (bookId: string) => {
        const { error } = await supabase
            .from('lottery_books')
            .update({ status: 'closed', closed_at: new Date().toISOString() })
            .eq('id', bookId);
        if (error) throw error;
        await fetchLottery();
    };

    const updateTicketCount = async (bookId: string, tickets_remaining: number, tickets_total: number) => {
        const tickets_sold = tickets_total - tickets_remaining;
        const { error } = await supabase
            .from('lottery_books')
            .update({ tickets_remaining, tickets_sold })
            .eq('id', bookId);
        if (error) throw error;
        await fetchLottery();
    };

    const recordSettlement = async (total_activated_value: number, total_redeemed_value: number) => {
        if (!storeId) return;
        const net_settlement = total_activated_value - total_redeemed_value;
        const { error } = await supabase.from('lottery_settlements').insert({
            store_id: storeId,
            date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
            total_activated_value,
            total_redeemed_value,
            net_settlement
        });
        if (error) throw error;
        await fetchLottery();
    };

    return { books, settlements, isLoading, error, activateBook, closeBook, updateTicketCount, recordSettlement, refresh: fetchLottery };
}
