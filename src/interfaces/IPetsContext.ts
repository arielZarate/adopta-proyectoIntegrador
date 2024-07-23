import { IPetFront } from "@/interfaces/IPet";
import { Action } from "./IAction.Types";

export interface IFilterOptions {
  name: string;
  status: string;
  species: string;
  size: string;
  gender: string;
  breed: string;
  province: string;
}

/*

export interface IFilterOptions extends Partial<IPet> {
  name: string;
  status: string;
  species: string;
  size: string;
  gender: string;
  breed: string;
}

*/
///gracias chatgpt 🤣  esta la use cuando usaba contextApi y el hookk , lueog cambie a reducer y uso otra
export interface IPetContextType {
  listPets: [];
  setFilterOptions: React.Dispatch<React.SetStateAction<IFilterOptions>>;
  filterOptions: IFilterOptions;
  loading: boolean;
  searchByName: (name: string) => void;
  handleResetFilters: () => void;
}

//interface para el state del useReducer()

// Definimos el tipo del estado
export interface State {
  listPets: IPetFront[];
  loading: boolean;
  filterOptions: IFilterOptions;
  dispatch: React.Dispatch<Action>; // Agregamos dispatch al tipo State
  detail: IPetFront | null;
}
