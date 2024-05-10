import React, { useId } from "react";

interface SearchBarProps {
  color: string;
}

export default function SearchBar() {
  const id = useId();
  return (
    <>
      <div className="text-sm flex flex-col mx-5">
        <label htmlFor={id} className=" text-slate-700 flex items-start mb-1">
          Buscar por nombre
        </label>

        <input
          id={id}
          type="text"
          name="searchbar"
          placeholder="ingrese el nombre de la mascota"
          className={` input input-bordered border-3 border-primary w-auto md:w-56 text-xs `}
        />
      </div>
    </>
  );
}
