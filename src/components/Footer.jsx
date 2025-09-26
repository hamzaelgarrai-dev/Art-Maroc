import React from 'react'

function Footer() {
  return (

    <div className=' relative  w-full h-64 bottom-0 bg-[#425461]'>
        <footer className='flex flex-col justify-between items-center mx-auto'>
            <div className="flex justify-between items-center w-[650px] h-20 text-white font-semibold mb-10">
                
                    <p className='cursor-pointer'>Accueil</p>
                    <p className='cursor-pointer'>Publier</p>
                    <p className='cursor-pointer'>Favoris</p>
                    <p className='cursor-pointer'>A propos</p>
                    <p className='cursor-pointer'>Admin</p>
                
            </div>

            <h2 className='text-white text-xl h-28 '> ArtConnect <span className='font-bold'>Maroc</span></h2>

            <div className=" text-white ">&copy; 2025 ArtConnect.</div>
           
            <div className=' absolute right-3.5 bottom-3.5   w-24 h-30'>
                <div className="flex flex-col justify-between items-center w-full h-full"> 
                    <p className='text-white text-2xl cursor-pointer'><i class="fa-solid fa-envelope"></i></p>
                    <p className='text-white text-2xl cursor-pointer'><i class="fa-brands fa-square-facebook"></i></p>
                    <p className='text-white text-2xl cursor-pointer'><i class="fa-brands fa-instagram"></i></p>
                    
                </div>
            </div>
        </footer>
        
    </div>

  )
}

export default Footer