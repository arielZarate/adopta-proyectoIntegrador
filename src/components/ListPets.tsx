"use client";
import { IPet } from "@/interfaces/IPet";
import Image from "next/image";
import { ContextPet } from "@/context/PetsContext";
import Card from "./Card";
//TODO: componente listPets
const ListPets = () => {
  const { listPets } = ContextPet();
  //console.log(listPets);
  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
        {listPets && listPets.map((p: IPet) => <Card pet={p} key={p._id} />)}
      </div>
    </>
  );
};

export default ListPets;
