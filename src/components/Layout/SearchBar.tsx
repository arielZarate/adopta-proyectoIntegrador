import React from "react";

interface SearchBarProps {
  color: string;
}

export default function SearchBar({ color }: SearchBarProps) {
  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="buscar.."
          className={` input input-bordered ring-2 ring-primary w-auto md:w-96`}
          style={{ color: color }}
        />
      </div>
    </>
  );
}
