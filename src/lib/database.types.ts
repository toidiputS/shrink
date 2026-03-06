export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            bot_pairings: {
                Row: {
                    expires_at: string | null
                    id: string
                    paired_at: string | null
                    pairing_code: string | null
                    platform: string | null
                    platform_user_id: string | null
                    user_id: string | null
                }
                Insert: {
                    expires_at?: string | null
                    id?: string
                    paired_at?: string | null
                    pairing_code?: string | null
                    platform?: string | null
                    platform_user_id?: string | null
                    user_id?: string | null
                }
                Update: {
                    expires_at?: string | null
                    id?: string
                    paired_at?: string | null
                    pairing_code?: string | null
                    platform?: string | null
                    platform_user_id?: string | null
                    user_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "bot_pairings_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            deli_freshness: {
                Row: {
                    action: string | null
                    batch: string | null
                    cooked_at: string | null
                    expires_at: string | null
                    health_status: string | null
                    id: string
                    item_name: string | null
                    slot: string | null
                    store_id: string | null
                    volume: number | null
                }
                Insert: {
                    action?: string | null
                    batch?: string | null
                    cooked_at?: string | null
                    expires_at?: string | null
                    health_status?: string | null
                    id?: string
                    item_name?: string | null
                    slot?: string | null
                    store_id?: string | null
                    volume?: number | null
                }
                Update: {
                    action?: string | null
                    batch?: string | null
                    cooked_at?: string | null
                    expires_at?: string | null
                    health_status?: string | null
                    id?: string
                    item_name?: string | null
                    slot?: string | null
                    store_id?: string | null
                    volume?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "deli_freshness_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            inventory: {
                Row: {
                    category: string | null
                    department: string | null
                    id: string
                    last_synced: string | null
                    name: string | null
                    qty_min_stock: number | null
                    qty_on_hand: number | null
                    retail_price: number | null
                    sku: string | null
                    store_id: string | null
                    supplier_id: string | null
                    unit_cost: number | null
                }
                Insert: {
                    category?: string | null
                    department?: string | null
                    id?: string
                    last_synced?: string | null
                    name?: string | null
                    qty_min_stock?: number | null
                    qty_on_hand?: number | null
                    retail_price?: number | null
                    sku?: string | null
                    store_id?: string | null
                    supplier_id?: string | null
                    unit_cost?: number | null
                }
                Update: {
                    category?: string | null
                    department?: string | null
                    id?: string
                    last_synced?: string | null
                    name?: string | null
                    qty_min_stock?: number | null
                    qty_on_hand?: number | null
                    retail_price?: number | null
                    sku?: string | null
                    store_id?: string | null
                    supplier_id?: string | null
                    unit_cost?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "inventory_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            lottery_books: {
                Row: {
                    activated_at: string | null
                    activated_by: string | null
                    closed_at: string | null
                    game_name: string | null
                    id: string
                    pack_number: string | null
                    status: string | null
                    store_id: string | null
                    ticket_price: number | null
                    tickets_remaining: number | null
                    tickets_sold: number | null
                    tickets_total: number | null
                }
                Insert: {
                    activated_at?: string | null
                    activated_by?: string | null
                    closed_at?: string | null
                    game_name?: string | null
                    id?: string
                    pack_number?: string | null
                    status?: string | null
                    store_id?: string | null
                    ticket_price?: number | null
                    tickets_remaining?: number | null
                    tickets_sold?: number | null
                    tickets_total?: number | null
                }
                Update: {
                    activated_at?: string | null
                    activated_by?: string | null
                    closed_at?: string | null
                    game_name?: string | null
                    id?: string
                    pack_number?: string | null
                    status?: string | null
                    store_id?: string | null
                    ticket_price?: number | null
                    tickets_remaining?: number | null
                    tickets_sold?: number | null
                    tickets_total?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "lottery_books_activated_by_fkey"
                        columns: ["activated_by"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "lottery_books_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            lottery_settlements: {
                Row: {
                    created_at: string | null
                    date: string | null
                    id: string
                    net_settlement: number | null
                    store_id: string | null
                    total_activated_value: number | null
                    total_redeemed_value: number | null
                }
                Insert: {
                    created_at?: string | null
                    date?: string | null
                    id?: string
                    net_settlement?: number | null
                    store_id?: string | null
                    total_activated_value?: number | null
                    total_redeemed_value?: number | null
                }
                Update: {
                    created_at?: string | null
                    date?: string | null
                    id?: string
                    net_settlement?: number | null
                    store_id?: string | null
                    total_activated_value?: number | null
                    total_redeemed_value?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "lottery_settlements_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            purchase_orders: {
                Row: {
                    id: string
                    items: Json | null
                    ordered_at: string | null
                    received_at: string | null
                    status: string | null
                    store_id: string | null
                    supplier_id: string | null
                    total_value: number | null
                }
                Insert: {
                    id?: string
                    items?: Json | null
                    ordered_at?: string | null
                    received_at?: string | null
                    status?: string | null
                    store_id?: string | null
                    supplier_id?: string | null
                    total_value?: number | null
                }
                Update: {
                    id?: string
                    items?: Json | null
                    ordered_at?: string | null
                    received_at?: string | null
                    status?: string | null
                    store_id?: string | null
                    supplier_id?: string | null
                    total_value?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "purchase_orders_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            sales: {
                Row: {
                    department: string | null
                    id: string
                    item_name: string | null
                    qty_sold: number | null
                    sale_price: number | null
                    sku: string | null
                    sold_at: string | null
                    store_id: string | null
                    total: number | null
                }
                Insert: {
                    department?: string | null
                    id?: string
                    item_name?: string | null
                    qty_sold?: number | null
                    sale_price?: number | null
                    sku?: string | null
                    sold_at?: string | null
                    store_id?: string | null
                    total?: number | null
                }
                Update: {
                    department?: string | null
                    id?: string
                    item_name?: string | null
                    qty_sold?: number | null
                    sale_price?: number | null
                    sku?: string | null
                    sold_at?: string | null
                    store_id?: string | null
                    total?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "sales_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            shrink_log: {
                Row: {
                    department: string | null
                    id: string
                    item_name: string | null
                    logged_at: string | null
                    logged_by: string | null
                    qty: number | null
                    reason: string | null
                    sku: string | null
                    store_id: string | null
                }
                Insert: {
                    department?: string | null
                    id?: string
                    item_name?: string | null
                    logged_at?: string | null
                    logged_by?: string | null
                    qty?: number | null
                    reason?: string | null
                    sku?: string | null
                    store_id?: string | null
                }
                Update: {
                    department?: string | null
                    id?: string
                    item_name?: string | null
                    logged_at?: string | null
                    logged_by?: string | null
                    qty?: number | null
                    reason?: string | null
                    sku?: string | null
                    store_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "shrink_log_logged_by_fkey"
                        columns: ["logged_by"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "shrink_log_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            stores: {
                Row: {
                    address: string | null
                    created_at: string | null
                    id: string
                    name: string | null
                }
                Insert: {
                    address?: string | null
                    created_at?: string | null
                    id?: string
                    name?: string | null
                }
                Update: {
                    address?: string | null
                    created_at?: string | null
                    id?: string
                    name?: string | null
                }
                Relationships: []
            }
            suppliers: {
                Row: {
                    category: string | null
                    contact_name: string | null
                    email: string | null
                    id: string
                    name: string | null
                    notes: string | null
                    phone: string | null
                    store_id: string | null
                }
                Insert: {
                    category?: string | null
                    contact_name?: string | null
                    email?: string | null
                    id?: string
                    name?: string | null
                    notes?: string | null
                    phone?: string | null
                    store_id?: string | null
                }
                Update: {
                    category?: string | null
                    contact_name?: string | null
                    email?: string | null
                    id?: string
                    name?: string | null
                    notes?: string | null
                    phone?: string | null
                    store_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "suppliers_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            trade_posts: {
                Row: {
                    created_at: string | null
                    department: string | null
                    id: string
                    needs: string | null
                    offers: string | null
                    status: string | null
                    store_id: string | null
                    title: string | null
                    user_id: string | null
                }
                Insert: {
                    created_at?: string | null
                    department?: string | null
                    id?: string
                    needs?: string | null
                    offers?: string | null
                    status?: string | null
                    store_id?: string | null
                    title?: string | null
                    user_id?: string | null
                }
                Update: {
                    created_at?: string | null
                    department?: string | null
                    id?: string
                    needs?: string | null
                    offers?: string | null
                    status?: string | null
                    store_id?: string | null
                    title?: string | null
                    user_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "trade_posts_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "trade_posts_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            trade_proposals: {
                Row: {
                    created_at: string | null
                    id: string
                    offer_text: string | null
                    post_id: string | null
                    proposer_store_id: string | null
                    status: string | null
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    offer_text?: string | null
                    post_id?: string | null
                    proposer_store_id?: string | null
                    status?: string | null
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    offer_text?: string | null
                    post_id?: string | null
                    proposer_store_id?: string | null
                    status?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "trade_proposals_post_id_fkey"
                        columns: ["post_id"]
                        isOneToOne: false
                        referencedRelation: "trade_posts"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "trade_proposals_proposer_store_id_fkey"
                        columns: ["proposer_store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
            users: {
                Row: {
                    created_at: string | null
                    email: string | null
                    id: string
                    name: string | null
                    role: string | null
                    store_id: string | null
                }
                Insert: {
                    created_at?: string | null
                    email?: string | null
                    id?: string
                    name?: string | null
                    role?: string | null
                    store_id?: string | null
                }
                Update: {
                    created_at?: string | null
                    email?: string | null
                    id?: string
                    name?: string | null
                    role?: string | null
                    store_id?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "users_store_id_fkey"
                        columns: ["store_id"]
                        isOneToOne: false
                        referencedRelation: "stores"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof Database
    }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
