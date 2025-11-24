import React from 'react';

interface NavButtonProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
}

const NavButtons: React.FC<NavButtonProps> = ({ 
  label, 
  isSelected = false, 
  onClick,
  className = '',
  width,
  height
}) => {
  const baseStyles = "transition-all duration-200 ease-in-out cursor-pointer";
  
  const heightClass = height || 'h-[49px] md:h-[49px] 2xl:h-[63px]';
  
  const selectedStyles = isSelected
    ? `px-6 py-2.5 md:py-2 2xl:py-3.5 rounded-[10px] border border-[#262626] bg-[#141414] hover:bg-[#1f1f1f] hover:border-[#333333] ${heightClass} flex items-center justify-center`
    : "hover:text-gray-300";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${selectedStyles} ${className} ${width === '100%' ? 'w-full md:w-auto' : ''}`}
      style={{
        opacity: 1,
        gap: '10px',
        width: width && width !== '100%' ? width : undefined,
      }}
    >
      <span className="text-white">{label}</span>
    </button>
  );
};

export default NavButtons;
