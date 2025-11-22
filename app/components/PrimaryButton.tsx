import React from 'react';

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  label, 
  onClick,
  className = '',
  width = 'auto',
  height
}) => {
  const heightClass = height || 'h-[49px] 2xl:h-[63px]';
  
  return (
    <button
      onClick={onClick}
      className={`
        ${heightClass}
        px-6 py-[18px] 
        rounded-[10px] 
        bg-[#703BF7] 
        text-white 
        font-medium
        hover:bg-[#5c2fd9] 
        transition-all 
        duration-200 
        ease-in-out 
        flex 
        items-center 
        justify-center 
        gap-2
        cursor-pointer
        ${className}
      `}
      style={{
        opacity: 1,
        width: width,
      }}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
