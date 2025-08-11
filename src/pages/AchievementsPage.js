import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Users, Heart, GraduationCap, Briefcase, Stethoscope, Shield, Camera } from 'lucide-react';

import placeholderImage1 from '../assets/images/background.jpg';
import placeholderImage2 from '../assets/images/background.jpg';
import placeholderImage3 from '../assets/images/background.jpg';
import placeholderImage4 from '../assets/images/background.jpg';
import placeholderImage5 from '../assets/images/background.jpg';
import placeholderImage6 from '../assets/images/background.jpg';

const AchievementsPage = () => {
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
  const galleryImages = [
    { src: placeholderImage1, alt: "Medical professional providing healthcare services to community members", caption: "Mobile clinic services reaching remote communities" },
    { src: placeholderImage2, alt: "Healthcare worker conducting eye examination", caption: "Comprehensive health check-ups and treatments" },
    { src: placeholderImage3, alt: "Medical consultation in rural setting", caption: "Providing essential medical care to underserved areas" },
    { src: placeholderImage4, alt: "Community members receiving healthcare services", caption: "Maternal and child health support programs" },
    { src: placeholderImage5, alt: "Community education session with villagers", caption: "Health education and awareness programs" },
    { src: placeholderImage6, alt: "Women's economic empowerment initiative", caption: "Supporting women's economic independence" }
  ];

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section with Blurred Background */}
        <section className="relative bg-gradient-to-br from-[#65a8b0] to-[#d1dfe0] py-24">
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
      </div>

      <main>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact in Pictures</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">Explore our gallery showcasing the impact of our medical missions in South Sudan.</p>
            </div>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="m-1 h-full">
                      <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                      <CardContent>
                        <p className="text-sm text-gray-600">{image.caption}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Year 2023 - Major Milestones</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                With significant community support, we made major strides in healthcare and economic empowerment across South Sudan, touching hundreds of lives through targeted interventions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-blue-500 to-orange-500 rounded-full hidden lg:block"></div>
              <div className="space-y-16">
                {/* 1. Mobile Clinics - Left Side */}
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="w-full lg:w-1/2 lg:pr-4">
                    <Card className="border-2 border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden rounded-xl">
                      <div className="relative">
                        <img src={placeholderImage1} alt="Large community gathering for mobile clinic services" className="h-48 w-full object-cover" />
                        <div className="absolute top-3 right-3 bg-green-600 p-2 rounded-full">
                          <Stethoscope className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <CardContent>
                        <h3 className="text-xl font-bold text-green-600 mb-2">Mobile Clinics</h3>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Implemented 2 mobile clinics (April & August)</li>
                          <li>• Served 300+ patients across 5 remote villages</li>
                          <li>• Provided vaccinations, prenatal care, and general consultations</li>
                          <li>• Distributed essential medications and hygiene kits</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-lg z-10"></div>
                  <div className="w-full lg:w-1/2 lg:pl-4"></div>
                </div>

                {/* 2. Maternal Services - Right Side */}
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="w-full lg:w-1/2 lg:pr-4 order-2 lg:order-2"></div>
                  <div className="hidden lg:block w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow-lg z-10 order-1 lg:order-1"></div>
                  <div className="w-full lg:w-1/2 lg:pl-4 order-1 lg:order-3">
                    <Card className="border-2 border-pink-100 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden rounded-xl">
                      <div className="relative">
                        <img src={placeholderImage2} alt="Maternal health services being provided to women" className="h-48 w-full object-cover" />
                        <div className="absolute top-3 right-3 bg-pink-500 p-2 rounded-full">
                          <Heart className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <CardContent>
                        <h3 className="text-xl font-bold text-pink-500 mb-2">Maternal Services</h3>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Trained 20 traditional birth attendants</li>
                          <li>• Provided prenatal care to 50+ expectant mothers</li>
                          <li>• Distributed clean birth kits and supplies</li>
                          <li>• Conducted workshops on safe birthing practices</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 3. Health Education in Schools - Left Side */}
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="w-full lg:w-1/2 lg:pr-4">
                    <Card className="border-2 border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden rounded-xl">
                      <div className="relative">
                        <img src={placeholderImage3} alt="Children in a classroom learning about health" className="h-48 w-full object-cover" />
                        <div className="absolute top-3 right-3 bg-blue-600 p-2 rounded-full">
                          <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <CardContent>
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Health Education in Schools</h3>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Reached 2 schools and over 40 children</li>
                          <li>• Taught basic hygiene and disease prevention</li>
                          <li>• Distributed educational materials and hygiene supplies</li>
                          <li>• Trained teachers on health education curriculum</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
                  <div className="w-full lg:w-1/2 lg:pl-4"></div>
                </div>

                {/* 4. Women's Economic Empowerment - Right Side */}
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="w-full lg:w-1/2 lg:pr-4 order-2 lg:order-2"></div>
                  <div className="hidden lg:block w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-lg z-10 order-1 lg:order-1"></div>
                  <div className="w-full lg:w-1/2 lg:pl-4 order-1 lg:order-3">
                    <Card className="border-2 border-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden rounded-xl">
                      <div className="relative">
                        <img src={placeholderImage4} alt="Women participating in economic empowerment program" className="h-48 w-full object-cover" />
                        <div className="absolute top-3 right-3 bg-orange-500 p-2 rounded-full">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <CardContent>
                        <h3 className="text-xl font-bold text-orange-500 mb-2">Women's Economic Empowerment</h3>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Established 2 women's cooperatives</li>
                          <li>• Trained 20+ women in business skills</li>
                          <li>• Provided startup capital and materials</li>
                          <li>• Created sustainable income opportunities</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AchievementsPage;