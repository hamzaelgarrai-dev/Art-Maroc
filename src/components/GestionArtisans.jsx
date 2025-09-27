import React from 'react'

function GestionArtisans({ onOpenModal }) {
  return (
     <div className="p-6">
      
      <h2 className="text-center text-2xl font-semibold text-[#5C4033] mb-12">
        Gestion des Evenments
      </h2>

      
      <div className="grid grid-cols-3  gap-6 justify-items-center">
        
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[250px]">
          <img
            src="/image.12.jpg"
            alt="Festival Caftan"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Kenza</h3>
            <p className="text-sm text-gray-500">Zelige</p>
            <p className="text-sm text-[#BE4C06]">Rabat</p>
            
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
            src="/image.11.jpg"
            alt="Festivale Mawazine"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Hakima</h3>
            <p className="text-sm text-gray-500">Caftan</p>
            <p className="text-sm text-[#BE4C06]">Fes</p>
            
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
            src="/image.10.jpg"
            alt="Coupe du Monde"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Fatima</h3>
            <p className="text-sm text-gray-500">Tapis</p>
            <p className="text-sm text-[#BE4C06]">Marrakech</p>
            
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

       
        

       
        <div onClick={onOpenModal} className="bg-white rounded-lg shadow-md w-[250px] h-[260px] flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition">
          <div className='text-4xl'>+</div>
          <p className="mt-2 text-sm text-gray-600">Ajouter Artisan</p>
        </div>
      </div>
    </div>
  )
}

export default GestionArtisans