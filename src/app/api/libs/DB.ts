import mongoose from "mongoose";
import createRoles from "../helpers/InitializeRole";
//TODO: conexion a mongodb , puede usar mongo compas o atlas
// recordar que mongo genera un id de tipo  ObjectId (objeto) => _id

export default async function DB() {
  try {
    let db = null;

    if (db) {
      return db;
    }

    db = await mongoose.connect(`${process.env.DB_URI}`);
    console.log("========== DB mongodb  linstening ⚡ ⚡============");

    // Inicializa el modelo Role si aún no existe

    await createRoles();

    return db;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
