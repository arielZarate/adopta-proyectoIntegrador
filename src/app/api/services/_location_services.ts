import { Location } from "@/app/api/models/Location";
import { handlerError } from "../utils/HandlerError";
import { ILocation } from "../interfaces/IPet.back";
import DB from "@/libs/DB";
import mongoose from "mongoose";

//la creacion una nueva ubicacion o direccion de la mascota devuelve el objectId(9872346hfkj) de mongoDB
const _postLocation = async (
  { province, city, neighborhood, reference }: Partial<ILocation>,
  session: mongoose.ClientSession
) => {
  try {
    //  console.log(province, city, neighborhood, reference);
    await DB(); //inicio la conexion
    const newLocation = new Location({
      city,
      province,
      neighborhood,
      reference,
    });

    await newLocation.save({ session });
    // console.log("adress created", newAddress);
    return newLocation._id; //retorno solo el id
  } catch (error) {
    handlerError(error);
  }
};

export { _postLocation };
