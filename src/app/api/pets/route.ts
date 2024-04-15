import { IPet, ArrayPets } from "@/interfaces/IPet";
import Pet from "@/models/Pet";
import { _get, _post } from "@/services/_Pet_service";
import { handlerError } from "@/utils/HandlerErros";

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

export async function GET(req: Request) {
  //TODO: asi obtengo la query de la url si existe query
  //=========LA VERDAD LA COMPLICO ACA NEXT 🫠 (con express era req.search y nada mas)=================
  let url = new URL(req.url);
  let urlSearchParams = url.searchParams;
  //TODO: search es el parametro que busca podria ser otro nombre tambien
  let query = urlSearchParams.get("search");

  try {
    if (query) {
      const petFound = await Pet.findOne({
        name: query,
      });

      if (!petFound) {
        console.log(` pet by query ${query} not found `);
        return Response.json(`Pet by query ${query} not found`, {
          status: 400,
        });
      }

      return Response.json(petFound);
    }

    //por false solo busca de forma predeterminada
    else {
      const pets = await _get();
      if (!pets) {
        console.error("pets not found");
        return Response.json("Pet not found 🥲", {
          status: 404,
        });
      }

      return Response.json(pets);
    }
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

    if (!pet) {
      console.log("Error:pet no created");
      return Response.json("Error:Schema Pet not created", { status: 400 });
    }

    return Response.json(pet);
  } catch (error) {
    handlerError(error);
  }
};
