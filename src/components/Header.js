import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/medical-mission-logo-new.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Navigate to home page and refresh
    navigate('/');
    window.location.reload();
  };

  return (
    // Glassmorphism effect with backdrop blur
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16"> {/* Increased height slightly for better spacing */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Medical Mission Logo" 
              className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={handleLogoClick}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                // Changed text color to white for better contrast
                `text-white hover:text-primary-red transition-colors duration-300 text-xs uppercase tracking-wider font-medium ${
                  isActive ? 'text-primary-red' : '' // Simplified active state, removed border
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-white hover:text-primary-red transition-colors duration-300 text-xs uppercase tracking-wider font-medium ${
                  isActive ? 'text-primary-red' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/workflows" 
              className={({ isActive }) => 
                `text-white hover:text-primary-red transition-colors duration-300 text-xs uppercase tracking-wider font-medium ${
                  isActive ? 'text-primary-red' : ''
                }`
              }
            >
              Our Work
            </NavLink>
            <NavLink 
              to="/achievements" 
              className={({ isActive }) => 
                `text-white hover:text-primary-red transition-colors duration-300 text-xs uppercase tracking-wider font-medium ${
                  isActive ? 'text-primary-red' : ''
                }`
              }
            >
              Achievements
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `text-white hover:text-primary-red transition-colors duration-300 text-xs uppercase tracking-wider font-medium ${
                  isActive ? 'text-primary-red' : ''
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-white hover:text-primary-red transition-colors duration-300 text-xs uppercase tracking-wider font-medium ${
                  isActive ? 'text-primary-red' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/donate" 
              className="bg-primary-red text-white px-5 py-2 rounded-md text-xs font-medium uppercase tracking-wider hover:bg-red-700 transition-colors duration-300"
            >
              Donate Now
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-red focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/50 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <NavLink 
                to="/" 
                className="block px-3 py-2 text-gray-200 hover:text-primary-red text-base font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="block px-3 py-2 text-gray-200 hover:text-primary-red text-base font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/workflows" 
                className="block px-3 py-2 text-gray-200 hover:text-primary-red text-base font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </NavLink>
              <NavLink 
                to="/achievements" 
                className="block px-3 py-2 text-gray-200 hover:text-primary-red text-base font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </NavLink>
              <NavLink 
                to="/gallery" 
                className="block px-3 py-2 text-gray-200 hover:text-primary-red text-base font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/contact" 
                className="block px-3 py-2 text-gray-200 hover:text-primary-red text-base font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <div className="pt-4 space-y-3 border-t border-white/20 mt-4">
                <Link 
                  to="/donate" 
                  className="block w-full bg-primary-red text-white px-3 py-2 rounded-md text-sm font-medium uppercase text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate Now
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;