import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ModernCard from '../components/ui/modern-card';

const ContactPage = () => {
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Blurred Background - extends to top of page */}
      <section className="relative bg-gradient-to-br from-[#65a8b0] to-[#d1dfe0] pt-32 pb-24 -mt-20">
          {/* Background image layer */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${require('../assets/images/background.jpg')})`, opacity: 0.6 }}
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
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
              >
                We'd love to hear from you. Reach out with questions, partnership opportunities, or to learn more about our work in South Sudan.
              </motion.p>
            </div>
          </div>
        </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <ModernCard title="Send us a Message">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-600 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder="Please share your message, questions, or how you'd like to get involved."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-teal text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </ModernCard>
            </div>

            {/* Contact Information Cards */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Contact Information Card */}
                <ModernCard title="Contact Information">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Email</h4>
                      <p className="text-primary-teal font-medium hover:underline">
                        <a href="mailto:mmsouthsudan@gmail.com">mmsouthsudan@gmail.com</a>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Phone</h4>
                      <p className="text-primary-teal font-medium hover:underline">
                        <a href="tel:+211929502970">+211 929 502 970</a>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Office Hours</h4>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </ModernCard>

                {/* Office Address Card */}
                <ModernCard title="Office Address">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Palakal, Junction-Kapoeta town Rd<br />
                      Juba, South Sudan<br />
                      Kapoeta Municipality<br />
                      Eastern Equatoria State
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Partnerships & Media</h4>
                      <div className="space-y-2">
                        <p className="text-primary-teal text-sm font-medium hover:underline">
                          <a href="mailto:partnerships@mmssd.org">partnerships@mmssd.org</a>
                        </p>
                        <p className="text-primary-teal text-sm font-medium hover:underline">
                          <a href="mailto:media@mmssd.org">media@mmssd.org</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </ModernCard>

                {/* Donations & Finance Card */}
                <ModernCard 
                  title="Donations & Finance" 
                  linkText="Make a Donation" 
                  linkUrl="/donate"
                >
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Donation Questions</h4>
                      <p className="text-primary-teal text-sm font-medium hover:underline">
                        <a href="mailto:donations@mmssd.org">donations@mmssd.org</a>
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Registration No.</h4>
                      <p className="text-gray-700 font-medium">3871</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500">Registered Charity</h4>
                      <p className="text-gray-700 font-medium">SSRRC</p>
                    </div>
                  </div>
                </ModernCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
