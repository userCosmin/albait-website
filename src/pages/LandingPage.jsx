import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Target, TrendingUp, Users, ArrowRight } from 'lucide-react'

const targets = [
  { icon: '🏥', title: 'Clinici & Cabinete', desc: 'Pagini dedicate programarilor online cu formulare de contact si prezentarea serviciilor medicale.' },
  { icon: '🍽️', title: 'Restaurante & Cafenele', desc: 'Meniuri vizuale, sistem de rezervari si integrare cu Google Maps.' },
  { icon: '🔧', title: 'Service Auto', desc: 'Generare de lead-uri pentru ITP, revizie si reparatii. Clienti noi in fiecare zi.' },
  { icon: '🏪', title: 'Magazine Locale', desc: 'Vitrine online cu produse, promotii si optiune de contact rapid.' },
]

const features = [
  { icon: Target, title: 'Conversii Maxime', desc: 'Design optimizat psihologic pentru a transforma vizitatorii in clienti platitori.' },
  { icon: Zap, title: 'Incarcare Ultra-Rapida', desc: 'Sub 2 secunde. Fiecare secunda in plus inseamna clienti pierduti.' },
  { icon: TrendingUp, title: 'Testare A/B', desc: 'Testam variante diferite pentru a optimiza continuu rata de conversie.' },
  { icon: Users, title: 'Integrare Ads', desc: 'Conectate perfect cu Google Ads si Meta Ads pentru ROI maxim.' },
]

export default function LandingPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #4F46E5, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.3)', color: '#A5B4FC' }}>
              <Zap size={12} /> Landing Page-uri
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-sora font-extrabold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--color-text-primary)' }}>
              Pagini create special pentru{' '}
              <span className="gradient-text">conversii si campanii</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              O landing page bine construita poate dubla sau tripla eficienta campaniilor tale de publicitate. Investesti mai putin, obtii mai mult.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                  style={{ background: 'linear-gradient(135deg, #4F46E5, #2563EB)' }}>
                  Vreau Landing Page <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Perfect pentru orice domeniu</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {targets.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-sora font-bold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>{t.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>De ce landing page-urile noastre convertesc</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(79,70,229,0.12)' }}>
                  <f.icon size={20} style={{ color: '#4F46E5' }} />
                </div>
                <h3 className="font-sora font-bold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Gata sa obtii mai multi clienti?</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Spune-ne despre campania ta si iti facem o oferta in 24 de ore.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#4F46E5,#2563EB)' }}>
                Solicita Oferta
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
