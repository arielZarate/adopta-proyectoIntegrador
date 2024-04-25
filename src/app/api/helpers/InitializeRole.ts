import Role from "../models/Role";
import TypeRole from "../Types/Role";
import { handlerError } from "./HandlerError";

// Esta función crea un array de roles cuando inicia la app, solo los crea una vez
async function createRoles(): Promise<void> {
  try {
    // Usamos estimatedDocumentCount() en lugar de countDocuments()
    const count: number = await Role.estimatedDocumentCount();

    //console.log(count);
    if (count === 0) {
      const roles = await Promise.all([
        // Recibe un objeto name: con el valor de la constante enum
        await new Role({ nameRole: TypeRole.USER }).save(),
        await new Role({ nameRole: TypeRole.MODERATOR }).save(),
        await new Role({ nameRole: TypeRole.ADMIN }).save(),
      ]);

      console.log(roles);
      console.log("create roles successfull");
    }
  } catch (error) {
    handlerError(error);
  }
}

export default createRoles;
