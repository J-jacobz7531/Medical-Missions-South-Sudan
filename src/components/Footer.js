import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/medical-mission-logo-new.png';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Medical Mission Logo" className="h-16 w-auto mr-3" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              A Christian Humanitarian Non-Governmental Organisation bringing hope and healing to the most vulnerable in South Sudan and East Africa.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Registration No:</span> 3871
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Registered Charity:</span> SSRRC
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-teal transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-primary-teal transition-colors duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-300 hover:text-primary-teal transition-colors duration-200">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-teal transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-teal transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-300">mmsouthsudan@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-300">+211929502970</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Palakal, Junction-Kapoeta town Rd<br />
                    Eastern Equatoria State<br />
                    South Sudan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
                <div>
                  <p className="text-gray-300">www.mmssd.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation CTA */}
        {/* <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Help Us Make a Difference
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Your support directly impacts lives in South Sudan. Every donation helps us provide essential healthcare, education, and hope.
            </p>
            <Link 
              to="/donate" 
              className="inline-block bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
            >
              Donate Now
            </Link>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              2024 Medical Mission - South Sudan. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-teal transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-teal transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;