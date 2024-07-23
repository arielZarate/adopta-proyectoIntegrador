import { IFilterOptions } from "./IPetsContext";
import { IPetFront } from "./IPet";
export enum ActionTypes {
  SET_PETS = "SET_PETS",
  SET_LOADING = "SET_LOADING",
  SET_FILTER_OPTIONS = "SET_FILTER_OPTIONS",
  SET_PET_DETAIL = "SET_PET_DETAIL",
  ADD_PET = "ADD_PET", // Nueva acción para agregar una mascota
}

export interface SetPetsAction {
  type: ActionTypes.SET_PETS;
  payload: IPetFront[];
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
  payload: boolean;
}

export interface SetFilterOptionsAction {
  type: ActionTypes.SET_FILTER_OPTIONS;
  payload: IFilterOptions;
}

export interface SetPetDetailAction {
  type: ActionTypes.SET_PET_DETAIL;
  payload: IPetFront | null;
}

export interface AddPetAction {
  type: ActionTypes.ADD_PET;
  payload: IPetFront;
}
export type Action =
  | SetPetsAction
  | SetLoadingAction
  | SetFilterOptionsAction
  | SetPetDetailAction
  | AddPetAction;
