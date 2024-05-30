import React from "react";
import { IPet } from "@/interfaces/IPet";
import Link from "next/link";

type Props = {
  pet: IPet | null;
};
const CardDetail: React.FC<Props> = ({ pet }) => {
  if (!pet) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto my-28 py-0.5 min-h-screen">
        <div className=" border-2  border-gray-300 rounded-lg shadow-lg mx-3">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 w-full p-2 ">
              <img
                src={pet.image.url}
                alt={pet.name}
                className="w-full h-72 md:h-80 object-cover rounded-md "
              />
            </div>
            <div className="p-2 md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {pet.name}
              </h2>
              <p className="text-xl text-gray-600 mb-4">{pet.breed}</p>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-gray-700 mr-2">
                  Gender:
                </span>
                <span className="text-sm text-gray-800">{pet.gender}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-gray-700 mr-2">
                  Status:
                </span>
                <span className="text-sm text-green-500 font-bold">
                  {pet.status}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-gray-700 mr-2">
                  Species:
                </span>
                <span className="text-sm text-gray-800">{pet.species}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-gray-700 mr-2">
                  Size:
                </span>
                <span className="text-sm text-gray-800">{pet.size}</span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Description:
                </h3>
                <p className="text-sm text-gray-800">{pet.description}</p>
              </div>
              <Link href="/home">
                <p className="text-center text-sm font-light underline text-gray-600 hover:text-gray-700 hover:font-semibold rounded-full py-1 px-4 border-2 border-gray-300 hover:border-gray-400 cursor-pointer">
                  Volver
                </p>
              </Link>
            </div>
          </div>

          <div className="font-thin ">
            aca va los datos de la direccion de ubicacion de la mascota
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
