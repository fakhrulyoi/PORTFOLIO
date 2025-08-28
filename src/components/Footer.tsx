import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="flex items-center justify-center space-x-2 text-gray-300">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>by Mohamad Fakhrullah</span>
        </p>
        <p className="mt-2 text-sm text-gray-400">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
