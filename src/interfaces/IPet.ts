//===========INTERFACES===============
import { ImageType } from "react-images-uploading";

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
  description?: string;

  //Ubicacion
  province: string;
  city: string;
  neighborhood: string;
  //street: string;
  //numberAddress: string;
  reference?: string;
}

export type ArrayPets = {
  pets: IPet[];
};
