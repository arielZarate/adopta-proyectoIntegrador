import React, { useState } from "react";
import HomeContainer from "@/containers/HomeContainer";

import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        {/* Contenido principal */}
        <HomeContainer />
        <Footer />
      </div>
    </>
  );
}
