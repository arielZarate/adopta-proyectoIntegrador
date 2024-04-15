import DB from "@/libs/DB";
import { Pet } from "@/interfaces/IPet";

//FIXME:  ((para usar el metodo 'Response' debe tener typescript en su version >=4.5 😀

//======================================
//TODO: este metodo get devuelve una lista de users o un user por nombre (query)
//======================================
export async function GET(req: Request, res: Response) {
  try {
    //validar query
    DB();
    //const listPets = await
    return Response.json("users");
  } catch (error) {
    if (error instanceof Error) {
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
}

//TODO: metodo post debe pasarer un body
//FIXME: debe usarse con la palabra post no usar handlers ni otro name
export const POST = async (req: Request) => {
  try {
    let { name, color, height, race, description } = await req.json();
    console.log(name, color, height, race, description);

    // llamamos al services y pasamos los datos
    return Response.json("post  users");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return Response.json({
        message: error.message,
        status: 500,
      });
    }
  }
};
