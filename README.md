# HELLOBAD 🏸
Boutique e-commerce tournée sur le Badminton et plus tard sur le sport de raquettes en général.

## Description
HELLOBAD est un site e-commerce spécialisé dans le badminton avec pour but d'apporter des produits asiatique (connu là-bas mais trés peu en Europe) le but étant de devenir une référence accessible pour de nombreux adhérent de badminton.
Développé avec React et PHP, il permet aux clients d'accéder à une interface fluide et de parcourir les produits,
gérer leur panier et payer via Stripe (j'ai choisis cette solution de paiement car stripe fourni un solution securisé et international en liant leur api à mon site)
Un panel admin permet de gérer les produits, catégories, membres et commandes.

## Technologies utilisées

### Frontend
- React 19
- Tailwind CSS 4
- React Router DOM 7
- Headless UI
- Stripe.js

### Backend
- PHP 8.3
- PDO (sécurisation des requêtes SQL)
- Stripe PHP SDK (via Composer)

### Base de données
- MySQL 8
- phpMyAdmin

### Outils
- Vite
- WAMP (développement local)
- Git / GitHub
- Netlify (déploiement frontend)

## Fonctionnalités
- 🏸 Catalogue produits par catégorie (Raquettes, Shuttlecocks, Bagagerie, Chaussures)
- 🛒 Panier dynamique avec React Context
- 💳 Paiement sécurisé via Stripe
- 🔧 Panel admin complet (CRUD Produits, Catégories, Membres, Commandes)
- 📱 Design responsive mobile-first
- 🗄️ Base de données MySQL avec API PHP

## Installation
1. Cloner le repo : `git clone https://github.com/belghorafbryan1996-hub/HelloBad`
2. Installer les dépendances : `npm install`
3. Lancer le projet : `npm run dev`
4. Lancer WAMP et importer `hellobad.sql`
5. Lancer l'API PHP dans `hellobad-api/`

## Démo
[Voir le site en ligne](https://celebrated-blini-506293.netlify.app/)

## Base de données
- MySQL avec phpMyAdmin
- 8 tables : CLIENTS, PRODUIT, CATEGORIE, COMMANDE, PAIEMENT, QUANTITE, PROMOTION, DETIENS
- MCD réalisé avec la méthode Merise
- Importer le fichier `hellobad.sql` pour créer la structure