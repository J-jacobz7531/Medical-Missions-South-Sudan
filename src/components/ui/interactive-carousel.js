import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const InteractiveCarousel = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 max-w-7xl mx-auto">
      {items.map((item, idx) => (
        <div 
          key={idx}
          className="group relative h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className={cn(
              "relative h-full w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300",
              "hover:shadow-xl hover:border-blue-300 hover:scale-[1.02] hover:-translate-y-1"
            )}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background effect */}
            <div 
              className={cn(
                "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 -z-10",
                "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20",
                "group-hover:opacity-100"
              )}
            />
            
            {/* 3D tilt effect */}
            <motion.div 
              className="h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: hoveredIndex === idx ? -5 : 0,
                rotateY: hoveredIndex === idx ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm mb-4">
                {item.icon}
              </div>
              
              <h3 className="font-sans text-xl font-semibold text-balance text-black mb-2 md:text-2xl dark:text-white">
                {item.title}
              </h3>
              
              <p className="font-sans text-sm text-gray-700 md:text-base dark:text-neutral-400">
                {item.description}
              </p>
              
              {/* Animated border */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
