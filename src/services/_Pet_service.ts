import DB from "@/libs/DB";
import mongoose from "mongoose";
import Pet from "@/models/Pet";
import { IPet } from "@/interfaces/IPet";
import { handlerError } from "@/utils/HandlerErros";
/**
 TODO: =======SERVICES PETS========
 
 */

export const _get = async () => {
  try {
    //validar query
    DB();
    const listPets = await Pet.find();

    return listPets;
  } catch (error) {
    handlerError(error);
  }
};

/**
 id?: string; ///OPTIONAL SE GENERA SOLO
  name: string;
  race: string;
  color: string;
  age: number;
  height: string;
  description: string;
};
 */

export const _post = async (body: IPet) => {
  try {
    const pet_created = await Pet.create(body);

    return pet_created;
  } catch (error) {
    handlerError(error);
  }
};

/**






export const _get = async () => {
  try {
    //validar query
    DB();
    //const listPets = await
    return;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      console.log(error.message);
      return Response.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    if (error instanceof Error) {
      console.log(error.message);
      return Response.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
};

 export const _get = async () => {
  try {
    //validar query
    DB();
    //const listPets = await
    return;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      console.log(error.message);
      return Response.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    if (error instanceof Error) {
      console.log(error.message);
      return Response.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
};
 
 */
