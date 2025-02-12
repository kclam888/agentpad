import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
        {/* Settings content will go here */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">Settings feature coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
} 