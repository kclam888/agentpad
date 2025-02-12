import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Documents</h1>
        {/* Documents content will go here */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">Documents feature coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
} 