"use client";
import DrawerContainer from "@/components/Layout/DrawerContainer";
import CommonLayout from "@/components/Layout/CommonLayout";
export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Contenido principal */}

        <DrawerContainer />
      </div>
    </>
  );
}
