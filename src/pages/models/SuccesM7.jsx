import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, Wifi, Battery, Printer, Database, ArrowRight, Phone, CheckCircle, ChevronLeft } from 'lucide-react'
import PageMeta from '../../components/PageMeta'

const specs = [
  { label: 'Dimensiuni', value: '223 × 196 × 80 mm' },
  { label: 'Greutate', value: '950 g' },
  { label: 'Afișaj operator', value: 'LCD grafic 132×32 px, iluminat' },
  { label: 'Tastatură', value: '38 taste' },
  { label: 'Viteză imprimare', value: '75 mm/sec' },
  { label: 'Lățime hârtie', value: '57 mm' },
  { label: 'Acumulator', value: '7.4V / 1800 mAh (până la 60h standby)' },
  { label: 'Alimentare rețea', value: '110–240 V c.a.' },
  { label: 'Memorie fiscală', value: '1.830 raportări' },
  { label: 'Nr. PLU', value: 'Până la 32.190' },
  { label: 'Departamente', value: '100' },
  { label: 'Casieri', value: '10' },
  { label: 'Cote TVA', value: '8' },
  { label: 'Interfețe', value: 'USB, Serial RS232, Ethernet, Bluetooth' },
]

const features = [
  { icon: Wifi, title: 'Conectivitate completă', desc: 'USB, Serial RS232, Ethernet și opțional Bluetooth pentru integrare cu PC sau rețea locală.' },
  { icon: Battery, title: 'Funcționare portabilă', desc: 'Acumulator intern Li-Ion cu autonomie de până la 60 ore standby sau 40.000 linii printate.' },
  { icon: Printer, title: 'Imprimantă termică rapidă', desc: 'Viteză de imprimare 75 mm/sec, hârtie de 57 mm. Recepții clare și rapide.' },
  { icon: Database, title: 'Jurnal electronic 8 GB', desc: 'Export XML semnat electronic pentru raportări periodice ANAF. Conformitate totală cu legislația.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

export default function SuccesM7() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <PageMeta
        title="Casa de Marcat Incotex Succes M7 — Alba Iulia | Albait"
        description="Casa de marcat Incotex Succes M7 cu jurnal electronic. Portabilă, USB/Ethernet/Bluetooth, autonomie 60h. Fiscalizare ANAF în aceeași zi. Sună: 0758 343 653."
      />
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-8 blur-3xl" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-8">
            <Link to="/case-de-marcat" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <ChevronLeft size={16} /> Case de Marcat
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#93C5FD' }}
              >
                <Receipt size={12} /> Incotex — Jurnal Electronic
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
                className="font-sora font-extrabold mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--color-text-primary)' }}
              >
                Casa de marcat{' '}
                <span className="gradient-text">Succes M7</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg mb-8 leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Casa de marcat electronică fiscală cu jurnal electronic, conformă noilor reglementări ANAF. Model staționar și portabil, cu conectivitate extinsă și autonomie ridicată. Ideală pentru comerț și prestări servicii.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                  >
                    Solicită Ofertă <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <a href="tel:+40758343653">
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-text-primary)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <Phone size={18} /> 0758 343 653
                  </motion.button>
                </a>
              </motion.div>
            </div>
            {/* Imagine produs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="relative rounded-3xl p-6 flex items-center justify-center"
                style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)' }}>
                <div className="absolute inset-0 rounded-3xl opacity-20 blur-2xl" style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }} />
                <img
                  src="https://pub-69e61f4c1e58482bbc21a1f35a399331.r2.dev/succes-m7.webp"
                  alt="Casa de marcat Succes M7"
                  className="relative z-10"
                  style={{ maxHeight: '320px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.3))' }}
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold z-10"
                  style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', color: 'white' }}>
                  Popular
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>De ce Succes M7?</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Echipament performant pentru orice tip de afacere.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: 'rgba(6,182,212,0.4)' }}
                className="rounded-2xl p-6 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(6,182,212,0.15)' }}>
                  <f.icon size={20} style={{ color: '#06B6D4' }} />
                </div>
                <h3 className="font-sora font-bold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Specificații tehnice</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {specs.map((s, i) => (
              <div key={s.label} className="flex items-center justify-between px-6 py-4"
                style={{
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                  borderBottom: i < specs.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                }}>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>{s.label}</span>
                <span className="text-sm font-semibold text-right" style={{ color: 'var(--color-text-primary)' }}>{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inclus în pachet */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Ce include pachetul Albait</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Casa de marcat Succes M7 nouă, sigilată',
              'Fiscalizare ANAF și înregistrare oficială',
              'Instalare și configurare la sediul tău',
              'Rol hârtie termică — stoc inițial inclus',
              'Instruire utilizare pentru angajați',
              'Contract service și asistență tehnică',
            ].map((item, i) => (
              <motion.div key={item} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle size={18} style={{ color: '#06B6D4', flexShrink: 0 }} />
                <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Vrei Succes M7 pentru afacerea ta?</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Contactează-ne acum și îți instalăm casa de marcat în aceeași zi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#2563EB,#4F46E5)' }}>
                  Solicită Ofertă Gratuită
                </motion.button>
              </Link>
              <a href="tel:+40758343653">
                <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-text-primary)' }}>
                  <Phone size={18} /> Sună Acum
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
