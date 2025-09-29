import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

function MainFavoris(){
  const {favoris}=useContext(AppContext)
  const {supprimerFavoris}=useContext(AppContext)

    return(
        <section className="m-7 space-y-3 mt-10">
  <h1 className="text-2xl text-orange-900 font-semibold">Vos Favoris</h1>
  <div className="rounded w-25 h-1 bg-blue-950"></div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
  {favoris.map((fav)=>(
<div key={fav.id} className=" rounded-md shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src={fav.image}
        alt={fav.titre}/>
    <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">{fav.titre}</span>
      <p className="text-gray-500 text-sm">
        {fav.categorie}
      </p>
      <button onClick={() => supprimerFavoris(fav.id)} className="rounded-lg bg-red-700 text-white font-medium rounded-lg text-sm py-2.5 px-4 cursor-pointer hover:bg-red-800">Retirer des favoris</button>
      </div>
    </div>
  ))}
    
    
    </div>
 

        </section>
    )
}
export default MainFavoris