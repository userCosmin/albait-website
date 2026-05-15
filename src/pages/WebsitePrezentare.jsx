import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Smartphone, Zap, Search, MessageCircle, BarChart3, ArrowRight } from 'lucide-react'

const features = [
  { icon: Smartphone, title: 'Design Responsive', desc: 'Arata perfect pe telefon, tableta si desktop.' },
  { icon: Zap, title: 'Viteza Maxima', desc: 'Scoruri Google PageSpeed de 90+. Clientii nu asteapta.' },
  { icon: MessageCircle, title: 'WhatsApp Integrat', desc: 'Buton WhatsApp pentru contactare directa si rapida.' },
  { icon: Search, title: 'SEO de Baza', desc: 'Optimizat pentru Google de la prima zi.' },
  { icon: BarChart3, title: 'Analitice', desc: 'Google Analytics integrat. Vedeti traficul si comportamentul.' },
  { icon: Globe, title: 'Hosting Inclus', desc: 'Hosting rapid, SSL si domeniu pentru primul an.' },
]

export default function WebsitePrezentare() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67E8F9' }}>
              <Globe size={12} /> Website-uri de Prezentare
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-sora font-extrabold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--color-text-primary)' }}>
              Website modern care{' '}
              <span className="gradient-text">aduce clienti noi</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Design profesional, performanta tehnica si optimizare SEO. Un website care lucreaza pentru tine 24/7 si transforma vizitatorii in clienti.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #2563EB)' }}>
                  Vreau Website Modern <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Ce include website-ul tau</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
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

      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Preturi de la 800 lei</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Livrare in 5-10 zile lucratoare. Oferta gratuita in 24 de ore.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#06B6D4,#2563EB)' }}>
                Solicita Oferta Gratuita
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
