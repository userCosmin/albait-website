import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import CaseDemarcat from './pages/CaseDemarcat'
import WebsitePrezentare from './pages/WebsitePrezentare'
import LandingPage from './pages/LandingPage'
import SeoGeo from './pages/SeoGeo'
import Automatizari from './pages/Automatizari'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-de-marcat" element={<CaseDemarcat />} />
          <Route path="/website-prezentare" element={<WebsitePrezentare />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/seo-geo" element={<SeoGeo />} />
          <Route path="/automatizari" element={<Automatizari />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
