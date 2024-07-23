import React, { useState } from "react";
import { IPetFront } from "@/interfaces/IPet";
import { usePetContext } from "@/context/PetContext";
import { ActionTypes } from "@/interfaces/IAction.Types";

const usePetForm = () => {
  const [data, setData] = useState<IPetFront>({
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
  const updateData = (
    name: keyof IPetFront,
    value: IPetFront[keyof IPetFront]
  ) => {
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
    updateData(name as keyof IPetFront, value);
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
  const sendForm = async (formData: FormData) => {
    try {
      const res = await fetch("/api/routes/pets", {
        method: "POST",
        body: formData,
        // headers: { "Content-Type": "multipart/form-data" },
      });

      if (!res.ok) {
        alert(res.statusText);
      }

      const dataOut = await res.json();
      return dataOut;
    } catch (error) {
      console.log(error);
    }
  };

  //============ handle submit================
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      // Agrega los campos de datos
      for (const [key, value] of Object.entries(data)) {
        if (key === "image" && value) {
          // Agrega la imagen como Blob
          formData.append("image", value.file as Blob);
          //console.log("imagen ", value.file as Blob);
        } else {
          // Agrega los demás campos como texto
          formData.append(key, value as string);
        }
      }

      // Recorrer los datos de FormData
      /** for (const [key, value] of formData.entries()) {
        // `value` puede ser un `File` u otro tipo de datos
        if (value instanceof File) {
          console.log(key, value); // Muestra el nombre del archivo
        } else {
          console.log(key, value);
        }
      } */

      //console.log("data", data);
      const dataOut = await sendForm(formData);
      console.log("console log hooks: ", dataOut);
      return dataOut;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
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
