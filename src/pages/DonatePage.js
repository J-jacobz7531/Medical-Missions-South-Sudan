import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Building, Globe } from 'lucide-react';
import backgroundImage from '../assets/images/background.jpg';

const DonatePage = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: 0.2 
      } 
    }
  };
  
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

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setAmount(null);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount || customAmount;
    alert(`Thank you for your ${donationType} donation of $${finalAmount} via ${paymentMethod}!`);
  };

  return (
    <div className="min-h-screen">
      {/* Full page background image with gradient overlay */}
      <div className="fixed inset-0 z-[-2]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 1}}
        ></div>
        
        {/* Gradient overlay with blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#65a8b0]/80 to-[#d1dfe0]/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24">
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
                variants={headingVariants}
                initial="initial"
                animate="animate"
              >
                Donate Now
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                variants={paragraphVariants}
                initial="initial"
                animate="animate"
              >
                Your support brings hope and healing to the most vulnerable in South Sudan
              </motion.p>
            </div>
          </div>
        </section>
      </div>

      {/* Donation Form Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-xl shadow-xl overflow-hidden"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid md:grid-cols-2">
              {/* Left Column - Image and Impact */}
              <div className="bg-blue-900 text-white p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">
                  Donate Now.<br />Save Lives.
                </h2>
                <p className="mb-6 text-blue-100">
                  Now, more than ever, your support means everything. Families in South Sudan 
                  are struggling with limited access to healthcare, clean water, and basic necessities.
                </p>
                <p className="mb-6 text-blue-100">
                  Your gift will go to work right away, providing medical care, health education, 
                  and support for those who need it most.
                </p>
                <p className="font-semibold">
                  Make a tax-deductible donation today.
                </p>
              </div>

              {/* Right Column - Donation Form */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Donation Type</h3>
                
                {/* Donation Type Toggle */}
                <div className="bg-gray-100 rounded-lg p-1 flex mb-8">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md text-center transition-colors ${
                      donationType === 'one-time' 
                        ? 'bg-primary-teal text-white font-medium' 
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleDonationTypeChange('one-time')}
                  >
                    One time
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md text-center transition-colors ${
                      donationType === 'monthly' 
                        ? 'bg-primary-teal text-white font-medium' 
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleDonationTypeChange('monthly')}
                  >
                    Monthly
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Select Amount {donationType === 'monthly' ? '(monthly)' : ''}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <button
                        type="button"
                        className={`py-3 border rounded-md transition-colors ${
                          amount === 100 ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handleAmountSelect(100)}
                      >
                        $100{donationType === 'monthly' ? '/mo' : ''}
                      </button>
                      <button
                        type="button"
                        className={`py-3 border rounded-md transition-colors ${
                          amount === 50 ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handleAmountSelect(50)}
                      >
                        $50{donationType === 'monthly' ? '/mo' : ''}
                      </button>
                      <button
                        type="button"
                        className={`py-3 border rounded-md transition-colors ${
                          amount === 35 ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handleAmountSelect(35)}
                      >
                        $35{donationType === 'monthly' ? '/mo' : ''}
                      </button>
                      <button
                        type="button"
                        className={`py-3 border rounded-md transition-colors ${
                          amount === 20 ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handleAmountSelect(20)}
                      >
                        $20{donationType === 'monthly' ? '/mo' : ''}
                      </button>
                    </div>
                    
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        placeholder="Other amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className={`w-full pl-8 pr-4 py-3 border rounded-md transition-colors ${
                          customAmount ? 'border-primary-teal bg-primary-teal/10' : 'border-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {/* Payment Method Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Select Payment Method
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className={`flex items-center justify-center py-3 px-4 border rounded-md transition-colors ${
                          paymentMethod === 'credit-card' ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handlePaymentMethodChange('credit-card')}
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
                        Credit Card
                      </button>
                      <button
                        type="button"
                        className={`flex items-center justify-center py-3 px-4 border rounded-md transition-colors ${
                          paymentMethod === 'paypal' ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handlePaymentMethodChange('paypal')}
                      >
                        <Wallet className="mr-2 h-5 w-5" />
                        PayPal
                      </button>
                      <button
                        type="button"
                        className={`flex items-center justify-center py-3 px-4 border rounded-md transition-colors ${
                          paymentMethod === 'bank-transfer' ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handlePaymentMethodChange('bank-transfer')}
                      >
                        <Building className="mr-2 h-5 w-5" />
                        Bank Transfer
                      </button>
                      <button
                        type="button"
                        className={`flex items-center justify-center py-3 px-4 border rounded-md transition-colors ${
                          paymentMethod === 'mobile-money' ? 'border-primary-teal bg-primary-teal/10 text-primary-teal font-medium' : 'border-gray-300 hover:border-primary-teal'
                        }`}
                        onClick={() => handlePaymentMethodChange('mobile-money')}
                      >
                        <Globe className="mr-2 h-5 w-5" />
                        Mobile Money
                      </button>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!amount && !customAmount}
                    className={`w-full py-4 px-6 rounded-md text-white font-semibold text-lg transition-transform transform hover:scale-[1.02] ${
                      amount || customAmount ? 'bg-primary-teal' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Donate {amount || customAmount ? `$${amount || customAmount}` : 'Now'}
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Your donation is tax-deductible to the extent allowed by law.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
          
          {/* Impact Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">$20</h3>
              <p className="text-gray-600">
                Provides essential medications for one patient at our mobile clinic
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">$50</h3>
              <p className="text-gray-600">
                Supports health education for a school, reaching dozens of children
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">$100</h3>
              <p className="text-gray-600">
                Funds a day of mobile clinic operations in a remote village
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
