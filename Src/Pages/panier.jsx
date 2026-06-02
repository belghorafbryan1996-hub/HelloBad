import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Raquette Yonex Astrox 88D",
    description: "Coloris noir / Cordage inclus",
    price: 149.99,
    qty: 1,
    image: null,
  },
  {
    id: 2,
    name: "Volants Yonex AS-30",
    description: "Boîte de 12 — Vitesse 77",
    price: 29.99,
    qty: 2,
    image: null,
  },
  {
    id: 3,
    name: "Sac de sport HELLOBAD Pro",
    description: "Noir / 3 compartiments",
    price: 64.99,
    qty: 1,
    image: null,
  },
];

export default function PagePanier() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Page content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-baseline justify-between mb-10">
          <h1 className="text-2xl font-medium text-gray-900">Votre panier</h1>
          <span className="text-sm text-gray-400">
            {totalItems} article{totalItems > 1 ? "s" : ""}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-sm mb-4">Votre panier est vide.</p>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline underline-offset-4"
            >
              Continuer mes achats
            </a>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Items list */}
            <div className="lg:col-span-2">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex gap-5 py-6 ${
                    index < items.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Product image placeholder */}
                  <div className="w-24 h-24 bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <svg width="32" height="32" fill="none" stroke="#d1d5db" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M2 17h20"/>
                      </svg>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 mb-4">{item.description}</p>

                    {/* Quantity selector */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-base"
                          aria-label="Diminuer la quantité"
                        >
                          −
                        </button>
                        <span className="w-9 text-center text-sm font-medium text-gray-900 border-x border-gray-200 h-8 flex items-center justify-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-base"
                          aria-label="Augmenter la quantité"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors"
                        aria-label={`Supprimer ${item.name}`}
                      >
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-sm font-medium text-gray-900 flex-shrink-0">
                    {(item.price * item.qty).toFixed(2)} €
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-sm font-medium text-gray-900 mb-5">
                  Récapitulatif
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Livraison</span>
                    <span className="text-green-600 font-medium">
                      {subtotal >= 60 ? "Gratuite" : `5.90 €`}
                    </span>
                  </div>
                  {subtotal < 60 && (
                    <p className="text-xs text-gray-400">
                      Plus que{" "}
                      <span className="font-medium text-gray-600">
                        {(60 - subtotal).toFixed(2)} €
                      </span>{" "}
                      pour la livraison gratuite
                    </p>
                  )}
                </div>

                <div className="border-t border-gray-200 mt-5 pt-5 flex justify-between text-sm font-medium text-gray-900">
                  <span>Total TTC</span>
                  <span>
                    {(subtotal + (subtotal >= 60 ? 0 : 5.9)).toFixed(2)} €
                  </span>
                </div>

                <button className="mt-5 w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-700 transition-colors tracking-wide">
                  Passer la commande
                </button>

                <a
                  href="#"
                  className="mt-3 block text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Continuer mes achats
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}