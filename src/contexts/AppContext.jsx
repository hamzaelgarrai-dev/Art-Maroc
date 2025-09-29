import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [oeuvres, setOeuvres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [favoris, setFavoris] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000";


  const fetchData = async () => {
    try {

      setError("")
      setLoading(true)

      const [oeuvresRes, categoriesRes, artisansRes, evenementsRes, favorisRes] =
        await Promise.all([
          axios.get(`${API_URL}/oeuvres`),
          axios.get(`${API_URL}/categories`),
          axios.get(`${API_URL}/artisans`),
          axios.get(`${API_URL}/evenements`),
          axios.get(`${API_URL}/favoris`)
        ]);

      setOeuvres(oeuvresRes.data)
      setCategories(categoriesRes.data)
      setArtisans(artisansRes.data)
      setEvenements(evenementsRes.data)
       setFavoris(favorisRes.data)
    } catch (err) {
      setError("Impossible de charger les données.")
      console.error(err)
    }finally {
      setLoading(false)
    }
  };

   const addOeuvre = async (newOeuvre) => {
    try {
      const res = await axios.post(`${API_URL}/oeuvres`, newOeuvre);
      setOeuvres((prev) => [...prev, res.data])
    } catch (err) {
      console.error("Erreur lors de l'ajout de l'oeuvre:", err);
      alert("Impossible d'ajouter l'oeuvre.");
    }
  };
  const ajouterFavoris = async (oeuvre) => {
  try {
  
    if (!favoris.find(f => f.id === oeuvre.id)) {
      
      const res = await axios.post(`${API_URL}/favoris`, oeuvre);
      setFavoris(prev => [...prev, res.data]);
    }
  } catch (err) {
    console.error("Erreur lors de l'ajout aux favoris:", err);
    alert("Impossible d'ajouter aux favoris.");
  }
};
const supprimerFavoris = async (id) => {
  try {
    await axios.delete(`${API_URL}/favoris/${id}`);
    setFavoris(prev => prev.filter(f => f.id !== id));
  } catch (err) {
    console.error("Erreur lors de la suppression des favoris:", err);
    alert("Impossible de supprimer des favoris.");
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        oeuvres,
        categories,
        artisans,
        evenements,
        favoris,
        loading ,
        error,
        addOeuvre,
        ajouterFavoris,
    supprimerFavoris,
      
      }}
    >
      {children}
    </AppContext.Provider>

  );
};
