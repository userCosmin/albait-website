import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, CheckCircle, Wrench, Wifi, Package, ArrowRight, Phone } from 'lucide-react'

const features = [
  { icon: Receipt, title: 'Vanzare & Fiscalizare ANAF', desc: 'Echipamente omologate oficial, fiscalizare rapida si asistenta pentru inregistrarea la ANAF.' },
  { icon: Wrench, title: 'Instalare Rapida', desc: 'Tehnicianul vine la locatia ta. Instalare si configurare completa in 2-4 ore.' },
  { icon: Wifi, title: 'Conectare Online ANAF', desc: 'Transmitere automata a datelor fiscale catre serverele ANAF conform noii legislatii.' },
  { icon: Package, title: 'Consumabile & Piese', desc: 'Stoc permanent de role termice, piese de schimb si accesorii pentru orice model.' },
]

const models = [
  { name: 'Succes M7', desc: 'Casa de marcat fiscala cu jurnal electronic. Conectivitate USB, serial si Ethernet. Autonomie portabila.', badge: 'Popular', href: '/case-de-marcat/succes-m7' },
  { name: 'Succes M4', desc: 'Model electronic fiscal avansat, afisaj dublu operator+client, procesor 32 biti si securitate EAL 4.', badge: null, href: '/case-de-marcat/succes-m4' },
  { name: 'Compact S', desc: 'Cea mai mica casa de marcat din Romania. Portabila, GPRS inclus din fabrica, ideala pentru taximetristi.', badge: 'Portabil', href: '/case-de-marcat/compact-s' },
  { name: 'Expert SX-02', desc: 'Conectare online directa cu serverele ANAF fara module externe. Recomandata pentru puncte fixe si ambulant.', badge: null, href: '/case-de-marcat/expert-sx-02' },
]

const steps = [
  { n: '01', title: 'Contactati-ne', desc: 'Telefon, WhatsApp sau email. Va raspundem in mai putin de 1 ora.' },
  { n: '02', title: 'Alegem modelul potrivit', desc: 'Va recomandam echipamentul optim pentru tipul si volumul afacerii.' },
  { n: '03', title: 'Instalare & Fiscalizare', desc: 'Tehnicianul vine la voi. Casa de marcat functionala in aceeasi zi.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function CaseDemarcat() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#93C5FD' }}
            >
              <Receipt size={12} />
              Case de Marcat Fiscale
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-sora font-extrabold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-text-primary)' }}
            >
              Case de marcat fiscalizate rapid in{' '}
              <span className="gradient-text">Alba Iulia</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg mb-8"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Vanzare, instalare si fiscalizare ANAF in aceeasi zi. Service autorizat si consumabile pentru toate modelele. Cel mai rapid serviciu din judetul Alba.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                >
                  Solicita Oferta <ArrowRight size={18} />
                </motion.button>
              </Link>
              <a href="tel:+40758343653">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-text-primary)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <Phone size={18} /> 0758 343 653
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(37,99,235,0.15)' }}>
                  <f.icon size={20} style={{ color: '#2563EB' }} />
                </div>
                <h3 className="font-sora font-bold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>{f.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Modele disponibile</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Toate avizate ANAF, cu jurnal electronic si conectare online.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {models.map((m, i) => (
              <motion.div
                key={m.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 relative"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {m.badge && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold" style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)', color: 'white' }}>
                    {m.badge}
                  </div>
                )}
                <h3 className="font-sora font-bold text-xl mb-3" style={{ color: 'var(--color-text-primary)' }}>{m.name}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>{m.desc}</p>
                <Link to={m.href} className="flex items-center gap-1 text-sm font-medium" style={{ color: '#06B6D4' }}>
                  Vezi detalii <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Cum obtii casa ta de marcat</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-sora font-bold text-white mx-auto mb-4" style={{ background: 'linear-gradient(135deg,#2563EB,#4F46E5)' }}>
                  {s.n}
                </div>
                <h3 className="font-sora font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Ai nevoie de o casa de marcat?</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Contactati-ne astazi si aveti echipamentul functional maine.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#2563EB,#4F46E5)' }}>
                  Solicita Oferta Gratuita
                </motion.button>
              </Link>
              <a href="tel:+40758343653">
                <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold" style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-text-primary)' }}>
                  <Phone size={18} /> Suna Acum
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
