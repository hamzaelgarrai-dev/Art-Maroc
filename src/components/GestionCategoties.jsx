import React from 'react'

function GestionCategoties() {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-semibold text-[#5C4033] mb-12">
        Gestion des Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-md overflow-hidden pb-5">
      <img
        className=" w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-1.jpg"
        alt="Architecture"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Architecture</span>
       <div className="flex justify-between mt-4 w-44">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                Supprimer
              </button>
            </div>
    </div>
    <div className="flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-md overflow-hidden pb-5">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-2.jpg"
        alt="Gastronomie"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Gastronomie</span>
       <div className="flex justify-between mt-4 w-44">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                Supprimer
              </button>
            </div>
    </div>
    <div className="flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-md overflow-hidden pb-5">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-3.jpg"
        alt="Artisanat"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Artisanat</span>
       <div className="flex justify-between mt-4 w-44">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                Supprimer
              </button>
            </div>
    </div>
    <div className="flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-md overflow-hidden pb-5">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-4.jpg"
        alt="Habits"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Habits</span>
       <div className="flex justify-between mt-4 w-44">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                Supprimer
              </button>
            </div>
    </div>
    <div className="bg-white rounded-lg shadow-md w-[250px] h-[300px] flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition">
          <div>+</div>
          <p className="mt-2 text-sm text-gray-600">Add New Œuvre</p>
        </div>
      </div>
    </div>
  )
}

export default GestionCategoties