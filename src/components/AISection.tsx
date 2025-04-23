'use client';

import { motion } from 'framer-motion';

export default function AISection() {
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
              C'était sans compter sur l'intégration de l'Intelligence Artificielle dans votre entreprise pour gagner du temps
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="text-body text-lg">
                Seulement <span className="font-semibold text-primary">5% des PME</span> utilisent des solutions d'Intelligence Artificielle.
              </p>

              <p className="text-body text-lg">
                C'est donc le moment idéal pour <span className="font-semibold text-primary">prendre de l'avance</span> sur vos concurrents et <span className="font-semibold text-primary">gagner du temps</span> dans chaque aspect de votre activité.
              </p>

              <div className="space-y-8">
                <p className="text-body text-lg">
                  Je vous fournirai notamment des <span className="font-semibold text-primary">prompts ChatGPT</span> pour vous aider dans :
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">l'élaboration d'un calendrier éditorial</span> — pour ne jamais tomber à court d'idées;
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">l'écriture des posts de vos réseaux sociaux</span> — afin que cela ne vous prennent que 1 heure chaque semaine pour créer le contenu du mois à venir;
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">la rédaction de séquences emails automatiques</span> et de newsletters — qui fidélisent vos clients;
                    </p>
                  </div>
                  <div className="flex items-start space-x-6">
                    <span className="text-primary text-2xl font-bold mt-1">→</span>
                    <p className="text-body text-lg">
                      <span className="font-semibold text-primary">l'alimentation de votre blog</span> avec des articles écrits optimisés pour le SEO — rédigés en 45 minutes chrono…
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-body text-lg">
                Vous pourrez alors devenir la référence locale dans votre domaine d'activité, sans y passer des heures chaque jour.
              </p>
            </div>
          </motion.div>

          {/* Program Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="space-y-12">
              <p className="heading-3 text-primary">
                Pendant le bootcamp vous aurez donc :
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Un module complet sur l'optimisation de votre fiche Google.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Des tutoriels pas à pas pour configurer vos campagnes Google Ads et Meta Ads.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Un guide sur la création de pages de capture et de lead magnets avec Systeme.io.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Une méthode SEO pour générer du trafic qualifié avec votre blog.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Des séquences e-mails préconçues pour convertir et fidéliser vos prospects.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Des modules gagner des jours entiers et vous passer d'un prestataire grâce à ChatGPT.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Des mises à jour régulières pour intégrer les nouvelles tendances.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Une assistance gratuite en cas de blocage sur un point.
                  </p>
                </div>
                <div className="flex items-start space-x-6">
                  <span className="text-primary text-2xl font-bold mt-1">→</span>
                  <p className="text-body text-lg">
                    Un pack d'outils, pour la plupart gratuits.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="heading-3 text-primary">
              Et dans 4 semaines…
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 