import { useState, useEffect } from "react"

export default function Admin() {

//========== Ici je regroupes les Hook de mon pannel admin

const [produits, setProduits] = useState([])
const [nouveauProduit, setNouveauProduit] = useState({
  Nom_produit: "",
  Description: "",
  Prix_TTC: "",
  Stock: "",
  Image_url: "",
  Marque: "",
  Est_en_offre: 0,
  Id_Categorie: ""
})
const [produitAModifier, setProduitAModifier] = useState(null)
const [onglet, setOnglet] = useState("produits")
const [categories, setCategories] = useState([])
const [nouvelleCategorie, setNouvelleCategorie] = useState({
  Nom_categorie: "",
  Description: "",
  Image_url: ""
})
const [categorieAModifier, setCategorieAModifier] = useState(null)
const [clients, setClients] = useState([])
const [nouveauClient, setNouveauClient] = useState({
  Nom: "",
  Prenom: "",
  Email__Unique_: "",
  Telephone: "",
  Adresse_livraison: "",
  Mot_de_passe: ""
})
const [clientAModifier, setClientAModifier] = useState(null)
const [commandes, setCommandes] = useState([])

//========== Fonctions d'appel API

// ==========PRODUITS==========
useEffect(() => {
  fetch("https://hellobad.alwaysdata.net/produits.php")
    .then(res => res.json())
    .then(data => setProduits(data))
}, [])

const supprimerProduit = (id) => {
  fetch("https://hellobad.alwaysdata.net/supprimer_produit.php", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Id_Produit: id })
  })
  .then(res => res.json())
  .then(() => setProduits(produits.filter(p => p.Id_Produit !== id)))
}

const ajouterProduit = () => {
  fetch("https://hellobad.alwaysdata.net/ajouter_produit.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nouveauProduit)
  })
  .then(res => res.json())
  .then(() => {
    setProduits([...produits, nouveauProduit])
    setNouveauProduit({ Nom_produit: "", Description: "", Prix_TTC: "", Stock: "", Image_url: "", Marque: "", Est_en_offre: 0, Id_Categorie: "" })
  })
}

const modifierProduit = () => {
  fetch("https://hellobad.alwaysdata.net/modifier_produit.php", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produitAModifier)
  })
  .then(res => res.json())
  .then(() => {
    setProduits(produits.map(p => p.Id_Produit === produitAModifier.Id_Produit ? produitAModifier : p))
    setProduitAModifier(null)
  })
}

// ==========CATEGORIES==========
useEffect(() => {
  fetch("https://hellobad.alwaysdata.net/categories.php")
    .then(res => res.json())
    .then(data => setCategories(data))
}, [])

const supprimerCategorie = (id) => {
  fetch("https://hellobad.alwaysdata.net/supprimer_categorie.php", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Id_Categorie: id })
  })
  .then(res => res.json())
  .then(() => setCategories(categories.filter(c => c.Id_Categorie !== id)))
}

const ajouterCategorie = () => {
  fetch("https://hellobad.alwaysdata.net/ajouter_categorie.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nouvelleCategorie)
  })
  .then(res => res.json())
  .then(() => {
    setCategories([...categories, nouvelleCategorie])
    setNouvelleCategorie({ Nom_categorie: "", Description: "", Image_url: "" })
  })
}

const modifierCategorie = () => {
  fetch("https://hellobad.alwaysdata.net/modifier_categorie.php", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categorieAModifier)
  })
  .then(res => res.json())
  .then(() => {
    setCategories(categories.map(c => c.Id_Categorie === categorieAModifier.Id_Categorie ? categorieAModifier : c))
    setCategorieAModifier(null)
  })
}

// ==========CLIENTS==========
useEffect(() => {
  fetch("https://hellobad.alwaysdata.net/clients.php")
    .then(res => res.json())
    .then(data => setClients(data))
}, [])

const supprimerClient = (id) => {
  fetch("https://hellobad.alwaysdata.net/supprimer_client.php", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ID_Client: id })
  })
  .then(res => res.json())
  .then(() => setClients(clients.filter(c => c.ID_Client !== id)))
}

const ajouterClient = () => {
  fetch("https://hellobad.alwaysdata.net/ajouter_client.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nouveauClient)
  })
  .then(res => res.json())
  .then(() => {
    setClients([...clients, nouveauClient])
    setNouveauClient({ Nom: "", Prenom: "", Email__Unique_: "", Telephone: "", Adresse_livraison: "", Mot_de_passe: "" })
  })
}

const modifierClient = () => {
  fetch("https://hellobad.alwaysdata.net/modifier_client.php", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clientAModifier)
  })
  .then(res => res.json())
  .then(() => {
    setClients(clients.map(c => c.ID_Client === clientAModifier.ID_Client ? clientAModifier : c))
    setClientAModifier(null)
  })
}

// ==========COMMANDES==========
useEffect(() => {
  fetch("https://hellobad.alwaysdata.net/commandes.php")
    .then(res => res.json())
    .then(data => setCommandes(data))
}, [])

const supprimerCommande = (id) => {
  fetch("https://hellobad.alwaysdata.net/supprimer_commande.php", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ID_Commande: id })
  })
  .then(res => res.json())
  .then(() => setCommandes(commandes.filter(c => c.ID_Commande !== id)))
}

return (
  <div className="max-w-7xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-medium text-gray-900 mb-8">Panel Admin</h1>

    {/* Onglets */}
    <div className="flex gap-2 mb-8">
      {["produits", "categories", "membres", "commandes"].map((o) => (
        <button
          key={o}
          onClick={() => setOnglet(o)}
          className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
            onglet === o ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {o}
        </button>
      ))}
    </div>

    {/* ==========PRODUITS========== */}
    {onglet === "produits" && (
      <div>
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Nom</th>
              <th className="px-4 py-3 border-b">Prix</th>
              <th className="px-4 py-3 border-b">Stock</th>
              <th className="px-4 py-3 border-b">Marque</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit) => (
              <tr key={produit.Id_Produit} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{produit.Id_Produit}</td>
                <td className="px-4 py-3">{produit.Nom_produit}</td>
                <td className="px-4 py-3">{produit.Prix_TTC} €</td>
                <td className="px-4 py-3">{produit.Stock}</td>
                <td className="px-4 py-3">{produit.Marque}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-500 hover:underline" onClick={() => setProduitAModifier(produit)}>Modifier</button>
                  <button className="text-red-500 hover:underline" onClick={() => supprimerProduit(produit.Id_Produit)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Ajouter produit */}
        <div className="mt-10">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Ajouter un produit</h2>
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Nom du produit" value={nouveauProduit.Nom_produit}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Nom_produit: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Prix TTC" value={nouveauProduit.Prix_TTC}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Prix_TTC: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Stock" value={nouveauProduit.Stock}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Stock: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Marque" value={nouveauProduit.Marque}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Marque: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Description" value={nouveauProduit.Description}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Description: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Image URL" value={nouveauProduit.Image_url}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Image_url: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="ID Catégorie (1=Raquettes, 2=Shuttlecocks...)" value={nouveauProduit.Id_Categorie}
              onChange={(e) => setNouveauProduit({...nouveauProduit, Id_Categorie: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
          </div>
          <button className="mt-4 px-6 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700" onClick={ajouterProduit}>
            Ajouter
          </button>
        </div>

        {/* Modifier produit */}
        {produitAModifier && (
          <div className="mt-10">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Modifier le produit</h2>
            <div className="grid grid-cols-2 gap-4">
              <input value={produitAModifier.Nom_produit}
                onChange={(e) => setProduitAModifier({...produitAModifier, Nom_produit: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={produitAModifier.Prix_TTC}
                onChange={(e) => setProduitAModifier({...produitAModifier, Prix_TTC: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={produitAModifier.Stock}
                onChange={(e) => setProduitAModifier({...produitAModifier, Stock: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={produitAModifier.Marque}
                onChange={(e) => setProduitAModifier({...produitAModifier, Marque: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={produitAModifier.Description}
                onChange={(e) => setProduitAModifier({...produitAModifier, Description: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={produitAModifier.Image_url}
                onChange={(e) => setProduitAModifier({...produitAModifier, Image_url: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={modifierProduit} className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">Enregistrer</button>
              <button onClick={() => setProduitAModifier(null)} className="px-6 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300">Annuler</button>
            </div>
          </div>
        )}
      </div>
    )}

    {/* ==========CATEGORIES========== */}
    {onglet === "categories" && (
      <div>
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Nom</th>
              <th className="px-4 py-3 border-b">Description</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.Id_Categorie} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{cat.Id_Categorie}</td>
                <td className="px-4 py-3">{cat.Nom_categorie}</td>
                <td className="px-4 py-3">{cat.Description}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => setCategorieAModifier(cat)} className="text-blue-500 hover:underline">Modifier</button>
                  <button onClick={() => supprimerCategorie(cat.Id_Categorie)} className="text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Ajouter une catégorie</h3>
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Nom catégorie" value={nouvelleCategorie.Nom_categorie}
              onChange={(e) => setNouvelleCategorie({...nouvelleCategorie, Nom_categorie: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Description" value={nouvelleCategorie.Description}
              onChange={(e) => setNouvelleCategorie({...nouvelleCategorie, Description: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Image URL" value={nouvelleCategorie.Image_url}
              onChange={(e) => setNouvelleCategorie({...nouvelleCategorie, Image_url: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
          </div>
          <button onClick={ajouterCategorie} className="mt-4 px-6 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700">Ajouter</button>
        </div>

        {categorieAModifier && (
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Modifier la catégorie</h3>
            <div className="grid grid-cols-2 gap-4">
              <input value={categorieAModifier.Nom_categorie}
                onChange={(e) => setCategorieAModifier({...categorieAModifier, Nom_categorie: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={categorieAModifier.Description}
                onChange={(e) => setCategorieAModifier({...categorieAModifier, Description: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={categorieAModifier.Image_url}
                onChange={(e) => setCategorieAModifier({...categorieAModifier, Image_url: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={modifierCategorie} className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg">Enregistrer</button>
              <button onClick={() => setCategorieAModifier(null)} className="px-6 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg">Annuler</button>
            </div>
          </div>
        )}
      </div>
    )}

    {/* ==========MEMBRES========== */}
    {onglet === "membres" && (
      <div>
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Nom</th>
              <th className="px-4 py-3 border-b">Prénom</th>
              <th className="px-4 py-3 border-b">Email</th>
              <th className="px-4 py-3 border-b">Téléphone</th>
              <th className="px-4 py-3 border-b">Adresse</th>
              <th className="px-4 py-3 border-b">Date inscription</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.ID_Client} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{client.ID_Client}</td>
                <td className="px-4 py-3">{client.Nom}</td>
                <td className="px-4 py-3">{client.Prenom}</td>
                <td className="px-4 py-3">{client.Email__Unique_}</td>
                <td className="px-4 py-3">{client.Telephone}</td>
                <td className="px-4 py-3">{client.Adresse_livraison}</td>
                <td className="px-4 py-3">{client.Date_inscription}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button onClick={() => setClientAModifier(client)} className="text-blue-500 hover:underline">Modifier</button>
                  <button onClick={() => supprimerClient(client.ID_Client)} className="text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Ajouter un membre</h3>
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Nom" value={nouveauClient.Nom}
              onChange={(e) => setNouveauClient({...nouveauClient, Nom: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Prénom" value={nouveauClient.Prenom}
              onChange={(e) => setNouveauClient({...nouveauClient, Prenom: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Email" value={nouveauClient.Email__Unique_}
              onChange={(e) => setNouveauClient({...nouveauClient, Email__Unique_: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Téléphone" value={nouveauClient.Telephone}
              onChange={(e) => setNouveauClient({...nouveauClient, Telephone: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Adresse" value={nouveauClient.Adresse_livraison}
              onChange={(e) => setNouveauClient({...nouveauClient, Adresse_livraison: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            <input placeholder="Mot de passe" type="password" value={nouveauClient.Mot_de_passe}
              onChange={(e) => setNouveauClient({...nouveauClient, Mot_de_passe: e.target.value})}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
          </div>
          <button onClick={ajouterClient} className="mt-4 px-6 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700">Ajouter</button>
        </div>

        {clientAModifier && (
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Modifier le membre</h3>
            <div className="grid grid-cols-2 gap-4">
              <input value={clientAModifier.Nom}
                onChange={(e) => setClientAModifier({...clientAModifier, Nom: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={clientAModifier.Prenom}
                onChange={(e) => setClientAModifier({...clientAModifier, Prenom: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={clientAModifier.Email__Unique_}
                onChange={(e) => setClientAModifier({...clientAModifier, Email__Unique_: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={clientAModifier.Telephone}
                onChange={(e) => setClientAModifier({...clientAModifier, Telephone: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
              <input value={clientAModifier.Adresse_livraison}
                onChange={(e) => setClientAModifier({...clientAModifier, Adresse_livraison: e.target.value})}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm" />
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={modifierClient} className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg">Enregistrer</button>
              <button onClick={() => setClientAModifier(null)} className="px-6 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg">Annuler</button>
            </div>
          </div>
        )}
      </div>
    )}

    {/* ==========COMMANDES========== */}
    {onglet === "commandes" && (
      <div>
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Date commande</th>
              <th className="px-4 py-3 border-b">Statut</th>
              <th className="px-4 py-3 border-b">Total TTC</th>
              <th className="px-4 py-3 border-b">Adresse livraison</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {commandes.map((commande) => (
              <tr key={commande.ID_Commande} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{commande.ID_Commande}</td>
                <td className="px-4 py-3">{commande.Date_commande}</td>
                <td className="px-4 py-3">{commande.Statut}</td>
                <td className="px-4 py-3">{commande.Total_ttc}</td>
                <td className="px-4 py-3">{commande.Adresse_livraison}</td>
                <td className="px-4 py-3">
                  <button onClick={() => supprimerCommande(commande.ID_Commande)} className="text-red-500 hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

  </div>
)
}