"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

//componentes
import Sidebar from "@/components/Layout/Sidebar";
import ListPets from "../ListPets";

//
function DrawerContent() {
  //==============================================
  const [openDrawer, setopenDrawer] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  //==============funciones===============================
  const toggleDrawer = () => {
    setopenDrawer(!openDrawer);
  };

  useEffect(() => {
    const handleResize = () => {
      //antes 768 es para probar
      setIsMobile(window.innerWidth <= 640);
      if (window.innerWidth <= 768) {
        setopenDrawer(false);
      } else {
        setopenDrawer(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openDrawer]);

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

            <button
              onClick={toggleDrawer}
              className={` fixed top-24 left-10  border-2 border-cyan-500 rounded-full p-1
              `}
              style={{ zIndex: "1" }}
            >
              {openDrawer ? (
                <IoIosArrowBack size={20} color="cyan" />
              ) : (
                <IoIosArrowForward size={20} color="cyan" />
              )}
            </button>
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
                  <ListPets />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawerContent;
