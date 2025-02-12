'use client';

import Image from 'next/image';

const activities = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://picsum.photos/200/200?random=1',
    },
    action: 'completed',
    target: 'Website Redesign',
    image: 'https://picsum.photos/400/300?random=1',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Alex Thompson',
      avatar: 'https://picsum.photos/200/200?random=2',
    },
    action: 'commented on',
    target: 'API Documentation',
    comment: 'Great work! Just a few minor adjustments needed.',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: {
      name: 'Mike Chen',
      avatar: 'https://picsum.photos/200/200?random=3',
    },
    action: 'started',
    target: 'Mobile App Development',
    time: '5 hours ago',
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-[#111111] rounded-lg p-4">
      <h2 className="text-sm font-medium text-white mb-4">Activity Feed</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
              <Image
                src={activity.user.avatar}
                alt={activity.user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium text-gray-300">{activity.user.name}</span>
                <span className="text-gray-500">{activity.action}</span>
                <span className="font-medium text-gray-300">{activity.target}</span>
              </div>
              {activity.image && (
                <div className="mt-2 relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.target}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {activity.comment && (
                <p className="mt-1 text-sm text-gray-400">{activity.comment}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 