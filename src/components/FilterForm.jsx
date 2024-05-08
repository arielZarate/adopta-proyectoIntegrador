import React, { useState } from "react";

//type Props = {};

const FilterForm = () => {
  const [filterOptions, setFilterOptions] = useState({
    adoptionStatus: "",
    species: "",
    size: "",
    breed: "",
  });

  const handleAdoptionStatusChange = (e) => {
    setFilterOptions({ ...filterOptions, adoptionStatus: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filterOptions);
  };

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
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start ml-7 gap-1"
    >
      <div className="">
        <label className="text-xl font-bold ">Estado de la mascota</label>
        <div className="flex flex-col gap-1 items-start text-lg">
          <label>
            <input
              type="radio"
              name="adoptionStatus"
              value="adopt"
              onChange={handleAdoptionStatusChange}
            />
            Para Adoptar
          </label>
          <label>
            <input
              type="radio"
              name="adoptionStatus"
              value="found"
              onChange={handleAdoptionStatusChange}
            />
            Encontrados
          </label>
          <label>
            <input
              type="radio"
              name="adoptionStatus"
              value="lost"
              onChange={handleAdoptionStatusChange}
            />
            Perdidos
          </label>
        </div>
      </div>

      <div className="text-lg py-2">
        {/** <label className="text-xl font-bold">Tipo de animal</label> */}
        <select
          name="species"
          onChange={handleChange}
          className="input input-bordered  border-4 border-indigo-300 rounded-lg w-auto md:w-56"
        >
          <option value=""> Tipo de animal</option>
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
        </select>
      </div>

      <div className="my-2">
        <label className="text-xl font-bold ">Tamaño de la mascota</label>
        <div className="flex flex-col gap-1 items-start text-lg">
          <label>
            <input
              type="radio"
              name="sizepet"
              value="small"
              onChange={handleAdoptionStatusChange}
            />
            Pequeño
          </label>
          <label>
            <input
              type="radio"
              name="sizepet"
              value="medium"
              onChange={handleAdoptionStatusChange}
            />
            Mediano
          </label>
          <label>
            <input
              type="radio"
              name="sizepet"
              value="big"
              onChange={handleAdoptionStatusChange}
            />
            Grande
          </label>
        </div>
      </div>

      <div className="my-2 py-3 text-lg">
        {/**  <label>Raza:</label> */}
        <select
          name="breed"
          onChange={handleChange}
          className="input input-bordered  border-4 border-indigo-300 rounded-lg w-auto md:w-56"
        >
          <option value="">Raza de animal</option>
          {breedOptions.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="my-2 p-3 bg-indigo-500 hover:bg-indigo-800 text-white font-bold text-lg rounded-lg w-56"
      >
        Aplicar Filtros
      </button>
    </form>
  );
};

export default FilterForm;
