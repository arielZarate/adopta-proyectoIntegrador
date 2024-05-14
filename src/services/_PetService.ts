export const fetchBackendPets = async () => {
  try {
    const res = await fetch(`/api/routes/pets`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    return null; // O lanzar el error para manejarlo en el lugar donde se llama a esta función.
  }
};

export const getPetByName = async (name: string) => {
  try {
    //http://localhost:3000/api/routes/pets?search=Ro
    const res = await fetch(`/api/routes/pets?search=${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener dato de la API:", error);
    return null; // O lanzar el error para manejarlo en el lugar donde se llama a esta función.
  }
};
