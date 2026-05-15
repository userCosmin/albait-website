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

export default function TermeniConditii() {
  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <PageMeta
        title="Termeni și Condiții | Albait — Case de Marcat Alba Iulia"
        description="Termenii și condițiile de utilizare ale website-ului albait.ro și ale serviciilor oferite de Albait, Alba Iulia."
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
              Termeni și Condiții
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

            <Section title="1. Informații despre operator">
              <p>
                Prezentul website <strong style={{ color: 'var(--color-text-primary)' }}>albait.ro</strong> este operat de{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>Albait S.R.L.</strong>, cu sediul social în Alba Iulia,
                Piața Iuliu Maniu, Nr. 20, județul Alba, România,{' '}
                înregistrată la Registrul Comerțului sub nr. <strong style={{ color: 'var(--color-text-primary)' }}>J2014000735017</strong>,
                CUI: <strong style={{ color: 'var(--color-text-primary)' }}>RO33901616</strong>.
              </p>
              <p>Contact: <a href="mailto:office@albait.ro" style={{ color: '#06B6D4' }}>office@albait.ro</a> | Tel: <a href="tel:+40758343653" style={{ color: '#06B6D4' }}>0758 343 653</a></p>
            </Section>

            <Section title="2. Acceptarea termenilor">
              <p>
                Prin accesarea și utilizarea website-ului <strong style={{ color: 'var(--color-text-primary)' }}>albait.ro</strong>,
                confirmați că ați citit, înțeles și acceptat în totalitate prezenții Termeni și Condiții.
                Dacă nu sunteți de acord cu oricare dintre prevederile de mai jos, vă rugăm să nu utilizați acest website.
              </p>
              <p>
                Albait S.R.L. își rezervă dreptul de a modifica acești termeni în orice moment,
                modificările intrând în vigoare la data publicării pe website.
              </p>
            </Section>

            <Section title="3. Serviciile oferite">
              <p>Prin intermediul website-ului albait.ro, puteți solicita informații și oferte pentru:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Vânzare, instalare și fiscalizare case de marcat avizate ANAF</li>
                <li>Service și reparații echipamente fiscale</li>
                <li>Vânzare consumabile (role termice, accesorii)</li>
                <li>Creare website-uri de prezentare și landing page-uri</li>
                <li>Optimizare profil Google Business</li>
                <li>Înființare firme (SRL, PFA) la ONRC</li>
              </ul>
              <p className="mt-3">
                Contractele de prestări servicii se încheie separat, prin semnarea unui document contractual specific
                fiecărui serviciu. Informațiile prezente pe website au caracter informativ și nu constituie o ofertă
                contractuală.
              </p>
            </Section>

            <Section title="4. Prețuri și plăți">
              <p>
                Prețurile afișate sau comunicate sunt exprimate în lei (RON) și includ TVA, dacă nu se specifică altfel.
                Albait S.R.L. își rezervă dreptul de a modifica prețurile fără notificare prealabilă.
              </p>
              <p>
                Prețul final convenit este cel menționat în oferta sau contractul semnat de ambele părți.
                Metodele de plată acceptate sunt: numerar, transfer bancar, card bancar.
              </p>
            </Section>

            <Section title="5. Garanție și service">
              <p>
                Echipamentele fiscale comercializate beneficiază de garanție legală conform legislației române în vigoare
                (minimum 24 de luni de la data achiziției pentru consumatori persoane fizice).
              </p>
              <p>
                Garanția nu acoperă defecțiunile cauzate de: utilizare necorespunzătoare, intervenții neautorizate,
                deteriorări mecanice, supratensiuni electrice sau forță majoră.
              </p>
              <p>
                Serviciile de creare website și servicii digitale sunt însoțite de o perioadă de garanție de 30 de zile
                de la livrare, perioadă în care corectăm orice erori tehnice fără costuri suplimentare.
              </p>
            </Section>

            <Section title="6. Dreptul de retragere (consumatori)">
              <p>
                Conform <strong style={{ color: 'var(--color-text-primary)' }}>OUG nr. 34/2014</strong> privind drepturile
                consumatorilor, persoanele fizice care au încheiat contracte la distanță sau în afara spațiilor comerciale
                beneficiază de un drept de retragere de <strong style={{ color: 'var(--color-text-primary)' }}>14 zile calendaristice</strong> de la
                data primirii bunului sau încheierii contractului de servicii, fără a fi necesară invocarea unui motiv.
              </p>
              <p>
                Dreptul de retragere nu se aplică pentru: bunuri realizate după specificațiile consumatorului,
                servicii complet executate cu acordul consumatorului sau servicii digitale livrate integral.
              </p>
              <p>
                Pentru a exercita dreptul de retragere, contactați-ne la{' '}
                <a href="mailto:office@albait.ro" style={{ color: '#06B6D4' }}>office@albait.ro</a>{' '}
                sau telefon <a href="tel:+40758343653" style={{ color: '#06B6D4' }}>0758 343 653</a>.
              </p>
            </Section>

            <Section title="7. Proprietate intelectuală">
              <p>
                Tot conținutul website-ului albait.ro — texte, imagini, logo-uri, grafice, cod sursă —
                este proprietatea Albait S.R.L. sau este utilizat cu permisiunea titularilor de drepturi.
              </p>
              <p>
                Este interzisă reproducerea, distribuirea sau utilizarea conținutului fără acordul prealabil
                scris al Albait S.R.L., cu excepția utilizării în scopuri personale, necomerciale.
              </p>
            </Section>

            <Section title="8. Limitarea răspunderii">
              <p>
                Albait S.R.L. nu își asumă răspunderea pentru eventualele întreruperi ale website-ului cauzate de
                forță majoră, probleme tehnice ale furnizorilor de servicii sau acțiuni ale terților.
              </p>
              <p>
                Informațiile prezente pe website sunt furnizate cu bună-credință și pot fi modificate fără notificare prealabilă.
                Albait S.R.L. nu garantează că informațiile sunt complete, corecte sau actualizate în permanență.
              </p>
            </Section>

            <Section title="9. Soluționarea litigiilor">
              <p>
                Orice litigiu apărut în legătură cu utilizarea website-ului sau cu serviciile Albait S.R.L.
                va fi soluționat pe cale amiabilă. În cazul în care nu se ajunge la un acord, litigiul va fi
                supus jurisdicției instanțelor competente din România.
              </p>
              <p>
                <strong style={{ color: 'var(--color-text-primary)' }}>Soluționare Alternativă a Litigiilor (SAL):</strong>{' '}
                Conform legislației UE, aveți posibilitatea de a apela la procedura SAL prin intermediul ANPC —{' '}
                <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                  anpc.ro/ce-este-sal
                </a>.
              </p>
              <p>
                <strong style={{ color: 'var(--color-text-primary)' }}>Soluționare Online a Litigiilor (SOL):</strong>{' '}
                Puteți utiliza și platforma europeană de soluționare online a litigiilor —{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#06B6D4' }}>
                  ec.europa.eu/consumers/odr
                </a>.
              </p>
            </Section>

            <Section title="10. Legea aplicabilă">
              <p>
                Prezenții Termeni și Condiții sunt guvernați de legislația română în vigoare.
                Orice prevedere invalidă sau neaplicabilă nu afectează validitatea celorlalte prevederi.
              </p>
            </Section>

            <div className="mt-12 p-6 rounded-2xl" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)' }}>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                Pentru orice întrebări legate de acești termeni, ne puteți contacta la{' '}
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
