import React from 'react';

interface menuButtonProps {
  onClick?: () => void;
  className?: string;
}

const MenuButton: React.FC<menuButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex xl:hidden flex-col justify-between w-16 h-12  border-black cursor-pointer ${className}`}
      aria-label="Open menu"
    >
      <span className="block h-2 bg-black w-full"></span>
      <span className="block h-2 bg-black w-full"></span>
      <span className="block h-2 bg-black w-full"></span>
    </button>
  );
};

export default MenuButton;
