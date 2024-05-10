import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { _getById, _delete, _update } from "@/app/api/services/_User_service";
import { handlerError } from "@/app/api/utils/HandlerError";
//TODO: metodos controllers de users

// TODO: metodo que devuleve mascotas por id
export async function GET(req: Request, { params }: Params) {
  let id = params.id;
  try {
    const userFound = await _getById(id);
    if (!userFound) {
      console.log(` user by id ${id} not found `);
      return Response.json(`user by id ${id} not found`, {
        status: 400,
      });
    }

    return Response.json(userFound);
  } catch (error) {
    handlerError(error);
  }
}

//TODO: metodo put debe pasar los datos del parciales o completos y un id
export async function PUT(req: Request, { params }: Params) {
  let id = params.id;
  let body = await req.json();
  try {
    console.log("enviando body", body);
    const userUpdated = await _update(id, body);
    if (!userUpdated) {
      console.log(` update falled`);
      return Response.json(`update falled`, {
        status: 400,
      });
    }

    return Response.json(userUpdated);
  } catch (error) {
    handlerError(error);
  }
}

//TODO: metodo delete debe pasar un id
export async function DELETE(req: Request, { params }: Params) {
  let id = params.id;
  try {
    const userDeleted = await _delete(id);
    if (!userDeleted) {
      console.log(`deleted not succesfull`);
      return Response.json(`deleted not succesfull`, {
        status: 400,
      });
    }

    return Response.json(userDeleted);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return Response.json({
        message: error.message,
        status: 500,
      });
    }
  }
}
