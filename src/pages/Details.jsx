import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { Link, useNavigate, useParams } from "react-router-dom"

function Details(){
    const {oeuvres}=useContext(AppContext)
    const {ajouterFavoris}=useContext(AppContext)
    const {id}=useParams()
    const navigate = useNavigate();

    const oeuvre=oeuvres.find((f)=>f.id.toString()===id)
    if (!oeuvre) {
  return <p className="text-center text-gray-600">Œuvre introuvable</p>
}
const handleAjouterFavoris = () => {
    ajouterFavoris(oeuvre);
    navigate("/favoris"); // تنقل للصفحة بعد الإضافة
  };
    return(
        <main className="h-full top-0">
         <div className="absolute inset-0 bg-orange-800 h-full"></div>
        <div className="relative z-10 flex justify-center items-center m-9 ">
           
<div className="bg-white rounded-md shadow-md w-100 h-full overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src={oeuvre.image}
        alt={oeuvre.titre}
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">{oeuvre.titre}</span>
      <p className="text-gray-500 text-sm">
        {oeuvre.categorie}
      </p>
      
      <button onClick={handleAjouterFavoris} className="rounded-lg bg-red-700 text-white font-medium rounded-lg text-sm py-2.5 px-4 cursor-pointer hover:bg-red-800">Ajouter aux favoris</button>
      
      </div>
    </div>
           
         
    </div>
    </main>
    )
}
export default Details