import mongoose, { model, Schema, models } from "mongoose";
import { IPet_Back } from "../interfaces/IPet.back";

const SchemaPet = new Schema<IPet_Back>(
  {
    //FIXME:    // El _id se genera automáticamente en MongoDB, no es necesario especificarlo

    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
      maxlength: [20, "El nombre debe tener como máximo 20 caracteres"],
      collation: { locale: "en", strength: 2 }, // Insensibilidad a mayúsculas y minúsculas
    },

    status: {
      type: String,
      required: [true, "El estado es obligatorio"],
      enum: {
        values: ["adoption", "found", "lost"],
        message: "El estado debe ser 'adopcion', 'encontrado' o 'perdido'",
      },
    },

    species: {
      type: String,
      required: [true, "La especie es obligatoria"],
      enum: {
        values: ["dog", "cat"],
        message: "La especie debe ser 'dog' o 'cat'",
      },
    },

    breed: {
      type: String,
      required: [true, "La raza es obligatoria"],
    },

    gender: {
      type: String,
      required: [true, "El género es obligatorio"],
      enum: {
        values: ["male", "female"],
        message: "El género debe ser 'macho' o 'hembra'",
      },
    },

    colors: {
      type: [String],
      required: [true, "El color es obligatorio"],
    },

    age: {
      type: String,
      required: [true, "La edad es obligatoria"],
      enum: {
        values: ["puppy", "adult", "senior"],
        message: "La edad debe ser 'cachorro', 'adulto' o 'senior/viejo'",
      },
    },

    size: {
      type: String,
      required: [true, "El tamaño es obligatorio"],
      enum: {
        values: ["little", "medium", "big"],
        message: "El tamaño debe ser 'pequeño', 'mediano' o 'grande'",
      },
    },

    image: {
      url: {
        type: String,
        validate: {
          validator: function (v: string) {
            return /^(https?:\/\/.*\.(?:png|jpg|jpeg))$/.test(v);
          },
          message: (props: any) =>
            `${props.value} no es una URL válida de imagen!`,
        },
        required: false, // Ahora es opcional
      },
    },

    description: {
      type: String,
      minlength: [5, "La descripción debe tener al menos 5 carácter"],
      maxlength: [100, "La descripción debe tener como máximo 100 caracteres"],
    },

    // Ejemplo de referencia a otra colección (comentado)
    // address: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Address",
    //   required: true,
    // },

    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: [true, "La ubicación es obligatoria"], // Actualizado a requerido
    },
  },
  {
    timestamps: true, //guarda la hora de creacion
    //TODO:mongo guarda los nombres de las tablas en plural con s , con esto obligo a que la cree como esta descripta 😉
    collection: "Pet",
  }
);

const Pet = models.Pet || model<IPet_Back>("Pet", SchemaPet);
export default Pet;

/*


    name: {
      type: String,
      required: [true, "the name is required verify"],
      min: [2, "the min character is 2 and max 30"],
      max: [20, "the max character is 20"],
      collation: { strength: 3 }, // Configuración para insensibilidad a mayúsculas y minúsculas
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
    size: {
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


*/
