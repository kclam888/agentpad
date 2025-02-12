'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-[72px] bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="AgentPad.ai"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-bold text-black">AgentPad</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-black/70 transition-colors font-medium text-[15px]">
              Products
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-black/70 transition-colors font-medium text-[15px]">
              Solutions
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-black/70 transition-colors font-medium text-[15px]">
              Resources
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-black/70 transition-colors font-medium text-[15px]">
              Company
              <ChevronDown size={14} />
            </div>
          </nav>
        </div>

        <Link href="/dashboard" className="bg-black text-white px-7 py-2.5 rounded-full hover:bg-black/90 transition-colors font-medium text-[15px]">
          Launch Now
        </Link>
      </div>
    </header>
  );
};

export default Header; 