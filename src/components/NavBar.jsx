import { Link } from "react-router-dom"
function NavBar() {


    return (
        <nav className="relative top-0 z-10 flex justify-between p-4 text-white">

            <div className="flex gap-1 text-2xl">
                <img className="w-10 h-10" src="/maroc-logo.png" alt="maroc" />
                <span>ArtConnect</span>
                <span className="font-bold">Maroc</span></div>
            <div className="flex space-x-8">
                <Link to="/">
                    <a href="#" aria-current="page" className="rounded-md bg-white/75 px-3 py-2 text-base font-medium text-orange-950">Accueil</a>
                </Link>

                <Link to="/Publier">
                    <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Publier</a>
                </Link>

                <Link to="Favoris">
                    <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Favoris</a>
                </Link>

                <Link to="Apropos">
                    <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">A propos</a>
                </Link>

                <Link to="Admin">
                    <a href="#" className="rounded-md px-3 py-2 text-base font-medium  hover:bg-white/75 hover:text-orange-950">Admin</a>
                </Link>





            </div>
        </nav>
    )
}
export default NavBar