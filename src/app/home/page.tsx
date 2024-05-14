"use client";
import HomeContainer from "@/containers/HomeContainer";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PetProvider from "@/context/PetContext";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <PetProvider>
          <NavBar />
          {/* Contenido principal */}
          <HomeContainer />
          <Footer />
        </PetProvider>
      </div>
    </>
  );
}
