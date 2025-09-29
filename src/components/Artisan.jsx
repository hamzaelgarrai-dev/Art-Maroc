import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

function Artisan(){
  const {artisans}=useContext(AppContext)
   return(
    <section className=" space-y-3 mt-20 bg-orange-50 p-10">
        <h1 className="text-2xl text-orange-900 font-semibold">Artisan du mois</h1>
  <div className="rounded w-30 h-1 bg-blue-950"></div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {artisans.map((art)=>( 
<div key={art.id} className="flex flex-col items-center gap-2">
        <img
        className="rounded-full w-50 h-50 transform transition-transform duration-300 hover:scale-105"
        src={art.image}
        alt={art.nom}/>
        <span className="text-lg font-semibold text-blue-950">{art.nom}</span>
        <p className="text-gray-500 text-sm">
        {art.specialite}
      </p>
      <span className="text-orange-700 font-medium text-sm">{art.ville}</span>
    </div>
))}
    
    
  </div>
    </section>
   )
}
export default Artisan