import React from "react";

import ListPets from "@/components/ListPets";
import NavBar from "@/components/header/Navbar";
import Footer from "@/components/Footer";
const HomeContainer = () => {
  //TODO: esta es la pagina principal donde yo tengo la estructura principal
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Encabezado */}
        <header>
          <NavBar />
        </header>

        {/* Contenido principal */}
        <main className="min-h-screen overflow-y-auto ">
          {/* Aquí establecemos una altura mínima y permitimos el desplazamiento vertical */}

          <ListPets />
        </main>

        {/* Pie de página */}
        <footer className="mt-10">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default HomeContainer;
