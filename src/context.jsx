import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [panier, setPanier] = useState([])

  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit])
  }

  const supprimerDuPanier = (id) => {
    setPanier(panier.filter(p => p.Id_Produit !== id))
  }

  return (
    <CartContext.Provider value={{ panier, ajouterAuPanier, supprimerDuPanier }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}