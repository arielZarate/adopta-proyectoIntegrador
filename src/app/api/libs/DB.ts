import mongoose from "mongoose";
import createRoles from "../utils/InitializeRole";
//TODO: conexion a mongodb , puede usar mongo compas o atlas
// recordar que mongo genera un id de tipo  ObjectId (objeto) => _id

export default async function DB() {
  try {
    let db = null;

    if (db) {
      return db;
    }

    db = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      autoIndex: true,
    });
    console.log("========== Conectado a Mongodb Atlas 💥💥 ============");

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
