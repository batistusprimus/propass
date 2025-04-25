'use client';

import { motion } from 'framer-motion';

export default function BootcampSection() {
  return (
    <section id="bootcamp" className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden">
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
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="heading-2 text-primary mb-8">
              Vous pouvez faire la même chose pour votre entreprise
            </h2>

            <div className="space-y-8">
              <p className="text-body text-lg">
                Je suis régulièrement contacté par des prestataires de services locaux qui veulent que je les aide à mettre en place <span className="font-semibold text-primary">le système que j'installe pour mes clients.</span>
              </p>

              <div className="bg-accent-light p-6 rounded-xl">
                <p className="text-body font-semibold text-primary">
                  Mais soyons transparents :
                </p>
              </div>

              <p className="text-body text-lg">
                Mon accompagnement complet, <span className="font-semibold text-primary">c'est du sur-mesure</span>, ça me prend du temps, et <span className="font-semibold text-primary">ça a un coût</span> que beaucoup ne peuvent pas se permettre.
              </p>
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="text-body text-lg">
                Et cela, pour plusieurs raisons logiques…
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    La majorité des prestataires de service n'ont pas conscience du retour sur investissement qu'il est possible d'avoir avec le <span className="font-semibold text-primary">bon système digital.</span>
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Beaucoup ont perdu confiance après de mauvaises expériences passées : publicité coûteuses sans résultats, Site Web hors de prix, outils complexes à prendre en main…
                  </p>
                </div>
              </div>

              <p className="text-body text-lg">
                Alors quand je refuse ces demandes…
              </p>

              <div className="bg-accent-light p-8 rounded-xl">
                <p className="heading-3 text-primary">
                  Je perds du chiffre. Et eux, ils repartent sans solution.
                </p>
              </div>

              <p className="text-body text-lg">
                Et franchement, ça n'a aucun sens.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-accent-light p-6 rounded-xl">
                  <p className="text-body text-lg">
                    Ils veulent avancer.
                  </p>
                </div>
                <div className="bg-accent-light p-6 rounded-xl">
                  <p className="text-body text-lg">
                    J'ai une méthode qui fonctionne.
                  </p>
                </div>
              </div>

              <p className="text-body text-lg">
                Il manquait juste <span className="font-semibold text-primary">le bon format pour que ce soit gagnant-gagnant</span>.
              </p>

              <div className="bg-accent-light p-8 rounded-xl">
                <p className="heading-3 text-primary">
                  C'est comme ça qu'est née l'idée de ce <span className="text-primary-light">BootCamp.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="heading-3 text-primary">
                C'est simple :
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Je transmets <span className="font-semibold text-primary">mon système pas à pas</span> à 8 entrepreneurs motivés au lieu d'un seul → <span className="font-semibold text-primary">moins de temps pour moi, plus de valeur pour vous.</span>
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Vous, vous implémentez tout vous-même, <span className="font-semibold text-primary">avec mes conseils et ma méthode</span>, sans avoir à sortir un budget d'agence.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Vous repartez avec un système qui tourne.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Moi, je ne refuse plus des demandes de prestataires qui ont le temps, l'envie et juste besoin d'un cadre.
                  </p>
                </div>
              </div>

              <div className="bg-accent-light p-8 rounded-xl border-l-4 border-primary">
                <p className="heading-3 text-primary">
                  Tout le monde y gagne.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="text-body text-lg">
                Aujourd'hui je vous propose de vous accompagner pour mettre en place votre <span className="font-semibold text-primary">nouveau système de prospection passive</span> en seulement <span className="font-semibold text-primary">4 semaines.</span>
              </p>

              <p className="text-body text-lg">
                J'ai créé ce BootCamp spécialement pour aider les prestataires de service comme vous qui n'ont ni le temps ni les connaissances pour :
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    rentabiliser chaque euro investi en publicité — <span className="font-semibold text-primary">avec le bon ciblage (mes clients font X3 en moyenne) ;</span>
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    attirer les bons clients sans prospecter manuellement — <span className="font-semibold text-primary">avec des lead magnets puissants et optimisés ;</span>
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    relancer automatiquement les prospects et les anciens clients — <span className="font-semibold text-primary">avec des séquences emails automatisées ;</span>
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    se démarquer de la concurrence locale — <span className="font-semibold text-primary">avec une meilleure visibilité en ligne...</span>
                  </p>
                </div>
              </div>

              <p className="text-body text-lg">
                À la différence d'une formation théorique qui vous lâche dans la nature…
              </p>

              <div className="bg-accent-light p-8 rounded-xl">
                <p className="heading-3 text-primary">
                  Je serai là pour vous accompagner pas-à-pas dans la mise en place de ce nouveau système de prospection.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-primary p-12 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="space-y-12">
              <p className="heading-3 text-white">
                Un système de prospection passive qui vous permettra :
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <span className="text-white text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg text-white">
                    <span className="font-bold">De vous positionner comme solution locale évidente aux yeux de vos prospects</span> — grâce à des contenus optimisés pour vos réseaux sociaux (Instagram, Linkedin…) ;
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-white text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg text-white">
                    <span className="font-bold">D'attirer des prospects vers vos offres en continu</span> — grâce à une meilleure visibilité en ligne (optimisation SEO, fiche Google, publicités…)
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-white text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg text-white">
                    <span className="font-bold">De convertir ces prospects en clients fidèles et réguliers</span> — grâce à un système automatique qui fonctionne même quand vous ne travaillez pas (séquences emails, lead magnets…)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
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
        </motion.div>
      </div>
    </section>
  );
} 