import React, { ReactNode } from 'react';
import useScrollAnimation from '../utils/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Define the starting position based on the direction
  let transform = 'translateY(30px)';
  if (direction === 'down') transform = 'translateY(-30px)';
  if (direction === 'left') transform = 'translateX(30px)';
  if (direction === 'right') transform = 'translateX(-30px)';
  if (direction === 'none') transform = 'none';

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transform,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;