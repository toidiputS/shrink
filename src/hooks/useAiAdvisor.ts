import { useState, useCallback } from 'react';
import { ChatMessage, askAdvisor } from '../services/aiAdvisor';
import { CategoryData } from '../types';

export type OracleNodeType =
    // Nexus Nodes
    | 'xenon' | 'quota' | 'centurion' | 'core' | 'yield_plus'
    | 'flux' | 'bulwark' | 'xray' | 'shelf' | 'util' | 'net' | 'locus'
    // Operational Tools
    | 'restock' | 'cashflow' | 'comply' | 'shift' | 'qc_check'
    | 'crisis' | 'pricing_sense' | 'view';

const NODE_PROMPTS: Record<OracleNodeType, string> = {
    // --- Nexus Nodes ---
    xenon: "Run a full XENON diagnostic on my store. Scan every category — inventory levels, margin health, compliance gaps, and operational risks. Give me the complete health report with scores.",
    quota: "Activate QUOTA. Show me my KPIs — sell-through rates, shrink rates, margin targets, and restock efficiency. Am I hitting my numbers? Where am I falling short?",
    centurion: "Deploy CENTURION. Analyze my pricing architecture — pricing floors, ceilings, and margin erosion by category. Where am I leaving money on the table?",
    core: "Activate CORE. Audit my unit economics — what's my true cost vs. margin per SKU? Which items are actually profitable and which are draining resources?",
    yield_plus: "Run YIELD+ analysis. Find my dead stock and untapped assets — what's stagnant, what's barely moving, and what should I push to the Traders Guild to recover capital?",
    flux: "Activate FLUX. What seasonal pivots should I be making right now? Are there trends, weather shifts, or local events I should be exploiting?",
    bulwark: "Deploy BULWARK. Analyze my customer retention — are purchasing patterns changing? Are regulars disappearing? What retention strategies should I implement?",
    xray: "Run X-RAY leak detection. Where exactly is my store bleeding money? Find waste hotspots, potential theft patterns, process failures, and all shrink sources.",
    shelf: "Activate SHELF. How should I optimize product positioning to maximize sell-through and reduce waste? Which products need repositioning?",
    util: "Deploy UTIL efficiency audit. Where are we wasting time and resources? Analyze restocking patterns, labor allocation, and operational bottlenecks.",
    net: "Activate NET. Generate SOPs for my critical processes — restocking protocols, expiration checks, and shrink prevention routines. Make them step-by-step.",
    locus: "Deploy LOCUS. Track purchasing behavior patterns — what's selling hot vs. cold? Predict demand shifts and help me plan restocking.",

    // --- Operational Tools ---
    restock: "Activate RESTOCK. Build reorder-point models for my inventory — calculate safety stock levels, lead times, and optimal order quantities. Prevent stockouts AND overstock.",
    cashflow: "Run CASHFLOW analysis. Project my cash position over the next 4-13 weeks based on current sales velocity, inventory costs, and patterns. Am I going to hit a crunch?",
    comply: "Deploy COMPLY. Generate compliance checklists for my store — FIFO rotation, temperature logs, expiration audits, health code readiness. What am I missing?",
    shift: "Activate SHIFT scheduling. Based on my sales patterns, when do I need the most staff? Optimize my scheduling against traffic patterns and restock needs.",
    qc_check: "Run QC-CHECK. Create standardized quality control checklists for each shift — what should opening, mid, and closing shifts be checking?",
    crisis: "Deploy CRISIS. Build crisis response plans for my store — what if we have a supply chain disruption, major theft event, or equipment failure? What's the playbook?",
    pricing_sense: "Activate PRICING-SENSE. Model how price changes would affect my demand and margins. Where's the sweet spot between volume and profit per category?",
    view: "Deploy VIEW forecasting. Project my demand and trends 30-90 days out. What should I be stocking up on? What's going to slow down? Help me plan ahead.",
};

export function useAiAdvisor(inventoryData: CategoryData[]) {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = useCallback(async (content: string) => {
        setIsLoading(true);
        setError(null);

        const userMessage: ChatMessage = { role: 'user', content };
        const newMessages = [...messages, userMessage];

        // Optimistically add user message to UI
        setMessages(newMessages);

        try {
            const response = await askAdvisor(newMessages, inventoryData);

            const assistantMessage: ChatMessage = { role: 'assistant', content: response };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (err: any) {
            setError(err.message || 'Failed to communicate with AI Advisor');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [messages, inventoryData]);

    const clearChat = useCallback(() => {
        setMessages([]);
        setError(null);
    }, []);

    const generateReport = useCallback((type: OracleNodeType) => {
        const prompt = NODE_PROMPTS[type];
        if (prompt) {
            sendMessage(prompt);
        }
    }, [sendMessage]);

    return {
        messages,
        isLoading,
        error,
        sendMessage,
        clearChat,
        generateReport
    };
}
