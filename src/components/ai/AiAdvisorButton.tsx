import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'motion/react';

interface AiAdvisorButtonProps {
    onClick: () => void;
    hasMessages: boolean;
}

export default function AiAdvisorButton({ onClick, hasMessages }: AiAdvisorButtonProps) {
    return (
        <motion.button
            onClick={onClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-150 w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-600 to-cyan-700 shadow-lg shadow-emerald-500/20 flex items-center justify-center group transition-shadow hover:shadow-emerald-500/40"
            title="Shrink AI Advisor"
        >
            <Bot className="w-6 h-6 text-white" />

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-2xl border-2 border-emerald-400/40 animate-ping opacity-30 pointer-events-none" />

            {/* Active dot when chat has messages */}
            {hasMessages && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-bg-primary" />
            )}
        </motion.button>
    );
}
