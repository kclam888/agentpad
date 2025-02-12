'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLink {
  label: string;
  href: string;
}

interface ContentLayoutProps {
  children: React.ReactNode;
  sidebarLinks: SidebarLink[];
  title: string;
}

const ContentLayout = ({ children, sidebarLinks, title }: ContentLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden bg-white border-b sticky top-0 z-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-full px-8 py-4 flex items-center justify-between"
        >
          <span className="font-semibold">{title} Navigation</span>
          {isSidebarOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {isSidebarOpen && (
          <nav className="border-t">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-8 py-3 text-sm ${
                  pathname === link.href
                    ? 'bg-[#27AE60] text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r min-h-screen sticky top-0">
          <div className="p-8">
            <h2 className="font-semibold mb-6">{title} Navigation</h2>
            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 rounded-md text-sm ${
                    pathname === link.href
                      ? 'bg-[#27AE60] text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 px-8 py-12 max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout; 