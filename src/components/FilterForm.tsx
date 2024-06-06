import { usePetFilterHook } from "@/hooks/useFilterHooks";
import React, { useCallback } from "react";
import { ActionTypes } from "@/interfaces/IAction.Types";

const breedOptions = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Bulldog",
  "Beagle",
  "Poodle",
  "Rottweiler",
  "Yorkshire Terrier",
  "Boxer",
  "Dachshund",
  "Siberian Husky",
  "Great Dane",
  "Doberman Pinscher",
  "Australian Shepherd",
  "Cavalier King Charles Spaniel",
  "Shih Tzu",
  "Pug",
  "Boston Terrier",
  "Shetland Sheepdog",
  "Maltese",
  "Chihuahua",
  "Pomeranian",
  "Miniature Schnauzer",
  "French Bulldog",
  "Border Collie",
  "Cocker Spaniel",
  "Bernese Mountain Dog",
  "Brittany",
  "Havanese",
  "Weimaraner",
  "Pastor Aleman",
  "Pitbull",
  // Razas de gatos
  "Persian",
  "Maine Coon",
  "Siamese",
  "Ragdoll",
  "Sphynx",
  "British Shorthair",
  "Bengal",
  "Abyssinian",
  "Scottish Fold",
  "Birman",
  "Russian Blue",
  "Norwegian Forest Cat",
  "Devon Rex",
  "Oriental",
  "Burmese",
  "American Shorthair",
  "Exotic Shorthair",
  "Siberian",
  "Cornish Rex",
  "Tonkinese",
  "Persa",
  "Siamese",
].sort();

const statusOptions = {
  adoption: "En adopción",
  found: "Encontrado",
  lost: "Perdido",
};

const speciesOptions = {
  cat: "Gato",
  dog: "Perro",
};

const sizeOptions = {
  little: "Pequeño",
  medium: "Mediano",
  big: "Grande",
};

const genderOptions = {
  female: "Hembra",
  male: "Macho",
};

const FilterForm = () => {
  const { filterOptions, handleResetFilters, dispatch } = usePetFilterHook();

  const handleChange = useCallback(
    (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      dispatch({
        type: ActionTypes.SET_FILTER_OPTIONS,
        payload: {
          ...filterOptions,
          [name]: value,
        },
      });
    },
    [dispatch, filterOptions]
  );

  const clearFilter = useCallback(
    (filterName: any) => {
      dispatch({
        type: ActionTypes.SET_FILTER_OPTIONS,
        payload: {
          ...filterOptions,
          [filterName]: "",
        },
      });
    },
    [dispatch, filterOptions]
  );

  return (
    <form className="flex flex-col items-start ml-7 gap-1 text-sm">
      <div className="bg-transparent flex flex-col items-start">
        <label
          htmlFor="status"
          className="font-bold mb-1 flex items-start text-slate-700"
        >
          Estado
        </label>
        <div className="flex flex-col gap-1 items-start">
          {Object.entries(statusOptions).map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="status"
                value={value}
                checked={filterOptions.status === value}
                onChange={handleChange}
                aria-label={`Estado ${label}`}
              />
              <span className="ml-1">{label}</span>
            </label>
          ))}
        </div>
        {filterOptions.status && (
          <button
            type="button"
            className="mt-2 p-1 bg-slate-500 hover:bg-slate-600 text-white font-bold text-xs rounded-lg"
            onClick={() => clearFilter("status")}
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <div className="py-2 bg-transparent">
        <label
          htmlFor="species"
          className="font-bold mb-1 flex items-start text-slate-700"
        >
          Animal
        </label>
        <div className="flex flex-col gap-1 items-start">
          {Object.entries(speciesOptions).map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="species"
                value={value}
                checked={filterOptions.species === value}
                onChange={handleChange}
                aria-label={`Animal ${label}`}
              />
              <span className="ml-1">{label}</span>
            </label>
          ))}
        </div>
        {filterOptions.species && (
          <button
            type="button"
            className="mt-2 p-1 bg-slate-500 hover:bg-slate-600 text-white font-bold text-xs rounded-lg"
            onClick={() => clearFilter("species")}
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <div className="my-1 bg-transparent">
        <label
          htmlFor="size"
          className="font-bold mb-1 flex items-start text-slate-700"
        >
          Tamaño
        </label>
        <div className="flex flex-col gap-1 items-start">
          {Object.entries(sizeOptions).map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="size"
                value={value}
                checked={filterOptions.size === value}
                onChange={handleChange}
                aria-label={`Tamaño ${label}`}
              />
              <span className="ml-1">{label}</span>
            </label>
          ))}
        </div>
        {filterOptions.size && (
          <button
            type="button"
            className="mt-2 p-1 bg-slate-500 hover:bg-slate-600 text-white font-bold text-xs rounded-lg"
            onClick={() => clearFilter("size")}
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <div className="my-2 bg-transparent">
        <label
          htmlFor="gender"
          className="font-bold flex items-start mb-1 text-slate-700"
        >
          Género
        </label>
        <div className="flex flex-col gap-1 items-start">
          {Object.entries(genderOptions).map(([value, label]) => (
            <label key={value}>
              <input
                type="radio"
                name="gender"
                value={value}
                checked={filterOptions.gender === value}
                onChange={handleChange}
                aria-label={`Género ${label}`}
              />
              <span className="ml-1">{label}</span>
            </label>
          ))}
        </div>
        {filterOptions.gender && (
          <button
            type="button"
            className="mt-2 p-1 bg-slate-500 hover:bg-slate-600 text-white font-bold text-xs rounded-lg"
            onClick={() => clearFilter("gender")}
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <div className="my-2 bg-transparent flex flex-col items-start">
        <label
          htmlFor="breed"
          className="font-bold flex items-start mb-1 text-slate-700"
        >
          Raza de animal
        </label>
        <select
          name="breed"
          onChange={handleChange}
          value={filterOptions.breed}
          className="input input-bordered border-3 border-indigo-300 rounded-lg w-auto md:w-52 text-sm"
        >
          <option value="">-</option>
          {breedOptions.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        {filterOptions.breed && (
          <button
            type="button"
            className="mt-2 p-1 bg-slate-500 hover:bg-slate-600 text-white font-bold text-xs rounded-lg"
            onClick={() => clearFilter("breed")}
          >
            Limpiar filtro
          </button>
        )}
      </div>

      <div>
        <button
          type="button"
          className="my-2 p-2 bg-slate-500 hover:bg-slate-600 text-white font-bold text-sm rounded-lg w-52"
          onClick={handleResetFilters}
        >
          Borrar Filtros
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
