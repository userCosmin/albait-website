import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bot, MessageCircle, Mail, FileText, Clock, TrendingUp, ArrowRight } from 'lucide-react'

const features = [
  { icon: MessageCircle, title: 'WhatsApp Automation', desc: 'Raspunsuri automate, confirmari de programari si follow-up cu clientii. Fara interventia ta.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Secvente automate de email pentru nurturing, oferte si fidelizare clienti.' },
  { icon: FileText, title: 'Facturare Automata', desc: 'Generare si trimitere automata de facturi. Integrat cu sistemele de contabilitate.' },
  { icon: Clock, title: 'Programari Online', desc: 'Sistem de booking online cu confirmare automata si reminder-uri pentru clienti.' },
  { icon: Bot, title: 'Chatbot Inteligent', desc: 'Asistent AI pe website care raspunde la intrebari si captureaza lead-uri 24/7.' },
  { icon: TrendingUp, title: 'CRM & Rapoarte', desc: 'Gestionare clienti, pipeline de vanzari si rapoarte automate zilnice/saptamanale.' },
]

const benefits = [
  { value: '2-4h', label: 'Economisite zilnic' },
  { value: '40%', label: 'Reducere costuri operationale' },
  { value: '3x', label: 'Crestere rata de raspuns' },
]

export default function Automatizari() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #4F46E5, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.3)', color: '#A5B4FC' }}>
              <Bot size={12} /> Automatizari Business
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-sora font-extrabold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'var(--color-text-primary)' }}>
              Automatizari care iti{' '}
              <span className="gradient-text">economisesc timp si bani</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Lasa tehnologia sa faca munca repetitiva. Tu te concentrezi pe ceea ce conteaza cu adevarat — cresterea afacerii.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="flex gap-8 mb-8">
              {benefits.map((b) => (
                <div key={b.label}>
                  <div className="text-2xl font-bold font-sora gradient-text">{b.value}</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{b.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium"
                  style={{ background: 'linear-gradient(135deg, #4F46E5, #2563EB)' }}>
                  Vreau sa Automatizez <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Ce automatizam pentru tine</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
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

      <section className="py-20" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-sora font-bold text-3xl mb-4" style={{ color: 'var(--color-text-primary)' }}>Automatizeaza-ti afacerea astazi</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>Iti analizam gratuit procesele si iti recomandam ce se poate automatiza.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-4 rounded-full text-white font-semibold" style={{ background: 'linear-gradient(135deg,#4F46E5,#2563EB)' }}>
                Analiza Gratuita
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
