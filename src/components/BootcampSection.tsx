'use client';

import { motion } from 'framer-motion';

export default function BootcampSection() {
  return (
    <section id="bootcamp" className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
              Vous pouvez faire la même chose pour votre entreprise
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-lg text-gray-700">
                Je suis régulièrement contacté par des prestataires de services locaux qui veulent que je les aide à mettre en place <span className="font-semibold text-[#1B4332]">le système que j'installe pour mes clients.</span>
              </p>

              <p className="text-lg font-semibold text-[#1B4332]">
                Mais soyons transparents :
              </p>

              <p className="text-lg text-gray-700">
                Mon accompagnement complet, <span className="font-semibold text-[#1B4332]">c'est du sur-mesure</span>, ça me prend du temps, et <span className="font-semibold text-[#1B4332]">ça a un coût</span> que beaucoup ne peuvent pas se permettre.
              </p>
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg text-gray-700">
              Et cela, pour plusieurs raisons logiques…
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  La majorité des prestataires de service n'ont pas conscience du retour sur investissement qu'il est possible d'avoir avec le <span className="font-semibold text-[#1B4332]">bon système digital.</span>
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Beaucoup ont perdu confiance après de mauvaises expériences passées : publicité coûteuses sans résultats, Site Web hors de prix, outils complexes à prendre en main…
                </p>
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              Alors quand je refuse ces demandes…
            </p>

            <p className="text-lg font-semibold text-[#1B4332]">
              Je perds du chiffre. Et eux, ils repartent sans solution.
            </p>

            <p className="text-lg text-gray-700">
              Et franchement, ça n'a aucun sens.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-lg text-gray-700">
                  Ils veulent avancer.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-lg text-gray-700">
                  J'ai une méthode qui fonctionne.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              Il manquait juste <span className="font-semibold text-[#1B4332]">le bon format pour que ce soit gagnant-gagnant</span>.
            </p>

            <p className="text-lg font-semibold text-[#1B4332]">
              C'est comme ça qu'est née l'idée de ce <span className="text-[#2D6A4F]">BootCamp.</span>
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg font-semibold text-[#1B4332]">
              C'est simple :
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Je transmets <span className="font-semibold text-[#1B4332]">mon système pas à pas</span> à 8 entrepreneurs motivés au lieu d'un seul → <span className="font-semibold text-[#1B4332]">moins de temps pour moi, plus de valeur pour vous.</span>
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Vous, vous implémentez tout vous-même, <span className="font-semibold text-[#1B4332]">avec mes conseils et ma méthode</span>, sans avoir à sortir un budget d'agence.
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Vous repartez avec un système qui tourne.
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Moi, je ne refuse plus des demandes de prestataires qui ont le temps, l'envie et juste besoin d'un cadre.
                </p>
              </li>
            </ul>

            <blockquote className="border-l-4 border-[#2D6A4F] pl-4 italic text-gray-700 bg-gray-50 p-4 rounded-r-lg shadow-md">
              <p className="text-lg font-semibold text-[#1B4332]">
                Tout le monde y gagne.
              </p>
            </blockquote>
          </motion.div>

          {/* Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg text-gray-700">
              Aujourd'hui je vous propose de vous accompagner pour mettre en place votre <span className="font-semibold text-[#1B4332]">nouveau système de prospection passive</span> en seulement <span className="font-semibold text-[#1B4332]">4 semaines.</span>
            </p>

            <p className="text-lg text-gray-700">
              J'ai créé ce BootCamp spécialement pour aider les prestataires de service comme vous qui n'ont ni le temps ni les connaissances pour :
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  rentabiliser chaque euro investi en publicité — <span className="font-semibold text-[#1B4332]">avec le bon ciblage (mes clients font X3 en moyenne) ;</span>
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  attirer les bons clients sans prospecter manuellement — <span className="font-semibold text-[#1B4332]">avec des lead magnets puissants et optimisés ;</span>
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  relancer automatiquement les prospects et les anciens clients — <span className="font-semibold text-[#1B4332]">avec des séquences emails automatisées ;</span>
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  se démarquer de la concurrence locale — <span className="font-semibold text-[#1B4332]">avec une meilleure visibilité en ligne...</span>
                </p>
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              À la différence d'une formation théorique qui vous lâche dans la nature…
            </p>

            <p className="text-lg font-semibold text-[#1B4332]">
              Je serai là pour vous accompagner pas-à-pas dans la mise en place de ce nouveau système de prospection.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="space-y-6">
              <p className="text-xl font-bold text-white">
                Un système de prospection passive qui vous permettra :
              </p>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-white text-xl">→</span>
                  <p className="text-lg text-white">
                    <span className="font-semibold">De vous positionner comme solution locale évidente aux yeux de vos prospects</span> — grâce à des contenus optimisés pour vos réseaux sociaux (Instagram, Linkedin…) ;
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-white text-xl">→</span>
                  <p className="text-lg text-white">
                    <span className="font-semibold">D'attirer des prospects vers vos offres en continu</span> — grâce à une meilleure visibilité en ligne (optimisation SEO, fiche Google, publicités…)
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-white text-xl">→</span>
                  <p className="text-lg text-white">
                    <span className="font-semibold">De convertir ces prospects en clients fidèles et réguliers</span> — grâce à un système automatique qui fonctionne même quand vous ne travaillez pas (séquences emails, lead magnets…)
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 