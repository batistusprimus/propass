'use client';

import { motion } from 'framer-motion';

export default function ComparisonSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-24"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="heading-2 text-primary">
              Votre prospection changera du tout au tout
            </h2>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Without System */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="card hover:scale-[1.02] transition-all duration-300"
            >
              <div className="space-y-12">
                <h3 className="heading-3 text-primary">
                  Sans système de prospection passive
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">Vous repartez de zéro chaque mois</span>, sans savoir d'où viendront les prochains clients
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      Vous êtes bloqué dans un cycle <span className="font-semibold text-primary">"je livre / je galère à remplir"</span>, sans souffle ni vision long terme
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      Vous dépendez du bouche-à-oreille… ou d'un post LinkedIn qui "marche bien" par hasard
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      Vous perdez du temps et de l'argent avec des outils que vous <span className="font-semibold text-primary">ne comprenez pas vraiment</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">Vous n'êtes jamais vraiment visible</span>, sauf si vous vous épuisez à créer du contenu à la main
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      Vous <span className="font-semibold text-primary">subissez votre activité</span>, au lieu de la piloter avec un système qui bosse même quand vous n'êtes pas là
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                    <span className="text-red-500 text-2xl">🚫</span>
                    <p className="text-body text-lg">
                      Vos concurrents qui, eux, ont une stratégie en place, <span className="font-semibold text-primary">vous doublent doucement mais sûrement</span>, même s'ils sont moins bons que vous
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* With System */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-primary p-12 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="space-y-12">
                <h3 className="heading-3 text-white">
                  Avec un système de prospection passive
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous générez <span className="font-semibold">des prospects en continu</span>, sans avoir à relancer vos constamment
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous installez un <span className="font-semibold">parcours client structuré</span> qui vend à votre place, 7j/7
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous transformez vos visiteurs en clients grâce à <span className="font-semibold">des publicités ciblées, des séquences emails, tunnels et offres bien huilés</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous créez un système duplicable et évolutif, <span className="font-semibold">même si vous n'êtes pas à l'aise avec le digital</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous réduisez votre charge mentale : plus besoin de courir après les clients, <span className="font-semibold">c'est eux qui viennent à vous</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous <span className="font-semibold">reprenez le contrôle sur vos revenus</span>, avec une visibilité claire sur votre chiffre d'affaire
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 bg-white bg-opacity-10 p-6 rounded-xl">
                    <span className="text-green-500 text-2xl">✅</span>
                    <p className="text-body text-lg text-white">
                      Vous professionnalisez votre image : vos prospects vous perçoivent comme <span className="font-semibold">structuré, crédible, incontournable</span>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-hover"
          >
            Prendre rendez-vous gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
} 