"use client";

import { IPet } from "@/interfaces/IPet";
import { usePetContext } from "@/context/PetContext";
import { usePetFilterHook } from "@/hooks/PetFiltertHook";
import Loader from "./Loader";

import Card from "./Card";
//TODO: componente listPets
const ListPets = () => {
  let { loading } = usePetContext();
  let { filteredPets } = usePetFilterHook();

  return (
    <>
      <div>
        {loading ? (
          <div className="col-span-full flex justify-center items-center">
            <Loader />
          </div>
        ) : filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
            {filteredPets?.map((p: IPet) => (
              <Card pet={p} key={p._id} />
            ))}
          </div>
        ) : (
          <div className="flex place-content-center w-full  ">
            <h3 className="text-xl font-light ">NO HAY MASCOTAS ENCONTRADAS</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default ListPets;
