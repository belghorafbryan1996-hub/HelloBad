// ✏️ Modifie ce tableau avec tes vrais produits
const products = [
  { id: 1, name: "Astrox 88D Pro", badge: "Nouveau", image: null },
  { id: 2, name: "Nanoflare 800", badge: null, image: null },
  { id: 3, name: "Duora 10", badge: null, image: null },
  { id: 4, name: "Voltric Z-Force", badge: null, image: null },
  { id: 5, name: "Arcsaber 11", badge: "Pro", image: null },
  { id: 6, name: "AS-50 Plume", badge: null, image: null },
  { id: 7, name: "SHB65Z3", badge: null, image: null },
  { id: 8, name: "Sac Pro Tour", badge: null, image: null },
];

export default function ProductNav() {
  return (
    <div className="w-full bg-white ">
      <div
        className="flex items-center justify-center gap-1 px-4 py-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product) => (
          <a
            key={product.id}
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
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                // Placeholder gris quand pas d'image
                <div className="w-14 h-14 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors" />
              )}
            </div>

            {/* Nom du produit */}
            <span className="text-[11px] font-medium text-center text-gray-800 leading-tight group-hover:text-black transition-colors">
              {product.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}