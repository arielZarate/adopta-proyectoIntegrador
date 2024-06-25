import React, { useState } from "react";
import { IPet } from "@/interfaces/IPet";
import { usePetContext } from "@/context/PetContext";
import { ActionTypes } from "@/interfaces/IAction.Types";
const usePetForm = () => {
  const [data, setData] = useState<IPet>({
    name: "",
    species: "",
    status: "",
    breed: "",
    gender: "",
    colors: [],
    age: "",
    size: "",
    image: null,
    description: "",
    province: "",
    city: "",
    neighborhood: "",
    reference: "",
  });

  const { dispatch } = usePetContext();

  //=============metodo para actualizar el estado=====================
  const updateData = (name: keyof IPet, value: IPet[keyof IPet]) => {
    //console.log(name, value);

    setData(() => ({
      ...data,
      [name]: value,
    }));
  };

  //=============metodo para actualizar el estado=====================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // console.log(value);
    updateData(name as keyof IPet, value);
  };

  //===================================================================
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Verificar si el color ya está seleccionado
    if (data.colors.includes(value)) {
      // Si el color ya está seleccionado, removerlo del array
      setData((prevState) => ({
        ...prevState,
        colors: prevState.colors.filter((color) => color !== value),
      }));
    } else {
      // Verificar si se ha alcanzado el límite máximo de colores seleccionados
      if (data.colors.length < 2) {
        // Si no se ha alcanzado el límite, agregar el color seleccionado
        setData((prevState) => ({
          ...prevState,
          colors: [...prevState.colors, value],
        }));
      } else {
        // Si se ha alcanzado el límite máximo, puedes manejar una advertencia o lógica adicional aquí
        console.log("Solo se pueden seleccionar hasta dos colores.");
        // También podrías mostrar una alerta o mensaje al usuario si es necesario
      }
    }
  };

  //=============Send Data ======================================
  const SendData = async (formData: FormData) => {
    try {
      console.log("formData", formData);

      const res = await fetch("/api/routes/pets", {
        method: "POST",
        body: formData,
        //no se si hace falta mandar el "contect-type"
        //   headers: { "Content-Type": "multipart/form-data" },
      });

      /*
      if (!res.ok) {
        // throw new Error(`Error: ${res.statusText}`);

        alert(res.statusText);
      }

      const dataOut = await res.json();
      console.log(dataOut);

      return dataOut;
   */
    } catch (error) {
      console.log(error);
    }
  };

  //============ handle submit================
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      //Asi insertamos los elementos al formData
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === "object" && value !== null) {
          formData.append(key, JSON.stringify(value));
        }
      }

      if (data.image?.file) {
        formData.append("image", data.image.file);
      }

      /*
         for (const [key, value] of Object.entries(data)) {
      if (key === "image" && value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }
        
        */

      const newPet = await SendData(formData);

      /**
       if (newPet) {
        dispatch({ type: ActionTypes.ADD_PET, payload: newPet });
      }
     */
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  //======RETURN==========

  return {
    handleSubmit,
    handleColorChange,
    handleChange,
    updateData,
    data,
  };
};

export default usePetForm;
