'use client';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
}

const QuickAction = ({ icon, label }: QuickActionProps) => {
  return (
    <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
      <div className="text-gray-400">
        {icon}
      </div>
      <span className="text-xs text-gray-400">
        {label}
      </span>
    </button>
  );
};

export default QuickAction; 