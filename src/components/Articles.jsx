import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { Link } from "react-router-dom"

function Articles(){
     const {oeuvres}=useContext(AppContext)

      return(
        <section className="m-7 space-y-3 mt-20">
  <h1 className="text-2xl text-orange-900 font-semibold">Toutes les oeuvres</h1>
  <div className="rounded w-43 h-1 bg-blue-950"></div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
  {oeuvres.map((oeuvre)=>(
<div key={oeuvre.id} className=" rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src={oeuvre.image}
        alt={oeuvre.titre}/>
    <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">{oeuvre.titre} {oeuvre.region}</span>
      <p className="text-gray-500 text-sm">{oeuvre.categorie}</p>
      <Link to={`/Details/${oeuvre.id}`}>
      <button className="rounded-lg bg-orange-700 text-white font-medium rounded-lg text-sm py-2.5 w-30 cursor-pointer hover:bg-orange-800">voir details</button>
      </Link>
      </div>
      
    </div>
  ))}
    

    
    </div>
  
</section>
      )
}
export default Articles