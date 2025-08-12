import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import homeBg from '../assets/images/background.jpg';

const Hero = () => {
  // Animation variants

  const headingVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.5 
      } 
    }
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: 0.7 
      } 
    }
  };

  const buttonContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.9
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      } 
    },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2 
      } 
    }
  };

  return (
    <section className="relative pt-32 pb-24 -mt-20 overflow-hidden bg-gradient-to-br from-[#65a8b0] to-[#d1dfe0]">
      {/* Background image with overlay and blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${homeBg})`,
          opacity: 0.6
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10">

      {/* Heart Icon */}
      {/* <motion.div 
        className="absolute top-16 left-1/2 transform -translate-x-1/2"
        variants={heartIconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-primary-teal" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
      </motion.div> */}

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-16">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          Healing Nations
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={paragraphVariants}
          initial="initial"
          animate="animate"
        >
          Providing essential healthcare services and humanitarian aid to vulnerable communities in South Sudan
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={buttonContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link 
              to="/donate" 
              className="bg-white text-primary-teal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg block"
            >
              Donate Now
            </Link>
          </motion.div>
          
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-teal transition-colors duration-200 block"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;