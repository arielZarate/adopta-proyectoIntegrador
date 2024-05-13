import NEXT_PUBLIC_URL_BASE from "@/utils/config";

console.log(process.env.NODE_ENV);
//podria usar axios tambien en vez de fetch y configurar las urlbase
export const fetchBackendPets = async () => {
  const res = await fetch(`${NEXT_PUBLIC_URL_BASE}/api/routes/pets`);
  let data = await res.json();

  return data;
};
