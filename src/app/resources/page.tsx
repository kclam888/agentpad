'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContentLayout from '@/components/layout/ContentLayout';
import DownloadModal from '@/components/features/DownloadModal';
import { Search, Download } from 'lucide-react';

const resourceLinks = [
  { label: 'All Resources', href: '/resources' },
  { label: 'Documentation', href: '/resources/documentation' },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Case Studies', href: '/resources/case-studies' },
];

interface Resource {
  title: string;
  type: string;
  description: string;
  downloadUrl: string;
}

const SAMPLE_RESOURCES: Resource[] = [
  {
    title: "Getting Started Guide",
    type: "Guide",
    description: "Learn the basics of implementing Ema AI in your workflow",
    downloadUrl: "#"
  },
  {
    title: "API Documentation",
    type: "Documentation",
    description: "Complete API reference for developers",
    downloadUrl: "#"
  },
  {
    title: "E-commerce Integration",
    type: "Case Study",
    description: "How RetailCo improved customer service with Ema AI",
    downloadUrl: "#"
  },
  {
    title: "Advanced Features",
    type: "Tutorial",
    description: "Deep dive into Ema AI's advanced capabilities",
    downloadUrl: "#"
  }
];

const ResourceCard = ({ resource, onDownload }: { resource: Resource; onDownload: () => void }) => (
  <div className="bg-white rounded-lg shadow-sm border p-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#27AE60] bg-opacity-10 text-[#27AE60] mb-2">
          {resource.type}
        </span>
        <h3 className="font-semibold">{resource.title}</h3>
      </div>
      <button 
        onClick={onDownload}
        className="text-[#27AE60] hover:text-[#219653] transition-colors"
      >
        <Download size={20} />
      </button>
    </div>
    <p className="text-sm text-gray-600">{resource.description}</p>
  </div>
);

const ResourcesPage = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Guides', 'Documentation', 'Case Studies', 'Videos'];

  return (
    <MainLayout>
      <ContentLayout sidebarLinks={resourceLinks} title="Resources">
        <div className="space-y-8">
          {/* Search Section */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-3 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Resource Categories */}
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-[#27AE60] text-white'
                    : 'border border-gray-200 hover:border-[#27AE60] hover:text-[#27AE60]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAMPLE_RESOURCES.map((resource, index) => (
              <ResourceCard
                key={index}
                resource={resource}
                onDownload={() => setSelectedResource(resource)}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 border-2 border-[#27AE60] text-[#27AE60] rounded-md hover:bg-[#27AE60] hover:text-white transition-colors">
              Load More Resources
            </button>
          </div>

          {/* Download Modal */}
          {selectedResource && (
            <DownloadModal
              isOpen={!!selectedResource}
              onClose={() => setSelectedResource(null)}
              resource={selectedResource}
            />
          )}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default ResourcesPage; 