import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ourworkBg from '../assets/images/background.jpg';
import { Button } from '../components/ui/button';

// Images are imported locally from assets folder
import heroBgImage from '../assets/images/our-work-hero.png';
import mobileClinicImg1 from '../assets/images/background.jpg';
import mobileClinicImg2 from '../assets/images/background.jpg';
import mobileClinicImg3 from '../assets/images/background.jpg';
import mobileClinicImg4 from '../assets/images/background.jpg';
import mobileClinicImg5 from '../assets/images/background.jpg';
import mobileClinicImg6 from '../assets/images/background.jpg';
import mobileClinicImg7 from '../assets/images/background.jpg';
import mobileClinicImg8 from '../assets/images/background.jpg';

const OurWorkPage = () => {
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
  // The array uses the imported image variables
  const mobileClinicImages = [
    mobileClinicImg1,
    mobileClinicImg2,
    mobileClinicImg3,
    mobileClinicImg4,
    mobileClinicImg5,
    mobileClinicImg6,
    mobileClinicImg7,
    mobileClinicImg8
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % mobileClinicImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [mobileClinicImages.length]);

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section with Blurred Background */}
        <section className="relative bg-gradient-to-br from-blue-600/90 via-blue-800/10 to-indigo-600/90 text-white py-24">
          {/* Background image layer */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${ourworkBg})`, opacity: 0.5 }}
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
                Our Work & Impact
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
              >
                Transforming lives through comprehensive programs that address immediate needs 
                while building long-term resilience and self-sufficiency.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Program Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Program Areas</h2>
            
            <div className="space-y-12">
              {/* Mobile Clinics */}
              <Card 
                className="overflow-hidden relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('${mobileClinicImages[currentImageIndex]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'background-image 1s ease-in-out'
                }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-100/80 backdrop-blur-sm p-8 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">Mobile Clinics</h3>
                      <p className="text-blue-800 font-semibold">Bringing Healthcare to Communities</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 bg-white/90 backdrop-blur-sm">
                    <h4 className="text-2xl font-semibold mb-4">Healing with Christ's Love</h4>
                    <p className="text-gray-700 mb-4">
                      Through mobile outreach, MM brings medical services directly to those with little or no access to healthcare, 
                      combining treatment with prayer, encouragement, and emotional support to reflect Christ's healing presence.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Tuberculosis Community Program */}
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-2xl font-semibold mb-4">Tuberculosis Community Program</h4>
                    <p className="text-gray-700 mb-4">
                      In collaboration with local health authorities, MM leads an active TB awareness, screening, and referral program, helping to identify and support TB cases early—especially in resource-limited areas where delayed diagnosis often worsens outcomes. Our volunteers not only raise awareness but walk alongside patients throughout their treatment journey, offering spiritual encouragement and support.
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-purple-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-purple-600 mb-2">TB Program</h3>
                      <p className="text-purple-800 font-semibold">Early Detection & Support</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Community Health Training */}
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-cyan-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-cyan-600 mb-2">Health Training</h3>
                      <p className="text-cyan-800 font-semibold">Community Capacity Building</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-2xl font-semibold mb-4">Community Health Training</h4>
                    <p className="text-gray-700 mb-4">
                      Recognizing the vital role of grassroots capacity, MM trained Traditional Birth Attendants (TBAs) and Adolescent Sexual and Reproductive Health (ASHR) advocates to strengthen safe deliveries, promote reproductive health awareness, and reduce preventable maternal and neonatal complications—empowering them to care for their communities both medically and spiritually.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Emergency Response */}
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-2xl font-semibold mb-4">Emergency Response</h4>
                    <p className="text-gray-700 mb-4">
                      MM has demonstrated swift, life-saving action in crisis settings. Most recently, the team mobilized during the cholera outbreak in Kapoeta, conducting community sensitization, distributing emergency supplies, and setting up treatment support in affected areas. MM operates with urgency and grace—bringing hope, healing, and the message that every life matters to God.
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-green-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-green-600 mb-2">Emergency</h3>
                      <p className="text-green-800 font-semibold">Swift Crisis Response</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-600">Grace's Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    "Before the school was built, I had to walk 8 kilometers to the nearest one. 
                    Now I can focus on my studies. I want to become a doctor to help my community."
                  </p>
                  <p className="text-sm font-semibold text-gray-600">- Grace, Age 14, Student</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-green-600">Mary's Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    "The mobile clinic saved my baby's life during a difficult birth. Now I help 
                    train other women in our community about maternal health and safe delivery practices."
                  </p>
                  <p className="text-sm font-semibold text-gray-600">- Mary, Community Health Worker</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Be Part of This Transformation</h2>
            <p className="text-xl mb-8">
              Your support directly funds these life-changing programs. Join us in building 
              a brighter future for South Sudan.
            </p>
            <Link to="/donate">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3">
                Support Our Work
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurWorkPage;
