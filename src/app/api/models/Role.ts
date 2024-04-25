import { Schema, model, models } from "mongoose";
import TypeRole from "../Types/Role";
const SchemaRole = new Schema(
  {
    nameRole: {
      type: String,
      required: true,
      unique: true,
      enum: Object.values(TypeRole), // Usando los valores del objeto TypeRole como enum
    },
  },
  {
    timestamps: true,
    collection: "Role",
  }
);

const Role = models.Role || model("Role", SchemaRole);
export default Role;
