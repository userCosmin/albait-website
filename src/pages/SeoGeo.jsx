import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, MapPin, Brain, TrendingUp, Globe, Star, ArrowRight } from 'lucide-react'

const seoFeatures = [
  { icon: Search, title: 'SEO Local', desc: 'Optimizare pentru cautarile locale "afacere + oras". Apar unde cauta clientii tai.' },
  { icon: MapPin, title: 'Google Business', desc: 'Profil optimizat complet cu fotografii, recenzii si informatii actualizate.' },
  { icon: Brain, title: 'GEO — Motoare AI', desc: 'Optimizare pentru ChatGPT, Google Gemini si Perplexity. Viitorul cautarilor.' },
  { icon: Globe, title: 'Schema Markup', desc: 'Date structurate care ajuta Google si AI sa inteleaga afacerea ta.' },
  { icon: TrendingUp, title: 'Content AI', desc: 'Continut optimizat creat cu AI, revizuit de experti SEO.' },
  { icon: Star, title: 'Managementul Recenziilor', desc: 'Strategie pentru obtinerea si gestionarea recenziilor pozitive.' },
]

export default function SeoGeo() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67E8F9' }}>
              <Search size={12} /> SEO + GEO
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-sora font-extrabold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--color-text-primary)' }}>
              SEO + GEO — Vizibilitate in{' '}
              <span className="gradient-text">Google si motoare AI</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Nu e de ajuns sa ai un website — trebuie sa fii gasit. Combinam SEO clasic cu GEO (Generative Engine Optimization) pentru o prezenta digitala completa.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #2563EB)' }}>
                  Vreau sa fiu gasit <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GEO Explain */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.08))', border: '1px solid rgba(6,182,212,0.2)' }}>
            <Brain size={40} className="mx-auto mb-6" style={{ color: '#06B6D4' }} />
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Ce este GEO si de ce conteaza acum?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: 'var(--color-text-muted)' }}>
              GEO (Generative Engine Optimization) inseamna optimizarea prezentei tale online pentru a aparea in raspunsurile generate de inteligenta artificiala. Tot mai multi oameni intreaba ChatGPT, Google Gemini sau Perplexity "cel mai bun service auto din Alba Iulia" — vrei sa fii TU raspunsul.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude', 'Copilot'].map((ai) => (
                <span key={ai} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(255,255,255,0.07)', color: 'var(--color-text-primary)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {ai}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Ce includem in pachetul SEO + GEO</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(6,182,212,0.12)' }}>
                  <f.icon size={20} style={{ color: '#06B6D4' }} />
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
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Apar pe Google si in AI astazi</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Audit SEO gratuit pentru afacerea ta. Iti aratam exact ce lipseste.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#06B6D4,#2563EB)' }}>
                Solicita Audit Gratuit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
