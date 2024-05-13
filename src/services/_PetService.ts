import NEXT_PUBLIC_URL_BASE from "@/utils/config";

export const fetchBackendPets = async () => {
  if (!NEXT_PUBLIC_URL_BASE) {
    console.error(
      "La variable de entorno NEXT_PUBLIC_URL_BASE no está definida."
    );
    return null; // Otra opción podría ser lanzar un error aquí.
  }

  try {
    const res = await fetch(`${NEXT_PUBLIC_URL_BASE}/api/routes/pets`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    return null; // O lanzar el error para manejarlo en el lugar donde se llama a esta función.
  }
};
