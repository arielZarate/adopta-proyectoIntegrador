"use client";
import HomeContainer from "@/containers/HomeContainer";
import NavBar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PetsProvider from "@/context/PetsContext";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <PetsProvider>
          <NavBar />
          {/* Contenido principal */}
          <HomeContainer />
          <Footer />
        </PetsProvider>
      </div>
    </>
  );
}
