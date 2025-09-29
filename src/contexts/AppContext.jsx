import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [oeuvres, setOeuvres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000";


  const fetchData = async () => {
    try {

      setError("")
      setLoading(true)

      const [oeuvresRes, categoriesRes, artisansRes, evenementsRes] =
        await Promise.all([
          axios.get(`${API_URL}/oeuvres`),
          axios.get(`${API_URL}/categories`),
          axios.get(`${API_URL}/artisans`),
          axios.get(`${API_URL}/evenements`)
        ]);

      setOeuvres(oeuvresRes.data)
      setCategories(categoriesRes.data)
      setArtisans(artisansRes.data)
      setEvenements(evenementsRes.data)
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
        loading ,
        error,
        addOeuvre,
      
      }}
    >
      {children}
    </AppContext.Provider>

  );
};
