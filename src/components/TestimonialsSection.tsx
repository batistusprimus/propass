'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#1B4332] opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg font-semibold text-[#1B4332]">
              Vous pourriez obtenir des résultats comme ce courtier en crédits :
            </p>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                3 semaines de publicité locale.
              </p>
              <p className="text-lg text-gray-700">
                220 € dépensés. 22 prospects.
              </p>
              <p className="text-lg text-gray-700">
                2 ventes à 2000 € chacune.
              </p>
              <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                <p className="text-lg text-gray-700">
                  → Soit 4000 € encaissés pour 220 € investis.
                </p>
                <p className="text-lg font-semibold text-[#1B4332]">
                  → Retour sur investissement <span className="text-[#2D6A4F]">x18</span>.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              Pas besoin de tunnel compliqué ni de budget à 5 chiffres pour générer du chiffre.
            </p>
            <p className="text-lg text-gray-700">
              Juste un système de prospection passive simple et bien pensé.
            </p>

            <div className="relative w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Image
                src="/images/Capture d'écran 2025-01-21 102119.png"
                alt="Résultats de la publicité locale"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#1B4332] text-center">
              Ce que pensent mes clients :
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src="/images/Témoignage.png"
                  alt="Témoignage client"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src="/images/Témoignage 2.png"
                  alt="Témoignage client"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-lg text-gray-700">
                Ce système a déjà fait ses preuves sur <span className="font-semibold text-[#1B4332]">+50 entreprises</span> que j'ai pu accompagner pour enfin stabiliser leur chiffre d'affaire et devenir des références locales dans leur secteur.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 