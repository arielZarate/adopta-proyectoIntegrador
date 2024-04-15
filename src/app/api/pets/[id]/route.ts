import Pet from "@/models/Pet";
import { handlerError } from "@/utils/HandlerErros";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// TODO: metodo que devuleve mascotas por id
export async function GET(req: Request, { params }: Params) {
  try {
    let id = params.id;
    //conectar bd o llamar la service
    const petFound = await Pet.findById(id);
    if (!petFound) {
      console.log(` pet by id ${id} not found `);
      return Response.json(`Pet by id ${id} not found`, {
        status: 400,
      });
    }

    return Response.json(petFound);
  } catch (error) {
    handlerError(error);
  }
}

export async function PUT(req: Request, { params }: Params) {
  try {
    let body = await req.json();
    let id = params.id;

    console.log("id", id);

    //llamar a service

    const petUpdated = await Pet.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!petUpdated) {
      console.log(` update falled`);
      return Response.json(`update falled`, {
        status: 400,
      });
    }

    return Response.json(petUpdated);
  } catch (error) {
    handlerError(error);
  }
}

export async function DELETE(req: Request, { params }: Params, res: Response) {
  try {
    let id = params.id;
    const petDeleted = await Pet.findByIdAndDelete(id);
    if (!petDeleted) {
      console.log(`deleted not succesfull`);
      return Response.json(`deleted not succesfull`, {
        status: 400,
      });
    }

    return Response.json(petDeleted);
  } catch (error) {
    handlerError(error);
  }
}
