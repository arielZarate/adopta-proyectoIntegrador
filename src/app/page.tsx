"use client";

import Home from "@/containers/home-container";

import { useEffect } from "react";
/*TODO: Esta es la 1era pagina que se ejecuta en el front
  por un tema de que quizas halla una complejidad luego , dejare esta como
  la page App.tsx y dentro de esta creare un contenedor home donde ira todo 
  
  App ==> Home ==> * todas las page 

  */

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
