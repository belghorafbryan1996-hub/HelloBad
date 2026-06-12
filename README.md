# HelloBad (Boutique E_Commerce toutnée sur le Badminton et plustard sur le sport de raquettes en général).

## Description
Quelques phrases sur le projet

## Technologies utilisées

==========Frontend==========
- React 19
- Tailwind CSS 4
- React Router DOM 7
- Headless UI
- Stripe.js

==========Backend==========
- PHP 8.3
- PDO (sécurisation des requêtes SQL)
- Stripe PHP SDK (via Composer)

==========Base de données==========
- MySQL 8
- phpMyAdmin

==========Outils==========
- Vite
- WAMP (développement local)
- Git / GitHub
- Netlify (déploiement frontend)

==========Fonctionnalités==========
- 🏸 Catalogue produits par catégorie (Raquettes, Shuttlecocks, Bagagerie, Chaussures)
- 🛒 Panier dynamique avec React Context
- 💳 Paiement sécurisé via Stripe
- 🔧 Panel admin complet (CRUD Produits, Catégories, Membres, Commandes)
- 📱 Design responsive mobile-first
- 🗄️ Base de données MySQL avec API PHP

==========Installation==========
1. Cloner le repo : `git clone https://github.com/belghorafbryan1996-hub/HelloBad`
2. Installer les dépendances : `npm install`
3. Lancer le projet : `npm run dev`
4. Lancer WAMP et importer `hellobad.sql`
5. Lancer l'API PHP dans `hellobad-api/`

==========Démo==========
[Lien vers le site déployé](https://celebrated-blini-506293.netlify.app/)

==========Base de données==========
- MySQL avec phpMyAdmin
- 8 tables : CLIENTS, PRODUIT, CATEGORIE, COMMANDE, PAIEMENT, QUANTITE, PROMOTION, DETIENS
- MCD réalisé avec la méthode Merise
- Importer le fichier `hellobad.sql` pour créer la structure
