import mongoose, { Schema, model, models } from "mongoose";

const AddressSchema = new Schema({
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
    required: [true, "Neighborhood is required"],
  },
  street: {
    type: String,
    required: [true, "Street is required"],
  },
  number: {
    type: String,
    required: [true, "Number is required"],
  },
  zone: {
    type: String,
    required: [true, "Zone description is required"],
  },
});

const Address = models.Address || model("Address", AddressSchema);

export default Address;
