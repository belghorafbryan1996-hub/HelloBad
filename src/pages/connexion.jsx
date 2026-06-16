import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Connexion() {
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("")
  const [erreur, setErreur] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Envoi :", { email, mot_de_passe: motDePasse })
    
    const response = await fetch("https://hellobad.alwaysdata.net/connexion_clients.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        mot_de_passe: motDePasse
      })
    })
    
    const data = await response.json()
    
    if (data.error) {
      setErreur(data.error)
   } else {
  localStorage.setItem('user', JSON.stringify(data.client))
  if (data.client.role === 'admin') {
    navigate("/admin")
  } else {
    navigate("/")
  }
}
  }
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Connexion
            </h1>

            {/* {erreur && <p className="text-red-500 text-sm">{erreur}</p>} */}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  placeholder="email@exemple.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                  required
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gray-900 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Se connecter
              </button>
              <p className="text-sm font-light text-gray-500">
                Pas encore de compte ? <a href="/inscription" className="font-medium text-gray-900 hover:underline">S'inscrire</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}