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
      <div className="p-6 space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Quick Actions */}
            <div className="bg-[#111111] rounded-lg p-4">
              <h2 className="text-sm font-medium text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <QuickAction key={index} {...action} />
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <ActivityFeed />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-[#111111] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-white">Tasks</h2>
                <button className="p-1 hover:bg-white/5 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <TaskList />
            </div>
            <Calendar />
            <TeamChat isOpen={showChat} onToggle={() => setShowChat(!showChat)} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage; 