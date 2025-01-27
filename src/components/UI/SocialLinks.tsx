import { FC } from 'react';
import { Github, Twitter } from 'lucide-react';

export const SocialLinks: FC = () => {
  return (
    <div className="fixed bottom-8 right-8 flex space-x-6">
      <a 
        href="https://github.com/yblockcha1n" 
        className="text-gray-400 hover:text-cyan-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6" />
      </a>
      <a 
        href="https://twitter.com/yblockchain_" 
        className="text-gray-400 hover:text-cyan-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
};