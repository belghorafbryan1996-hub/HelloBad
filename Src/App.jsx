import Navbar from './Components/layout/Navbar.jsx'
import Home from './Pages/home.jsx'
import Raquettes from './Pages/Raquettes.jsx'
import Shuttlecocks from './Pages/shuttlecookcs.jsx'
import Bagagerie from './Pages/bagagerie.jsx'
import Offres from './Pages/offres.jsx'
import Chaussures from './Pages/chaussures.jsx'
import PagePanier from './Pages/panier.jsx'
import Cardproduct from './Components/UI/Cardproduct.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe('pk_test_TYc219d874567890123456789012345678')

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
        <Route path="/panier" element={
          <Elements stripe={stripePromise}>
            <PagePanier />
          </Elements>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App