import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Ionescu',
    text: 'Am achizitionat o casa de marcat de la Albait si totul a mers perfect. Instalarea a fost in aceeasi zi, iar echipa a explicat totul pas cu pas. Recomand cu incredere!',
    initials: 'MI',
    color: '#2563EB',
  },
  {
    name: 'Alexandru Popa',
    text: 'Fiscalizarea si instalarea au fost facute extrem de rapid. In aceeasi zi in care am sunat, casa de marcat era deja functionala. Profesionalism total, nu m-am asteptat sa fie atat de simplu.',
    initials: 'AP',
    color: '#4F46E5',
  },
  {
    name: 'Elena Muresan',
    text: 'Service prompt si serios. Casa de marcat s-a defectat intr-o zi de vineri si au venit sa o repare in cateva ore. Nu m-au lasat cu activitatea blocata. Multumesc echipei Albait!',
    initials: 'EM',
    color: '#06B6D4',
  },
  {
    name: 'Gheorghe Stancu',
    text: 'Mi-au recomandat modelul potrivit pentru tipul meu de activitate si au facut toata procedura cu ANAF. Nu a trebuit sa ma ocup de nimic. Acum am si un website facut de ei — arata excelent!',
    initials: 'GS',
    color: '#2563EB',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', color: '#67E8F9' }}
          >
            Testimoniale
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl" style={{ color: 'var(--color-text-primary)' }}>
            Ce spun clientii nostri
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: `0 0 60px ${testimonials[current].color}12`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" stroke="none" />
                ))}
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--color-text-primary)' }}>
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white font-sora"
                  style={{ background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}80)` }}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-semibold font-sora" style={{ color: 'var(--color-text-primary)' }}>
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    Client Albait
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? '#2563EB' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
