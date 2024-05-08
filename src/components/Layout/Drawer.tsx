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

  //==============funciones===============================
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
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

          <header className="mt-16 m-0">
            <div
              className={`
          ${isMobile ? "fixed top-36 left-0 h-full z-50 w-96 " : "col-span-1"}
          ${drawer ? "md:block " : "hidden"}
            bg-slate-100 md:w-72 min-h-full text-center font-bold text-2xl rounded-md
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

            <main className="my-10 p-4">
              <ListPets />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawerContent;
