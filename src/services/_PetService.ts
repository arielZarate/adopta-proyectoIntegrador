import { URI_BASE_BACKEND } from "@/utils/Global";

//podria usar axios tambien en vez de fetch y configurar las urlbase
export const fetchBackendPets = async () => {
  const res = await fetch(`http://localhost:3000/api/routes/pets/`);
  let data = await res.json();
  return data;
};
