import React, { useState, useMemo } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MoveToTradersGuildModal from './components/modals/MoveToTradersGuildModal';
import KPIStrip from './components/KPIStrip';
import TobaccoWall from './components/TobaccoWall';
import FullInventoryView from './components/FullInventoryView';
import DataIntegrationView from './components/DataIntegrationView';
import StoreOverview from './components/StoreOverview';
import TradersGuildView from './components/TradersGuildView';
import DeliHotFoodsView from './components/DeliHotFoodsView';
import GroceryDryGoodsView from './components/GroceryDryGoodsView';
import AlcoholStoreView from './components/AlcoholStoreView';
import LotteryView from './components/LotteryView';
import SecurityView from './components/SecurityView';
import NetworkView from './components/NetworkView';
import SettingsView from './components/SettingsView';
import PitchMode from './components/PitchMode';
import EfficiencyChart from './components/EfficiencyChart';
import HighImpactOps from './components/HighImpactOps';
import ProductSliderPanel from './components/ProductSliderPanel';
import InventoryReportModal from './components/modals/InventoryReportModal';
import SplashScreen from './components/SplashScreen';
import AiAdvisorButton from './components/ai/AiAdvisorButton';
import AiAdvisorPanel from './components/ai/AiAdvisorPanel';
import CodeScanner from './components/CodeScanner';
import LoginView from './components/LoginView';
import SetPasswordView from './components/SetPasswordView';
import DemoBanner from './components/DemoBanner';
import { useAuth } from './context/AuthContext';
import { useAiAdvisor } from './hooks/useAiAdvisor';
import { useInventory } from './hooks/useInventory';
import { TobaccoCategory, Product, ViewMode } from './types';
import { MOCK_CATEGORIES } from './constants';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const { categories: activeCategories, deliProducts, groceryProducts, alcoholProducts, isLoading: isInventoryLoading } = useInventory();
  const [activeCategory, setActiveCategory] = useState<TobaccoCategory>('Cigarettes');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [moveToTradersGuildItem, setMoveToTradersGuildItem] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('StoreOverview');
  const [isPitchModeOpen, setIsPitchModeOpen] = useState(false);
  const [pitchStep, setPitchStep] = useState(1);
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const aiAdvisor = useAiAdvisor(activeCategories);
  const [showSplash, setShowSplash] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);
  const [forcePasswordSetup, setForcePasswordSetup] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scannerMode, setScannerMode] = useState<'product' | 'build'>('product');

  const { session, profile, loading } = useAuth();

  React.useEffect(() => {
    if (session?.user && (session.user as any).amr) {
      const amr = (session.user as any).amr as Array<{ method: string }>;
      const methods = amr.map(a => a.method);
      if (methods.includes('magiclink') || methods.includes('recovery')) {
        setForcePasswordSetup(true);
      }
    }
  }, [session]);

  const currentCategoryData = useMemo(() => {
    return activeCategories.find(c => c.id === activeCategory) || activeCategories[0] || MOCK_CATEGORIES[0];
  }, [activeCategory, activeCategories]);

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    if (mode !== 'TobaccoWall' && mode !== 'FullInventory') {
      setActiveCategory('Cigarettes');
    }
  };

  const handleStartPitch = () => {
    setIsPitchModeOpen(true);
    setPitchStep(1);
    setViewMode('StoreOverview');
  };

  const handleNextPitch = () => {
    const nextStep = pitchStep + 1;
    setPitchStep(nextStep);

    // Switch pages based on step
    switch (nextStep) {
      case 2:
        setViewMode('TobaccoWall');
        setActiveCategory('Cigarettes');
        break;
      case 3:
        setViewMode('DeliHotFoods');
        break;
      case 4:
        setViewMode('GroceryDryGoods');
        break;
      case 5:
        setViewMode('AlcoholStore');
        break;
      case 6:
        setViewMode('FullInventory');
        break;
      case 7:
        setViewMode('Security');
        break;
      case 8:
        setViewMode('DataIntegration');
        break;
      case 9:
        setViewMode('TradersGuild');
        break;
      case 10:
        // Pricing overlay — stay on current view
        break;
    }
  };

  const handleBackPitch = () => {
    const prevStep = pitchStep - 1;
    setPitchStep(prevStep);

    switch (prevStep) {
      case 1:
        setViewMode('StoreOverview');
        break;
      case 2:
        setViewMode('TobaccoWall');
        setActiveCategory('Cigarettes');
        break;
      case 3:
        setViewMode('DeliHotFoods');
        break;
      case 4:
        setViewMode('GroceryDryGoods');
        break;
      case 5:
        setViewMode('AlcoholStore');
        break;
      case 6:
        setViewMode('FullInventory');
        break;
      case 7:
        setViewMode('Security');
        break;
      case 8:
        setViewMode('DataIntegration');
        break;
      case 9:
        setViewMode('TradersGuild');
        break;
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-bg-primary">
        <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session || !profile) {
    return <LoginView />;
  }

  if (forcePasswordSetup) {
    return <SetPasswordView onComplete={() => setForcePasswordSetup(false)} />;
  }

  return (
    <div className="flex flex-col h-screen bg-bg-primary overflow-hidden">
      <DemoBanner />
      <div className="flex flex-1 overflow-hidden relative">
        <AnimatePresence>
          {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>
        <Sidebar
          activeCategory={activeCategory}
          viewMode={viewMode}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
            setSelectedProduct(null);
            handleViewModeChange('TobaccoWall');
          }}
          onViewModeChange={handleViewModeChange}
          onStartPitch={handleStartPitch}
        />

        <main className="flex-1 flex flex-col p-4 md:p-6 overflow-y-auto custom-scrollbar relative min-w-0">
          {/* Hamburger top bar */}
          <div className="flex items-center gap-3 mb-4 shrink-0">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
            >
              <Menu className="w-5 h-5 text-white/70" />
            </button>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg tracking-tight text-white/90">Shrink</h1>
              <span className="text-[10px] text-white/30 uppercase tracking-widest">STOP THE BLEED</span>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${viewMode}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col min-w-0"
            >
              {(viewMode === 'TobaccoWall' || viewMode === 'FullInventory') && (
                <Header
                  category={currentCategoryData}
                  viewMode={viewMode}
                  onViewModeChange={handleViewModeChange}
                  onGenerateReport={() => setShowReportModal(true)}
                />
              )}

              {viewMode === 'FullInventory' ? (
                <FullInventoryView
                  onViewModeChange={handleViewModeChange}
                  deliProducts={deliProducts}
                  groceryProducts={groceryProducts}
                  alcoholProducts={alcoholProducts}
                  tobaccoCategories={activeCategories}
                />
              ) : viewMode === 'DataIntegration' ? (
                <DataIntegrationView />
              ) : viewMode === 'StoreOverview' ? (
                <StoreOverview onViewModeChange={handleViewModeChange} />
              ) : viewMode === 'TradersGuild' ? (
                <TradersGuildView />
              ) : viewMode === 'DeliHotFoods' ? (
                <DeliHotFoodsView onProductClick={setSelectedProduct} products={deliProducts} />
              ) : viewMode === 'GroceryDryGoods' ? (
                <GroceryDryGoodsView
                  onProductClick={setSelectedProduct}
                  onMoveToTradersGuild={setMoveToTradersGuildItem}
                  products={groceryProducts}
                />
              ) : viewMode === 'AlcoholStore' ? (
                <AlcoholStoreView
                  onProductClick={setSelectedProduct}
                  onMoveToTradersGuild={setMoveToTradersGuildItem}
                  products={alcoholProducts}
                />
              ) : viewMode === 'Lottery' ? (
                <LotteryView />
              ) : viewMode === 'Security' ? (
                <SecurityView />
              ) : viewMode === 'Network' ? (
                <NetworkView />
              ) : viewMode === 'Settings' ? (
                <SettingsView />
              ) : (
                <div className="flex flex-col lg:flex-row gap-6 items-start min-w-0">
                  <div className="flex-1 flex flex-col min-w-0">
                    <TobaccoWall
                      products={currentCategoryData.products}
                      onProductClick={setSelectedProduct}
                      onMoveToTradersGuild={setMoveToTradersGuildItem}
                    />

                    <div className="mt-6 pb-6">
                      <KPIStrip stats={currentCategoryData.stats} />
                    </div>
                  </div>

                  <div className="sticky top-6 shrink-0">
                    <HighImpactOps />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {moveToTradersGuildItem && (
              <MoveToTradersGuildModal
                isOpen={!!moveToTradersGuildItem}
                onClose={() => setMoveToTradersGuildItem(null)}
                product={moveToTradersGuildItem}
              />
            )}
          </AnimatePresence>

          {isPitchModeOpen && (
            <PitchMode
              currentStep={pitchStep}
              onNext={handleNextPitch}
              onBack={handleBackPitch}
              onExit={() => setIsPitchModeOpen(false)}
            />
          )}

          <AnimatePresence>
            {showReportModal && (
              <InventoryReportModal
                isOpen={showReportModal}
                onClose={() => setShowReportModal(false)}
                categories={activeCategories}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedProduct && (
              <ProductSliderPanel
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
                onMoveToTradersGuild={setMoveToTradersGuildItem}
              />
            )}
          </AnimatePresence>
        </main>

        {/* AI Advisor */}
        <AiAdvisorButton
          onClick={() => setIsAiPanelOpen(true)}
          hasMessages={aiAdvisor.messages.length > 0}
        />
        <AiAdvisorPanel
          isOpen={isAiPanelOpen}
          onClose={() => setIsAiPanelOpen(false)}
          messages={aiAdvisor.messages}
          isLoading={aiAdvisor.isLoading}
          error={aiAdvisor.error}
          onSendMessage={aiAdvisor.sendMessage}
          onClearChat={aiAdvisor.clearChat}
          onGenerateReport={aiAdvisor.generateReport}
        />

        {/* Code Scanner Button - Fixed position bottom right */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-30">
          {/* Build Scan Button */}
          <button
            onClick={() => {
              setScannerMode('build');
              setIsScannerOpen(true);
            }}
            className="w-12 h-12 rounded-full bg-[#1a1a2e] hover:bg-[#16213e] border border-white/10 flex items-center justify-center transition-all shadow-lg hover:shadow-xl group"
            title="Build Scan - Analyze all products"
          >
            <span className="text-[10px] font-bold text-white/60 group-hover:text-accent-green transition-colors">ALL</span>
          </button>

          {/* Product Scan Button */}
          <button
            onClick={() => {
              setScannerMode('product');
              setIsScannerOpen(true);
            }}
            className="w-14 h-14 rounded-full bg-accent-green hover:bg-accent-green-bright flex items-center justify-center transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            title="Scan Product Code"
          >
            <svg className="w-6 h-6 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 12H5a2 2 0 00-2 2v2m0-6V5a2 2 0 012-2h2m6 0h2a2 2 0 012 2v2m-6 0h6M7 12h10M7 7h10M7 17h10" />
            </svg>
          </button>
        </div>

        {/* Code Scanner Modal */}
        <CodeScanner
          isOpen={isScannerOpen}
          onClose={() => setIsScannerOpen(false)}
          products={[
            ...activeCategories.flatMap(c => c.products),
            ...deliProducts,
            ...groceryProducts,
            ...alcoholProducts
          ]}
          onProductFound={(product) => {
            setSelectedProduct(product);
          }}
          scanMode={scannerMode}
        />
      </div>
    </div>
  );
}
