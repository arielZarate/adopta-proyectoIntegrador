import User from "@/app/api/models/User";
import { _get, _post } from "@/app/api/services/_User_service";
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

export async function GET(req: Request) {
  //TODO: asi obtengo la query de la url si existe query
  //=========LA VERDAD LA COMPLICO ACA NEXT 🫠 (con express era req.search y nada mas)=================
  let url = new URL(req.url);
  let urlSearchParams = url.searchParams;
  //TODO: search es el parametro que busca podria ser otro nombre tambien
  let searchEmail = urlSearchParams.get("search");

  try {
    const users = await _get(); //trae todos los pets

    console.log(users);
    if (!users) {
      console.error("users not found");
      return Response.json("users not found 🥲", {
        status: 404,
      });
    }

    //ahora valido por query==name
    if (searchEmail) {
      //ahora filtro por cada name 😁

      console.log("el search emial es", searchEmail);
      const userFound = users.filter((u) => u.email.includes(searchEmail));

      if (!userFound) {
        console.log(` user by email ${searchEmail} not found `);
        return Response.json(`user by email ${searchEmail} not found`, {
          status: 400,
        });
      }
      console.log("se encontro a ", userFound);
      return Response.json(userFound);
    }

    //por false solo busca de forma predeterminada
    else {
      return Response.json(users);
    }
  } catch (error) {}
}

//post debe usarse con lapalabra post no usar handlers ni otro name
export const POST = async (req: Request) => {
  /**
   const { name, lastName, age, phone, address, my_pets, email, password }
   */

  try {
    const body = await req.json();
    ///si hay que validar algo lo hacemos en el controller

    const user = await _post(body);

    if (!user) {
      console.log("Error:user no created");
      return Response.json("Error:Schema User not created", { status: 400 });
    }

    return Response.json(user);
  } catch (error) {
    handlerError(error);
  }
};
