import mongoose, { Schema, model, models } from "mongoose";
import { ILocation } from "../interfaces/IPet.back";

const LocationSchema = new Schema<ILocation>(
  {
    /**
     * 
       _id: {
      type: Schema.Types.ObjectId,
    },
     */
    province: {
      type: String,
      required: [true, "El campo provincia es requerido "],
    },
    city: {
      type: String,
      required: [true, "El campo ciudad es requerido "],
    },

    //vecindario barrio
    neighborhood: {
      type: String,
      required: [false, "El barrio zona es requerido"],
    },

    /*
  street: {
    type: String,
    required: [false, "Street is required"],
  },
  numberAddress: {
    type: String,
    required: [false, "Number is required"],
  },

*/

    reference: {
      type: String,
      required: [false, "La descripcion de la zona es requerida"],
    },
  },

  {
    timestamps: true, //guarda la hora de creacion
    //TODO:mongo guarda los nombres de las tablas en plural con s , con esto obligo a que la cree como esta descripta 😉
    collection: "Location",
  }
);

export const Location = models.Location || model("Location", LocationSchema);
