import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie, ChevronDown, ChevronUp, X } from 'lucide-react'
import { useCookieConsent } from '../context/CookieConsentContext'

const Toggle = ({ checked, onChange, disabled }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => !disabled && onChange(!checked)}
    className="relative flex-shrink-0 w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none"
    style={{
      background: checked ? '#2563EB' : 'rgba(255,255,255,0.15)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }}
  >
    <span
      className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-200"
      style={{ transform: checked ? 'translateX(16px)' : 'translateX(0)' }}
    />
  </button>
)

const CategoryRow = ({ label, description, checked, onChange, required }) => (
  <div className="flex items-start justify-between gap-4 py-3"
    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-0.5">
        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{label}</span>
        {required && (
          <span className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(37,99,235,0.15)', color: '#93C5FD' }}>
            Mereu activ
          </span>
        )}
      </div>
      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{description}</p>
    </div>
    <Toggle checked={checked} onChange={onChange} disabled={required} />
  </div>
)

export default function CookieBanner() {
  const { consent, loaded, acceptAll, acceptNecessary } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [functional, setFunctional] = useState(true)

  // Don't render until localStorage is read, and hide if user already decided
  const visible = loaded && (consent === undefined || consent === null)

  const handleCustomSave = () => {
    if (functional) {
      acceptAll()
    } else {
      acceptNecessary()
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop (subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }}
          />

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-4 left-4 right-4 z-50 mx-auto"
            style={{ maxWidth: '560px', left: '50%', transform: 'translateX(-50%) translateY(0)' }}
          >
            <div
              className="rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background: '#0F1929',
                border: '1px solid rgba(37,99,235,0.3)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(37,99,235,0.15)',
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,99,235,0.15)' }}>
                  <Cookie size={18} style={{ color: '#60A5FA' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sora font-bold text-base" style={{ color: 'var(--color-text-primary)' }}>
                    Respectăm confidențialitatea ta
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 pb-4">
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  Folosim cookie-uri strict necesare pentru funcționarea site-ului și cookie-uri funcționale
                  pentru a îmbunătăți experiența ta. Nu folosim cookie-uri de urmărire sau publicitate.{' '}
                  <Link to="/confidentialitate" className="underline underline-offset-2 hover:text-white transition-colors"
                    style={{ color: '#60A5FA' }}>
                    Politica de cookies
                  </Link>
                </p>

                {/* Expandable details */}
                <button
                  type="button"
                  onClick={() => setShowDetails(v => !v)}
                  className="flex items-center gap-1.5 text-xs mb-3 transition-colors hover:text-white"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  {showDetails ? 'Ascunde detalii' : 'Personalizează preferințele'}
                </button>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl px-4 mb-4"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <CategoryRow
                          label="Strict necesare"
                          description="Esențiale pentru funcționarea site-ului (protecție Cloudflare). Nu pot fi dezactivate."
                          checked={true}
                          onChange={() => {}}
                          required
                        />
                        <CategoryRow
                          label="Funcționale"
                          description="Previn trimiterea dublă a formularelor (Web3Forms). Îmbunătățesc experiența de navigare."
                          checked={functional}
                          onChange={setFunctional}
                        />
                        <div className="py-3">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span className="text-sm font-semibold" style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}>
                                Marketing / Tracking
                              </span>
                              <p className="text-xs" style={{ color: 'var(--color-text-muted)', opacity: 0.4 }}>
                                Nu folosim cookie-uri de urmărire sau publicitate.
                              </p>
                            </div>
                            <Toggle checked={false} onChange={() => {}} disabled />
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleCustomSave}
                        className="w-full py-2.5 rounded-xl text-sm font-medium mb-3 transition-colors"
                        style={{
                          border: '1px solid rgba(255,255,255,0.15)',
                          color: 'var(--color-text-primary)',
                          background: 'rgba(255,255,255,0.05)',
                        }}
                      >
                        Salvează preferințele
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main action buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={acceptNecessary}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors"
                    style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'var(--color-text-muted)',
                      background: 'rgba(255,255,255,0.04)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--color-text-primary)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--color-text-muted)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                  >
                    Doar necesare
                  </button>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                  >
                    Acceptă toate
                  </button>
                </div>

                <p className="text-center text-xs mt-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Poți modifica preferințele oricând din{' '}
                  <Link to="/confidentialitate" className="underline underline-offset-2 hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Politica de cookies
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
