import { FC } from 'react';

interface Props {
  activeSection: string;
}

export const DotNavigation: FC<Props> = ({ activeSection }) => {
  return (
    <nav className="fixed md:left-4 right-4 top-1/2 -translate-y-1/2 space-y-6 z-50 md:block">
      {['home', 'about', 'skills'].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === section
              ? 'bg-cyan-400 scale-150'
              : 'bg-white/50 hover:scale-150'
          }`}
        />
      ))}
    </nav>
  );
};