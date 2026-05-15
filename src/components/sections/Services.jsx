import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Receipt, Globe, Zap, MapPin, ArrowRight, Wrench, Package, Wifi, Building2 } from 'lucide-react'

const services = [
  {
    icon: Receipt,
    title: 'Vânzare Case de Marcat',
    desc: 'Toate modelele avizate ANAF, in stoc permanent. Livrare si fiscalizare in aceeasi zi.',
    href: '/case-de-marcat',
    color: '#2563EB',
  },
  {
    icon: Wifi,
    title: 'Fiscalizare ANAF',
    desc: 'Ne ocupam de toata procedura: inregistrare, conectare online ANAF, documente incluse.',
    href: '/case-de-marcat',
    color: '#06B6D4',
  },
  {
    icon: Wrench,
    title: 'Service & Reparatii',
    desc: 'Interventie rapida in Alba Iulia si judet. Tehnicieni autorizati, piese originale.',
    href: '/case-de-marcat',
    color: '#4F46E5',
  },
  {
    icon: Package,
    title: 'Consumabile & Accesorii',
    desc: 'Role termice, cerneluri si accesorii pentru orice model de casa de marcat.',
    href: '/contact',
    color: '#2563EB',
  },
  {
    icon: Globe,
    title: 'Website-uri de Prezentare',
    desc: 'Design modern care aduce clienti noi si reflecta profesionalismul afacerii tale.',
    href: '/website-prezentare',
    color: '#06B6D4',
  },
  {
    icon: Zap,
    title: 'Landing Page-uri',
    desc: 'Pagini optimizate pentru conversii maxime, ideale pentru campanii si promotii.',
    href: '/landing-page',
    color: '#4F46E5',
  },
  {
    icon: MapPin,
    title: 'Google Business',
    desc: 'Optimizare profil local complet. Apari pe harta cand clientii te cauta in zona.',
    href: '/contact',
    color: '#2563EB',
  },
  {
    icon: Building2,
    title: 'Înființare Firme',
    desc: 'Înregistrăm SRL-ul sau PFA-ul tău la ONRC rapid și fără bătăi de cap. Acte, sediu, cod CAEN incluse.',
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
            Tot ce ai nevoie pentru casa de marcat
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Vânzare, fiscalizare, service si consumabile — plus prezenta digitala pentru afacerea ta locala.
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
