function Categories(){
    return(
        <section className="m-7 space-y-3 mt-10">
  <h1 className="text-2xl text-orange-900 font-semibold">Categories</h1>
  <div className="rounded w-25 h-1 bg-blue-950"></div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
    <div className="flex flex-col items-center cursor-pointer">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-1.jpg"
        alt="Architecture"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Architecture</span>
    </div>

    <div className="flex flex-col items-center cursor-pointer">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-2.jpg"
        alt="Gastronomie"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Gastronomie</span>
    </div>

    <div className="flex flex-col items-center cursor-pointer">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-3.jpg"
        alt="Artisanat"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Artisanat</span>
    </div>

    <div className="flex flex-col items-center cursor-pointer">
      <img
        className="rounded-lg w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105"
        src="/categorie-4.jpg"
        alt="Habits"
      />
      <span className="mt-2 text-lg font-semibold text-blue-950 hover:text-orange-700">Habits</span>
    </div>
  </div>
</section>

    )
}
export default Categories