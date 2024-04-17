import mongoose, { model, Schema, models } from "mongoose";

/*
id?:string,///OPTIONAL SE GENERA SOLO
name:string,
color:string,
height:number,
race:string,
description:string    
*/
const SchemaPet = new Schema(
  {
    //FIXME: el _id se genera automaticamente en mongodb

    name: {
      type: String,
      required: [true, "the name is required verify"],
      min: [2, "the min character is 2 and max 30"],
      max: [20, "the max character is 20"],
    },
    race: {
      type: String,
      required: [true, "the race is required verify!!"],
    },
    //TODO: color, altura y raza vendran selecccionados por selectores 🤠
    color: {
      type: String,
      required: [true, "the options color is required "],
    },

    age: {
      type: Number,
      required: [true, "the age is required"],
    },
    height: {
      type: String,
      required: [true, "the height pet is required verify"],
    },

    description: {
      type: String,
      min: [1, "the min character is 2 "],
      max: [100, "the max character is 100"],
    },
  },
  {
    timestamps: true, //guarda la hora de creacion
    //TODO:mongo guarda los nombres de las tablas en plural con s , con esto obligo a que la cree como esta descripta 😉
    collection: "Pet",
  }
);

const Pet = models.Pet || model("Pet", SchemaPet);
export default Pet;
