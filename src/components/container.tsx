// components/Container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid-cols-3 bg- ${className}`}>
      {children}
    </div>
  );
};

export default Container