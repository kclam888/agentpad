import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Circle } from 'lucide-react';
import Image from 'next/image';

const data = [
  { name: 'Jan', revenue: 800 },
  { name: 'Feb', revenue: 1600 },
  { name: 'Mar', revenue: 1400 },
  { name: 'Apr', revenue: 2000 },
  { name: 'May', revenue: 1800 },
  { name: 'Jun', revenue: 2200 },
  { name: 'Jul', revenue: 2000 },
  { name: 'Aug', revenue: 2400 },
  { name: 'Sep', revenue: 2200 },
  { name: 'Oct', revenue: 2800 },
  { name: 'Nov', revenue: 3000 },
  { name: 'Dec', revenue: 3200 },
];

const quickAccessCustomers = [
  { name: 'Alice Freeman', lastSeen: '2 days ago', amount: 200 },
  { name: 'Bob Smith', lastSeen: '5 days ago', amount: 100 },
  { name: 'Charlie Brown', lastSeen: '7 days ago', amount: 50 },
  { name: 'David Jones', lastSeen: '10 days ago', amount: 300 },
];

const tasks = [
  { id: 1, title: 'Send welcome email to new subscribers', completed: true },
  { id: 2, title: 'Follow up with customer about return', completed: false },
  { id: 3, title: 'Update product descriptions on website', completed: false },
];

const CRMDashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-[#F9FAFB] min-h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">CRM Dashboard</h1>
          <p className="text-gray-600 mt-1">Track customer relationships and sales performance</p>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Total revenue</div>
            <div className="text-2xl font-semibold text-gray-900">$1,500</div>
            <div className="text-emerald-600 text-sm mt-1">+5%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Active customers</div>
            <div className="text-2xl font-semibold text-gray-900">20</div>
            <div className="text-emerald-600 text-sm mt-1">+5%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-gray-600 text-sm mb-1">New customers</div>
            <div className="text-2xl font-semibold text-gray-900">5</div>
            <div className="text-emerald-600 text-sm mt-1">+5%</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-gray-600 text-sm mb-1">Pending tasks</div>
            <div className="text-2xl font-semibold text-gray-900">3</div>
            <div className="text-red-500 text-sm mt-1">+2</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Revenue Overview</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                  <YAxis stroke="#6B7280" fontSize={12} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366F1"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Access */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Quick access</h2>
              <div className="space-y-4">
                {quickAccessCustomers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer">
                    <div>
                      <div className="font-medium text-gray-900">{customer.name}</div>
                      <div className="text-sm text-gray-600">Last seen {customer.lastSeen}</div>
                    </div>
                    <div className="text-gray-600">${customer.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Tasks</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 mt-0.5" />
                    )}
                    <span className={task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}>
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CRMDashboard; 