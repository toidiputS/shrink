import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface DemoProtectedActionProps {
    children: React.ReactNode;
    className?: string;
}

export default function DemoProtectedAction({ children, className = '' }: DemoProtectedActionProps) {
    const { isDemoUser } = useAuth();
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClickCapture = (e: React.MouseEvent) => {
        if (isDemoUser) {
            e.preventDefault();
            e.stopPropagation();
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
        }
    };

    if (!isDemoUser) {
        return <>{children}</>;
    }

    return (
        <div
            className={`relative inline-block ${className}`}
            onClickCapture={handleClickCapture}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <div className="pointer-events-auto w-full h-full flex">
                {children}
            </div>
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-2 bg-neutral-900 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded border border-orange-500/30 shadow-xl z-100 pointer-events-none text-center">
                    Sign in with your account to use this feature
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-orange-500/30" />
                </div>
            )}
        </div>
    );
}
