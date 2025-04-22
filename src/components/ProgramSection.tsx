'use client';

import { motion } from 'framer-motion';

export default function ProgramSection() {
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
              Au programme de ce BootCamp :
            </h2>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-8"
          >
            <p className="text-lg text-gray-700">
              Deux appels en visioconférence de 2h chaque lundi & vendredi.
            </p>

            <div className="space-y-8">
              {/* Monday Call */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1B4332]">
                  L'appel du lundi sera dédié à la découverte d'une nouvelle compétence.
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>Lors de cet appel je dispenserai un cours théorique, pratique et interactif.</p>
                  <p>Je vous introduirai à une nouvelle compétence et vous pourrez la mettre en place en direct dans votre entreprise.</p>
                  <p>Ce qui veut dire que je répondrai à toutes vos questions instantanément pour maximiser votre apprentissage et lever vos doutes.</p>
                  <p>À la fin de l'appel, vous recevrez des "exercices" pratiques à implémenter directement dans votre business pour des effets immédiats.</p>
                </div>
              </div>

              {/* Friday Call */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1B4332]">
                  L'appel du vendredi sera dédié à la vérification des "exercices".
                </h3>
                <p className="text-gray-700">
                  Si par exemple vous avez eu des difficultés pour implémenter les apprentissages du lundi, cet appel me permettra de vous aider à corriger cela afin que vous soyez toujours à la même page que tout le monde.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#2D6A4F] pl-4 italic text-gray-700 bg-gray-50 p-4 rounded-r-lg shadow-md">
              <p className="text-lg">
                Un groupe Whatsapp est prévu avec <span className="font-semibold text-[#1B4332]">les autres participants et moi-même</span> pour favoriser l'entraide.
              </p>
            </blockquote>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                En tant qu'entrepreneur, nous sommes <span className="font-semibold text-[#1B4332]">souvent seul aux commandes</span>.
              </p>
              <p className="text-lg text-gray-700">
                Quand ça bloque, quand vous doutez, quand vous avez une victoire à partager… 
              </p>
              <p className="text-lg font-semibold text-[#1B4332]">
                Il n'y a parfois personne autour pour en parler.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Dans ce groupe WhatsApp vous pourrez :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">Poser vos questions à tout moment ;</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">Partager vos réussites (et vos galères) ;</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">Recevoir du soutien quand ça coince ;</span>
                  </p>
                </li>
                <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    Et surtout : <span className="font-semibold text-[#1B4332]">sentir que vous n'êtes pas seul</span> dans cette transition vers un système qui bosse pour vous…
                  </p>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Je suis présent dans le groupe, je vous réponds, je vous guide.
              </p>
              <p className="text-lg text-gray-700">
                Et vous avancez <span className="font-semibold text-[#1B4332]">dans une vraie dynamique de groupe</span>, entouré de personnes qui vivent exactement les mêmes étapes que vous.
              </p>
              <p className="text-lg text-gray-700">
                Qui sait, vos prochains clients se trouveront peut-être dans ce groupe…
              </p>
            </div>
          </motion.div>

          {/* Weekly Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#1B4332] text-center">
              Déroulé des 4 semaines :
            </h3>

            <div className="space-y-8">
              {/* Week 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-[#1B4332] mb-4">
                  Semaine 1 : Apprendre à créer un calendrier éditorial pour devenir une référence sur les réseaux sociaux
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>En 2025, une entreprise sans présence sur les réseaux sociaux, c'est comme un magasin sans vitrine : invisible aux yeux de ses clients.</p>
                  <p>Que ce soit sur Instagram, LinkedIn ou même Facebook, publier régulièrement du contenu stratégique ne sert pas juste à "faire joli" — c'est ce qui vous positionne comme <span className="font-semibold text-[#1B4332]">la référence évidente</span> dans votre secteur.</p>
                  <p>C'est ce qui fait que vos prospects pensent à vous avant même d'avoir un besoin.</p>
                  <p>Et surtout, c'est le premier levier d'un système d'acquisition rentable… sans pub, sans cold call, sans réseau.</p>
                </div>
              </motion.div>

              {/* Week 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-[#1B4332] mb-4">
                  Semaine 2 : Optimiser sa Fiche Google pour être le premier choix de vos prospects
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>Aujourd'hui, <span className="font-semibold text-[#1B4332]">la première impression ne se joue plus sur votre site web</span>, mais sur votre fiche Google. C'est elle qui s'affiche quand quelqu'un tape votre nom ou "[votre service] + ville".</p>
                  <p>Si elle est incomplète, mal notée ou mal optimisée, vous perdez des clients <span className="font-semibold text-[#1B4332]">avant même qu'ils ne cliquent</span>.</p>
                  <p>À l'inverse, une fiche bien construite peut vous transformer en <span className="font-semibold text-[#1B4332]">premier choix évident</span> dans votre zone.</p>
                </div>
              </motion.div>

              {/* Week 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-[#1B4332] mb-4">
                  Semaine 3 : Mettre en place des publicités en ligne pour attirer des prospects qualifiés en automatique
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>Faire de la pub, c'est facile.</p>
                  <p><span className="font-semibold text-[#1B4332]">Attirer les bons clients avec</span>, c'est une autre histoire.</p>
                  <p>En 2025, balancer un budget dans Meta ou Google sans stratégie, c'est comme jeter des billets par la fenêtre.</p>
                  <p>Lors de la semaine 3, je vous montre comment utiliser la publicité <span className="font-semibold text-[#1B4332]">pour générer des prospects qualifiés en automatique</span>, sans y passer vos soirées ni brûler votre trésorerie.</p>
                  <p>Vous n'avez pas besoin d'être un marketeur pro — juste de connaître <span className="font-semibold text-[#1B4332]">les bons réglages, les bons messages et les bons formats</span>.</p>
                </div>
              </motion.div>

              {/* Week 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-[#1B4332] mb-4">
                  Semaine 4 : Attirer les visiteurs sur le site et récupérer leurs coordonnées
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>Vos clients ne retiennent pas tout dès la première visite.</p>
                  <p>C'est pourquoi l'email reste <span className="font-semibold text-[#1B4332]">le canal le plus puissant</span> pour rester dans leur tête… et dans leur agenda.</p>
                  <p>Une bonne séquence email permet de créer un <span className="font-semibold text-[#1B4332]">parcours client automatisé</span> : vos prospects découvrent votre univers, vos offres et votre valeur ajoutée <span className="font-semibold text-[#1B4332]">sans que vous ayez à lever le petit doigt</span>.</p>
                  <p>C'est aussi un point de contact idéal pour <span className="font-semibold text-[#1B4332]">annoncer une nouveauté, lancer une promo ou inciter à la réservation</span>.</p>
                  <p>Et contrairement aux réseaux sociaux, <span className="font-semibold text-[#1B4332]">100% des messages arrivent dans leur boîte</span>.</p>
                  <p>Pendant la semaine 4, vous apprendrez à écrire des emails qui fidélisent, qui vendent… et qui marquent.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <p className="text-lg text-gray-700">
              Des replays seront bien sûr disponibles si vous ne pouvez pas assister à une ou plusieurs sessions live.
            </p>
            <p className="text-lg text-gray-700">
              Et je me tiendrai à votre disposition pour répondre à toutes vos questions sur le groupe WhatsApp dédié.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center"
          >
            <a
              href="https://calendly.com/copyfk/appel-qualificatif-bootcamp?month=2025-04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1B4332] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D6A4F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Prendre rendez-vous
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 