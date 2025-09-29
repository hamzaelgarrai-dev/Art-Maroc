import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function GestionArtisans({ onOpenModal }) {
  const { artisans, loading } = useContext(AppContext); // Access artisans from context

  if (loading) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-semibold text-[#5C4033] mb-12">
        Gestion des Artisans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {artisans?.map((artisan) => (
          <div
            key={artisan.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-[250px] flex flex-col items-center"
          >
            <img
              src={artisan.image}
              alt={artisan.nom}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-800">{artisan.nom}</h3>
              <p className="text-sm text-gray-500">{artisan.specialite}</p>
              <p className="text-sm text-[#BE4C06]">{artisan.ville}</p>

              <div className="flex justify-between mt-4 w-44">
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

        {/* Add Artisan Card */}
        <div
          onClick={onOpenModal}
          className="bg-white rounded-lg shadow-md w-[250px] h-[260px] flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition"
        >
          <div className="text-4xl">+</div>
          <p className="mt-2 text-sm text-gray-600">Ajouter Artisan</p>
        </div>
      </div>
    </div>
  );
}

export default GestionArtisans;
