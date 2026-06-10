import { useState, useEffect } from "react"
import ProductNav from '../components/layout/ProductNav.jsx'

const marques = ["Toutes", "Yonex", "Victor", "RSL", "Forza"]

export default function Offres() {

  const [produits, setProduits] = useState([])

  useEffect(() => {
    fetch("http://localhost:80/hellobad-api/produits.php?categorie=5")
      .then(res => res.json())
      .then(data => setProduits(data))
  }, [])

  const [filtreMarque, setFiltreMarque] = useState("Toutes")

  const produitsFiltres = produits.filter((produit) => {
    return filtreMarque === "Toutes" || produit.Marque === filtreMarque
  })

  return (
    <div>
      <ProductNav />
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="mb-8">
          <p className="text-xs uppercase text-gray-400 font-medium mb-2 tracking-wider">Marque</p>
          <div className="flex gap-2 flex-wrap">
            {marques.map((marque) => (
              <button
                key={marque}
                onClick={() => setFiltreMarque(marque)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  filtreMarque === marque
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
              >
                {marque}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          {produitsFiltres.length} produit{produitsFiltres.length > 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {produitsFiltres.map((produit) => (
            <div key={produit.Id_Produit} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-xl aspect-square flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors">
                {produit.Image_url ? (
                  <img src={produit.Image_url} alt={produit.Nom_produit} className="w-full h-full object-contain p-4" />
                ) : (
                  <svg width="48" height="48" fill="none" stroke="#d1d5db" strokeWidth="1.5" viewBox="0 0 24 24">
                    <ellipse cx="15" cy="9" rx="6" ry="6" />
                    <line x1="11" y1="13" x2="3" y2="21" strokeLinecap="round" strokeWidth="2.5" />
                  </svg>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-0.5">{produit.Marque}</p>
              <p className="text-sm font-medium text-gray-900 mb-1">{produit.Nom_produit}</p>
              <p className="text-sm text-gray-700 mb-3">{produit.Prix_TTC ? produit.Prix_TTC.toFixed(2) : "0.00"} €</p>
              <button className="w-full py-2 text-xs font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}