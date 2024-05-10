import { URI_PROD, URI_DES } from "@/utils/Global";

//podria usar axios tambien en vez de fetch y configurar las urlbase
export const fetchBackendPets = async () => {
  const res = await fetch(`${URI_DES}/pets`);
  let data = await res.json();
  return data;
};
