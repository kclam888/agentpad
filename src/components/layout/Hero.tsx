'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

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
    <button className="ml-auto shrink-0">
      <Play size={16} className="text-[#2563EB]" />
    </button>
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
            <h1 className="text-[64px] font-bold text-black leading-[1.1] tracking-tight drop-shadow-sm">
              One employee
              <br />
              Infinite roles
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed max-w-[540px] drop-shadow-sm">
              Transform your workforce with AgentPad.ai, the AI employee that adapts to any role. Experience the future of work with intelligent automation and seamless integration.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <button className="bg-[#2563EB] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-medium text-lg">
              Launch Now
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-opacity-90 transition-colors font-medium text-lg">
              <Play size={20} className="fill-current" />
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column - Agent Interface */}
        <div className="w-full md:w-[58%] relative pl-20">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Agents</h2>
              <button className="bg-[#2563EB] text-white px-4 py-2 rounded-full text-sm hover:bg-[#2563EB]/90 transition-colors">
                Create AI Agent
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search AI agents..."
                className="w-full px-4 py-3 border rounded-lg mb-6"
              />
            </div>

            <div className="space-y-4">
              <AgentCard
                title="Data Analyst"
                description="An expert in analyzing and interpreting complex data to extract valuable insights"
                image="/images/data analyst.png"
              />
              <AgentCard
                title="Marketing Expert"
                description="A skilled marketing expert with a deep understanding of digital marketing strategies"
                image="/images/Market Analyst.png"
              />
              <AgentCard
                title="Customer Support"
                description="24/7 customer support agent trained to handle inquiries and resolve issues"
                image="/images/Customer Support.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 