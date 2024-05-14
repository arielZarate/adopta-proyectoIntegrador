import React, { useState, useContext, useEffect } from "react";
import { IPet } from "@/interfaces/IPet";
import { IPetContextType } from "@/interfaces/IPetsContext";
import { fetchBackendPets } from "@/services/_PetService";
import { IFilterOptions } from "@/interfaces/IPetsContext";
//====================================================

const PetContext = React.createContext<IPetContextType>(
  null as unknown as IPetContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};
//================================
const PetsProvider = ({ children }: ContextProviderProps) => {
  const [listPets, setListPets] = useState<IPet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
    name: "",
    status: "",
    species: "",
    size: "",
    gender: "",
    breed: "",
  });

  //este useEffect se carga al iniciar la application trae todas las mascotas
  useEffect(() => {
    setLoading(true);

    fetchBackendPets()
      .then((response) => {
        console.log(
          "RECARGANDO OJO CONTROLAR QUE SIEMPRE SE ACRGUE UNA SOLA VEZ!!"
        );
        setListPets(response);
      })
      .catch((response) => {
        console.error("Error fetching pets:", response.message);
      })
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 700)
      );
  }, []);

  const value = {
    listPets,
    loading,
    filterOptions,
    setFilterOptions,
  };

  // Retornamos el proveedor con el valor del contexto
  return (
    <PetContext.Provider value={value as IPetContextType}>
      {children}
    </PetContext.Provider>
  );
};
export default PetsProvider;

export const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePetContext must be used within a PetProvider");
  }
  return context;
};
