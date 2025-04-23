'use client';

import { motion } from 'framer-motion';

export default function InboundSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden" id="inbound">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

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
              L'Inbound Marketing c'est une révolution :
            </h2>

            <blockquote className="mt-6 bg-primary bg-opacity-5 p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xl text-primary italic font-medium">
                C'est tout ce qui amène des clients sans action directe de votre part.
              </p>
            </blockquote>
          </motion.div>

          {/* Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300 space-y-6"
          >
            <p className="text-body">
              Imaginez que quelqu'un dans votre ville tape "salle de sport + [votre ville]" sur Google.
            </p>

            <p className="text-body">
              Et qu'il tombe directement sur votre <span className="font-semibold text-primary">fiche Google optimisée</span>, avec des avis positifs, une offre d'essai et un lien vers votre site.
            </p>

            <p className="text-body">
              Sur le site, il découvre <span className="font-semibold text-primary">une page claire</span>, avec une offre simple :
            </p>

            <div className="bg-primary bg-opacity-5 p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
              <p className="text-xl font-semibold text-primary text-center">
                "7 jours gratuits pour tester notre salle sans engagement."
              </p>
            </div>

            <p className="text-body">
              Il clique, il laisse son adresse email.
            </p>

            <p className="text-body">
              Quelques secondes plus tard, <span className="font-semibold text-primary">il reçoit une séquence d'emails</span> qui lui explique comment bien démarrer, ce qu'il va découvrir, et pourquoi votre salle est différente.
            </p>

            <div className="pt-6 border-t border-accent space-y-6">
              <p className="text-body">
                Et pendant ce temps-là…
              </p>

              <p className="heading-3 text-primary">
                Vous n'avez <span className="font-bold">rien eu à faire</span>.
              </p>

              <ul className="space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">×</span>
                  <p className="text-body">Pas d'appel à froid.</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">×</span>
                  <p className="text-body">Pas de relance.</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">×</span>
                  <p className="text-body">Pas de forcing.</p>
                </motion.li>
              </ul>

              <p className="heading-3 text-primary">
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
            className="bg-primary p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="space-y-6">
              <p className="text-2xl font-bold text-white">
                C'est ça l'Inbound Marketing.
              </p>

              <p className="text-xl text-white">
                C'est votre <span className="font-semibold">salle de sport, votre magasin, votre salon de massage, votre circuit de karting…</span>
              </p>

              <p className="text-xl font-semibold text-white">
                Qui attire les bons clients, sans prospecter.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 