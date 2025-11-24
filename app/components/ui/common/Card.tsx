import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

// Generic Card container - just provides background, border, and shape
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  width = 'auto',
  height = 'auto',
  borderColor = '#262626',
  backgroundColor = 'transparent',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative
        rounded-xl
        border
        transition-all
        duration-200
        ease-in-out
        ${onClick ? 'cursor-pointer hover:shadow-md' : ''}
        ${className}
      `}
      style={{
        width: width,
        height: height,
        borderColor: borderColor,
        backgroundColor: backgroundColor
      }}
    >
      {children}
    </div>
  );
};

export default Card;
