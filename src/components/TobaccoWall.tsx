import React from 'react';
import { Product } from '../types';
import ShelfPlanogramView from './ShelfPlanogramView';

interface TobaccoWallProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onMoveToTradersGuild?: (product: Product) => void;
}

const TobaccoWall: React.FC<TobaccoWallProps> = ({ products, onProductClick }) => {
  return (
    <div className="flex flex-col gap-6 h-full bg-bg-primary rounded-xl border border-white/5 overflow-hidden">
      <ShelfPlanogramView
        title="Tobacco Wall"
        subtitle="Back Wall · Section 1"
        sectionCode="TOB"
        products={products}
        onProductClick={onProductClick}
        isCoolerDoor={false}
        rows={11}
        cols={8}
      />
    </div>
  );
};

export default TobaccoWall;
