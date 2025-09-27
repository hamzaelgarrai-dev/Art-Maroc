import React from 'react'
import bgImage from '/bg-P.png'

function FormPublier() {
  return (
    
    <main className='h-[700px] top-0'>
       <div className="h-[800px] absolute inset-0   w-full bg-cover  bg-center bg-no-repeat flex justify-center items-center pt-16" style={{ backgroundImage: `url(${bgImage})` }}>

        <div className="flex flex-col   justify-between items-center mx-auto w-96">
            <h2 className='text-white text-4xl mb-12 '>Publier une Oeuvre</h2>
            <form action=""
                  className='bg-white w-[400px] h-[450px] rounded-xl flex flex-col justify-start space-y-8 pt-16 items-center'>

                    <input type="text" name="" id="" placeholder='Titre de l’oeuvre'  className='p-4 w-76 h-10 rounded-md border border-black '/>
                    <select name="" id="" 
                    className=' w-76 h-10 rounded-md border border-black text-gray-500  pl-4' >
                     
                      <option value="" disabled>select categorie</option>
                      <option value="art">art</option>
                      <option value="habits">habits</option>
                    </select>
                    <input type="text" name="" id="" placeholder='Region/Ville'  className='p-4 w-76 h-10 rounded-md border border-black '/>
                    
                    <button className='p-4 w-76 h-10 rounded-md bg-[#0080FC] flex items-center justify-center text-white'><i class="fa-solid fa-arrow-up-from-bracket"></i>Upload Image</button>
                    <button className='p-4 w-76 h-10 rounded-md bg-[#F97316] flex items-center justify-center text-white font-medium'>Submit</button>

            </form>
        </div>
        
    </div>
    </main>
    
   
  )
}

export default FormPublier