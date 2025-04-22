'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#1B4332] opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 mb-20"
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight mb-8">
              Vous êtes <span className="text-[#2D6A4F]">professionnels du service du sport et du loisir</span> et vous passez votre temps à courir après les clients ?
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700">
                Vos clients sont satisfaits de vos services car vous offrez des prestations de qualité…
              </p>
              <p className="text-xl text-gray-700">
                Mais malgré tous vos efforts, votre chiffre d'affaires reste imprévisible et très fluctuant.
              </p>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xl font-semibold text-[#1B4332]">
                  Soyons honnêtes, au fond vous le savez :
                </p>
                <p className="text-2xl font-bold text-[#1B4332] mt-2">
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
          <h3 className="text-2xl font-bold text-[#1B4332]">
            Et si vous avez un ou plusieurs de ces problèmes :
          </h3>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-700">
                Vos clients entendent parler de vous seulement via le bouche-à-oreille — ce qui limite votre nombre de nouveaux clients potentiels ;
              </p>
            </div>

            <div className="bg-[#1B4332] bg-opacity-5 p-8 rounded-2xl">
              <p className="text-xl text-[#1B4332]">
                Votre visibilité limitée se résume à quelques affiches publicitaires et des cartes de visites laissées sur le comptoir des commerces du coin ou distribuées à la va-vite dans des clubs business ;
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl text-gray-700">
                Vous avez de bons avis et les gens sont contents de vos services mais — vous n'avez pas encore une place claire dans l'esprit de vos clients…
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-12"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-2xl font-semibold text-[#1B4332] mb-8">
              Alors il est très probable que, comme de nombreux prestataires de services locaux, vous soyez coincé dans le schéma suivant :
            </p>

            <div className="space-y-6">
              <div className="bg-[#1B4332] bg-opacity-5 p-6 rounded-xl">
                <p className="text-xl font-bold text-[#1B4332]">
                  Un mois ça tourne bien, le mois suivant, c'est la galère.
                </p>
              </div>

              <div className="bg-[#1B4332] bg-opacity-5 p-6 rounded-xl">
                <p className="text-xl font-bold text-[#1B4332]">
                  Un week-end complet, puis des semaines creuses qui s'enchainent.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <p className="text-xl text-gray-700">
              Vous vous retrouvez à surveiller constamment votre trésorerie, de peur que vos charges ne dépassent vos revenus…
            </p>

            <p className="text-xl text-gray-700">
              Vous flirtez en permanence avec la peur de la <span className="font-semibold text-[#1B4332]">non rentabilité.</span>
            </p>

            <p className="text-xl text-gray-700">
              Vous avez l'impression de toujours devoir trouver une idée pour attirer de nouveaux clients chez vous…
            </p>

            <p className="text-xl text-gray-700">
              Sauf que ce n'est pas si facile et <span className="font-semibold text-[#1B4332]">le temps vous manque</span> souvent : accueillir la clientèle, réceptionner la marchandise, gérer l'administratif…
            </p>

            <blockquote className="bg-[#1B4332] bg-opacity-5 p-6 rounded-xl text-xl text-[#1B4332]">
              Tout ça vous laisse très peu de temps pour implémenter le digital dans votre entreprise, créer des posts sur les réseaux sociaux ou optimiser votre prospection.
            </blockquote>

            <p className="text-2xl font-semibold text-[#1B4332]">
              Pourtant, vous connaissez la clé qui pourrait vous permettre de vous projeter au delà de 3 semaines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 