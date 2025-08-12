import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Heart, GraduationCap, Briefcase, Stethoscope, Users, BookOpen } from 'lucide-react';
import { ImagesSlider } from '../components/ui/images-slider';
import { InteractiveCarousel } from '../components/ui/interactive-carousel';


import placeholderImage1 from '../assets/images/background.jpg';
import placeholderImage2 from '../assets/images/background.jpg';
import placeholderImage3 from '../assets/images/background.jpg';
import placeholderImage4 from '../assets/images/background.jpg';
import placeholderImage5 from '../assets/images/background.jpg';
import placeholderImage6 from '../assets/images/background.jpg';

const AchievementsPage = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Content data for each slide
  const slideContent = [
    {
      title: "Mobile Clinics",
      subtitle: "Reaching Remote Communities",
      description: "Bringing essential healthcare directly to underserved villages across South Sudan",
      icon: Stethoscope,
      color: "green-400",
      stats: "300+ patients served",
      details: [
        "Implemented 2 mobile clinics (April & August)",
        "Treated over 300 patients",
        "Provided treatments, vaccinations, and health check-ups",
        "Reached remote and underserved areas"
      ]
    },
    {
      title: "Maternal Services",
      subtitle: "Supporting Mothers & Families",
      description: "Comprehensive maternal health programs ensuring safe pregnancies and births",
      icon: Heart,
      color: "pink-400",
      stats: "50+ mothers supported",
      details: [
        "Established prenatal and postnatal care programs",
        "Trained women on menstrual and general hygiene",
        "Distributed soaps for health promotion",
        "Trained 20+ traditional birth attendants",
        "Reduced maternal and infant mortality rates"
      ]
    },
    {
      title: "Health Education",
      subtitle: "Empowering Through Knowledge",
      description: "Comprehensive health education programs in schools and communities",
      icon: GraduationCap,
      color: "blue-400",
      stats: "40+ students educated",
      details: [
        "Mental health education curriculum",
        "Trained 40+ students on STD prevention",
        "Early pregnancy education",
        "Provided sanitary pads to girls"
      ]
    },
    {
      title: "Women's Empowerment",
      subtitle: "Building Economic Independence",
      description: "Empowering women through business skills and economic opportunities",
      icon: Briefcase,
      color: "orange-400",
      stats: "20+ women trained",
      details: [
        "Trained 20+ women in business skills",
        "Liquid soap production training",
        "Business management & financial literacy",
        "Enhanced economic independence"
      ]
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

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
  
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.9
      } 
    },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2 
      } 
    }
  };
  // Images for the slider
  const sliderImages = [
    placeholderImage1,
    placeholderImage2,
    placeholderImage3,
    placeholderImage4
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Blurred Background - extends to top of page */}
      <section className="relative bg-gradient-to-br from-[#65a8b0] to-[#d1dfe0] pt-32 pb-24 -mt-20">
          {/* Background image layer */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${placeholderImage1})`, opacity: 0.6 }}
          ></div>
          
          {/* Backdrop blur layer */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
                variants={headingVariants}
                initial="initial"
                animate="animate"
              >
                Our Achievements
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
              >
                Celebrating the impact of our medical missions and community development initiatives in South Sudan.
              </motion.p>
              <motion.div
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Button asChild className="bg-white text-blue-800 hover:bg-blue-50">
                  <Link to="/donate">Support Our Work</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

      <main>
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Impact Areas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
              Through our dedicated efforts, we've created meaningful change across several key areas in South Sudan.
            </p>
            
            <InteractiveCarousel 
              items={[
                {
                  icon: <Stethoscope className="w-6 h-6 text-blue-500" />,
                  title: "Mobile Medical Clinics",
                  description: "Bringing essential healthcare directly to remote villages, our mobile clinics have served over 300 patients with treatments, vaccinations, and health check-ups."
                },
                {
                  icon: <Heart className="w-6 h-6 text-pink-500" />,
                  title: "Maternal Health Services",
                  description: "Supporting mothers through prenatal care, birth assistance, and postnatal support, reducing maternal and infant mortality rates."
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-purple-500" />,
                  title: "Health Education",
                  description: "Empowering communities with knowledge about hygiene, disease prevention, and healthy living practices."
                },
                {
                  icon: <Users className="w-6 h-6 text-green-500" />,
                  title: "Community Engagement",
                  description: "Building relationships with local leaders and residents to ensure our programs meet real community needs."
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-yellow-500" />,
                  title: "Training Local Healthcare Workers",
                  description: "Developing skills among local healthcare providers to create sustainable medical support systems."
                },
                {
                  icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
                  title: "Women's Empowerment",
                  description: "Creating opportunities for women through skills training, education, and economic initiatives."
                }
              ]}
            />
          </div>
        </section>

        <section className="pb-0">
          <ImagesSlider 
            className="h-[50rem]" 
            images={sliderImages}
            onSlideChange={handleSlideChange}
          >
            <motion.div
              key={currentSlide}
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center px-4"
            >
              <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                {slideContent[currentSlide].title} <br /> {slideContent[currentSlide].subtitle}
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl text-center text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {slideContent[currentSlide].description}
              </motion.p>
              
              {/* Current slide details */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center justify-center mb-4">
                  {React.createElement(slideContent[currentSlide].icon, {
                    className: `w-10 h-10 text-${slideContent[currentSlide].color} mx-auto`
                  })}
                </div>
                <h3 className="text-white font-bold text-xl text-center mb-2">{slideContent[currentSlide].stats}</h3>
                <div className="space-y-2">
                  {slideContent[currentSlide].details.map((detail, index) => (
                    <motion.p 
                      key={index}
                      className="text-white/90 text-sm text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                    >
                      • {detail}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              <motion.button 
                className="px-6 py-3 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-emerald-300/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/donate" className="flex items-center space-x-2">
                  <span>Support Our Mission</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </motion.button>
            </motion.div>
          </ImagesSlider>
        </section>
      </main>
    </div>
  );
};

export default AchievementsPage;