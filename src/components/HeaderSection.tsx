'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Bandeau de lancement */}
      <div className="bg-[#1B4332] text-white py-2 text-center">
        <p className="text-sm font-medium">
          🚀 8 places disponibles pour le Bootcamp
        </p>
      </div>

      {/* Header principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#1B4332]">Pro Pass</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('bootcamp')}
              className="text-gray-700 hover:text-[#1B4332] transition-colors duration-300"
            >
              Programme
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-[#1B4332] transition-colors duration-300"
            >
              Résultats
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#1B4332] transition-colors duration-300"
            >
              FAQ
            </button>
          </nav>

          {/* Bouton de prise de rendez-vous */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B4332] text-white px-6 py-2 rounded-full hover:bg-[#2D6A4F] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Menu mobile button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('bootcamp')}
                className="text-gray-700 hover:text-[#1B4332] transition-colors duration-300 text-left"
              >
                Programme
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-700 hover:text-[#1B4332] transition-colors duration-300 text-left"
              >
                Résultats
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-[#1B4332] transition-colors duration-300 text-left"
              >
                FAQ
              </button>
              <a
                href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1B4332] text-white px-6 py-2 rounded-full hover:bg-[#2D6A4F] transition-all duration-300 shadow-md hover:shadow-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre rendez-vous
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
} 