import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { label: 'Servicii', href: '/#servicii' },
    { label: 'Case de Marcat', href: '/case-de-marcat' },
    { label: 'Digital', href: '/seo-geo' },
    { label: 'Contact', href: '/contact' },
  ]

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
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }}
            >
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold font-sora gradient-text">Albait</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-full text-sm font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
              >
                Solicita Oferta
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'rgba(15,23,42,0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="py-2 text-sm font-medium border-b"
                  style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-full text-sm font-medium text-white"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #4F46E5)' }}
                >
                  Solicita Oferta
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
