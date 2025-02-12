'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageSquare, Send, Minimize2, Maximize2 } from 'lucide-react';

interface TeamChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

const messages = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://picsum.photos/200/200?random=1',
    },
    message: "Hey team, how's the new feature coming along?",
    time: '10:30 AM',
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/200/200?random=2',
    },
    message: 'Making good progress! Should be ready for review by EOD.',
    time: '10:32 AM',
  },
  {
    id: 3,
    user: {
      name: 'Emily Rodriguez',
      avatar: 'https://picsum.photos/200/200?random=3',
    },
    message: 'Great to hear! Let me know if you need any help.',
    time: '10:35 AM',
  },
];

const TeamChat = ({ isOpen, onToggle }: TeamChatProps) => {
  const [newMessage, setNewMessage] = useState('');
  const [minimized, setMinimized] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 p-4 bg-[#007AFF] text-white rounded-full shadow-lg hover:bg-[#0056b3] transition-colors"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-80 bg-[#181818] rounded-lg shadow-xl transition-all transform ${
        minimized ? 'h-14' : 'h-[500px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="font-semibold text-white">Team Chat</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMinimized(!minimized)}
            className="p-1 hover:bg-[#242424] rounded-lg transition-colors"
          >
            {minimized ? (
              <Maximize2 className="w-4 h-4 text-gray-400" />
            ) : (
              <Minimize2 className="w-4 h-4 text-gray-400" />
            )}
          </button>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-[#242424] rounded-lg transition-colors"
          >
            <span className="text-gray-400">&times;</span>
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Messages */}
          <div className="h-[380px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={message.user.avatar}
                    alt={message.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-white text-sm">
                      {message.user.name}
                    </span>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#242424] text-white placeholder-gray-500 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#007AFF]"
              />
              <button
                type="submit"
                className="p-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors disabled:opacity-50"
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default TeamChat; 