'use client';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
}

const StatsCard = ({ title, value, icon, change }: StatsCardProps) => {
  return (
    <div className="bg-[#111111] rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          {icon}
          {title}
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-semibold text-white">{value}</span>
        <span className="text-xs text-gray-500">{change}</span>
      </div>
    </div>
  );
};

export default StatsCard; 