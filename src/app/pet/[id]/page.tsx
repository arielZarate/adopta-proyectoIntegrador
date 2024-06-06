"use client";

import React, { useEffect, useState } from "react";
import CardDetail from "@/components/CardDetail";
import { useParams } from "next/navigation";
import { getPetById } from "@/services/_PetService";
import { ActionTypes } from "@/interfaces/IAction.Types";
import { usePetContext } from "@/context/PetContext";

const PetDetailPage = () => {
  const { id } = useParams();
  const { detail, dispatch } = usePetContext();

  useEffect(() => {
    if (id) {
      const fetchPet = async () => {
        try {
          const petFound = await getPetById(id as string);
          if (!petFound) {
            throw new Error("Pet not found");
          }
          //  console.log(petFound);

          dispatch({
            type: ActionTypes.SET_PET_DETAIL,
            payload: petFound,
          });
        } catch (error) {
          if (error instanceof Error) console.error(error.message);
        }
      };

      fetchPet();
    }
  }, [id]);
  // console.log(detail);
  return (
    <>
      <CardDetail pet={detail} />
    </>
  );
};

export default PetDetailPage;
