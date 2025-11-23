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
      className="relative w-full h-[78px] md:h-[49px] 2xl:h-[63px] border-b border-[#262626] px-4 md:px-8 flex items-center justify-center bg-[#1A1A1A]"
      style={{ backgroundImage: `url(${bannerbg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Shady gradient overlay behind text */}
  <div className="absolute inset-0 bg-linear-to-r from-[#0F0F0F]/80 via-[#141414]/70 to-[#0F0F0F]/80 backdrop-blur-[1px] pointer-events-none z-0" />
      <p className="relative z-10 text-white text-[12px] md:text-[14px] 2xl:text-[18px] text-center px-6 md:px-0 font-urbanist font-medium">
        ✨ Discover Your Dream Property with Estatein{' '}
        <span className="underline cursor-pointer hover:opacity-80">Learn More</span>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close banner"
      >
        <Image src={cross} alt="Close" width={26} height={26} className="cursor-pointer h-[26px] w-[26px] md:h-8 md:w-8" />
      </button>
    </div>
  );
}
