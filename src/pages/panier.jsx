import { useCart } from "../context.jsx"

export default function PagePanier() {
  const { panier, supprimerDuPanier } = useCart()

  const total = panier.reduce((sum, p) => sum + parseFloat(p.Prix_TTC), 0)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-medium text-gray-900 mb-8">Votre panier</h1>

      {panier.length === 0 ? (
        <p className="text-gray-400 text-sm">Votre panier est vide.</p>
      ) : (
        <div>
          {panier.map((produit, index) => (
            <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-900">{produit.Nom_produit}</p>
                <p className="text-xs text-gray-400">{produit.Marque}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-medium">{parseFloat(produit.Prix_TTC).toFixed(2)} €</p>
                <button
                  onClick={() => supprimerDuPanier(produit.Id_Produit)}
                  className="text-red-400 hover:text-red-600 text-xs"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-medium">Total : {total.toFixed(2)} €</p>
            <button className="px-6 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700">
              Passer la commande
            </button>
          </div>
        </div>
      )}
    </div>
  )
}