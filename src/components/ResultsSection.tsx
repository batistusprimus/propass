'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-32 px-4 bg-gradient-to-b from-accent-light to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative space-y-16">
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
            className="card hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="heading-2 text-primary mb-6">
              Le rêve de tout prestataire de service local.
            </h2>

            <div className="space-y-4">
              <p className="text-body">
                Alors en découvrant ça, je me suis formé pendant des mois : création de tunnel et copywriting.
              </p>

              <p className="text-body font-medium text-primary">
                Et j'ai appliqué tout ça dans l'entreprise pour laquelle je travaillais à l'époque en tant que commercial !
              </p>

              <p className="text-body">
                Les résultats se sont vu tout de suite :
              </p>

              <div className="bg-primary bg-opacity-5 p-6 rounded-xl">
                <p className="text-xl font-semibold text-primary">
                Je prospectais 3X moins qu'avant mais le Chiffre d'Affaire de la boîte était en hausse depuis l'implémentation de mon système.
              </p>
              </div>
            </div>
          </motion.div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300 space-y-6"
          >
            <p className="text-body">
              Puis, confronté à la réalité du marché du web, à des prestataires qui avaient perdu la notion de "<span className="italic">Service</span>" et qui pratiquaient des tarifs indécents…
            </p>

            <p className="text-body">
              (<span className="italic">j'ai reçu un devis pour un Site Web à 7300€ — même pas optimisé pour le SEO</span>)
            </p>

            <p className="text-body">
              J'ai été obligé d'élargir mes compétences.
            </p>

            <p className="text-body">
              J'ai appris à créer <span className="font-semibold text-primary">des systèmes complets</span> capables d'attirer des prospects grâce à :
            </p>

            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="group flex items-start space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">
                  <span className="font-semibold text-primary">la visibilité locale</span> (Google My Business, SEO, Publicité)
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="group flex items-start space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">
                  <span className="font-semibold text-primary">la publicité en ligne</span> (Google Ads, Facebook ads)
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="group flex items-start space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">
                  <span className="font-semibold text-primary">des lead magnets simples mais efficaces</span> pour récupérer des adresses emails (checklists, quiz, offres limitées)
                </p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="group flex items-start space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">
                  puis <span className="font-semibold text-primary">des séquences d'e-mails automatisées</span> qui parlent aux émotions de vos clients, et les poussent à prendre rendez-vous ou à passer à l'action.
                </p>
              </motion.li>
            </ul>

            <blockquote className="bg-primary bg-opacity-5 p-6 rounded-xl border-l-4 border-primary">
              <p className="text-xl text-primary">
                <span className="font-semibold">Acquérir un nouveau client coûte 5 fois plus cher</span> que de <span className="font-semibold">garder un client existant.</span>
              </p>
            </blockquote>

            <div className="space-y-4">
              <p className="text-body">
              Alors je cherchais en permanence comment faire revenir les clients, les fidéliser, les relancer et les remercier d'être là.
            </p>

              <p className="text-body">
              Et en bon économe : sans augmenter la charge de travail.
            </p>

              <p className="text-body">
              J'étais tellement passionné que je me suis lancé à mon compte (sur les conseils d'une personne qui voulait me débaucher) pour accompagner encore plus de prestataires de service comme vous à implémenter ce système.
            </p>

              <p className="heading-3 text-primary">
              Et donc tirer le meilleur profit du moindre effort.
            </p>

              <div className="bg-primary bg-opacity-5 p-6 rounded-xl">
                <p className="text-xl font-medium text-primary">
              Depuis 2022, j'ai aidé +50 entreprises à développer leur système de prospection passive.
            </p>
              </div>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300 space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl border-l-4 border-primary shadow-soft">
              <h3 className="heading-2 text-gray-800">
                J'ai notamment aidé un centre de simulation F1 à faire{' '}
                <span className="text-4xl md:text-5xl font-bold text-primary bg-primary bg-opacity-5 px-3 py-1 rounded-lg inline-block my-2">
                  +72% de chiffre d'affaires
                </span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-600">en 6 mois</span>
              </h3>
            </div>

            <p className="text-body">
              En quelques semaines, ils ont implémenté <span className="font-semibold text-primary">mon système de prospection passive locale</span> : 
            </p>

            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">fiche Google optimisée ;</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">formulaire de capture sur le site ;</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                <p className="text-body">e-mails automatisés…</p>
              </motion.li>
            </ul>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="card bg-primary bg-opacity-5 hover:scale-[1.02] transition-all duration-300"
              >
                <p className="text-body">
                  Leur chiffre d'affaires est passé de <span className="font-semibold text-primary">35 000€ à 60 000€/mois</span>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="card bg-primary bg-opacity-5 hover:scale-[1.02] transition-all duration-300"
              >
                <p className="text-body">
                  Leur base email est passée de 400 <span className="font-semibold text-primary">à +1200 contacts qualifiés</span>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="card bg-primary bg-opacity-5 hover:scale-[1.02] transition-all duration-300"
              >
                <p className="text-body">
                  Ils ont transformé leur site en <span className="font-semibold text-primary">machine à réservations</span> qui tourne sans relance
                </p>
              </motion.div>
            </div>

            <div className="space-y-4">
              <p className="text-body">
                <span className="font-semibold text-primary">Il n'avait plus besoin qu'un bus de touristes s'arrêtent devant pour faire une grosse journée.</span>
            </p>

              <p className="text-body">
              Leur acquisition ne dépendait plus du hasard.
            </p>

              <p className="text-body">
                Et le patron a pu <span className="font-semibold text-primary">se concentrer sur l'expérience client</span>, plutôt que sur la chasse aux réservations.
            </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-primary p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="space-y-6">
              <p className="text-2xl font-bold text-white">
                En moyenne, mes clients augmentent leur volume de leads qualifiés de 50% en 3 mois.
              </p>

              <p className="text-2xl font-bold text-white">
                Et ils stabilisent leur chiffre d'affaires avec une progression de 20 à 50% en 6 à 12 mois.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          <div className="space-y-8">
            <p className="text-body">
              Tout ça grâce un système de prospection passive.
            </p>

            <p className="heading-3 text-primary">
              Comme cet assureur que j'ai aidé à optimiser sa fiche Google pour générer plus de traffic vers son site Web :
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="card bg-primary bg-opacity-5 space-y-4">
                  <p className="text-body">
                    En optimisant cette fiche Google, j'ai permis à mon client de passer de 53 prospects envoyés vers son Site Web… <span className="font-semibold text-primary">à 84 en seulement 1 mois.</span>
                  </p>
                  <p className="text-body">
                  Ça fait +31 visiteurs ciblés en plus chaque mois.
                </p>
                  <p className="text-body">
                  S'il ne convertit qu'un prospect sur dix, ça fait tout de même 3 nouveaux clients.
                </p>
                  <p className="text-body">
                  Et si chaque client lui rapporte 300€, cette petite optimisation lui rapporte déjà 900€,
                </p>
                  <p className="heading-3 text-primary">
                  tous les mois.
                </p>
              </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <p className="text-body">
                J'ai accompagné plus de <span className="font-semibold text-primary">50 entreprises</span> sur la mise en place de système de prospection passive.
            </p>

              <p className="heading-3 text-primary">
              TOUTES ont eu des résultats positifs.
            </p>

              <p className="text-body">
                Comme cette cliente, <span className="font-semibold text-primary">masseuse à domicile</span> qui n'arrivait pas à remplir son agenda…
            </p>

              <p className="text-body">
              Malgré ses très bons avis clients et ses nombreuses formations… elle n'arrivait pas à créer du trafic vers son site.
            </p>

              <p className="text-body">
                En <span className="font-semibold text-primary">Septembre 2024</span>, je suis intervenu sur sa présence en ligne :
              </p>

              <ul className="space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <p className="text-body">Optimisation de la fiche Google</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <p className="text-body">Mise en place d'un opt-in sur le site pour récupérer des mails</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="group flex items-center space-x-3 bg-primary bg-opacity-5 p-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">→</span>
                  <p className="text-body">Réécriture de la page d'accueil pour mieux parler aux prospects</p>
                </motion.li>
            </ul>

              <p className="heading-3 text-primary">
              Voici les résultats :
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="card bg-primary bg-opacity-5 space-y-4">
                  <p className="text-body">
                    En l'espace de 4 mois, les interactions avec la fiche Google ont presque <span className="font-semibold text-primary">doublé.</span>
                  </p>
                  <p className="text-body">
                  Prouvant l'impact direct d'un travail de visibilité locale structuré. 
                </p>
                  <p className="text-body">
                  Ce type de résultat est récurrent chez mes clients.
                </p>
              </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-6"
              >
                <div className="card bg-primary bg-opacity-5">
                  <p className="text-xl font-medium text-primary">
                    En partant d'une fiche quasi invisible, on a généré une <span className="font-semibold">augmentation de +175% de clics vers le site</span> en 4 mois.
                </p>
              </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 