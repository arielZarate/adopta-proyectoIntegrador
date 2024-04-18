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
      {data?.map((p: IPet) => (
        <div className="flex flex-col  m-3" key={p.id}>
          <div className="flex  items-center justify-between">
            <div className=" bg-slate-800 text-white border-2 border-green-500  rounded-lg p-4 ">
              <p>{p.name}</p>
              <p>{p.race}</p>
              <p>{p.age}</p>
              <p>{p.color}</p>
              <p>{p.height}</p>
              <p>{p.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPets;
