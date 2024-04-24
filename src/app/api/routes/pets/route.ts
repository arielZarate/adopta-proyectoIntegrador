import { IPet, ArrayPets } from "@/interfaces/IPet";
import Pet from "@/app/api/models/Pet";
import { _get, _post } from "@/app/api/services/_Pet_service";
import { handlerError } from "@/app/api/helpers/HandlerError";

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
  let searchName = urlSearchParams.get("search");

  try {
    const pets = await _get(); //trae todos los pets

    if (!pets) {
      console.error("pets not found");
      return Response.json("Pet not found 🥲", {
        status: 404,
      });
    }

    //ahora valido por query==name
    if (searchName) {
      //ahora filtro por cada name 😁
      const petFound = pets?.filter((p: { name: string | string[] }) =>
        p.name.includes(searchName)
      );

      if (!petFound) {
        console.log(` pet by query ${searchName} not found `);
        return Response.json(`Pet by query ${searchName} not found`, {
          status: 400,
        });
      }
      console.log(petFound);
      return Response.json(petFound);
    }

    //por false solo busca de forma predeterminada
    else {
      return Response.json(pets);
    }
  } catch (error) {}
}

//post debe usarse con lapalabra post no usar handlers ni otro name
export const POST = async (req: Request) => {
  /**
   *   const {
    name,
    species,
    breed,
    gender,
    color,
    age,
    height,
    image,
    description,
  } = await req.json();
  
   */

  try {
    const body = await req.json();
    const petsCreated = await _post(body);

    if (!petsCreated) {
      console.error("Error: Pets not created");
      return Response.json("Error: Pets not created", { status: 400 });
    }

    return Response.json(petsCreated);
  } catch (error) {
    handlerError(error);
  }
};
