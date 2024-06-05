import { usePetFilterHook } from "@/hooks/useFilterHooks";
import React from "react";
import { ActionTypes } from "@/interfaces/IAction.Types";
//type Props = {};

const FilterForm = () => {
  const { filterOptions, handleResetFilters, dispatch } = usePetFilterHook();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    /**
       esta forma se usaba con el PetFilterHook y el usecontextPet 
     *    setFilterOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
     */

    //nueva forma con el useReducer
    dispatch({
      type: ActionTypes.SET_FILTER_OPTIONS,
      payload: {
        ...filterOptions, // Mantener las opciones de filtro actuales
        [name]: value, // Actualizar solo la opción de filtro específica que se está modificando
      },
    });
  };

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localFilterOptions);
    setFilterOptions(localFilterOptions);
  };
*/

  // Array de razas para perros y gatos
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
  ];

  return (
    <form className="flex flex-col items-start ml-7 gap-1 text-sm">
      <div className="bg-transparent">
        <label className="font-bold mb-1 flex items-start text-slate-700">
          Estado
        </label>
        <div className="flex flex-col gap-1 items-start">
          <label>
            <input
              type="radio"
              name="status"
              value=""
              checked={filterOptions.status === ""}
              onChange={(e) => handleChange(e)}
            />
            <span className="ml-1">Todos</span>
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="adoption"
              checked={filterOptions.status === "adoption"}
              onChange={(e) => handleChange(e)}
            />
            <span className="ml-1">En Adopcion</span>
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="found"
              checked={filterOptions.status === "found"}
              onChange={handleChange}
            />
            <span className="ml-1">Encontrado</span>
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="lost"
              checked={filterOptions.status === "lost"}
              onChange={handleChange}
            />
            <span className="ml-1">Perdido</span>
          </label>
        </div>
      </div>

      <div className="py-2 bg-transparent">
        <label className="font-bold mb-1 flex items-start text-slate-700">
          Animal
        </label>
        <div className="flex flex-col gap-1 items-start">
          <label>
            <input
              type="radio"
              name="species"
              value=""
              checked={filterOptions.species === ""}
              onChange={handleChange}
            />
            <span className="ml-1">Todos</span>
          </label>
          <label>
            <input
              type="radio"
              name="species"
              value="cat"
              checked={filterOptions.species === "cat"}
              onChange={handleChange}
            />
            <span className="ml-1">Gato</span>
          </label>
          <label>
            <input
              type="radio"
              name="species"
              value="dog"
              checked={filterOptions.species === "dog"}
              onChange={handleChange}
            />
            <span className="ml-1">Perro</span>
          </label>
        </div>
      </div>

      <div className="my-1 bg-transparent">
        <label className="font-bold mb-1 flex items-start text-slate-700">
          Tamaño
        </label>
        <div className="flex flex-col gap-1 items-start">
          <label>
            <input
              type="radio"
              name="size"
              value=""
              checked={filterOptions.size === ""}
              onChange={handleChange}
            />
            <span className="ml-1">Todos</span>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="little"
              checked={filterOptions.size === "little"}
              onChange={handleChange}
            />
            <span className="ml-1">Pequeño</span>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="medium"
              checked={filterOptions.size === "medium"}
              onChange={handleChange}
            />
            <span className="ml-1">Mediano</span>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="big"
              checked={filterOptions.size === "big"}
              onChange={handleChange}
            />
            <span className="ml-1">Grande</span>
          </label>
        </div>
      </div>

      <div className="my-2 bg-transparent">
        <label className="font-bold flex items-start mb-1 text-slate-700">
          Género
        </label>
        <div className="flex flex-col gap-1 items-start">
          <label>
            <input
              type="radio"
              name="gender"
              value=""
              checked={filterOptions.gender === ""}
              onChange={handleChange}
            />
            <span className="ml-1">Todos</span>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={filterOptions.gender === "female"}
              onChange={handleChange}
            />
            <span className="ml-1">Hembra</span>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={filterOptions.gender === "male"}
              onChange={handleChange}
            />
            <span className="ml-1">Macho</span>
          </label>
        </div>
      </div>

      <div className="my-2 bg-transparent">
        <label className="font-bold flex items-start mb-1 text-slate-700">
          Raza de animal
        </label>
        <select
          name="breed"
          onChange={(e) => {
            handleChange(e);
          }}
          value={filterOptions.breed}
          className="input input-bordered border-3 border-indigo-300 rounded-lg w-auto md:w-52 text-sm"
        >
          <option value="">Todas</option>
          {breedOptions.sort().map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="">
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
