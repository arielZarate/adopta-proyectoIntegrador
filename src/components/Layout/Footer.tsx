import Link from "next/link";
import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer footer-center p-10 text-base-content bg-slate-100 max-h-52 max-w-full">
      <nav className="grid md:grid-flow-col grid-flow-col-1 gap-4">
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
        <p className="font-bold mb-7">
          Copyright © 2024 - Todos los derechos reservados por mascotas.org
        </p>
      </aside>
    </footer>
  );
}
