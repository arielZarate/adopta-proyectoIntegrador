import type { Metadata } from "next";
import { Inter, Roboto, Jomhuria } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className=" text-slate-900 bg-background-color h-screen w-full m-0 p-0"
    >
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
