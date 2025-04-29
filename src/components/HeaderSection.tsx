'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft' : 'bg-white'
    }`}>
      {/* Bandeau de lancement */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary text-white py-2 text-center"
      >
        <p className="text-sm font-medium text-white">
          🚀 il reste que 6 places sur les 8 pour le Bootcamp
        </p>
      </motion.div>

      {/* Header principal */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary font-display">Pro Pass</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('bootcamp')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Programme
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
            >
              Résultats
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
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
              className="btn-primary"
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
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left font-medium"
              >
                Programme
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left font-medium"
              >
                Résultats
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left font-medium"
              >
                FAQ
              </button>
              <a
                href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
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