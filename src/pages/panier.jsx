import { useCart } from "../context.jsx"

export default function PagePanier() {
  const { panier, supprimerDuPanier } = useCart()

  const total = panier.reduce((sum, p) => sum + parseFloat(p.Prix_TTC), 0)

// ici j'appel la fonction passer une commande au moment ou la client ajoute un produit dans son panier.
// ici j'envoie une requete à mon API PHP grâce a mon fetch, vers l'endpoint qui crée la session de paiement Stripe tout ca sans modifier le contenu de la page 
  
  const passerCommande = () => {
  fetch("https://hellobad.alwaysdata.net/create-checkout-session.php", {      
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: panier })
  })
  .then(res => res.json())            //ici je convertis les données recu de ma BDD afin que react pour les afficher à l'utilisateurs
  .then(data => {
    window.location.href = data.url // redirige vers Stripe
  })
}

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
           <button 
            onClick={passerCommande}
            className="px-6 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-indigo-600"
          >
            Passer la commande
          </button>
          </div>
        </div>
      )}
    </div>
  )
}