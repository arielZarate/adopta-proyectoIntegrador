"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

//componentes
import Sidebar from "@/components/Layout/Sidebar";
import ListPets from "../ListPets";

function DrawerContent() {
  //==============================================
  const [drawer, setDrawer] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  //==============funciones===============================
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    const handleResize = () => {
      //antes 768 es para probar
      setIsMobile(window.innerWidth <= 780);
      if (window.innerWidth <= 780) {
        setDrawer(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawer]);

  //==========return===========
  return (
    <>
      <div className="container min-h-screen my-32 mx-auto">
        {/** div del grid principal*/}
        <div className={`grid md:grid-cols-4 mx-1`}>
          {/*sidebar */}

          <header className="mt-10 ">
            <div
              className={`
          ${isMobile ? "fixed top-36 left-0 h-full z-50 w-96 " : "col-span-1"}
          ${drawer ? "md:block " : "hidden"}
            bg-background-color md:w-64 min-h-full text-center font-bold text-2xl rounded-md
             transition ease-in-out delay-150 duration-500
            `}
            >
              <nav className={`min-h-full`}>
                <Sidebar />
              </nav>
            </div>

            <button
              onClick={toggleDrawer}
              className="text-black fixed top-24 left-10 z-50  border-2 border-primary rounded-full p-1"
            >
              {drawer ? (
                <IoIosArrowBack size={30} className="" />
              ) : (
                <IoIosArrowForward size={30} className="" />
              )}
            </button>
          </header>

          {/**main contenido */}

          <div
            className={`col-span-4
            ${drawer ? "md:col-span-3" : ""}`}
          >
            <div
              className={`col-span-4 ${drawer ? "md:col-span-3 " : ""} ${
                isMobile ? "backdrop-filter backdrop-blur-md" : ""
              }`}
            ></div>

            <main
              className={` ${drawer ? " md:mt-2" : "md:-mt-4"}    mb-10  p-4 `}
            >
              <ListPets />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawerContent;
