import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 py-4">
        <div className="backdrop-blur-md bg-black/30 rounded-full px-6 py-3 flex justify-between items-center max-w-5xl mx-auto">
          <span className="text-cyan-400 font-bold"></span>
          <nav className="space-x-6">
            {['About', 'Skills', 'Experience'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
