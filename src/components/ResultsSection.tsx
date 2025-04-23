'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight">
              Le rêve de tout prestataire de service local.
            </h2>

            <div className="mt-6 space-y-4">
              <p className="text-lg text-gray-700">
                Alors en découvrant ça, je me suis formé pendant des mois : création de tunnel et copywriting.
              </p>

              <p className="text-lg font-semibold text-[#1B4332]">
                Et j'ai appliqué tout ça dans l'entreprise pour laquelle je travaillais à l'époque en tant que commercial !
              </p>

              <p className="text-lg text-gray-700">
                Les résultats se sont vu tout de suite :
              </p>

              <p className="text-lg font-semibold text-[#1B4332]">
                Je prospectais 3X moins qu'avant mais le Chiffre d'Affaire de la boîte était en hausse depuis l'implémentation de mon système.
              </p>
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <p className="text-lg text-gray-700">
              Puis, confronté à la réalité du marché du web, à des prestataires qui avaient perdu la notion de "<span className="italic">Service</span>" et qui pratiquaient des tarifs indécents…
            </p>

            <p className="text-lg text-gray-700">
              (<span className="italic">j'ai reçu un devis pour un Site Web à 7300€ — même pas optimisé pour le SEO</span>)
            </p>

            <p className="text-lg text-gray-700">
              J'ai été obligé d'élargir mes compétences.
            </p>

            <p className="text-lg text-gray-700">
              J'ai appris à créer <span className="font-semibold text-[#1B4332]">des systèmes complets</span> capables d'attirer des prospects grâce à :
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-[#1B4332]">la visibilité locale</span> (Google My Business, SEO, Publicité)
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-[#1B4332]">la publicité en ligne</span> (Google Ads, Facebook ads)
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold text-[#1B4332]">des lead magnets simples mais efficaces</span> pour récupérer des adresses emails (checklists, quiz, offres limitées)
                </p>
              </li>
              <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">
                  puis <span className="font-semibold text-[#1B4332]">des séquences d'e-mails automatisées</span> qui parlent aux émotions de vos clients, et les poussent à prendre rendez-vous ou à passer à l'action.
                </p>
              </li>
            </ul>

            <blockquote className="border-l-4 border-[#2D6A4F] pl-4 italic text-gray-700 bg-gray-50 p-4 rounded-r-lg shadow-md">
              <p className="text-lg">
                <span className="font-semibold text-[#1B4332]">Acquérir un nouveau client coûte 5 fois plus cher</span> que de <span className="font-semibold text-[#1B4332]">garder un client existant.</span>
              </p>
            </blockquote>

            <p className="text-lg text-gray-700">
              Alors je cherchais en permanence comment faire revenir les clients, les fidéliser, les relancer et les remercier d'être là.
            </p>

            <p className="text-lg text-gray-700">
              Et en bon économe : sans augmenter la charge de travail.
            </p>

            <p className="text-lg text-gray-700">
              J'étais tellement passionné que je me suis lancé à mon compte (sur les conseils d'une personne qui voulait me débaucher) pour accompagner encore plus de prestataires de service comme vous à implémenter ce système.
            </p>

            <p className="text-lg font-semibold text-[#1B4332]">
              Et donc tirer le meilleur profit du moindre effort.
            </p>

            <p className="text-lg text-gray-700">
              Depuis 2022, j'ai aidé +50 entreprises à développer leur système de prospection passive.
            </p>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#1B4332]">
              J'ai notamment aidé un centre de simulation F1 à faire <span className="text-[#2D6A4F]">+72% de chiffre d'affaires en 6 mois</span>
            </h3>

            <p className="text-lg text-gray-700">
              En quelques semaines, ils ont implémenté <span className="font-semibold text-[#1B4332]">mon système de prospection passive locale</span> : 
            </p>

            <ul className="space-y-2">
              <li className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">fiche Google optimisée ;</p>
              </li>
              <li className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">formulaire de capture sur le site ;</p>
              </li>
              <li className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">e-mails automatisés…</p>
              </li>
            </ul>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-lg text-gray-700">
                  Leur chiffre d'affaires est passé de <span className="font-semibold text-[#1B4332]">35 000€ à 60 000€/mois</span>
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-lg text-gray-700">
                  Leur base email est passée de 400 <span className="font-semibold text-[#1B4332]">à +1200 contacts qualifiés</span>
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-lg text-gray-700">
                  Ils ont transformé leur site en <span className="font-semibold text-[#1B4332]">machine à réservations</span> qui tourne sans relance
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#1B4332]">Il n'avait plus besoin qu'un bus de touristes s'arrêtent devant pour faire une grosse journée.</span>
            </p>

            <p className="text-lg text-gray-700">
              Leur acquisition ne dépendait plus du hasard.
            </p>

            <p className="text-lg text-gray-700">
              Et le patron a pu <span className="font-semibold text-[#1B4332]">se concentrer sur l'expérience client</span>, plutôt que sur la chasse aux réservations.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[#1B4332] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="space-y-4">
              <p className="text-xl font-bold text-white">
                En moyenne, mes clients augmentent leur volume de leads qualifiés de 50% en 3 mois.
              </p>

              <p className="text-xl font-bold text-white">
                Et ils stabilisent leur chiffre d'affaires avec une progression de 20 à 50% en 6 à 12 mois.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700">
              Tout ça grâce un système de prospection passive.
            </p>

            <p className="text-lg font-semibold text-[#1B4332]">
              Comme cet assureur que j'ai aidé à optimiser sa fiche Google pour générer plus de traffic vers son site Web :
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 p-4">
                    <Image
                      src="/images/increase-52-7.png"
                      alt="Résultats de l'optimisation Google"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  En optimisant cette fiche Google, j'ai permis à mon client de passer de 53 prospects envoyés vers son Site Web… <span className="font-semibold text-[#1B4332]">à 84 en seulement 1 mois.</span>
                </p>
                <p className="text-lg text-gray-700">
                  Ça fait +31 visiteurs ciblés en plus chaque mois.
                </p>
                <p className="text-lg text-gray-700">
                  S'il ne convertit qu'un prospect sur dix, ça fait tout de même 3 nouveaux clients.
                </p>
                <p className="text-lg text-gray-700">
                  Et si chaque client lui rapporte 300€, cette petite optimisation lui rapporte déjà 900€,
                </p>
                <p className="text-lg font-semibold text-[#1B4332]">
                  tous les mois.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              J'ai accompagné plus de <span className="font-semibold text-[#1B4332]">50 entreprises</span> sur la mise en place de système de prospection passive.
            </p>

            <p className="text-lg font-semibold text-[#1B4332]">
              TOUTES ont eu des résultats positifs.
            </p>

            <p className="text-lg text-gray-700">
              Comme cette cliente, <span className="font-semibold text-[#1B4332]">masseuse à domicile</span> qui n'arrivait pas à remplir son agenda…
            </p>

            <p className="text-lg text-gray-700">
              Malgré ses très bons avis clients et ses nombreuses formations… elle n'arrivait pas à créer du trafic vers son site.
            </p>

            <p className="text-lg text-gray-700">
              En <span className="font-semibold text-[#1B4332]">Septembre 2024</span>, je suis intervenu sur sa présence en ligne :
            </p>

            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">Optimisation de la fiche Google</p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">Mise en place d'un opt-in sur le site pour récupérer des mails</p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#2D6A4F] text-xl">→</span>
                <p className="text-lg text-gray-700">Réécriture de la page d'accueil pour mieux parler aux prospects</p>
              </li>
            </ul>

            <p className="text-lg font-semibold text-[#1B4332]">
              Voici les résultats :
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 p-4">
                    <Image
                      src="/images/increase-83.png"
                      alt="Résultats de l'optimisation pour la masseuse à domicile"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  En l'espace de 4 mois, les interactions avec la fiche Google ont presque <span className="font-semibold text-[#1B4332]">doublé.</span>
                </p>
                <p className="text-lg text-gray-700">
                  Prouvant l'impact direct d'un travail de visibilité locale structuré. 
                </p>
                <p className="text-lg text-gray-700">
                  Ce type de résultat est récurrent chez mes clients.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 p-4">
                    <Image
                      src="/images/increase-175.png"
                      alt="Résultats de l'optimisation"
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  En partant d'une fiche quasi invisible, on a généré une <span className="font-semibold text-[#1B4332]">augmentation de +175% de clics vers le site</span> en 4 mois.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 