'use client';

import { motion } from 'framer-motion';

export default function ConstraintsSection() {
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
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight">
              Vos contraintes sont réelles, spécifiques, et souvent oubliées par les agences classiques ou les formations généralistes
            </h2>
          </motion.div>

          {/* Constraints List */}
          <div className="space-y-8">
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">→</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#1B4332]">
                    Vous avez besoin de résultats… dans votre zone
                  </p>
                  <p className="text-lg text-gray-700">
                    Le trafic depuis <span className="font-semibold">Paris</span> ne vous intéresse pas si vous êtes à <span className="font-semibold">Arcachon.</span>
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">→</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#1B4332]">
                    Vous n'avez pas des journées de 12h à consacrer au marketing
                  </p>
                  <p className="text-lg text-gray-700">
                    Entre les clients, la gestion, le staff, l'administratif…
                  </p>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Impossible de passer 10h/semaine à écrire des posts LinkedIn ou configurer des logiciels complexes.</span>
                  </p>
                  <p className="text-lg text-gray-700">
                    Vous avez besoin d'un système <span className="font-semibold">rapide à mettre en place</span>, et qui <span className="font-semibold">travaille en arrière-plan</span>.
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">→</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#1B4332]">
                    Chaque euro investi doit rapporter
                  </p>
                  <p className="text-lg text-gray-700">
                    Vous n'avez pas un budget à perdre "pour voir si ça marche".
                  </p>
                  <p className="text-lg text-gray-700">
                    Vous voulez <span className="font-semibold">du concret</span>, un système qui <span className="font-semibold">attire des clients sans brûler 2000€ en publicités test.</span>
                  </p>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[#2D6A4F] text-2xl">→</span>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-[#1B4332]">
                    Vous portez déjà 10 casquettes
                  </p>
                  <p className="text-lg text-gray-700">
                    Coach, gérant, community manager, standardiste, comptable, RH, chef de projet…
                  </p>
                  <p className="text-lg text-gray-700">
                    Ce qu'il vous faut, c'est <span className="font-semibold">un système simple, clair, guidé pas à pas</span>, qui vous évite d'en ajouter une de plus.
                  </p>
                </div>
              </motion.li>
            </ul>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-lg text-white">
              Et si je sais tout ça, c'est parce que…
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 