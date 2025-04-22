'use client';

import { motion } from 'framer-motion';

export default function SolutionSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight">
              Mettre le digital au service de votre entreprise.
            </h2>

            <p className="mt-6 text-xl text-gray-700">
              En mettant en place le système adéquat, vous pouvez attirer les bons clients <span className="font-semibold text-[#1B4332]">sans avoir à courir après eux</span>.
            </p>
          </motion.div>

          {/* Benefits List */}
          <div className="space-y-8">
            <ul className="grid md:grid-cols-2 gap-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">✓</span>
                <p className="text-lg text-gray-700">
                  Vous gagnez en visibilité locale
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">✓</span>
                <p className="text-lg text-gray-700">
                  Vous obtenez des demandes de nouveaux clients 24h/24
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">✓</span>
                <p className="text-lg text-gray-700">
                  Vous automatisez les relances
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">✓</span>
                <p className="text-lg text-gray-700">
                  Et vous restez présent dans l'esprit de vos prospects…
                </p>
              </motion.li>
            </ul>

            <p className="text-lg text-gray-700 text-center bg-white p-4 rounded-lg shadow-sm">
              Même quand vous êtes en séance, en déplacement, ou en congé.
            </p>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg text-gray-700">
              C'est aussi ce qui vous permet <span className="font-semibold text-[#1B4332]">d'augmenter et lisser vos revenus</span>, d'<span className="font-semibold text-[#1B4332]">éviter les périodes creuses</span>, de <span className="font-semibold text-[#1B4332]">remplir vos plannings plus facilement</span>… 
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <p className="text-lg text-gray-700">
                Fini les actions commerciales au feeling, les semaines où rien ne rentre et les promos de dernière minute.
              </p>

              <p className="text-lg text-gray-700">
                Fini les ventes poussives qui abiment la relation client.
              </p>

              <p className="text-xl font-bold text-[#1B4332]">
                Et ça change tout.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-lg text-white">
              Cependant, il vous faut un système digital sur-mesure qui s'adapte aux contraintes d'une entreprise locale… et à la vôtre tout particulièrement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 