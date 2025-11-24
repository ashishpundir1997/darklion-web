'use client';

import React from 'react';
import PrimaryButton from '../ui/common/PrimaryButton';

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
            <h2 className="text-white text-3xl font-bold">
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
      </div>
    </footer>
  );
};

export default Footer;
