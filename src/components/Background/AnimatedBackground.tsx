import { FC, useEffect, useState } from 'react';

export const AnimatedBackground: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Hero section gradient */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.05}px)`,
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${-scrollY * -0.2}px, ${-scrollY * 0.05}px)`,
        }}
      />

      {/* Skills section gradient */}
      <div 
        className="absolute top-[100vh] right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.02}px)`,
        }}
      />
      <div 
        className="absolute top-[120vh] left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${-scrollY * 0.05}px, ${-scrollY * 0.02}px)`,
        }}
      />

      {/* Experience section gradient */}
      <div 
        className="absolute top-[200vh] right-1/3 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${scrollY * 0.03}px, ${-scrollY * 0.01}px)`,
        }}
      />
      <div 
        className="absolute top-[220vh] left-1/3 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${-scrollY * 0.03}px, ${-scrollY * 0.01}px)`,
        }}
      />

      {/* Additional floating orbs */}
      <div 
        className="absolute top-[150vh] left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${Math.sin(scrollY * 0.002) * 100}px, ${Math.cos(scrollY * 0.002) * 100}px)`,
        }}
      />
      <div 
        className="absolute top-[180vh] right-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl transition-transform duration-500"
        style={{
          transform: `translate(${Math.cos(scrollY * 0.002) * 100}px, ${Math.sin(scrollY * 0.002) * 100}px)`,
        }}
      />
    </div>
  );
};