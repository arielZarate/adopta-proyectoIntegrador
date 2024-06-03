"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathName = usePathname();
  const isLanding = pathName === "/"; //el landing page esta en la ruta home o  '/'
  //console.log(pathName);

  return (
    <div>
      {!isLanding && <NavBar />}
      <div>{children}</div>
      {!isLanding && <Footer />}
    </div>
  );
};

export default CommonLayout;
