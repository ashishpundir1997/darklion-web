'use client';

import { useState } from 'react';
import Image from 'next/image';
import icon from '../assets/icons/icon.svg';
import hamburger from '../assets/icons/hamburger.svg';
import NavButtons from './SecondaryButton';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="bg-[#1A1A1A] px-4 md:px-20 2xl:px-40 h-[68px] md:h-[77px] 2xl:h-[99px]"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 1,
      }}
    >
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <Image
          height={32}
          width={32}
          src={icon}
          alt="DarkLion Logo" 
          className="md:h-10 md:w-10"
          style={{ objectFit: 'contain' }} 
        />
        <h1 className="text-lg md:text-xl font-bold text-white">
          Estatein
        </h1>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex nav-links gap-8 items-center">
        <NavButtons className='h-[49px] 2xl:h-[59px]' label="Home" isSelected={true} onClick={() => {}} />
        <NavButtons className='h-[49px] 2xl:h-[59px]' label="About Us" isSelected={false} onClick={() => {}} />
        <NavButtons className='h-[49px] 2xl:h-[59px]' label="Properties" isSelected={false} onClick={() => {}} />
        <NavButtons className='h-[49px] 2xl:h-[59px]' label="Services" isSelected={false} onClick={() => {}} />
      </div>
      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <NavButtons className='h-[49px] 2xl:h-[59px]' label="Contact Us" isSelected={true} onClick={() => {}} />
      </div>
      {/* Mobile Hamburger Menu */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <Image
          height={24}
          width={24}
          src={hamburger}
          alt="Menu" 
          style={{ objectFit: 'contain' }} 
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="absolute top-[68px] md:top-[77px] left-0 right-0 bg-[#1A1A1A] border-t border-[#262626] md:hidden z-50"
          style={{ padding: '16px' }}
        >
          <div className="flex flex-col gap-4">
            <NavButtons label="Home" isSelected={true} onClick={() => setIsMobileMenuOpen(false)} />
            <NavButtons label="About Us" isSelected={false} onClick={() => setIsMobileMenuOpen(false)} />
            <NavButtons label="Properties" isSelected={false} onClick={() => setIsMobileMenuOpen(false)} />
            <NavButtons label="Services" isSelected={false} onClick={() => setIsMobileMenuOpen(false)} />
            <NavButtons label="Contact Us" isSelected={true} onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}
