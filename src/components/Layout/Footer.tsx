import Link from "next/link";
import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer footer-center  text-base-content bg-white  max-w-full my-10 pt-14 pb-7 mb-14">
      <nav className="grid md:grid-flow-col grid-flow-col-1 gap-3">
        <Link href={"/about"} className="link link-hover">
          Nosotros
        </Link>
        <Link href="#" className="link link-hover">
          Galeria
        </Link>
        <Link href="#" className="link link-hover">
          Donar
        </Link>
        <Link href="#" className="link link-hover">
          Registro
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href={""}>
            <FaTwitter size={30} className="hover:text-cyan-700 p-0" />
          </Link>

          <Link href={""}>
            <FaInstagram size={30} className="hover:text-pink-700 p-0" />
          </Link>
          <Link href={""}>
            <FaFacebook size={30} className="hover:text-blue-700 p-0" />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="font-bold mb-2">
          Copyright © 2024 - Todos los derechos reservados por
          www.petcomunitary.com
        </p>

        <p className="text-sm mb-7 font-normal font-sans">
          created by developer FullStack{" "}
          <span className=" ">
            <Link
              href={`https://github.com/arielZarate/arielZarate `}
              className="text-cyan-700 hover:text-cyan-400 hover:underline "
              target="_blank"
            >
              Ariel Zarate
            </Link>
          </span>
        </p>
      </aside>
    </footer>
  );
}
