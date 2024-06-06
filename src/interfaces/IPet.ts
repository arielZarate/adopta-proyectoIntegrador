//===========INTERFACES===============
import { ImageType, ImageListType } from "react-images-uploading";

export interface IPet {
  _id?: string; // OPCIONAL: Se genera automáticamente
  name: string;
  status: string;
  species: string;
  breed: string;
  gender: string;
  colors: string[];
  age: string;
  size: string;
  image: ImageType | null;
  description: string;
  address: string;
}

export type ArrayPets = {
  pets: IPet[];
};

/*
export interface FilterOptions {
  name: string;
  status: string;
  species: string;
  size: string;
  gender: string;
  breed: string;
}
 */
