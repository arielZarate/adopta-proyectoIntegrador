import React, { useReducer, useEffect } from "react";

import { State } from "@/interfaces/IPetsContext";
import { ActionTypes, Action } from "@/interfaces/IAction.Types";

import { fetchBackendPets } from "@/services/_PetService";

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
  detail: null,
};

// DEFINIMOS EL REDUCER
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_PETS:
      return { ...state, listPets: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_FILTER_OPTIONS:
      return { ...state, filterOptions: action.payload };

    case ActionTypes.SET_PET_DETAIL:
      //  console.log("reducer data", action.payload);
      return { ...state, detail: action.payload };

    case ActionTypes.ADD_PET:
      //como cuesta entender esta formaaaaa
      return { ...state, listPets: [...state.listPets, action.payload] };
    default:
      return state;
  }
};

const useContextHooks = () => {
  //=======================USE REDUCER==========================
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

  return {
    //de aca retorno solo el state y el dispatch para usar en el contexto
    state,
    dispatch,
  };
};

export default useContextHooks;
export { initialState };
