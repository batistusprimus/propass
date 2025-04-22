'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#1B4332] opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-[#1B4332] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            8 places disponibles
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1B4332] leading-tight">
              En 4 semaines : installez un système de prospection automatique qui attire de nouveaux clients et les fidélise
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
              Même si vous avez moins de 4h par semaine à y consacrer et sans avoir de connaissances techniques ou marketing
            </h2>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B4332] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D6A4F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#bootcamp"
              className="text-[#1B4332] px-8 py-4 rounded-full text-lg font-semibold hover:text-[#2D6A4F] transition-all duration-300 border-2 border-[#1B4332] hover:border-[#2D6A4F]"
            >
              Découvrir le programme →
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 text-gray-600"
          >
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">⭐</span>
              <span>100% pratique</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">🎯</span>
              <span>Résultats garantis</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
              <span className="text-2xl">💬</span>
              <span>Support personnalisé</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 