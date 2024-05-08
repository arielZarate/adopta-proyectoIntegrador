"use client";
import { IPet } from "@/interfaces/IPet";
import Image from "next/image";
import { ContextPet } from "@/context/PetsContext";

//TODO: componente listPets
const ListPets = () => {
  const { listPets } = ContextPet();
  //console.log(listPets);
  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
        {listPets &&
          listPets.map((p: IPet) => (
            <div key={p._id} className="group relative">
              <div className="p-3 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-200 lg:aspect-none group-hover:opacity-90 lg:h-80">
                <img
                  src={p.image.url}
                  alt={p.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex flex-col ">
                <div className="flex justify-between m-1">
                  <h3 className="text-sm text-gray-900 ">{p.name}</h3>
                  <div className="mt-1 text-sm text-slate-500">{p.color}</div>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListPets;
