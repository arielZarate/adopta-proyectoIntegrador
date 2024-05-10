import React, { useState, useContext, createContext, useEffect } from "react";
import { fetchBackendPets } from "@/services/_PetService";

const PetContext = createContext();

//aca exporto el provider
export default function PetsProvider({ children }) {
  const [listPets, setListPets] = useState([]);

  const [filterOptions, setFilterOptions] = useState({
    status: "",
    species: "",
    size: "",
    breed: "",
  });

  //funcionde filtrado (creo que esto se va con un reducer)
  const applyFilters = () => {
    // Lógica de filtrado según los filtros seleccionados
    return listPets.filter((pet) => {
      if (filterOptions.status && pet.status !== filterOptions.status)
        return false;
      if (filterOptions.gender && pet.gender !== filterOptions.gender)
        return false;
      // Agrega más lógica de filtro según sea necesario

      if (filterOptions.species && pet.species !== filterOptions.species)
        return false;

      return true;
    });
  };

  /*
  
    // Aplicar los filtros cada vez que cambien
  useEffect(() => {
    // Lista filtrada actualizada cuando cambian los filtros
    const updatedFilteredPets = applyFilters();
    // Actualizar la lista de mascotas filtradas
    setListPets(updatedFilteredPets);
  }, [filterOptions]); // Este efecto se activa cada vez que cambian los filtros
  */

  //este useEffect se carga al iniciar la application
  useEffect(() => {
    async function MontData() {
      let response = await fetchBackendPets();
      // console.log(response);
      setListPets(response);
    }
    MontData();
  }, []);
  const filteredPets = applyFilters();

  //console.log(listPets);
  return (
    <PetContext.Provider
      value={{
        listPets: filteredPets,
        setFilterOptions,
        filterOptions,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

//aca exporto el contexto
export const ContextPet = () => useContext(PetContext);
