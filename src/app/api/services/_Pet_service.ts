import DB from "@/libs/DB";
import Pet from "@/app/api/models/Pet";
import { cloudinary, uploadCloudinary } from "@/app/api/utils/cloudinary";
import { handlerError } from "@/app/api/utils/HandlerError";
import { _postLocation } from "./_location_services";
import { ILocation } from "../interfaces/IPet.back";
import { IPet_Back } from "../interfaces/IPet.back"; //interface del backend OJO
import mongoose, { ClientSession } from "mongoose";

//GET
export const _getPets = async (): Promise<IPet_Back[]> => {
  try {
    await DB();

    const listPets: IPet_Back[] = await Pet.find().populate("location");

    //  console.log(listPets);
    return listPets;
  } catch (error) {
    handlerError(error);
    return [];
  }
};

// GET SEARCH

export const _searchPetsByName = (
  pets: IPet_Back[],
  searchName: string | null
) => {
  if (!searchName) return pets;
  const petFound = pets.filter((pet) => pet.name.includes(searchName));
  return petFound;
};

///POST

export const _postPet = async (formData: FormData) => {
  let session: ClientSession | null = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction(); //incia la transaccion

    //=================== location=======================================
    const province = formData.get("province") as string;
    const city = formData.get("city") as string;
    const neighborhood = formData.get("neighborhood") as string;
    const reference = formData.get("reference") as string;

    // Crear objetos tipados
    const locationData: Partial<ILocation> = {};

    // Asignar valores a addressData
    locationData.province = province;
    locationData.city = city;
    locationData.neighborhood = neighborhood;
    locationData.reference = reference;

    const id_location = await _postLocation(locationData, session);
    //==================image=========================================
    const imageFile = formData.get("image") as File;
    //guardo la imagen en cloudinary
    let imageUrl: string = "";
    if (imageFile) {
      // console.log("Service File", imageFile);
      imageUrl = await uploadCloudinary(imageFile);

      console.log("url image ", imageUrl);
    } else {
      console.log("Not exist image ");
    }
    //==================pet=====================================
    const name = formData.get("name") as string;
    const status = formData.get("status") as string; //as string | undefined;
    const species = formData.get("species") as string;
    const breed = formData.get("breed") as string;
    const gender = formData.get("gender") as string;
    const colors = formData.get("colors") as string;
    const age = formData.get("age") as string;
    const size = formData.get("size") as string;
    const description = formData.get("description") as string;

    // Asignar valores a petData
    // Crear objetos tipados
    const petData: Partial<IPet_Back> = {
      name,
      status,
      species,
      breed,
      gender,
      colors: colors ? colors.split(",") : [],
      age,
      size,
      description,
      //aca asigno ala imagen la url de cloudinary
      image: { url: imageUrl },
      //aca asigno a address
      location: id_location,
    };

    // Guardar la mascota en la BD
    const petCreated = await Pet.create(petData);

    if (!petCreated) {
      throw new Error(`Error al crear la mascota`);
    }

    await session.commitTransaction(); //termina la transaccion

    //console.log( petCreated);
    return petCreated;
  } catch (error) {
    if (session) {
      await session.abortTransaction();
    }
    handlerError(error);
    throw error;
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

//============================================
export const _getPetById = async (id: string) => {
  try {
    DB();
    const petFound = await Pet.findById(id);
    return petFound;
  } catch (error) {
    handlerError(error);
  }
};

export const _updatePet = async (id: string, body: IPet_Back) => {
  try {
    DB();
    const petUpdated = await Pet.findByIdAndUpdate(id, body, {
      new: true,
    });
    return petUpdated;
  } catch (error) {
    handlerError(error);
  }
};

export const _deletePet = async (id: string) => {
  try {
    DB();
    const petDeleted = await Pet.findByIdAndDelete(id);
    return petDeleted;
  } catch (error) {
    handlerError(error);
  }
};

/**
 * 
 * 
 * 

 metodo post

 // Crear objetos tipados

  let petData: Partial<IPet_Back> = {};
  let addressData: Partial<IAddress> = {};
  let imageFile: File | null = null;

  Object.entries(formDataObj).forEach(([key, value]) => {
    if (key === "image") {
      imageFile = value as File;
    } else if (
      ["province", "city", "neighborhood", "reference"].includes(key)
    ) {
      if (typeof value === "string") {
        addressData[key as keyof IAddress] = value;
      }
    } else if (
      [
        "name",
        "status",
        "species",
        "breed",
        "gender",
        "color",
        "age",
        "size",
        "description",
      ].includes(key)
    ) {
      if (key === "color" && typeof value === "string") {
        petData[key as keyof IPet_Back] = value.split(",") as any; // 'color' es singular en IPet_Back
      } else if (typeof value === "string") {
        petData[key as keyof IPet_Back] = value as any;
      }
    }
  });

  //console.log("Pet Data:", petData);
  //console.log("Address Data:", addressData);
  //console.log("Image File:", imageFile);







 */
