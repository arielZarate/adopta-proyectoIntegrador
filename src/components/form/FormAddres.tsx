import React from "react";
import { IPet } from "@/interfaces/IPet";
import { provinces } from "@/helpers/ArrayOptions";

interface FormAddresProps {
  data: IPet;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const FormAddres: React.FC<FormAddresProps> = ({ data, handleChange }) => {
  // console.log(data.city);
  return (
    <>
      <section className="max-w-4xl mb-5 pt-4 pb-8  mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-md font-semibold text-gray-700 capitalize dark:text-white ml-5">
          Ubicacion
          <span className="text-slate-500 font-normal text-sm">
            (Estos campos son requeridos *)
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mx-5">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200 text-sm"
              htmlFor="province"
            >
              Provincia
            </label>

            <select
              id="province"
              name="province"
              onChange={handleChange}
              value={data.province}
              className="block w-full px-4  mt-2 py-[14px] text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-slate-400 focus:ring-slate-300 focus:ring-opacity-40 dark:focus:border-slate-300 focus:outline-none focus:ring text-sm"
            >
              <option value="">Seleccione una opcion </option>

              {provinces.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/** */}

          <div>
            <label
              className="text-gray-700 dark:text-gray-200 text-sm"
              htmlFor="city"
            >
              Localidad/Ciudad
            </label>
            <input
              id="city"
              type="text"
              name="city"
              onChange={handleChange}
              value={data.city}
              //block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300

              //block w-full px-4 py-[11px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-sm
              className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300 text-sm"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200 text-sm"
              htmlFor="neighborhood"
            >
              Barrio/Vecindario
            </label>
            <input
              id="neighborhood"
              type="text"
              name="neighborhood"
              onChange={handleChange}
              value={data.neighborhood}
              className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  py-2.5 text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300 text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="reference"
              className="text-gray-700 dark:text-gray-200 text-sm"
            >
              Referencia
            </label>
            <textarea
              id="reference"
              name="reference"
              onChange={handleChange}
              placeholder="Alguna referencia o descripcion de la zona (opcional) "
              value={data.reference}
              className="block  mt-2 w-full  h-20 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4  text-gray-700 focus:border-slate-400 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-slate-300 text-sm resize-none"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FormAddres;
