import React, { useId } from "react";
import { usePetFilterHook } from "@/hooks/PetFiltertHook";

export const SearchBar = () => {
  const { searchByName, filterOptions } = usePetFilterHook();
  const id = useId();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // console.log(value);
    searchByName(value);
    // setFilterOptions({ [name]: "" });
  };
  return (
    <>
      <div className="text-sm flex flex-col mx-5">
        <label htmlFor={id} className=" text-slate-700 flex items-start mb-1">
          Buscar por nombre
        </label>

        <input
          id={id}
          type="text"
          name="name"
          placeholder="ingrese el nombre de la mascota"
          className={` input input-bordered ring-2 ring-offset-1  border-2 border-indigo-400  ring-indigo-400 w-auto md:w-56 text-xs bg-transparent`}
          onChange={handleChangeName}
          value={filterOptions.name}
        />
      </div>
    </>
  );
};

export default SearchBar;
