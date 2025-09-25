function MainFavoris(){
    return(
        <section className="m-7 space-y-3 mt-10">
  <h1 className="text-2xl text-orange-900 font-semibold">Vos Favoris</h1>
  <div className="rounded w-25 h-1 bg-blue-950"></div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    <div className=" rounded-md shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src="/image-1.jpg"
        alt="Tapis Amazigh"/>
    <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Tapis Amazigh</span>
      <p className="text-gray-500 text-sm">
        Artisanat
      </p>
      <button className="rounded-lg bg-red-700 text-white font-medium rounded-lg text-sm py-2.5 px-4 cursor-pointer hover:bg-red-800">Retirer des favoris</button>
      </div>
    </div>
    <div className="rounded-md shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src="/image-2.jpg"
        alt="Babouches Fes"
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Babouches Fes</span>
      <p className="text-gray-500 text-sm">
        Artisanat
      </p>
      <button className="rounded-lg bg-red-700 text-white font-medium rounded-lg text-sm py-2.5 px-4 cursor-pointer hover:bg-red-800">Retirer des favoris</button>
      
      </div>
    </div>
    <div className="rounded-md shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src="/image-5.jpg"
        alt="Babouches Fes"
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Caftan Rabat</span>
      <p className="text-gray-500 text-sm">
        Habits
      </p>
      <button className="rounded-lg bg-red-700 text-white font-medium rounded-lg text-sm py-2.5 px-4 cursor-pointer hover:bg-red-800">Retirer des favoris</button>
      
      </div>
    </div>
 </div>

        </section>
    )
}
export default MainFavoris