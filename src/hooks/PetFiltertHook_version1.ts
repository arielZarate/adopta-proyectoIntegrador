import { useState, useEffect, useReducer } from "react";
import { usePetContext } from "@/context/PetContext_version1";

import { IPet } from "@/interfaces/IPet";

//==================================================
// Este componente es un Hook para sacar la logica del useContext
//===================================================
export const usePetFilterHook = () => {
  const { listPets, setFilterOptions, filterOptions } = usePetContext();

  const [filteredPets, setFilteredPets] = useState<IPet[]>([]);

  const handleResetFilters = () => {
    // Aplicar los filtros vacíos para mostrar todos los resultados
    setFilterOptions({
      name: "",
      status: "",
      species: "",
      size: "",
      gender: "",
      breed: "",
    });
  };

  useEffect(() => {
    const applyFilters = () => {
      // Lógica de filtrado según los filtros seleccionados
      return listPets.filter((pet: IPet) => {
        if (filterOptions.status && pet.status !== filterOptions.status)
          return false;
        if (filterOptions.gender && pet.gender !== filterOptions.gender)
          return false;
        if (filterOptions.size && pet.size !== filterOptions.size) return false;
        if (filterOptions.species && pet.species !== filterOptions.species)
          return false;
        if (filterOptions.breed && pet.breed !== filterOptions.breed)
          return false;
        if (
          filterOptions.name &&
          !pet.name.toLowerCase().includes(filterOptions.name.toLowerCase())
        ) {
          return false;
        }
        return true;
      });
    };

    setFilteredPets(applyFilters());
  }, [listPets, filterOptions]);

  const searchByName = (name: string) => {
    console.log(name);
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      name: name.toLowerCase(), // Convertir el nombre a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
    }));
  };

  return {
    filteredPets,
    filterOptions,
    setFilterOptions,
    searchByName,
    handleResetFilters,
  };
};
