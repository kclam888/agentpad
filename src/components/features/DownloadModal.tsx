'use client';

import { useState } from 'react';
import { X, Download, Check } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    title: string;
    type: string;
    description: string;
  };
}

const DownloadModal = ({ isOpen, onClose, resource }: DownloadModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate download process
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#27AE60] bg-opacity-10 text-[#27AE60] mb-2">
                {resource.type}
              </span>
              <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter your email to download
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" required className="rounded text-[#27AE60]" />
                  <span>I agree to receive updates and marketing emails</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#27AE60] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Now
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#27AE60] bg-opacity-10 rounded-full mb-4">
                  <Check size={24} className="text-[#27AE60]" />
                </div>
                <p className="text-lg font-medium">Download Starting...</p>
                <p className="text-sm text-gray-600 mt-1">
                  Thank you for downloading. Your file will begin downloading shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal; 