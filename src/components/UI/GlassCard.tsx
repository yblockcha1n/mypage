import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const GlassCard: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-md bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};