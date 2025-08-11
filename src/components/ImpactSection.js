import React from 'react';
import { motion } from 'framer-motion';

const impactData = [
  { 
    value: '300+', 
    label: 'Patients Treated',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-primary-teal'
  },
  { 
    value: '20+', 
    label: 'Staff Advocates Trained',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
      </svg>
    ),
    color: 'text-blue-600'
  },
  { 
    value: '85%', 
    label: 'Goes to Programs',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
    color: 'text-green-600'
  },
  { 
    value: '40+', 
    label: 'Patients Educated',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    color: 'text-yellow-600'
  },
];

const ImpactSection = () => {
  // Animation variants
  const titleVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: i => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1
      }
    })
  };

  const iconVariants = {
    offscreen: { scale: 0 },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.6
      }
    }
  };

  const countVariants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="bg-light-teal-bg py-16 lg:py-24"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Making a real difference in South Sudan's communities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, i) => (
            <motion.div 
              key={item.label}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              custom={i}
              variants={cardVariants}
            >
              <motion.div 
                className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.color} bg-opacity-10`}
                variants={iconVariants}
              >
                {item.icon}
              </motion.div>
              <motion.h3 
                className="text-3xl font-bold mb-2 text-gray-800"
                variants={countVariants}
              >
                {item.value}
              </motion.h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;