import React from 'react';
import { motion } from 'framer-motion';

const ModernCard = ({ title, description, linkText, linkUrl, children }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 font-serif"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 font-serif">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-4 font-serif">{description}</p>
      )}
      {children}
      {linkText && linkUrl && (
        <div className="mt-4">
          <a 
            href={linkUrl} 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center font-serif"
          >
            {linkText}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ModernCard;
