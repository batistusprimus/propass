'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#1B4332] opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-5 sticky top-32"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
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
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-7 space-y-8"
          >
            {/* Introduction - Outside card for emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-[#1B4332] leading-tight">
                Je suis Fabien Katola.
              </h2>
              <p className="text-xl text-[#2D6A4F] font-medium pl-4 border-l-4 border-[#2D6A4F]">
                Le créateur du système Pro Pass : une méthode de prospection passive destinée aux professionnels du service du sport et du loisir.
              </p>
            </motion.div>

            {/* Experience Card - Full width */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  J'ai passé 16 ans de ma vie à prospecter en tant que commercial.
                </p>
                <p className="text-lg text-gray-700">
                  D'abord pour vendre des abonnements Fitness puis des services informatiques B2B.
                </p>
                <p className="text-lg text-gray-700">
                  J'ai fait s'inscrire plus de 3000 adhérents et signé plus de 100 entreprises.
                </p>
              </div>
            </motion.div>

            {/* Challenges - Outside card with emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pl-4"
            >
              <p className="text-xl text-gray-700 italic mb-4">
                Alors je me souviens des appels à froid que j'enchaînais… qui se finissaient souvent par un "Écoutez, je vous rappellerai…" ou un "bip" au bout du fil…
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 space-y-4">
                <p className="text-lg text-gray-700">
                  Des relances interminables avec toujours les mêmes objections…
                </p>
                <p className="text-lg text-gray-700">
                  Des tournées en voiture sous la pluie, juste pour "tenter un truc" avec un patron jamais dispo.
                </p>
                <p className="text-xl font-semibold text-[#1B4332]">
                  Autant vous dire que la prospection, <span className="font-bold">j'en ai fait une overdose.</span>
                </p>
              </div>
            </motion.div>

            {/* Quote - Floating style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:-ml-12 md:mr-12"
            >
              <div className="bg-[#1B4332] bg-opacity-5 p-8 rounded-2xl relative">
                <div className="absolute top-0 left-0 w-12 h-12 -mt-4 -ml-4">
                  <svg className="w-full h-full text-[#2D6A4F] opacity-20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-xl text-[#1B4332] leading-relaxed">
                  Je préférais largement passer du temps à développer la <span className="font-semibold">relation commerciale</span> et à <span className="font-semibold">accompagner mes équipes</span> qu'à perdre mon temps à prospecter dans le vide.
                </p>
              </div>
            </motion.div>

            {/* Conclusion - Clean and minimal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl font-medium text-[#2D6A4F] pl-4 border-l-4 border-[#2D6A4F]"
            >
              <p>
                Alors quand l'Inbound Marketing est arrivé dans ma vie de commercial, je n'ai pu que saisir l'opportunité qui se présentait.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 