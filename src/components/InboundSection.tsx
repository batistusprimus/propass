'use client';

import { motion } from 'framer-motion';

export default function InboundSection() {
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
              L'Inbound Marketing c'est une révolution :
            </h2>

            <blockquote className="mt-6 border-l-4 border-[#2D6A4F] pl-4 italic text-gray-700 bg-gray-50 p-4 rounded-r-lg shadow-md">
              C'est tout ce qui amène des clients sans action directe de votre part.
            </blockquote>
          </motion.div>

          {/* Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg text-gray-700">
              Imaginez que quelqu'un dans votre ville tape "salle de sport + [votre ville]" sur Google.
            </p>

            <p className="text-lg text-gray-700">
              Et qu'il tombe directement sur votre <span className="font-semibold text-[#1B4332]">fiche Google optimisée</span>, avec des avis positifs, une offre d'essai et un lien vers votre site.
            </p>

            <p className="text-lg text-gray-700">
              Sur le site, il découvre <span className="font-semibold text-[#1B4332]">une page claire</span>, avec une offre simple :
            </p>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-lg font-semibold text-[#1B4332]">
                "7 jours gratuits pour tester notre salle sans engagement."
              </p>
            </div>

            <p className="text-lg text-gray-700">
              Il clique, il laisse son adresse email.
            </p>

            <p className="text-lg text-gray-700">
              Quelques secondes plus tard, <span className="font-semibold text-[#1B4332]">il reçoit une séquence d'emails</span> qui lui explique comment bien démarrer, ce qu'il va découvrir, et pourquoi votre salle est différente.
            </p>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-lg text-gray-700">
                Et pendant ce temps-là…
              </p>

              <p className="text-lg font-semibold text-[#1B4332]">
                Vous n'avez <span className="font-bold">rien eu à faire</span>.
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">×</span>
                  <p className="text-lg text-gray-700">Pas d'appel à froid.</p>
                </li>
                <li className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">×</span>
                  <p className="text-lg text-gray-700">Pas de relance.</p>
                </li>
                <li className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">×</span>
                  <p className="text-lg text-gray-700">Pas de forcing.</p>
                </li>
              </ul>

              <p className="mt-4 text-lg font-semibold text-[#1B4332]">
                Juste <span className="font-bold">un système qui tourne</span>.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="space-y-4">
              <p className="text-xl font-bold text-white">
                C'est ça l'Inbound Marketing.
              </p>

              <p className="text-lg text-white">
                C'est votre <span className="font-semibold">salle de sport, votre magasin, votre salon de massage, votre circuit de karting…</span>
              </p>

              <p className="text-lg font-semibold text-white">
                Qui attire les bons clients, sans prospecter.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 