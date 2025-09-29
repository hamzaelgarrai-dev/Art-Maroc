import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';

function ModalAdmin({ isOpen, onClose }) {
     if (!isOpen) return null;
     const { addOeuvre } = useContext(AppContext);
     const {categories}=useContext(AppContext)
   
     const [titre, setTitre] = useState("");
       const [categorie, setCategorie] = useState("");
       const [region, setRegion] = useState("");
       const [description, setDescription] = useState(""); // ✅ Added description
       const [imageFile, setImageFile] = useState(null);
       const [loading, setLoading] = useState(false);

       const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titre || !categorie || !region || !description || !imageFile) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "artconnect");

      const cloudinaryRes = await axios.post(
        `https://api.cloudinary.com/v1_1/dl7gjsjpa/image/upload`,
        formData
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      const newOeuvre = {
        titre,
        categorie,
        region,
        description, // ✅ Include description
        image: imageUrl,
      };

      await addOeuvre(newOeuvre);

      // Reset form
      setTitre("");
      setCategorie("");
      setRegion("");
      setDescription("");
      setImageFile(null);

      alert("Oeuvre ajoutée avec succès !");
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err);
      alert("Une erreur est survenue lors de l'ajout de l'œuvre.");
    } finally {
      setLoading(false);
    }
       }
  return (
    <div id="Modal" className=" fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-96 p-6 rounded-xl shadow-lg">
                

                <form onSubmit={handleSubmit} id="ModalForm" className="flex flex-col gap-4">
                    <input type="hidden" id="editId"/>

                    <div className="text-right">
                        <button onClick={onClose} className='bg-red-500 text-white w-10 h-8 rounded-md cursor-pointer'>X</button>
                    </div>

                    <div>
                        <label className="text-gray-700">Titre</label>
                        <input type="text" onChange={(e) => setTitre(e.target.value)} id="TitreInput" className="w-full border rounded-lg p-2" required/>
                    </div>
                  

                    <div>
                        
                        
                        <label for="Categorie"
                            className="block mb-2 text-sm font-medium  dark:text-white">Categoties</label>
                        <select id="editCategorie" onChange={(e) => setCategorie(e.target.value)}
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                            <option value="">Sélectionnez Categorie</option>
                            {categories.map((oeuv)=>(
                                <option key={oeuv.id} value={oeuv.nom}>{oeuv.nom}</option>
                            ))}
                            
        
                        </select>
                        
                    </div>

                    
                    <div className="w-full">
                        <label for="Description"
                            className="block mb-2 text-sm font-medium  dark:text-white">
                            Description
                        </label>
                        <textarea onChange={(e) => setDescription(e.target.value)} id="Description" rows="3" maxlength="500"
                            placeholder="Description..." className="bg-gray-50 border border-gray-300  text-sm rounded-lg 
           focus:ring-blue-500 focus:border-blue-500 block w-full p-3 resize-none" required></textarea>
                    </div>

                      <div>
                        <label className="text-gray-700">Region/Ville</label>
                        <input onChange={(e) => setRegion(e.target.value)} type="text" id="Region/ville" className="w-full border rounded-lg p-2" required/>
                    </div>

                    <div className="flex flex-col justify-between gap-4 mt-4">
                        <label className="p-4 w-76 h-10 rounded-md bg-[#0080FC] flex items-center justify-center text-white cursor-pointer">
              <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
              {imageFile ? imageFile.name : "Upload Image"}
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </label>
                        <button type="submit" className="px-4 py-2 bg-[#F97316] text-white rounded-lg cursor-pointer">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ModalAdmin