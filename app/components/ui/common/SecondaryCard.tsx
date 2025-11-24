import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  /** Optional override for border color (defaults to design spec #262626) */
  borderColor?: string;
  /** Optional override for background color (defaults to design spec #141414) */
  backgroundColor?: string;
  onClick?: () => void;
}

// Responsive design spec:
// < md: radius 12px, padding 24px, gap 16px
// md:    radius 10px, padding 40px, gap 30px
// 2xl:   radius 12px, padding 40px, gap 30px
// Base background: #141414; border: 1px solid #262626
const SecondaryCard: React.FC<CardProps> = ({
  children,
  className = '',
  width = 'auto',
  height = 'auto',
  borderColor = '#262626',
  backgroundColor = '#141414',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative
        flex flex-col
        bg-[#141414]
        border border-[#262626]
        rounded-xl
        p-6
        gap-4
        md:rounded-[10px] lg:p-[30px]  md:gap-[30px]
        2xl:rounded-xl 2xl:p-10 2xl:gap-[30px]
        transition-all duration-200 ease-in-out
        ${onClick ? 'cursor-pointer hover:shadow-md' : ''}
        ${className}
      `}
      style={{
        width,
        height,
        // Allow overrides via props if passed (falls back to design tokens set by classes)
        borderColor,
        backgroundColor
      }}
    >
      {children}
    </div>
  );
};

export default SecondaryCard;
