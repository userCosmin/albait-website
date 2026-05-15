import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Smartphone, Wifi, Battery, Radio, ArrowRight, Phone, CheckCircle, ChevronLeft, Bluetooth } from 'lucide-react'
import PageMeta from '../../components/PageMeta'

const specs = [
  { label: 'Tip', value: 'Portabilă — cea mai compactă din România' },
  { label: 'Jurnal electronic', value: '8 GB — până la 1,2 milioane bonuri' },
  { label: 'Acumulator', value: 'Li-Ion 2200 mAh (încărcare USB, priză, power bank, auto)' },
  { label: 'Conectivitate', value: 'USB-B, GPRS, Bluetooth, Wi-Fi (opțional)' },
  { label: 'Modem GPRS', value: 'Inclus din fabrică, SIM activ cu date inclus' },
  { label: 'Raportare ANAF', value: 'XML semnat via Bluetooth sau direct GPRS' },
  { label: 'Aplicație Android', value: 'Daisy XML — export direct pe email' },
  { label: 'Driver PC', value: 'VCP V1.5.0 via USB-B' },
  { label: 'Securitate', value: 'SAM cryptocard conform FIPS 140-2' },
  { label: 'Omologare', value: 'Avizată ANAF conform noii legislații' },
]

const features = [
  { icon: Smartphone, title: 'Cea mai compactă', desc: 'Cel mai mic format de casă de marcat vândut în România. Perfectă pentru spații mici sau activitate mobilă.' },
  { icon: Radio, title: 'GPRS inclus din fabrică', desc: 'SIM activ cu date inclus — trimite automat date fiscale fără configurări suplimentare.' },
  { icon: Bluetooth, title: 'Export XML via Bluetooth', desc: 'Extrage fișierele XML criptate direct pe telefonul Android prin aplicația Daisy XML.' },
  { icon: Battery, title: 'Acumulator versatil', desc: 'Încarcă din priză, USB de la PC, power bank sau bricheta mașinii. Niciodată fără baterie.' },
]

const useCases = [
  'Taximetriști și șoferi Uber / Bolt',
  'Piețe și târguri sezoniere',
  'Livrări la domiciliu',
  'Evenimente și festivaluri',
  'Service auto și mecanici auto',
  'Coafor și saloane mobile',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

export default function CompactS() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <PageMeta
        title="Casa de Marcat Daisy Compact S — Portabilă, GPRS inclus | Albait Alba Iulia"
        description="Daisy Compact S — cea mai mică casă de marcat din România. GPRS inclus, acumulator Li-Ion, ideală pentru taximetriști. Fiscalizare ANAF. Sună: 0758 343 653."
      />
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
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
                style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67E8F9' }}
              >
                <Smartphone size={12} /> Daisy — Model Portabil
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
                className="font-sora font-extrabold mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--color-text-primary)' }}
              >
                Casa de marcat{' '}
                <span className="gradient-text">Compact S</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg mb-8 leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Cea mai mică casă de marcat din România, produsă de Daisy. Portabilă, cu GPRS inclus din fabrică, acumulator Li-Ion versatil și jurnal electronic de 8 GB. Ideală pentru activitate mobilă și taximetriști.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
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
                style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.15)' }}>
                <div className="absolute inset-0 rounded-3xl opacity-20 blur-2xl" style={{ background: 'linear-gradient(135deg,#06B6D4,#2563EB)' }} />
                <img
                  src="https://pub-69e61f4c1e58482bbc21a1f35a399331.r2.dev/compact-s.webp"
                  alt="Casa de marcat Compact S"
                  className="relative z-10"
                  style={{ maxHeight: '320px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(6,182,212,0.3))' }}
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold z-10"
                  style={{ background: 'linear-gradient(135deg,#06B6D4,#2563EB)', color: 'white' }}>
                  Portabil
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
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>De ce Compact S?</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Cea mai bună alegere pentru afaceri mobile.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6"
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

      {/* Use Cases */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Cine folosește Compact S?</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Perfect pentru orice activitate unde te deplasezi la client.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((item, i) => (
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

      {/* Specs */}
      <section className="py-20">
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
                <span className="text-sm font-semibold text-right max-w-xs" style={{ color: 'var(--color-text-primary)' }}>{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Vrei Compact S pentru activitatea ta?</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Contactează-ne acum și îți instalăm casa de marcat în aceeași zi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}>
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
