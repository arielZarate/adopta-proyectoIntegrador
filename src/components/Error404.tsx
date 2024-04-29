import Image from "next/image";
import { jomhuria } from "@/app/layout";
import perroConfundido from "@/public/assets/perroConfundido.png";
import { TbBackground } from "react-icons/tb";

export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-sans">
      <div className="text-center">
        <div className="mr-8">
          <Image
            src={perroConfundido}
            alt="perroConfundido"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p
          style={{ fontSize: "47px" }}
          className={`${jomhuria.className} text-2xl mb-8`}
        >
          Página no encontrada
        </p>
        <a
          href="/"
          className="inline-block bg-secondary text-slate-900 font-semibold px-6 py-3 rounded-full text-lg transition duration-300 hover:bg-primary hover:text-white"
        >
          Volver a la página de Principal
        </a>
      </div>
    </div>
  );
}
