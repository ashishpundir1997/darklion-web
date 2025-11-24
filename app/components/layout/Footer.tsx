'use client';

import React from 'react';
import Image from 'next/image';
import PrimaryButton from '../ui/common/PrimaryButton';
import icon from '../../assets/icons/icon.svg';
import inputicon from '../../assets/icons/inputicon.svg';
import inputarrow from '../../assets/icons/inputarrow.svg';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#141414]">
      <div className="max-w-[1920px] mx-auto">
        {/* CTA Section */}
        <div 
          className="flex flex-col md:flex-row md:items-center md:justify-between items-start justify-center gap-[30px] w-full md:w-auto mx-auto px-4 md:px-16 mt-20"
          style={{
            opacity: 1,
            paddingTop: '50px',
            paddingBottom: '50px',
            borderTop: '1px solid #262626',
            borderBottom: '1px solid #262626',
          }}
        >
          {/* Left side - Heading and Text */}
          <div className="flex flex-col gap-[30px] text-left w-full md:w-[70%]">
            <h2 className="text-[#999999] text-3xl font-bold">
              Start Your Real Estate Journey Today
            </h2>
            
            <p className="text-gray-400">
              Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
          </div>
          
          {/* Right side - Button */}
          <div className="w-full md:w-auto md:flex md:items-center">
            <PrimaryButton 
              label="Explore Properties" 
              onClick={() => {
                // Add navigation logic here
                console.log('Navigate to properties');
              }}
              className="w-full md:w-auto"
              width="100%"
            />
          </div>
        </div>

        {/* Combined Newsletter & Navigation Section */}
        <div
          className="w-full mx-auto px-4 md:px-16 mt-8"
          style={{
            opacity: 1,
            paddingTop: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid #262626',
          }}
        >
          {/* Mobile & Tablet Layout (sm to md) */}
          <div className="lg:hidden">
            {/* Logo and Input */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src={icon}
                  alt="DarkLion Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
              </div>
              <div
                className="flex items-center h-[52px] gap-1.5 rounded-lg border border-[#262626] bg-[#141414]"
                style={{
                  paddingTop: '14px',
                  paddingRight: '20px',
                  paddingBottom: '14px',
                  paddingLeft: '20px',
                }}
              >
                <Image
                  src={inputicon}
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-80"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm"
                />
                <Image src={inputarrow} alt="Send Icon" width={20} height={20} className="w-5 h-5 opacity-80" />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-10">
              <div className="pr-10 border-r border-[#262626]">
                <h4 className="text-[#999999] font-semibold mb-4">Home</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Hero Section</li>
                  <li className="transition">Features</li>
                  <li className="transition">Properties</li>
                  <li className="transition">Testomonials</li>
                  <li className="transition">FAQ&apos;s</li>
                </ul>
                <div className="h-0.5 bg-[#262626] mt-4"></div>
              </div>
              <div className="pl-10">
                <h4 className="text-[#999999] font-semibold mb-4">About Us</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Our story</li>
                  <li className="transition">Our Works</li>
                  <li className="transition">How It Works</li>
                  <li className="transition">Our Team</li>
                  <li className="transition">Our Clients</li>
                </ul>
                <div className="h-0.5 bg-[#262626] mt-4"></div>
              </div>
            </div>
            
            <div className="my-8 px-8"></div>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-8 pr-10 border-r border-[#262626]">
                <div>
                  <h4 className="text-[#999999] font-semibold mb-4">Properties</h4>
                  <ul className="flex flex-col gap-2 text-sm text-white">
                    <li className="transition">Portfolio</li>
                    <li className="transition">Categories</li>
                  </ul>
                  <div className="h-0.5 bg-[#262626] mt-4"></div>
                </div>
                <div>
                  <h4 className="text-[#999999] font-semibold mb-4">Contact Us</h4>
                  <ul className="flex flex-col gap-2 text-sm text-white">
                    <li className="transition">Contact Form</li>
                    <li className="transition">Our Offices</li>
                  </ul>
                  <div className="h-0.5 bg-[#262626] mt-4"></div>
                </div>
              </div>
              <div className="pl-10">
                <h4 className="text-[#999999] font-semibold mb-4">Services</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Valuation Mastery</li>
                  <li className="transition">Selling Support</li>
                  <li className="transition">Strategic Marketing</li>
                  <li className="transition">Negotiation Wizardry</li>
                  <li className="transition">Closing Success</li>
                  <li className="transition">Property Management</li>
                </ul>
                <div className="h-0.5 bg-[#262626] mt-4"></div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Single Row */}
          <div className="hidden lg:flex lg:gap-12">
            {/* Left: Logo and Input */}
            <div className="flex flex-col gap-6 md:w-[280px] lg:w-[320px]">
              <div className="flex items-center gap-2">
                <Image
                  src={icon}
                  alt="DarkLion Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <h3 className="text-white text-lg font-semibold">Stay Updated</h3>
              </div>
              <div
                className="flex items-center h-[52px] gap-1.5 rounded-lg border border-[#262626] bg-[#141414]"
                style={{
                  paddingTop: '14px',
                  paddingRight: '20px',
                  paddingBottom: '14px',
                  paddingLeft: '20px',
                }}
              >
                <Image
                  src={inputicon}
                  alt="Email Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-80"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm"
                />
                <Image src={inputarrow} alt="Send Icon" width={20} height={20} className="w-5 h-5 opacity-80" />
              </div>
            </div>

            {/* Right: All Navigation in One Row */}
            <div className="flex-1 grid grid-cols-5 gap-4 lg:gap-6">
              <div>
                <h4 className="text-[#999999] font-semibold mb-4">Home</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Hero Section</li>
                  <li className="transition">Features</li>
                  <li className="transition">Properties</li>
                  <li className="transition">Testimonials</li>
                  <li className="transition">FAQ&apos;s</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#999999] font-semibold mb-4">About Us</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Our story</li>
                  <li className="transition">Our Works</li>
                  <li className="transition">How It Works</li>
                  <li className="transition">Our Team</li>
                  <li className="transition">Our Clients</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#999999] font-semibold mb-4">Properties</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Portfolio</li>
                  <li className="transition">Categories</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#999999] font-semibold mb-4">Contact Us</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Contact Form</li>
                  <li className="transition">Our Offices</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#999999] font-semibold mb-4">Services</h4>
                <ul className="flex flex-col gap-2 text-sm text-white">
                  <li className="transition">Valuation Mastery</li>
                  <li className="transition">Selling Support</li>
                  <li className="transition">Strategic Marketing</li>
                  <li className="transition">Negotiation Wizardry</li>
                  <li className="transition">Closing Success</li>
                  <li className="transition">Property Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
