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
import SecurityView from './components/SecurityView';
import SettingsView from './components/SettingsView';
import PitchMode from './components/PitchMode';
import EfficiencyChart from './components/EfficiencyChart';
import HighImpactOps from './components/HighImpactOps';
import ProductSliderPanel from './components/ProductSliderPanel';
import InventoryReportModal from './components/modals/InventoryReportModal';
import SplashScreen from './components/SplashScreen';
import AiAdvisorButton from './components/ai/AiAdvisorButton';
import AiAdvisorPanel from './components/ai/AiAdvisorPanel';
import { useAiAdvisor } from './hooks/useAiAdvisor';
import { TobaccoCategory, Product, ViewMode } from './types';
import { MOCK_CATEGORIES } from './constants';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<TobaccoCategory>('Cigarettes');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [moveToTradersGuildItem, setMoveToTradersGuildItem] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('StoreOverview');
  const [isPitchModeOpen, setIsPitchModeOpen] = useState(false);
  const [pitchStep, setPitchStep] = useState(1);
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const aiAdvisor = useAiAdvisor(MOCK_CATEGORIES);
  const [showSplash, setShowSplash] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);

  const currentCategoryData = useMemo(() => {
    return MOCK_CATEGORIES.find(c => c.id === activeCategory) || MOCK_CATEGORIES[0];
  }, [activeCategory]);

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

  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
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
          setViewMode('TobaccoWall');
        }}
        onViewModeChange={setViewMode}
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
                onViewModeChange={setViewMode}
                onGenerateReport={() => setShowReportModal(true)}
              />
            )}

            {viewMode === 'FullInventory' ? (
              <FullInventoryView onViewModeChange={setViewMode} />
            ) : viewMode === 'DataIntegration' ? (
              <DataIntegrationView />
            ) : viewMode === 'StoreOverview' ? (
              <StoreOverview onViewModeChange={setViewMode} />
            ) : viewMode === 'TradersGuild' ? (
              <TradersGuildView />
            ) : viewMode === 'DeliHotFoods' ? (
              <DeliHotFoodsView onProductClick={setSelectedProduct} />
            ) : viewMode === 'GroceryDryGoods' ? (
              <GroceryDryGoodsView
                onProductClick={setSelectedProduct}
                onMoveToTradersGuild={setMoveToTradersGuildItem}
              />
            ) : viewMode === 'AlcoholStore' ? (
              <AlcoholStoreView
                onProductClick={setSelectedProduct}
                onMoveToTradersGuild={setMoveToTradersGuildItem}
              />
            ) : viewMode === 'Security' ? (
              <SecurityView />
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
              categories={MOCK_CATEGORIES}
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
    </div>
  );
}
