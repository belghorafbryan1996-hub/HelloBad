
import Headvideo from '../components/ui/Headvideo.jsx'
import Cardproduct from '../components/ui/Cardproduct.jsx'
import { Link } from 'react-router-dom'



function Head({slogan,button}) {
  return (
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  color: 'white', textAlign: 'center', padding: '35px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'black' }}>Équipe-toi comme un pro, bats-toi comme un guerrier.</h1>

            <Link to="/offres">
                <button style={{ background: 'lightgrey', color: 'black', padding: '12px 32px', borderRadius: '999px', fontWeight: '600', cursor: 'pointer', border: 'none', marginTop: '20px' }}>
                  Voir les offres
                </button>
            </Link> 
        </div>
  )

}


function Home() {
  return (
    <div>
      <Head slogan="Équipe-toi comme un pro, bats-toi comme un guerrier." button="Offres"/>
      <Headvideo videoSrc="/mp4home.mp4"/>
      <Cardproduct />
    </div>
  )
}

export default Home
