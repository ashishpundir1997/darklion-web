'use client';

import { useState } from 'react';
import cross from '../assets/icons/bannercross.svg'
import Image from 'next/image';
import bannerbg from '../assets/images/bannerbg.png';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="relative w-full  border-b border-[#262626] px-4 md:px-8  py-2 md:py-3"
      style={{ backgroundImage: `url(${bannerbg.src})` }}
    >
       <div className="absolute inset-0 bg-[#1A1A1A]/70 pointer-events-none" />
      <div className="flex items-center justify-center gap-2 relative">
        <p className="text-white text-[12px] md:text-[14px] 2xl:text-[18px] text-center">
          ✨ Discover Your Dream Property with Estatein{' '}
          <span className="underline cursor-pointer hover:opacity-80">Learn More</span>
        </p>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close banner"
        >
         <Image src={cross} alt="Close" width={26} height={26} className='cursor-pointer h-[26px] w-[26px] md:h-8 md:w-8'/>
        </button>
      </div>
    </div>
  );
}
