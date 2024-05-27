import React from "react";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const CommonLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //className="min-h-screen flex flex-col"
  //className="flex-grow"
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
