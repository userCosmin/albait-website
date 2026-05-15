import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Palette, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discutie',
    desc: 'Analizam nevoile afacerii tale. O convorbire de 15 minute ne ajuta sa intelegem exact ce ti se potriveste.',
    color: '#2563EB',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategie',
    desc: 'Propunem solutia potrivita bugetului si obiectivelor tale. Fara costuri ascunse.',
    color: '#4F46E5',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design',
    desc: 'Cream vizualul si structura proiectului. Aprobati inainte de implementare.',
    color: '#06B6D4',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lansare',
    desc: 'Implementam, testam si lansam. Va asiguram ca totul functioneaza perfect.',
    color: '#2563EB',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Optimizare',
    desc: 'Monitorizam rezultatele si imbunatatim continuu. Rapoarte lunare transparente.',
    color: '#4F46E5',
  },
]

export default function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', color: '#93C5FD' }}
          >
            Cum lucram
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Procesul nostru in 5 pasi
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Simplu, transparent si orientat spre rezultate.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-8 bottom-8 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #2563EB, #4F46E5, #06B6D4)' }}
          />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-6 items-start"
              >
                {/* Circle */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-sora font-bold text-lg text-white z-10 relative"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                      boxShadow: `0 0 20px ${step.color}40`,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 rounded-2xl p-6"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon size={18} style={{ color: step.color }} />
                    <h3 className="font-sora font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
