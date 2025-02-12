'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date().getDate();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today;
      const hasEvent = [5, 12, 18, 25].includes(day); // Example event days

      days.push(
        <button
          key={day}
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-colors relative
            ${isToday ? 'bg-[#007AFF] text-white' : 'hover:bg-[#242424] text-gray-300'}`}
        >
          {day}
          {hasEvent && (
            <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[#FF3B30]" />
          )}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="bg-[#181818] rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Calendar</h2>
        <div className="flex items-center gap-4">
          <button className="p-1 hover:bg-[#242424] rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <span className="text-gray-300">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button className="p-1 hover:bg-[#242424] rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="h-8 flex items-center justify-center text-xs text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {generateCalendarDays()}
      </div>

      {/* Upcoming Events */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <h3 className="text-sm font-medium text-white mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
            <div>
              <p className="text-sm text-gray-300">Team Meeting</p>
              <p className="text-xs text-gray-500">Today, 2:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#007AFF]" />
            <div>
              <p className="text-sm text-gray-300">Project Review</p>
              <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar; 