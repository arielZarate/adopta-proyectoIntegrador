import { FaCat, FaDog } from "react-icons/fa";

export const speciesOptions = [
  { value: "dog", name: "Perro", icon: "🐶" },
  { value: "cat", name: "Gato", icon: "😺" },
];

export const statusOptions = [
  { value: "adoption", name: "Adopción" },
  { value: "found", name: "Encontrado" },
  { value: "lost", name: "Perdido" },
];

export const genderOptions = [
  { value: "male", name: "Macho" },
  { value: "female", name: "Hembra" },
];

export const ageOptions = [
  { value: "young", name: "0-2 años" },
  { value: "adult", name: "3-7 años" },
  { value: "senior", name: "8+ años" },
];

export const sizeOptions = [
  { value: "little", name: "Pequeño" },
  { value: "medium", name: "Mediano" },
  { value: "big", name: "Grande" },
];
export const breedOptions = {
  dog: [
    { value: "unknown", name: "Desconocido/Callejero" },
    { value: "labrador_retriever", name: "Labrador Retriever" },
    { value: "german_shepherd", name: "German Shepherd" },
    { value: "golden_retriever", name: "Golden Retriever" },
    { value: "bulldog", name: "Bulldog" },
    { value: "beagle", name: "Beagle" },
    { value: "poodle", name: "Poodle" },
    { value: "rottweiler", name: "Rottweiler" },
    { value: "yorkshire_terrier", name: "Yorkshire Terrier" },
    { value: "boxer", name: "Boxer" },
    { value: "dachshund", name: "Dachshund" },
    { value: "siberian_husky", name: "Siberian Husky" },
    { value: "great_dane", name: "Great Dane" },
    { value: "doberman_pinscher", name: "Doberman Pinscher" },
    { value: "australian_shepherd", name: "Australian Shepherd" },
    {
      value: "cavalier_king_charles_spaniel",
      name: "Cavalier King Charles Spaniel",
    },
    { value: "shih_tzu", name: "Shih Tzu" },
    { value: "pug", name: "Pug" },
    { value: "boston_terrier", name: "Boston Terrier" },
    { value: "shetland_sheepdog", name: "Shetland Sheepdog" },
    { value: "maltese", name: "Maltese" },
    { value: "chihuahua", name: "Chihuahua" },
    { value: "pomeranian", name: "Pomeranian" },
    { value: "miniature_schnauzer", name: "Miniature Schnauzer" },
    { value: "french_bulldog", name: "French Bulldog" },
    { value: "border_collie", name: "Border Collie" },
    { value: "cocker_spaniel", name: "Cocker Spaniel" },
    { value: "bernese_mountain_dog", name: "Bernese Mountain Dog" },
    { value: "brittany", name: "Brittany" },
    { value: "havanese", name: "Havanese" },
    { value: "weimaraner", name: "Weimaraner" },
    { value: "pastor_aleman", name: "Pastor Alemán" },
    { value: "pitbull", name: "Pitbull" },
  ],
  cat: [
    { value: "unknown", name: "Desconocido/Callejero" },
    { value: "persian", name: "Persian" },
    { value: "maine_coon", name: "Maine Coon" },
    { value: "siamese", name: "Siamese" },
    { value: "ragdoll", name: "Ragdoll" },
    { value: "sphynx", name: "Sphynx" },
    { value: "british_shorthair", name: "British Shorthair" },
    { value: "bengal", name: "Bengal" },
    { value: "abyssinian", name: "Abyssinian" },
    { value: "scottish_fold", name: "Scottish Fold" },
    { value: "birman", name: "Birman" },
    { value: "russian_blue", name: "Russian Blue" },
    { value: "norwegian_forest_cat", name: "Norwegian Forest Cat" },
    { value: "devon_rex", name: "Devon Rex" },
    { value: "oriental", name: "Oriental" },
    { value: "burmese", name: "Burmese" },
    { value: "american_shorthair", name: "American Shorthair" },
    { value: "exotic_shorthair", name: "Exotic Shorthair" },
    { value: "siberian", name: "Siberian" },
    { value: "cornish_rex", name: "Cornish Rex" },
    { value: "tonkinese", name: "Tonkinese" },
    { value: "persa", name: "Persa" },
  ],
};

/*

v1

export const colorOptions = [
  { id: 1, name: "Negro" },
  { id: 2, name: "Blanco" },
  { id: 3, name: "Marrón" },
  { id: 4, name: "Gris" },
  { id: 5, name: "Dorado" },
  { id: 6, name: "Amarillo" },
  { id: 7, name: "Naranja" },
  { id: 8, name: "Beige" },
  { id: 9, name: "Canela" },
  { id: 10, name: "Crema" },
  { id: 11, name: "Plateado" }, // Color plateado
  { id: 12, name: "Azul" }, // Color azul
];

*/

export const colorOptions = [
  { id: 1, name: "Negro", color: "black" },
  { id: 2, name: "Blanco", color: "white" },
  { id: 3, name: "Marrón", color: "#B45F06" },
  { id: 4, name: "Gris", color: "gray" },
  //{ id: 5, name: "Rojizo", color: "#FF0000" },
  { id: 6, name: "Amarillo", color: "#FFD300" },
  { id: 7, name: "Naranja", color: "#FFA500." },
  { id: 8, name: "Beige", color: "#F5F5DC" },
  { id: 9, name: "Canela", color: "#BD8A3E" },
  { id: 10, name: "Crema", color: "#F8DE7E" },
  { id: 11, name: "Plateado", color: "#BEBEBE" }, // Color plateado
  { id: 12, name: "Marron oscuro", color: "#804000" }, // Color azul
];

export const provinces = [
  { id: 1, name: "Buenos Aires" },
  { id: 2, name: "CABA" },
  { id: 3, name: "Catamarca" },
  { id: 4, name: "Chaco" },
  { id: 5, name: "Chubut" },
  { id: 6, name: "Córdoba" },
  { id: 7, name: "Corrientes" },
  { id: 8, name: "Entre Ríos" },
  { id: 9, name: "Formosa" },
  { id: 10, name: "Jujuy" },
  { id: 11, name: "La Pampa" },
  { id: 12, name: "La Rioja" },
  { id: 13, name: "Mendoza" },
  { id: 14, name: "Misiones" },
  { id: 15, name: "Neuquén" },
  { id: 16, name: "Río Negro" },
  { id: 17, name: "Salta" },
  { id: 18, name: "San Juan" },
  { id: 19, name: "San Luis" },
  { id: 20, name: "Santa Cruz" },
  { id: 21, name: "Santa Fe" },
  { id: 22, name: "Santiago del Estero" },
  { id: 23, name: "Tierra del Fuego" },
  { id: 24, name: "Tucumán" },
];
