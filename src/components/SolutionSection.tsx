'use client';

import { motion } from 'framer-motion';

export default function SolutionSection() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-white to-accent-light overflow-hidden" id="solution">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

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
            <h2 className="heading-2 mb-6">
              Mettre le digital au service de votre entreprise.
            </h2>

            <p className="text-body">
              En mettant en place le système adéquat, vous pouvez attirer les bons clients <span className="font-semibold text-primary">sans avoir à courir après eux</span>.
            </p>
          </motion.div>

          {/* Benefits List */}
          <div className="space-y-8">
            <ul className="grid md:grid-cols-2 gap-6">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="group flex items-start space-x-4 bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">✓</span>
                <p className="text-body">
                  Vous gagnez en visibilité locale
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group flex items-start space-x-4 bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">✓</span>
                <p className="text-body">
                  Vous obtenez des demandes de nouveaux clients 24h/24
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="group flex items-start space-x-4 bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">✓</span>
                <p className="text-body">
                  Vous automatisez les relances
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="group flex items-start space-x-4 bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">✓</span>
                <p className="text-body">
                  Et vous restez présent dans l'esprit de vos prospects…
                </p>
              </motion.li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-accent text-center p-6 rounded-xl shadow-soft transform hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-body font-medium text-primary">
                Même quand vous êtes en séance, en déplacement, ou en congé.
              </p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="card hover:scale-[1.02] transition-all duration-300 space-y-6"
          >
            <p className="text-body">
              C'est aussi ce qui vous permet <span className="font-semibold text-primary">d'augmenter et lisser vos revenus</span>, d'<span className="font-semibold text-primary">éviter les périodes creuses</span>, de <span className="font-semibold text-primary">remplir vos plannings plus facilement</span>… 
            </p>

            <div className="space-y-4 pt-6 border-t border-accent">
              <p className="text-body">
                Fini les actions commerciales au feeling, les semaines où rien ne rentre et les promos de dernière minute.
              </p>

              <p className="text-body">
                Fini les ventes poussives qui abiment la relation client.
              </p>

              <p className="heading-3 text-center mt-8">
                Et ça change tout.
              </p>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-primary p-8 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02]"
          >
            <p className="text-xl md:text-2xl font-medium text-white text-center">
              Cependant, il vous faut un système digital sur-mesure qui s'adapte aux contraintes d'une entreprise locale… et à la vôtre tout particulièrement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 