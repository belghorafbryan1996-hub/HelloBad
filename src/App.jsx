import Navbar from './components/layout/Navbar.jsx'
import Home from './pages/home.jsx'
import ProductNav from './components/layout/ProductNav.jsx'
import Raquettes from './pages/Raquettes.jsx'
import Shuttlecocks from './pages/shuttlecookcs.jsx'
import Bagagerie from './pages/bagagerie.jsx'
import Offres from './pages/offres.jsx'
import Chaussures from './pages/chaussures.jsx'
import PagePanier from './pages/panier.jsx'
import Cardproduct from './components/ui/Cardproduct.jsx'
import Footer from './components/layout/Footer.jsx'
import Admin from './pages/admin.jsx'
import Success from './pages/success.jsx'
import Contact from './pages/contact.jsx'
import Mentionlegale from './pages/mentionlegale.jsx'
import Connexion from './pages/connexion.jsx'
import Inscription from './pages/inscription.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <div className="min-h-screen flex flex-col w-full">
          <Navbar />
          <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raquettes" element={<Raquettes />} />
            <Route path="/shuttlecocks" element={<Shuttlecocks />} />
            <Route path="/bagagerie" element={<Bagagerie />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/chaussures" element={<Chaussures />} />
            <Route path="/panier" element={<PagePanier />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionlegale" element={<Mentionlegale />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
          </Routes>
          </main>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
