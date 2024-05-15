import React from "react";
import { IPet } from "@/interfaces/IPet";
type Props = {
  pet: IPet;
};

//ota opcion seria const Card = ({ pet }:Props) => {
const Card: React.FC<Props> = ({ pet }) => {
  return (
    <div className="group relative ">
      <div className="border-2 border-secondary rounded-lg hover:scale-105  hover:border-blue-600 ">
        <h3 className="text-sm text-neutral-500 bg-slate-100 text-center border-2 border-gray-300  py-1.5">
          <span className="font-bold text-base"> {pet.name}</span>
        </h3>

        <div className="px-0 ">
          {/*group-hover:opacity-85  hover:animate-pulse */}
          <div className=" aspect-h-1 aspect-w-1 overflow-hidden   rounded-b-md h-60 w-full md:h-36  lg:h-48  xl:h-52 2xl:h-52 ">
            <img
              src={pet.image.url}
              alt={pet.name}
              // md:h-full md:w-full lg:h-full lg:w-full xl:h-full xl:w-full
              className="h-full w-full object-cover object-center "
            />
          </div>
        </div>

        <div className="flex flex-col mx-1 my-2">
          <div className="flex justify-between text-sm ">
            <div className="">
              <span className=" text-green-500 font-bold ">{pet.status}</span>
            </div>

            <div className="text-gray-900 font-nomal">{pet.gender}</div>
          </div>
          {/*
            <div className="text-gray-900 font-semibold">{pet.size}</div>
            <div className="text-gray-900 font-semibold">{pet.species}</div>
           
         
          */}

          <div className="text-gray-900 font-normal text-[12px]">
            {pet.breed}
          </div>

          {/* <p className="text-sm font-normal text-gray-900">{pet.description}</p> */}

          {/*       <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-sm hover:text-gre">
              mostrar descripcion
            </div>
            <div className="collapse-content">
              <p>{pet.description}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
