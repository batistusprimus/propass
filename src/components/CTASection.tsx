'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-accent-light/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-5"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-10 mb-20"
        >
          <h2 className="heading-2 text-gray-900">
            Prenons le temps d'en discuter
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-body text-gray-700 leading-relaxed">
              Si vous voyez cette page, c'est que quelques places sur les 10 disponibles pour rejoindre le Bootcamp sont encore ouvertes.
            </p>
            <p className="text-body text-gray-700 leading-relaxed">
              Le Bootcamp débute le 15 juillet.
            </p>
            <p className="text-body text-gray-700 leading-relaxed">
              Quoiqu'il arrive, je fermerai les inscriptions le 10 juillet à 20h.
            </p>
            <p className="text-body text-gray-700 leading-relaxed">
              Vu le nombre de demandes que je reçois chaque jour, je sais que les places vont partir avant.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card max-w-4xl mx-auto space-y-16 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8"
        >
          <h3 className="heading-3 text-center text-gray-900">
            Je vous propose donc un <span className="text-primary font-semibold">appel gratuit de 30 minutes</span> pour :
          </h3>
          <ul className="space-y-8">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <span className="text-primary text-2xl font-bold">→</span>
              <p className="text-body text-gray-700">Noter votre système actuel sur 10 (visibilité, prospection, conversion, fidélisation)</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <span className="text-primary text-2xl font-bold">→</span>
              <p className="text-body text-gray-700">Vous montrer où vous perdez des prospects aujourd'hui (souvent sans vous en rendre compte)</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <span className="text-primary text-2xl font-bold">→</span>
              <p className="text-body text-gray-700">Vous donner 3 actions immédiates pour augmenter votre note sur 10 et arrêter de perdre du chiffre d'affaires.</p>
            </motion.li>
          </ul>

          <blockquote className="bg-white border-l-4 border-primary p-8 rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300">
            <p className="text-body text-gray-700 italic">J'ai accompagné plus de 50 entreprises locales, dans le sport, le loisir, le bien-être.</p>
            <p className="mt-4 text-body text-gray-700 italic">Et je suis convaincu que je peux vous aider aussi.</p>
          </blockquote>

          <div className="space-y-8">
            <h4 className="heading-3 text-center text-gray-900">
              Voici ce que je vous promets :
            </h4>
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-body flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="font-bold text-primary">1/</span>
                <span className="text-gray-700">Visite de la fiche Google et clics sur le site web en croissance</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-body flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="font-bold text-primary">2/</span>
                <span className="text-gray-700">Un lead magnet et une séquence mail automatisée</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-body flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="font-bold text-primary">3/</span>
                <span className="text-gray-700">Des pubs prêtes à être lancées</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-body flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <span className="font-bold text-primary">4/</span>
                <span className="text-gray-700">Un calendrier éditorial pour les réseaux ET pour le blog</span>
              </motion.li>
            </ul>
          </div>

          <div className="space-y-6 text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <p className="text-body text-gray-700">
              Si vous sentez que votre marketing digital pourrait mieux tourner…
            </p>
            <p className="text-body text-gray-700">
              Si vous doutez de votre présence locale…
            </p>
            <p className="text-body text-gray-700">
              Ou si vous savez que votre prospection pourrait être plus efficace sans y passer des heures…
            </p>
          </div>

          <div className="text-center pt-8">
            <h3 className="heading-3 mb-10 text-gray-900">
              ☎️ Réservez votre appel dès maintenant
            </h3>
            <motion.a
              href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver mon appel gratuit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 