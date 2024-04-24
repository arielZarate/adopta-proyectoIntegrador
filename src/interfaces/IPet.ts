//===========INTERFACES===============

export interface IPet {
  _id?: string; // OPCIONAL: Se genera automáticamente
  name: string;
  species: string;
  breed: string;
  gender: string;
  color: string;
  age: number;
  height: string;
  image: { url: string };
  description: string;
}

export type ArrayPets = {
  pets: IPet[];
};
