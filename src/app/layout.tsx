import type { Metadata } from "next";
import PetProvider from "@/context/PetContext";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/Layout/CommonLayout";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Adopta",
  description: "La web para encontrar a tu amigo de 4 patas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="  h-screen w-full m-0 p-0">
      <head>
        <link rel="icon" href="src/app/favicon.ico" sizes="32x32" />
      </head>
      <body className={roboto.className}>
        <PetProvider>
          <CommonLayout>{children}</CommonLayout>
        </PetProvider>
      </body>
    </html>
  );
}
