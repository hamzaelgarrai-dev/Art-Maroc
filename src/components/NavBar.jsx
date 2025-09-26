function NavBar(){


    return(
        <nav className="relative z-10 flex justify-between p-4 text-white">
            
            <div className="flex gap-1 text-2xl">
            <img className="w-10 h-10" src="/maroc-logo.png" alt="maroc"/>
            <span>ArtConnect</span> 
            <span className="font-bold">Maroc</span></div>
            <div className="hidden md:flex space-x-8">
            <a href="#" aria-current="page" className="rounded-md bg-white/75 px-3 py-2 text-base font-medium text-orange-950">Accueil</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Publier</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Favoris</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">A propos</a>
            <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Admin</a>
            </div>

            <input type="checkbox" id="menu-toggle" class="peer hidden" />
            <label for="menu-toggle" class="cursor-pointer md:hidden">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
  <div class="hidden peer-checked:flex flex-col space-y-2 px-4 pb-4 md:hidden">
    <a href="#" class="rounded-md bg-white/75 px-3 py-2 text-base font-medium text-orange-950">Accueil</a>
    <a href="#" class="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">Publier</a>
    <a href="#" class="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">Favoris</a>
    <a href="#" class="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">A propos</a>
    <a href="#" class="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">Admin</a>
  </div>
 
        </nav>
    )
}
export default NavBar