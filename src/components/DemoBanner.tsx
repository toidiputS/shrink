import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AlertCircle, X } from 'lucide-react';

export default function DemoBanner() {
    const { isDemoUser } = useAuth();
    const [isDismissed, setIsDismissed] = useState(false);

    if (!isDemoUser || isDismissed) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-100 bg-accent-orange/90 text-black px-4 py-2 flex items-center justify-between text-sm font-bold shadow-lg shadow-accent-orange/20">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider truncate">
                    DEMO MODE — Data is sample data only. Sign in with your store account to get started.
                </span>
            </div>
            <button
                onClick={() => setIsDismissed(true)}
                className="p-1 hover:bg-black/10 rounded transition-colors cursor-pointer shrink-0 ml-4"
                title="Dismiss"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
