import { Schema } from "mongoose";

interface ILocation {
  // _id?: Schema.Types.ObjectId;
  province: string;
  city: string;
  neighborhood: string;
  reference?: string;
}

interface IPet_Back {
  name: string;
  status: string; // "adoption" | "found" | "lost";
  species: string; // "dog" | "cat";
  breed: string;
  gender: string; // "male" | "female";
  colors: string[];
  age: string; // "puppy" | "adult" | "senior";
  size: string; // "little" | "medium" | "big";
  image?: {
    url: string;
  };
  description?: string;
  location?: Schema.Types.ObjectId | ILocation; // Referencia a Address
}

//require que se exporten como export type
export type { IPet_Back, ILocation };
