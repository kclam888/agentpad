'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContentLayout from '@/components/layout/ContentLayout';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const solutionLinks = [
  { label: 'Overview', href: '/solutions' },
  { label: 'Industries', href: '/solutions/industries' },
  { label: 'Case Studies', href: '/solutions/case-studies' },
];

const industries = [
  { name: 'All Industries', icon: '🏢' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Finance', icon: '🏦' },
  { name: 'Retail', icon: '🛍️' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Technology', icon: '💻' },
];

const SolutionCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="bg-white rounded-lg shadow-sm border p-6">
    <div className="relative aspect-video mb-4">
      <Image
        src={image}
        alt={title}
        fill
        className="rounded-md object-cover"
      />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const CaseStudyCard = ({ company, description, image }: { company: string; description: string; image: string }) => (
  <div className="bg-white rounded-lg shadow-sm border p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="relative w-16 h-16">
        <Image
          src={image}
          alt={company}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold">{company}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const IndustrySelector = ({ selectedIndustry, onSelect }: { selectedIndustry: string; onSelect: (industry: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-64 px-4 py-2 bg-white border rounded-lg flex items-center justify-between"
      >
        <span>{selectedIndustry}</span>
        <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full md:w-64 mt-2 bg-white border rounded-lg shadow-lg">
          {industries.map((industry) => (
            <button
              key={industry.name}
              onClick={() => {
                onSelect(industry.name);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <span>{industry.icon}</span>
              <span>{industry.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const SolutionsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  return (
    <MainLayout>
      <ContentLayout sidebarLinks={solutionLinks} title="Solutions">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-4">Enterprise Solutions</h1>
            <p className="text-lg text-gray-600">
              Discover how Ema AI can transform your business with cutting-edge artificial intelligence solutions.
            </p>
          </div>

          {/* Industry Selector */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Select Your Industry</h2>
            <IndustrySelector
              selectedIndustry={selectedIndustry}
              onSelect={setSelectedIndustry}
            />
          </div>

          {/* Solutions Grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Featured Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SolutionCard
                title="Process Automation"
                description="Streamline your workflows with intelligent automation"
                image="https://picsum.photos/400/300?random=1"
              />
              <SolutionCard
                title="Data Analytics"
                description="Transform data into actionable insights"
                image="https://picsum.photos/400/300?random=2"
              />
              <SolutionCard
                title="Customer Service"
                description="24/7 intelligent customer support"
                image="https://picsum.photos/400/300?random=3"
              />
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CaseStudyCard
                company="TechCorp Inc."
                description="Increased efficiency by 300% with AI automation"
                image="https://picsum.photos/200/200?random=1"
              />
              <CaseStudyCard
                company="Global Solutions Ltd."
                description="Reduced customer response time by 80%"
                image="https://picsum.photos/200/200?random=2"
              />
            </div>
          </div>

          {/* Comparison Table */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Solution Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left border-b">Features</th>
                    <th className="p-4 text-left border-b">Basic</th>
                    <th className="p-4 text-left border-b">Professional</th>
                    <th className="p-4 text-left border-b">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b">Automation</td>
                    <td className="p-4 border-b">Basic</td>
                    <td className="p-4 border-b">Advanced</td>
                    <td className="p-4 border-b">Custom</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Analytics</td>
                    <td className="p-4 border-b">Limited</td>
                    <td className="p-4 border-b">Full</td>
                    <td className="p-4 border-b">Enterprise</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Support</td>
                    <td className="p-4 border-b">Email</td>
                    <td className="p-4 border-b">24/7 Chat</td>
                    <td className="p-4 border-b">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default SolutionsPage; 