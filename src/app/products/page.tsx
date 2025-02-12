'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductLayout from '@/components/layout/ProductLayout';
import QuickViewModal from '@/components/features/QuickViewModal';
import { Search, Eye } from 'lucide-react';
import Image from 'next/image';

const FilterPanel = () => (
  <div className="space-y-6">
    <div>
      <h3 className="font-medium mb-3">Categories</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded text-[#27AE60]" />
          <span>Automation</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded text-[#27AE60]" />
          <span>Analytics</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded text-[#27AE60]" />
          <span>Integration</span>
        </label>
      </div>
    </div>

    <div>
      <h3 className="font-medium mb-3">Price Range</h3>
      <input
        type="range"
        min="0"
        max="1000"
        className="w-full accent-[#27AE60]"
      />
      <div className="flex justify-between text-sm mt-2">
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>
  </div>
);

interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView: () => void }) => (
  <div className="bg-white rounded-lg shadow-sm border p-4">
    <div className="relative aspect-video mb-4 group">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="rounded-md object-cover"
      />
      <button
        onClick={onQuickView}
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <div className="flex items-center gap-2 text-white">
          <Eye size={20} />
          <span>Quick View</span>
        </div>
      </button>
    </div>
    <h3 className="font-semibold mb-2">{product.title}</h3>
    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
    <div className="flex items-center justify-between">
      <span className="font-medium">{product.price}</span>
      <button className="bg-[#27AE60] text-white px-4 py-2 rounded-md text-sm">
        Learn More
      </button>
    </div>
  </div>
);

const SAMPLE_PRODUCTS: Product[] = [
  {
    title: "AI Assistant Pro",
    description: "Advanced AI automation for your business needs",
    price: "$299/mo",
    image: "https://picsum.photos/400/300?random=1",
    features: [
      "24/7 Automated Support",
      "Natural Language Processing",
      "Custom Workflow Integration",
      "Analytics Dashboard",
      "Multi-language Support"
    ]
  },
  {
    title: "Data Insights Suite",
    description: "Transform your data into actionable insights",
    price: "$399/mo",
    image: "https://picsum.photos/400/300?random=2",
    features: [
      "Real-time Analytics",
      "Predictive Modeling",
      "Custom Reports",
      "Data Visualization",
      "API Integration"
    ]
  },
  // ... more products with similar structure
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <MainLayout>
      <ProductLayout filterPanel={<FilterPanel />}>
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SAMPLE_PRODUCTS.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              onQuickView={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {selectedProduct && (
          <QuickViewModal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            product={selectedProduct}
          />
        )}
      </ProductLayout>
    </MainLayout>
  );
};

export default ProductsPage; 