export type Color = string; // Definimos un alias para el tipo de color

export interface LayoutColor {
  props: {
    bgColorLayout: Color;
    textColorLayout: Color;
  };
}
