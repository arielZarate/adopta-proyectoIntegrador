import React, { useState, useEffect } from "react";
import ListPets from "@/components/ListPets";
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <ListPets />
    </>
  );
};

export default Home;
