"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

//componentes
import Sidebar from "@/components/Layout/Sidebar";
import List from "../List";

//
function DrawerContainer() {
  //==============================================
  const [isMobile, setIsMobile] = useState(false);
  const [openDrawer, setopenDrawer] = useState(false);

  //==============funciones===============================
  const toggleDrawer = () => {
    setopenDrawer(!openDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      //antes 768 es para probar
      /*
           setIsMobile(window.innerWidth <= 640);
      if (window.innerWidth <= 768) {
        setopenDrawer(false);
      } else {
        setopenDrawer(true);
      }
    */

      //cambio de logica
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setopenDrawer(!mobile);
    };

    handleResize(); //debe ejecutarse cuando inicia la pagina si o si
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  //==========return===========
  return (
    <>
      <div className="container min-h-screen my-32 mx-auto">
        {/** div del grid principal*/}
        <div className={`grid md:grid-cols-4 `}>
          {/*sidebar */}
          <header className="mt-10 mx-auto">
            <div
              className={`
          ${
            isMobile ? "fixed top-36 left-0 h-full z-10 w-11/12" : "col-span-1 "
          }
          ${openDrawer ? "md:block " : "hidden"}
            bg-background-color min-h-full text-center font-bold text-2xl rounded-md
            
          `}
            >
              <nav className={`min-h-full z-30`}>
                <Sidebar />
              </nav>
            </div>

            <div
              className="fixed top-24 left-10 flex items-center"
              style={{ zIndex: "1" }}
            >
              <button
                onClick={toggleDrawer}
                className="border-2 border-[#716D6D] rounded-full p-1 flex items-center"
              >
                {openDrawer ? (
                  <IoIosArrowBack
                    size={20}
                    color="#716D6D"
                    className="font-bold"
                  />
                ) : (
                  <IoIosArrowForward size={20} color="#716D6D" />
                )}
              </button>
              <span className="ml-1 text-slate-700 font-bold">Filtros</span>
            </div>
          </header>
          {/**main contenido */}

          <div
            className={`col-span-4
            ${openDrawer ? "md:col-span-3 " : ""}`}
          >
            <main
              className={` ${openDrawer ? "md:mt-2" : "md:-mt-4"}mb-10  p-4`}
            >
              <div
                className={` ${
                  openDrawer && isMobile ? "bg-white opacity-10" : ""
                }
                  `}
              >
                <div
                  className={`relative ${
                    isMobile && openDrawer ? "fixed" : ""
                  }`}
                >
                  <List />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawerContainer;
