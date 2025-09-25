function DernierAjout(){
    return(
        <section className=" space-y-3 bg-gray-50 mt-20 p-10">
  <h1 className="text-2xl text-orange-900 font-semibold">A la une</h1>
  <div className="rounded w-17 h-1 bg-blue-950"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    <div className=" rounded-md shadow-md overflow-hidden bg-white">
      <img
        className="w-full h-45 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/image-14.jpg"
        alt="Tapis Amazigh"/>
    <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Tapis Amazigh</span>
      <p className="text-gray-500 text-sm">
        Le territoire marocain possède les traces d'une présence
      </p>
      </div>
    </div>

    <div className="rounded-md shadow-md overflow-hidden bg-white">
      <img
        className="w-full h-45 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/image-13.jpg"
        alt="Babouches Fes"
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Babouches Fes</span>
      <p className="text-gray-500 text-sm">
        Le territoire marocain possède les traces d'une présence
      </p>
      </div>
    </div>

    <div className="rounded-md shadow-md overflow-hidden bg-white">
      <img
        className="w-full h-45 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/image-3.jpg"
        alt="Zelige Fes"
      />
      <div className="flex flex-col gap-2 p-5 pb-8">
      <span className="text-lg font-semibold text-blue-950">Zelige Fes</span>
      <p className="text-gray-500 text-sm">
        Le territoire marocain possède les traces d'une présence
      </p>
      </div>
    </div>
  </div>
</section>

    )
}
export default DernierAjout