import mongoose, { Schema, model, models } from "mongoose";

const SchemaUser = new Schema(
  {
    name: {
      type: String,
      min: [2, "the name must be mayor the 2 characters"],
      max: [50, "the name must be minor the 50 characters"],
    },
    lastName: {
      type: String,
      min: [2, "the lastName must be mayor the 2 characters"],
      max: [30, "the lastName must be minor the 30 characters"],
    },

    age: {
      type: Number,
      min: [10, "the min age is 10 years"],
      max: [120, "the max age is 120 years"],
    },

    phone: {
      type: String,
      min: [7, "the min digits is 7"],
    },

    roles:
      //array de roles definido
      [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role", //referencia al modelo Role
        },
      ],

    /// FIXME: el domicilio luego lo hare en un nuevo schema
    /**
     address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },

   */
    number: {
      type: Number,
    },

    my_pets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],

    ////////////////datos para el register y login////////////////////////

    email: {
      unique: [true, "the email duplicated error"],
      type: String,
      required: [true, "the email is required"],
    },
    password: {
      type: String,
      required: [true, "the password is required"],
    },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

const User = models.User || model("User", SchemaUser);

export default User;
