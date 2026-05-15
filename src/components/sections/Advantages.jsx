import { motion } from 'framer-motion'
import { Clock, Shield, Star, HeadphonesIcon, Award, TrendingUp } from 'lucide-react'

const advantages = [
  {
    icon: Clock,
    title: 'Instalare in Aceeasi Zi',
    desc: 'Comandati dimineata, aveti casa de marcat functionala inainte de pranz. Service rapid in tot judetul Alba.',
    color: '#2563EB',
  },
  {
    icon: Shield,
    title: 'Garantie si Service',
    desc: 'Toate echipamentele vin cu garantie extinsa si suport tehnic dedicat pe toata perioada contractului.',
    color: '#06B6D4',
  },
  {
    icon: Star,
    title: 'Expertiza Locala',
    desc: 'Peste 8 ani de experienta in Alba Iulia. Cunoastem nevoile afacerilor locale si reglementarile ANAF.',
    color: '#4F46E5',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suport 24/7',
    desc: 'Echipa noastra este disponibila prin telefon si WhatsApp oricand aveti nevoie de asistenta.',
    color: '#2563EB',
  },
  {
    icon: Award,
    title: 'Parteneri Autorizati',
    desc: 'Distribuitori autorizati pentru cele mai importante branduri de case de marcat omologate ANAF.',
    color: '#06B6D4',
  },
  {
    icon: TrendingUp,
    title: 'Pret Corect, Fara Surprize',
    desc: 'Va oferim pret fix inainte de orice lucrare. Fara costuri ascunse, fara surprize la factura.',
    color: '#4F46E5',
  },
]

export default function Advantages() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
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
            style={{ background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.25)', color: '#A5B4FC' }}
          >
            De ce Albait
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Avantajele care ne diferentiaza
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Nu suntem doar un furnizor — suntem partenerul care iti creste afacerea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div
                className="h-full rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${adv.color}40`
                  e.currentTarget.style.background = `${adv.color}08`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${adv.color}15`, border: `1px solid ${adv.color}30` }}
                >
                  <adv.icon size={22} style={{ color: adv.color }} />
                </div>
                <h3 className="font-sora font-bold text-lg mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  {adv.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
