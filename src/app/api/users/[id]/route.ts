import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//TODO: metodos controllers de users

// TODO: metodo que devuleve mascotas por id
export function GET(req: Request, { params }: Params) {
  try {
    let id = params.id;
    //conectar bd o llamar la service

    return Response.json(`get by id ${id}`);
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

//TODO: metodo put debe pasar los datos del parciales o completos y un id
export function PUT(req: Request, { params }: Params) {
  try {
    let id = params.id;
    //llamar a service o bd
    return Response.json(` user pet con id ${id}`);
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

//TODO: metodo delete debe pasar un id
export function DELETE(req: Request, { params }: Params, res: Response) {
  try {
    let id = params.id;
    //llamar a service o bd
    return Response.json(`user delete con id ${params.id} `);
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
