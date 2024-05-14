import { IFilterOptions } from "./IPetsContext";
import { IPet } from "./IPet";
export enum ActionTypes {
  SET_PETS = "SET_PETS",
  SET_LOADING = "SET_LOADING",
  SET_FILTER_OPTIONS = "SET_FILTER_OPTIONS",
}

/*

type ActionPayload = {
  [ActionTypes.SET_PETS]: IPet[];
  [ActionTypes.SET_LOADING]: boolean;
  [ActionTypes.SET_FILTER_OPTIONS]: IFilterOptions;
};


type Action = {
  type: ActionTypes;
  payload: ActionPayload[ActionTypes];
};
*/

export type Action =
  | { type: ActionTypes.SET_PETS; payload: IPet[] }
  | { type: ActionTypes.SET_LOADING; payload: boolean }
  | { type: ActionTypes.SET_FILTER_OPTIONS; payload: IFilterOptions };
