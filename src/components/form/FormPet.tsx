"use client";

import React, { useState } from "react";
import FormImages from "@/components/form/FormFiles";

import { ImageType } from "react-images-uploading";
import { IPet } from "@/interfaces/IPet";
import {
  ageOptions,
  genderOptions,
  sizeOptions,
  speciesOptions,
  statusOptions,
  breedOptions,
  colorOptions,
} from "@/helpers/ArrayOptions";

const FormPet = () => {
  const [data, setData] = useState<IPet>({
    name: "",
    species: "",
    status: "",
    breed: "",
    gender: "",
    colors: [],
    age: "",
    size: "",
    image: null,
    description: "",
    address: "", // Assuming you have an address field in your IPet interface
  });

  //=============metodo para actualizar el estado=====================
  const updateData = (name: keyof IPet, value: IPet[keyof IPet]) => {
    //console.log(name, value);
    setData((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    updateData(name as keyof IPet, value);
  };

  //===================================================================
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Verificar si el color ya está seleccionado
    if (data.colors.includes(value)) {
      // Si el color ya está seleccionado, removerlo del array
      setData((prevState) => ({
        ...prevState,
        colors: prevState.colors.filter((color) => color !== value),
      }));
    } else {
      // Verificar si se ha alcanzado el límite máximo de colores seleccionados
      if (data.colors.length < 2) {
        // Si no se ha alcanzado el límite, agregar el color seleccionado
        setData((prevState) => ({
          ...prevState,
          colors: [...prevState.colors, value],
        }));
      } else {
        // Si se ha alcanzado el límite máximo, puedes manejar una advertencia o lógica adicional aquí
        console.log("Solo se pueden seleccionar hasta dos colores.");
        // También podrías mostrar una alerta o mensaje al usuario si es necesario
      }
    }
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

      /*
      if (file?.file) {
        formData.append("image", file.file);
      }
     */

      console.log(data);
      //  SendData(formData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="container min-h-screen w-full my-24 py-8 mx-auto">
      <section className="max-w-4xl px-10 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Formulario Mascotas
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2  p-4">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Ingrese un nombre de mascota"
                value={data.name}
                className="block w-full px-4 py-[11px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm "
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="status"
              >
                Estado
              </label>
              <select
                id="status"
                name="status"
                onChange={handleChange}
                value={data.status}
                className="block w-full px-4 py-[13px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 focus:ring-green-300 focus:ring-opacity-40 dark:focus:border-green-300 focus:outline-none focus:ring text-sm"
              >
                <option value="">Seleccione una opcion</option>
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="species"
              >
                Tipo
              </label>
              <select
                id="species"
                name="species"
                onChange={handleChange}
                value={data.species}
                className="block w-full px-4 py-[13px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring text-sm"
              >
                <option value="">Seleccione una opcion</option>

                {speciesOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name} {option.icon}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="size"
              >
                Tamaño
              </label>
              <select
                id="size"
                name="size"
                onChange={handleChange}
                value={data.size}
                className="block w-full px-4 py-[13px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring text-sm"
              >
                <option value="">Seleccione una opcion</option>
                {sizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* raza */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="breed"
              >
                raza
              </label>

              <select
                id="breed"
                name="breed"
                onChange={handleChange}
                value={data.breed}
                className="block w-full px-4 py-[13px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring text-sm"
              >
                <option value="">Seleccione una opcion </option>

                <optgroup label="Gatos 🐈">
                  {breedOptions.cat.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Perros 🦮">
                  {breedOptions.dog.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="gender"
              >
                Género
              </label>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
                value={data.gender}
                className="block w-full px-4 py-[13px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring text-sm"
              >
                <option value="">Seleccione una opcion</option>
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/*age */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="age"
              >
                Edad
              </label>
              <select
                id="age"
                name="age"
                onChange={handleChange}
                value={data.age}
                className="block w-full px-4 py-[13px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring text-sm"
              >
                <option value="">Seleccione una opcion</option>
                {ageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/*description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Descripcion
              </label>

              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                value={data.description}
                rows={0}
                placeholder="ingrese una description "
                className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300"
              />
            </div>
            {/*files */}
            <div className=" md:-mt-10 sm:-mt-56">
              <FormImages
                image={data.image}
                //setImage={(image) => setData({ ...data, image })}
                setImage={(image) => updateData("image", image)}
              />
            </div>

            {/*colors */}

            <div className="">
              <label
                className="text-gray-700 dark:text-gray-200 text-sm"
                htmlFor="color"
              >
                Selecciona los colores de la mascota (hasta dos)
              </label>

              <div className="text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring py-5">
                <div className="grid grid-cols-3 gap-3 mx-1 text-sm">
                  {colorOptions.map((color) => (
                    <label key={color.id} className="mx-1">
                      <input
                        id={color.id.toString()}
                        type="checkbox"
                        name={color.name}
                        //  checked={color.name}
                        checked={data.colors.includes(color.name)}
                        onChange={handleColorChange}
                        className="m-1"
                        value={color.name}
                      />

                      <span
                        className={`w-4 h-4 rounded-full inline-block mr-2 border border-black`}
                        style={{ backgroundColor: color.color }}
                      />

                      {color.name}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap text-sm">
                <strong className="text-slate-900">
                  Colores seleccionados:
                </strong>
                {data.colors.map((color, index: number) => (
                  <div key={index} className="mr-1">
                    <p> {color}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="p-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-sm"
            >
              Crear Mascota
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormPet;
