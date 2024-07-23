import {
  _getPets,
  _postPet,
  _searchPetsByName,
} from "@/app/api/services/_Pet_service";
import { handlerError } from "@/app/api/utils/HandlerError";

//======================================
//TODO: este metodo get devuelve una lista de mascotas o una mascota por nombre (query)
//======================================
/**
 * 
version 2 de como obtener el query de searchParams
   debe usar ---NextResponse---- 
  let searchParams = req.nextUrl.searchParams;
  let query = searchParams.get("query");
 */

//trabaja como ruta y controlador a la vez
export async function GET(req: Request, res: Response) {
  let url = new URL(req.url);
  let urlSearchParams = url.searchParams;
  //TODO: search es el parametro que busca podria ser otro nombre tambien
  let searchName = urlSearchParams.get("search");

  try {
    const pets = await _getPets(); //trae todos los pets

    if (!pets || pets.length === 0) {
      console.error("no hay datos en el back de mascotas");
      return Response.json({
        message: "Mascotas No Encontradas",
        status: 404,
      });
    }

    const petFound = _searchPetsByName(pets, searchName);
    if (!petFound) {
      console.log(` pet by query ${searchName} not found `);
      return Response.json(
        `No ha sido posible encontrar una mascota con el nombre  ${searchName} , intente con otro nombre`,
        {
          status: 400,
        }
      );
    }

    //por false solo busca de forma predeterminada
    else {
      return Response.json(pets);
    }
  } catch (error) {
    handlerError(error);
  }
}

//post debe usarse con la palabra post no usar handlers ni otro name
export const POST = async (req: Request, res: Response) => {
  try {
    const formData = await req.formData();

    const result = await _postPet(formData);

    //console.log("result", result);

    if (!result) {
      return Response.json({ status: 404, message: "Mascota no creada" });
    }

    return Response.json(
      JSON.stringify({
        message: "Masscota creada con exito",
        payload: result,
        status: 201,
      })
      /**
       * {
        status: 201,
      }
       * 
       */
    );
  } catch (error) {
    handlerError(error);
  }
};
