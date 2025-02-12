'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Header from './Header';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    return paths.map((path, index) => ({
      label: path.charAt(0).toUpperCase() + path.slice(1),
      href: '/' + paths.slice(0, index + 1).join('/'),
    }));
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-6 right-4 z-50 p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20">
            <nav className="flex flex-col gap-4 p-8">
              <Link href="/products" className="text-lg hover:text-[#2563EB] transition-colors">Products</Link>
              <Link href="/solutions" className="text-lg hover:text-[#2563EB] transition-colors">Solutions</Link>
              <Link href="/resources" className="text-lg hover:text-[#2563EB] transition-colors">Resources</Link>
              <Link href="/company" className="text-lg hover:text-[#2563EB] transition-colors">Company</Link>
            </nav>
          </div>
        )}
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-[#2563EB]">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center gap-2">
                  <span className="text-gray-400">/</span>
                  <Link
                    href={crumb.href}
                    className={index === breadcrumbs.length - 1 ? 'text-[#4A4A4A]' : 'text-[#2563EB]'}
                  >
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-10 mb-4">
              <Image
                src="/images/logo.png"
                alt="AgentPad.ai"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm text-center max-w-md">
              Empowering businesses with intelligent AI solutions for the future of work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <div className="flex flex-col gap-2">
                <Link href="/products" className="text-sm hover:text-[#2563EB] transition-colors">All Products</Link>
                <Link href="/products/features" className="text-sm hover:text-[#2563EB] transition-colors">Features</Link>
                <Link href="/products/pricing" className="text-sm hover:text-[#2563EB] transition-colors">Pricing</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Solutions</h3>
              <div className="flex flex-col gap-2">
                <Link href="/solutions" className="text-sm hover:text-[#2563EB] transition-colors">Overview</Link>
                <Link href="/solutions/industries" className="text-sm hover:text-[#2563EB] transition-colors">Industries</Link>
                <Link href="/solutions/case-studies" className="text-sm hover:text-[#2563EB] transition-colors">Case Studies</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <div className="flex flex-col gap-2">
                <Link href="/resources" className="text-sm hover:text-[#2563EB] transition-colors">Library</Link>
                <Link href="/resources/blog" className="text-sm hover:text-[#2563EB] transition-colors">Blog</Link>
                <Link href="/resources/documentation" className="text-sm hover:text-[#2563EB] transition-colors">Documentation</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <div className="flex flex-col gap-2">
                <Link href="/company" className="text-sm hover:text-[#2563EB] transition-colors">About Us</Link>
                <Link href="/company/careers" className="text-sm hover:text-[#2563EB] transition-colors">Careers</Link>
                <Link href="/company/contact" className="text-sm hover:text-[#2563EB] transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AgentPad.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 