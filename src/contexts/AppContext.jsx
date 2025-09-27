import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [oeuvres, setOeuvres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5000";


  const fetchData = async () => {
    try {

      const [oeuvresRes, categoriesRes, artisansRes, evenementsRes] =
        await Promise.all([
          axios.get(`${API_URL}/oeuvres`),
          axios.get(`${API_URL}/categories`),
          axios.get(`${API_URL}/artisans`),
          axios.get(`${API_URL}/evenements`)
        ]);

      setOeuvres(oeuvresRes.data);
      setCategories(categoriesRes.data);
      setArtisans(artisansRes.data);
      setEvenements(evenementsRes.data);
    } catch (err) {
      setError("Impossible de charger les données.");
      console.error(err);
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
        error,
      
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
