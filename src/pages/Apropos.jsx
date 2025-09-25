function Apropos(){
    return(
        <>
        <main className="h-60 top-0">
         <div className="absolute inset-0 bg-[url(/public/herop.jpg)] h-100 bg-cover bg-center brightness-50"></div>  
         <div className="relative z-10  text-center text-white mt-25">
            <span className="text-6xl font-Itim">A Propos</span>     
         </div>
        </main>


        <section class="text-center px-6 py-10">
    <h2 class="text-orange-900 text-2xl font-bold inline-block border-b-4 rounded border-blue-950 pb-3">Notre mission</h2>
    
    <p class="text-gray-600 max-w-2xl mx-auto mt-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, laborum inventore. Numquam excepturi illum quo, quisquam nemo corporis sunt ab qui libero sequi est expedita! Non qui similique accusamus laudantium.
    </p>
        </section>

  
     <section class="text-center px-6 py-10">
        
    <h2 class="text-orange-900 text-2xl font-bold inline-block border-b-4 rounded border-blue-950 pb-3">Ce que vous pouvez faire</h2>
    
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
      
      <div class="flex flex-col items-center gap-2 bg-neutral-50 p-6 rounded-xl">
        <img className="w-15 h-15" src="/chaussures.png" alt="maroc"/>
        <h3 class="text-blue-950 text-xl font-semibold mb-2">Explore les creations</h3>
        <p class="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi at ipsa eius, delectus animi, illum nulla quo temporibus sequi velit culpa, similique adipisci ratione maiores rem facere? Quisquam, placeat.
        </p>
      </div>

      <div class="flex flex-col items-center gap-2 bg-neutral-50 p-6 rounded-xl">
        <img className="w-15 h-15" src="/tajine.png" alt="maroc"/>
        <h3 class="text-blue-950 text-xl font-semibold mb-2">Participer aux evenements</h3>
        <p class="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi at ipsa eius, delectus animi, illum nulla quo temporibus sequi velit culpa, similique adipisci ratione maiores rem facere? Quisquam, placeat.
        </p>
      </div>

      <div class="flex flex-col items-center gap-2 bg-neutral-50 p-6 rounded-xl">
        <img className="w-15 h-15" src="/tapis.png" alt="maroc"/>
        <h3 class="text-blue-950 text-xl font-semibold mb-2">Sauvegarder vos favoris</h3>
        <p class="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi at ipsa eius, delectus animi, illum nulla quo temporibus sequi velit culpa, similique adipisci ratione maiores rem facere? Quisquam, placeat.
        </p>
      </div>
    </div>
  </section>

  
  <section class="px-6 py-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center">
    <div class="md:w-1/2">
      <img src="/image.19.jpg" 
           alt="Maroc" class="rounded-lg shadow-lg"/>
    </div>
    <div class="md:w-1/2">
      <h2 class="text-orange-900 text-2xl font-bold inline-block border-b-4 rounded border-blue-950 pb-3">Notre Histoire</h2>
      
      <div className="space-y-3 mt-4">
      <p class="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque velit dolore vel, harum eaque dolorum nesciunt amet sunt, autem, veritatis molestiae minima distinctio consequatur. Aliquam unde ad ducimus temporibus est.
      </p>
      <p class="text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque velit dolore vel, harum eaque dolorum nesciunt amet sunt, autem, veritatis molestiae minima distinctio consequatur. Aliquam unde ad ducimus temporibus est.
      </p>
      </div>
    </div>
  </section>

 
  <section class=" px-6 py-15 bg-gray-50">
    <div className="text-center mb-8">
    <h2 class="text-orange-900 text-2xl font-bold inline-block border-b-4 rounded border-blue-950 pb-3 mb-6">Nos Valeurs</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-5xl mx-auto">
      
      <div class="flex gap-3">
        <img className="w-15 h-15" src="/fez.png" alt="maroc"/>
        <div>
        <h3 class="text-blue-950 text-xl font-semibold mb-2">Authenticité</h3>
        <p class="text-gray-600 text-sm">
          Lorem, ipsum dolor sit amet consectetur 
        </p>
        </div>
      </div>

      <div class="flex gap-3">
        <img className="w-15 h-15" src="/the.png" alt="maroc"/>
        <div>
        <h3 class="text-blue-950 text-xl font-semibold mb-2">Innovation</h3>
        <p class="text-gray-600 text-sm">
          Lorem, ipsum dolor sit amet consectetur 
        </p>
        </div>
      </div>

      <div class="flex gap-3">
        <img className="w-15 h-15" src="/maroc.png" alt="maroc"/>
        <div>
        <h3 class="text-blue-950 text-xl font-semibold mb-2">Communaute</h3>
        <p class="text-gray-600 text-sm">
          Lorem, ipsum dolor sit amet consectetur 
        </p>
        </div>
      </div>

    </div>
  </section>

        </>
    )
}
export default Apropos