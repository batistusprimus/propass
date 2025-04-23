'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-accent-light overflow-hidden" id="story">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Content Column - Moved before images for mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-7 order-2 md:order-2 space-y-8"
          >
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="heading-2 text-primary">
                Je suis Fabien Katola.
              </h2>
              <div className="card bg-primary bg-opacity-5 p-6">
                <p className="text-xl text-primary font-medium">
                  Le créateur du système Pro Pass : une méthode de prospection passive destinée aux professionnels du service du sport et du loisir.
                </p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="card hover:scale-[1.02] transition-all duration-300"
            >
              <div className="space-y-4">
                <p className="text-body">
                  J'ai passé 16 ans de ma vie à prospecter en tant que commercial.
                </p>
                <p className="text-body">
                  D'abord pour vendre des abonnements Fitness puis des services informatiques B2B.
                </p>
                <p className="text-body font-medium text-primary">
                  J'ai fait s'inscrire plus de 3000 adhérents et signé plus de 100 entreprises.
                </p>
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl text-primary italic pl-4 border-l-4 border-primary">
                Alors je me souviens des appels à froid que j'enchaînais… qui se finissaient souvent par un "Écoutez, je vous rappellerai…" ou un "bip" au bout du fil…
              </p>
              <div className="card hover:scale-[1.02] transition-all duration-300 space-y-4">
                <p className="text-body">
                  Des relances interminables avec toujours les mêmes objections…
                </p>
                <p className="text-body">
                  Des tournées en voiture sous la pluie, juste pour "tenter un truc" avec un patron jamais dispo.
                </p>
                <p className="heading-3 text-primary">
                  Autant vous dire que la prospection, <span className="font-bold">j'en ai fait une overdose.</span>
                </p>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:-ml-12 md:mr-12"
            >
              <div className="bg-primary bg-opacity-5 p-8 rounded-2xl relative transform hover:scale-[1.02] transition-all duration-300">
                <div className="absolute top-0 left-0 w-12 h-12 -mt-4 -ml-4">
                  <svg className="w-full h-full text-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-xl text-primary leading-relaxed">
                  Je préférais largement passer du temps à développer la <span className="font-semibold">relation commerciale</span> et à <span className="font-semibold">accompagner mes équipes</span> qu'à perdre mon temps à prospecter dans le vide.
                </p>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="card bg-primary bg-opacity-5 hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-xl font-medium text-primary">
                Alors quand l'Inbound Marketing est arrivé dans ma vie de commercial, je n'ai pu que saisir l'opportunité qui se présentait.
              </p>
            </motion.div>
          </motion.div>

          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-5 order-1 md:order-1 md:sticky md:top-32"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 mb-6">
              <Image
                src="/images/Shooting moi (24).jpeg"
                alt="Fabien Katola"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
                quality={100}
              />
            </div>

            {/* Secondary Image - Hidden on mobile */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src="/images/20160811_123057.jpg"
                  alt="Fabien Katola en vélo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  quality={100}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 