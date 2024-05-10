import { ContextPet } from "@/context/PetsContext";
import React, { useState } from "react";

//type Props = {};

const FilterForm = () => {
  const { filterOptions, setFilterOptions } = ContextPet();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilterOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    // Aplicar los filtros vacíos para mostrar todos los resultados
    setFilterOptions({
      status: "",
      species: "",
      size: "",
      gender: "",
      breed: "",
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
      <div className="">
        <label className=" font-bold mb-1 flex items-start text-slate-700">
          Estado
        </label>
        <div className="flex flex-col gap-1 items-start ">
          <label>
            <input
              type="radio"
              name="status"
              value="adoption"
              checked={filterOptions.status === "adoption"}
              onChange={handleChange}
            />
            En Adopcion
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="found"
              checked={filterOptions.status === "found"}
              onChange={handleChange}
            />
            Encontrado
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="lost"
              checked={filterOptions.status === "lost"}
              onChange={handleChange}
            />
            Perdido
          </label>
        </div>
      </div>

      <div className=" py-2">
        <label className=" font-bold mb-1 flex items-start  text-slate-700">
          Animal
        </label>
        <div className="flex gap-5 text-sm">
          <label>
            <input
              type="radio"
              name="species"
              value="cat"
              checked={filterOptions.species === "cat"}
              onChange={handleChange}
            />
            Gato
          </label>
          <label>
            <input
              type="radio"
              name="species"
              value="dog"
              checked={filterOptions.species === "dog"}
              onChange={handleChange}
            />
            Perro
          </label>
        </div>
      </div>

      <div className="my-1">
        <label className="font-bold mb-1  flex items-start  text-slate-700">
          Tamaño
        </label>
        <div className="flex flex-col gap-1 items-start ">
          <label>
            <input
              type="radio"
              name="size"
              value="little"
              onChange={handleChange}
              checked={filterOptions.size === "little"}
            />
            Pequeño
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="medium"
              onChange={handleChange}
              checked={filterOptions.size === "medium"}
            />
            Mediano
          </label>
          <label className="">
            <input
              type="radio"
              name="size"
              value="big"
              onChange={handleChange}
              checked={filterOptions.size === "big"}
            />
            Grande
          </label>
        </div>
      </div>

      <div className="my-2 ">
        <label className="font-bold flex items-start mb-1 text-slate-700">
          Genero
        </label>
        <div className="flex gap-5 text-sm">
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={filterOptions.gender === "female"}
            />
            Hembra
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={filterOptions.gender === "male"}
            />
            Macho
          </label>
        </div>
      </div>

      <div className=" ">
        <select
          name="breed"
          onChange={handleChange}
          value={filterOptions.breed}
          className="input input-bordered  border-3 border-indigo-300 rounded-lg w-auto md:w-52 text-sm"
        >
          <option value="" className="text-base">
            Raza de animal
          </option>
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
