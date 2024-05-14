"use client";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import avatar from "@/public/assets/avatar2.jpg";

/////////////////////////////////////////

import { Color } from "@/interfaces/IColor";
//////////////////////////////////////////

function NavBar() {
  //==============etates==========
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<Color>("#0f172a");
  const [textColor, setTextColor] = useState<Color>("#FFFFFF");
  const [darkMode, setDarkMode] = useState(false);
  //handlers
  const handleOpen = () => {
    setOpen(!open);
  };

  //===========useEffect=============

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 240) {
        //rgba(15, 23, 42, 0.7)
        //#FFFFFF
        setColor("#FFFFFF");
        setTextColor("#000000");
      } else {
        setColor("#0f172a");
        setTextColor("#FFFFFF");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full  z-10 ease-in duration-300  rounded-b-md"
    >
      {/* header web */}
      <div
        className={`mx-auto max-w-6xl h-16 flex items-center justify-between p-2 `}
        style={{ color: textColor }}
      >
        <Link href="/" className="flex justify-center items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            width={45}
            height={45}
            className="object-contain img"
          />
          {/*  <h3
            // style={{ color: `${textColor}` }}
            className=" font-bold text-md text-primary "
          >
            Mascotas
          </h3>

         */}
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden  sm:flex  items-center justify-center "
        >
          <li>
            <MdDarkMode
              size={30}
              color={darkMode ? "white" : "#229c19"}
              className={`p-1 rounded-full hover:border-2 ${
                darkMode ? "border-white" : "border-[#229c19]"
              } `}
              onClick={toggleDarkMode}
            />
          </li>
          <li>
            <Link href="/" className="p-4">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="p-4">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/#store" className="p-4">
              Tienda
            </Link>
          </li>

          <li className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                //btn btn-ghost btn-circle
                className=" avatar"
              >
                <div className="rounded-full">
                  <Image alt="avatar" src={avatar} width={35} height={35} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="z-[1] p-6 shadow menu menu-sm dropdown-content bg-slate-100 text-black  rounded-box w-52"
              >
                <li>
                  <Link href="#" className="justify-between p-2">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="p-2">
                    Settings
                  </Link>
                </li>

                <li>
                  <Link href="#" className="p-2">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/*=============== Mobile================= */}

        {/* ======mobile button menu======= */}
        <div className="block  sm:hidden z-10" onClick={handleOpen}>
          {/* aca de avcuerdo a si esta abierto o cerrado el drawer se ve un icono o otro */}

          {open ? (
            <AiOutlineClose size={20} color="black" />
          ) : (
            <AiOutlineMenu
              size={25}
              className={`p-1 rounded-full text-[${color}] hover:border-2 border-white `}
            />
          )}
        </div>

        {/*  mobile menu*/}

        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white  text-black text-center ease-in duration-500"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center ease-in duration-500"
          }
        >
          <ul className="">
            <li>
              <Link href="/" className="p-4 text-4xl  hover:text-gray-500">
                Inicio
              </Link>
            </li>
            <li className="m-4">
              <Link
                href="/about"
                className="p-4  text-4xl  hover:text-gray-500"
              >
                Acerca de Nosotros
              </Link>
            </li>
            <li className="m-4">
              <Link
                href="/store"
                className="p-4  text-4xl hover:text-gray-500   "
              >
                Tienda
              </Link>
            </li>
          </ul>
        </div>

        {/* FIN de mobile button */}
      </div>
    </div>
  );
}

export default NavBar;
