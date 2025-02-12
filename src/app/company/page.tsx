'use client';

import MainLayout from '@/components/layout/MainLayout';
import { MapPin, Mail, Phone, Play } from 'lucide-react';
import Image from 'next/image';

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="text-center">
    <Image
      src={image}
      alt={name}
      width={128}
      height={128}
      className="rounded-full object-cover mx-auto mb-4"
    />
    <h3 className="font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const TimelineEvent = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="flex gap-6">
    <div className="text-lg font-bold text-[#27AE60] w-20">{year}</div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FullWidthMedia = ({ image, title, description }: { image: string; title: string; description: string }) => (
  <div className="relative h-[500px] bg-black text-white">
    <Image
      src={image}
      alt={title}
      fill
      className="absolute inset-0 w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl opacity-90">{description}</p>
        <button className="mt-8 bg-[#27AE60] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
          <Play size={20} />
          Watch Video
        </button>
      </div>
    </div>
  </div>
);

const CompanyPage = () => {
  return (
    <MainLayout>
      {/* Hero Section with Full-width Media */}
      <FullWidthMedia
        image="https://picsum.photos/1920/1080?random=1"
        title="Transforming the Future of Work"
        description="Our mission is to revolutionize the workplace with intelligent AI solutions that empower businesses to achieve more."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what&apos;s possible with AI
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Building trust through transparency and ethical AI
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">
                Creating meaningful change in how businesses operate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Media Section - Our Culture */}
      <FullWidthMedia
        image="https://picsum.photos/1920/1080?random=2"
        title="Life at AgentPad AI"
        description="Join a team of passionate innovators working to shape the future of artificial intelligence."
      />

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="CEO"
              image="https://picsum.photos/200/200?random=1"
            />
            <TeamMember
              name="Michael Chen"
              role="CTO"
              image="https://picsum.photos/200/200?random=2"
            />
            <TeamMember
              name="Emily Rodriguez"
              role="COO"
              image="https://picsum.photos/200/200?random=3"
            />
            <TeamMember
              name="David Kim"
              role="Head of AI"
              image="https://picsum.photos/200/200?random=4"
            />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Our Journey</h2>
          <div className="space-y-8">
            <TimelineEvent
              year="2024"
              title="Global Expansion"
              description="Opened offices in Europe and Asia to serve our growing international customer base."
            />
            <TimelineEvent
              year="2023"
              title="Launch of Ema AI"
              description="Introduced our flagship AI employee platform to the market."
            />
            <TimelineEvent
              year="2022"
              title="Company Founded"
              description="Started with a vision to transform the future of work through AI."
            />
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#27AE60]" />
                <h3 className="font-semibold">Headquarters</h3>
              </div>
              <p className="text-gray-600">
                123 AI Street<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-[#27AE60]" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-gray-600">
                contact@ema-ai.com<br />
                support@ema-ai.com
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-[#27AE60]" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-gray-600">
                +1 (555) 123-4567<br />
                Mon-Fri, 9am-6pm PST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Media Section - Join Us */}
      <FullWidthMedia
        image="https://picsum.photos/1920/1080?random=3"
        title="Join Our Team"
        description="Help us build the future of work. Explore career opportunities at Ema AI."
      />
    </MainLayout>
  );
};

export default CompanyPage; 