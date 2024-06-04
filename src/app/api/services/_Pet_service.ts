import DB from "@/libs/DB";

import Pet from "@/app/api/models/Pet";
import { IPet } from "@/interfaces/IPet";
import { handlerError } from "@/app/api/utils/HandlerError";
/**
 TODO: =======SERVICES PETS========
 modelo
 id?: string; ///OPTIONAL SE GENERA SOLO
  name: string;
  race: string;
  color: string;
  age: number;
  height: string;
  description: string;
}
 */

export const _get = async () => {
  try {
    DB();
    const listPets = await Pet.find();

    return listPets;
  } catch (error) {
    handlerError(error);
  }
};

export const _post = async (body: IPet | IPet[]) => {
  try {
    DB();
    //por ahi el usuario quiere agregar varias mascotas de una sola vez
    if (Array.isArray(body)) {
      // Si body es un array, creamos múltiples mascotas
      const pets_created = await Pet.create(body);
      return pets_created;
    } else {
      const pet_created = await Pet.create(body);

      return pet_created;
    }
  } catch (error) {
    handlerError(error);
  }
};

export const _getById = async (id: string) => {
  try {
    DB();
    const petFound = await Pet.findById(id);
    return petFound;
  } catch (error) {
    handlerError(error);
  }
};

export const _update = async (id: string, body: IPet) => {
  try {
    DB();
    const petUpdated = await Pet.findByIdAndUpdate(id, body, {
      new: true,
    });
    return petUpdated;
  } catch (error) {
    handlerError(error);
  }
};

export const _delete = async (id: string) => {
  try {
    DB();
    const petDeleted = await Pet.findByIdAndDelete(id);
    return petDeleted;
  } catch (error) {
    handlerError(error);
  }
};
