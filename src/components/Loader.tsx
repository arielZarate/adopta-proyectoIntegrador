"use client";
import React from "react";
import Image from "next/image";

//puede seleccionar el spainer que mas le guste
import {
  ImSpinner,
  ImSpinner5,
  ImSpinner11,
  ImSpinner10,
} from "react-icons/im";

const Loader = () => {
  return (
    <div className="animate-spin ">
      <ImSpinner
        className="text-slate-900 bg-gradient-to-r from-slate-200 to-slate-400 rounded-full animate-spin-300"
        size={35}
        color=""
      />
    </div>
  );
};

export default Loader;
