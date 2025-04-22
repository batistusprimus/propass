'use client';

import { motion } from 'framer-motion';

export default function ComparisonSection() {
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
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight">
              Votre prospection changera du tout au tout
            </h2>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without System */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#1B4332]">
                Sans système de prospection passive
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">Vous repartez de zéro chaque mois</span>, sans savoir d'où viendront les prochains clients
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    Vous êtes bloqué dans un cycle <span className="font-semibold text-[#1B4332]">"je livre / je galère à remplir"</span>, sans souffle ni vision long terme
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    Vous dépendez du bouche-à-oreille… ou d'un post LinkedIn qui "marche bien" par hasard
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    Vous perdez du temps et de l'argent avec des outils que vous <span className="font-semibold text-[#1B4332]">ne comprenez pas vraiment</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">Vous n'êtes jamais vraiment visible</span>, sauf si vous vous épuisez à créer du contenu à la main
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    Vous <span className="font-semibold text-[#1B4332]">subissez votre activité</span>, au lieu de la piloter avec un système qui bosse même quand vous n'êtes pas là
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-red-500 text-xl">🚫</span>
                  <p className="text-lg text-gray-700">
                    Vos concurrents qui, eux, ont une stratégie en place, <span className="font-semibold text-[#1B4332]">vous doublent doucement mais sûrement</span>, même s'ils sont moins bons que vous
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* With System */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Avec un système de prospection passive
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous générez <span className="font-semibold">des prospects en continu</span>, sans avoir à relancer vos constamment
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous installez un <span className="font-semibold">parcours client structuré</span> qui vend à votre place, 7j/7
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous transformez vos visiteurs en clients grâce à <span className="font-semibold">des publicités ciblées, des séquences emails, tunnels et offres bien huilés</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous créez un système duplicable et évolutif, <span className="font-semibold">même si vous n'êtes pas à l'aise avec le digital</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous réduisez votre charge mentale : plus besoin de courir après les clients, <span className="font-semibold">c'est eux qui viennent à vous</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous <span className="font-semibold">reprenez le contrôle sur vos revenus</span>, avec une visibilité claire sur votre chiffre d'affaire
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✅</span>
                  <p className="text-lg text-white">
                    Vous professionnalisez votre image : vos prospects vous perçoivent comme <span className="font-semibold">structuré, crédible, incontournable</span>.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 