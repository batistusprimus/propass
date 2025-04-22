'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
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
          className="text-center space-y-8"
        >
          <h2 className="text-4xl font-bold text-[#1B4332]">
            Prenons le temps d'en discuter
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-gray-700">
              Si vous voyez cette page, c'est que quelques places sur les 8 de départ sont encore disponibles pour rejoindre le BootCamp.
            </p>
            <p className="text-lg text-gray-700">
              Quoiqu'il arrive, je fermerais les inscriptions le XX à XX.
            </p>
            <p className="text-lg text-gray-700">
              Mais je sais que ce sera avant compte tenu des demandes de rendez-vous que je reçois chaque jour.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 space-y-12"
        >
          <h3 className="text-2xl font-bold text-[#1B4332]">
            Je vous propose donc un <span className="text-[#2D6A4F]">appel de 30 minutes</span>, 100% gratuit, pour :
          </h3>
          <ul className="space-y-6">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <span className="text-[#2D6A4F] text-xl">→</span>
              <p className="text-lg text-gray-700">faire le point sur votre activité,</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <span className="text-[#2D6A4F] text-xl">→</span>
              <p className="text-lg text-gray-700">voir si ce système peut s'appliquer à votre business,</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <span className="text-[#2D6A4F] text-xl">→</span>
              <p className="text-lg text-gray-700">et vous montrer concrètement comment on peut le mettre en place chez vous en 4 semaines.</p>
            </motion.li>
          </ul>

          <blockquote className="bg-gray-50 border-l-4 border-[#2D6A4F] p-8 rounded-r-lg italic text-gray-700 hover:bg-gray-100 transition-all duration-300">
            <p className="text-lg">J'ai accompagné plus de 50 entreprises locales, dans le sport, le loisir, le bien-être.</p>
            <p className="mt-4 text-lg">Et je suis convaincu que je peux vous aider aussi.</p>
          </blockquote>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-[#1B4332]">
              Voici ce que je vous promets :
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-gray-700 flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span className="font-semibold text-[#2D6A4F]">1/</span>
                <span>Visite de la fiche Google et clics sur le site web en croissance</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-gray-700 flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span className="font-semibold text-[#2D6A4F]">2/</span>
                <span>Un lead magnet et une séquence mail automatisée</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-700 flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span className="font-semibold text-[#2D6A4F]">3/</span>
                <span>Des pubs prêtes à être lancées</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-700 flex items-start space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span className="font-semibold text-[#2D6A4F]">4/</span>
                <span>Un calendrier éditorial pour les réseaux ET pour le blog</span>
              </motion.li>
            </ul>
          </div>

          <div className="space-y-6 text-center bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-all duration-300">
            <p className="text-lg text-gray-700">
              Si vous avez des doutes sur votre présence en ligne…
            </p>
            <p className="text-lg text-gray-700">
              Si vous ne savez pas si votre marketing digital est efficace…
            </p>
            <p className="text-lg text-gray-700">
              Ou si vous sentez que votre système de prospection (réseaux sociaux, blog, mails, pubs…) <span className="font-semibold text-[#2D6A4F]">pourrait clairement mieux faire…</span>
            </p>
          </div>

          <div className="text-center pt-8">
            <h3 className="text-2xl font-bold text-[#1B4332] mb-8">
              ☎️ Réservez votre appel dès maintenant
            </h3>
            <a
              href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1B4332] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D6A4F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Réserver mon appel gratuit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 