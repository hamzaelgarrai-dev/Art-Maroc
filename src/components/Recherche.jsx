function Recherche(){
    return(
        <section>
          
       
  
   <div className="text-orange-900 text-center">
        <div className="relative inline-block">
          
          <input
            type="search"
            name="search"
            placeholder="Rechercher"
            className="outline-none h-10 w-96 pl-10 pr-4 rounded-full text-sm border border-orange-900"
          />

          <svg  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

        </div>
      </div>
          
        </section>
    )
}
export default Recherche