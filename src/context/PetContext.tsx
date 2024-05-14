import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useReducer,
} from "react";

import { ActionTypes, Action } from "@/interfaces/IAction.Types";
import { fetchBackendPets } from "@/services/_PetService";
import { State } from "@/interfaces/IPetsContext";

//==============USE REDUCER======================================

// Estado inicial
const initialState: State = {
  listPets: [],
  loading: true,
  filterOptions: {
    name: "",
    status: "",
    species: "",
    size: "",
    gender: "",
    breed: "",
  },

  dispatch: () => {},
};

// Reducer para gestionar el estado
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_PETS:
      return { ...state, listPets: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_FILTER_OPTIONS:
      return { ...state, filterOptions: action.payload };
    default:
      return state;
  }
};
//======================FIN USEREDUCER===========================================

//=============CREATE CONTEXT 1 DE 2=====================
// Creamos el contexto
// Creamos el contexto con valores predeterminados
const PetContext = createContext<State>({
  listPets: [],
  loading: true,
  filterOptions: {
    name: "",
    status: "",
    species: "",
    size: "",
    gender: "",
    breed: "",
  },
  dispatch: () => {},
});
//==============FIN CREATE CONTEXT==================

//==================== PROVIDER  2 DE 2=========================================
type ContextProviderProps = {
  children: React.ReactNode;
};
const PetsProvider = ({ children }: ContextProviderProps) => {
  //ACA USAMOS EL REDUCER A TRAVES DEL USEREDUCER
  const [state, dispatch] = useReducer(reducer, initialState);

  //este useEffect se carga al iniciar la application trae todas las mascotas

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ActionTypes.SET_LOADING, payload: true });
      try {
        const response = await fetchBackendPets();
        dispatch({ type: ActionTypes.SET_PETS, payload: response });
      } catch (error: any) {
        console.error("Error fetching pets:", error.message);
      } finally {
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      }
    };

    fetchData();
  }, []);

  // Retornamos el proveedor con el valor del contexto
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
