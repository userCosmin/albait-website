import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, TrendingUp, Shield, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Ambient blurs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }}
      />
      <div
        className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #4F46E5, transparent)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.3)',
                color: '#93C5FD',
              }}
            >
              <Zap size={12} />
              Servicii Digitale Premium &bull; Alba Iulia
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-sora font-extrabold leading-tight mb-6"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              Digitalizăm afacerea ta{' '}
              <span className="gradient-text">
                de la casa de marcat
              </span>{' '}
              până la prezenta online.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg mb-8 leading-relaxed max-w-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Case de marcat fiscalizate, website-uri moderne, SEO si automatizari pentru afaceri locale care vor sa creasca.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-medium shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                >
                  Solicita Oferta Gratuita
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <a href="#servicii">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium"
                  style={{
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'var(--color-text-primary)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  Vezi Serviciile
                  <ChevronDown size={18} />
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-8 mt-10"
            >
              {[
                { value: '500+', label: 'Case instalate' },
                { value: '8 ani', label: 'Experienta' },
                { value: '24h', label: 'Service rapid' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-sora gradient-text">{stat.value}</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div
              className="relative rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 60px rgba(37,99,235,0.15)',
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <div className="flex-1 ml-2 px-3 py-1 rounded text-xs" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)' }}>
                  albait.ro
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Vanzari azi', value: '2.840 lei', icon: TrendingUp, color: '#06B6D4' },
                  { label: 'Clienti noi', value: '+12', icon: Shield, color: '#2563EB' },
                  { label: 'SEO Rank', value: '#1', icon: Zap, color: '#4F46E5' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl p-3"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <m.icon size={14} style={{ color: m.color }} className="mb-2" />
                    <div className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>{m.label}</div>
                    <div className="font-bold text-sm font-sora" style={{ color: 'var(--color-text-primary)' }}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart mockup */}
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-xs mb-3 font-medium" style={{ color: 'var(--color-text-muted)' }}>Vanzari lunare</div>
                <div className="flex items-end gap-2 h-20">
                  {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 78, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.6 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: '4px 4px 0 0',
                        background: i === 11
                          ? 'linear-gradient(to top, #2563EB, #06B6D4)'
                          : 'rgba(255,255,255,0.08)',
                        transformOrigin: 'bottom',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
