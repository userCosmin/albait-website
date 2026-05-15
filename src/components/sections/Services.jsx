import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, Globe, Zap, Search, MapPin, Bot, Megaphone, Server, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Receipt,
    title: 'Case de Marcat & Fiscalizare',
    desc: 'Vanzare, instalare si service rapid in aceeasi zi. Avizat ANAF.',
    href: '/case-de-marcat',
    color: '#2563EB',
  },
  {
    icon: Globe,
    title: 'Website-uri de Prezentare',
    desc: 'Design modern care aduce clienti noi si reflecta profesionalismul tau.',
    href: '/website-prezentare',
    color: '#06B6D4',
  },
  {
    icon: Zap,
    title: 'Landing Page-uri',
    desc: 'Pagini optimizate pentru conversii maxime si campanii eficiente.',
    href: '/landing-page',
    color: '#4F46E5',
  },
  {
    icon: Search,
    title: 'SEO + GEO',
    desc: 'Vizibilitate in Google si motoare AI precum ChatGPT si Gemini.',
    href: '/seo-geo',
    color: '#2563EB',
  },
  {
    icon: MapPin,
    title: 'Google Business',
    desc: 'Optimizare profil local complet. Apar pe harta cand clientii te cauta.',
    href: '/seo-geo',
    color: '#06B6D4',
  },
  {
    icon: Bot,
    title: 'Automatizari Business',
    desc: 'WhatsApp, email, facturare automata. Economisesti timp si bani.',
    href: '/automatizari',
    color: '#4F46E5',
  },
  {
    icon: Megaphone,
    title: 'Google & Meta Ads',
    desc: 'Campanii locale cu ROI masurabil. Platesti doar pentru rezultate.',
    href: '/contact',
    color: '#2563EB',
  },
  {
    icon: Server,
    title: 'Hosting & Administrare',
    desc: 'Hosting rapid, SSL inclus, email business si backup zilnic.',
    href: '/contact',
    color: '#06B6D4',
  },
]

export default function Services() {
  return (
    <section id="servicii" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', color: '#67E8F9' }}
          >
            Servicii Complete
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Tot ce are nevoie afacerea ta
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            De la fiscalizare si echipamente la prezenta digitala completa — suntem singurul partener de care ai nevoie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link to={service.href}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${service.color}22` }}
                  transition={{ duration: 0.3 }}
                  className="card-glass rounded-2xl p-6 h-full cursor-pointer group"
                  style={{ minHeight: 200, border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                  >
                    <service.icon size={20} style={{ color: service.color }} />
                  </div>
                  <h3 className="font-sora font-bold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    {service.desc}
                  </p>
                  <div
                    className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: service.color }}
                  >
                    Afla mai mult <ArrowRight size={12} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
