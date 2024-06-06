"use client";

import { IPet } from "@/interfaces/IPet";
import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";

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
      <div className="flex flex-col items-center w-full max-w-lg mx-auto text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
        <MdOutlineCloudUpload
          size={28}
          color="rgb(59 130 246)"
          className="mt-4"
        />

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
            <div className="pb-8">
              <button
                style={
                  isDragging
                    ? { color: "red", fontWeight: "normal", fontSize: "15px" }
                    : {
                        color: `#111827`,
                        fontWeight: "normal",
                        fontSize: "15px",
                      }
                }
                {...(isDragging ? dragProps : {})}
                onClick={onImageUpload}
                {...dragProps}
                className=""
              >
                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200 hover:text-blue-500 duration-150">
                  Subir Imagen
                </h2>

                <p className="text-sm">
                  {isDragging
                    ? "arrastrando imagen"
                    : " Sube o arrastra y suelta tu archivo PNG, JPG o JPEG"}
                </p>
              </button>

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
                <div key={index} className="flex items-center">
                  <img src={image.dataURL} alt={index.toString()} width="150" />
                  <div className="text-sm font-light m-1  ">
                    <button
                      onClick={() => onImageUpdate(index)}
                      className="border border-slate-500 text-slate-900 rounded-md  p-0.5 mx-0.5 hover:bg-blue-500  hover:text-white duration-300 "
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => onImageRemove(index)}
                      className="border border-slate-500  text-slate-900 rounded-md p-0.5 mx-0.5 hover:bg-slate-500  hover:text-white duration-300"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
};

export default FormFile;
