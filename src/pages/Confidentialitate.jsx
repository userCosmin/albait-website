import { motion } from 'framer-motion'
import PageMeta from '../components/PageMeta'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-sora font-bold text-xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
      {title}
    </h2>
    <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
      {children}
    </div>
  </div>
)

const CookieRow = ({ name, type, purpose, duration }) => (
  <div className="grid grid-cols-4 gap-3 px-4 py-3 text-xs" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
    <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{name}</span>
    <span style={{ color: 'var(--color-text-muted)' }}>{type}</span>
    <span style={{ color: 'var(--color-text-muted)' }}>{purpose}</span>
    <span style={{ color: 'var(--color-text-muted)' }}>{duration}</span>
  </div>
)

export default function Confidentialitate() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <PageMeta
        title="Politică de Confidențialitate și Cookies | Albait — Alba Iulia"
        description="Politica de confidențialitate și utilizare cookie-uri a website-ului albait.ro. Cum colectăm, utilizăm și protejăm datele dumneavoastră personale conform GDPR."
      />

      {/* Hero */}
      <section className="pt-28 pb-12" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#93C5FD' }}>
              Document legal
            </div>
            <h1 className="font-sora font-extrabold mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--color-text-primary)' }}>
              Politică de Confidențialitate și Cookies
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Ultima actualizare: <strong style={{ color: 'var(--color-text-primary)' }}>Mai 2025</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            <Section title="1. Operatorul de date">
              <p>
                Datele dumneavoastră personale sunt prelucrate de{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>Albait S.R.L.</strong>, cu sediul în Alba Iulia,
                Piața Iuliu Maniu, Nr. 20, județul Alba, România — denumit în continuare <strong style={{ color: 'var(--color-text-primary)' }}>"Albait"</strong> sau <strong style={{ color: 'var(--color-text-primary)' }}>"noi"</strong>.
              </p>
              <p>
                Contact privind protecția datelor:{' '}
                <a href="mailto:office@albait.ro" style={{ color: '#06B6D4' }}>office@albait.ro</a>{' '}
                | Tel: <a href="tel:+40758343653" style={{ color: '#06B6D4' }}>0758 343 653</a>
              </p>
            </Section>

            <Section title="2. Ce date colectăm">
              <p>Colectăm datele pe care ni le furnizați direct prin formularul de contact:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Nume și prenume</li>
                <li>Adresă de e-mail</li>
                <li>Număr de telefon (opțional)</li>
                <li>Mesajul transmis (detalii despre solicitarea dvs.)</li>
              </ul>
              <p className="mt-3">
                De asemenea, prin intermediul cookie-urilor și tehnologiilor similare, colectăm automat date tehnice
                despre vizita dvs. pe website (adresă IP anonimizată, browser, pagini accesate, durată vizită).
              </p>
            </Section>

            <Section title="3. Scopul și temeiul prelucrării">
              <p>Prelucram datele dvs. în următoarele scopuri și în baza următoarelor temeiuri legale:</p>
              <div className="mt-3 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="grid grid-cols-3 gap-3 px-4 py-3 text-xs font-semibold" style={{ background: 'rgba(37,99,235,0.08)', color: 'var(--color-text-primary)' }}>
                  <span>Scop</span>
                  <span>Temei legal (GDPR)</span>
                  <span>Durată păstrare</span>
                </div>
                {[
                  ['Răspuns la solicitările de ofertă / contact', 'Art. 6(1)(b) — executarea unui contract / măsuri precontractuale', '3 ani de la ultima interacțiune'],
                  ['Asistență tehnică și service', 'Art. 6(1)(b) — executarea contractului', 'Durata contractului + 3 ani'],
                  ['Obligații legale (facturare, contabilitate)', 'Art. 6(1)(c) — obligație legală', '10 ani (conform legii contabilității)'],
                  ['Îmbunătățirea website-ului (date anonime)', 'Art. 6(1)(f) — interes legitim', 'Maximum 26 luni (anonimizate)'],
                ].map(([scop, temei, durata], i) => (
                  <div key={i} className="grid grid-cols-3 gap-3 px-4 py-3 text-xs"
                    style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'var(--color-text-primary)' }}>{scop}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{temei}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{durata}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="4. Destinatarii datelor">
              <p>
                Datele dvs. nu sunt vândute sau cedate terților în scop comercial. Pot fi transmise, strict în limita necesară, către:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Web3Forms</strong> — serviciu de procesare formulare (date transmise prin HTTPS; nu stochează date pe termen lung)</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Autorități publice</strong> — dacă suntem obligați prin lege (ex: ANAF, instanțe)</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Contabil / firma de contabilitate</strong> — în limitele obligațiilor legale</li>
              </ul>
            </Section>

            <Section title="5. Drepturile dumneavoastră (GDPR)">
              <p>Conform Regulamentului (UE) 2016/679 (GDPR), aveți următoarele drepturi:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul de acces</strong> — să solicitați o copie a datelor prelucrate despre dvs.</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul la rectificare</strong> — să corectați datele inexacte sau incomplete</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul la ștergere</strong> — să solicitați ștergerea datelor în anumite condiții</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul la restricționarea prelucrării</strong> — în situații prevăzute de GDPR</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul la portabilitate</strong> — să primiți datele într-un format structurat, lizibil automat</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul de opoziție</strong> — față de prelucrarea bazată pe interes legitim</li>
                <li><strong style={{ color: 'var(--color-text-primary)' }}>Dreptul de a depune plângere</strong> — la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
              </ul>
              <p className="mt-3">
                Pentru exercitarea oricărui drept, contactați-ne la{' '}
                <a href="mailto:office@albait.ro" style={{ color: '#06B6D4' }}>office@albait.ro</a>.
                Vom răspunde în termen de maximum 30 de zile.
              </p>
              <p>
                Puteți depune o plângere la ANSPDCP prin intermediul site-ului{' '}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                  dataprotection.ro
                </a>.
              </p>
            </Section>

            <Section title="6. Securitatea datelor">
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor dvs.:
                transmisie criptată prin HTTPS (TLS), acces restricționat la datele cu caracter personal,
                stocare sigură a corespondenței și documentelor comerciale.
              </p>
              <p>
                Website-ul este găzduit pe infrastructura Cloudflare Pages (UE/SUA, clauze contractuale standard
                conform GDPR aplicabile).
              </p>
            </Section>

            {/* Cookie Policy */}
            <div className="mt-4 mb-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', color: '#67E8F9' }}>
                Politică Cookies
              </div>
              <h2 className="font-sora font-extrabold mb-2" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--color-text-primary)' }}>
                Utilizarea Cookie-urilor
              </h2>
            </div>

            <Section title="7. Ce sunt cookie-urile">
              <p>
                Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dvs. atunci când accesați un website.
                Acestea permit website-ului să memoreze preferințele dvs. și să ofere o experiență îmbunătățită.
              </p>
              <p>
                Conform <strong style={{ color: 'var(--color-text-primary)' }}>Legii nr. 506/2004</strong> privind prelucrarea
                datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice
                (transpunerea Directivei ePrivacy), avem obligația să vă informăm despre utilizarea cookie-urilor.
              </p>
            </Section>

            <Section title="8. Tipuri de cookie-uri utilizate">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="grid grid-cols-4 gap-3 px-4 py-3 text-xs font-semibold"
                  style={{ background: 'rgba(6,182,212,0.08)', color: 'var(--color-text-primary)' }}>
                  <span>Nume</span>
                  <span>Tip</span>
                  <span>Scop</span>
                  <span>Durată</span>
                </div>
                <CookieRow
                  name="__cf_bm"
                  type="Strict necesare"
                  purpose="Protecție bot Cloudflare"
                  duration="30 minute"
                />
                <CookieRow
                  name="cf_clearance"
                  type="Strict necesare"
                  purpose="Verificare securitate Cloudflare"
                  duration="1 an"
                />
                <CookieRow
                  name="web3forms_*"
                  type="Funcționale"
                  purpose="Previne trimiteri duble formular"
                  duration="Sesiune"
                />
              </div>
              <p className="mt-4">
                <strong style={{ color: 'var(--color-text-primary)' }}>Cookie-uri strict necesare</strong> — nu necesită consimțământul dvs. deoarece sunt esențiale pentru funcționarea corectă a website-ului.
              </p>
              <p>
                <strong style={{ color: 'var(--color-text-primary)' }}>Cookie-uri funcționale</strong> — îmbunătățesc funcționalitatea site-ului. Pot fi dezactivate, dar unele funcții s-ar putea deteriora.
              </p>
              <p>
                Website-ul albait.ro <strong style={{ color: 'var(--color-text-primary)' }}>nu utilizează</strong> cookie-uri de urmărire (tracking),
                cookie-uri de marketing sau Google Analytics.
              </p>
            </Section>

            <Section title="9. Gestionarea cookie-urilor">
              <p>
                Puteți controla și/sau șterge cookie-urile oricând din setările browser-ului dvs.
                Mai jos găsiți instrucțiuni pentru cele mai populare browsere:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/ro/kb/cookie-uri-informatii-site-uri-stocate-pe-calculator" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-cookie-urilor-în-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                Dezactivarea cookie-urilor strict necesare poate afecta funcționarea corectă a website-ului.
              </p>
            </Section>

            <Section title="10. Modificări ale politicii">
              <p>
                Ne rezervăm dreptul de a actualiza această politică ori de câte ori este necesar.
                Versiunea actualizată va fi publicată pe această pagină cu data revizuirii.
                Vă recomandăm să consultați periodic această pagină.
              </p>
            </Section>

            <div className="mt-12 p-6 rounded-2xl" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)' }}>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Pentru orice întrebări legate de prelucrarea datelor dvs. personale sau utilizarea cookie-urilor,
                ne puteți contacta la{' '}
                <a href="mailto:office@albait.ro" style={{ color: '#06B6D4', fontWeight: 600 }}>office@albait.ro</a>{' '}
                sau la numărul de telefon{' '}
                <a href="tel:+40758343653" style={{ color: '#06B6D4', fontWeight: 600 }}>0758 343 653</a>.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  )
}
