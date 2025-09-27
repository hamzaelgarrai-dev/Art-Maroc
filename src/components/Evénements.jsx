function Evénements(){
    return(
        <section className="m-7 space-y-3 mt-20">
  <h1 className="text-2xl text-orange-900 font-semibold">Événements à veni</h1>
  <div className="rounded w-40 h-1 bg-blue-950"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    <div className=" rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover"
        src="/image-7.jpg"
        alt="Tapis Amazigh"/>
    <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Festival Caftan</span>
      <p className="text-gray-500 text-sm">
        Marakkche
      </p>
      <span className="text-orange-700 font-medium text-sm">2025-02-14</span>
      </div>
    </div>

    <div className="rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover "
        src="/image-8.jpg"
        alt="Babouches Fes"
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Mawazine</span>
      <p className="text-gray-500 text-sm">
        Rabat
      </p>
      <span className="text-orange-700 font-medium text-sm">2025-02-14</span>
      </div>
    </div>

    <div className="rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <img
        className="w-full h-45 object-cover "
        src="/image-9.png"
        alt="Zelige Fes"
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Coupe du Monde</span>
      <p className="text-gray-500 text-sm">
        Tanger
      </p>
      <span className="text-orange-700 font-medium text-sm">2025-02-14</span>
      </div>
    </div>
  </div>
</section>
    )
}
export default Evénements