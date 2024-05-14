import React from "react";
import { IPet } from "@/interfaces/IPet";
type Props = {
  pet: IPet;
};

//ota opcion seria const Card = ({ pet }:Props) => {
const Card: React.FC<Props> = ({ pet }) => {
  return (
    <div className="group relative">
      <div className="px-3 pt-3 border-2 border-secondary rounded-lg ">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-200 lg:aspect-none group-hover:opacity-90 lg:h-52 ">
          <img
            src={pet.image.url}
            alt={pet.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"
          />
        </div>

        <div className="my-3  flex flex-col">
          <h3 className="text-sm text-gray-900">
            Me llamo <span className="font-bold text-base"> {pet.name}</span>
          </h3>

          <div className="flex flex-col text-sm ">
            <div className="">
              <span className=" text-green-700 font-bold">{pet.status}</span>
            </div>
            <div className="text-gray-900 font-semibold">{pet.size}</div>
            <div className="text-gray-900 font-semibold">{pet.species}</div>
            <div className="text-gray-900 font-semibold">{pet.gender}</div>
            <div className="text-gray-900 font-semibold">{pet.breed}</div>
          </div>
          {/* <p className="text-sm font-normal text-gray-900">{pet.description}</p> */}

          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-sm hover:text-gre">
              mostrar descripcion
            </div>
            <div className="collapse-content">
              <p>{pet.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
