'use client';

import { motion } from 'framer-motion';

export default function ProgramSection() {
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
              Au programme de ce BootCamp :
            </h2>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="text-body text-lg">
                Deux appels en visioconférence de 2h chaque lundi & vendredi.
              </p>

              <div className="space-y-12">
                {/* Monday Call */}
                <div className="space-y-6 bg-accent-light p-8 rounded-xl">
                  <h3 className="heading-3 text-primary">
                    L'appel du lundi sera dédié à la découverte d'une nouvelle compétence.
                  </h3>
                  <div className="space-y-4">
                    <p className="text-body">Lors de cet appel je dispenserai un cours théorique, pratique et interactif.</p>
                    <p className="text-body">Je vous introduirai à une nouvelle compétence et vous pourrez la mettre en place en direct dans votre entreprise.</p>
                    <p className="text-body">Ce qui veut dire que je répondrai à toutes vos questions instantanément pour maximiser votre apprentissage et lever vos doutes.</p>
                    <p className="text-body">À la fin de l'appel, vous recevrez des "exercices" pratiques à implémenter directement dans votre business pour des effets immédiats.</p>
                  </div>
                </div>

                {/* Friday Call */}
                <div className="space-y-6 bg-accent-light p-8 rounded-xl">
                  <h3 className="heading-3 text-primary">
                    L'appel du vendredi sera dédié à la vérification des "exercices".
                  </h3>
                  <p className="text-body">
                    Si par exemple vous avez eu des difficultés pour implémenter les apprentissages du lundi, cet appel me permettra de vous aider à corriger cela afin que vous soyez toujours à la même page que tout le monde.
                  </p>
                </div>
              </div>

              <div className="bg-accent-light p-8 rounded-xl border-l-4 border-primary">
                <p className="text-body text-lg">
                  Un groupe Whatsapp est prévu avec <span className="font-semibold text-primary">les autres participants et moi-même</span> pour favoriser l'entraide.
                </p>
              </div>

              <div className="space-y-8">
                <p className="text-body text-lg">
                  En tant qu'entrepreneur, nous sommes <span className="font-semibold text-primary">souvent seul aux commandes</span>.
                </p>
                <p className="text-body text-lg">
                  Quand ça bloque, quand vous doutez, quand vous avez une victoire à partager… 
                </p>
                <p className="heading-3 text-primary">
                  Il n'y a parfois personne autour pour en parler.
                </p>
              </div>

              <div className="space-y-8">
                <p className="text-body text-lg">
                  Dans ce groupe WhatsApp vous pourrez :
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">Poser vos questions à tout moment ;</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">Partager vos réussites (et vos galères) ;</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">Recevoir du soutien quand ça coince ;</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      Et surtout : <span className="font-semibold text-primary">sentir que vous n'êtes pas seul</span> dans cette transition vers un système qui bosse pour vous…
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-body text-lg">
                  Je suis présent dans le groupe, je vous réponds, je vous guide.
                </p>
                <p className="text-body text-lg">
                  Et vous avancez <span className="font-semibold text-primary">dans une vraie dynamique de groupe</span>, entouré de personnes qui vivent exactement les mêmes étapes que vous.
                </p>
                <p className="text-body text-lg">
                  Qui sait, vos prochains clients se trouveront peut-être dans ce groupe…
                </p>
              </div>
            </div>
          </motion.div>

          {/* Weekly Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-12"
          >
            <h3 className="heading-3 text-primary text-center">
              Déroulé des 4 semaines :
            </h3>

            <div className="space-y-12">
              {/* Week 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="heading-3 text-primary mb-6">
                  Semaine 1 : Apprendre à créer un calendrier éditorial pour devenir une référence sur les réseaux sociaux
                </h4>
                <div className="space-y-6">
                  <p className="text-body">En 2025, une entreprise sans présence sur les réseaux sociaux, c'est comme un magasin sans vitrine : invisible aux yeux de ses clients.</p>
                  <p className="text-body">Que ce soit sur Instagram, LinkedIn ou même Facebook, publier régulièrement du contenu stratégique ne sert pas juste à "faire joli" — c'est ce qui vous positionne comme <span className="font-semibold text-primary">la référence évidente</span> dans votre secteur.</p>
                  <p className="text-body">C'est ce qui fait que vos prospects pensent à vous avant même d'avoir un besoin.</p>
                  <p className="text-body">Et surtout, c'est le premier levier d'un système d'acquisition rentable… sans pub, sans cold call, sans réseau.</p>
                </div>
              </motion.div>

              {/* Week 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="heading-3 text-primary mb-6">
                  Semaine 2 : Optimiser sa Fiche Google pour être le premier choix de vos prospects
                </h4>
                <div className="space-y-6">
                  <p className="text-body">Aujourd'hui, <span className="font-semibold text-primary">la première impression ne se joue plus sur votre site web</span>, mais sur votre fiche Google. C'est elle qui s'affiche quand quelqu'un tape votre nom ou "[votre service] + ville".</p>
                  <p className="text-body">Si elle est incomplète, mal notée ou mal optimisée, vous perdez des clients <span className="font-semibold text-primary">avant même qu'ils ne cliquent</span>.</p>
                  <p className="text-body">À l'inverse, une fiche bien construite peut vous transformer en <span className="font-semibold text-primary">premier choix évident</span> dans votre zone.</p>
                </div>
              </motion.div>

              {/* Week 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="heading-3 text-primary mb-6">
                  Semaine 3 : Mettre en place des publicités en ligne pour attirer des prospects qualifiés en automatique
                </h4>
                <div className="space-y-6">
                  <p className="text-body">Faire de la pub, c'est facile.</p>
                  <p className="text-body"><span className="font-semibold text-primary">Attirer les bons clients avec</span>, c'est une autre histoire.</p>
                  <p className="text-body">En 2025, balancer un budget dans Meta ou Google sans stratégie, c'est comme jeter des billets par la fenêtre.</p>
                  <p className="text-body">Lors de la semaine 3, je vous montre comment utiliser la publicité <span className="font-semibold text-primary">pour générer des prospects qualifiés en automatique</span>, sans y passer vos soirées ni brûler votre trésorerie.</p>
                  <p className="text-body">Vous n'avez pas besoin d'être un marketeur pro — juste de connaître <span className="font-semibold text-primary">les bons réglages, les bons messages et les bons formats</span>.</p>
                </div>
              </motion.div>

              {/* Week 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="card hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="heading-3 text-primary mb-6">
                  Semaine 4 : Attirer les visiteurs sur le site et récupérer leurs coordonnées
                </h4>
                <div className="space-y-6">
                  <p className="text-body">Vos clients ne retiennent pas tout dès la première visite.</p>
                  <p className="text-body">C'est pourquoi l'email reste <span className="font-semibold text-primary">le canal le plus puissant</span> pour rester dans leur tête… et dans leur agenda.</p>
                  <p className="text-body">Une bonne séquence email permet de créer un <span className="font-semibold text-primary">parcours client automatisé</span> : vos prospects découvrent votre univers, vos offres et votre valeur ajoutée <span className="font-semibold text-primary">sans que vous ayez à lever le petit doigt</span>.</p>
                  <p className="text-body">C'est aussi un point de contact idéal pour <span className="font-semibold text-primary">annoncer une nouveauté, lancer une promo ou inciter à la réservation</span>.</p>
                  <p className="text-body">Et contrairement aux réseaux sociaux, <span className="font-semibold text-primary">100% des messages arrivent dans leur boîte</span>.</p>
                  <p className="text-body">Pendant la semaine 4, vous apprendrez à écrire des emails qui fidélisent, qui vendent… et qui marquent.</p>
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
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-6">
              <p className="text-body text-lg">
                Des replays seront bien sûr disponibles si vous ne pouvez pas assister à une ou plusieurs sessions live.
              </p>
              <p className="text-body text-lg">
                Et je me tiendrai à votre disposition pour répondre à toutes vos questions sur le groupe WhatsApp dédié.
              </p>
            </div>
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
              className="btn-primary inline-block"
            >
              Prendre rendez-vous
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 