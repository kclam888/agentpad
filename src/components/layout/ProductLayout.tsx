'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface ProductLayoutProps {
  children: React.ReactNode;
  filterPanel: React.ReactNode;
}

const ProductLayout = ({ children, filterPanel }: ProductLayoutProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden sticky top-0 z-20 bg-white border-b">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full px-8 py-4 flex items-center justify-center gap-2"
        >
          <Filter size={20} />
          <span>Show Filters</span>
        </button>
      </div>

      <div className="flex">
        {/* Desktop Filter Panel */}
        <aside className="hidden lg:block w-1/4 bg-white border-r min-h-screen sticky top-0">
          <div className="p-8">
            <h2 className="font-semibold mb-6">Filters</h2>
            {filterPanel}
          </div>
        </aside>

        {/* Mobile Filter Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                {filterPanel}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-8 py-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout; 