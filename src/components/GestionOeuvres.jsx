import React from 'react'

function GestionOeuvres() {
  return (
        <div className="p-6">
      
      <h2 className="text-center text-2xl font-semibold text-[#5C4033] mb-12">
        Gestion des OEuvres
      </h2>

      
      <div className="grid grid-cols-3  gap-6 justify-items-center">
        
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[250px]">
          <img
            src="/image-1.jpg"
            alt="Tapis Amazigh"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Tapis Amazigh</h3>
            <p className="text-sm text-gray-500">Artisanat</p>
            <p className="text-xs text-gray-400 mt-1">description ...............</p>
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

       
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[250px]">
          <img
            src="/image-2.jpg"
            alt="Babouches Fes"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Babouches Fes</h3>
            <p className="text-sm text-gray-500">Artisanat</p>
            <p className="text-xs text-gray-400 mt-1">description ...............</p>
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

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[250px]">
          <img
            src="/image-3.jpg"
            alt="Zellige Fes"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Zellige Fes</h3>
            <p className="text-sm text-gray-500">Architecture</p>
            <p className="text-xs text-gray-400 mt-1">description ...............</p>
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

       
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[250px]">
          <img
            src="/image-5.jpg"
            alt="Caftan Rabat"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Caftan Rabat</h3>
            <p className="text-sm text-gray-500">Habits</p>
            <p className="text-xs text-gray-400 mt-1">description ...............</p>
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

       
        <div className="bg-white rounded-lg shadow-md w-[250px] h-[300px] flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition">
          <div>+</div>
          <p className="mt-2 text-sm text-gray-600">Add New Œuvre</p>
        </div>
      </div>
    </div>
  )
}

export default GestionOeuvres