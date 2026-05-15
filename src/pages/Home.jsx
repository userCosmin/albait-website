import PageMeta from '../components/PageMeta'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Advantages from '../components/sections/Advantages'
import Process from '../components/sections/Process'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <main>
      <PageMeta
        title="Albait — Case de Marcat Fiscalizate Alba Iulia | Instalare în Aceeași Zi"
        description="Vânzare, instalare și fiscalizare ANAF case de marcat în Alba Iulia. Service autorizat, consumabile, website-uri și înființare firme. Sună: 0758 343 653."
      />
      <Hero />
      <Services />
      <Advantages />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
