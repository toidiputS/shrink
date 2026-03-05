import React, { useState } from 'react';
import {
  Database,
  Plug,
  FileJson,
  ArrowDown,
  RefreshCw,
  Globe,
  Code,
  CheckCircle2,
  X,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SchemaField {
  name: string;
  type: string;
  description: string;
}

interface DataModel {
  title: string;
  rows: string;
  fields: string;
  columns: SchemaField[];
}

const DATA_MODELS: DataModel[] = [
  {
    title: 'Inventory Master',
    rows: '1,240 records',
    fields: '17 fields',
    columns: [
      { name: 'SKU', type: 'String', description: 'Unique product identifier' },
      { name: 'Product Name', type: 'String', description: 'Full commercial name' },
      { name: 'Category', type: 'Enum', description: 'Product classification' },
      { name: 'On-Hand', type: 'Integer', description: 'Current stock level' },
      { name: 'Margin', type: 'Float', description: 'Profit percentage' },
      { name: 'Reorder Point', type: 'Integer', description: 'Low stock threshold' },
      { name: 'Status', type: 'Enum', description: 'Stock health status' }
    ]
  },
  {
    title: 'Sales Data',
    rows: '45,820 records',
    fields: '12 fields',
    columns: [
      { name: 'Date', type: 'Timestamp', description: 'Transaction time' },
      { name: 'SKU', type: 'String', description: 'Product identifier' },
      { name: 'Units Sold', type: 'Integer', description: 'Quantity sold' },
      { name: 'Revenue', type: 'Decimal', description: 'Total sale amount' },
      { name: 'Department', type: 'String', description: 'Store section' }
    ]
  },
  {
    title: 'Suppliers',
    rows: '12 records',
    fields: '8 fields',
    columns: [
      { name: 'Supplier ID', type: 'String', description: 'Unique vendor ID' },
      { name: 'Name', type: 'String', description: 'Company name' },
      { name: 'Contact', type: 'String', description: 'Primary contact person' },
      { name: 'Email', type: 'String', description: 'Business email' }
    ]
  },
  {
    title: 'Purchase Orders',
    rows: '840 records',
    fields: '14 fields',
    columns: [
      { name: 'PO Number', type: 'String', description: 'Unique order number' },
      { name: 'SKU', type: 'String', description: 'Product identifier' },
      { name: 'Order Date', type: 'Date', description: 'Date order placed' },
      { name: 'Delivery Date', type: 'Date', description: 'Expected arrival' },
      { name: 'Quantity', type: 'Integer', description: 'Units ordered' }
    ]
  },
  {
    title: 'Shrink Log',
    rows: '156 records',
    fields: '9 fields',
    columns: [
      { name: 'Date', type: 'Date', description: 'Loss occurrence date' },
      { name: 'SKU', type: 'String', description: 'Product identifier' },
      { name: 'Loss Type', type: 'Enum', description: 'Theft, Damage, Expiry' },
      { name: 'Units Lost', type: 'Integer', description: 'Quantity lost' },
      { name: 'Cost Impact', type: 'Decimal', description: 'Financial loss' }
    ]
  },
  {
    title: 'Deli Freshness',
    rows: '312 records',
    fields: '11 fields',
    columns: [
      { name: 'Item', type: 'String', description: 'Prepared food item' },
      { name: 'Prep Date', type: 'Timestamp', description: 'Preparation time' },
      { name: 'Expiry Date', type: 'Timestamp', description: 'Safety threshold' },
      { name: 'Temperature Log', type: 'Float', description: 'Storage temp (°F)' }
    ]
  }
];

export default function DataIntegrationView() {
  const [selectedModel, setSelectedModel] = useState<DataModel | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-8 min-w-0">
      {/* Left Section: Data Files */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-5 h-5 text-accent-green" />
          <h2 className="text-xl font-bold tracking-tight">Production Data Models (Ready to Connect)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA_MODELS.map((model) => (
            <div
              key={model.title}
              className="bg-[#0F0F0F] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors shadow-xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-green/10 transition-colors">
                    <FileJson className="w-5 h-5 text-white/40 group-hover:text-accent-green transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white/90">{model.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-white/40">{model.rows}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-[10px] text-white/40">{model.fields}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent-green/10 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-accent-green" />
                  <span className="text-[10px] font-bold text-accent-green uppercase">Connected</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedModel(model)}
                className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white/60 transition-colors"
              >
                View Schema
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Architecture Overview */}
      <div className="w-full lg:w-[400px] shrink-0">
        <div className="flex items-center gap-3 mb-6">
          <Plug className="w-5 h-5 text-accent-green" />
          <h2 className="text-xl font-bold tracking-tight">How It Works</h2>
        </div>

        <div className="bg-[#0F0F0F] border border-white/5 rounded-xl p-8 shadow-xl mb-8">
          <div className="flex flex-col items-center gap-4">
            {/* Box 1 */}
            <div className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Store POS / CSV Upload</span>
            </div>

            <ArrowDown className="w-5 h-5 text-white/10" />

            {/* Box 2 */}
            <div className="bg-accent-green/10 border border-accent-green/30 px-6 py-4 rounded-xl shadow-lg shadow-accent-green/5 group hover:border-accent-green/50 transition-all">
              <p className="text-xs font-bold text-accent-green uppercase tracking-widest text-center">Data Pipeline (ETL)</p>
            </div>

            <ArrowDown className="w-5 h-5 text-white/10" />

            {/* Box 3 */}
            <div className="w-full py-4 bg-accent-green/10 border border-accent-green/30 rounded-xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-green">Tobacco Manager API</span>
            </div>

            <ArrowDown className="w-5 h-5 text-white/10" />

            {/* Box 4 */}
            <div className="w-full py-4 bg-accent-green border border-accent-green rounded-xl text-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="text-xs font-bold uppercase tracking-widest text-black">Live Dashboard</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/90">Real-Time Sync</h4>
              <p className="text-[10px] text-white/40 mt-0.5">Updates every 5 minutes from POS</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/90">Multi-Store Ready</h4>
              <p className="text-[10px] text-white/40 mt-0.5">Supports franchise networks</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center shrink-0">
              <Code className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/90">API Access</h4>
              <p className="text-[10px] text-white/40 mt-0.5">REST endpoints for integrations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Modal */}
      <AnimatePresence>
        {selectedModel && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModel(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedModel.title} Schema</h3>
                    <p className="text-xs text-white/40">Data Structure Definition</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-white/40" />
                </button>
              </div>

              <div className="p-6">
                <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10">
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Field Name</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Type</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-white/40">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {selectedModel.columns.map((col) => (
                        <tr key={col.name} className="hover:bg-white/2 transition-colors">
                          <td className="p-4 text-sm font-bold text-white/80">{col.name}</td>
                          <td className="p-4">
                            <span className="text-[10px] px-1.5 py-0.5 bg-accent-green/10 text-accent-green rounded font-mono border border-accent-green/20">{col.type}</span>
                          </td>
                          <td className="p-4 text-xs text-white/40">{col.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-6 bg-white/5 border-t border-white/10 flex items-center gap-3">
                <Info className="w-4 h-4 text-accent-green" />
                <p className="text-[10px] text-white/40 leading-relaxed">
                  This schema is standardized for seamless integration with major POS systems including NCR, Gilbarco, and Verifone. Custom mappings are available upon request.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
