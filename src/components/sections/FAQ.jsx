import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'De ce am nevoie de fiscalizare si o casa de marcat?',
    a: 'Conform legislatiei romane, orice comerciant care efectueaza tranzactii cu numerar sau card este obligat sa utilizeze o casa de marcat avizata ANAF. Nerespectarea acestei obligatii atrage amenzi substantiale si riscul suspendarii activitatii. Noi va ajutam sa fiti compliant rapid si fara bataie de cap.',
  },
  {
    q: 'Cat dureaza instalarea si ce include?',
    a: 'Instalarea dureaza de obicei intre 2-4 ore. Serviciul nostru include: livrarea echipamentului, configurarea tehnica, fiscalizarea la ANAF, instruirea personalului si testarea completa. In cele mai multe cazuri, casa de marcat este operational in aceeasi zi.',
  },
  {
    q: 'Ce este GEO (Generative Engine Optimization) si de ce conteaza?',
    a: 'GEO este noua frontiera a optimizarii online: asigurarea ca afacerea ta apare in raspunsurile generate de motoarele AI precum ChatGPT, Google Gemini si Perplexity. Tot mai multi clienti folosesc aceste instrumente pentru a gasi servicii locale. Noi va pozitionam atat in Google clasic, cat si in raspunsurile AI.',
  },
  {
    q: 'Cat costa un website de prezentare si in cat timp il faceti?',
    a: 'Preturile noastre pornesc de la 800 lei pentru un website de prezentare de baza. Termenul de livrare este de 5-10 zile lucratoare. Fiecare proiect include design responsive, optimizare SEO de baza, formular de contact si integrare WhatsApp. Va ofertam gratuit dupa o discutie despre nevoile tale.',
  },
  {
    q: 'Oferiti service si suport dupa livrarea proiectului?',
    a: 'Da, absolut. Toti clientii nostri beneficiaza de suport tehnic continuu. Pentru casele de marcat oferim service rapid (de obicei in aceeasi zi), iar pentru serviciile digitale avem pachete lunare de administrare si optimizare. Nu va lasam singuri dupa predarea proiectului.',
  },
  {
    q: 'Puteti gestiona si reclamele Google si Meta pentru afacerea mea?',
    a: 'Da, gestionam campanii Google Ads si Meta Ads (Facebook + Instagram) cu focus pe targeting local. Fiecare campanie include setup, creare anunturi, optimizare continua si rapoarte lunare clare. Lucram transparent: stiti exact pe ce se duc banii si ce rezultate obtineti.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        border: isOpen ? '1px solid rgba(37,99,235,0.3)' : '1px solid rgba(255,255,255,0.07)',
        background: isOpen ? 'rgba(37,99,235,0.05)' : 'rgba(255,255,255,0.02)',
      }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={onClick}
      >
        <span className="font-semibold font-sora pr-4" style={{ color: 'var(--color-text-primary)' }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
          style={{ color: isOpen ? '#2563EB' : 'var(--color-text-muted)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(79,70,229,0.1)', border: '1px solid rgba(79,70,229,0.25)', color: '#A5B4FC' }}
          >
            Intrebari Frecvente
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Ai intrebari? Avem raspunsuri.
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Cele mai frecvente intrebari de la clientii nostri.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <FAQItem
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
