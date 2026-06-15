import { LinkAuthenticationElement } from "@stripe/react-stripe-js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Example() {
  
  const [tousLesProduits, setTousLesProduits] = useState([])

  useEffect(() => {
    fetch("https://hellobad.alwaysdata.net/produits.php")
      .then(res => res.json())
      .then(data => setTousLesProduits(data))
  }, [])

  // ICI J4AFFICHE DES PRODUIT ALEATOIREMENT SUR LA HOME PAGE AVEC LA PROPRIETE .SORT ET .SLICE, LE BUT ETANT DE SIMULER L'AFFICHAGE DES TOP PRODUITS ACTUEL

const topProduits = [...tousLesProduits].sort(() => Math.random() - 0.5)
const huitTopProduits = topProduits.slice(0, 8)


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-medium text-black mb-8">Nos Produits du moment</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {huitTopProduits.map((produit) => (
            <div key={produit.Id_Produit} className="group">
              <img
                alt={produit.Nom_produit}
                src={produit.Image_url}
                className="w-full h-48 rounded-lg bg-gray-200 object-contain group-hover:opacity-75 shadow-lg rounded-lg p-4 bg-white"
              />
              <h3 className="mt-4 text-sm text-gray-700">{produit.Nom_produit}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{produit.Prix_TTC} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}