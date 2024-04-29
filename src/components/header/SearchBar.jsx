import React from "react";

export default function SearchBar({ props }) {
  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="buscar.."
          className={` input input-bordered ring-2 ring-primary w-auto md:w-96 `}
          style={{ color: props.color }}
        />
      </div>
    </>
  );
}
