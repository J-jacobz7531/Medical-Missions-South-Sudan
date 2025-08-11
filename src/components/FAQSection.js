import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How can I be sure my donation reaches those in need?",
    answer: "We maintain full transparency with 85% of donations going directly to programs. We provide detailed impact reports and are audited annually by independent firms."
  },
  {
    question: "Can I visit your projects in South Sudan?",
    answer: "We organize donor visits and volunteer opportunities throughout the year. Contact us for information about upcoming trips and safety requirements."
  },
  {
    question: "How do you ensure cultural sensitivity in your programs?",
    answer: "All our programs are designed and implemented in partnership with local communities. Our team is majority South Sudanese, ensuring authentic cultural understanding."
  },
  {
    question: "What makes Medical Mission different from other NGOs?",
    answer: "Our focus on sustainable, community-led solutions and our commitment to training local healthcare workers ensures long-term impact beyond our direct intervention."
  },
  {
    question: "How can I get involved beyond donating?",
    answer: "We offer volunteer opportunities, advocacy programs, and partnership initiatives. You can also help by spreading awareness about our mission in your community."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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

  const faqItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 lg:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-text max-w-2xl mx-auto">
            Common questions about our mission and work
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
              custom={index}
              variants={faqItemVariants}
            >
              <motion.button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-opacity-50"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(0, 128, 128, 0.05)" }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <motion.svg
                  className="w-5 h-5 text-primary-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
