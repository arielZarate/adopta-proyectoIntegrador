import mongoose, { model, Schema, models } from "mongoose";

/*
id?:string,///OPTIONAL SE GENERA SOLO
name:string,
breed,
species,
gender,
color:string,
age,
height:number,
image,
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

    status: {
      type: String,
      required: [true, "the status is required"],
      enum: ["adoption", "found", "lost"], // Only allows 'adoption', 'found', or 'lost'
    },
    species: {
      type: String,
      required: [true, "the species is required , dog or cat"],
      enum: ["dog", "cat"], // Solo permite 'dog' (perro) o 'cat' (gato)
    },
    breed: {
      type: String,
      required: [true, "the race is required verify"],
    },

    gender: {
      type: String,
      required: [true, "the gender is required"],
      enum: ["male", "female"],
    },
    //TODO: color, altura y raza vendran selecccionados por selectores 🤠
    color: {
      type: String,
      required: [true, "the options color is required "],
    },

    age: {
      type: String,
      required: [true, "the age is required"],
      enum: ["puppy", "adult", "senior"],
    },
    height: {
      type: String,
      required: [true, "the height pet is required verify"],
      enum: ["little", "medium", "big"], // Solo permite pequeño mediano y grande
    },

    image: {
      url: String,
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
