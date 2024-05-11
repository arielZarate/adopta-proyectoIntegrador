import URL_BASE from "@/utils/config";

//podria usar axios tambien en vez de fetch y configurar las urlbase
export const fetchBackendPets = async () => {
  const res = await fetch(`${URL_BASE}/api/routes/pets`);
  let data = await res.json();

  return data;
};
