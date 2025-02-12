'use client';

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Sparkles } from 'lucide-react';

export default function AgentsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold text-gray-900">AI Agents</h1>
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-gray-600 mt-1">Manage and deploy your AI agents</p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">AI Agents Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Our AI agents feature is currently in development. Stay tuned for powerful AI automation capabilities!
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
} 