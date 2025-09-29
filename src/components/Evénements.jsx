import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

function Evénements(){
  const {evenements}=useContext(AppContext)
    return(
        <section className="m-7 space-y-3 mt-20">
  <h1 className="text-2xl text-orange-900 font-semibold">Événements à veni</h1>
  <div className="rounded w-40 h-1 bg-blue-950"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {evenements.map((even)=>(
      <div key={even.id} className=" rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src={even.image}
        alt={even.titre}/>
    <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">{even.titre}</span>
      <p className="text-gray-500 text-sm">
        {even.lieu}
      </p>
      <span className="text-orange-700 font-medium text-sm">{even.date}</span>
      </div>
    </div>
    ))}
    

    
  </div>
</section>
    )
}
export default Evénements