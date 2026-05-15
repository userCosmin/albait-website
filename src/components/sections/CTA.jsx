import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.3) 0%, rgba(79,70,229,0.2) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.35)', color: '#93C5FD' }}
          >
            Incepe azi
          </div>

          <h2
            className="font-sora font-extrabold mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-text-primary)' }}
          >
            Gata sa iti{' '}
            <span className="gradient-text">digitalizezi afacerea</span>?
          </h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Contacteaza-ne astazi pentru o consultatie gratuita. In 24 de ore vei primi o oferta personalizata pentru afacerea ta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                  boxShadow: '0 20px 40px rgba(37,99,235,0.4)',
                }}
              >
                Solicita Oferta Gratuita
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <motion.a
              href="tel:+40758343653"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-lg"
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--color-text-primary)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              <Phone size={20} />
              Suna Acum: 0758 343 653
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
