import mongoose from "mongoose";

export default async function DB() {
  try {
    let db = null;

    if (db) {
      return db;
    }

    db = await mongoose.connect(`${process.env.DB_URI}`);
    console.log("========== DB mongodb  linstening ⚡ ⚡============");

    return db;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}
