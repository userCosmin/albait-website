import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

// Web3Forms — gratuit, fara backend, trimite direct pe office@albait.ro
// Obtine cheia de pe https://web3forms.com/ (introdu office@albait.ro)
const WEB3FORMS_KEY = 'INLOCUIESTE_CU_CHEIA_TA_WEB3FORMS'

const services = [
  'Casa de Marcat & Fiscalizare',
  'Service & Reparatii Casa de Marcat',
  'Consumabile (role termice, accesorii)',
  'Website de Prezentare',
  'Landing Page',
  'Google Business',
  'Înființare Firmă (SRL / PFA)',
  'Altele',
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [form, setForm] = useState({ nume: '', telefon: '', email: '', serviciu: '', mesaj: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Cerere noua de pe albait.ro — ${form.serviciu || 'Contact general'}`,
          from_name: form.nume,
          email: form.email,
          telefon: form.telefon,
          serviciu: form.serviciu,
          mesaj: form.mesaj,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#93C5FD' }}>
              <MessageCircle size={12} /> Contactați-ne
            </div>
            <h1 className="font-sora font-extrabold mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--color-text-primary)' }}>
              Haideți să{' '}
              <span className="gradient-text">vorbim despre afacerea ta</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Răspundem în mai puțin de 1 oră. Ofertă gratuită în 24 de ore.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-sora font-bold text-2xl mb-8" style={{ color: 'var(--color-text-primary)' }}>
                Informații de contact
              </h2>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: 'Telefon', value: '0758 343 653', href: 'tel:+40758343653' },
                  { icon: Mail, label: 'Email', value: 'office@albait.ro', href: 'mailto:office@albait.ro' },
                  { icon: MapPin, label: 'Adresă', value: 'Piața Iuliu Maniu, Nr.20, Alba Iulia', href: 'https://maps.google.com/?q=Piata+Iuliu+Maniu+20+Alba+Iulia' },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.icon === MapPin ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,99,235,0.15)' }}>
                      <item.icon size={18} style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <div className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>{item.label}</div>
                      <div className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/40758343653"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white mb-6"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle size={20} fill="white" />
                Scrie-ne direct pe WhatsApp
              </motion.a>

              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>Program</div>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: 'var(--color-text-muted)' }}>Luni – Vineri</span>
                  <span style={{ color: 'var(--color-text-primary)' }}>09:00 – 17:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--color-text-muted)' }}>Sâmbătă</span>
                  <span style={{ color: 'var(--color-text-primary)' }}>09:00 – 13:00</span>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl"
                  style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)' }}
                >
                  <CheckCircle size={56} style={{ color: '#06B6D4' }} className="mb-6" />
                  <h3 className="font-sora font-bold text-2xl mb-3" style={{ color: 'var(--color-text-primary)' }}>
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>
                    Vă vom contacta în mai puțin de 1 oră în zilele lucrătoare.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ nume: '', telefon: '', email: '', serviciu: '', mesaj: '' }) }}
                    className="px-6 py-3 rounded-full text-sm font-medium"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'var(--color-text-muted)' }}
                  >
                    Trimite alt mesaj
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { name: 'nume', label: 'Nume *', type: 'text', placeholder: 'Numele dvs.' },
                      { name: 'telefon', label: 'Telefon *', type: 'tel', placeholder: '07xx xxx xxx' },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>{field.label}</label>
                        <input
                          type={field.type} name={field.name} placeholder={field.placeholder}
                          value={form[field.name]} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-primary)' }}
                          onFocus={e => e.target.style.borderColor = 'rgba(37,99,235,0.5)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Email *</label>
                    <input
                      type="email" name="email" placeholder="email@dvs.ro"
                      value={form.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-primary)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(37,99,235,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Serviciu dorit</label>
                    <select
                      name="serviciu" value={form.serviciu} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.1)', color: form.serviciu ? 'var(--color-text-primary)' : 'var(--color-text-muted)' }}
                    >
                      <option value="">Selectați serviciul...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Mesaj</label>
                    <textarea
                      name="mesaj" placeholder="Descrieți pe scurt ce aveți nevoie..."
                      value={form.mesaj} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-primary)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(37,99,235,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                      <AlertCircle size={18} style={{ color: '#EF4444', flexShrink: 0 }} />
                      <p className="text-sm" style={{ color: '#FCA5A5' }}>
                        A apărut o eroare. Sunați direct la <a href="tel:+40758343653" className="font-semibold underline">0758 343 653</a>.
                      </p>
                    </div>
                  )}

                  <motion.button
                    type="submit" disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                      opacity: status === 'loading' ? 0.7 : 1,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.3"/>
                          <path d="M12 3a9 9 0 019 9"/>
                        </svg>
                        Se trimite...
                      </>
                    ) : (
                      <><Send size={18} /> Trimite Mesajul</>
                    )}
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
                    Datele dvs. sunt în siguranță. Nu trimitem spam.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
