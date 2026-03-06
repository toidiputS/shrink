import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const supabaseUrl = Deno.env.get('SUPABASE_URL')
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

        if (!supabaseUrl || !supabaseServiceKey) {
            throw new Error('Missing Supabase environment variables')
        }

        const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

        // Get the JWT from the Authorization header
        const authHeader = req.headers.get('Authorization')
        if (!authHeader) {
            return new Response(JSON.stringify({ error: 'Missing Authorization header' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
        }
        const token = authHeader.replace('Bearer ', '')

        // Verify the user making the request 
        const { data: { user: callingUser }, error: verifyError } = await supabaseAdmin.auth.getUser(token)
        if (verifyError || !callingUser) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
        }

        // Check if calling user is a manager
        const { data: managerProfile, error: profileError } = await supabaseAdmin
            .from('users')
            .select('*')
            .eq('id', callingUser.id)
            .single()

        if (profileError || !managerProfile || managerProfile.role !== 'manager') {
            return new Response(JSON.stringify({ error: 'Forbidden: Only managers can create users' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
        }

        try {
            const { email, name, role, store_id } = await req.json()

            if (!email || !name || !role) {
                return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                })
            }

            // Note: We use inviteUserByEmail which sends a magic link to set a password
            const { data: userData, error: createUserError } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
                data: {
                    name: name,
                    role: role,
                    store_id: store_id
                }
            })

            if (createUserError) {
                return new Response(JSON.stringify({ error: createUserError.message }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                })
            }

            if (!userData.user) {
                return new Response(JSON.stringify({ error: 'User creation failed' }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                })
            }

            // Insert into public.users
            const { error: insertError } = await supabaseAdmin
                .from('users')
                .insert({
                    id: userData.user.id,
                    name,
                    email,
                    role,
                    store_id,
                })

            if (insertError) {
                // Cleanup auth user if profile creation fails
                await supabaseAdmin.auth.admin.deleteUser(userData.user.id)
                return new Response(JSON.stringify({ error: insertError.message }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders },
                })
            }

            return new Response(JSON.stringify({ success: true, user: userData.user }), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
                status: 200,
            })
        } catch (error) {
            return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            })
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
        })
    }
})
