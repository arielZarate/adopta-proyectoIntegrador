import { IPet, ArrayPets } from "@/interfaces/IPet";
import { _get, _post } from "@/services/_Pet_service";
import { handlerError } from "@/utils/HandlerErros";
import { NextResponse } from "next/server";
//======================================
//TODO: este metodo get devuelve una lista de mascotas o una mascota por nombre (query)
//======================================

export async function GET(req: Request) {
  try {
    const pets = await _get();
    if (!pets) {
      console.log("pets not found");
      return Response.json("pets not found 🥲");
    }

    return Response.json(pets);
  } catch (error) {}
}

//post debe usarse con lapalabra post no usar handlers ni otro name
export const POST = async (req: Request) => {
  const { name, race, color, age, height, description } = await req.json();
  // console.log(name, race, color, age, height, description);
  try {
    ///si hay que validar algo lo hacemos en el controller
    let newObj = {
      name,
      race,
      color,
      age,
      height,
      description,
    };

    const pet = await _post(newObj);

    console.log("pet en el controller", pet);
    if (!pet) {
      throw new Error("pet no created ");
    }

    // llamamos al services y pasamos los datos
    return Response.json(pet);
  } catch (error) {
    handlerError(error);
  }
};
