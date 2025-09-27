import React, { useState } from "react";
import GestionOeuvres from "../components/GestionOeuvres";
import GestionEvenements from "../components/GestionEvenements";
import GestionArtisans from "../components/GestionArtisans";
import ModalAdmin from "../components/ModalAdmin";

function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [activeSection, setActiveSection] = useState("oeuvres");

  const renderContent = () => {
    switch (activeSection) {
      case "oeuvres":
        return <div><GestionOeuvres onOpenModal={openModal}/></div>;
      case "categories":
        return <div>Contenu des Catégories</div>;
      case "artisans":
        return <div><GestionArtisans onOpenModal={openModal}/></div>;
      case "evenements":
        return <div><GestionEvenements onOpenModal={openModal}/></div>;
      default:
        return <div>Sélectionnez une section</div>;
    }
  };

  return (
    <div className="bg-[#FDF6E3]  min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="w-full h-24 top-0 absolute  bg-[#0F3D3E]"></div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-36 bg-[#0F3D3E] pt-20 flex flex-col items-center">
          <button
            onClick={() => setActiveSection("oeuvres")}
            className="text-white w-full h-10 border-t border-b border-gray-400 cursor-pointer hover:bg-[#145152]"
          >
            OEuvres
          </button>
          <button
            onClick={() => setActiveSection("categories")}
            className="text-white w-full h-10 border-t border-b border-gray-400 cursor-pointer hover:bg-[#145152]"
          >
            Catégories
          </button>
          <button
            onClick={() => setActiveSection("artisans")}
            className="text-white w-full h-10 border-t border-b border-gray-400 cursor-pointer hover:bg-[#145152]"
          >
            Artisants
          </button>
          <button
            onClick={() => setActiveSection("evenements")}
            className="text-white w-full h-10 border-t border-b border-gray-400 cursor-pointer hover:bg-[#145152]"
          >
            Évènements
          </button>
        </div>

       
        <div className="flex-1 flex flex-col items-center p-8">
         <h2 className="text-3xl text-[#5C4033] mb-4 p-2">Tableau de bord Admin </h2>
         <ModalAdmin isOpen={isModalOpen} onClose={closeModal} />

          {/* Dynamic Content Box */}
          <div className="bg-white rounded-xl w-full max-w-[1000px] h-[850px] p-6 shadow-lg flex justify-center items-center">
            {renderContent()}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
