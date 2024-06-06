import mongoose, { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  province: {
    type: String,
    required: [true, "Province is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },

  //vecindario barrio
  neighborhood: {
    type: String,
    required: [false, "Neighborhood is required"],
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
    required: [false, "description is required"],
  },
});

const Address = models.Address || model("Address", AddressSchema);

export default Address;
