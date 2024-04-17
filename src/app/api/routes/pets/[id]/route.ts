import Pet from "@/app/api/models/Pet";
import { handlerError } from "@/app/api/helpers/HandlerError";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { _delete, _getById, _update } from "@/app/api/services/_Pet_service";
// TODO: metodo que devuleve mascotas por id
export async function GET(req: Request, { params }: Params) {
  let id = params.id;
  try {
    const petFound = await _getById(id);
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

//TODO: put update
export async function PUT(req: Request, { params }: Params) {
  let body = await req.json();
  let id = params.id;
  try {
    const petUpdated = await _update(id, body);
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

export async function DELETE(req: Request, { params }: Params) {
  let id = params.id;
  try {
    const petDeleted = await _delete(id);
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
