import React, { useState, useContext } from "react";
import bgImage from "/bg-P.png";
import axios from "axios";
import { AppContext } from "../contexts/AppContext";

function FormPublier() {
  const { addOeuvre } = useContext(AppContext);

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
  };

  return (
    <main className="h-[700px] top-0">
      <div
        className="h-[800px] absolute inset-0 w-full bg-cover bg-center bg-no-repeat flex justify-center items-center pt-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col justify-between items-center mx-auto w-96">
          <h2 className="text-white text-4xl mb-12">Publier une Oeuvre</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white w-[400px] h-[520px] rounded-xl flex flex-col justify-start space-y-8 pt-8 items-center overflow-y-auto"
          >
            <input
              type="text"
              placeholder="Titre de l’oeuvre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              className="p-4 w-76 h-10 rounded-md border border-black"
            />

            <select
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="w-76 h-10 rounded-md border border-black text-gray-500 pl-4"
            >
              <option value="" disabled>
                Sélectionnez une catégorie
              </option>
              <option value="Art">Art</option>
              <option value="Habits">Habits</option>
            </select>

            <input
              type="text"
              placeholder="Région/Ville"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="p-4 w-76 h-10 rounded-md border border-black"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-4 w-76 h-20 rounded-md border border-black resize-none"
            />

            <label className="p-4 w-76 h-10 rounded-md bg-[#0080FC] flex items-center justify-center text-white cursor-pointer">
              <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
              {imageFile ? imageFile.name : "Upload Image"}
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="p-4 w-76 h-10 rounded-md bg-[#F97316] flex items-center justify-center text-white font-medium"
            >
              {loading ? "En cours..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default FormPublier;
