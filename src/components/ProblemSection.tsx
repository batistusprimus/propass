'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden" id="problem">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 mb-20"
        >
          <div className="card hover:scale-[1.02] transition-all duration-300">
            <h2 className="heading-2 mb-8">
              Vous êtes <span className="text-primary-light">professionnels du service, du sport et du loisir</span> et vous passez votre temps à courir après les clients ?
            </h2>
            
            <div className="space-y-6">
              <p className="text-body">
                Vos clients sont satisfaits de vos services car vous offrez des prestations de qualité…
              </p>
              <p className="text-body">
                Mais malgré tous vos efforts, votre chiffre d'affaires reste imprévisible et très fluctuant.
              </p>
              <div className="pt-6 border-t border-accent">
                <p className="text-xl font-semibold text-primary">
                  Soyons honnêtes, au fond vous le savez :
                </p>
                <p className="text-2xl font-bold text-primary mt-2">
                  C'est parce que vous n'avez pas de système adapté.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problems List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-12 mb-20"
        >
          <h3 className="heading-3 text-center mb-8">
            Et si vous avez un ou plusieurs de ces problèmes :
          </h3>

          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              <p className="text-body">
                Vos clients entendent parler de vous seulement via le bouche-à-oreille — ce qui limite votre nombre de nouveaux clients potentiels ;
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-accent p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <p className="text-body font-medium text-primary">
                Votre visibilité limitée se résume à quelques affiches publicitaires et des cartes de visites laissées sur le comptoir des commerces du coin ou distribuées à la va-vite dans des clubs business ;
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              <p className="text-body">
                Vous avez de bons avis et les gens sont contents de vos services mais — vous n'avez pas encore une place claire dans l'esprit de vos clients…
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card"
          >
            <p className="heading-3 mb-8">
              Alors il est très probable que, comme de nombreux prestataires de services locaux, vous soyez coincé dans le schéma suivant :
            </p>

            <div className="space-y-4">
              <div className="bg-accent p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-xl font-bold text-primary">
                  Un mois ça tourne bien, le mois suivant, c'est la galère.
                </p>
              </div>

              <div className="bg-accent p-6 rounded-xl transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-xl font-bold text-primary">
                  Un week-end complet, puis des semaines creuses qui s'enchainent.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card space-y-6"
          >
            <p className="text-body">
              Vous vous retrouvez à surveiller constamment votre trésorerie, de peur que vos charges ne dépassent vos revenus…
            </p>

            <p className="text-body">
              Vous flirtez en permanence avec la peur de la <span className="font-semibold text-primary">non rentabilité.</span>
            </p>

            <p className="text-body">
              Vous avez l'impression de toujours devoir trouver une idée pour attirer de nouveaux clients chez vous…
            </p>

            <p className="text-body">
              Sauf que ce n'est pas si facile et <span className="font-semibold text-primary">le temps vous manque</span> souvent : accueillir la clientèle, réceptionner la marchandise, gérer l'administratif…
            </p>

            <blockquote className="bg-accent p-6 rounded-xl text-xl text-primary font-medium transform hover:scale-[1.02] transition-all duration-300">
              Tout ça vous laisse très peu de temps pour implémenter le digital dans votre entreprise, créer des posts sur les réseaux sociaux ou optimiser votre prospection.
            </blockquote>

            <p className="heading-3 text-center">
              Pourtant, vous connaissez la clé qui pourrait vous permettre de vous projeter au delà de 3 semaines.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 