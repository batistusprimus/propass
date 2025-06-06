'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-32 px-4 bg-gradient-to-b from-white to-accent-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              il ne reste que 10 places
            </motion.div>

            <div className="space-y-6">
              <h1 className="heading-1">
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
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <a
                href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full md:w-auto text-center"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#bootcamp"
                className="btn-secondary w-full md:w-auto text-center scroll-smooth"
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
              className="flex flex-wrap gap-4 text-gray-600"
            >
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-soft">
                <span className="text-2xl">⭐</span>
                <span>100% pratique</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-soft">
                <span className="text-2xl">🎯</span>
                <span>Résultats garantis</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-soft">
                <span className="text-2xl">💬</span>
                <span>Support personnalisé</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10">
              <div className="relative w-full aspect-[3/4] rounded-2xl shadow-soft overflow-hidden">
                <Image
                  src="/images/51709-66e4518a07720.jpg"
                  alt="Fabien donnant une conférence"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <span className="text-xl">F</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Fabien</p>
                    <p className="text-sm text-gray-600">Expert en marketing digital</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 