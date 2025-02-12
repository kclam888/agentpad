'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AgentCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4 items-start">
    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
    </div>
    <div>
      <h3 className="font-medium text-black">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-8 relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-[42%] space-y-10 pr-4">
          <div className="space-y-8">
            <h1 className="text-[56px] font-bold text-[#111827] leading-[1.1] tracking-tight">
              🚀 Your AI Agent, Your Ultimate <span className="font-extrabold">Business Autopilot</span>
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed max-w-[540px]">
              Our automatic answer bot gets the customer details and logs their issue for you.
              <br />
              Even if the line is busy.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="/case-studies" className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors font-medium text-lg">
              See it in action
            </Link>
            <Link href="/dashboard" className="bg-[#1e3a8a] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-medium text-lg flex items-center gap-2">
              Try for free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-[58%] relative pl-20">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/images/hero-image.jpg"
              alt="Professional answering calls"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 