import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Inscription() {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("")
  const [telephone, setTelephone] = useState("")
  const [adresse, setAdresse] = useState("")
  const [erreur, setErreur] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log("Submit déclenché !") 
    
    const response = await fetch("https://hellobad.alwaysdata.net/inscription.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom, prenom, email,
        mot_de_passe: motDePasse,
        telephone, adresse
      })
    })
    
    const data = await response.json()
    
    if (data.error) {
      setErreur(data.error)
    } else {
      navigate("/connexion")
    }
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              Créer un compte
            </h1>

            {erreur && <p className="text-red-500 text-sm">{erreur}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                  <input type="text" id="nom" value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    required />
                </div>
                <div>
                  <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                  <input type="text" id="prenom" value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="email@exemple.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                <input type="password" id="password" value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="••••••••" required />
              </div>
              <div>
                <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900">Téléphone</label>
                <input type="tel" id="telephone" value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
              </div>
              <div>
                <label htmlFor="adresse" className="block mb-2 text-sm font-medium text-gray-900">Adresse de livraison</label>
                <input type="text" id="adresse" value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
              </div>
              <button type="submit"
                className="w-full text-white bg-gray-900 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                S'inscrire
              </button>
              <p className="text-sm text-gray-500">
                Déjà un compte ? <a href="/connexion" className="font-medium text-gray-900 hover:underline">Se connecter</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}