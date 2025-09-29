import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext"; // Import Context

function GestionCategoties({ onOpenModal }) {
  const { categories, loading ,error} = useContext(AppContext); // Pull categories and loading state

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
        Gestion des Catégories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Loop through all categories */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-md overflow-hidden pb-5"
          >
            <img
              className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
              src={category.image}
              alt={category.nom}
            />
            <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">
              {category.nom}
            </span>

            {/* Actions */}
            <div className="flex justify-between mt-4 w-44">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                Supprimer
              </button>
            </div>
          </div>
        ))}

        {/* Add New Category Card */}
        <div
          onClick={onOpenModal}
          className="bg-white rounded-lg shadow-md w-[250px] h-[300px] flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition"
        >
          <div className="text-4xl">+</div>
          <p className="mt-2 text-sm text-gray-600">Ajouter une catégorie</p>
        </div>
      </div>
    </div>
  );
}

export default GestionCategoties;
