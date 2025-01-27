import { FC, ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Props {
  children: ReactNode;
  className?: string;
}

export const AnimatedSection: FC<Props> = ({ children, className = '' }) => {
  const [targetRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <div
      ref={targetRef}
      className={`transform transition-all duration-1000 ${
        isIntersecting
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};