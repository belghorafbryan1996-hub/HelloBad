export default function Success() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-medium text-gray-900 mb-4">🎉 Commande confirmée !</h1>
      <p className="text-gray-500 mb-8">Merci pour votre achat. Vous allez recevoir un email de confirmation.</p>
      <a href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
        Retour à l'accueil
      </a>
    </div>
  )
}