import React from "react";
import SearchBar from "./SearchBar";
import FilterForm from "../FilterForm";
type Props = {};

export default function Sidebar() {
  return (
    <div className="flex flex-col items-start py-5">
      <ul className=" text-sm tex-bold text-slate-500 flex flex-col gap-4">
        <li>
          <SearchBar />
        </li>
        <li>
          <FilterForm />
        </li>
      </ul>
    </div>
  );
}
