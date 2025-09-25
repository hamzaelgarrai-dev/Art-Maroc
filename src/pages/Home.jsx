import Articles from "../components/Articles"
import Artisan from "../components/Artisan"
import Categories from "../components/Categories"
import DernierAjout from "../components/DernierAjout"
import Evénements from "../components/Evénements"
import Hero from "../components/Hero"
import Recherche from "../components/Recherche"

function Home(){
return(
    <>
    <Hero/>
    <Recherche/>
    <Categories/>
    <DernierAjout/>
    <Articles/>
    <Evénements/>
    <Artisan/>
    </>
)
}
export default Home