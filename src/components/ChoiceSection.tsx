'use client';

import { motion } from 'framer-motion';

export default function ChoiceSection() {
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
          {/* Title and Introduction */}
          <div className="space-y-12 text-center">
            <h2 className="heading-2 text-primary">
              Augmentez votre Chiffre d'Affaire et stabilisez-le pour les mois à venir
            </h2>
            <div className="space-y-6 text-body text-lg">
              <p>
                Avec le <span className="font-semibold text-primary">système de prospection passive</span> que vous allez installer, <span className="font-semibold text-primary">vous ne faites pas que générer plus de clients</span>.
              </p>
              <p>
                Vous les attirez, <span className="font-semibold text-primary">mais surtout vous les gardez.</span>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="text-body text-lg">
                Grâce à une séquence email automatisée et des newsletters régulières, chaque nouveau client entre dans un tunnel relationnel :
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                  <span className="text-primary text-2xl font-bold mt-1">•</span>
                  <p className="text-body text-lg">
                    il reste en contact avec votre marque,
                  </p>
                </div>
                <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                  <span className="text-primary text-2xl font-bold mt-1">•</span>
                  <p className="text-body text-lg">
                    il revient naturellement quand il a besoin de vous,
                  </p>
                </div>
                <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                  <span className="text-primary text-2xl font-bold mt-1">•</span>
                  <p className="text-body text-lg">
                    il parle de vous autour de lui,
                  </p>
                </div>
                <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                  <span className="text-primary text-2xl font-bold mt-1">•</span>
                  <p className="text-body text-lg">
                    et <span className="font-semibold text-primary">il rentabilise chaque euro investi en pub…</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Messages */}
          <div className="card hover:scale-[1.02] transition-all duration-300">
            <div className="space-y-8 text-center">
              <p className="text-body text-xl">Fini les mois pleins suivis de semaines à vide.</p>
              <p className="text-body text-xl">
                Vous n'avez plus à vous demander <span className="font-semibold text-primary">de quoi sera fait le mois prochain.</span>
              </p>
              <p className="text-body text-xl">
                Vous aurez un système <span className="font-semibold text-primary">qui travaille même quand vous ne travaillez pas.</span>
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-12">
            <h3 className="heading-3 text-primary text-center">
              À ce stade, vous avez deux options.
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Option 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-8">
                  <p className="text-body text-lg">Vous pouvez continuer comme aujourd'hui.</p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                      <span className="text-red-500 text-2xl font-bold mt-1">•</span>
                      <p className="text-body text-lg">
                        Espérer que les clients reviennent d'eux-mêmes.
                      </p>
                    </div>
                    <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                      <span className="text-red-500 text-2xl font-bold mt-1">•</span>
                      <p className="text-body text-lg">
                        Booster une publication sur Instagram de temps en temps.
                      </p>
                    </div>
                    <div className="flex items-start space-x-6 bg-accent-light p-6 rounded-xl">
                      <span className="text-red-500 text-2xl font-bold mt-1">•</span>
                      <p className="text-body text-lg">
                        Attendre que quelqu'un vous recommande pour que le téléphone sonne.
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-red-500 text-lg">
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
                className="bg-accent p-12 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] text-white"
              >
                <div className="space-y-8">
                  <p className="text-body text-lg">Ou alors, vous pouvez structurer une bonne fois pour toutes un système qui travaille à votre place.</p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-6 bg-white bg-opacity-20 p-6 rounded-xl">
                      <span className="text-green-300 text-2xl font-bold mt-1">•</span>
                      <p className="text-body text-lg">
                        Qui attire de nouveaux clients.
                      </p>
                    </div>
                    <div className="flex items-start space-x-6 bg-white bg-opacity-20 p-6 rounded-xl">
                      <span className="text-green-300 text-2xl font-bold mt-1">•</span>
                      <p className="text-body text-lg">
                        Qui les fidélise automatiquement.
                      </p>
                    </div>
                    <div className="flex items-start space-x-6 bg-white bg-opacity-20 p-6 rounded-xl">
                      <span className="text-green-300 text-2xl font-bold mt-1">•</span>
                      <p className="text-body text-lg">
                        Et qui vous permet de voir venir.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-body text-lg">Qui permet d'augmenter votre Chiffre d'Affaire…</p>
                    <p className="text-body text-lg">Et de le stabiliser sur le long terme.</p>
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
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12 text-center">
              <h3 className="heading-3 text-primary">
                En moyenne mes clients génèrent +30% de prospects qualifiés avec le système que vous allez mettre en place.
              </h3>
              <div className="space-y-6">
                <p className="text-body text-lg">La première option, vous la connaissez déjà…</p>
                <p className="text-body text-lg font-semibold text-primary">
                  La seconde, on peut la construire ensemble :
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 