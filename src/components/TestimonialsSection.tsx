'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-24"
        >
          {/* Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="heading-3 text-primary">
                Vous pourriez obtenir des résultats comme ce courtier en crédits :
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    3 semaines de publicité locale.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    220 € dépensés. 22 prospects.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    2 ventes à 2000 € chacune.
                  </p>
                </div>
                <div className="bg-accent-light p-6 rounded-xl space-y-4">
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      Soit 4000 € encaissés pour 220 € investis.
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      Retour sur investissement <span className="font-semibold text-primary">x18</span>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-body text-lg">
                  Pas besoin de tunnel compliqué ni de budget à 5 chiffres pour générer du chiffre.
                </p>
                <p className="text-body text-lg">
                  Juste un système de prospection passive simple et bien pensé.
                </p>
              </div>

              <div className="relative w-full aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
                <Image
                  src="/images/Capture d'écran 2025-01-21 102119.png"
                  alt="Résultats de la publicité locale"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-12"
          >
            <h2 className="heading-2 text-primary text-center">
              Ce que pensent mes clients :
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
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
                className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
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
              className="card hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-body text-lg">
                Ce système a déjà fait ses preuves sur <span className="font-semibold text-primary">+50 entreprises</span> que j'ai pu accompagner pour enfin stabiliser leur chiffre d'affaire et devenir des références locales dans leur secteur.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 