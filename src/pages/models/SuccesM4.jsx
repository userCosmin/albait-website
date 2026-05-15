import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, Monitor, Shield, Cpu, ArrowRight, Phone, CheckCircle, ChevronLeft } from 'lucide-react'

const specs = [
  { label: 'Afișaj operator', value: 'LCD grafic 128×64 px, iluminat' },
  { label: 'Afișaj client', value: 'LCD grafic 128×32 px, iluminat' },
  { label: 'Microcontroler', value: 'STM32F103VCT, 32 biți' },
  { label: 'Tastatură', value: '30 taste (12 numerice, 18 funcții)' },
  { label: 'Imprimantă', value: 'Termică TERMICA LTP01-245-12' },
  { label: 'Viteză imprimare', value: '75 mm/sec' },
  { label: 'Memorie fiscală', value: '1.830 raportări zilnice' },
  { label: 'Jurnal electronic', value: '8 GB Micro SD Card' },
  { label: 'Modul criptografic', value: 'TPM SLB 97601.2 (Infineon), Common Criteria EAL 4' },
  { label: 'Interfețe', value: 'USB, Serial RS232' },
  { label: 'Alimentare', value: 'Rețea 110–240 V c.a. + acumulator intern Li-Ion' },
]

const features = [
  { icon: Monitor, title: 'Afișaj dublu', desc: 'Display LCD grafic atât pentru operator cât și pentru client — transparență totală la casă.' },
  { icon: Cpu, title: 'Procesor 32 biți', desc: 'Microcontroler STM32F103VCT pentru viteză și fiabilitate ridicată în operare zilnică.' },
  { icon: Shield, title: 'Securitate EAL 4', desc: 'Modul criptografic TPM (Infineon Technologies) conform standardului Common Criteria EAL 4.' },
  { icon: Receipt, title: 'Jurnal 8 GB', desc: 'Stocare pe Micro SD Card. Export XML semnat pentru raportare periodică la ANAF.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

export default function SuccesM4() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #4F46E5, transparent)' }} />
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
                style={{ background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.3)', color: '#A5B4FC' }}
              >
                <Receipt size={12} /> Incotex — Jurnal Electronic
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
                className="font-sora font-extrabold mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--color-text-primary)' }}
              >
                Casa de marcat{' '}
                <span className="gradient-text">Succes M4</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg mb-8 leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Model electronic fiscal avansat cu afișaj dublu (operator + client), procesor 32 biți și modul de securitate criptografică EAL 4. Jurnal electronic pe Micro SD, export XML semnat pentru ANAF.
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
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-72 rounded-3xl flex items-center justify-center"
                style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)' }}>
                <div className="absolute inset-0 rounded-3xl opacity-30 blur-xl" style={{ background: 'linear-gradient(135deg,#4F46E5,#2563EB)' }} />
                <div className="relative z-10 text-center">
                  <Receipt size={80} style={{ color: '#818CF8', margin: '0 auto 16px' }} />
                  <p className="font-sora font-bold text-2xl" style={{ color: 'var(--color-text-primary)' }}>Succes M4</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>Incotex</p>
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
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Avantajele Succes M4</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(79,70,229,0.15)' }}>
                  <f.icon size={20} style={{ color: '#818CF8' }} />
                </div>
                <h3 className="font-sora font-bold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
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
                <span className="text-sm font-semibold text-right max-w-xs" style={{ color: 'var(--color-text-primary)' }}>{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inclus */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Ce include pachetul Albait</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Casa de marcat Succes M4 nouă, sigilată',
              'Fiscalizare ANAF și înregistrare oficială',
              'Instalare și configurare la sediul tău',
              'Rol hârtie termică — stoc inițial inclus',
              'Instruire utilizare pentru angajați',
              'Contract service și asistență tehnică',
            ].map((item, i) => (
              <motion.div key={item} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle size={18} style={{ color: '#818CF8', flexShrink: 0 }} />
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
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Vrei Succes M4 pentru afacerea ta?</h2>
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
