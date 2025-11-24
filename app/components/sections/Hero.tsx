import React from 'react';
import NavButtons from '../ui/common/SecondaryButton';
import PrimaryButton from '../ui/common/PrimaryButton';
import Image from 'next/image';
import hero from '../../assets/images/Container.png';
import StatCard from '../ui/StatCard';
import Card from '../ui/common/Card';
import effortlessproperty from '../../assets/icons/effortlessproperty.svg';
import unlockproperty from '../../assets/icons/unlock.svg';
import findproperty from '../../assets/icons/finddreamhome.svg';
import smartinvestments from '../../assets/icons/smartinvestment.svg';
import arrow from '../../assets/icons/arrow.svg';

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The Hero component is the main landing page component, containing the 
 * introduction to the Estatein app, the main call-to-action buttons, 
 * statistics about the app, and a section showcasing the features of the app.
 * 
 * @returns {JSX.Element} - The rendered Hero component element.
 */
/*******  933fac5e-d23a-4b83-b6d9-c82daf0a8926  *******/
const Hero = () => {
  return (

    <div className="w-full md:bg-[#1A1A1A] bg-[#141414]" >
      {/* Hero Section */}
      <div className="pt-10 md:py-0 md:bg-[#1A1A1A] bg-[#141414]" >
        {/* Main Hero Content - Mobile: Column, MD+: Row with absolute image */}
        <div className="md:relative mb-2.5 md:bg-[#1A1A1A] bg-[#141414]" >
          <div className="flex flex-col md:block  md:bg-[#1A1A1A] bg-[#141414]">
              {/* Styled Circles Logo - Centered horizontally, above both sections, top aligned to heading */}
              <div
                className="hidden md:block absolute left-1/2 z-30"
                style={{
                  transform: 'translateX(-50%)',
                  top: 'calc(16px + 50px)',
                  pointerEvents: 'none',
                }}
              >
                {/* Responsive SVG logo */}
                {/* 2xl size */}
                <svg className="hidden 2xl:block" width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="87.5" cy="87.5" r="87.5" fill="#141414" stroke="#262626" strokeWidth="1.59" />
                  <circle cx="87.5" cy="87.5" r="39.77" fill="#1A1A1A" stroke="#262626" strokeWidth="1.59" />
                  <path id="curveTextPath2xl" d="M87.5,146.59 a59.09,59.09 0 1,1 0,-118.18 a59.09,59.09 0 1,1 0,118.18" fill="none" />
                  <text fontSize="14" fill="#fff" fontFamily="sans-serif" style={{letterSpacing: '0.3em'}}>
                    <textPath xlinkHref="#curveTextPath2xl" startOffset="0">✨ Discover your dream propoerty</textPath>
                  </text>
                  {/* Center Arrow Icon */}
                  <foreignObject x="71.5" y="71.5" width="32" height="32">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px'}}>
                      <Image src={arrow} alt="Arrow" width={32} height={32} className="brightness-0 invert" />
                    </div>
                  </foreignObject>
                </svg>
                {/* md size */}
                <svg className="hidden md:block 2xl:hidden" width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="64.5" cy="64.5" r="64.5" fill="#141414" stroke="#262626" strokeWidth="1.59" />
                  <circle cx="64.5" cy="64.5" r="29.3" fill="#1A1A1A" stroke="#262626" strokeWidth="1.59" />
                  <path id="curveTextPathMd" d="M64.5,108.5 a44,44 0 1,1 0,-88 a44,44 0 1,1 0,88" fill="none" />
                  <text fontSize="12" fill="#fff" fontFamily="sans-serif" style={{letterSpacing: '0.3em'}}>
                    <textPath xlinkHref="#curveTextPathMd" startOffset="0">✨ Discover your dream propoerty</textPath>
                  </text>
                  {/* Center Arrow Icon */}
                  <foreignObject x="48.5" y="48.5" width="32" height="32">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px'}}>
                      <Image src={arrow} alt="Arrow" width={32} height={32} className="brightness-0 invert" />
                    </div>
                  </foreignObject>
                </svg>
                {/* default size */}
                <svg className="block md:hidden" width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="58.5" cy="58.5" r="58.5" fill="#141414" stroke="#262626" strokeWidth="1.59" />
                  <circle cx="58.5" cy="58.5" r="26.5" fill="#1A1A1A" stroke="#262626" strokeWidth="1.59" />
                  <path id="curveTextPathSm" d="M58.5,97 a38.5,38.5 0 1,1 0,-77 a38.5,38.5 0 1,1 0,77" fill="none" />
                  <text fontSize="11" fill="#fff" fontFamily="sans-serif" style={{letterSpacing: '0.3em'}}>
                    <textPath xlinkHref="#curveTextPathSm" startOffset="0">✨ Discover your dream propoerty</textPath>
                  </text>
                  {/* Center Arrow Icon */}
                  <foreignObject x="42.5" y="42.5" width="32" height="32">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px'}}>
                      <Image src={arrow} alt="Arrow" width={32} height={32} className="brightness-0 invert" />
                    </div>
                  </foreignObject>
                </svg>
              </div>
            {/* Image Section - Right on MD+, extends to edge and full height */}
            <div className="w-full px-4 md:px-0 md:absolute md:right-0 md:top-0 md:bottom-0 md:w-1/2 bg-[#141414]">
              <div className="rounded-xl md:rounded-none h-full relative overflow-visible md:pb-0 md:overflow-hidden " >
                <Image 
                  src={hero} 
                  alt="Hero Image" 
                  className="w-full h-full object-fill object-center relative z-10 rounded-xl md:rounded-none"
                  width={800} 
                  height={600}
                />
                {/* SVG logo for small screens: left bottom, half out of image */}
                <div className="md:hidden absolute left-0 bottom-0 z-30" style={{ transform: 'translateY(50%)', pointerEvents: 'none' }}>
                  <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="58.5" cy="58.5" r="58.5" fill="#141414" stroke="#262626" strokeWidth="1.59" />
                    <circle cx="58.5" cy="58.5" r="26.5" fill="#1A1A1A" stroke="#262626" strokeWidth="1.59" />
                    <path id="curveTextPathSm" d="M58.5,97 a38.5,38.5 0 1,1 0,-77 a38.5,38.5 0 1,1 0,77" fill="none" />
                    <text fontSize="11" fill="#fff" fontFamily="sans-serif" style={{letterSpacing: '0.3em'}}>
                      <textPath xlinkHref="#curveTextPathSm" startOffset="0">✨ Discover your dream propoerty</textPath>
                    </text>
                    {/* Center Arrow Icon */}
                    <foreignObject x="42.5" y="42.5" width="32" height="32">
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px'}}>
                        <Image src={arrow} alt="Arrow" width={32} height={32} className="brightness-0 invert" />
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>

            {/* Left Section Container */}
            <div 
              className="w-full md:w-1/2 md:relative md:z-10 md:pr-[58px] lg:pr-[66px] 2xl:pr-20 pt-18 md:pt-0 md:shadow-[0px_0px_0px_10px_#191919]"
              style={{
                background: '#141414',
            
              }}
            >
              {/* Content Section - Left on MD+ */}
              <div className="px-4 md:pl-20 2xl:pl-40 md:pr-0 space-y-4 md:space-y-6 pt-4 md:pt-[50px] 2xl:pt-[60px]">
                {/* Heading */}
                <h1 className="font-urbanist font-semibold text-[28px] md:text-[46px] 2xl:text-[60px] leading-[120%] text-white">
                  Discover Your Dream Property with Estatein
                </h1>

              {/* Description */}
              <p className="text-[14px] md:text-[16px] 2xl:text-[18px] text-[#999999] mb-10 md:mb-[50px] 2xl:mb-[60px]">
               Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pb-10 md:pb-[50px] 2xl:pb-[60px]">
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
              <StatCard value="200+" label="Happy Customers" className='text-center md:text-left' />
              <StatCard value="10K+" label="Properties For Clients" className='text-center md:text-left' />
              <StatCard value="16+" label="Years of Experience" className="col-span-2 md:col-span-1 text-center md:text-left" />
            </div>
          </div>
        </div>
        </div>

        {/* Feature Cards Section */}
        {/* Mobile: 2x2 grid | MD+: 4 in a row */}
        <div className="px-4 md:px-0 bg-[#141414] ">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2.5 2xl:gap-5 px-2.5 py-2.5 md:px-4 md:p-2.5 2xl:p-5 border border-[#262626] rounded-2xl md:rounded-none mt-10 md:mt-0"
            style={{ boxShadow: '0px 0px 0px 6px #191919' }}
          >
          {/* Feature Card 1 */}
          <Card backgroundColor="#1A1A1A" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={findproperty}  alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[14px] md:text-[16px] 2x:text-[20px] leading-[150%] text-center text-white">
                Find Your Dream Home
              </p>
            </div>
          </Card>

          {/* Feature Card 2 */}
          <Card backgroundColor="#1A1A1A" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={unlockproperty} alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[14px] md:text-[16px] 2x:text-[20px]leading-[150%] text-center text-white">
                Unlock Property Value
              </p>
            </div>
          </Card>

          {/* Feature Card 3 */}
          <Card backgroundColor="#1A1A1A" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={effortlessproperty} alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semibold text-[14px] md:text-[16px] 2x:text-[20px] leading-[150%] text-center text-white">
               Effortless Property Management
              </p>
            </div>
          </Card>

          {/* Feature Card 4 */}
          <Card backgroundColor="#1A1A1A" borderColor="#262626" className="h-full w-full">
            <div className="flex flex-col items-center justify-center py-[30px] 2xl:py-10 px-5 relative">
              <span className="absolute top-5 right-5">
                <Image src={arrow} alt="Feature icon" width={24} height={24} />
              </span>
              <Image src={smartinvestments} alt="Feature illustration" width={56} height={56} />
              <p className="mt-4 font-urbanist font-semiboldtext-[14px] md:text-[16px] 2x:text-[20px]leading-[150%] text-center text-white">
                Smart Investments, Informed Decisions
              </p>
            </div>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
