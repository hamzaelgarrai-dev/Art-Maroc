import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext"; 

function GestionOeuvres({ onOpenModal }) {
  const { oeuvres, loading ,error} = useContext(AppContext); 

  if (loading) return <p className="text-center mt-10">Chargement...</p>
  
  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-semibold text-[#5C4033] mb-12">
        Gestion des Oeuvres
      </h2>

      <div className="grid grid-cols-3 gap-6 justify-items-center">
       
        {oeuvres.map((oeuvre) => (
          <div
            key={oeuvre.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-[250px]"
          >
            <img
              src={oeuvre.image}
              alt={oeuvre.titre}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{oeuvre.titre}</h3>
              <p className="text-sm text-gray-500">{oeuvre.categorie}</p>
              <p className="text-xs text-gray-400 mt-1 h-10">{oeuvre.description}</p>

              <div className="flex justify-between  mt-4 w-44">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
                  Modifier
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}

        
        <div
          onClick={onOpenModal}
          className="bg-white rounded-lg shadow-md w-[250px] h-[350px] flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition"
        >
          <div className="text-4xl">+</div>
          <p className="mt-2 text-sm text-gray-600">Add New Oeuvre</p>
        </div>
      </div>
    </div>
  );
}

export default GestionOeuvres;
