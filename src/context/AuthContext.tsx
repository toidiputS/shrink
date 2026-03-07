import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: 'manager' | 'employee';
    store_id: string;
}

interface AuthContextType {
    session: Session | null;
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
    isDemoUser: boolean;
    signOut: () => Promise<void>;
    manualSetUser: (profile: UserProfile) => void;
}

const AuthContext = createContext<AuthContextType>({
    session: null,
    user: null,
    profile: null,
    loading: true,
    isDemoUser: false,
    signOut: async () => { },
    manualSetUser: () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            // If the persisted session is the demo account, clear it
            // so the user always lands on the login screen fresh
            if (session?.user?.email === 'demo@shrink.app') {
                supabase.auth.signOut().then(() => {
                    setSession(null);
                    setUser(null);
                    setProfile(null);
                    setLoading(false);
                });
                return;
            }

            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchProfile(session.user.id);
            } else {
                setLoading(false);
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            if (session?.user) {
                fetchProfile(session.user.id);
            } else {
                setProfile(null);
                setLoading(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId: string) => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) {
                console.error('Error fetching profile:', error);
            } else if (data) {
                setProfile(data as UserProfile);
            }
        } catch (err) {
            console.error('Unexpected error fetching profile', err);
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setSession(null);
        setUser(null);
        setProfile(null);
    };

    const manualSetUser = (newProfile: UserProfile) => {
        setProfile(newProfile);
        setSession({} as Session);
        setUser({ id: newProfile.id } as User);
        setLoading(false);
    };

    const isDemoUser = profile?.email === 'demo@shrink.app' ||
        profile?.id === 'demo-user-id' ||
        profile?.id === 'dev-backdoor-id';

    return (
        <AuthContext.Provider value={{ session, user, profile, loading, isDemoUser, signOut, manualSetUser }}>
            {children}
        </AuthContext.Provider>
    );
};
