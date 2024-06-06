"use client";

import React, { useContext, createContext } from "react";
import { State } from "@/interfaces/IPetsContext";
import { initialState } from "@/hooks/useContextHooks";

//aca importo el  hook que me trae el dispatch y el state
import useContextHooks from "@/hooks/useContextHooks";

//=============CREATE CONTEXT 1 DE 2=====================
// Creamos el contexto

const PetContext = createContext<State>(initialState);

type ContextProviderProps = {
  children: React.ReactNode;
};
const PetsProvider = ({ children }: ContextProviderProps) => {
  const { state, dispatch } = useContextHooks();

  return (
    <PetContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PetContext.Provider>
  );
};
//=========================EXPORTAMOS EL PROVIDER Y EL CONTEXT=======================================
export default PetsProvider;

export const usePetContext = () => {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error("No context provided");
  }
  return context;
};
