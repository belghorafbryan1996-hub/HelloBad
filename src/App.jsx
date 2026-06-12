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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

// const stripePromise = loadStripe('pk_test_TYc219d874567890123456789012345678')

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raquettes" element={<Raquettes />} />
        <Route path="/shuttlecocks" element={<Shuttlecocks />} />
        <Route path="/bagagerie" element={<Bagagerie />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/chaussures" element={<Chaussures />} />
        <Route path="/panier" element={<PagePanier />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
