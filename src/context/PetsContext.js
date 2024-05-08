import React, { useState, useContext, createContext, useEffect } from "react";
import { fetchBackendPets } from "@/services/_PetService";

const PetContext = createContext();

//aca exporto el provider
export default function PetsProvider({ children }) {
  const [listPets, setListPets] = useState([]);

  //este useEffect se carga al iniciar la application
  useEffect(() => {
    async function MontData() {
      let response = await fetchBackendPets();
      // console.log(response);
      setListPets(response);
    }
    MontData();
  }, []);

  //console.log(listPets);
  return (
    <PetContext.Provider value={{ listPets }}>{children}</PetContext.Provider>
  );
}

//aca exporto el contexto
export const ContextPet = () => useContext(PetContext);
