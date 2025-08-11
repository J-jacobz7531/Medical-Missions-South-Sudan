import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    console.log('Contact form submitted:', formData);
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
      <div>
        {/* Hero Section with Blurred Background */}
        <section className="relative bg-gradient-to-br from-[#65a8b0] to-[#d1dfe0] py-24">
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
      </div>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-dark-blue mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-blue mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark-blue mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Please share your message, questions, or how you'd like to get involved."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-teal text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {/* General Information Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-r from-primary-teal to-blue-400 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-dark-blue mb-4">General Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary-teal/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-700">Email</h3>
                          <p className="text-primary-teal font-medium hover:underline">
                            <a href="mailto:mmsouthsudan@gmail.com">mmsouthsudan@gmail.com</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary-teal/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-700">Phone</h3>
                          <p className="text-primary-teal font-medium hover:underline">
                            <a href="tel:+211929502970">+211 929 502 970</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary-teal/10 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-700">Office Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Address & Partnerships Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-dark-blue mb-4">Office Address</h2>
                    
                    <div className="mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-600 leading-relaxed">
                            Palakal, Junction-Kapoeta town Rd<br />
                            Juba, South Sudan<br />
                            Kapoeta Municipality<br />
                            Eastern Equatoria State
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-dark-blue mb-3">Partnerships & Media</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-700 text-sm">Partnerships</h4>
                          <p className="text-blue-600 text-sm font-medium hover:underline">
                            <a href="mailto:partnerships@mmssd.org">partnerships@mmssd.org</a>
                          </p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-700 text-sm">Media Inquiries</h4>
                          <p className="text-blue-600 text-sm font-medium hover:underline">
                            <a href="mailto:media@mmssd.org">media@mmssd.org</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Donations & Finance Card */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-r from-primary-red to-red-400 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-primary-red mb-4">Donations & Finance</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-700 mb-1 text-sm">Donation Questions</h3>
                        <p className="text-red-600 font-medium text-sm hover:underline">
                          <a href="mailto:donations@mmssd.org">donations@mmssd.org</a>
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-700 mb-1 text-sm">Registration No.</h3>
                        <p className="text-gray-700 font-medium">3871</p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-700 mb-1 text-sm">Registered Charity</h3>
                        <p className="text-gray-700 font-medium">SSRRC</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a href="/donate" className="block w-full bg-primary-red text-white text-center py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
                        Make a Donation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
