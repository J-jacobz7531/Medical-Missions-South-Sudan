import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="bg-red-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Every Donation Saves Lives
        </h2>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
          Join thousands of supporters making a real difference in South Sudan. 
          Your contribution directly funds life-changing programs.
        </p>
        <div className="flex flex-col items-center">
          <Link 
            to="/donate" 
            className="bg-white text-red-800 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Make a Donation
          </Link>
          <Link 
            to="/about" 
            className="bg-white text-red-800 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 mt-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
