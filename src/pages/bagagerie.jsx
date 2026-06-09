
import Headvideo from '../components/ui/Headvideo.jsx'
import ProductNav from '../components/layout/ProductNav.jsx'
import Cardproduct from '../components/ui/Cardproduct.jsx'
import Footer from '../components/layout/Footer.jsx'


function Head({slogan,button}) {
  return (
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  color: 'white', textAlign: 'center', padding: '35px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black' }}>Équipe-toi comme un pro, bats-toi comme un guerrier.</h1>

        <button style={{ background: 'lightgrey', color: 'black', padding: '12px 32px', borderRadius: '999px', fontWeight: '600', cursor: 'pointer', border: 'none', marginTop: '20px' }}>
          Offres
        </button>
        </div>
  )

}


function Home() {
  return (
    <div>
      <ProductNav />
      <Cardproduct />
      <Footer />
    </div>
  )
}

export default Home
