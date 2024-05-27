import React, { useState, useEffect } from "react";
import { usePetContext } from "@/context/PetContext";
import { IPet } from "@/interfaces/IPet";
import { ActionTypes } from "@/interfaces/IAction.Types";

export const usePetFilterHook = () => {
  const { listPets, dispatch, filterOptions } = usePetContext();

  const [filteredPets, setFilteredPets] = useState<IPet[]>([]);

  const handleResetFilters = () => {
    // Aplicar los filtros vacíos para mostrar todos los resultados
    dispatch({
      //type y payload
      type: ActionTypes.SET_FILTER_OPTIONS,
      payload: {
        name: "",
        status: "",
        species: "",
        size: "",
        gender: "",
        breed: "",
      },
    });
  };

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

  useEffect(() => {
    setFilteredPets(applyFilters());
  }, [listPets, filterOptions]);

  //funcion para la busqueda por name
  const searchByName = (name: string) => {
    // console.log(name);
    dispatch({
      type: ActionTypes.SET_FILTER_OPTIONS,
      payload: {
        ...filterOptions,
        name: name.toLowerCase(), // Convertir el nombre a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
      },
    });
  };

  return {
    filteredPets,
    filterOptions,
    searchByName,
    handleResetFilters,
    //retorno el dispatch para poder usarlo en los form
    dispatch,
  };
};
