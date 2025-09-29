import { Link } from "react-router-dom"
function NavBar() {


    return (
      
        <nav className="relative top-0 z-50 flex justify-between p-4 text-white">

            <div className="flex gap-1 text-2xl">
      <img className="w-10 h-10" src="/maroc-logo.png" alt="maroc" />
                <span>ArtConnect</span>
                <span className="font-bold">Maroc</span></div>
            <div className="hidden md:flex space-x-8">
                <Link to="/">
                    <span aria-current="page" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Accueil</span>
                </Link>

                <Link to="/Publier">
                    <span className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Publier</span>
                </Link>

                <Link to="Favoris">
                    <span className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Favoris</span>
                </Link>

                <Link to="Apropos">
                    <span className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">A propos</span>
                </Link>

                <Link to="Admin">
                    <span className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Admin</span>
                </Link>

            </div>

            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
  <div className="hidden peer-checked:flex flex-col space-y-2 p-8 absolute top-full left-0 w-full h-screen bg-orange-950 md:hidden">
    <a href="#" className="rounded-md bg-white/75 px-3 py-2 text-base font-medium text-orange-950">Accueil</a>
    <a href="#" className="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">Publier</a>
    <a href="#" className="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">Favoris</a>
    <a href="#" className="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">A propos</a>
    <a href="#" className="rounded-md px-3 py-2 text-base font-medium hover:bg-white/75 hover:text-orange-950">Admin</a>
  </div>
 
        </nav>
    )
}
export default NavBar