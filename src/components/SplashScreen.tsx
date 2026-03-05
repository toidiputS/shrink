import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
    onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Auto-hide after 8 seconds
        const timer = setTimeout(() => {
            handleComplete();
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const handleComplete = () => {
        setIsVisible(false);
        setTimeout(onComplete, 800); // Wait for fade out animation
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Logo Animation Video */}
                    <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center">
                        {/* Fallback glow/pulse behind the video just in case */}
                        <div className="absolute inset-0 bg-accent-green/10 blur-[100px] rounded-full animate-pulse" />

                        <video
                            src="/shrink_logo.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[200%] h-[200%] object-contain hue-rotate-140deg saturate-150 contrast-125"
                        />
                    </div>
                    {/* Title overlay — fades in at 1.5s */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center gap-1 -mt-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-[0.3em] uppercase text-white">
                            SHRINK
                        </h1>
                        <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-accent-green/80 font-light">
                            Stop the Bleed
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-12 flex flex-col items-center gap-4"
                    >
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-accent-green animate-[bounce_1s_infinite_0ms]" />
                            <div className="w-4 h-4 rounded-full bg-accent-green animate-[bounce_1s_infinite_200ms]" />
                            <div className="w-4 h-4 rounded-full bg-accent-green animate-[bounce_1s_infinite_400ms]" />
                        </div>

                        <button
                            onClick={handleComplete}
                            className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                        >
                            Skip Intro
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
