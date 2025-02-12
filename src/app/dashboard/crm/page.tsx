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
          <h1 className="text-3xl font-bold text-[#111827]">Welcome to AgentPad CRM</h1>
          <p className="text-[#6B7280] mt-2">Manage your customers, track interactions, and drive sales effortlessly.</p>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#6B7280] text-sm mb-2">Total revenue</div>
            <div className="text-2xl font-bold text-[#111827]">$1,500</div>
            <div className="text-[#10B981] text-sm">+5%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#6B7280] text-sm mb-2">Active customers</div>
            <div className="text-2xl font-bold text-[#111827]">20</div>
            <div className="text-[#10B981] text-sm">+5%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#6B7280] text-sm mb-2">New customers</div>
            <div className="text-2xl font-bold text-[#111827]">5</div>
            <div className="text-[#10B981] text-sm">+5%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#6B7280] text-sm mb-2">Pending tasks</div>
            <div className="text-2xl font-bold text-[#111827]">3</div>
            <div className="text-[#EF4444] text-sm">+2</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-[#111827] mb-4">Revenue Overview</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8B5CF6"
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
              <h2 className="text-lg font-semibold text-[#111827] mb-4">Quick access</h2>
              <div className="space-y-4">
                {quickAccessCustomers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-[#111827]">{customer.name}</div>
                      <div className="text-sm text-[#6B7280]">Last seen {customer.lastSeen}</div>
                    </div>
                    <div className="text-[#6B7280]">${customer.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-[#111827] mb-4">Tasks</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-3">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#10B981] mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-[#6B7280] mt-0.5" />
                    )}
                    <span className={task.completed ? 'text-[#6B7280] line-through' : 'text-[#111827]'}>
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