'use client';

import { motion } from 'framer-motion';

export default function ConstraintsSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative space-y-16">
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
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="heading-2 text-primary">
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
                className="group bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <div className="space-y-3">
                    <h3 className="heading-3 text-primary">
                      Vous avez besoin de résultats… dans votre zone
                    </h3>
                    <p className="text-body">
                      Le trafic depuis <span className="font-semibold text-primary">Paris</span> ne vous intéresse pas si vous êtes à <span className="font-semibold text-primary">Arcachon.</span>
                    </p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <div className="space-y-3">
                    <h3 className="heading-3 text-primary">
                      Vous n'avez pas des journées de 12h à consacrer au marketing
                    </h3>
                    <div className="space-y-4">
                      <p className="text-body">
                        Entre les clients, la gestion, le staff, l'administratif…
                      </p>
                      <p className="text-body">
                        <span className="font-semibold text-primary">Impossible de passer 10h/semaine à écrire des posts LinkedIn ou configurer des logiciels complexes.</span>
                      </p>
                      <p className="text-body">
                        Vous avez besoin d'un système <span className="font-semibold text-primary">rapide à mettre en place</span>, et qui <span className="font-semibold text-primary">travaille en arrière-plan</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="group bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <div className="space-y-3">
                    <h3 className="heading-3 text-primary">
                      Chaque euro investi doit rapporter
                    </h3>
                    <div className="space-y-4">
                      <p className="text-body">
                        Vous n'avez pas un budget à perdre "pour voir si ça marche".
                      </p>
                      <p className="text-body">
                        Vous voulez <span className="font-semibold text-primary">du concret</span>, un système qui <span className="font-semibold text-primary">attire des clients sans brûler 2000€ en publicités test.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="group bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <div className="space-y-3">
                    <h3 className="heading-3 text-primary">
                      Vous portez déjà 10 casquettes
                    </h3>
                    <div className="space-y-4">
                      <p className="text-body">
                        Coach, gérant, community manager, standardiste, comptable, RH, chef de projet…
                      </p>
                      <p className="text-body">
                        Ce qu'il vous faut, c'est <span className="font-semibold text-primary">un système simple, clair, guidé pas à pas</span>, qui vous évite d'en ajouter une de plus.
                      </p>
                    </div>
                  </div>
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
            className="bg-primary p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
          >
            <p className="text-xl md:text-2xl font-medium text-white text-center">
              Et si je sais tout ça, c'est parce que…
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 