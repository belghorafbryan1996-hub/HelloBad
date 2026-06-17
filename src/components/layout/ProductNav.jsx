
import { useState, useEffect } from "react"
  


export default function ProductNav() {

const [tousLesProduits, setTousLesProduits] = useState([])

  useEffect(() => {
    fetch("https://hellobad.alwaysdata.net/produits.php")
      .then(res => res.json())
      .then(data => setTousLesProduits(data))
  }, [])

const topProduits = [...tousLesProduits].sort(() => Math.random() - 0.5)
const huitTopProduits = topProduits.slice(0, 8)

  return (
      
    <div className="w-full bg-white ">
      <div
        className="flex items-center justify-center gap-1 px-4 py-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {huitTopProduits.map((product) => (
          <a
            key={product.Id_Produit}
            href="#"
            className="relative flex flex-col items-center gap-2 px-3 py-3 rounded-2xl hover:bg-gray-50 transition-colors group flex-shrink-0 w-24"
          >
            {/* Badge optionnel */}
            {product.badge && (
              <span className="absolute top-1 left-3 bg-gray-900 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-full">
                {product.badge}
              </span>
            )}

            {/* Image produit */}
            <div className="w-16 h-16 flex items-center justify-center">
              {product.Image_url ? (
                <img
                  src={product.Image_url}
                  alt={product.Nom_produit}
                  className="w-full h-full object-contain"
                />
              ) : (
                // Placeholder gris quand pas d'image
                <div className="w-14 h-14 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors" />
              )}
            </div>

            {/* Nom du produit */}
            <span className="text-[11px] font-medium text-center text-gray-800 leading-tight group-hover:text-black transition-colors">
              {product.Nom_produit}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}