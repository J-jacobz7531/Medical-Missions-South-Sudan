import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImagesSlider = ({ images, children, className = "", autoPlay = true, direction = "up", onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        if (onSlideChange) onSlideChange(newIndex);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, autoPlay, onSlideChange]);

  useEffect(() => {
    if (onSlideChange) onSlideChange(currentIndex);
  }, [currentIndex, onSlideChange]);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00ff",
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      if (onSlideChange) onSlideChange(newIndex);
      return newIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      if (onSlideChange) onSlideChange(newIndex);
      return newIndex;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (onSlideChange) onSlideChange(index);
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial="hiddenRight"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        {children}
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <motion.button
          variants={slidersVariants}
          whileHover="hover"
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300"
          onClick={handlePrevious}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <motion.button
          variants={slidersVariants}
          whileHover="hover"
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white transition-all duration-300"
          onClick={handleNext}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={index === currentIndex ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          />
        ))}
      </div>
    </div>
  );
};
