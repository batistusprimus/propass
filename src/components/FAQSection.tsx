'use client';

import { motion } from 'framer-motion';

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#1B4332]">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1B4332] mb-4">
              Vais-je avoir le temps de suivre un programme comme ça ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le bootcamp a été conçu pour des dirigeants débordés. Vous n'avez besoin que de 2 à 3h par semaine, réparties sur deux sessions en visio. Et si vous ratez un rendez-vous, vous avez accès au replay à vie. Ce n'est pas un programme à faire "en plus" de votre activité. C'est un système que vous installez <span className="font-semibold text-[#2D6A4F]">dans</span> votre activité, pour qu'elle tourne mieux.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1B4332] mb-4">
              Je suis nul en technique. Est-ce que je vais tout comprendre ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Oui, parce que tout est guidé <span className="font-semibold text-[#2D6A4F]">clic par clic</span>, sans jargon. Et surtout, vous n'êtes jamais seul : je vous accompagne pas à pas, je réponds à vos questions en direct, et je vous montre exactement quoi faire. Si vous savez ouvrir un email et cliquer sur un lien, vous avez le niveau.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1B4332] mb-4">
              Est-ce que c'est adaptable pour toutes les activités ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Que vous gériez un circuit de karting, une salle de sport, un studio de massage, un escape game ou un centre bien-être, la logique est la même : attirer plus de monde, mieux les convertir, et les faire revenir. Les outils changent peu. Ce qui compte, c'est <span className="font-semibold text-[#2D6A4F]">le système</span>, et il est pensé pour <span className="font-semibold text-[#2D6A4F]">les business locaux qui veulent remplir sans prospecter à la main</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1B4332] mb-4">
              Et si je ne peux pas suivre en direct les sessions ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chaque session est enregistrée et vous avez accès au replay à vie. Vous pouvez suivre à votre rythme, quand votre planning le permet. Le plus important, c'est d'avancer, pas de tout faire en direct. Surtout, je reste disponible par WhatsApp pour répondre à vos questions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1B4332] mb-4">
              Qu'est-ce que j'aurai concrètement à la fin des 4 semaines ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vous aurez un système de prospection passive : une fiche Google optimisée, un système pour récupérer les contacts de vos visiteurs, une séquence email qui relance vos prospects automatiquement, une première campagne publicitaire bien ciblée, et un calendrier éditorial pour booster vos présence en ligne.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center space-y-8 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl text-[#1B4332]">
            Vous avez encore des questions ?
          </h3>
          
          <div>
            <a
              href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1B4332] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D6A4F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ☎️ Réserver votre appel dès maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 