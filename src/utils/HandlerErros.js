//========================================
//TODO: menejador de errores
export function handlerError(error) {
  //toma el error y verifica si es de la clase Error generica
  if (error instanceof Error) {
    console.error(error.message);
  }
}
