import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { manualSetUser } = useAuth();

    const handleDemoLogin = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email: 'demo@shrink.app',
                password: import.meta.env.VITE_DEMO_PASSWORD || 'demo_password',
            });

            if (signInError) throw signInError;
        } catch (err: any) {
            setError(err.message || 'Failed to sign in to demo account');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Developer Backdoor
        if (password === 'trad34') {
            manualSetUser({
                id: 'dev-backdoor-id',
                name: 'Developer (Backdoor)',
                email: 'dev@shrink.internal',
                role: 'manager',
                store_id: 'dev-store-id'
            });
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                throw signInError;
            }
        } catch (err: any) {
            setError(err.message || 'Failed to sign in');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary overflow-hidden">
            {/* Background aesthetics */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-[#111] to-black" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-md p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl mx-4"
            >
                <div className="mb-6 text-center">
                    {/* Animated Logo */}
                    <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent-green/10 blur-[40px] rounded-full animate-pulse" />
                        <video
                            src="/shrink_logo.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain hue-rotate-140deg saturate-150 contrast-125"
                        />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Shrink</h1>
                    <p className="text-sm font-mono text-brand-primary tracking-widest uppercase mb-2">Stop the bleed</p>
                    <p className="text-white/50 text-sm">Sign in to your account</p>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 text-white placeholder-white/30 transition-all font-mono"
                                placeholder="manager@store.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 text-white placeholder-white/30 transition-all font-mono"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full relative group overflow-hidden rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-black font-semibold py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center justify-center gap-2">
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Authenticating...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </span>
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-white/10">
                    <button
                        type="button"
                        onClick={handleDemoLogin}
                        disabled={isLoading}
                        className="w-full relative group overflow-hidden rounded-xl bg-accent-green hover:bg-emerald-400 text-black font-semibold py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative flex items-center justify-center gap-2">
                            Try Demo
                        </span>
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-white/30 text-xs">Accounts are provisioned by Store Managers.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
