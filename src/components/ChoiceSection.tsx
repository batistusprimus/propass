'use client';

import { motion } from 'framer-motion';

export default function ChoiceSection() {
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
          {/* Title and Introduction */}
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-[#1B4332]">
              Augmentez votre Chiffre d'Affaire et stabilisez-le pour les mois à venir
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Avec le <span className="font-semibold text-[#2D6A4F]">système de prospection passive</span> que vous allez installer, <span className="font-semibold text-[#2D6A4F]">vous ne faites pas que générer plus de clients</span>.
              </p>
              <p>
                Vous les attirez, <span className="font-semibold text-[#2D6A4F]">mais surtout vous les gardez.</span>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg text-gray-700">
              Grâce à une séquence email automatisée et des newsletters régulières, chaque nouveau client entre dans un tunnel relationnel :
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] mt-1">•</span>
                <span className="text-gray-700">il reste en contact avec votre marque,</span>
              </li>
              <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] mt-1">•</span>
                <span className="text-gray-700">il revient naturellement quand il a besoin de vous,</span>
              </li>
              <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] mt-1">•</span>
                <span className="text-gray-700">il parle de vous autour de lui,</span>
              </li>
              <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] mt-1">•</span>
                <span className="text-gray-700">et <span className="font-semibold text-[#2D6A4F]">il rentabilise chaque euro investi en pub…</span></span>
              </li>
            </ul>
          </motion.div>

          {/* Key Messages */}
          <div className="space-y-6 text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <p className="text-xl text-gray-700">Fini les mois pleins suivis de semaines à vide.</p>
            <p className="text-xl text-gray-700">
              Vous n'avez plus à vous demander <span className="font-semibold text-[#2D6A4F]">de quoi sera fait le mois prochain.</span>
            </p>
            <p className="text-xl text-gray-700">
              Vous aurez un système <span className="font-semibold text-[#2D6A4F]">qui travaille même quand vous ne travaillez pas.</span>
            </p>
          </div>

          {/* Options */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-[#1B4332] text-center">
              À ce stade, vous avez deux options.
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <p className="text-gray-700">Vous pouvez continuer comme aujourd'hui.</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">Espérer que les clients reviennent d'eux-mêmes.</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">Booster une publication sur Instagram de temps en temps.</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">Attendre que quelqu'un vous recommande pour que le téléphone sonne.</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-red-500">
                    Et recommencer chaque mois la même course contre la montre.
                  </p>
                </div>
              </motion.div>

              {/* Option 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
              >
                <div className="space-y-4">
                  <p>Ou alors, vous pouvez structurer une bonne fois pour toutes un système qui travaille à votre place.</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex items-start space-x-2 bg-white bg-opacity-10 p-3 rounded-lg">
                      <span className="text-green-300 mt-1">•</span>
                      <span>Qui attire de nouveaux clients.</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-white bg-opacity-10 p-3 rounded-lg">
                      <span className="text-green-300 mt-1">•</span>
                      <span>Qui les fidélise automatiquement.</span>
                    </li>
                    <li className="flex items-start space-x-2 bg-white bg-opacity-10 p-3 rounded-lg">
                      <span className="text-green-300 mt-1">•</span>
                      <span>Et qui vous permet de voir venir.</span>
                    </li>
                  </ul>
                  <div className="space-y-2">
                    <p>Qui permet d'augmenter votre Chiffre d'Affaire…</p>
                    <p>Et de le stabiliser sur le long terme.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-8 text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1B4332]">
              En moyenne mes clients génèrent +30% de prospects qualifiés avec le système que vous allez mettre en place.
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">La première option, vous la connaissez déjà…</p>
              <p className="text-lg text-[#2D6A4F] font-semibold">
                La seconde, on peut la construire ensemble :
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 