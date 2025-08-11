import React, { useState, useEffect, useRef, Children, cloneElement } from 'react';

const Carousel = ({ children, className = "", ...props }) => {
  return (
    <div className={`relative w-full ${className}`} {...props}>
      {children}
    </div>
  );
};

const CarouselContent = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`flex overflow-hidden -mx-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CarouselItem = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`px-1 min-w-0 flex-shrink-0 flex-grow-0 ${className}`}
      style={{ flex: '0 0 100%' }}
      {...props}
    >
      {children}
    </div>
  );
};

const CarouselPrevious = ({ className = "", ...props }) => {
  return (
    <button
      className={`absolute left-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors ${className}`}
      {...props}
      aria-label="Previous slide"
      onClick={() => {
        // Find the parent carousel and scroll it
        const carousel = document.querySelector('.flex.overflow-hidden');
        if (carousel) {
          const scrollAmount = carousel.clientWidth;
          carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </button>
  );
};

const CarouselNext = ({ className = "", ...props }) => {
  return (
    <button
      className={`absolute right-1 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors ${className}`}
      {...props}
      aria-label="Next slide"
      onClick={() => {
        // Find the parent carousel and scroll it
        const carousel = document.querySelector('.flex.overflow-hidden');
        if (carousel) {
          const scrollAmount = carousel.clientWidth;
          carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  );
};

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
