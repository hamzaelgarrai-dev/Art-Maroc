import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Admin from "./Pages/Admin"
import Home from "./Pages/Home"
import Apropos from "./Pages/Apropos"
import Favoris from "./Pages/Favoris"
import Publier from "./Pages/Publier"

function App() {
  

  return (
    <>

    <NavBar/>


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Apropos" element={<Apropos/>}/>
      <Route path="/Favoris" element={<Favoris/>}/>
      <Route path="/Publier" element={<Publier/>}/>
    </Routes>
    
    
    <Footer/>
    
      
    </>
  )
}

export default App