'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  assignee: {
    name: string;
    avatar: string;
  };
}

const tasks: Task[] = [
  {
    id: 1,
    title: 'Update landing page design',
    priority: 'high',
    dueDate: 'Today',
    assignee: {
      name: 'Sarah Wilson',
      avatar: 'https://picsum.photos/200/200?random=1',
    },
  },
  {
    id: 2,
    title: 'Fix navigation responsiveness',
    priority: 'medium',
    dueDate: 'Tomorrow',
    assignee: {
      name: 'Alex Thompson',
      avatar: 'https://picsum.photos/200/200?random=2',
    },
  },
  {
    id: 3,
    title: 'Implement authentication',
    priority: 'high',
    dueDate: 'Next week',
    assignee: {
      name: 'Mike Chen',
      avatar: 'https://picsum.photos/200/200?random=3',
    },
  },
];

const priorityColors = {
  high: 'bg-red-500',
  medium: 'bg-orange-500',
  low: 'bg-green-500',
};

const TaskList = () => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`} />
            <span className="text-sm text-gray-300 truncate">{task.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{task.dueDate}</span>
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={task.assignee.avatar}
                alt={task.assignee.name}
                fill
                className="object-cover"
              />
            </div>
            <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList; 