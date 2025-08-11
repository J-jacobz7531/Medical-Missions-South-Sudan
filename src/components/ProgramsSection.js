import React from 'react';
import { motion } from 'framer-motion';

const programsData = [
    { title: 'Education & Literacy', description: 'Building schools, training teachers, and providing educational materials to ensure every child has access to quality education.' },
    { title: 'Clean Water & Sanitation', description: 'Drilling wells, building latrines, and teaching hygiene practices to prevent disease and save lives.' },
    { title: 'Healthcare Access', description: 'Mobile clinics, maternal health programs, and vaccination campaigns bringing essential healthcare to remote communities.' },
];

const ProgramsSection = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.1
      }
    })
  };

  return (
    <motion.section 
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive support for lasting change</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.map((program, i) => (
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100" 
              key={program.title}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <h4 className="text-xl font-semibold text-primary-teal mb-3">{program.title}</h4>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProgramsSection;