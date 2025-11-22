import React from 'react';
import Card from './Card';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, className = '' }) => {
  return (
    <Card 
      backgroundColor="#1A1A1A"
      borderColor="#262626"
      className={className}
    >
      <div className="flex flex-col gap-2 md:px-3 md:py-3 lg:px-6 lg:py-4">
        <div className="text-[24px] lg:text-[30px] 2xl:text-[40px] font-bold text-white">{value}</div>
        <div 
          className="text-[14px] lg:text-[16px] 2xl:text-[18px] font-urbanist font-medium leading-[150%]" 
          style={{ color: '#999999' }}
        >
          {label}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
