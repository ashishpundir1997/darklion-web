import React from 'react';
import NavButtons from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';
import hero from '../assets/images/Container.png';
import StatCard from './StatCard';
import Card from './Card';
import effortlessproperty from '../assets/icons/effortlessproperty.svg';
import unlockproperty from '../assets/icons/unlock.svg';
import findproperty from '../assets/icons/finddreamhome.svg';
import smartinvestments from '../assets/icons/smartinvestment.svg';
import arrow from '../assets/icons/arrow.svg';

const Hero = () => {
  return (
    <div className="w-full overflow-hidden" style={{ background: '#1A1A1A' }}>
      {/* Hero Section */}
      <div className="py-8 md:py-0" style={{ background: '1A1A1A' }}>
        {/* Main Hero Content - Mobile: Column, MD+: Row with absolute image */}
        <div className="md:relative mb-2.5 bg-[#1A1A1A]" >
          <div className="flex flex-col md:block gap-8 md:gap-0  bg-[#1A1A1A] ">
            {/* Image Section - Right on MD+, extends to edge and full height */}
            <div className="w-full px-4 md:px-0 md:absolute md:right-0 md:top-0 md:bottom-0 md:w-1/2 bg-[#1A1A1A]">
              <div className="rounded-lg md:rounded-none overflow-hidden h-full relative" >
                <Image 
                  src={hero} 
                  alt="Hero Image" 
                  className="w-full h-full object-fill object-center relative z-10"
                  width={800} 
                  height={600}
                />
              </div>
            </div>

            {/* Left Section Container */}
            <div 
              className="w-full md:w-1/2 md:relative md:z-10 md:pr-[30px] lg:pr-[60px] 2xl:pr-20"
              style={{
                background: '#141414',
                border: '1px solid #262626',
                boxShadow: '0px 0px 0px 10px #191919'
              }}
            >
              {/* Content Section - Left on MD+ */}
              <div className="px-4 md:pl-20 2xl:pl-40 md:pr-0 space-y-6 md:py-16">
                {/* Heading */}
                <h1 className="font-urbanist font-semibold text-[28px] md:text-[46px] 2xl:text-[60px] leading-[120%] text-white">
                  Discover Your Dream Property with Estatein
                </h1>

              {/* Description */}
              <p className="text-lg md:text-[16px] 2xl:text-[18px] text-[#999999]">
               Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <NavButtons 
                  label="Learn More" 
                  isSelected={true}
                  className='md:text-[14px] 2xl:text-[18px]'
                />
                <PrimaryButton 
                  label="Browse Properties"
                    className='md:text-[14px] 2xl:text-[18px]'
                />
              </div>
            </div>

            {/* Stats Section */}
            {/* Mobile: 2 in row, 1 full width below */}
            {/* MD+: 3 in a row on left side */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:pl-20 2xl:pl-40 md:pr-0 md:pb-16">
              <StatCard value="200+" label="Happy Customers" className='text-left' />
              <StatCard value="10K+" label="Properties For Clients" />
              <StatCard value="16+" label="Years of Experience" className="col-span-2 md:col-span-1" />
            </div>
          </div>
        </div>
        </div>

        {/* Feature Cards Section */}
        {/* Mobile: 2x2 grid */}
        {/* MD+: 4 in a row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2.5 2xl:gap-5 px-4 md:p-2.5 2xl:p-[20px]py-5 bg-[#141414]">
          {/* Feature Card 1 */}
          <Card backgroundColor="#141414" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={findproperty}  alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[20px] leading-[150%] text-center text-white">
                Find Your Dream Home
              </p>
            </div>
          </Card>

          {/* Feature Card 2 */}
          <Card backgroundColor="#141414" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={unlockproperty} alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[20px] leading-[150%] text-center text-white">
                Unlock Property Value
              </p>
            </div>
          </Card>

          {/* Feature Card 3 */}
          <Card backgroundColor="#141414" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={effortlessproperty} alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[20px] leading-[150%] text-center text-white">
               Effortless Property Management
              </p>
            </div>
          </Card>

          {/* Feature Card 4 */}
          <Card backgroundColor="#141414" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={smartinvestments} alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[20px] leading-[150%] text-center text-white">
                Smart Investments, Informed Decisions
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
