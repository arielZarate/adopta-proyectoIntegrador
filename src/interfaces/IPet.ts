//===========INTERFACES===============

export interface IPet {
  id?: string; ///OPTIONAL SE GENERA SOLO
  name: string;
  race: string;
  color: string;
  age: number;
  height: string;
  description: string;
}

export type ArrayPets = {
  pets: IPet[];
};
