import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  ArrowRight,
  Target,
  Rocket,
  Users,
  Zap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PitchStep {
  title: string;
  headline: string;
  content: React.ReactNode;
  instruction: string;
}

const PITCH_STEPS: PitchStep[] = [
  {
    title: "Big Picture",
    headline: "One Control Room For Your Entire Store",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Today's revenue and inventory value in one glance.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Department health bars show where attention is needed.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Alerts surface the exact issues to fix right now.</span>
        </li>
      </ul>
    ),
    instruction: "Scroll or hover around, then click Next when you're ready."
  },
  {
    title: "Profit Engine",
    headline: "Tobacco: Your Highest‑Margin Wall, Fully Visible",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/80">
          Hover a pack to see on‑hand, daily sales, margin %, and status.
        </p>
        <p className="text-sm text-white/80">
          High‑Impact Ops cards on the right show the most important fixes.
        </p>
      </div>
    ),
    instruction: "Explore the wall and the operations panel."
  },
  {
    title: "Freshness Control",
    headline: "Deli & Hot Foods: Zero Waste, Maximum Freshness",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Live hot case timers track hold time limits for every item.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Prep log and waste tracker to minimize daily shrink.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Deli specials management and per-item freshness monitoring.</span>
        </li>
      </ul>
    ),
    instruction: "Check the hot case timers and freshness alerts."
  },
  {
    title: "Center Store",
    headline: "Grocery & Dry Goods: Every Aisle Under Control",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Interactive floor map shows cooler, shelf, and gondola segments.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Hover any section to see inventory value, health status, and top SKUs.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Shelf planogram view for detailed product placement.</span>
        </li>
      </ul>
    ),
    instruction: "Explore the store floor map and hover over sections."
  },
  {
    title: "High‑Value Dept",
    headline: "Alcohol Store: Beer, Liquor & Wine Management",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Separate tracking for Beer, Liquor, and Wine categories.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Product‑level detail with margin, velocity, and compliance flags.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">ID verification and age‑restricted sales compliance built in.</span>
        </li>
      </ul>
    ),
    instruction: "Browse the alcohol department categories."
  },
  {
    title: "Whole Catalog",
    headline: "Every SKU, Every Department, One Live Table",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Search by SKU or product name across all departments.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Filter by category and status to find problems in seconds.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Side charts show value and 30‑day sales by department.</span>
        </li>
      </ul>
    ),
    instruction: "Try searching or filtering the inventory."
  },
  {
    title: "Loss Prevention",
    headline: "Security: Camera Grid, Alarms & Incident Tracking",
    content: (
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Multi-camera grid with fullscreen view and motion detection.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Alarm control panel with zone‑by‑zone arming status.</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
          <span className="text-sm text-white/80">Complete incident log and motion alert feed for accountability.</span>
        </li>
      </ul>
    ),
    instruction: "Review the camera feeds and security panels."
  },
  {
    title: "Real Data Ready",
    headline: "Already Wired For Your POS and CSVs",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/80 font-medium">
          Inventory, Sales, Suppliers, Purchase Orders, Shrink, Deli Freshness
        </p>
        <p className="text-sm text-white/60 italic">
          These are the exact files we map to your system so this demo becomes your live store in under 48 hours.
        </p>
      </div>
    ),
    instruction: "Review the backend architecture and data models."
  },
  {
    title: "Multi‑Store Network",
    headline: "Turn Surplus Into Cash With The Trade Board",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-white/80">
          Any store can post "Need" and "Have" items.
        </p>
        <p className="text-sm text-white/80">
          Nearby stores can propose trades instead of taking shrink.
        </p>
      </div>
    ),
    instruction: "See how stores collaborate to optimize inventory."
  },
  {
    title: "Pricing & Next Steps",
    headline: "Ready to Transform Your Store?",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {/* Founding Partner */}
        <div className="bg-amber-500/5 border border-amber-500/30 rounded-xl p-4 flex flex-col relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.08)]">
          <div className="absolute top-0 right-0 bg-linear-to-r from-amber-500 to-amber-400 text-black text-[7px] font-black px-2 py-0.5 rounded-bl-lg uppercase tracking-widest">Only 25 Ever</div>
          <div className="mb-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">Founding Partner</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/30 line-through">$999</span>
              <span className="text-lg font-bold text-amber-400">$499</span>
              <span className="text-[9px] text-white/30">setup</span>
            </div>
            <p className="text-xl font-bold text-white mt-1">$99<span className="text-sm font-normal text-white/40">/mo</span></p>
            <p className="text-[8px] text-amber-400/70 font-medium italic">Locked for life. Never goes up.</p>
          </div>
          <ul className="text-[9px] text-white/60 space-y-1.5 flex-1">
            <li>• Full platform access</li>
            <li>• Setup fee cut in half ($500 saved)</li>
            <li>• Rate locked forever — seat 26 pays full price</li>
            <li>• Referral discounts — earn down to $0/mo</li>
            <li>• Priority roadmap & feedback calls</li>
          </ul>
          <p className="text-[7px] text-amber-400/40 mt-3 border-t border-amber-500/10 pt-2 italic">First 25 founding partners only. This offer disappears permanently at seat 26.</p>
        </div>

        {/* Solo Store */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
          <div className="mb-3">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Solo Store</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white/50">$999</span>
              <span className="text-[9px] text-white/30">setup</span>
            </div>
            <p className="text-xl font-bold text-white mt-1">$199<span className="text-sm font-normal text-white/40">/mo</span></p>
          </div>
          <ul className="text-[9px] text-white/60 space-y-1.5 flex-1">
            <li>• Full platform access</li>
            <li>• Shrink AI Advisor</li>
            <li>• Real-time alerts</li>
            <li>• POS & CSV integration</li>
          </ul>
        </div>

        {/* Guild Member */}
        <div className="bg-accent-green/5 border border-accent-green/30 rounded-xl p-4 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-accent-green text-black text-[7px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-widest">Popular</div>
          <div className="mb-3">
            <h4 className="text-xs font-bold text-accent-green uppercase tracking-widest mb-1">Guild Member</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white/50">$999</span>
              <span className="text-[9px] text-white/30">setup</span>
            </div>
            <p className="text-xl font-bold text-white mt-1">$149<span className="text-sm font-normal text-white/40">/mo</span></p>
            <p className="text-[8px] text-accent-green/60">Per store (3+ locations)</p>
          </div>
          <ul className="text-[9px] text-white/60 space-y-1.5 flex-1">
            <li>• Everything in Solo</li>
            <li>• Guild Trade Board access</li>
            <li>• Cross-store analytics</li>
            <li>• $50/mo savings per store vs Solo</li>
          </ul>
        </div>

        {/* Shrink Station */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-white/20 text-white text-[7px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-widest">Full Kit</div>
          <div className="mb-3">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Shrink Station</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white/50">$1,499</span>
              <span className="text-[9px] text-white/30">setup</span>
            </div>
            <p className="text-xl font-bold text-white mt-1">$249<span className="text-sm font-normal text-white/40">/mo</span></p>
          </div>
          <ul className="text-[9px] text-white/60 space-y-1.5 flex-1">
            <li>• Everything in Guild</li>
            <li>• Dedicated pre-configured Android tablet</li>
            <li>• Branded wall mount + enclosure</li>
            <li>• White glove onboarding & setup</li>
            <li>• Physical Shrink presence in your store</li>
          </ul>
        </div>
      </div>
    ),
    instruction: "Select a plan to get started."
  }
];

interface PitchModeProps {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  onExit: () => void;
}

export default function PitchMode({ currentStep, onNext, onBack, onExit }: PitchModeProps) {
  const step = PITCH_STEPS[currentStep - 1];
  const progress = (currentStep / PITCH_STEPS.length) * 100;

  return (
    <div className="fixed inset-0 z-200 pointer-events-none">
      {/* Dark Overlay for the final step */}
      <AnimatePresence>
        {currentStep === PITCH_STEPS.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {/* Top Stepper */}
      <div className="absolute top-0 left-0 right-0 p-6 flex flex-col items-center pointer-events-auto">
        <div className="w-full max-w-xl bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-1 flex items-center gap-2 shadow-2xl">
          <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden ml-4">
            <motion.div
              className="h-full bg-accent-green"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </div>
          <div className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold text-white/60 uppercase tracking-widest">
            Step {currentStep} of {PITCH_STEPS.length}
          </div>
          <button
            onClick={onExit}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
          >
            <X className="w-4 h-4 text-white/40 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Coach Mark */}
      <div className={cn(
        "absolute flex flex-col items-center transition-all duration-500 pointer-events-auto",
        currentStep === PITCH_STEPS.length ? "inset-0 justify-center" : "bottom-12 left-1/2 -translate-x-1/2"
      )}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={cn(
            "bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] max-w-2xl w-full",
            currentStep === PITCH_STEPS.length && "border-accent-green/30 shadow-accent-green/5"
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-accent-green" />
            </div>
            <span className="text-[10px] font-bold text-accent-green uppercase tracking-widest">{step.title}</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
            {step.headline}
          </h2>

          <div className="mb-8">
            {step.content}
          </div>

          {currentStep < PITCH_STEPS.length && (
            <div className="flex items-center gap-2 mb-8 p-3 bg-white/5 rounded-xl border border-white/5">
              <Zap className="w-3 h-3 text-accent-green" />
              <p className="text-[10px] text-white/40 font-medium italic">{step.instruction}</p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white disabled:opacity-0 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              {currentStep < PITCH_STEPS.length ? (
                <button
                  onClick={onNext}
                  className="flex items-center gap-2 px-8 py-3 bg-accent-green text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-green/90 transition-all shadow-lg shadow-accent-green/20"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-8 py-3 bg-accent-green text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent-green/90 transition-all shadow-lg shadow-accent-green/20">
                    Start Pilot At This Store
                    <Rocket className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest text-white transition-all">
                    Book 30-Min Setup Call
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onExit}
              className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white/40 transition-colors"
            >
              Exit Pitch
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hint Arrows (Step 2) */}
      <AnimatePresence>
        {currentStep === 2 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute top-1/2 left-[300px] -translate-y-1/2 flex items-center gap-4"
            >
              <div className="w-12 h-1 bg-accent-green rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
              <div className="bg-accent-green text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                Interactive Wall
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-1/2 right-[400px] -translate-y-1/2 flex items-center gap-4 flex-row-reverse"
            >
              <div className="w-12 h-1 bg-accent-green rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
              <div className="bg-accent-green text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                High-Impact Ops
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
