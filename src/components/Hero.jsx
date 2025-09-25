function Hero(){
     return(
        <main className="h-screen top-0">
         <div className="absolute inset-0 bg-[url(/public/image-hero.jpg)] h-screen bg-cover bg-center brightness-75"></div>
        
         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-8">
            <span className="text-6xl font-Itim">Bienvenue à ArtConnect Maroc</span>
            <p>Officiellement le Royaume du Maroc, ce pays du Maghreb, en Afrique du Nord, est bordé au nord par la mer Méditerranée.</p>
            <button className="rounded-md bg-white/75 px-3 py-2 text-orange-950 font-medium hover:bg-white">Publier une oeuvre</button>
         </div>
        </main>
     )
}
export default Hero