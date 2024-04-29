import React from "react";
import imageLanding from "@/public/assets/landing.png";
import logo from "@/public/assets/logo.png";

import Link from "next/link";
import Image from "next/image";

function Landing() {
  const backgroundStyle = {
    backgroundImage: `url(${imageLanding.src})`,
    backgroundColor: "rgb(0, 0, 0,1)",
  };

  return (
    <>
      <div
        className=" min-h-screen min-w-full bg-cover  "
        style={backgroundStyle}
      >
        <header className=" bg-slate-900/70 h-14  w-full flex items-center mx-auto">
          <nav className="flex justify-between w-full">
            {/* Coloca el Link directamente dentro del nav */}
            <Link href="/home" legacyBehavior>
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                className="object-contain img"
              />
            </Link>

            <ul className="flex items-center justify-center text-slate-200 text-md font-bold gap-2 mr-2 ">
              <li className="  hover:text-primary">
                <Link href={"/about"}>Nuestra mision</Link>
              </li>
              <li className=" hover:text-primary">
                <Link href={"#"}>Registro</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="flex  justify-center items-center flex-cols p-6 mt-48">
          <div className="text-center ">
            <h1 className="text-4xl font-bold w-full text-white">
              ¡Encuentra a tu nueva mascota!
            </h1>

            <p
              className="text-slate-300 font-bold mb-4 hover:text-slate-100
            max-w-xl mx-auto"
            >
              Bienvenido a Mascotas, tu destino número uno para encontrar y
              adoptar a tu nueva mascota. En nuestro sitio, te conectamos con
              una amplia variedad de adorables animales que están buscando un
              hogar amoroso y cariñoso 💗
            </p>

            <Link href="/home">
              <button className="border-2 border-slate-300 rounded-full w-30 p-1 text-white hover:cursor-pointer   hover:bg-secondary hover:text-black  hover:font-bold transition ease-in-out delay-150 duration-200 hover:-translate-y-1 ">
                ver mascotas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
