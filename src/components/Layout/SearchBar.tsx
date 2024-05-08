import React, { useId } from "react";

interface SearchBarProps {
  color: string;
}

export default function SearchBar() {
  const id = useId();
  return (
    <>
      <div className="text-sx mx-7">
        {/**
            <label htmlFor={id} className="text-sm text-slate-500">
          Buscar por nombre
        </label>
           */}
        <input
          id={id}
          type="text"
          name="searchbar"
          placeholder="buscar x nombre"
          className={` input input-bordered border-4 border-indigo-300 w-auto md:w-56 `}
        />
      </div>
    </>
  );
}
