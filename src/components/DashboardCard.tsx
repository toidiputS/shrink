import React from 'react';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface DashboardCardProps {
    key?: React.Key;
    title: string;
    value: string | number;
    trend?: string;
    trendDirection?: 'up' | 'down';
    icon: LucideIcon;
    statusColor?: 'green' | 'orange' | 'red' | 'blue';
    isPositive?: boolean; // Alternative to trendDirection for simple up/down
    highlight?: boolean;
    className?: string;
}

export default function DashboardCard({
    title,
    value,
    trend,
    trendDirection,
    icon: Icon,
    statusColor = 'green',
    isPositive,
    highlight = false,
    className
}: DashboardCardProps) {
    const direction = trendDirection || (isPositive === true ? 'up' : isPositive === false ? 'down' : undefined);

    const colors = {
        green: 'text-accent-green bg-accent-green/10 border-accent-green/20',
        orange: 'text-accent-orange bg-accent-orange/10 border-accent-orange/20',
        red: 'text-accent-red bg-accent-red/10 border-accent-red/20',
        blue: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
    };

    return (
        <div className={cn(
            "relative bg-[#0F0F0F] border border-white/5 rounded-2xl p-5 shadow-2xl transition-all hover:border-white/10 group overflow-hidden",
            highlight && "border-accent-orange/30 bg-accent-orange/2 shadow-[0_0_20px_rgba(255,107,0,0.05)]",
            className
        )}>
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-white/3 to-transparent pointer-events-none" />

            <div className="flex items-start justify-between relative z-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 border border-white/5 group-hover:border-white/10 shadow-inner">
                            <Icon className="w-5 h-5 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] leading-tight">
                                {title}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-accent-green-bright transition-colors duration-500">
                                    {value}
                                </span>
                                <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px]",
                                    statusColor === 'green' ? "bg-accent-green shadow-accent-green/50" :
                                        statusColor === 'orange' ? "bg-accent-orange shadow-accent-orange/50" :
                                            statusColor === 'red' ? "bg-accent-red shadow-accent-red/50" : "bg-accent-blue shadow-accent-blue/50"
                                )} />
                            </div>
                        </div>
                    </div>
                </div>

                {trend && (
                    <div className={cn(
                        "flex items-center gap-1.5 text-[11px] font-black px-2.5 py-1 rounded-lg border backdrop-blur-md shadow-lg transition-transform group-hover:scale-110",
                        direction === 'up' ? colors.green : colors.red
                    )}>
                        {direction === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                        {trend}
                    </div>
                )}
            </div>

            {/* Bottom Accent Line */}
            <div className={cn(
                "absolute bottom-0 left-0 h-[2px] transition-all duration-700 rounded-full",
                highlight ? "w-full bg-accent-orange" : "w-0 group-hover:w-1/3 bg-white/20"
            )} />
        </div>
    );
}
