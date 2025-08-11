import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ImpactSection from '../components/ImpactSection';
import ProgramsSection from '../components/ProgramsSection';
import FAQSection from '../components/FAQSection';

const HomePage = () => {
  // Staggered animation for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <ImpactSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <ProgramsSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <FAQSection />
      </motion.div>
      {/* You can add more sections here as you build them */}
    </motion.main>
  );
};

export default HomePage;