import React from 'react'

function Footer() {
  return (

    <div className="relative w-full bg-[#425461] py-10">
  <footer className="flex flex-col justify-center items-center mx-auto space-y-9">
    
    <div className="flex flex-wrap justify-center items-center gap-6 text-white font-semibold">
      <p className="cursor-pointer">Accueil</p>
      <p className="cursor-pointer">Publier</p>
      <p className="cursor-pointer">Favoris</p>
      <p className="cursor-pointer">A propos</p>
      <p className="cursor-pointer">Admin</p>
    </div>

    
    <h2 className="text-white text-xl">
      ArtConnect <span className="font-bold">Maroc</span>
    </h2>
    
    <div className="flex gap-5 text-white text-2xl">
      <i className="fa-solid fa-envelope cursor-pointer"></i>
      <i className="fa-brands fa-square-facebook cursor-pointer"></i>
      <i className="fa-brands fa-instagram cursor-pointer"></i>
    </div>
    <div className="text-white text-sm">&copy; 2025 ArtConnect.</div>
  </footer>
</div>

  )
}

export default Footer