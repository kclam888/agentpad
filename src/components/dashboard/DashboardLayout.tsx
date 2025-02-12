'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  FileText,
  BarChart2,
  Settings,
  Menu,
  X,
  Sun,
  Users,
  MessageSquare,
  Bell,
  Sparkles,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Users className="w-5 h-5" />, label: 'CRM', href: '/dashboard/crm' },
  { 
    icon: <Sparkles className="w-5 h-5 text-purple-500" />, 
    label: 'AI Agents', 
    href: '/dashboard/agents',
    isSpecial: true 
  },
  { icon: <Calendar className="w-5 h-5" />, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: <FolderKanban className="w-5 h-5" />, label: 'Projects', href: '/dashboard/projects' },
  { icon: <FileText className="w-5 h-5" />, label: 'Documents', href: '/dashboard/documents' },
  { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '/dashboard/settings' },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-full">
        <div className="p-4">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="Bolt CRM"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg text-[#6366F1]">Bolt CRM</span>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors relative ${
                  pathname === item.href
                    ? 'bg-[#6366F1]/5 text-[#6366F1]'
                    : 'text-gray-600 hover:bg-gray-50'
                } ${
                  item.isSpecial 
                    ? 'bg-purple-50 hover:bg-purple-100 overflow-hidden'
                    : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.isSpecial && (
                  <>
                    <div className="absolute inset-0 bg-purple-400/20 animate-pulse rounded-md"></div>
                    <div className="absolute -inset-1 bg-purple-400/10 animate-pulse rounded-md blur-sm"></div>
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200">
          <div className="h-full px-6 flex items-center justify-end gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Sun className="w-5 h-5 text-gray-600" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 