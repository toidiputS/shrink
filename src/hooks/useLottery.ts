import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { LotteryBook, LotterySettlement } from '../types';

export function useLottery(storeId?: string) {
    const [books, setBooks] = useState<LotteryBook[]>([
      { id: '1', game_name: 'Mega Bucks', ticket_price: 5, pack_number: 'MB-4821', tickets_total: 300, tickets_sold: 285, tickets_remaining: 15, status: 'active', activated_at: new Date().toISOString(), closed_at: null },
      { id: '2', game_name: 'Lucky 7s', ticket_price: 1, pack_number: 'L7-9923', tickets_total: 500, tickets_sold: 250, tickets_remaining: 250, status: 'active', activated_at: new Date().toISOString(), closed_at: null },
      { id: '3', game_name: 'Cash Explosion', ticket_price: 10, pack_number: 'CE-3341', tickets_total: 150, tickets_sold: 142, tickets_remaining: 8, status: 'active', activated_at: new Date().toISOString(), closed_at: null },
      { id: '4', game_name: 'Diamond Millions', ticket_price: 20, pack_number: 'DM-7712', tickets_total: 100, tickets_sold: 51, tickets_remaining: 49, status: 'active', activated_at: new Date().toISOString(), closed_at: null },
      { id: '5', game_name: 'Gold Rush', ticket_price: 2, pack_number: 'GR-5521', tickets_total: 400, tickets_sold: 390, tickets_remaining: 10, status: 'active', activated_at: new Date().toISOString(), closed_at: null },
      { id: '6', game_name: 'Jackpot Jumbo', ticket_price: 30, pack_number: 'JJ-1104', tickets_total: 75, tickets_sold: 30, tickets_remaining: 45, status: 'active', activated_at: new Date().toISOString(), closed_at: null },
    ]);
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
