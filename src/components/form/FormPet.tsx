"use client";

import React, { useState } from "react";
import FormImages from "@/components/form/FormFiles";
import { ImageType, ImageListType } from "react-images-uploading";
import { IPet } from "@/interfaces/IPet";
import {
  ageOptions,
  genderOptions,
  sizeOptions,
  speciesOptions,
  statusOptions,
} from "@/helpers/ArrayOptions";

const FormPet = () => {
  const [data, setData] = useState<IPet>({
    name: "",
    species: "",
    status: "",
    breed: "",
    gender: "",
    color: "",
    age: "",
    size: "",
    image: { url: "" },
    description: "",
    address: "", // Assuming you have an address field in your IPet interface
  });
  const [file, setFile] = useState<ImageType | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    //console.log(name, value);

    setData({
      ...data,
      [name]: value,
    });
  };

  const SendData = async (formData: FormData) => {
    try {
      const res = fetch("/api/upload", {
        method: "POST",
        body: formData,
        //no se si hace falta mandar el "contect-type"
        headers: { "Content-Type": "multipart/form-data" },
      });

      const dataOut = await (await res).json();
      console.log(dataOut);
      return dataOut;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      //Asi insertamos los elementos al formData
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === "object" && value !== null) {
          formData.append(key, JSON.stringify(value));
        }
      }

      if (file?.file) {
        formData.append("image", file.file);
      }

      SendData(formData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="container min-h-screen w-full my-24 py-8 mx-auto">
      <div className="border-2 border-slate-500 p-5 rounded-md">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center"
        >
          <h1 className="text-center text-slate-500 font-bold text-xl py-4 col-span-full">
            Formulario de mascota
          </h1>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="name" className="flex justify-start">
              Nombre de mascota
            </label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            />
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="species" className="flex justify-start">
              Especie
            </label>
            <select
              id="species"
              name="species"
              onChange={handleChange}
              value={data.species}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            >
              <option value="">Seleccione una especie</option>

              {speciesOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="status" className="flex justify-start">
              Estado
            </label>
            <select
              id="status"
              name="status"
              onChange={handleChange}
              value={data.status}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            >
              <option value="">Seleccione un estado</option>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="breed" className="flex justify-start">
              Raza
            </label>
            <input
              id="breed"
              type="text"
              name="breed"
              onChange={handleChange}
              value={data.breed}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            />
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="gender" className="flex justify-start">
              Género
            </label>
            <select
              id="gender"
              name="gender"
              onChange={handleChange}
              value={data.gender}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            >
              <option value="">Seleccione un genero</option>
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="color" className="flex justify-start">
              Color
            </label>
            <input
              id="color"
              type="text"
              name="color"
              onChange={handleChange}
              value={data.color}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            />
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="age" className="flex justify-start">
              Edad
            </label>
            <select
              id="age"
              name="age"
              onChange={handleChange}
              value={data.age}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            >
              <option value="">Seleccione una edad</option>
              {ageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-slate-700 font-bold text-sm">
            <label htmlFor="size" className="flex justify-start">
              Tamaño
            </label>
            <select
              id="size"
              name="size"
              onChange={handleChange}
              value={data.size}
              className="border-2 border-slate-500 rounded-md p-2 w-72"
            >
              <option value="">Seleccione un tamaño</option>
              {sizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-slate-700 font-bold col-span-full">
            <label htmlFor="description" className="flex justify-start">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={data.description}
              className="border-2 border-blue-500 rounded-md px-4 py-7 w-64"
            />
          </div>

          <div className="col-span-full">
            <FormImages image={file} setImage={setFile} />
          </div>

          <div className="mt-4 col-span-full flex justify-center">
            <button
              type="submit"
              className="font-bold bg-blue-600 text-white w-60 py-4 rounded-lg"
            >
              Crear mascota
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPet;

/*

 

    <div className="container  min-h-screen w-full  my-24 py-8 mx-auto">
      <div className=" border-2 border-slate-500 p-5  rounded-md">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center "
        >
          <h1 className="text-center text-slate-500 font-bold text-xl py-4 col-span-full">
            Formulario de mascota
          </h1>

          {[
            { label: "Nombre de mascota", name: "name", type: "text" },
            { label: "Especie", name: "species", type: "text" },
            { label: "Estado", name: "status", type: "text" },
            { label: "Raza", name: "breed", type: "text" },
            { label: "Género", name: "gender", type: "text" },
            { label: "Color", name: "color", type: "text" },
            { label: "Edad", name: "age", type: "number" },
            { label: "Tamaño", name: "size", type: "text" },
          ].map((field) => (
            <div key={field.name} className="text-slate-700 font-bold text-sm">
              <label htmlFor={field.name} className="flex justify-start">
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                onChange={handleChange}
                value={data[field.name as keyof IPet] as string}
                className="border-2 border-slate-500 rounded-md p-2 w-72"
              />
            </div>
          ))}

          <div className="text-slate-700 font-bold col-span-full">
            <label htmlFor="description" className="flex justify-start">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={data.description}
              className="border-2 border-blue-500 rounded-md px-4 py-7 w-64"
            />
          </div>

          <div className=" col-span-full ">
            <FormImages image={file} setImage={setFile} />
          </div>

          <div className="mt-4 col-span-full flex justify-center">
            <button
              type="submit"
              className="font-bold bg-blue-600 text-white w-60 py-4 rounded-lg"
            >
              Crear mascota
            </button>
          </div>
        </form>
      </div>
    </div>

*/
