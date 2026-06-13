import { useState, useEffect } from "react"
import Headvideo from "../components/ui/Headvideo.jsx"
import ProductNav from "../components/layout/ProductNav.jsx"
import Cardproduct from "../components/ui/Cardproduct.jsx"
import { useCart } from "../context.jsx"





// Les marques et gammes disponibles pour les boutons de filtre

const marques = ["Toutes", "Yonex", "Victor", "RSL", "Forza"]


export default function shuttlecocks() {

const { ajouterAuPanier } = useCart()
const [tousLesProduits, setTousLesProduits] = useState([])

useEffect(() => {
  fetch("http://localhost:80/hellobad-api/produits.php?categorie=2")
    .then(res => res.json())
    .then(data => setTousLesProduits(data))
}, [])
  // ============================================================
  // 2. LES FILTRES ACTIFS
  // useState stocke quelle marque/gamme est sélectionnée
  // "Toutes" = pas de filtre = on affiche tout
  // ============================================================
  const [filtreMarque, setFiltreMarque] = useState("Toutes")

  // ============================================================
  // 3. LE FILTRAGE
  // On filtre tousLesProduits selon les filtres actifs
  // Si filtreMarque = "Toutes" → on garde tout
  // Si filtreMarque = "Yonex" → on garde seulement les Yonex
  // Idem pour filtreGamme
  // ============================================================
const produitsFiltres = tousLesProduits.filter((produit) => {
  const marqueOk = filtreMarque === "Toutes" || produit.Marque === filtreMarque
  return marqueOk // ← supprime la condition gamme
})
  return (
    <div>
      <ProductNav />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* <h1 className="text-2xl font-medium text-gray-900 mb-8">Raquettes</h1>  si besoin je peux définir un titre  mais étant donné qu'on sait déja où on est puisque que c'est notre selection dans la nav je le laisse ici comme ca au cas ou */}

        {/* ============================================================
            4. LES BOUTONS DE FILTRE
            Quand tu cliques sur un bouton → setFiltreMarque("Yonex")
            → React re-render → produitsFiltres se recalcule
            → seuls les produits Yonex s'affichent
        ============================================================ */}

      
        {/* Filtre par Marque */}
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

        {/* Nombre de résultats */}
        <p className="text-sm text-gray-400 mb-6">
          {produitsFiltres.length} produit{produitsFiltres.length > 1 ? "s" : ""}
        </p>

        {/* ============================================================
            5. LA GRILLE DE PRODUITS
            On affiche produitsFiltres (pas tousLesProduits)
            Donc si filtreMarque = "Yonex" → seulement les Yonex
        ============================================================ */}
        {produitsFiltres.length === 0 ? (
          <p className="text-gray-400 text-sm py-20 text-center">
            Aucun produit ne correspond à ces filtres.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {produitsFiltres.map((produit) => (
              <div key={produit.Id_Produit} className="group cursor-pointer">
                {/* Image */}
                <div className="bg-gray-50 rounded-xl aspect-square flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors">
                  {produit.Image_url ? (
                    <img
                      src={produit.Image_url}
                      alt={produit.Nom_produit}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <svg width="48" height="48" fill="none" stroke="#d1d5db" strokeWidth="1.5" viewBox="0 0 24 24">
                      <ellipse cx="15" cy="9" rx="6" ry="6" />
                      <line x1="11" y1="13" x2="3" y2="21" strokeLinecap="round" strokeWidth="2.5" />
                    </svg>
                  )}
                </div>

                {/* Infos produit */}
                <p className="text-xs text-gray-400 mb-0.5">{produit.Marque}</p>
                <p className="text-sm font-medium text-gray-900 mb-1">{produit.Nom_produit}</p>
                <p className="text-sm text-gray-700 mb-3">{produit.Prix_TTC ? produit.Prix_TTC.toFixed(2) : "0.00"} €</p>

                {/* Bouton Ajouter au panier — on le connectera au Context après */}
              <button 
                onClick={() => ajouterAuPanier(produit)}
                className="w-full py-2 text-xs font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Ajouter au panier
              </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
