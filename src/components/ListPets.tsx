"use client";
import { IPet } from "@/interfaces/IPet";
import React, { useEffect, useState } from "react";
import { fetchBackendPets } from "@/services/_PetService";

//TODO: componente listPets
const ListPets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function MontData() {
      let response = await fetchBackendPets();
      // console.log(response);
      setData(response);
    }
    MontData();
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {data.map((pet: IPet) => (
          <div
            key={pet._id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-2"
          >
            <div className="bg-gray-400 text-black border-2 border-green-500 rounded-lg p-4">
              <img
                src={pet.image.url}
                alt={pet.name}
                className="w-full h-auto mb-4"
              />
              <p>ID: {pet._id}</p>
              <p>Name: {pet.name}</p>
              <p>Species: {pet.species}</p>
              <p>Breed: {pet.breed}</p>
              <p>Gender: {pet.gender}</p>
              <p>Color: {pet.color}</p>
              <p>Age: {pet.age}</p>
              <p>Height: {pet.height}</p>
              <p>Description: {pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPets;

/**
 * 
   {data &&
          data.map((p: IPet) => (
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-2">
              <div
                key={p._id}
                className=" bg-gray-400  text-black border-2 border-green-500  rounded-lg p-4 "
              >
                <p>{p._id}</p>
                <p>{p.name}</p>
                <p>{p.race}</p>
                <p>{p.age}</p>
                <p>{p.color}</p>
                <p>{p.height}</p>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
 */
