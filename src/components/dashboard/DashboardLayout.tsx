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
  Beaker,
  BarChart2,
  Settings,
  Menu,
  X,
  Sun,
  Users,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', href: '/dashboard' },
  { icon: <Users className="w-5 h-5" />, label: 'CRM', href: '/dashboard/crm' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: <FolderKanban className="w-5 h-5" />, label: 'Projects', href: '/dashboard/projects' },
  { icon: <FileText className="w-5 h-5" />, label: 'Documents', href: '/dashboard/documents' },
  { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '/dashboard/settings' },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="h-14 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center h-full px-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/logo.png"
                  alt="Bolt Workspace"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-sm text-gray-900">Bolt Workspace</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex items-center ml-8 space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                  pathname === item.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="ml-auto">
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Sun className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout; 