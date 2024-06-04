"use client";

import React, { useState } from "react";

import ImageUploading, {
  ImageListType,
  ImageType,
} from "react-images-uploading";

//nota aunque en mi caso el numero maximo de imagenes sea 1 , igual lo hago array
type PropsImages = {
  image: ImageType | null;
  setImage: (image: ImageType | null) => void;
};

const FormFile: React.FC<PropsImages> = ({ image, setImage }) => {
  const maxNumber = 1; //maximo numero de imagenes para subir
  // const [imagelocal, setImageLocal] = useState<ImageType | null>();
  const onChange = (
    imageList: ImageType
    // addUpdateIndex: number[] | undefined
  ) => {
    if (imageList.length > 0) {
      setImage(imageList[0]);
    } else {
      setImage(null);
    }
  };

  return (
    <>
      <ImageUploading
        multiple //multiple images
        value={image ? [image] : []}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={
                isDragging
                  ? { color: "red", fontWeight: "bold", fontSize: "15px" }
                  : {
                      color: "#7c761b",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }
              }
              {...(isDragging ? dragProps : {})}
              onClick={onImageUpload}
              {...dragProps}
              className="border-2 border-blue-500 rounded-md px-4 py-7 w-64"
            >
              {isDragging ? "arrastrando imagen" : "Subir o arrastrar Imagen"}
            </button>
            &nbsp;
            {/*  <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {errors && (
              <div className="font-semibold text-red-500 text-sm">
                {errors.maxNumber && (
                  <span>Solo puede seleccionar una sola imagen</span>
                )}
                {errors.acceptType && (
                  <span>Tipo invalido seleccione una imagen valida</span>
                )}
                {errors.maxFileSize && <span>Imagen demasiada grande</span>}
                {/*
                {errors.resolution && (
                  <span>
                    Selected file does not match your desired resolution
                  </span>
                )}
               */}
              </div>
            )}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt={index.toString()} width="150" />
                <div className="text-sm font-semibold my-1  ">
                  <button
                    onClick={() => onImageUpdate(index)}
                    className="border-2 border-slate-500 text-green-400 rounded-md p-0.5 mx-0.5 "
                  >
                    Actualizar
                  </button>
                  <button
                    onClick={() => onImageRemove(index)}
                    className="border-2 border-slate-500  text-red-500 rounded-md p-0.5 mx-0.5 "
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  );
};

export default FormFile;
