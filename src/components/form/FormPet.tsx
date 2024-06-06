"use client";

import FormImages from "@/components/form/FormFiles";
import FormAddres from "./FormAddres";
//================use hook form================
import usePetFormHook from "@/hooks/usePetFormHooks";
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
  const { handleChange, handleColorChange, data, handleSubmit, updateData } =
    usePetFormHook();

  return (
    <div className="container min-h-screen w-full my-24 py-8 mx-auto">
      <section className="max-w-4xl px-10 py-4 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Formulario Mascotas
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-4">
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
                className="block w-full px-4 py-[10px] mt-2   placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white  text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300text-sm "
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
                className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  h-20 py-2.5 text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300 resize-none"
              />
            </div>
            {/*files */}
            <div className=" md:-mt-10 sm:-mt-40">
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
                Selecciona los colores de la mascota (Max 2*)
              </label>

              <div className="text-gray-700 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring py-5">
                <div className="grid grid-cols-3 gap-3 mx-1 text-sm">
                  {colorOptions.map((color) => (
                    <label key={color.id} className="mx-1 flex items-center">
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
                        className={`inline-block w-4 h-4 rounded-full  mr-2 border border-black`}
                        style={{ backgroundColor: color.color }}
                      />

                      <span className=""> {color.name}</span>
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

          {/* Línea divisoria */}
          <hr className="my-6 border-gray-400  border-t" />

          {/* address */}

          <FormAddres data={data} handleChange={handleChange} />

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
