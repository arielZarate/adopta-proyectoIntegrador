import React from "react";
import SearchBar from "./SearchBar";
import FilterForm from "../FilterForm";
import Link from "next/link";
type Props = {};

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start py-5 container  mx-auto">
      <ul className=" text-sm tex-bold text-slate-500 flex flex-col gap-4">
        <li>
          <SearchBar />
        </li>
        <li>
          <FilterForm />
        </li>
      </ul>

      <Link href={`/pet/form`} className="ml-8 my-10">
        <p className="text-sm text-blue-700">Ir a Formulario de Mascotas </p>
      </Link>
    </div>
  );
}
