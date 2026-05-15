import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Receipt } from 'lucide-react'

const LOGO_URL = 'https://pub-69e61f4c1e58482bbc21a1f35a399331.r2.dev/sigla-albait.webp'

const caseDeMarcatModels = [
  { label: 'Succes M7', href: '/case-de-marcat/succes-m7', desc: 'Portabil, USB/Ethernet/Bluetooth' },
  { label: 'Succes M4', href: '/case-de-marcat/succes-m4', desc: 'Afișaj dublu, securitate EAL 4' },
  { label: 'Compact S', href: '/case-de-marcat/compact-s', desc: 'Cea mai mică, GPRS inclus' },
  { label: 'Expert SX-02', href: '/case-de-marcat/expert-sx-02', desc: 'Conectare directă ANAF' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileModelsOpen, setMobileModelsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileModelsOpen(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(15,23,42,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Albait"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">

            {/* Servicii */}
            <Link to="/#servicii" className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: 'var(--color-text-muted)' }}>
              Servicii
            </Link>

            {/* Case de Marcat dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Case de Marcat
                <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 pt-3"
                    style={{ transform: 'translateX(-50%)', width: '260px' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="rounded-2xl overflow-hidden py-2"
                      style={{
                        background: 'rgba(15,23,42,0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.1)',
                      }}>

                      {/* Header link — toate modelele */}
                      <Link to="/case-de-marcat"
                        className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl mb-1 transition-all duration-150"
                        style={{ color: 'var(--color-text-muted)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.12)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(37,99,235,0.2)' }}>
                          <Receipt size={13} style={{ color: '#60A5FA' }} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold" style={{ color: 'var(--color-text-primary)' }}>Toate modelele</p>
                          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Prezentare completă</p>
                        </div>
                      </Link>

                      {/* Separator */}
                      <div className="mx-4 my-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }} />

                      {/* Model links */}
                      {caseDeMarcatModels.map((model) => (
                        <Link
                          key={model.href}
                          to={model.href}
                          className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-xl transition-all duration-150"
                          style={{ color: 'var(--color-text-muted)' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(6,182,212,0.08)'
                            e.currentTarget.querySelector('.model-label').style.color = '#F8FAFC'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.querySelector('.model-label').style.color = 'var(--color-text-muted)'
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#06B6D4' }} />
                          <div>
                            <p className="model-label text-sm font-medium transition-colors duration-150"
                              style={{ color: 'var(--color-text-muted)' }}>{model.label}</p>
                            <p className="text-xs" style={{ color: 'rgba(148,163,184,0.6)' }}>{model.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Digital */}
            <Link to="/seo-geo" className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: 'var(--color-text-muted)' }}>
              Digital
            </Link>

            {/* Contact */}
            <Link to="/contact" className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: 'var(--color-text-muted)' }}>
              Contact
            </Link>

          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
              >
                Solicită Ofertă
              </motion.button>
            </Link>
            <button
              className="md:hidden p-2"
              style={{ color: 'var(--color-text-primary)' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'rgba(15,23,42,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">

              <Link to="/#servicii" className="py-3 px-2 text-sm font-medium border-b"
                style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                Servicii
              </Link>

              {/* Case de Marcat accordion mobile */}
              <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  className="w-full flex items-center justify-between py-3 px-2 text-sm font-medium"
                  style={{ color: 'var(--color-text-muted)' }}
                  onClick={() => setMobileModelsOpen(!mobileModelsOpen)}
                >
                  Case de Marcat
                  <motion.span animate={{ rotate: mobileModelsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileModelsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pb-2"
                    >
                      <Link to="/case-de-marcat"
                        className="flex items-center gap-2 py-2 px-4 text-xs font-semibold rounded-lg mb-1"
                        style={{ color: '#60A5FA', background: 'rgba(37,99,235,0.08)' }}>
                        → Toate modelele
                      </Link>
                      {caseDeMarcatModels.map((model) => (
                        <Link key={model.href} to={model.href}
                          className="flex items-center gap-2 py-2 px-4 text-sm rounded-lg"
                          style={{ color: 'var(--color-text-muted)' }}>
                          <span style={{ color: '#06B6D4', fontSize: '8px' }}>●</span>
                          {model.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/seo-geo" className="py-3 px-2 text-sm font-medium border-b"
                style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                Digital
              </Link>
              <Link to="/contact" className="py-3 px-2 text-sm font-medium border-b"
                style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                Contact
              </Link>

              <div className="pt-2">
                <Link to="/contact">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-full text-sm font-medium text-white"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                  >
                    Solicită Ofertă
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
