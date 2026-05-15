import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const LOGO_URL = 'https://pub-69e61f4c1e58482bbc21a1f35a399331.r2.dev/sigla-albait.webp'

export default function Footer() {
  const services = [
    { label: 'Case de Marcat', href: '/case-de-marcat' },
    { label: 'Fiscalizare ANAF', href: '/case-de-marcat' },
    { label: 'Service & Reparatii', href: '/case-de-marcat' },
    { label: 'Website Prezentare', href: '/website-prezentare' },
    { label: 'Landing Page', href: '/landing-page' },
    { label: 'Înființare Firme', href: '/contact' },
  ]

  const company = [
    { label: 'Acasa', href: '/' },
    { label: 'Servicii', href: '/#servicii' },
    { label: 'Contact', href: '/contact' },
    { label: 'Termeni si Conditii', href: '/termeni-conditii' },
    { label: 'Politica Cookies', href: '/confidentialitate' },
  ]

  return (
    <footer style={{ backgroundColor: '#080E1A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={LOGO_URL}
                alt="Albait"
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Partenerul tau de incredere pentru case de marcat fiscalizate si servicii digitale in Alba Iulia.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(37,99,235,0.2)'
                    e.currentTarget.style.color = '#06B6D4'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.color = 'var(--color-text-muted)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-text-primary)' }}>
              Servicii
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-text-primary)' }}>
              Companie
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    to={c.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-text-primary)' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#06B6D4' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Piata Iuliu Maniu, Nr.20<br />Alba Iulia, Romania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" style={{ color: '#06B6D4' }} />
                <a href="tel:+40758343653" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                  0758 343 653
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" style={{ color: '#06B6D4' }} />
                <a href="mailto:office@albait.ro" className="text-sm hover:text-white transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                  office@albait.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {/* ANPC SAL/SOL — obligatoriu conform legislatiei romane */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-4 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <span>Soluționarea litigiilor:</span>
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white underline underline-offset-2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              ANPC — SAL (Soluționare Alternativă)
            </a>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white underline underline-offset-2"
              style={{ color: 'var(--color-text-muted)' }}
            >
              SOL — Platforma UE Online
            </a>
          </div>
          <p className="text-center text-sm" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {new Date().getFullYear()} Albait S.R.L. Toate drepturile rezervate. &bull; Alba Iulia, România
          </p>
        </div>
      </div>
    </footer>
  )
}
