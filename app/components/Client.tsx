'use client';
import  { useState, useEffect } from 'react';
import stars from '../assets/icons/stars.svg';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import Image, { StaticImageData } from 'next/image';
import SecondaryCard from './SecondaryCard';
import yellowstar from '../assets/icons/yellowstar.svg';


interface PropertyItem {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
  price: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Images array outside component to avoid re-creating on every render
const images = [image1, image2, image3];
const prices = ['$850,000', '$2,400,000', '$3,150,000'];

const Client = () => {
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE_DESKTOP = 3;
  const ITEMS_PER_PAGE_MOBILE = 1;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await response.json();
        
        // Map posts to properties with rotating images and prices
        const mappedProperties = posts.map((post, index) => ({
          id: post.id,
          image: images[index % 3], // Rotate through 3 images
          title: post.title,
          subtitle: post.body,
          price: prices[index % 3] // Rotate through 3 prices
        }));
        
        setProperties(mappedProperties);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Calculate total pages based on screen size (will use desktop calculation for now)
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE_DESKTOP);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  
  const handlePrev = () => {
    if (!isFirst) setCurrentPage(p => Math.max(1, p - 1));
  };
  
  const handleNext = () => {
    if (!isLast) setCurrentPage(p => Math.min(totalPages, p + 1));
  };

  // Get current page items for desktop (3 items)
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE_DESKTOP;
    return properties.slice(startIndex, startIndex + ITEMS_PER_PAGE_DESKTOP);
  };

  // Get current page item for mobile (1 item)
  const getCurrentMobileItem = () => {
    const mobilePageIndex = (currentPage - 1) * ITEMS_PER_PAGE_DESKTOP;
    return properties.slice(mobilePageIndex, mobilePageIndex + ITEMS_PER_PAGE_MOBILE);
  };

  const currentItems = getCurrentPageItems();
  const currentMobileItem = getCurrentMobileItem();

  return (
    <div className="w-full bg-[#141414] md:mt-1.5 px-4 md:px-20 2xl:px-40 ">
      <div className="w-full pt-[60px] md:pt-[90px] 2xl:pt-[110px] pb-10 md:pb-[60px] 2xl:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div className="flex flex-col items-start gap-4 md:w-[70%]">
            {/* place stars.svg at /public/icons/stars.svg */}
            <Image src={stars} alt="Stars" className="w-[45px] h-5 md:w-[54px] md:h-6 2xl:w-[68px] 2xl:h-[30px]" />
            <h2 className="font-urbanist font-semibold text-[28px] md:text-[38px] 2xl:text-[48px] leading-[150%] tracking-[0%]">
              What Our Clients Say
            </h2>
            <p className='font-urbanist font-medium text-[14px] md:text-[16px] 2xl:text-[18px] text-[#999999]'>
             Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
            </p>
          </div>
          <div className="hidden md:flex md:self-end">
            <button
              type="button"
              className="px-5 py-3.5 2xl:px-6 2xl:py-4 rounded-md border border-[#262626] bg-[#1A1A1A] text-white font-urbanist font-semibold text-[14px] 2xl:text-[18px] hover:bg-[#222] transition-colors cursor-pointer"
            >
              View All Testimonials
            </button>
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {loading ? (
          // Skeleton Loading
          <>
            {/* Mobile: Show 1 skeleton */}
            <div className="md:hidden">
              <SkeletonCard />
            </div>
            {/* Desktop: Show 3 skeletons */}
            <div className="hidden md:contents">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </>
        ) : (
          <>
            {/* Mobile: Show only 1 item */}
            <div className="md:hidden">
              {currentMobileItem.map((prop) => (
                <PropertyCard key={prop.id} prop={prop} />
              ))}
            </div>
            {/* Desktop: Show 3 items */}
            <div className="hidden md:contents">
              {currentItems.map((prop) => (
                <PropertyCard key={prop.id} prop={prop} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination Box at end */}
      <div className="w-full border-t border-[#262626] font-medium mt-8  flex items-center justify-between">
        {/* Mobile (below md): view-all left, arrows + count grouped right */}
        <div className="w-full flex items-center justify-between md:hidden pt-4">
          <button
            type="button"
            className="px-5 py-3.5 2xl:px-6 2xl:py-4 rounded-md border border-[#262626] bg-[#1A1A1A] text-white font-urbanist font-semibold text-[14px] 2xl:text-[18px] hover:bg-[#222] transition-colors cursor-pointer"
          >
            View All Testimonials
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

// Skeleton Loading Component
const SkeletonCard = () => {
  return (
    <SecondaryCard className="w-full flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-[#1E1E1E] rounded-[10px] mb-4 md:mb-5 2xl:mb-[30px]"></div>
      
      {/* Title Skeleton */}
      <div className="h-6 bg-[#1E1E1E] rounded w-3/4 mb-2"></div>
      
      {/* Subtitle Skeleton */}
      <div className="h-4 bg-[#1E1E1E] rounded w-full mb-1"></div>
      <div className="h-4 bg-[#1E1E1E] rounded w-5/6 mb-3"></div>
      
      {/* Info Cards Skeleton */}
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        <div className="h-8 w-24 bg-[#1E1E1E] rounded-[28px]"></div>
        <div className="h-8 w-24 bg-[#1E1E1E] rounded-[28px]"></div>
        <div className="h-8 w-24 bg-[#1E1E1E] rounded-[28px]"></div>
      </div>
      
      {/* Button Skeleton */}
      <div className="h-12 bg-[#1E1E1E] rounded w-full mt-2"></div>
    </SecondaryCard>
  );
};

// Property Card Component
interface PropertyCardProps {
  prop: PropertyItem;
}

const PropertyCard = ({ prop }: PropertyCardProps) => {
  return (
    <SecondaryCard className="w-full flex flex-col">
      {/* Image */}
      <div className="flex gap-2 2xl:[10px] w-[30px] h-[30px] md:w-[38px] md:h-[38px] 2xl:w-11 2xl:h-11">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Image
            key={idx}
            src={yellowstar}
            alt="Star"
            className="w-full h-full object-cover"
          />
        ))}
      </div>
     
      
      {/* Headings */}
      <div className="flex flex-col gap-1.5 md:gap-2.5  2xl:gap-3.5">
        <h3 className="font-urbanist font-semibold text-[18px] md:text-[20px] 2xl:text-[24px] leading-[140%] line-clamp-1">
          {prop.title}
        </h3>
        
        {/* Subtitle with inline Read More / Show Less */}
        
          <h4 className="font-urbanist font-medium text-[14px] md:text-[16px] 2xl:text-[18px] text-[#ffffff] leading-[140%]">
            {prop.subtitle}  
          </h4> 
      </div>
      
      {/* Price & Button Row */}
      <div className="flex flex-wrap items-center justify-between mt-2 gap-y-3">
    {/* User image, name, and place */}
    <div className="flex items-center gap-3">
      <Image
        src={prop.image}
        alt={prop.title}
        className="rounded-full w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] object-cover border border-[#262626] bg-[#1A1A1A]"
      />
      <div className="flex flex-col">
        <span className="font-urbanist font-semibold text-white text-[16px] 2xl:text-[20px] leading-tight">John Doe</span>
        <span className="font-urbanist text-[#999999] text-[14px] 2xl:text-[16px] leading-tight">New York, USA</span>
      </div>
    </div>
      </div>
    </SecondaryCard>
  );
};

export default Client;