import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

// On initialise Stripe avec ta clé publique
const stripePromise = loadStripe('pk_test_TYC219d874567890123456789012345678');

export default function PagePanier() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // 1. Ici, tu dois faire un appel API vers TON serveur (Back-End)
    // C'est ton serveur qui va appeler l'API Stripe pour créer la session.
    fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "un_produit_de_ton_panier" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret)); // On récupère le secret
  }, []);

  // Les options indispensables pour le composant Stripe
  const options = { clientSecret };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Mon Panier 🛒</h2>
      <p>Prêt à régaler ? On passe au paiement sécurisé :</p>
      
      {clientSecret ? (
        // Si on a le secret, on affiche la page Stripe directement incrustée !
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : (
        // En attendant que le serveur réponde, on fait patienter le gâté
        <p>Chargement du paiement sécurisé...</p>
      )}
    </div>
  );
}