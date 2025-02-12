'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatsCard from '@/components/dashboard/StatsCard';
import QuickAction from '@/components/dashboard/QuickAction';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import TaskList from '@/components/dashboard/TaskList';
import Calendar from '@/components/dashboard/Calendar';
import TeamChat from '@/components/dashboard/TeamChat';
import { Users, Clock, CheckSquare, AlertCircle, FileText, Building2, File, UserPlus, MoreHorizontal } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  { name: 'Jan', value: 800 },
  { name: 'Feb', value: 1600 },
  { name: 'Mar', value: 1400 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 1800 },
  { name: 'Jun', value: 2200 },
  { name: 'Jul', value: 2000 },
  { name: 'Aug', value: 2400 },
  { name: 'Sep', value: 2200 },
  { name: 'Oct', value: 2800 },
  { name: 'Nov', value: 3000 },
  { name: 'Dec', value: 3200 },
];

const quickAccessCustomers = [
  { name: 'Alice Freeman', lastSeen: '2 days ago', amount: 200, avatar: 'https://picsum.photos/200/200?random=1' },
  { name: 'Bob Smith', lastSeen: '5 days ago', amount: 100, avatar: 'https://picsum.photos/200/200?random=2' },
  { name: 'Charlie Brown', lastSeen: '7 days ago', amount: 50, avatar: 'https://picsum.photos/200/200?random=3' },
  { name: 'David Jones', lastSeen: '10 days ago', amount: 300, avatar: 'https://picsum.photos/200/200?random=4' },
];

const DashboardPage = () => {
  const [showChat, setShowChat] = useState(true);

  const stats = [
    { title: 'Team Members', value: '12', icon: <Users className="w-5 h-5" />, change: '+2 this month' },
    { title: 'Hours Tracked', value: '164', icon: <Clock className="w-5 h-5" />, change: 'This week' },
    { title: 'Tasks Completed', value: '24', icon: <CheckSquare className="w-5 h-5" />, change: '+8 today' },
    { title: 'Pending Reviews', value: '5', icon: <AlertCircle className="w-5 h-5" />, change: 'Due today' },
  ];

  const quickActions = [
    { icon: <FileText className="w-5 h-5" />, label: 'New Task' },
    { icon: <Building2 className="w-5 h-5" />, label: 'Meeting' },
    { icon: <File className="w-5 h-5" />, label: 'Document' },
    { icon: <UserPlus className="w-5 h-5" />, label: 'Invite' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 text-sm">Total revenue</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-semibold text-gray-900">$1,500</span>
              <span className="text-emerald-600 text-sm">+5%</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 text-sm">Active customers</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-semibold text-gray-900">20</span>
              <span className="text-emerald-600 text-sm">+5%</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <CheckSquare className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 text-sm">New customers</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-semibold text-gray-900">5</span>
              <span className="text-emerald-600 text-sm">+5%</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 text-sm">Pending tasks</span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-semibold text-gray-900">3</span>
              <span className="text-red-500 text-sm">+2</span>
            </div>
          </div>
        </div>

        {/* Revenue Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Revenue Overview</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818CF8" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#818CF8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis 
                  stroke="#6B7280" 
                  fontSize={12}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#818CF8"
                  strokeWidth={2}
                  dot={false}
                  fill="url(#colorValue)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Quick access</h2>
          <div className="space-y-4">
            {quickAccessCustomers.map((customer, index) => (
              <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={customer.avatar}
                      alt={customer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{customer.name}</div>
                    <div className="text-sm text-gray-600">Last seen {customer.lastSeen}</div>
                  </div>
                </div>
                <div className="text-gray-600">${customer.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage; 