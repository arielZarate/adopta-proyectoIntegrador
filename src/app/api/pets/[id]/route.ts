import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

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

export function PUT(req: Request, { params }: Params) {
  try {
    let id = params.id;
    //llamar a service
    return Response.json(` put pet con id ${id}`);
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

export function DELETE(req: Request, { params }: Params, res: Response) {
  try {
    let id = params.id;
    //llamar a service o bd
    return Response.json(`pet delete con id ${params.id} `);
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
