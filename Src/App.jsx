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
      </Routes>
    </BrowserRouter>
  )
}

export default App