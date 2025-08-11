import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, MapPin } from '../components/ui/icons';

// Import placeholder images
import placeholderImage1 from '../assets/images/background.jpg';
import placeholderImage2 from '../assets/images/background.jpg';
import placeholderImage3 from '../assets/images/background.jpg';
import placeholderImage4 from '../assets/images/background.jpg';
import galleryBg from '../assets/images/background.jpg';

// Create the additional icons needed for this page
const X = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

const ArrowRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const GalleryPage = () => {
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
  
  const statsContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.9
      }
    }
  };
  
  const statsItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      } 
    }
  };
  const [open, setOpen] = React.useState(false); // Correct useState import
  const [selectedItem, setSelectedItem] = React.useState(null); // Correct useState import
  const navigate = useNavigate();

  const impactStories = [
    {
      id: 'healthcare-1',
      src: placeholderImage1,
      title: 'Transforming Healthcare Access',
      description: 'Mobile clinics bring essential medical services directly to remote communities',
      impact: 'Over 15,000 patients treated in underserved areas',
      category: 'healthcare',
      stats: [
        { label: 'Patients Served', value: '15,000+' },
        { label: 'Villages Reached', value: '120' },
        { label: 'Medical Procedures', value: '8,500' }
      ]
    },
    {
      id: 'education-1',
      src: placeholderImage2,
      title: 'Health Education Programs',
      description: 'Community workshops teaching preventive care and hygiene practices',
      impact: 'Trained 5,000+ community health advocates',
      category: 'education',
      stats: [
        { label: 'People Trained', value: '5,000+' },
        { label: 'Workshops Held', value: '200' },
        { label: 'Health Topics Covered', value: '25' }
      ]
    },
    {
      id: 'healthcare-2',
      src: placeholderImage3,
      title: 'Maternal & Child Health',
      description: 'Specialized care for mothers and children ensuring healthy futures',
      impact: 'Reduced infant mortality by 40% in target areas',
      category: 'healthcare',
      stats: [
        { label: 'Safe Deliveries', value: '2,800' },
        { label: 'Vaccination Rate', value: '85%' },
        { label: 'Mortality Reduction', value: '40%' }
      ]
    },
    {
      id: 'community-1',
      src: placeholderImage4,
      title: 'Community Partnerships',
      description: 'Building lasting relationships with local leaders and communities',
      impact: 'Established healthcare networks in 50+ communities',
      category: 'community',
      stats: [
        { label: 'Communities', value: '50+' },
        { label: 'Local Partners', value: '180' },
        { label: 'Healthcare Networks', value: '25' }
      ]
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // A small delay can make the closing animation feel smoother
    setTimeout(() => setSelectedItem(null), 300);
  };
  
  const handleDialogChange = (isOpen) => {
    if (!isOpen) handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'healthcare': return <Heart className="h-5 w-5" />;
      case 'education': return <Users className="h-5 w-5" />;
      case 'community': return <MapPin className="h-5 w-5" />;
      default: return <Heart className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'healthcare': return 'from-emerald-500 to-teal-600';
      case 'education': return 'from-blue-500 to-indigo-600';
      case 'community': return 'from-purple-500 to-pink-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${galleryBg})`,
      }}
    >
      {/* Background overlay for better text readability with backdrop blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10">
        <div className="pt">
          {/* Impact-Focused Hero Section (Code remains the same) */}
          <section className="bg-gradient-to-br from-blue-600/90 via-blue-800/10 to-indigo-600/90 text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Heart className="h-12 w-12 text-red-400 animate-pulse" />
                  <motion.h1 
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                    variants={headingVariants}
                    initial="initial"
                    animate="animate"
                  >
                    Impact Stories
                  </motion.h1>
                </div>
                <motion.p 
                  className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8"
                  variants={paragraphVariants}
                  initial="initial"
                  animate="animate"
                >
                  See how your donations transform lives across South Sudan. Every contribution creates lasting change, 
                  bringing hope, healing, and opportunity to those who need it most.
                </motion.p>
                <motion.div 
                  className="flex justify-center gap-8 text-center"
                  variants={statsContainerVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4" variants={statsItemVariants}>
                    <div className="text-3xl font-bold text-white">50,000+</div>
                    <div className="text-blue-200">Lives Impacted</div>
                  </motion.div>
                  <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4" variants={statsItemVariants}>
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-blue-200">Communities Served</div>
                  </motion.div>
                  <motion.div className="bg-white/10 backdrop-blur-sm rounded-lg p-4" variants={statsItemVariants}>
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-blue-200">Donation Efficiency</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Impact Stories Grid (Code remains the same) */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Each image represents real impact made possible by generous donors like you
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {impactStories.map((story) => (
                  <Card 
                    key={story.id} 
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                    onClick={() => handleItemClick(story)}
                  >
                    <div className="relative">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={story.src}
                          alt={story.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <div className={`flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(story.category)} text-white shadow-lg`}>
                          {getCategoryIcon(story.category)}
                          <span className="text-sm font-medium capitalize">{story.category}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white">
                            <div className="text-sm text-green-300 font-medium mb-1">Impact Achieved</div>
                            <div className="text-lg font-semibold">{story.impact}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {story.description}
                      </p>
                      {story.stats && (
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                          {story.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-sm text-gray-500">Click to learn more</span>
                        <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section (Code remains the same) */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Heart className="h-16 w-16 text-red-300 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl font-bold mb-6">Your Donation Creates Stories Like These</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Join us in transforming lives across South Sudan. Every donation, no matter the size, 
                contributes to these powerful stories of hope, healing, and lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" onClick={() => navigate('/donate')}>
                  Donate Now
                </Button>
                <Button size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 border" onClick={() => navigate('/workflows')}>
                  Learn More About Our Work
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Enhanced Impact Story Dialog - Card Layout */}
        <Dialog open={open} onOpenChange={handleDialogChange}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-transparent border-0 shadow-none" style={{ maxHeight: 'calc(90vh)' }}>
            {selectedItem && (
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <Button
                  className="absolute top-4 right-4 z-30 bg-black/70 border-none text-white hover:bg-black/90 rounded-full h-10 w-10 p-0 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  onClick={handleClose}
                >
                  <X className="h-5 w-5" />
                </Button>
                
                {/* Hero Image Card */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(selectedItem.category)} text-white shadow-lg backdrop-blur-sm`}>
                      {getCategoryIcon(selectedItem.category)}
                      <span className="text-sm font-semibold capitalize">{selectedItem.category}</span>
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {selectedItem.title}
                    </h2>
                  </div>
                </div>

                {/* Content Cards Container */}
                <div className="p-6 max-h-[50vh] overflow-y-auto">
                  <div className="grid gap-6">
                    
                    {/* Description Card */}
                    <Card className="border-0 shadow-sm bg-gray-50">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          About This Initiative
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Impact Achievement Card */}
                    <Card className="border-0 shadow-sm bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-green-800 mb-1">Impact Achieved</h3>
                            <p className="text-green-700 font-medium text-lg">{selectedItem.impact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Statistics Cards */}
                    {selectedItem.stats && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Key Statistics
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {selectedItem.stats.map((stat, index) => (
                            <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow duration-200">
                              <CardContent className="p-4 text-center">
                                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                                  {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                  {stat.label}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Call to Action Card */}
                    <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <CardContent className="p-6 text-center">
                        <Heart className="h-8 w-8 mx-auto mb-3 text-red-300" />
                        <h3 className="text-xl font-bold mb-2">Help Us Continue This Work</h3>
                        <p className="text-blue-100 mb-4">
                          Your donation directly supports initiatives like this one, creating lasting change in communities across South Sudan.
                        </p>
                        <Button 
                          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105" 
                          onClick={() => {
                            handleClose();
                            navigate('/donate');
                          }}
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Support This Cause
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GalleryPage;