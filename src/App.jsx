import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CaseDemarcat from './pages/CaseDemarcat'
import WebsitePrezentare from './pages/WebsitePrezentare'
import LandingPage from './pages/LandingPage'
import SeoGeo from './pages/SeoGeo'
import Automatizari from './pages/Automatizari'
import Contact from './pages/Contact'
import TermeniConditii from './pages/TermeniConditii'
import Confidentialitate from './pages/Confidentialitate'
import SuccesM7 from './pages/models/SuccesM7'
import SuccesM4 from './pages/models/SuccesM4'
import CompactS from './pages/models/CompactS'
import ExpertSX02 from './pages/models/ExpertSX02'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-de-marcat" element={<CaseDemarcat />} />
          <Route path="/case-de-marcat/succes-m7" element={<SuccesM7 />} />
          <Route path="/case-de-marcat/succes-m4" element={<SuccesM4 />} />
          <Route path="/case-de-marcat/compact-s" element={<CompactS />} />
          <Route path="/case-de-marcat/expert-sx-02" element={<ExpertSX02 />} />
          <Route path="/website-prezentare" element={<WebsitePrezentare />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/seo-geo" element={<SeoGeo />} />
          <Route path="/automatizari" element={<Automatizari />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termeni-conditii" element={<TermeniConditii />} />
          <Route path="/confidentialitate" element={<Confidentialitate />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
