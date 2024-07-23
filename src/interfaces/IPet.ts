//===========INTERFACES===============
import { ImageType } from "react-images-uploading";

export interface IPetFront {
  _id?: string; // OPCIONAL: Se genera automáticamente
  name: string;
  status: string;
  species: string;
  breed: string;
  gender: string;
  colors: string[];
  age: string;
  size: string;
  image?: ImageType | null; //ArrayBuffer | null | string;
  description?: string;

  //Ubicacion
  province: string;
  city: string;
  neighborhood: string;
  reference?: string;
}

export type ArrayPets = {
  pets: IPetFront[];
};

/**
 * 
 * 
 * interfza mas estricta aca en el front 
 * export interface IPet {
  _id?: string; // OPCIONAL: Se genera automáticamente
  name: string;
  status: "adoption" | "found" | "lost"; // Puedes usar literales de cadena aquí
  species: "dog" | "cat"; // Puedes usar literales de cadena aquí
  breed: string;
  gender: "male" | "female"; // Puedes usar literales de cadena aquí
  colors: string[]; // Debería ser 'colors' para coincidir con tu código
  age: "puppy" | "adult" | "senior"; // Puedes usar literales de cadena aquí
  size: "little" | "medium" | "big"; // Puedes usar literales de cadena aquí
  image?: File | null; // Ajusta según tu necesidad
  description?: string;

  // Ubicación
  province: string;
  city: string;
  neighborhood: string;
  reference?: string;
}

 * 
 */
