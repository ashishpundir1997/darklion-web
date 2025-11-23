'use client';
import  { useState } from 'react';
import stars from '../assets/icons/stars.svg';
import bedIcon from '../assets/icons/Bed.svg';
import bathroomIcon from '../assets/icons/bathroom.svg';
import villaIcon from '../assets/icons/villa.svg';
import Image from 'next/image';
import SecondaryCard from './SecondaryCard';
import PrimaryButton from './PrimaryButton';


interface PropertyItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

// Placeholder data; swap image paths with real ones under /public or assets.
const properties: PropertyItem[] = [
  { id: 1, image: '/icons/stars.svg', title: 'Modern Loft', subtitle: 'Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA', price: '$850,000' },
  { id: 2, image: '/icons/stars.svg', title: 'Coastal Villa', subtitle: 'Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA', price: '$2,400,000' },
  { id: 3, image: '/icons/stars.svg', title: 'Country Estate', subtitle: 'Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA Downtown LA', price: '$3,150,000' }
];

const FeatureProperties = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const toggleExpand = (id: number) => {
    setExpandedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };
  // Pagination (bottom box)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 60;
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const handlePrev = () => {
    if (!isFirst) setCurrentPage(p => Math.max(1, p - 1));
  };
  const handleNext = () => {
    if (!isLast) setCurrentPage(p => Math.min(totalPages, p + 1));
  };

  return (
    <div className="w-full bg-[#141414] md:mt-1.5 px-4 md:px-20 2xl:px-40 ">
      <div className="w-full py-[60px] md:py-[90px] 2xl:py-[110px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div className="flex flex-col items-start gap-4 md:w-[70%]">
            {/* place stars.svg at /public/icons/stars.svg */}
            <Image src={stars} alt="Stars" className="w-[45px] h-5 md:w-[54px] md:h-6 2xl:w-[68px] 2xl:h-[30px]" />
            <h2 className="font-urbanist font-semibold text-[28px] md:text-[38px] 2xl:text-[48px] leading-[150%] tracking-[0%]">
              Feature Properties
            </h2>
            <p className='font-urbanist font-medium text-[14px] md:text-[16px] 2xl:text-[18px] text-[#999999]'>
              Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &quot;View Details&quot; for more information.
            </p>
          </div>
          <div className="hidden md:flex md:self-end">
            <button
              type="button"
              className="px-5 py-3.5 2xl:px-6 2xl:py-4 rounded-md border border-[#262626] bg-[#1A1A1A] text-white font-urbanist font-semibold text-[14px] 2xl:text-[18px] hover:bg-[#222] transition-colors cursor-pointer"
            >
              View All Properties
            </button>
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {properties.map((prop, idx) => (
          <SecondaryCard
            key={prop.id}
            className={`w-full ${idx > 0 ? 'hidden md:flex' : 'flex'} flex-col`}
          >
            {/* Image */}
            <div className="w-full h-48 bg-[#1E1E1E] rounded-[10px] flex items-center justify-center overflow-hidden mb-4 md:mb-5 2xl:mb-[30px]">
              <Image
                src={prop.image}
                alt={prop.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            {/* Headings */}
            <div className="flex flex-col gap-1">
              <h3 className="font-urbanist font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] leading-[140%]">
                {prop.title}
              </h3>
            
                  {/* Subtitle with inline Read More / Show Less */}
                  {(!expandedIds.includes(prop.id)) ? (
                    <h4 className="font-urbanist font-medium text-[14px] md:text-[16px] 2xl:text-[18px] text-[#999999] leading-[140%] overflow-hidden">
                      {(() => {
                        // approximate truncation targeting ~1.5 lines depending on breakpoint
                        const baseLimit = 70; // mobile
                        const mdLimit = 90;   // md
                        const xlLimit = 110;  // 2xl
                        // choose limit by window width if available; fallback sequentially
                        let limit = baseLimit;
                        if (typeof window !== 'undefined') {
                          const w = window.innerWidth;
                          if (w >= 1536) limit = xlLimit; else if (w >= 768) limit = mdLimit;
                        }
                        const text = prop.subtitle;
                        if (text.length <= limit) return text;
                        const truncated = text.slice(0, limit).split(' ').slice(0, -1).join(' ');
                        return truncated + '...';
                      })()}
                      <button
                        type="button"
                        onClick={() => toggleExpand(prop.id)}
                        aria-label={`Read more about ${prop.title}`}
                        className="ml-2 inline text-white font-semibold text-[12px] md:text-[13px] 2xl:text-[14px] underline decoration-[#444] hover:text-[#ffffff] hover:decoration-white transition-colors"
                      >
                        Read More
                      </button>
                    </h4>
                  ) : (
                    <h4 className="font-urbanist font-medium text-[14px] md:text-[16px] 2xl:text-[18px] text-[#999999] leading-[140%]">
                      {prop.subtitle}
                      <button
                        type="button"
                        onClick={() => toggleExpand(prop.id)}
                        aria-label={`Show less about ${prop.title}`}
                        className="ml-2 inline text-white font-semibold text-[12px] md:text-[13px] 2xl:text-[14px] underline decoration-[#444] hover:text-[#ffffff] hover:decoration-white transition-colors"
                      >
                        Show Less
                      </button>
                    </h4>
                  )}
                  
                  {/* Info Cards */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center gap-1 bg-[#1E1E1E] rounded-[28px] px-3.5 py-1.5 2xl:px-4 2xl:py-2">
                      <Image
                        src={bedIcon}
                        alt="Bedroom icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 2xl:w-6 2xl:h-6"
                      />
                      <span className="font-urbanist font-medium text-[12px] 2xl:text-[14px] text-white">
                        Bedroom
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#1E1E1E] rounded-[28px] px-3.5 py-1.5 2xl:px-4 2xl:py-2">
                      <Image
                        src={bathroomIcon}
                        alt="Bathroom icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 2xl:w-6 2xl:h-6"
                      />
                      <span className="font-urbanist font-medium text-[12px] 2xl:text-[14px] text-white">
                        Bathroom
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-[#1E1E1E] rounded-[28px] px-3.5 py-1.5 2xl:px-4 2xl:py-2">
                      <Image
                        src={villaIcon}
                        alt="Villa icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 2xl:w-6 2xl:h-6"
                      />
                      <span className="font-urbanist font-medium text-[12px] 2xl:text-[14px] text-white">
                        Villa
                      </span>
                    </div>
                  </div>
                  
                  {/* Buttons moved inline with subtitle above */}
             
            </div>
            {/* Price & Button Row */}
            <div className="flex flex-wrap items-center justify-between mt-2 gap-y-3">
              <div className='flex flex-col'>
                <span className="font-urbanist font-medium text-[14px] 2xl:text-[18px] text-[#999999]">Price</span>
                <span className="font-urbanist font-semibold md:w-[90px] mr-2 text-[16px] md:text-[18px] 2xl:text-[20px] text-white">{prop.price}</span>
              </div>
              <PrimaryButton label="View Property Details" className="text-[14px] lg:text-[18px] md:w-full xl:w-auto " />
            </div>
          </SecondaryCard>
        ))}
      </div>

      {/* Pagination Box at end */}
      <div className="w-full border-t border-[#262626] font-medium mt-8 mb-[30px] md:mb-10 2xl:mb-[50px]  flex items-center justify-between">
        {/* Mobile (below md): view-all left, arrows + count grouped right */}
        <div className="w-full flex items-center justify-between md:hidden pt-4">
          <button
            type="button"
            className="px-5 py-3.5 2xl:px-6 2xl:py-4 rounded-md border border-[#262626] bg-[#1A1A1A] text-white font-urbanist font-semibold text-[14px] 2xl:text-[18px] hover:bg-[#222] transition-colors cursor-pointer"
          >
            View All Properties
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous page"
              aria-disabled={isFirst}
              disabled={isFirst}
              className={`w-11 h-11 2xl:w-[58px] 2xl:h-[58px] flex items-center justify-center rounded-full border border-[#262626] ${isFirst ? 'bg-transparent cursor-not-allowed' : 'bg-[#1A1A1A] hover:bg-[#222]'}`}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M12 15l-5-5 5-5" stroke={isFirst ? '#808080' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="font-urbanist text-[14px]">
              <span className="text-white">{String(currentPage).padStart(2,'0')}</span>{' '}
              <span className="text-[#999999]">of {totalPages}</span>
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next page"
              aria-disabled={isLast}
              disabled={isLast}
              className={`w-11 h-11 2xl:w-[58px] 2xl:h-[58px] flex items-center justify-center rounded-full border border-[#262626] ${isLast ? 'bg-transparent cursor-not-allowed' : 'bg-[#1A1A1A] hover:bg-[#222]'}`}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M8 5l5 5-5 5" stroke={isLast ? '#808080' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        {/* Desktop / md+: arrows with count between */}
        <div className="hidden md:flex w-full justify-end mt-4 md:mt-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous page"
              aria-disabled={isFirst}
              disabled={isFirst}
              className={`w-11 h-11 2xl:w-[58px] 2xl:h-[58px] flex items-center justify-center rounded-full border border-[#262626] ${isFirst ? 'bg-transparent cursor-not-allowed' : 'bg-[#1A1A1A] hover:bg-[#222]'}`}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d="M13 16.5l-5.5-5.5L13 5.5" stroke={isFirst ? '#808080' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="font-urbanist text-[18px]">
              <span className="text-white">{String(currentPage).padStart(2,'0')}</span>{' '}
              <span className="text-[#999999]">of {totalPages}</span>
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next page"
              aria-disabled={isLast}
              disabled={isLast}
              className={`w-11 h-11 2xl:w-[58px] 2xl:h-[58px] flex items-center justify-center rounded-full border border-[#262626] ${isLast ? 'bg-transparent cursor-not-allowed' : 'bg-[#1A1A1A] hover:bg-[#222]'}`}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d="M9 5.5l5.5 5.5L9 16.5" stroke={isLast ? '#808080' : '#FFFFFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperties;