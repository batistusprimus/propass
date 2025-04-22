'use client';

import { motion } from 'framer-motion';

export default function AISection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
              C'était sans compter sur l'intégration de l'Intelligence Artificielle dans votre entreprise pour gagner du temps
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
          >
            <p className="text-lg text-gray-700">
              Seulement <span className="font-semibold text-[#1B4332]">5% des PME</span> utilisent des solutions d'Intelligence Artificielle.
            </p>

            <p className="text-lg text-gray-700">
              C'est donc le moment idéal pour <span className="font-semibold text-[#1B4332]">prendre de l'avance</span> sur vos concurrents et <span className="font-semibold text-[#1B4332]">gagner du temps</span> dans chaque aspect de votre activité.
            </p>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Je vous fournirai notamment des <span className="font-semibold text-[#1B4332]">prompts ChatGPT</span> pour vous aider dans :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">l'élaboration d'un calendrier éditorial</span> — pour ne jamais tomber à court d'idées;
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">l'écriture des posts de vos réseaux sociaux</span> — afin que cela ne vous prennent que 1 heure chaque semaine pour créer le contenu du mois à venir;
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">la rédaction de séquences emails automatiques</span> et de newsletters — qui fidélisent vos clients;
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#2D6A4F] text-xl">→</span>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold text-[#1B4332]">l'alimentation de votre blog</span> avec des articles écrits optimisés pour le SEO — rédigés en 45 minutes chrono…
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700">
              Vous pourrez alors devenir la référence locale dans votre domaine d'activité, sans y passer des heures chaque jour.
            </p>
          </motion.div>

          {/* Program Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
          >
            <p className="text-lg font-semibold text-[#1B4332]">
              Pendant le bootcamp vous aurez donc :
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Un module complet sur l'optimisation de votre fiche Google.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Des tutoriels pas à pas pour configurer vos campagnes Google Ads et Meta Ads.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Un guide sur la création de pages de capture et de lead magnets avec Systeme.io.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Une méthode SEO pour générer du trafic qualifié avec votre blog.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Des séquences e-mails préconçues pour convertir et fidéliser vos prospects.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Des modules gagner des jours entiers et vous passer d'un prestataire grâce à ChatGPT.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Des mises à jour régulières pour intégrer les nouvelles tendances.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Une assistance gratuite en cas de blocage sur un point.
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  Un pack d'outils, pour la plupart gratuits.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[#1B4332]">
              Et dans 4 semaines…
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 